import { useState } from "react";



const register = async () =>{

}

const Register =() =>{
    const [registerUser,setRegisterUser]= useState("")

    return(
        <>
        <form className="Register-form">
            <input type="email" 
            placeholder="Email"
            />

        </form>
        </>
    )
}

export default Register