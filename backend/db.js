const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,      // Usuario de PostgreSQL
    host: process.env.DB_HOST,      // Dirección del servidor (localhost)
    database: process.env.DB_NAME,  // Nombre de tu base de datos
    password: process.env.DB_PASSWORD, // Contraseña de PostgreSQL
    port: process.env.DB_PORT || 5432 // Puerto de PostgreSQL (5432 por defecto)
});

module.exports = pool;
