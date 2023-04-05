import axios from "axios";
import { useEffect, useState } from "react";

export default function Quote(){

  const url = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";
  const[author, setAuthor] = useState<string>('');
  const[quote, setQuote] = useState<string>('');

  const getRandomQuote = async () =>{
    try{
      const response = await axios.get(url);
      const auth = response.data[0].author;
      const quote = response.data[0].content;
      setAuthor(auth);
      setQuote(quote);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getRandomQuote();
  }, []);

  return (
    <>{author}: {quote}</>
  );
}