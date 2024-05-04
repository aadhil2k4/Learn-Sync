const Search_Video_Controller = require('../Controllers/Search_Video_Contoller');
const express = require('express');
const router = express.Router();

router.post("/searchvideo", (req, res) => {
    Search_Video_Controller(req, res);
})

module.exports = router;