//import './App.css'
import Quotes from './pages/homepage/Main/Homepage'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Signup/login'
import Register from './pages/Signup/register'

function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Quotes} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
