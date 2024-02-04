const express = require('express');
const Mail_Controller = require('../Controllers/Mail_Controller');
const router = express.Router();

router.post("/welcome", (req, res) => {
    Mail_Controller.Welcome_Controller(req, res);
})

module.exports = router;