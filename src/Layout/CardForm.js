import React from 'react';
import { Link, useParams } from 'react-router-dom';


const CardForm = ( { handleSubmit, handleChangeFront, handleChangeBack, card, deck }) => {

    const { deckId } = useParams();
    console.log(handleChangeFront)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column mb-3'>
                    <label className='mr-3'>Front</label>
                    <textarea 
                    name='front'
                    defaultValue={card.front}
                    onChange={handleChangeFront}
                    id='front'
                    placeholder='Front side of card'
                    rows='3'
                    cols='100'
                    />
                </div>
                <div className='d-flex flex-column mb-3'>
                    <label className='mr-3'>Back</label>
                    <textarea
                    name='back'
                    defaultValue={card.back}
                    onChange={handleChangeBack}
                    id='back'
                    placeholder='Back side of card'
                    rows='3'
                    cols='100'
                    />
                </div>
                <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-3">Done</Link>
                <button type='submit' className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default CardForm;