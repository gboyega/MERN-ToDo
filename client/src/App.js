import React, {useEffect, useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect (() => {
    try {
      fetch('/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data.body));
    } catch (error) {
      console.log(error);
    }
  }, []);
  
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
       }
         
       )}
     </div>

     {/* create todos */}

     {/* update todos */}
    </div>
  );
}

export default App;
