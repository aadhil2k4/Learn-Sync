const express = require('express');
const router = express.Router();


const mail_routes = require("../Backend/AuthServices/Mail/Routes/Mail_Route");
const Youtube_routes = require("../Backend/Youtube/Routes/Youtube_Routes");

router.use("/mail", mail_routes);
router.use("/youtube", Youtube_routes);

module.exports = router;