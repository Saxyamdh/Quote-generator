import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";


const Register =() =>{
    const [registerUser,setRegisterUser]= useState("")
    const [newPassword,setNewPassword]=useState("")

    const createUser=(e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(auth,registerUser,newPassword)
        .then((useCredential)=>{
            console.log(useCredential)
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <>
        <form className="Register-form" onSubmit={createUser}>
            <input type="email" 
            onChange={(e) => setRegisterUser(e.target.value)}
            value={registerUser}
            placeholder="Email"
            />
            <input 
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            type="password" 
            />
    <button type="Submit">Create User</button>
        </form>
        {console.log(registerUser)}
        </>
    )
}

export default Register