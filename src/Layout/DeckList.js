import React, { useEffect, useState } from 'react';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import { listDecks } from '../utils/api/index';
import Deck from './Deck';
import Study from './Study';

const DeckList = () => {
  
  const [decks, setDecks] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    listDecks(controller.signal)
      .then(data => {
      setDecks(data)
    })
    return () => controller.abort();
  }, []);
  
  return (
    <div>
      {decks.map(deck => 
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          <span>{deck.cards.length} cards</span>
          <p>{deck.description}</p>
          <Link to={`/decks/${deck.id}`}>View</Link>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <Link to=''>Delete</Link>
          </div>
       )}
    </div>
  )
}

export default DeckList;