import React from "react";
import {FaTrashAlt , FaPlus } from "react-icons/fa";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Tasks from "../components/taskslist";

// const Homepage = ()=>{
    

    //     let [todos, setTodos] = useState([])
    
    //     useEffect(() => {
    //         getTodos()
    //     }, [])
    
    
    //     let getTodos = async () => {
    
    //         let response = await fetch('/api/todo/')
    //         let data = await response.json()
    //         console.log(data)
    //         setTodos(data)
    //     }
    
    // return (
        
    //     <section className="main-section">
    //         <div className="list-container">{todos.map((item)=>(
    //             <div className="todo" key={item.id}>
    //                 <input type="checkbox" checked={item.checked}/>
    //                 <label>{item.todo}</label>
    //                 <FaTrashAlt
    //                 role="button"
    //                 tabIndex="0"/>
                    
    //             </div>
    //         ))}</div>
    //     </section>
    // );


const Homepage = ({todos,setTodos,handlecheck,handledelete}) => {
    
  return (
    <section className="main-section">
    {(todos.length) ? 
    (<Tasks todos={todos}
      setTodos={setTodos}
    handlecheck={handlecheck} 
    handledelete={handledelete}/>
    ):(<p class='emptylabel'>No tasks found</p>)

}</section>
  )
}


export default Homepage;