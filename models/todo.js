const db = require('../db/config')

const Todo = {}

// find all quotes
Todo.findAll = () => {
  return db.query('SELECT todos.title, todos.content, todos.is_completed FROM todos ORDER BY todos.id ASC')
}

// create a todo
Todo.create = todo => {
  return db.one(
    `
    INSERT INTO todos
    (title, content, is_completed)
    VALUES ($1, $2, $3) RETURNING *
    `,
    [todo.title, todo.content, todo.is_completed]
  )
}

module.exports = Todo
