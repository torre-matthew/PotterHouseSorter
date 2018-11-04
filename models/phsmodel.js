let orm = require("../config/phsorm.js");

let getAllEntries = (cb) => {
    orm.getall("sortings", function(res) {
        cb(res);
    });
}

let getAllUnsorted = (cb) => {
    orm.getallunsorted("sortings", function(res) {
        cb(res);
    });
}

let getAllSorted = (cb) => {
    orm.getallsorted("sortings", function(res) {
        cb(res);
    });
}

let getAllByHouse = (house, cb) => {
    orm.getallbyhouse(house, function(res) {
        cb(res);
    });
}

let addNameToDB = (name, cb) => {
    orm.addperson(name, function(res) {
        cb(res);
    })
}

let addToHouse = (id, house, cb) => {
    orm.addtohouse(id, house, function(res) {
        cb(res);
    })
}

let softDelete = (id, cb) => {
    orm.delete(id, function(res) {
        cb(res);
    })
}


let needsSorting = {
    getAll: getAllEntries,
    getAllUnsorted: getAllUnsorted,
    getAllByHouse: getAllByHouse,
    getAllSorted: getAllSorted,
    add: addNameToDB,
    addToHouse: addToHouse,
    delete: softDelete
}

module.exports = needsSorting;