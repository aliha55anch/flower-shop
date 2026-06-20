require("dotenv").config();

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
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
            db.end();
            console.log("Database setup complete!");
        }
    );
});
