const Todo = require('../models/todo')

const todosController = {}

todosController.index = (req, res) => {
  // Find All
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

todosController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    content: req.body.content,
    is_completed: req.body.is_completed
  })
    .then(todo => {
      res.json({
        message: 'ok',
        todo: todo
      })
    })
    .catch(err => {
      res.status(400).json({ message: '400', err })
    })
}

module.exports = todosController
