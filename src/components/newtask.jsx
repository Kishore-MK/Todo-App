import React from 'react'
import { useState,useRef} from 'react';
import {FaPlus} from 'react-icons/fa'
const Newtask = ({addtodo}) => {
    const [newtask ,setnewtask]=useState();
    function handlecreate(e){
        e.preventDefault()
        addtodo(newtask)
        setnewtask('');        
    }
    const inputref=useRef()
  return (
    <form className='newtask' onSubmit={handlecreate}>
        <label htmlFor='newtask'></label>
        <input ref={inputref}
        type="text" id='additem' value={newtask} onChange={(e)=>{setnewtask(e.target.value)}} placeholder='Add Task' autoFocus required />
        <div className='addbutton'>

        
        <button type='submit' onClick={()=>inputref.current.focus()}
        className='addicon'><FaPlus/></button>
        </div>
    </form>

  )
}

export default Newtask;