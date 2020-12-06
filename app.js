var express = require("express");
var app = express();

// var fs = require("fs");
var csv = require("csvtojson");

const csvFilePath = './data/csvData.csv';

app.get("/api", async function(req, res, next) {
    try {
        const jsonArray = await csv().fromFile(csvFilePath);
        res.json(jsonArray);
    }
    catch {
        next(error);
    }
})

app.use((err, req, res) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });

var server = app.listen(3000, function() {
    console.log("Node.js is listeninig to PORT:" + server.address().port);
})