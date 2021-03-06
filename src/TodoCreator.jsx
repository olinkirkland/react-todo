import { useState } from 'react';

export default function TodoCreator({ todos, addTodo }) {
  const [inputText, setInputText] = useState('');

  // Create todo and add it to todos
  const handleClick = () => {
    addTodo(inputText);
    setInputText('');
  };

  const saveChanges = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      
      <div className="input-group mb-5 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder=""
          onChange={saveChanges}
          value={inputText}
        />
        <button
          onClick={handleClick}
          className="btn btn-outline-secondary"
          type="button"
        >
          Add Item
        </button>
      </div>
    </>
  );
}
