var express = require('express')
var router = express.Router()
var config = require('../config.json')

function getGeocoded (location, callback) {
    const request = require('request')

    const options = {
        method: 'GET',
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json',
        qs: {access_token: config.mapboxToken}
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error)

        let geocoded = JSON.parse(body)
        let lat = geocoded.features[0].center[0]
        let long = geocoded.features[0].center[1]

        callback(lat, long)
    })
}

/* GET bikes */
router.get('/', function (req, res) {
    const db = req.db
    const collection = db.get('bikes')
    collection.find({}, {}, function (e, docs) {
        res.json(docs) // Render the results in JSON format
    })
})

/* POST bike */
router.post('/', function (req, res) {
    const db = req.db
    const collection = db.get('bikes')

    bike = req.body

    if (bike.make === null || bike.make === '' || bike.model === null || bike.model === '') {
        res.send(400)
    }
    else {

        // Insert metadata
        bike.meta = {
            date: new Date(),
            ip_address: req.connection.remoteAddress
        }

        console.log(req)
        console.log(bike)

        collection.insert(bike)

        res.send(200)
    }
})

/* GET map */
router.get('/map', function (req, res) {
    const db = req.db
    const collection = db.get('bikes')
    let results = []

    collection.find({}, {}, function (e, docs) {
        const totalBikes = docs.length
        let currentBike = 0
        docs.forEach((bike) => {
            getGeocoded(bike.location, (lat, long) => { // Geocode the location
                currentBike++
                let coordinate = {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [lat, long]
                    },
                    'properties': {
                        'title': bike.make + ' ' + bike.model,
                        'icon': 'bicycle'
                    }
                }

                results.push(coordinate)

                // If we have geocoded all the bikes, return the results
                if (currentBike === totalBikes) {
                    res.json(results)
                }
            })
        })
    })
})

module.exports = router
