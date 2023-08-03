import { useState } from "react";
//import { Auth } from "firebase/auth";

const Login= () =>{
   const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    return(
        <div className="login-form">
            <form>
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