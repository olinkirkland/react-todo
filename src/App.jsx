import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';

import TodoCreator from './TodoCreator';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([{ id: 0, text: 'Wash the dog', isDone: false }, { id: 1, text: 'Pet the cat', isDone: false }]);
  
  return (
    <>
      <div className="container border bg-light p-4 m-4">
        <h1 className="display-1">Hallo, Welt!</h1>
        <TodoCreator />
        <TodoList todos={todos}/>
      </div>
    </>
  );
}

export default App;
