const express = require('express');
const router = express.Router();


const mail_routes = require("../Backend/AuthServices/Mail/Routes/Mail_Route")

router.use("/mail", mail_routes);


module.exports = router;