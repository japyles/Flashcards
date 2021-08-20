import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import NotFound from "./NotFound";
import Deck from './Deck';
import Study from './Study';

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/decks/:deckId' component={Deck} />
        <Route path='/decks/:deckId/study' component={Study} />
        <Route>
          <NotFound />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
