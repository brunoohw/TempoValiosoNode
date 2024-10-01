const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const usuariosRoutes = require('./src/routes/usuariosRoutes');
// Middleware para analisar o corpo da requisição como JSON
app.use(cors());
app.use(express.json());
// Dados simulados (em um aplicativo real, você usaria um banco de dados)
let usuarios = [
  { id: 1, nome: "João", email: "joao@example.com" },
  { id: 2, nome: "Maria", email: "maria@example.com" },
];

// Usando as rotas para tarefas
//app.use('/api/tarefas', tarefasRoutes);
// Rota GET para obter todos os usuários

// Usando as rotas para tarefas
app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
