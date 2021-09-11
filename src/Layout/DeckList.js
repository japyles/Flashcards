import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { listDecks, deleteDeck } from '../utils/api/index';

const DeckList = () => {
  
  const [decks, setDecks] = useState([]);
  const history = useHistory(); 
  // const { deckId } = useParams();
  
  useEffect(() => {
    const controller = new AbortController();
    listDecks(controller.signal)
      .then(data => {
      setDecks(data)
    })
    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   deleteDeck(deckId, controller.signal)
  //     .then(data => {
  //     setDecks(data)
  //   })
  //   return () => controller.abort();
  // }, [deckId]);

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this deck? You will not be able to recover it.')) {
      await deleteDeck(id)
      history.go(0)
    } else {
      history.go(0)
    }
  };
  
  return (
    <div>
      
      <Link to='/decks/new' className='btn btn-secondary mb-3'>Create Deck</Link>

      {decks.map(deck => 
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          <span>{deck.cards.length} cards</span>
          <p>{deck.description}</p>
          <Link to={`/decks/${deck.id}`}>View</Link>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <button 
          onClick={() => deleteHandler(deck.id)}
          name='delete'
          value={deck.id}
          >Delete</button>
          </div>
       )}
    </div>
  )
}

export default DeckList;