require("dotenv").config();

const express = require("express");
const db = require("./config/database");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("GeoSwine Backend is Running!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the GeoSwine API.");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Running",
        server: "GeoSwine Backend",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});