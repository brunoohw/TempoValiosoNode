// src/models/db.js
const mysql = require('mysql2');

// Configurando a conexão com o banco de dados MySQL
const pool = mysql.createPool({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root', // Seu usuário do MySQL
  password: '', // Sua senha do MySQL
  database: 'to-dolist' // Nome do banco de dados que você vai usar
});

module.exports = pool.promise();
