import { useState } from "react";
import "./App.css";
import ListComponent from "./list";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [input, setInput] = useState();


  function onclickfunction() {
    let value = [...todoData, input];
    setTodoData(value);
    setInput("");
  }
  function deleteTodo(name) {
    let updatedTodo = todoData.filter((index)=>  index!== name);
    setTodoData([...updatedTodo]);
    window.alert("Deleted.....!");

  }

  
  return (
    <div className="todo">
      <div>
        <input
          value={input}
          type="text"
          placeholder="type something"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onclickfunction}>Add</button>
      </div>
      <div className="list">
        {todoData.map((data, index) => (
          <ListComponent key={index} deleteTodo={deleteTodo} name={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
