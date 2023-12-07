require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

function greeting() {
    console.log("server has started on port ", port);
}


function initialize(callback) {
    console.log("Beginning initialization");
    callback();
}

// start server with port and callback welcome function(s)
app.listen(port,initialize(greeting));

app.post("/api/post/message", async(req,res) => {
    try {
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
        const query = "SELECT * FROM messages ORDER BY id ASC"
        const response = await pool.query(query)
        res.json(response.rows)
    }
    catch(err) {
        console.error(err.message, "/get/messages")
    }
})
