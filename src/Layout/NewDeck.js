import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { createDeck} from "../utils/api/index";

function NewDeck(){
    const history =useHistory();
    const [newDeck, setNewDeck] = useState({name:"", description:""})


    const handleSubmit = (event) => {
        event.preventDefault()
        createDeck(newDeck);
        history.push(`/decks/${event.id}`);//takes back to deck list
    }
    const handleChange=(event)=>{
        setNewDeck({...newDeck,[event.target.name]:event.target.value})
    }
    return (
   
        <div className="col-9 mx-auto">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>

            <h1>Create Deck</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={newDeck.name}
                style={{ width: "100%" }}
                />
                </div>
                
                <div className='mt-4'>
                <label>Description:</label> 
                <textarea
                id="description"
                type="textarea"
                name="description"
                rows="3"
                onChange={handleChange}
                value={newDeck.description}
                style={{ width: "100%" }}
                className='mb-3'
                />
            </div>
            <Link to="/" className="btn btn-secondary mr-3">Cancel</Link>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewDeck;