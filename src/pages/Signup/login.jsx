import { useState } from "react";
//import { Auth } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login= () =>{
   const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const signIn =(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,email,password)
        .then((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className="login-form">
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
            <p>Don`t Have an Account? Sign up</p>
        </div>
      
    )
}

export default Login