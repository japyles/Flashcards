import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { readDeck, deleteDeck, deleteCard } from '../utils/api/index';

const Deck = () => {
  
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const { history } = useHistory();
  const { url } = useRouteMatch();

  const { id, name, description, cards } = deck;
  
  useEffect(() => {
    const controller = new AbortController();
    readDeck(deckId, controller.signal)
      .then(data => {
      setDeck(data)
    })
    return () => controller.abort();
  }, [deckId]);

  const deleteDeckHandler = () => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(deckId);
      history.push('/');
    } else {
      history.go(0);
    }
  }

  
  return (
    <div>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">{name}</li>
      </ol>
    </nav>
      
      <div key={id} className='mb-5'>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`./decks/${id}/edit`} className='btn btn-secondary mr-2'>Edit</Link>
        <Link to={`/decks/${id}/study`} className='btn btn-secondary mr-2'>Study</Link>
        <Link to={`/decks/${id}/cards/new`} className='btn btn-secondary mr-2'>Add Card</Link>
        <button onClick={() => deleteDeckHandler} className='btn btn-secondary'>Delete</button>
      </div>

      {/* Display cards with front and back */}
        <h2>Cards</h2>
        {cards && cards.map((card) => 
          <div key={card.id}>
            <p>{card.front}</p>
            <p>{card.back}</p>
            <Link to={`${url}/cards/${card.id}/edit`}>Edit</Link>
            <button onClick={() => {
              if (window.confirm('Delete this card?')) {
                deleteCard(card.id);
                history.go(0);
              } else {
                history.go(0);
              }
            }}>Delete</button>
          </div>
        
        )}
    </div>
  )
}

export default Deck;