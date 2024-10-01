const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Definindo as rotas para CRUD das tarefas
router.get('/:email/:senha', cadastroController.consultarUsuario);
router.post('/', cadastroController.createUsuario);

module.exports = router;