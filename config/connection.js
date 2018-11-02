let mysql = require("mysql");
let sqlPass = require("../config/dbpass");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlPass,
    database: "phs_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;