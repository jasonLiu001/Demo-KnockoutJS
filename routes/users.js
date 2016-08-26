var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        name: 'name',
        age: '24'
    });
});

module.exports = router;
