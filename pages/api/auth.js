import auth from '../../server/middleware/auth';
import connectDB from '../../server/config/db';
import cookie from 'cookie';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { loginValidation } from '../../server/Validation';

import User from '../../server/models/User';

export default auth(async (req, res) => {
  await connectDB();

  const { method } = req;

  if (method === 'POST') {
    // @route   GET api/auth
    // @desc    Get logged in user
    // @access  Private
    const { error } = loginValidation(req.body);

    if (error) return res.status(400).json({ msg: error.details[0].message });

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      compare(password, user.password, (err, result) => {
        if (!err && result) {
          const payload = {
            user: {
              id: user.id,
            },
          };

          const jwt = sign(payload, process.env.jwtSecret, {
            expiresIn: 360000,
          });

          res.setHeader(
            'Set-Cookie',
            cookie.serialize('auth', jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: 'strict',
              maxAge: 3600,
              path: '/',
            })
          );

          res.json({ msg: 'Welcome back to the Fun!' });

          // res.json({ token: jwt });
        } else {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }
      });

      // use json token
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    // @route   GET api/auth
    // @desc    Get logged in user
    // @access  Private
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
});
