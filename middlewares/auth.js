const jwt = require('jsonwebtoken');
const UnauthorizedErr = require('../errors/UnauthorizedErr');

const auth = (req, res, next) => {
console.log(req.header("Authorization"));
    let payload;
try{
const token = req.header("Authorization").split(" ")[1];
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new UnauthorizedErr('Необходима авторизация');
  }
  req.user = payload;
  return next();
};

module.exports = auth;
