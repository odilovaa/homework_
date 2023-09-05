const jwt = require("jsonwebtoken");

const config = require("../../config")

const login = async (req, res, next) =>
{
    const token = req.headers.authorization;

    if(!token)
        return res.json9({message: 'INVALID token'});

    jwt.verify(token, config.jwt, (err, data) =>
    {
        if(err)
            return res.json({message: 'you need to register'});

        req.userID = data.id 
        next()
    })
};

module.exports = {login};