import { verify } from 'jsonwebtoken';

const auth = (fn) => async (req, res) => {
  const { cookies, method, url } = req;
  if (method === 'POST' && url === '/api/auth') {
    return await fn(req, res);
  }
  try {
    verify(cookies.auth, process.env.jwtSecret, async (err, decoded) => {
      if (!err && decoded) {
        req.user = decoded.user;
        return await fn(req, res);
      }
      return res.status(401).json({ msg: 'No token, authorization denied' });
    });
  } catch (error) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
export default auth;

// const auth = (fn) => async(req, res) => {
//   // Get token from header
//   const token = req.headers['x-auth-token'];

//   // Check if not token
//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.jwtSecret);
//     req.user = decoded.user;
//     return await fn(req, res);

//   } catch (err) {
//     res.status(401).json({ msg: 'token is not valid' });
//   }
// };
// export default auth;
