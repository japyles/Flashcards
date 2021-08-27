import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, updateCard } from "../utils/api/index";
import CardForm from './CardForm';


function EditDeck(){

    const [card, setCard] = useState({ id: 0, name:'', description:''})
    const history = useHistory();
    const { cardId, deckId } = useParams;

    useEffect(() => {
        const controller = new AbortController();
        readCard(cardId, controller.signal)
          .then(data => {
          setCard(data)
        })
        return () => controller.abort();
      }, [cardId]);

    const handleSubmit = (event) => {
        event.preventDefault()
        updateCard(card);
        history.push(`/decks/${card.deckId}/cards/${cardId}`);
    }
    
    const handleChange=(event)=>{
        setCard({...card,[event.target.name]:event.target.value})
    }

    return (
   
        <div className="col-9 mx-auto">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/decks/deckId">{`Deck ${deckId}`}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
                </ol>
            </nav>

            <h1>Edit Card</h1>
            
            <CardForm 
            handleSubmit={handleSubmit}
            card={card}
            link={`/decks/${card.deckId}/cards/${cardId}`}
            handleCangeFront={handleChange}
            HandleChangeBack={handleChange}
            />
        </div>
    )
}

export default EditDeck;