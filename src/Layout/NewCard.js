import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="https://home/decks">{deck.name}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

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