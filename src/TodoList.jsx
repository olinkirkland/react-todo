import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, editTodo, removeTodo }) {
  return (
    <ul className="list-group w-100 ">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} toggleTodo={toggleTodo} editTodo={editTodo} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
}
