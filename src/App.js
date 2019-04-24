import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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
      id: '',
      complete: '',
      }
    }

  }

handleChanges = event => { 
  console.log(event.target.name);
  this.setState({
    newtodo: {
      ...this.state.todo,
      [event.target.name] : event.target.value
    }
  });


}  
  
addTodo = event => {
  event.preventDefault();
  this.setState({
    TodoListonState: [...this.state.TodoListonState, this.state.newtodo],
    todo: {
      task: '',
      id: '',
      complete: 'false',
    }
  })
}

  render() {
    return (
      <div className = "TodoContainer">
        <h2>Welcome to your Todo App!</h2>
        <div className = "Todo">
        <TodoList listProp ={this.state.TodoListonState} />
        <TodoForm 

        value = {this.state.task} 
        addTodo = {this.addTodo}
        handleChanges = {this.handleChanges}
        />
        </div>
      </div>
    );
  }
}

export default App;
