const express = require('express');
const { listarInstrutores, listarUmInstrutor, cadastrarInstrutores, atualizarInstrutor } = require('./controladores/instrutores');


const rotas = express();


rotas.get('/', listarInstrutores);
rotas.get('/instrutor/:id', listarUmInstrutor);
rotas.post('/instrutores', cadastrarInstrutores);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.delete('/instrutores/:id, deletarInstrutor');



module.exports = rotas;