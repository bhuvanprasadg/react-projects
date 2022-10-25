const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "store",
    password: 9999,
    port: "8080",
});

client.connect();

module.exports = client;