// import nextConnect from 'next-connect';
// import middleware from '../../server/middleware/database';
import connectDB from '../../server/config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Joi validation
import { registerValidation } from '../../server/Validation';
// User Model
import User from '../../server/models/User';

export default async (req, res) => {
  await connectDB();
  const { method } = req;

  if (method === 'POST') {
    try {
      const { error } = registerValidation(req.body);
      if (error) return res.status(400).json({ msg: error.details[0].message });

      const { userName, email, password } = req.body;

      let user = await User.findOne({ email });

      //   check is user exists
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      // create a new user
      user = new User({
        userName,
        email,
        password,
      });

      // crpt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      // save user
      await user.save();

      res.json({ msg: 'Thank you for signing up ' });

      // const payload = {
      //   user: {
      //     id: user.id,
      //   },
      // };
      // // use json token
      // jwt.sign(
      //   payload,
      //   process.env.jwtSecret,
      //   {
      //     expiresIn: 360000,
      //   },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
    } catch (e) {
      res.status(500).json({ error: e.message || 'something went wrong' });
    }
  }
};
