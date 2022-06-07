const dbController = require('./controllers/dbController');
const router = require('express').Router();

router.post('/insert',dbController.insertData);

module.exports = router;