const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json()); 
app.use(cors()); 

app.use("/usuarios", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM usuarios");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:5000");
});


