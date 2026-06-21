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

  db.query(sql, [SupplierID, SupplierName, ContactNumber], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Supplier added successfully" });
  });
});

// GET suppliers
router.get("/", (req, res) => {
    const sql = "SELECT * FROM Supplier";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;
