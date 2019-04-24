import React from 'react';

const TodoForm = props => {
    return(
        <div className= 'todoform'>
        <form onSubmit={props.addTodo}> 
          <input placeholder= 'Add your Task' value ={props.task} onChange={props.handleChanges}></input> 
          <button>Add Todo</button> 
        </form>
        <button>Clear</button>
        </div>
    )
}


export default TodoForm;