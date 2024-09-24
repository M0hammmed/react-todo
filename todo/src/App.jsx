
import { useState } from 'react';
import './App.css';
import ListComponent from './list';

function App() {
const [input, setInput] = useState();
const [todoData, setTodoData] = useState([])

function onclickfunction() 
{
  let value=[...todoData, input]
  setTodoData(value)
  setInput('')
}

return (

    <div className="todo">
      <div>
      <input value={input} type='text'placeholder='type something' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={onclickfunction}>Add</button>
      </div>
      <div className="list">
        {todoData.map((data, index)=>(
          <ListComponent key={index} name={data}></ListComponent> 
        ))}

      </div>
    </div>
  );
}

export default App;
