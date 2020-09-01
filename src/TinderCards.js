import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import './TinderCard.css'
import database from './firebase.js';

/**err
* @author
* @function TinderCards
**/

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        return () => {
            unsubscribe();
        }
    }, [people]);
  return(
    <div>
       
        <div className= "TinderCards__Container">
            {people.map(person=> (
                 <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe= {['up','down']}
                    >
                    <div style = {{ backgroundImage: `url(${person.url})`}} className = "card">
                        <h3>{person.name}</h3>
                    </div>
        </TinderCard>
        ))}
        </div>
    </div>
    
   );

 }

export default TinderCards