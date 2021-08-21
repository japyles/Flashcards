import React from 'react';
import DeckList from './DeckList';

const Home = ({decks}) => {
  
  return (
    <div>
      <DeckList decks={decks}/>
    </div>
  )
}

export default Home;