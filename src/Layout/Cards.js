import React from 'react'

const Cards = ({deck}) => {
  
  return (
    <div>
      {deck.cards && deck.cards.map((cards) => 
        <div key={cards.id}>
          <h2>Cards</h2>
          <p>{cards.front}</p>
          <p>{cards.back}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  )

}

export default Cards;
