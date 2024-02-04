// Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// Middleware
const app = express();
app.use(express.json());
app.use(cors());



// Server Testing
app.get("/test", (req, res) => {
    res.status(200).send("Hello World from Learn-Sync")
})



const port = process.env.SERVER_PORT || 5000;
// Server Setup
app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log("Server Is Listening on Port 8080");
})