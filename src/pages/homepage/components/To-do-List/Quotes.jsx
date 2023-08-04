import axios from "axios";
import { useState,useEffect } from "react";


const Quotes =({refreshHook}) =>{
    const [quote,setQuote]=useState("meow meow")
    const [author,setAuthor]=useState("")


   useEffect(()=>{
    const category = 'happiness';
    const apiKey = 'rAz96XIBFF953K78hljRFQ==HmnZSOST9IMI9895';

    axios
      .get('https://api.api-ninjas.com/v1/quotes', {
        params: { category },
        headers: { 'X-Api-Key': apiKey },
      })
      .then((response) => {
        const { quote, author } = response?.data?.[0]
        setQuote(quote)
        setAuthor(author)
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
   },[refreshHook])
return (
  <div>
    <h1>{quote}</h1>
    <h3>{author}</h3>
    </div>
)
};



export default Quotes;


