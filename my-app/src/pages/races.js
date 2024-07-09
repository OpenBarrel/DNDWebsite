import { useEffect, useState } from 'react';
import { getAllRaces } from '../D&DHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Races() {
    const [races, setRaces] = useState([]);

    // used to save once loaded to reduce load times
    useEffect( () => {
      const savedRaces = localStorage.getItem("races");
      if (savedRaces) setRaces(JSON.parse(savedRaces));
      getAllRaces().then( (races) => {
        setRaces(races);
        localStorage.setItem("races", JSON.stringify(races));
      });
      
      }, []);

      return (
        <div>
            <ul>
                {races.map((race) => (
                    <li id='race' key={race.index}> 
                    {race.name} 
                      <li id='trait'>{race.alignment}</li>
                      <li id='trait'>{race.size_description}</li>
                      <li id='trait'>{race.language_desc}</li>       
                    </li>
                ))}
            </ul>
        </div>
      );

}