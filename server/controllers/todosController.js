let Todo = require("../models/todo.model");

module.exports.create = (req, res) => {
  const todo = req.body;

  const newTodo = new Todo(todo);

  newTodo
    .save()
    .then(() => res.json({ message: "Todo Created!" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "Todo cannot be created" })
    );
};

module.exports.getAll = (req, res) => {
  Todo.find()
    .then(todos => res.json({ body: todos }))
    .catch(err =>
      res.status(400).json({ error: err, message: "Todos cannot be fetched." })
    );
};

module.exports.getOne = (req, res) => {
  Todo.findById(req.params.todoId)
    .then(todo => res.json({ body: todo }))
    .catch(err =>
      res.status(400).json({ error: err, message: "Cannot fetch Todo " })
    );
};

module.exports.update = (req, res) => {
  const todo = req.body;

  Todo.findByIdAndUpdate({ _id: req.params.todoId }, todo, { new: true })
    .then(todos =>
      res.json({ body: todos, message: "Todo updated successfully" })
    )
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot update Todo" })
    );
};

module.exports.delete = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.todoId })
    .then(todos => res.json({ body: todos, message: "todo has been deleted" }))
    .catch(err =>
      res.status(400).json({ error: err, message: "cannot delete Todo" })
    );
};
