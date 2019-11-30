const db = require('../db/config')

const Todo = {}

// find all quotes
Todo.findAll = () => {
  return db.query('SELECT todos.title, todos.content, todos.is_completed FROM todos ORDER BY todos.id ASC')
}

module.exports = Todo
