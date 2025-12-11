require("dotenv").config();
const express = require("express");
const path = require("path");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 8080;

// Servir sitio estático
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta para comprobar conexión a la BD
app.get("/db-status", async (req, res) => {
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });

        await client.connect();
        const result = await client.query("SELECT NOW()");
        await client.end();

        res.send("🟢 Conexión exitosa a la BD. Hora: " + result.rows[0].now);
    } catch (err) {
        res.status(500).send("🔴 Error conectando a la BD: " + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor mágico escuchando en el puerto ${PORT}`);
});
