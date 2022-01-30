import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  React.useEffect(() => {
    const storedTodos = window.localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (e) => {
    e.preventDefault();

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    setNewTodo("");
  };

  const removeTodo = (e) => {
    const todoToRemoveContent =
      e.target.parentElement.querySelector("span").textContent;

    const updatedTodos = todos.filter((todo) => todo !== todoToRemoveContent);

    setTodos(updatedTodos);
  };

  return (
    <>
      <main>
        <h1>Todo list</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>
              <span>{todo}</span>{" "}
              <button onClick={removeTodo}>remover item</button>
            </li>
          ))}
        </ul>
        <form>
          <input
            type="text"
            id="add"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          ></input>
          <button type="submit" onClick={addNewTodo}>
            Adicionar novo item
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
