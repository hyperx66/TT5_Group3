const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "s9740499b",
  database: "DBS",
});
module.exports = conn;
