var express = require('express');
var app = express();
var csv = require('csvtojson');
var fs = require('fs');

const csvFilePath = './data/csvData.csv';
const port = process.env.port || 8080;

app.get('/', async function (req, res, next) {
        try {
            let text = fs.readFileSync(csvFilePath, 'utf-8');
            // console.log('readFile fin:' + text);
            const jsonArray = await csv().fromFile(csvFilePath);
            res.json(jsonArray);
            // next();
        }
        catch {
            next(console.err);
        }
    })

app.use(function(err, req, res) {
        console.error(err);
        console.log(res.status);
        res.status(500).send('Internal Server Error');
    });

var server = app.listen(port, () => {
    console.log('Node.js is listeninig to PORT:' + server.address().port);
})