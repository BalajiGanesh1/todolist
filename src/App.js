import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Layouts/Header.js';
import AddTodo from './Components/AddTodo.js';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Go to market",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Buy cycle",
        completed: false
      },

      {
        id:uuid.v4(),
        title: "Plough the fields",
        completed: false
      }
    ],
   }

   //changes the completed status of each todo item which is checkboxed
   markComplete=(id)=>{
    this.setState({ todos:  this.state.todos.map( todo =>{
       if(todo.id=== id){
         todo.completed= !todo.completed;

       }
      return todo
       

    })});

   }

   delTodo =(id) =>{
    
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]});

   }

   addTodo =(title) =>{

    const newTodo={
     id:uuid.v4(),
     title,
     completed: false
    }

    this.setState({todos: [...this.state.todos,newTodo]})
   }


  render() {
    
    return (
      <div className="App">
        <div className="Container">
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
          </div>
      </div>
    );
  }
}

export default App;
