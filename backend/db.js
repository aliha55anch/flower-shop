const mysql = require("mysql2");

const db = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10
});

// DO NOT block app startup
db.getConnection((err, connection) => {
    if (err) {
        console.log("DB connection failed:", err.message);
    } else {
        console.log("Database connected");
        connection.release();
    }
});

module.exports = db;