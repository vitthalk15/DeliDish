import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not authorized login again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "ERROR!" });
  }
};
export default authMiddleware;

//the middleware convert the token in to userId.
