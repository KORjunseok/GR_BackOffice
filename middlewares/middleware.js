const jwt = require('jsonwebtoken');
const verifyToken = (jwt, req, res) => {
  const { authorization } = req.cookies;
  if (!authorization) {
    return res.status(401).json({ message: '인증 정보가 없습니다' });
  }
  const [tokenType, token] = authorization.split(' ');
  if (tokenType !== 'Bearer') {
    return res.status(401).json({ message: '토큰 타입이 일치하지 않습니다.' });
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  return decodedToken;
};
const sitterAuthMiddleWare = async (req, res, next) => {
  try {
    const decodedToken = verifyToken(jwt, req, res);
    if (decodedToken.role === '손님') {
      return res
        .status(401)
        .json({ message: '펫시터 권한이 존재하지 않습니다' });
    }
    const userId = decodedToken.userId;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: '비정상적인 요청입니다.',
    });
  }
};
const guestAuthMiddleWare = async (req, res, next) => {
  try {
    const decodedToken = verifyToken(jwt, req, res);
    const userId = decodedToken.userId;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: '비정상적인 요청입니다.',
    });
  }
};
const authMiddleWare = async (authorization = null) => {
  if (authorization === '싯터') {
    return sitterAuthMiddleWare;
  } else {
    return guestAuthMiddleWare;
  }
};
authMiddleWare();
module.exports = auth;
