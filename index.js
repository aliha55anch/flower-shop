require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
try {
  const supplierRoutes = require("./backend/routes/supplier");
  const flowerRoutes = require("./backend/routes/flower");
  const bouquetRoutes = require("./backend/routes/bouquet");
  const reportRoutes = require("./backend/routes/reports");

  app.use("/supplier", supplierRoutes);
  app.use("/flower", flowerRoutes);
  app.use("/bouquet", bouquetRoutes);
  app.use("/reports", reportRoutes);
} catch (err) {
  console.error("Error loading routes:", err.message);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
