const express = require("express");
const router = express.Router();
const db = require("../db");

// INSERT delivery
router.post("/add", (req, res) => {
  const { DeliveryID, SupplierID, DeliveryDate } = req.body;

  if (!DeliveryID || !SupplierID || !DeliveryDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO Delivery VALUES (?, ?, ?)";

  db.query(
    sql,
    [DeliveryID, SupplierID, DeliveryDate],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: "Delivery added successfully" });
    }
  );
});

// GET deliveries
router.get("/", (req, res) => {
  db.query("SELECT * FROM Delivery", (err, results) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json(err);
    }

    res.json(results);
  });
});

module.exports = router;