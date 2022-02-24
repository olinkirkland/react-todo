import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}
