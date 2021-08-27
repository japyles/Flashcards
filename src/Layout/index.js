import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import NotFound from "./NotFound";
import Deck from './Deck';
import Study from './Study';
import NewCard from './NewCard';
import NewDeck from './NewDeck';
import EditDeck from './EditDeck';
import EditCard from './EditCard';

function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/decks/new'>
            <NewDeck />
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <NewCard />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;