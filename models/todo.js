const db = require('../db/config')

const Todo = {}

Todo.findAll = () => {
  return db.query('SELECT todos.id, todos.title, todos.content, todos.is_completed FROM todos ORDER BY todos.id ASC')
}

Todo.findById = id => {
  return db.oneOrNone('SELECT todos.title, todos.content, todos.id, todos.is_completed FROM todos WHERE todos.id = $1', [id])
}

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

Todo.update = (todo, id) => {
  return db.one(
    `
      UPDATE todos SET
      title = $1,
      content = $2,
      is_completed = $3
      WHERE id = $4
      RETURNING *
    `,
    [todo.title, todo.content, todo.is_completed, id]
  )
}

Todo.destroy = id => {
  return db.none(
    `
      DELETE FROM todos
      WHERE id = $1
    `,
    [id]
  )
}

module.exports = Todo
