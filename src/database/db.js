
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
      image,
      name,
      address,
      address2,
      state,
      city,
      items        
    ) VALUES (?,?,?,?,?,?,?);
  `)

  const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  //db.run(query, values, afterInsertData)

  //3. CONSULTAR OS DADOS DA TABELA
  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
  })




  //4. DELETAR UM DADO DA TABELA

})
