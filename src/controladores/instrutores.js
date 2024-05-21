const { instrutores } = require("../bancodeDados");
let { id } = require("../bancodeDados");


function listarInstrutores (req, res) {
    return res.status(200).json(instrutores);
  }

  function listarUmInstrutor(req, res) {
    const { id } = req.params;

    const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )

    if(!resultado) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado'})
    }  
  
    return res.status(200).json(resultado);

  }

  function cadastrarInstrutores (req, res) {
    //console.log(req.body);
    const { nome, email, status } = req.body

    if (!nome) {
      return res.status(400).json({mensagem: "O campo Nome é obrigatório."})
    }
    if (!email) {
      return res.status(400).json({mensagem: "O campo email é obrigatório."})
    }
    if (!status) {
      return res.status(400).json({mensagem: "O campo status é obrigatório."})
    }
    
    const instrutor = {
      id: id++,
      nome: nome,
      email: email,
      status: status
    }
    
    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
  }

  function atualizarInstrutor (req, res){

    const { id } = req.params;
    const { nome, email, status } = req.body

    const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )

    if(!resultado) {
      return res.status(404).json({ mensagem: 'Instrutor não encontrado'})
  }  
    
    if (!nome) {
      return res.status(400).json({mensagem: "O campo Nome é obrigatório."})
    }
    if (!email) {
      return res.status(400).json({mensagem: "O campo email é obrigatório."})
    }
    if (!status) {
      return res.status(400).json({mensagem: "O campo status é obrigatório."})
    }


    resultado.nome = nome;
    resultado.email = email;
    resultado.status = status;

    return res.status(204).send(resultado)
    
  }

    function deletarInstrutor (req, res) {
      const { id } = req.params;

      const resultado = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    } )
  
    if(!resultado) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado'})
    }
    instrutores = instrutores.filter(() => {
      return instrutor.id !== Number(id);
    })
  }
  

  module.exports = {
    listarInstrutores,
    listarUmInstrutor,
    cadastrarInstrutores,
    atualizarInstrutor
  }