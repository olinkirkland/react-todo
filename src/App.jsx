import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import TodoCreator from './TodoCreator';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: 'Wash the dog', isDone: false },
    { id: 1, text: 'Pet the cat', isDone: false }
  ]);

  const [modal, setModal] = useState({visible: false, inputText: ''});

  function addTodo(str) {
    if (str.length == 0) {
      return;
    }

    const newTodo = { id: Math.random(), text: str, isDone: false };
    setTodos([...todos, newTodo]); // [1, 2, 3] + 4 => [1, 2, 3, 4]
  }

  function removeTodo(todo) {
      setTodos(todos.filter(t => t != todo));
  }

  // umschalten
  function toggleTodo(todo) {
    todo.isDone = !todo.isDone;
    setTodos([...todos]);
  }

  function editTodo(todo) {
    modal.visible = !modal.visible;
    setModal({...modal});
    console.log('Trigger a popup for todo #' + todo.id);
    console.log(`Modal is visible? ${modal.visible}`);
  }

  function editTodoText(todo, text) {

  }

  // Todo make a component for the edit modal
  // --todo, editTodoText

  return (
    <>
      <div className="container border bg-light p-4 m-4 d-flex flex-column align-items-center">
        <img src="./todo2.png" width="150" height="auto" />
        <div className="w-50">
          <TodoCreator addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} removeTodo={removeTodo}/>
        </div>
      </div>

      {
        modal.visible && 
        <input
            type="text"
            className="form-control"
            placeholder=""
            // onChange={}
            value={modal.inputText}
          />
      }
    </>
  );
}

export default App;
