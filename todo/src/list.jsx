import React, { useState } from "react";

function ListComponent({ name, deleteTodo}) {
const [edit,setEdit]=useState(false)
  return (
    <div className="task">
      {edit == true ? <input type="text" />:<div>{name}</div>}
      <div>
        <button onClick={() => setEdit(!edit)} value="edit">
         {edit ?'update':'edit'}
         </button>
        <button onClick={() => deleteTodo(name)} value="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListComponent;
