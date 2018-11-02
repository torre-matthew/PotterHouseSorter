var express = require("express");

var router = express.Router();

let needsSorting = require("../models/phsmodel.js");

let getAllResultsFromDB = (req, res) => {
    needsSorting.getAll(function(data) {
        console.log(data);
        res.json(data);
    });
}

router.get("/api/sorting", getAllResultsFromDB);

module.exports = router;

