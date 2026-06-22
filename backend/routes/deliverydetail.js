const express = require("express");
const router = express.Router();
const db = require("../db");

// INSERT delivery detail
router.post("/add", (req, res) => {
  const {
    DeliveryID,
    FlowerID,
    QuantityDelivered,
    BulkPricePaid
  } = req.body;

  if (
    !DeliveryID ||
    !FlowerID ||
    !QuantityDelivered ||
    !BulkPricePaid
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO DeliveryDetail VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [
      DeliveryID,
      FlowerID,
      QuantityDelivered,
      BulkPricePaid
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
      }

      res.json({
        message: "Delivery Detail added successfully"
      });
    }
  );
});

// GET delivery details
router.get("/", (req, res) => {
  db.query(
    `SELECT
        dd.DeliveryID,
        dd.FlowerID,
        dd.QuantityDelivered,
        dd.BulkPricePaid
     FROM DeliveryDetail dd`,
    (err, results) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
});

module.exports = router;