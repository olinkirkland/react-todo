import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  console.log(todos);

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}
