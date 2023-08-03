//import './App.css'
import Quotes from './pages/homepage/Main/homepage'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Signup/login'

function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Quotes} />
        <Route path='/login' Component={Login} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
