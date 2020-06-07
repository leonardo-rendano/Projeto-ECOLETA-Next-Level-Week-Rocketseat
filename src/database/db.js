
// IMPORTAR A DEPENDÊNCIA DO SQLITE DO SQLITE3 
const sqlite3 = require("sqlite3").verbose()

// CRIAR O OBJETO IRÁ FAZER OPERAÇÕES NO BANCO DE DADOS
const db = new sqlite3.Database("./src/database/database.db")
