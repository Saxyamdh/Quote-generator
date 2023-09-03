import { useEffect, useState } from "react";
import './todo.css'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { db } from "../../../../firebase";


const TodoList=()=>{
    const [toDo,setTodo]=useState('')
    const [items,setItems]=useState([])
    
    const todosRef = collection(db, "todos");
    
    async function handleSubmit(e){
        e.preventDefault()

        if(toDo.trim() === ""){
            return;
        }
        setItems((currentTodos)=>{
                return[...currentTodos,
                {id:crypto.randomUUID(),title:toDo,completed:false}
                ]
            })
        // const citySnapshot = await getDocs(todosRef);
        // const cityList = citySnapshot.docs.map(doc => doc.data());
        // console.log(cityList)

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
        <div className="Todo-list">
        <form className="Todo" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={toDo}
            onChange={(e) =>setTodo(e.target.value)}
            />
            <button type="submit">Add Item</button>
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
           
        </div>
    )
    
}

export default TodoList