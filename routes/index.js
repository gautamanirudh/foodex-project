const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('home-page')); //home page

module.exports = router