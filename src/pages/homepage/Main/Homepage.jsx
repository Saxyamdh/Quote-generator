import { useState } from "react";
import TodoList from "../components/To-do-List/Todo";
import Quotes from "../components/To-do-List/Quotes";

const Home =()=>{
    //const [type,setType]= useState('')
    const [temp, setTemp] = useState(0)
    const [showForm,setShowForm]= useState(false)
    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };

    const refreshQuote = (e) => {
      e.preventDefault()
      setTemp(prev => prev+1)
    }

    return(
        <div className="Quotes">
           
        <h2> This is the quote you will be getting</h2>
        <Quotes refreshHook={temp} />
        
        <button onClick={refreshQuote}>Next</button>
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

export default Home