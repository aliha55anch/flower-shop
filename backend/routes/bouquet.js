const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/add", (req, res) => {
    const { BouquetID, BouquetName, RetailPrice } = req.body;

    // Validation
    if (!BouquetID || !BouquetName || !RetailPrice) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO Bouquet VALUES (?, ?, ?)";

    db.query(sql, [BouquetID, BouquetName, RetailPrice], (err) => {
        if (err) {
            console.error("Error inserting bouquet:", err);
            res.status(500).json({ error: err.message || "Error adding bouquet" });
        } else {
            res.json({ message: "Bouquet added successfully" });
        }
    });
});

router.get("/", (req, res) => {
    db.query("SELECT * FROM Bouquet", (err, result) => {
        if (err) {
            console.error("Error fetching bouquets:", err);
            res.status(500).json({ error: err.message || "Error fetching bouquets" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;