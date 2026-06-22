require("dotenv").config();

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("Connected to database. Creating tables...");

    // Create Flower table
    db.query(
        `CREATE TABLE IF NOT EXISTS Flower (
            FlorID INT PRIMARY KEY,
            CommonName VARCHAR(100),
            CostPerStem DECIMAL(10,2)
        )`,
        (err) => {
            if (err) console.log("Error creating Flower table:", err.message);
            else console.log("✓ Flower table created");
        }
    );

    // Create Supplier table
    db.query(
        `CREATE TABLE IF NOT EXISTS Supplier (
            SupplierID INT PRIMARY KEY,
            SupplierName VARCHAR(100),
            ContactNumber VARCHAR(15)
        )`,
        (err) => {
            if (err) console.log("Error creating Supplier table:", err.message);
            else console.log("✓ Supplier table created");
        }
    );

    // Create Bouquet table
    db.query(
        `CREATE TABLE IF NOT EXISTS Bouquet (
            BouquetID INT PRIMARY KEY,
            BouquetName VARCHAR(100),
            RetailPrice DECIMAL(10,2)
        )`,
        (err) => {
            if (err) console.log("Error creating Bouquet table:", err.message);
            else console.log("✓ Bouquet table created");
        }
    );

    // Create BouquetRecipe table
    db.query(
        `CREATE TABLE IF NOT EXISTS BouquetRecipe (
            RecipeID INT AUTO_INCREMENT PRIMARY KEY,
            BouquetID INT,
            FlorID INT,
            StemCount INT,
            FOREIGN KEY(BouquetID) REFERENCES Bouquet(BouquetID),
            FOREIGN KEY(FlorID) REFERENCES Flower(FlorID)
        )`,
        (err) => {
            if (err) console.log("Error creating BouquetRecipe table:", err.message);
            else console.log("✓ BouquetRecipe table created");
        }
    );

    // Create Delivery table
    db.query(
        `CREATE TABLE IF NOT EXISTS Delivery (
            DeliveryID INT AUTO_INCREMENT PRIMARY KEY,
            SupplierID INT NOT NULL,
            DeliveryDate DATE NOT NULL,
            FOREIGN KEY(SupplierID) REFERENCES Supplier(SupplierID)
        )`,
        (err) => {
            if (err) console.log("Error creating Delivery table:", err.message);
            else console.log("✓ Delivery table created");
        }
    );

    // Create DeliveryDetail table
    db.query(
        `CREATE TABLE IF NOT EXISTS DeliveryDetail (
            DeliveryID INT,
            FlowerID INT,
            QuantityDelivered INT NOT NULL,
            BulkPricePaid DECIMAL(10,2) NOT NULL,
            PRIMARY KEY (DeliveryID, FlowerID),
            FOREIGN KEY(DeliveryID) REFERENCES Delivery(DeliveryID),
            FOREIGN KEY(FlowerID) REFERENCES Flower(FlorID)
        )`,
        (err) => {
            if (err) console.log("Error creating DeliveryDetail table:", err.message);
            else console.log("✓ DeliveryDetail table created");
            db.end();
            console.log("Database setup complete!");
        }
    );
});