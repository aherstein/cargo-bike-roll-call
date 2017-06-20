var express = require('express');
var router = express.Router();

/* GET bikes */
router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('bikes');
    collection.find({}, {}, function (e, docs) {
        res.json(docs); // Render the results in JSON format
    });
});

/* POST bike */
router.post('/', function (req, res) {
    const db = req.db;
    const collection = db.get('bikes');

    console.log(req.body);

    collection.insert(req.body);

    res.send(200);
});

module.exports = router;
