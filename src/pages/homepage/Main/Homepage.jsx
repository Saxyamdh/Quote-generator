import { useState } from "react";
import TodoList from "../components/To-do-List/Todo";

const Quotes =()=>{
    //const [type,setType]= useState('')
    const [showForm,setShowForm]= useState(false)
    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };

    return(
        <div className="Quotes">
           
        <h2> This is the quote you will be getting</h2>
        {/* <Quotes /> */}
        
        <button>Next</button>
        <div className='todoform'> 
        {!showForm && (
            <button onClick={handleShowForm}>Open Todo Form</button>
            )}
      
        {showForm && <TodoList />}
        {showForm &&(
            <button onClick={handleCloseForm}>X</button>
        )}
        </div>
        </div>
    )
}

export default Quotes