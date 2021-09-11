import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../utils/api/index";
import CardForm from './CardForm';


function EditCard(){

    const [card, setCard] = useState({ deckId: '', front: '', back:''});
    const [deck, setDeck] = useState([]);
    const history = useHistory();
    const { cardId, deckId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        readCard(cardId, controller.signal)
          .then(data => {
          setCard(data)
        })
        return () => controller.abort();
      }, [cardId]);

      useEffect(() => {
        const controller = new AbortController();
        readDeck(deckId, controller.signal)
          .then(data => {
          setDeck(data)
        })
        return () => controller.abort();
      }, [deckId]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        card.id = cardId
        await updateCard(card);
        // history.push(`/decks/${card.deckId}/cards/${cardId}`);
        history.push(`/decks/${deck.id}`);
    }
    
    const handleChange = (event) => { 
        setCard({...card,[event.target.name]:event.target.value})
    }
    console.log(handleChange)
    return (
   
        <div className="col-9 mx-auto">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`Deck ${deck.name}`}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
                </ol>
            </nav>

            <h1>Edit Card</h1>
            
            <CardForm 
            handleSubmit={handleSubmit}
            card={card}
            // link={`/decks/${deck.id}/cards/${cardId}`}
            deck={deck}
            handleChangeFront={handleChange}
            handleChangeBack={handleChange}
            />
        </div>
    )
}

export default EditCard;