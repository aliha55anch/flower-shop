CREATE DATABASE IF NOT EXISTS FlowerShop;
USE FlowerShop;

CREATE TABLE Supplier (
SupplierID INT PRIMARY KEY,
SupplierName VARCHAR(100) NOT NULL,
ContactNumber VARCHAR(20) NOT NULL
);

CREATE TABLE Flower (
FlorID INT PRIMARY KEY,
CommonName VARCHAR(100) NOT NULL,
CostPerStem DECIMAL(10,2) NOT NULL
);

CREATE TABLE Bouquet (
BouquetID INT PRIMARY KEY,
BouquetName VARCHAR(100) NOT NULL,
RetailPrice DECIMAL(10,2) NOT NULL
);

CREATE TABLE Delivery (
SupplierID INT,
DeliveryDate DATE,
PRIMARY KEY (SupplierID, DeliveryDate),
FOREIGN KEY (SupplierID)
REFERENCES Supplier(SupplierID)
);

CREATE TABLE DeliveryDetail (
SupplierID INT,
DeliveryDate DATE,
FlorID INT,
QuantityDelivered INT NOT NULL,
BulkPricePaid DECIMAL(10,2) NOT NULL,

PRIMARY KEY (SupplierID, DeliveryDate, FlorID),

FOREIGN KEY (SupplierID, DeliveryDate)
    REFERENCES Delivery(SupplierID, DeliveryDate),

FOREIGN KEY (FlorID)
    REFERENCES Flower(FlorID)
);

CREATE TABLE BouquetRecipe (
BouquetID INT,
FlorID INT,
StemCount INT NOT NULL,

PRIMARY KEY (BouquetID, FlorID),

FOREIGN KEY (BouquetID)
    REFERENCES Bouquet(BouquetID),

FOREIGN KEY (FlorID)
    REFERENCES Flower(FlorID)
);
