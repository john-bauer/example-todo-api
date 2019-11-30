const express = require('express')
const todosController = require('../controllers/todosController')

const todoRoutes = express.Router()

// get all todos
todoRoutes.get('/', todosController.index)
todoRoutes.post('/', todosController.create)
todoRoutes.delete('/:id', todosController.destroy)

module.exports = todoRoutes
