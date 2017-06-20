const express = require('express');
const router = express.Router();
const request = require("request");


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
            "bikes": JSON.parse(body)
        });
    });
});

module.exports = router;
