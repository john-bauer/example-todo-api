const express = require('express')
const todosController = require('../controllers/todosController')

const todoRoutes = express.Router()

// get all todos
todoRoutes.get('/', todosController.index)
todoRoutes.get('/edit/:id', todosController.edit)
todoRoutes.get('/:id', todosController.show)
todoRoutes.post('/', todosController.create)
todoRoutes.put('/:id', todosController.update)
todoRoutes.delete('/:id', todosController.destroy)

module.exports = todoRoutes
