import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../utils/api/index';

const Study = () => {
  
  const [flip, setFlip] = useState(true);
  const [deck, setDeck] = useState([]);
  const [cardId, setCardId] = useState(0);
  const { deckId } = useParams();
  const history = useHistory();

  const { name, cards } = deck;
  
  useEffect(() => {
    const controller = new AbortController();
    readDeck(deckId, controller.signal)
      .then(data => {
      setDeck(data)
    })
    return () => controller.abort();
  }, [deckId]);
  
  const nextHandleChanger = () => {

    setCardId(cardId + 1)
    
    if (cardId + 1 === cards.length) {
      if (window.confirm(`Restart cards? 
      
        Click "cancel" to return to the home page.`)) {
         setCardId(0);
      } else {
        history.push('/');
      }
    } 
  }

  if (cards && cards.length < 3) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Study</li>
          </ol>
        </nav>

        <h2>Not enough cards</h2>
        <p>{`You need at least 3 cards to study. There are ${cards.length} cards in this deck.`}</p>
        <Link to={`/decks/${deckId}/cards/new`} className='btn btn-secondary mr-2'>Add Card</Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Study: <span>{`${name}`}</span></h1>
        {cards && cards.filter((cards, index) => index === cardId)
          .map((card, index) => 
            <div key={card.id}>
              <p>{`Card ${cardId + 1} of ${cards.length}`}</p>
              { flip === true ? <p>{card.front}</p> : 
            
              ( <div>
                  <p>{card.back}</p>
                  <button onClick={() => nextHandleChanger()}>Next</button>
                </div> 
                )}
            </div> 
            )}
        <button onClick={() => setFlip(!flip)}>Flip</button>
      </div>
    )
  }
}

export default Study;