import React from 'react';

const Todo = props => {
    return(
        <div className = 'todoitem'>
        <li>{props.todoProp.task}
        </li>
        </div>
    )
}


export default Todo;