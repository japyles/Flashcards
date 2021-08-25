import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { createDeck} from "../utils/api/index";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


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
            <Breadcrumb>
               <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Create Deck</Breadcrumb.Item>
            </Breadcrumb>
            
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label> <br />
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






// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import DeckForm from './DeckForm';
// import { createDeck } from '../utils/api/index';


// const NewDeck = () => {

//     const [newDeck, setNewDeck] = useState({name:'', description:''})
//     const history = useHistory();

    // useEffect(() => {
    //     const controller = new AbortController();
    //     createDeck(newDeck, controller.signal)
    //       .then(data => {
    //       createDeck(data)
    //     })
    //     return () => controller.abort();
    //   }, [newDeck]);

//     const submitFunction = (event) => {
//         event.preventDefault();
        
//     }

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item active>Create Deck</Breadcrumb.Item>
//             </Breadcrumb>
//             <h1>Create Deck</h1>
//             <DeckForm submitFunction={() => submitFunction}/>
//         </div>
//     )
// }

// export default NewDeck;