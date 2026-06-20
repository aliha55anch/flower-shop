const express = require("express");
const router = express.Router();
const db = require("../db");

// INSERT supplier
router.post("/add", (req, res) => {
    const { SupplierID, SupplierName, ContactNumber } = req.body;

    // Validation
    if (!SupplierID || !SupplierName || !ContactNumber) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO Supplier VALUES (?, ?, ?)";

    db.query(sql, [SupplierID, SupplierName, ContactNumber], (err) => {
        if (err) {
            console.error("Error inserting supplier:", err);
            res.status(500).json({ error: err.message || "Error adding supplier" });
        } else {
            res.json({ message: "Supplier added successfully" });
        }
    });
});

// GET suppliers
router.get("/", (req, res) => {
    db.query("SELECT * FROM Supplier", (err, result) => {
        if (err) {
            console.error("Error fetching suppliers:", err);
            res.status(500).json({ error: err.message || "Error fetching suppliers" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;