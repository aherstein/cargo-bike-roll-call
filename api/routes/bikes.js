var express = require('express')
var router = express.Router()

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

module.exports = router
