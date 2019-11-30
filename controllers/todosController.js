const Todo = require('../models/todo')

const todosController = {}

todosController.index = (req, res) => {
  Todo.findAll()
    .then(todos => {
      res.json({
        message: 'ok',
        todosData: todos
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ message: '400', err })
    })
}

module.exports = todosController
