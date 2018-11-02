// Import MySQL connection.
var connection = require("../config/connection.js");

let getAllFromDB = (table, cb) => {
    let queryString = "select * from " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let addPersonToDB = (name, cb) => {
    let queryString = "insert into sortings (name);";
        connection.query(queryString, name, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let addToHouse = (name, cb) => {
    let queryString = "insert into sortings (name);";
        connection.query(queryString, name, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let orm = {
    getall: getAllFromDB,
    add: addPersonToDB,

}

module.exports = orm;