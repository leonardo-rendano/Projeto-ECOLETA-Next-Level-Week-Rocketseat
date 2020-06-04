
const express = require("express")
const server = express()

// CONFIGURAR PASTA PÚBLICA
server.use(express.static("public"))


// CONFIGURAR CAMINHOS DA MINHA APLICAÇÃO
// PÁGINA INICIAL
// REQ: REQUISIÇÃO
// RES: RESPOSTA
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html")
})

// LIGAR O SERVIDOR
server.listen(3000)