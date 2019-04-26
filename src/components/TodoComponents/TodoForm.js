import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return(
        <div className= 'todoform'>
        <form onSubmit={props.addTodo}> 
          <input
          placeholder= 'Add your Task' 
          value ={props.form.task} 
          onChange={props.handleChanges}
          name= "task"></input> 
          <button className="Add">Add Todo</button> 
        </form>
        
        </div>
    )
}


export default TodoForm;