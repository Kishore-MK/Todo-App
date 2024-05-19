import React, { useState, useRef } from 'react';
import Newtask from "../components/newtask";
import {FaTrashAlt} from "react-icons/fa";
const Tasks=({todos,setTodos,handlecheck,handledelete})=> {
  
  function handlesave(edit,id){
    
      const edittodo=todos.map((todo)=>id===todo.id?{...todo,todo:edit}:todo)
      setTodos(edittodo)      
  }
  function setedit(id){
   
    const edittodo=todos.map((todo)=>id===todo.id?{...todo,isEditing:false}:todo).filter((todo)=>todo.todo!=='')
    setTodos(edittodo)
    
    
    
  }
  function handleedit(id){
    const edittodo=todos.map((todo)=>id===todo.id?{...todo,isEditing:!todo.isEditing}:todo)
      setTodos(edittodo)
  }
  const editref=useRef()
  
  
  return (
    
                    
      <div className="list-container">{todos.map((item)=>(
        <div className="todo" key={item.id}>
            <div className="checkbox-container">
                <input type="checkbox"  onChange={()=>(handlecheck(item.id))} checked={item.checked}/>
            <span className="checkbox"></span>
            </div>
            
            
            <div className='editbutton'>
              {item.isEditing?(<>
               <form>
              
              <div className='editsection'>
              <input type="text" autoFocus value={item.todo} onChange={(e)=>(handlesave(e.target.value,item.id))}/>
              <div className='saveicon'>
              <button onClick={()=>setedit(item.id)}
         >save</button>
          </div>
              </div>
              </form>    
          
          </>)
          :(<>
          <label ref={editref} style={(item.checked)?{textDecoration:"line-through"}:null}
          onDoubleClick={()=>(handlecheck(item.id))}>
        {item.todo}</label>
        <div className='editicon'>
          <button onClick={()=>handleedit(item.id)}
          >edit</button></div>
              </>)
              }
            </div>
            
            <FaTrashAlt
            role="button" onClick={()=>(handledelete(item.id))}
            tabIndex="0"/>
            
        </div>
    ))}</div>
    
  )
  
}

export default Tasks;