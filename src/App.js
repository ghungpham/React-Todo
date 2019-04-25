import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoListonState: todos,
      todo:{
      task: '',
      id: Date.now(),
      completed: false,
      }
    }

  }

handleChanges = event => { 
  console.log(event.target.name)
  this.setState({
    todo: {
      ...this.state.todo,
      [event.target.name] : event.target.value
    }
  });


}  
  
addTodo = event => {
  event.preventDefault();
  this.setState({
    TodoListonState: [...this.state.TodoListonState, this.state.todo],
    todo:{
      task: '',
      id: Date.now(),
      completed: false,
    }
  })
}

toggleCompleted = id => {
  this.setState({
    TodoListonState: this.state.TodoListonState.map(item => 
      (item.id === id ? {...item, completed: !item.completed} : item)  )
  });
  console.log(this.state.TodoListonState)
};




clearCompleted = event => {
  event.preventDefault();
  this.setState({
    TodoListonState: this.state.TodoListonState.filter(
      item => !item.completed)
  })
};

  render() {
    return (
      <div className = "TodoContainer">
        <h2>To Do List:</h2>
        <div className = "Todo">
        <TodoList list ={this.state.TodoListonState}
        toggleCompleted = {this.toggleCompleted} />
        <TodoForm 
        form = {this.state.todo} 
        addTodo = {this.addTodo}
        handleChanges = {this.handleChanges}
        />
        <button className= "clearbtn" onClick={this.clearCompleted}>Clear Done</button>
        </div>
        
      </div>
    );
  }
}

export default App;
