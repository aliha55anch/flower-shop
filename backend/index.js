require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supplierRoutes = require("./routes/supplier");
const flowerRoutes = require("./routes/flower");
const bouquetRoutes = require("./routes/bouquet");
const reportRoutes = require("./routes/reports");

app.use("/supplier", supplierRoutes);
app.use("/flower", flowerRoutes);
app.use("/bouquet", bouquetRoutes);
app.use("/reports", reportRoutes);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});