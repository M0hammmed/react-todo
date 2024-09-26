import React, { useState } from "react";

function ListComponent({ todoData, name, deleteTodo, index, setTodoData }) {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(name);
  const todoedit = (i) => {
    setEdit(!edit);
    let value2 = [...todoData];
    value2[i] = editInput;
    setTodoData(value2);
  };

  return (
    <div className="task">
      {edit == true ? (
        <input
          type="text"
          value={editInput}
          onChange={(event) => setEditInput(event.target.value)}
        />
      ) : (
        <div>{name}</div>
      )}
      <div>
        <button onClick={() => todoedit(index)} value="edit">
          {edit ? "update" : "edit"}
        </button>
        <button onClick={() => deleteTodo(index)} value="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListComponent;
