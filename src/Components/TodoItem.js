import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  constructor (){
   super();
   this.state={ editing:false,
                edittedTodo:'' ,
                editingFirstTime: true
              }

  }
 
  /*getstyle=()=>{

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

 } */

 handleEditing=(e) =>{
  
if(this.state.editingFirstTime)
{
 this.setState({editing:true,
 edittedTodo:this.props.todo.title});
 this.setState({editingFirstTime:false},()=>{
  this.props.editTodo(this.props.todo.id,this.state.edittedTodo);
 });
 

}
 else
 {
  this.setState({editing:true,
  edittedTodo:e.target.value},()=>{
    this.props.editTodo(this.props.todo.id,this.state.edittedTodo);
  });


 }
 
 

 }

 handleEditingDone=(e)=>{
  if(e.keyCode===13)
  this.setState({ editing:false});
 }

 
 


  render() {
    
     const {id,title} =this.props.todo;
     const editStyle=
     {
       backgroundColor:'pink',
       width: '50%',
       marginLeft:'25%'
    };
      const viewStyle=
     {
      backgroundColor: 'pink',
      textDecoration: 'none',
      width: '50%',
      marginLeft:'25%'

     }
     if(this.props.todo.completed)
     {
      viewStyle.backgroundColor= 'lightgreen';
      viewStyle.textDecoration= 'line-through';
      
     }

     if(this.state.editing){
      viewStyle.display='none' ;
     }

     else
     {
       editStyle.display='none';
     }
     
     const btnStyle = {  
       backgroundColor:'red',
       color:'white',
       border: 'none',
       padding: '0px 8px',
       borderradius: '50%',
       cursor:'pointer',
       float: 'right'
     }
     
  
    return (
     
     <ul>
      < div style= {viewStyle} onDoubleClick= {this.handleEditing} >
        <p>
      <input type="checkbox" onChange={ this.props.markComplete.bind(this,id)} />
        {title }
      <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}> x </button>
       </p>

      </div>
    
      <input type="text" 
            style={editStyle} 
            onKeyDown={this.handleEditingDone}
            onChange={this.handleEditing}
            value={this.state.edittedTodo}/>
    </ul>
    )
  }
} 



TodoItem.propTypes ={

  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired


}

export default TodoItem
