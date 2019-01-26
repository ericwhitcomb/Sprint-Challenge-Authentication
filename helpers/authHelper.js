const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;

module.exports = {
    generateToken: (username) => {
        const payload = {
            username: username
        }
        const secret = jwtKey;
        const options = {
            expiresIn: '1h',
            jwtid: '12345'
        }
        return jwt.sign(payload, secret, options);
    }
};