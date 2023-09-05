require("dotenv/config");

const { env } = process

const config = {
    port: env.PORT,
    jwt: env.JWT
};

module.exports = config;