import Homepage from './pages/Home';
import Header from './pages/header';
import Footer from './pages/footer';
import Newtask from './components/newtask';
import SearchTask from './components/searchtask';

import './App.css';
import { useState,useEffect} from "react";

function App() {
  const [todos,setTodos]=useState([])

useEffect(()=>{
  console.log("render")
},[])


const [search,newsearch]= useState('')
const addtodo=(todo)=>{
  const id = todos.length ? todos[todos.length-1].id+1 : 1;
  const addnewtodo = {id,checked:false,todo};
  const listtodos = [...todos,addnewtodo];
  setTodos(listtodos)
}

const handlecheck=(getid)=>{
    console.log(`id:${getid}`)
    const newlist = todos.map((todo)=> 
    getid===todo.id ? {...todo,checked:!todo.checked} : todo);
    setTodos(newlist)
}
const handledelete=(getid)=>{
    console.log(`id:${getid}`)
    const newlist = todos.filter((todo)=> 
    getid!==todo.id);
    setTodos(newlist)
}
  return (
    <div className="pp">
      <Header />
      <SearchTask search={search} newsearch={newsearch}/>
      <Newtask addtodo={addtodo}/>
      <Homepage todos={todos.filter(todo => ((todo.todo).toLowerCase()).includes(search.toLowerCase()))}
      setTodos={setTodos}
      handlecheck={handlecheck}
      handledelete={handledelete}/>
      <Footer/>
    </div>
  );
}

export default App;
