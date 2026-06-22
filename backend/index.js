require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supplierRoutes = require("./routes/supplier");
const flowerRoutes = require("./routes/flower");
const bouquetRoutes = require("./routes/bouquet");
const reportRoutes = require("./routes/reports");
const deliveryRoutes = require("./routes/delivery");
const deliveryDetailRoutes = require("./routes/deliverydetail");

app.use("/supplier", supplierRoutes);
app.use("/flower", flowerRoutes);
app.use("/bouquet", bouquetRoutes);
app.use("/reports", reportRoutes);
app.use("/delivery", deliveryRoutes);
app.use("/deliverydetail", deliveryDetailRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});