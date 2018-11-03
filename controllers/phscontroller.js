var express = require("express");

var router = express.Router();

let needsSorting = require("../models/phsmodel.js");

let getAllResultsFromDB = (req, res) => {
    needsSorting.getAll(function(data) {
        console.log(data);
        res.json(data);
    });
}

let getAllUnsorted = (req, res) => {
    needsSorting.getAllUnsorted(function(data) {
        console.log(data);
        res.json(data);
    });
}

let getAllSorted = (req, res) => {
    needsSorting.getAllSorted(function(data) {
        console.log(data);
        res.json(data);
    });
}

let getAllByHouse = (req, res) => {
    needsSorting.getAllByHouse(req.params.house, function(data) {
        console.log(data);
        res.json(data);
    });
}


router.get("/api/unsorted", getAllUnsorted);
router.get("/api/sorted", getAllSorted);
router.get("/api/alldata", getAllResultsFromDB);
router.get("/api/:house", getAllByHouse);

module.exports = router;

