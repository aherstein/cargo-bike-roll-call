const express = require('express');
const router = express.Router();
const request = require("request");

function byDateDesc(a, b) {
    let keyA = new Date(a.meta.date);
    let keyB = new Date(b.meta.date);

    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
}

/* GET bike listing. */
router.get('/', function (req, res, next) {
    let options = {
        method: 'GET',
        url: 'http://localhost:3000/api/bikes'
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        res.render('index', {
            title: 'Latest Cargo Bikes',
            "bikes": JSON.parse(body).sort(byDateDesc)
        });
    });
});

module.exports = router;
