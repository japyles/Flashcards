import React from 'react'
import { Route, Link } from 'react-router-dom';
import View from './View';
import Create from './Create';
import Delete from './Delete';
import Study from './Study';

const Card = () => {
  
  return (
    <div>
      <Link to='/decks/new'>Create</Link>
      
      
      <Route path='/decks/new'>
        <Create />
      </Route>
      <h2>Rendering In React</h2>
      <p>
        React's component structure allows for quickly building a complex web application that relies on DOM manipulation. 
      </p>
      <Link to=''>View</Link>
      <Link to='/decks/:deckId/study'>Study</Link>
      <Link to=''>Delete</Link>
      
      <Route>
        <View />
      </Route>
      <Route path='/decks/:deckId/study'>
        <Study />
      </Route>
      <Route>
        <Delete />
      </Route>
    </div>
  )
}

export default Card;