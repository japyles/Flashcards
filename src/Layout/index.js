import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import NotFound from "./NotFound";
import Deck from './Deck';
import Study from './Study';
import NewCard from './NewCard';

function Layout() {

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
            <Deck />
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <NewCard />
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





  // const [deck, setDeck] = useState([]);
  // const { deckId } = useParams();

  // useEffect(() => {
  //     const controller = new AbortController();
  //     readDeck(deckId, controller.signal)
  //       .then(data => {
  //       setDeck(data)
  //     })
  //     return () => controller.abort();
  //   }, [deckId]);

  // const [decks, setDecks] = useState([]);
  
  // useEffect(() => {
  //   const controller = new AbortController();
  //   listDecks(controller.signal)
  //     .then(data => {
  //     setDecks(data)
  //   })
  //   return () => controller.abort();
  // }, []);