import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Quote.module.css';

export default function Quote(props:{
  isDataVisible: boolean;
}){
  const isQuoteVisible = props.isDataVisible? false : true;
  const url = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";
  const[author, setAuthor] = useState<string>('');
  const[quote, setQuote] = useState<string>('');

  const getRandomQuote = async () =>{
    try{
      const response = await axios.get(url);
      const auth = response.data[0].author;
      const quote = response.data[0].content;
      setQuote(`"${quote}"`);
      setAuthor(auth);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getRandomQuote();
  }, []);


  return (
    <>
      {isQuoteVisible ? 
      (
        <div className={styles.quoteDiv}>
          <p>{quote}</p>
          <h4>{author}</h4>
        </div>
      )
      :
        null
      }
    </>

  );
}