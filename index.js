require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supplierRoutes = require("./backend/routes/supplier");
const flowerRoutes = require("./backend/routes/flower");
const bouquetRoutes = require("./backend/routes/bouquet");
const reportRoutes = require("./backend/routes/reports");

app.use("/supplier", supplierRoutes);
app.use("/flower", flowerRoutes);
app.use("/bouquet", bouquetRoutes);
app.use("/reports", reportRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port " + (process.env.PORT || 3000));
});
