//import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Signup/login'
import Register from './pages/Signup/register'
import Home from './pages/homepage/Main/Homepage'

function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
