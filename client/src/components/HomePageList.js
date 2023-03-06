import React, {useEffect, useState} from "react";
// import DailyHabitCard from "./DailyHabitCard";
// import Draggable from 'react-draggable';
import HomePageCard from "./HomePageCard"


function DailyHabitList( {quotes} ) {
    const [quoteIndex, setQuoteIndex] = useState(0)
    const [quote, setQuote] = useState({});

    useEffect(() => {
        let q = quotes[Math.floor(Math.random()*quotes.length)]
        // if quote is from trump lets select another
        // if(q.author.includes('Trump')){
        //     q = quotes[Math.floor(Math.random()*quotes.length)]
        // }
        if(q){
            setQuote(q)
        }
    }, [quotes])

    console.log(quote)

    return (
        <div>
            <HomePageCard quote={quote} quoteIndex={quoteIndex} setQuoteIndex={setQuoteIndex}/>
        </div>
    );
}

export default DailyHabitList;