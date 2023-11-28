require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

/*
    instantiate library objects to be able to use their api
    - app is instantiation of express() object. Gives us access to list()
*/

const app = express();

// pass middleware to express

/*
    cors lets client / server communicate using json object
    which gives access to req.body object
*/
app.use(cors());
app.use(express.json());


function greeting() {
    console.log("server has started on port ", port);
}


function initialize(callback) {
    console.log("Beginning initialization");
    callback();
}


function greeting() {
    console.log("server has started on port ", port);
}


function initialize(callback) {
    console.log("Beginning initialization");
    callback();
}

const port = process.env.PORT || 5000;
// start server with port and callback welcome function(s)
app.listen(port,initialize(greeting));

app.post("/api/post/message", async(req,res) => {
    try {
        console.log("received message")
        console.log(req.body)
        const message = req.body.test

        const query = `INSERT INTO messages(message) VALUES('${message}')`



        response = await pool.query(query)
        res.json(response.rows)
    }
    catch(err) {
        console.error(err.message, "post/message")
    }
})

app.get("/api/get/messages" ,async(req,res) => {
    try {
        console.log("request received....")
        const query = "SELECT * FROM messages ORDER BY id ASC"
        const response = await pool.query(query)
        
        res.json(response.rows)

    }
    catch(err) {
        console.error(err.message, "/get/messages")
    }
})