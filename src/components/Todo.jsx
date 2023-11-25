const Todo = ({ todo, todos, setTodos, index }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (todo.id === v.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return { id: v.id, title: v.title, isDone: v.isDone };
      } //삼항연산자로 바꿔보기??? return v.id == todo.id ? {id: v.id, title: v.title, isDone: !v.isDone} : v;
    });
    setTodos(newTodos);
  };

  const onClickDelete = () => {
    const newTodos = todos.filter((v, i) => {
      if (todo.id !== v.id) {
        return v;
      }
    });
    setTodos(newTodos);
  };

  return (
    <li className={`w-96 p-4 ${index % 2 ? "bg-gray-300" : "bg-gray-100"}`}>
      <span className=" inline-block text-center w-2/12">{todo.id}</span>
      <button
        className={`w-9/12 inline-block ${todo.isDone && "line-through"}`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button onClick={onClickDelete}>Del</button>
    </li>
  );
};

export default Todo;
