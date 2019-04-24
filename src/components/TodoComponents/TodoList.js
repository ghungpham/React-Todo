// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div className = 'list'>
        <ul>
        {props.listProp.map((todoMap) => 
            (<Todo key ={props.id} todoProp = {todoMap} />)) }
        </ul>
        </div>
    )
} 


export default TodoList;