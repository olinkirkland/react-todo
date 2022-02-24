export default function TodoItem({ todo, toggleTodo, editTodo, removeTodo }) {
  const handleCheckbox = (event) => {
    toggleTodo(todo);
  };

  const handleEdit = (event) => {
    editTodo(todo);
  };

  const handleDelete = () => {
    removeTodo(todo)
  };

  return (
    <li className="list-group-item d-flex justify-content-between" >
      <div className="d-flex align-items-center"> 
        <input
          className="form-check-input me-2"
          type="checkbox"
          onChange={handleCheckbox}
        />
        <span className={todo.isDone ? 'text-decoration-line-through' : ''} >
          {todo.text}
        </span>
      </div>
      <div>
      <button onClick={handleEdit} className="btn btn-secondary btn-sm me-3">Edit</button>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
      </div>
    </li>
  );
}
