import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { readDeck } from '../utils/api/index';

const Study = ({deck}) => {
  
  // const [deck, setDeck] = useState([]);
  const [flip, setFlip] = useState(true);
  // const { deckId } = useParams();
  
  // useEffect(() => {
  //   const controller = new AbortController();
  //   readDeck(deckId, controller.signal)
  //     .then(data => {
  //     setDeck(data)
  //   })
  //   return () => controller.abort();
  // }, [deckId]);
  
  return (
    <div>
      {deck.cards && deck.cards.map((card, index) => 
        <div key={card.id}>
          <h1>{`Study: ${deck.name}`}</h1>
          <p>{`Card ${index + 1} of ${deck.cards.length}`}</p>
          { flip === true ? <p>{card.front}</p> : (<div>
            <p>{card.back}</p>
            <button>Next</button>
          </div>
          )}
          <button onClick={() => setFlip(!flip)}>Flip</button>
        </div>
       )}
    </div>
  )
}

export default Study;