import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../utils/api/index';

const Study = () => {
  
  const [flip, setFlip] = useState(true);
  const [deck, setDeck] = useState([]);
  const [cardId, setCardId] = useState(0);
  const { deckId } = useParams();
  const history = useHistory();

  const { id, name, cards } = deck;
  
  useEffect(() => {
    const controller = new AbortController();
    readDeck(deckId, controller.signal)
      .then(data => {
      setDeck(data)
    })
    return () => controller.abort();
  }, [deckId]);
  
  const nextHandleChanger = () => {
    
    if (cardId + 1 === cards.length) {
      if (window.confirm('Restart cards? Click "cancel" to return to the home page.')) {
         setCardId(0);
      } else {
        history.push('/');
      }
    } else {
      setCardId(cardId + 1)
    }
  }
  
  if (cards && cards.length < 3) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/decks/deckId">{deck.name}</a></li>
            <li class="breadcrumb-item active" aria-current="page">Study</li>
          </ol>
        </nav>

        <h2>Not enough cards</h2>
        <p>{`You need at least 3 cards to study. There are ${cards.length} cards in this deck.`}</p>
        <Link to={`/decks/${id}/cards/new`} className='btn btn-secondary mr-2'>Add Card</Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Study: <span>{`${name}`}</span></h1>
        {cards
          .filter((cards, index) => index === cardId)
          .map((card, index) => 
            <div key={card.id}>
              <p>{`Card ${index + 1} of ${cards.length}`}</p>
              { flip === true ? <p>{card.front}</p> : 
            
              ( <div>
                  <p>{card.back}</p>
                  <button onClick={() => nextHandleChanger}>Next</button>
                </div> 
                )}
            </div> 
            )}
        <button onClick={() => setFlip(!flip)}>Flip</button>
      </div>
    )
  }
  
  // return (
  //   <div>
      // <h1>Study: <span>{`${deck.name}`}</span></h1>

  //     { deck.cards && deck.cards.length < 3 ? 

  //       ( <div>
  //           <h2>Not enough cards</h2>
  //           <p>{`You need at least 3 cards to study. There are ${deck.cards.length} cards in this deck.`}</p>
  //           <Link to={`/decks/${deck.id}/cards/new`} className='btn btn-secondary mr-2'>Add Card</Link>
  //         </div> ) :

  //         (
  //          <div>
  //           {deck.cards
  //           .filter((cards, index) => index === cardId)
  //           .map((card, index) => 
  //             <div key={card.id}>
  //               <p>{`Card ${index + 1} of ${deck.cards.length}`}</p>
  //               { flip === true ? <p>{card.front}</p> : 
            
  //               ( <div>
  //                   <p>{card.back}</p>
  //                   <button onClick={() => nextHandleChanger}>Next</button>
  //                 </div> )
  //               }

  //             </div> 
  //           )
  //           </div>
  //         )
  //     }
      // <button onClick={() => setFlip(!flip)}>Flip</button>
  //   </div>
  // )
}

export default Study;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { readDeck } from '../utils/api/index';
// // import Breadcrumb from 'react-bootstrap/Breadcrumb';

// const Study = () => {
  
//   const [flip, setFlip] = useState(true);
//   const [deck, setDeck] = useState([]);
//   const [cardId, setCardId] = useState(0);
//   const { deckId } = useParams();
  
//   useEffect(() => {
//     const controller = new AbortController();
//     readDeck(deckId, controller.signal)
//       .then(data => {
//       setDeck(data)
//     })
//     return () => controller.abort();
//   }, [deckId]);
  
//   return (
//     <div>
//       <h1>Study: <span>{`${deck.name}`}</span></h1>
//       {deck.cards && deck.cards
//         .filter((cards, index) => index === cardId)
//         .map((card, index) => 
//         <div key={card.id}>
//           <p>{`Card ${index + 1} of ${deck.cards.length}`}</p>
//           { flip === true ? <p>{card.front}</p> : 
//           (<div>
//             <p>{card.back}</p>
//             <button onClick={() => setCardId(cardId + 1)}>Next</button>
//           </div>
//           )}
//         </div>
//        )}
//       <button onClick={() => setFlip(!flip)}>Flip</button>
//     </div>
//   )
// }

// export default Study;










// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { readDeck } from '../utils/api/index';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// const Study = () => {
  
//   const [flip, setFlip] = useState(true);
//   const [deck, setDeck] = useState([]);
//   const { deckId } = useParams();
  
//   useEffect(() => {
//     const controller = new AbortController();
//     readDeck(deckId, controller.signal)
//       .then(data => {
//       setDeck(data)
//     })
//     return () => controller.abort();
//   }, [deckId]);
  
//   return (
//     <div>
//       <Breadcrumb>
//         <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//         <Breadcrumb.Item href="https://home/decks/">Decks</Breadcrumb.Item>
//         <Breadcrumb.Item active>Study</Breadcrumb.Item>
//       </Breadcrumb>
//       {deck.cards && deck.cards.map((card, index) => 
//         <div key={card.id}>
//           <h1>{`Study: ${deck.name}`}</h1>
//           <p>{`Card ${index + 1} of ${deck.cards.length}`}</p>
//           { flip === true ? <p>{card.front}</p> : 
//           (<div>
//             <p>{card.back}</p>
//             <button>Next</button>
//           </div>
//           )}
//           <button onClick={() => setFlip(!flip)}>Flip</button>
//         </div>
//        )}
//     </div>
//   )
// }

// export default Study;