import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, updateCard } from "../utils/api/index";
import CardForm from './CardForm';


function EditDeck(){

    const [card, setCard] = useState({ id: 0, name:'', description:''})
    const history = useHistory();
    const { cardId } = useParams;

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