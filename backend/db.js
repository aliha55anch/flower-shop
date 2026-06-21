const mysql = require("mysql2");

const db = mysql.createPool(process.env.DATABASE_URL);

db.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed:", err.message);
    } else {
        console.log("Database connected");
        connection.release();
    }
});

module.exports = db;