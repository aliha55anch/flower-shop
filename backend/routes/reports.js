const express = require("express");
const router = express.Router();
const db = require("../db");

// FLOWERS REPORT
router.get("/flowers", (req, res) => {
    db.query("SELECT * FROM Flower", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// SUPPLIERS REPORT
router.get("/suppliers", (req, res) => {
    db.query("SELECT * FROM Supplier", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// BOUQUETS REPORT
router.get("/bouquets", (req, res) => {
    db.query("SELECT * FROM Bouquet", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// DELIVERY REPORT
router.get("/delivery", (req, res) => {
    const sql = `
        SELECT d.DeliveryID, d.DeliveryDate, s.SupplierName
        FROM Delivery d
        JOIN Supplier s ON d.SupplierID = s.SupplierID
    `;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// DELIVERY DETAIL REPORT
router.get("/delivery-detail", (req, res) => {
    const sql = `
        SELECT 
            d.DeliveryID,
            s.SupplierName,
            d.DeliveryDate,
            f.CommonName,
            dd.QuantityDelivered,
            dd.BulkPricePaid
        FROM DeliveryDetail dd
        JOIN Delivery d ON dd.DeliveryID = d.DeliveryID
        JOIN Supplier s ON d.SupplierID = s.SupplierID
        JOIN Flower f ON dd.FlowerID = f.FlowerID
    `;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// SALES REPORT (bouquet usage)
router.get("/sales", (req, res) => {
    const sql = `
        SELECT BouquetID, SUM(StemCount) AS TotalFlowers
        FROM BouquetRecipe
        GROUP BY BouquetID
    `;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

module.exports = router;