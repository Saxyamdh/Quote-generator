import { useState } from 'react'
import './App.css'
import Quotes from './assets/pages/homepage/Quotes/searchParam'
import TodoList from './assets/pages/homepage/To-do-List/Todo'

function App(){

  const [showForm,setShowForm]= useState(false)
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return(
    <>
    <div className='Center'>
    <h1>This is the quote Generator</h1>
      <Quotes />
    </div>
    <div className='todoform'> 
    {!showForm && (
        <button onClick={handleShowForm}>Open Todo Form</button>
      )}
      {showForm && <TodoList onClose={handleCloseForm} />}
    </div>
    </>
  )
}

export default App
