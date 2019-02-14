import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
 getstyle=()=>{

   if(this.props.todo.completed)
    return{
     backgroundColor: 'lightgreen',
     textDecoration: 'line-through',
     textAlign: 'center'
     
   }

   else
   return{
     backgroundColor:'pink',
     textDecoration: 'none',
     textAlign: 'center'
   }

 }


  render() {

     const {id,title} =this.props.todo;
     const btnStyle = {  
       backgroundColor:'red',
       color:'white',
       border: 'none',
       padding: '5px 8px',
       borderradius: '50%',
       cursor:'pointer',
       float: 'right'
     }
  
    return (
      < div style= {this.getstyle()} >
        <p>
        <input type="checkbox" onChange={ this.props.markComplete.bind(this,id)} />
        {title }
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}> x </button></p>
       

        
      </div>
    )
  }
} 



TodoItem.propTypes ={

  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

export default TodoItem
