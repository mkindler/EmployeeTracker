const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vegetable",
    database: "employees"
});

connection.connect();

// This will allow the use of promises and the async and awat syntax
connection.query = util.promisify(connection.query);

module.exports = connection;