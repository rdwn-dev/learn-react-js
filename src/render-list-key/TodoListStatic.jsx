function Todo() {
  const todos = [
    { id: 1, task: "Belajar React", done: true },
    { id: 2, task: "Ngoding 2 jam", done: false },
    { id: 3, task: "Baca dokumentasi", done: false },
  ];
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            {todo.done ? "✅" : "⬜"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
