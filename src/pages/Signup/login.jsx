import { useEffect, useState } from "react";
//import { Auth } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login= () =>{
   const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const navigate =useNavigate()

    const signIn =(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,email,password)
        .then((useCredential)=>{
            console.log(useCredential)
            navigate('/')
        }).catch((error)=>{
            console.log(error);
            alert(error)
        })
    }
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/')
            }
        })
    },[])
    const createAccount=()=>{
        navigate('/register')
    }
    return(
        <div className="login-form"> 
            <h1> QuoteCraft </h1>
            <form className="Login" onSubmit={signIn}> 
                <input 
                type="email" 
                onChange={e => setEmail(e.target.value)} 
                value={email}
                placeholder="Email"
                />
                <input 
                type="password" 
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                />
                <button>Login</button>
            </form>
        
            <p className="p">
              Don&apos;t Have an Account?  <a href="#" onClick={createAccount}> Sign up  </a>
            </p>
           
        </div>
      
    )
}

export default Login;