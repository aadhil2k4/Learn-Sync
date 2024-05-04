const express = require('express');
const router = express.Router();


const mail_routes = require("../Backend/Routers/Mail_Route");
const Youtube_routes = require("../Backend/Routers/Youtube_Routes");
const Notes_routes = require("../Backend/Routers/Notes_Router")

router.use("/mail", mail_routes);
router.use("/youtube", Youtube_routes);
router.use("/notes", Notes_routes);

module.exports = router;