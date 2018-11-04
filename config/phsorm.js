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
    let queryString = "select name, id from " + table + " where sorted = false and deleted = false";
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
    let queryString = "select name, id from sortings where house = ?";
        connection.query(queryString, [house], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let addPersonToDB = (name, cb) => {
    let queryString = "insert into sortings set ?";
        connection.query(queryString, {name: name, sorted: false, deleted: false}, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let addToHouse = (id, house, cb) => {
    let queryString = "update sortings set ? where id = " + id;
        connection.query(queryString, {house: house, sorted: true}, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
}

let softDelete = (id, cb) => {
    let queryString = "update sortings set ? where id = " + id;
        connection.query(queryString, {house: null, sorted: false, deleted: true}, function(err, result) {
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
    addperson: addPersonToDB,
    addtohouse: addToHouse,
    delete: softDelete
}

module.exports = orm;