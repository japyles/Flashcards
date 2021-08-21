import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { readDeck } from '../utils/api/index';

const Deck = ({deck}) => {
  
  // const [deck, setDeck] = useState([]);
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
      {deck.cards && deck.cards.map((cards) => 
        <div key={cards.id}>
          <h3>{cards.name}</h3>
          <p>{cards.description}</p>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <button>Delete</button>
        </div>
      )}
    </div>
  )
}

export default Deck;