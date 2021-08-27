import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index";


function EditDeck(){

    const [deck, setDeck] = useState({ id: 0, name:'', description:''})
    const history = useHistory();
    const { deckId } = useParams;

    useEffect(() => {
        const controller = new AbortController();
        readDeck(deckId, controller.signal)
          .then(data => {
          setDeck(data)
        })
        return () => controller.abort();
      }, [deckId]);

    const handleSubmit = (event) => {
        event.preventDefault()
        updateDeck(deck);
        history.push(`/decks/${event.id}`);
    }
    
    const handleChange=(event)=>{
        setDeck({...deck,[event.target.name]:event.target.value})
    }

    return (
   
        <div className="col-9 mx-auto">

            <h1>Edit Deck</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={deck.name}
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
                value={deck.description}
                style={{ width: "100%" }}
                className='mb-3'
                />
            </div>
            {/* <Link to="/decks/deckId" className="btn btn-secondary mr-3">Cancel</Link> */}
            <button className='btn btn-secondary mr-2' onClick={() => history.go(-1)}>Cancel</button>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditDeck;




// import React, { useState, useEffect } from "react";
// import { Link, useHistory, useParams } from "react-router-dom";
// import { readDeck, updateDeck } from "../utils/api/index";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';


// function EditDeck(){

//     const [deck, setDeck] = useState({ id: 0, name:'', description:''})
//     const history = useHistory();
//     const { deckId } = useParams;

//     useEffect(() => {
//         const controller = new AbortController();
//         readDeck(deckId, controller.signal)
//           .then(data => {
//           setDeck(data)
//         })
//         return () => controller.abort();
//       }, [deckId]);

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         updateDeck(deck);
//         history.push(`/decks/${event.id}`);
//     }

//     const handleChange=(event)=>{
//         setDeck({...deck,[event.target.name]:event.target.value})
//     }

//     return (
   
//         <div className="col-9 mx-auto">
//             <Breadcrumb>
//                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item active>{`Deck ${deck.name}`}</Breadcrumb.Item>
//             </Breadcrumb>

//             <h1>Edit Deck</h1>
            
//             <form onSubmit={handleSubmit}>
//                 <div>
//                 <label>Name:</label>
//                 <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 value={setDeck.name}
//                 style={{ width: "100%" }}
//                 />
//                 </div>
                
//                 <div className='mt-4'>
//                 <label>Description:</label> 
//                 <textarea
//                 id="description"
//                 type="textarea"
//                 name="description"
//                 rows="3"
//                 onChange={handleChange}
//                 value={setDeck.description}
//                 style={{ width: "100%" }}
//                 className='mb-3'
//                 />
//             </div>
//             <Link to="/decks/:deckId" className="btn btn-secondary mr-3">Cancel</Link>
//             <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default EditDeck;