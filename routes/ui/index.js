const express = require('express');
const router = express.Router();
const request = require("request");
const vue = require("vue");

function byDateDesc(a, b) {
    let keyA = new Date(a.meta.date);
    let keyB = new Date(b.meta.date);

    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
}

router.get('/', function (req, res, next) {
    // Get bikes from api
    let options = {
        method: 'GET',
        url: 'http://localhost:3000/api/bikes'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        bikes = JSON.parse(body).sort(byDateDesc);

        // Render vue
        let scope = {
            el: '#bikes-list',
            data: {
                bikes
            },
            vue: {
                meta: {
                    title: 'Latest Bikes',
                }
            }
        };

        res.render('index', scope);
    });
});

/* Add bike page */
router.get('/addbike', function (req, res, next) {
    // Render vue
    let addBikeMixin = {
        methods: {
            addBike: function() {
                alert(this.make + ' ' + this.model + ' added to Cargo Bike Roll Call!');
            }
        }
    };
    let scope = {
        el: '#add-bike',
        data: {
            make: "",
            model: ""
        },
        vue: {
            meta: {
                title: 'Add a Bike',
            },
            mixins: [addBikeMixin]
        }
    };

    res.render('addbike', scope);
});

module.exports = router;
