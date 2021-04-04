// const jwt = require("jsonwebtoken");

import jwt from 'jsonwebtoken';

export const auth  = (req, res, next) => {
  const token = req.header("authorization");
  console.log(req.user);
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {

    const decoded = jwt.verify(token.split(" ")[1], "randomString");
    console.log(decoded.user);
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};