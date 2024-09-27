import { useState } from "react";
import "./App.css";
import ListComponent from "./list";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [input, setInput] = useState("");

  function onclickfunction() {
    if (input !== "") {
      let value = [...todoData, input];
      setTodoData(value);
      setInput("");
    }
  }

  const deleteTodo = (index) => {
    const updatedTodo = [...todoData];
    updatedTodo.splice(index, 1);
    setTodoData(updatedTodo);
    window.alert("Deleted.....!");

    // setEdit('');
  };

  // function deleteTodo(name) {
  //   let updatedTodo = todoData.filter((index) => index !== name); ..........delete funtion using filter funtion.............
  //   setTodoData([...updatedTodo]);

  // }

  return (
    <div className="todo">
      <div>
        <input
          value={input}
          type="text"
          placeholder="type something"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onclickfunction();
            }
          }}
        />
        <button onClick={onclickfunction}>Add</button>
      </div>
      <div className="list">
        {todoData.map((data, index) => (
          <ListComponent
            todoData={todoData}
            index={index}
            deleteTodo={deleteTodo}
            name={data}
            setTodoData={setTodoData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
