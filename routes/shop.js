const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // allows you 2 join 
});

module.exports = router; 