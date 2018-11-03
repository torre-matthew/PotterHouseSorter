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




let needsSorting = {
    getAll: getAllEntries,
    getAllUnsorted: getAllUnsorted,
    getAllByHouse: getAllByHouse,
    getAllSorted: getAllSorted,
}

module.exports = needsSorting;