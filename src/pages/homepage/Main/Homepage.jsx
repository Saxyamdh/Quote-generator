import { useState } from "react";
import TodoList from "../components/To-do-List/Todo";
import Quotes from "../components/To-do-List/Quotes";
import Clock from "../components/To-do-List/clock";
import './Homepage.css'
//import { signOut } from "firebase/auth";


const Home =()=>{

   const [index,setIndex] =useState(0)
   const Genre=[
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success"
   ]

   const imageUrls=[
    '../src/assets/1.jpeg',
    'src/assets/2.jpeg',
    'src/assets/3.jpeg',
    'src/assets/4.jpeg',
    'src/assets/5.jpeg',
    'src/assets/6.jpeg',
    'src/assets/7.jpeg',
    'src/assets/8.jpeg',
    'src/assets/9.jpeg',
    'src/assets/10.jpeg',
    'src/assets/11.jpeg',
    'src/assets/12.jpeg',
    'src/assets/13.jpeg',
    'src/assets/14.jpeg',
    'src/assets/15.jpeg',
    'src/assets/16.jpeg',
    'src/assets/17.jpeg',
    'src/assets/18.jpeg',
    'src/assets/19.jpeg',
    'src/assets/20.jpeg'
   ]
   const changeBackground =()=>{
    setIndex((prev)=>(prev+1)%imageUrls.length)
   }

    const [temp, setTemp] = useState(0)
    const [showForm,setShowForm]= useState(false)


    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };

    const refreshQuote = () => {
      setTemp(prev => prev+1)
    }


    const onClickButtonNext =(e)=>{
        e.preventDefault()
        refreshQuote(),
        changeBackground()
    }
    
    const [genre,setGenre]=useState("")

    return(
      <div className="Body" style={{backgroundImage:`url(${imageUrls[index]})`}}>
        <div>
          <div className="Header">
          <div className="Clock">
            <Clock />
          </div>
          <div className="SelectContainer">
            <h3>Genre</h3><select 
            id="genre"
            value={genre}            
            onChange={(e)=>setGenre(e.target.value)}
            // size="7"
            >
            {Genre.map((genre) => (
              <option key={genre}>
                {genre} 
              </option>
              
            ))}
            </select>
          </div>      
          </div>
        <div className="Quotes" >
        <Quotes refreshHook={temp} category={genre} />
        
        <button className="Next" 
        style={{
          display: "block",
          width: "300px",
          margin: "0 auto",
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "grey",
          },
          transition: "0.3s ease-in-out",
          justifyContent:"right"
        }}
        onClick={onClickButtonNext}
        >Next</button>
        </div>
        </div>        
        <div className='todoform'> 
        {!showForm && (
            <button className="open-todo-button"
            onClick={handleShowForm}>Open Todo Form</button>
            )}
      
        {showForm && <TodoList />}
        {showForm &&(
            <button className="close-todo-button" 
            onClick={handleCloseForm}>X</button>
        )}
        </div>
        </div>
    )
}

export default Home