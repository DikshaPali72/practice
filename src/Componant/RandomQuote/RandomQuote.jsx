import React, { useEffect } from 'react'
import { useState } from 'react'

const quotes=[
    {
      Quote: "“The Six Golden Rules of Writing: Read, read, read, and write, write, write.” ",
      Author: "Ernest Gaine"
    },
    { Quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    Author: "Helen Keller"
    },
    { Quote:"“Read a thousand books, and your words will flow like a river.”",
    Author: " Lisa See"
    },
    { Quote:"“One sure window into a persons soul is his reading list.”",
    Author: "  Mary B. W. Tabor"
    },
    { Quote:"“Write what should not be forgotten.” ",
    Author: " Isabel Allende"
    },
]

const RandomQuote = () => {

    const [currentQuote,setCurrentQuote]=useState({})


   useEffect(()=>{

    
    const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
     

   },[])

   const handleQuote =()=>{
    
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
   }
   handleQuote()
  
  
   return (
    <div>
        <p>new QUOTE:{currentQuote.Quote}</p>
        <div>
            <p> author name: {currentQuote.Author}</p>
            <button onClick={handleQuote}>next</button>
        </div>
    </div>
  )
}

export default RandomQuote

// import React, { useState, useEffect } from 'react';
// import './QuoteGenerator.css'; // Import your CSS file for styling (optional)

// const quotes = [
//   // Add your quotes here, e.g.,
//   { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
//   { quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", author: "Mark Twain" }
// ];

// function QuoteGenerator() {
//   const [currentQuote, setCurrentQuote] = useState({});

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setCurrentQuote(quotes[randomIndex]);
//   }, []); // Empty dependency array ensures the effect runs only once

//   const handleClick = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setCurrentQuote(quotes[randomIndex]);
//   };

//   return (
//     <div className="quote-generator">
//       <p className="quote">{currentQuote.quote}</p>
//       <p className="author">- {currentQuote.author}</p>
//       <button className="generate-button" onClick={handleClick}>Get New Quote</button>
//     </div>
//   );
// }

// export default QuoteGenerator;



