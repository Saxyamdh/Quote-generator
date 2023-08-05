import axios from "axios";
import { useState,useEffect } from "react";
import './Quotes.css'


// eslint-disable-next-line react/prop-types
const Quotes =({refreshHook}) =>{
    const [quote,setQuote]=useState("Please Wait")
    const [author,setAuthor]=useState("Admin")


   useEffect(()=>{
    const category = 'happiness';
    const apiKey = 'rAz96XIBFF953K78hljRFQ==HmnZSOST9IMI9895';

    axios
      .get('https://api.api-ninjas.com/v1/quotes', {
        params: { category },
        headers: { 'X-Api-Key': apiKey },
      })
      .then((response) => {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { quote, author } = response?.data?.[0]
        setQuote(quote)
        setAuthor(author)
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
   },[refreshHook])

return (
  <div className="QuotesContainer">
    <h1>&#34;{quote}&#34;</h1>
    <h3>-{author}</h3>
    </div>
)
};



export default Quotes;


