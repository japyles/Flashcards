import React from 'react';
import { useHistory } from 'react-router-dom';


const DeckForm = ( { submitFunction, deck={}, changeName, changeDescription }) => {

    const history = useHistory();

    const deckName = () => {
        return deck.name ? deck.name : '';
    }

    const deckDescription = () => {
        return deck.description ? deck.description : '';
    }

    return (
        <form>
            <div className='form-group'>
                <label htmlFor='nameInput'>Deck Name</label>
                <input 
                type='text'
                className='form-control'
                id='nameInput'
                value={deckName()}
                onChange={changeName}
                ></input>
            </div>
            <div className='form-group'>
                <label htmlFor='descriptionInput'>Deck Description</label>
                <textarea
                    className='form-control'
                    id='descriptionInput'
                    rows='3'
                    placeholder='Deck Description'
                    value={deckDescription()}
                    onChange={changeDescription}
                    required
                    />
            </div>
                <button type='button' className="btn btn-secondary mr-3" onClick={() => history.go(-1)}>Cancel</button>
                <button type='submit' className="btn btn-primary" onClick={submitFunction}>Submit</button>
            </form>
    )
}

export default DeckForm;