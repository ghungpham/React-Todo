import React from 'react';

const Todo = props => {
    let classNames = "todo";
    if (props.todo.completed){
        classNames += "completed";
    }
    console.log(props.todo.task)

    function updateCompleted(){
        props.toggleCompleted(props.todo.id);
    }


    return(
        <div className={classNames} onClick={updateCompleted} >
        <li>{props.todo.task}
        </li>
        </div>
    )
}


export default Todo;