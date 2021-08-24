import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { createCard, readDeck } from '../utils/api/index';
import CardForm from './CardForm';


const NewCard = () => {

    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({ front:'', back:'', deckId:''});
    const { deckId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        readDeck(deckId, controller.signal)
          .then(data => {
          setDeck(data)
        })
        return () => controller.abort();
      }, [deckId]);

      const handleSubmit = (event) => {
          event.preventDefault();
          setCard({...card, deckId:deckId})
          createCard(deckId, card)
          setCard({front:'', back:'', deckId:''})
      }

      const handleChangeFront = (event) => {
          setCard({...card, front: event.target.value})
      }

      const handleChangeBack = (event) => {
          setCard({...card, back: event.target.value})
      }


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://home/decks">DeckName</Breadcrumb.Item>
                <Breadcrumb.Item active>Add Card</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{deck.name}: Add Card</h1>
            <CardForm 
            handleSubmit={handleSubmit}
            card={card}
            handleCangeFront={handleChangeFront}
            HandleChangeBack={handleChangeBack}
            />
        </div>
        
    )
}

export default NewCard;