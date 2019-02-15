import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {
    return this.props.todos.map ((disp)=>(  
     /* disp is called the callback function which is 
    specified inside (). the map method goes from index 0 to n-1 
    of the props' todos and stores each index's array element
    inside the (disp) method

     */ 
    /*<h3>{ disp.title  } </h3>*/
    <TodoItem key={disp.id} todo ={disp} editTodo={this.props.editTodo}delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>
    ) )
  }
}

/*The following is a goodpractise to list what all props have 
been gathered*/
Todos.propTypes ={
    todos:PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}
export default Todos
