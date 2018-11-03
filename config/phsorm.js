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

let getAllUnSortedFromDB = (table, cb) => {
    let queryString = "select name from " + table + " where sorted = false;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let getAllSortedFromDB = (table, cb) => {
    let queryString = "select name from " + table + " where sorted = true;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let getAllByHouse = (house, cb) => {
    let queryString = "select name from sortings where house = ?";
        connection.query(queryString, [house], function(err, result) {
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
    getallunsorted: getAllUnSortedFromDB,
    getallsorted: getAllSortedFromDB,
    getallbyhouse: getAllByHouse, 
    add: addPersonToDB,

}

module.exports = orm;