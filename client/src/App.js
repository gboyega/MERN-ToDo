import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {
    try {
      fetch("/api/todos")
        .then(response => response.json())
        .then(data => setTodos(data.body));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formSubmit = e => {
    e.preventDefault();
    
    try {
      fetch("/api/todos", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, content})
      })
        .then(response => response.json())
        .then(data => alert('Todo Created.'));
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>

      {/* list todos */}
      <div>
        {todos.map((todo, i) => {
          return (
            <div key={i}>
              <h4>{todo.title}</h4>

              <p>{todo.content}</p>

              <button value>Delete</button>

              <button>Edit</button>
            </div>
          );
        })}
      </div>

      {/* create todos */}
      <div>
        <form onSubmit={formSubmit}>
          <label>Title</label>
          <input
            name="title"
            required
            onChange={e => setTitle(e.target.value)}
          />

          <label>Content</label>
          <input
            name="content"
            required
            onChange={e => setContent(e.target.value)}
          />

          <input type="submit" />
        </form>
      </div>

      {/* update todos */}
    </div>
  );
}

export default App;
