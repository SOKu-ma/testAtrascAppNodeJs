var express = require('express');
var app = express();

// var fs = require("fs");
var csv = require('csvtojson');

const csvFilePath = './data/csvData.csv';

const port = process.env.port || 8080;

app.get('/api', async (req, res, next) => {
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

var server = app.listen(port, () => {
    console.log('Node.js is listeninig to PORT:' + server.address().port);
})