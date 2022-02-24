export default function TodoItem({ todo }) {
  const handleCheckbox = (event) => {
    todo.isDone = event.target.checked;
  };

  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-2"
        type="checkbox"
        onChange={handleCheckbox}
      />
      <span className={todo.isDone ? 'text-decoration-line-through' : ''}>
        {todo.text}
      </span>
    </li>
  );
}
