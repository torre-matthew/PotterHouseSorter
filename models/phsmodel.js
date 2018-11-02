let orm = require("../config/phsorm.js");

let getAllEntries = (cb) => {
    orm.getall("sortings", function(res) {
        cb(res);
    });
}

let needsSorting = {
    getAll: getAllEntries,
}

module.exports = needsSorting;