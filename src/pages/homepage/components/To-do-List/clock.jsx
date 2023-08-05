import { useState,useEffect } from "react"
import './clock.css'



const Clock =()=>{
    const [time,setTime]=useState()

    useEffect(()=>{
        setInterval(()=>{
            const date =new Date()

            var hour = date.getHours()
            var minutes=date.getMinutes()
            var seconds=date.getSeconds()

            if (hour <10){
                hour= '0'+hour
            }
            if (minutes <10){
                minutes ='0'+minutes
            }
            if (seconds <10){
                seconds ='0'+seconds
            }

            setTime(()=>(hour+' : '+minutes))
        },1000)
    },[])
    return <>
        <h1>{time}</h1>
    </>
}

export  default Clock