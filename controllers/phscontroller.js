var express = require("express");

var router = express.Router();

let needsSorting = require("../models/phsmodel.js");

let getAllResultsFromDB = (req, res) => {
    needsSorting.getAll(function(data) {
        res.json(data);
    });
}

let getAllUnsorted = (req, res) => {
    needsSorting.getAllUnsorted(function(data) {
        res.json(data);
    });
}

let getAllSorted = (req, res) => {
    needsSorting.getAllSorted(function(data) {
        res.json(data);
    });
}

let getAllByHouse = (req, res) => {
    needsSorting.getAllByHouse(req.params.house, function(data) {
        res.json(data);
    });
}

let addName = (req, res) => {
    needsSorting.add(req.params.name, function(data) {
        res.json(data);
    });
}

let addToHouse = (req, res) => {
    needsSorting.addToHouse(req.params.id, req.body.house, function(data) {
        res.json(data);
    });
}

let softDelete = (req, res) => {
    needsSorting.delete(req.params.id, function(data) {
        res.json(data);
    });
}


router.get("/api/unsorted", getAllUnsorted);
router.get("/api/sorted", getAllSorted);
router.get("/api/alldata", getAllResultsFromDB);
router.get("/api/:house", getAllByHouse);
router.post("/api/:name", addName);
router.put("/api/:id", addToHouse);
router.put("/api/deleted/:id", softDelete);


module.exports = router;

