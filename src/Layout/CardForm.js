import React from 'react';
import { Link } from 'react-router-dom';


const CardForm = ( { handleSubmit, handleChangeFront, handleChangeBack, card, deckId }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='mr-3'>Front</label>
                    <textarea 
                    name='front'
                    value={card.front}
                    onChange={handleChangeFront}
                    id='front'
                    placeholder='Front side of card'
                    rows='3'
                    cols='100'
                    />
                </div>
                <div>
                    <label className='mr-3'>Back</label>
                    <textarea
                    name='back'
                    value={card.back}
                    onChange={handleChangeBack}
                    id='back'
                    placeholder='Back side of card'
                    rows='3'
                    cols='100'
                    />
                </div>
                <Link to={`/decks/${deckId}`} name='cancel' className="btn btn-secondary mr-3">Done</Link>
                <button type='submit' className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default CardForm;