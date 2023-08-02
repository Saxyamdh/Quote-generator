import { useState } from "react";
import './todo.css'


const TodoList=()=>{
    const [toDo,setTodo]=useState('')
    const [items,setItems]=useState([])

    function handleSubmit(e){
        e.preventDefault()

        if(toDo.trim() === ""){
            return;
        }
        setItems((currentTodos)=>{
                return[...currentTodos,
                {id:crypto.randomUUID(),title:toDo,completed:false}
                ]
            })
        
        
        setTodo("")
    }
    function toggleTodo(id,completed){
        setItems(currentTodos =>{
            return [
                ...currentTodos.map(item =>{
                    if(item.id === id){
                        return {...item,completed}
                    }
                    return item
                })
            ]
        })
    }

    function deleteTodo(id){
        setItems(currentTodos=>{
            return currentTodos.filter(item =>item.id !==id)
        })
    }

    return(
        <>
        <form className="Todo" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={toDo}
            onChange={e =>setTodo(e.target.value)}
            />
            <button>Add Item</button>
        </form>
        {console.log(items)}
        <ul className="Todolist">
           {items.map(item =>{
            return <li key={item.id}>
                <label className={item.completed ? "completed" : ""}>
                    <input type="checkbox" 
                    checked={item.completed}
                    onChange={e=>toggleTodo(item.id,e.target.checked)}
                    />
                {item.title}
                </label>
                <button onClick={()=>deleteTodo(item.id)}>Delete</button>
            </li>
           })}
        </ul>
  

        </>
    )
    
}

export default TodoList