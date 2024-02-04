// Dependencies
const express = require('express');
const cors = require('cors');
const main_router = require("../Backend/Main_Routes");
require('dotenv').config();


// Middleware
const app = express();
app.use(express.json());
app.use(cors());


// Configure Main Router
app.use("/", main_router);



// Server Testing
app.get("/test", (req, res) => {
    res.status(200).send("Hello World from Learn-Sync")
})



// Server Setup
const port = process.env.SERVER_PORT || 5000;
app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log("Server Is Listening on Port 8080");
})