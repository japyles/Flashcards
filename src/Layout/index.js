import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import NotFound from "./NotFound";
import Deck from './Deck';
import Study from './Study';
import { readDeck } from '../utils/api/index';
// import { listDecks } from '../utils/api/index';

function Layout() {

  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
      const controller = new AbortController();
      readDeck(deckId, controller.signal)
        .then(data => {
        setDeck(data)
      })
      return () => controller.abort();
    }, [deckId]);

  // const [decks, setDecks] = useState([]);
  
  // useEffect(() => {
  //   const controller = new AbortController();
  //   listDecks(controller.signal)
  //     .then(data => {
  //     setDecks(data)
  //   })
  //   return () => controller.abort();
  // }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck deck={deck}/>
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study deck={deck}/>
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
