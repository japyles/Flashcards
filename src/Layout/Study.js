import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readDeck } from '../utils/api/index';

const Study = (title) => {
  
  const [deck, setDeck] = useState([]);
  const [flip, setFlip] = useState(true);
  const { deckId } = useParams();
  
  useEffect(() => {
    const controller = new AbortController();
    readDeck(deckId, controller.signal)
      .then(data => {
      setDeck(data)
    })
    return () => controller.abort();
  }, [deckId]);
  
  return (
    <div>
      {deck.cards && deck.cards.map((cards, index) => 
        <div key={cards.id}>
          <h1>`Study: ${title}`</h1>
          <p>`Card ${index + 1} of ${cards.length}`</p>
          { flip === true ? <p>{cards.front}</p> : (<div>
            <p>{cards.back}</p>
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