import React from 'react';

const Todo = props => {
    return(
        <div className = 'todoitem'>
        <li key={props.todoProp.id}>{props.todoProp.task}
        </li>
        </div>
    )
}


export default Todo;