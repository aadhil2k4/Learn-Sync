const express = require('express');
const Create_Notes = require('../Controllers/Create_Notes_Controller');

const router = express.Router();

router.post("/create", (req, res) => {
    Create_Notes(req, res);
})

module.exports = router;