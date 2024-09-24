import React from 'react'

function ListComponent(props) {
  return (
    <div className="task">

      <div>{props.name}</div><div><button value="delete">delete</button></div>
      </div>
  )
}

export default ListComponent