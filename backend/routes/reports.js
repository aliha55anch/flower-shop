const express = require("express");
const router = express.Router();
const db = require("../db");

// Flower inventory report
router.get("/flowers", (req, res) => {
    db.query("SELECT * FROM Flower", (err, result) => {
        if (err) {
            console.error("Error fetching flowers report:", err);
            res.status(500).json({ error: err.message || "Error fetching report" });
        } else {
            res.json(result);
        }
    });
});

// Supplier report
router.get("/suppliers", (req, res) => {
    db.query("SELECT * FROM Supplier", (err, result) => {
        if (err) {
            console.error("Error fetching suppliers report:", err);
            res.status(500).json({ error: err.message || "Error fetching report" });
        } else {
            res.json(result);
        }
    });
});

// Bouquet recipe report
router.get("/recipes", (req, res) => {
    db.query("SELECT * FROM BouquetRecipe", (err, result) => {
        if (err) {
            console.error("Error fetching recipes report:", err);
            res.status(500).json({ error: err.message || "Error fetching report" });
        } else {
            res.json(result);
        }
    });
});

// Sales style report
router.get("/sales", (req, res) => {
    const sql = `
        SELECT BouquetID, SUM(StemCount) AS TotalFlowers
        FROM BouquetRecipe
        GROUP BY BouquetID
    `;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching sales report:", err);
            res.status(500).json({ error: err.message || "Error fetching report" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;