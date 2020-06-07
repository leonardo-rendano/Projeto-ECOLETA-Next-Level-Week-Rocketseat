
// IMPORTAR A DEPENDÊNCIA DO SQLITE DO SQLITE3 
const sqlite3 = require("sqlite3").verbose()

// CRIAR O OBJETO IRÁ FAZER OPERAÇÕES NO BANCO DE DADOS
const db = new sqlite3.Database("./src/database/database.db")

// UTILIZAR O OBJETO DE BANCO DE DADOS PARA NOSSAS OPERAÇÕES
db.serialize( () => {
  //com comandos sql eu vou:

  //1. CRIAR UMA TABELA COM COMANDOS SQL
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT 
    );
  `)

  //2. INSERIR DADOS NA 
  const query = (`
    INSERT INTO places (
      imagem,
      name,
      address,
      address2,
      city,
      items        
    ) VALUES (?,?,?,?,?,?,?);
  `)
  db.run(query, [
    ""
  ])


  //3. CONSULTAR OS DADOS DA TABELA

  //4. DELETAR UM DADO DA TABELA

})
