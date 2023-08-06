import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import "./register.css";
import { useNavigate } from "react-router-dom";


const Register =() =>{
    const [registerUser,setRegisterUser]= useState("")
    const [newPassword,setNewPassword]=useState("")
    const navigate=useNavigate()

    const createUser=(e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(auth,registerUser,newPassword)
        .then((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }
    const SignIn =()=>{
        navigate('/login')
    }
    return (
        <div className="register-card-container">
          <div className="register-card">
            <h1>QuoteCraft</h1>
            <form className="register-form" onSubmit={createUser}>
              <input
                type="email"
                onChange={(e) => setRegisterUser(e.target.value)}
                value={registerUser}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                placeholder="Password"
              />
              <button type="submit">Create User</button>
            </form>

            <div className="register-link">
              <p>
                Already have an account? <a href="#" onClick={SignIn}> Log in </a>
              </p>

              <p className="p2">
                By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Register;