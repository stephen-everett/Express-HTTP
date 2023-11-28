// Connects our SQL database to our server 

// We're using the pg library, specifically the "pool" section

const Pool = require("pg").Pool;
require('dotenv').config();

// instantiate Pool
// pass instructions required to connect to SQL server

const pool = new Pool(
    {
        user : "ubuntu",
        password: "password",
        host: "localhost", 
        port: 5432,
        database: "project"
    }

);

// export this new pool so that it can be used in the server code (index.js)

module.exports = pool;