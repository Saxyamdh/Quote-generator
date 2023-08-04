import axios from "axios";
import { useState,useEffect } from "react";


const Quotes =() =>{
    const [quote,setQuote]=useState("")
    const [author,setAuthor]=useState("")

   useEffect(()=>{
    const category = 'happiness';
    const apiKey = 'YOUR_API_KEY';

    axios
      .get('https://api.api-ninjas.com/v1/quotes', {
        params: { category },
        headers: { 'X-Api-Key': apiKey },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
   },[])
return (
    <h1>{response.data}</h1>
)
};



export default Quotes;


