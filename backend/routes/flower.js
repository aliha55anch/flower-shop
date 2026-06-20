const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/add", (req, res) => {
    const { FlorID, CommonName, CostPerStem } = req.body;

    // Validation
    if (!FlorID || !CommonName || !CostPerStem) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO Flower VALUES (?, ?, ?)";

    db.query(sql, [FlorID, CommonName, CostPerStem], (err) => {
        if (err) {
            console.error("Error inserting flower:", err);
            res.status(500).json({ error: err.message || "Error adding flower" });
        } else {
            res.json({ message: "Flower added successfully" });
        }
    });
});

router.get("/", (req, res) => {
    db.query("SELECT * FROM Flower", (err, result) => {
        if (err) {
            console.error("Error fetching flowers:", err);
            res.status(500).json({ error: err.message || "Error fetching flowers" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;