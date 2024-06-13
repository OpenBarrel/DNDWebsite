import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Title } from '../Components/Header';
import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';

  function Home(){

    const [spells, setSpells] = useState([]);
    const spellLevel = 1;

    // used to save once loaded to reduce load times
    useEffect( () => {
      const savedSpells = localStorage.getItem("spells");
      if (savedSpells) setSpells(JSON.parse(savedSpells));
      getAllSpells().then( (spells) => {
        setSpells(spells);
        localStorage.setItem("spells", JSON.stringify(spells));
      });
    
    }, []);

    return (
      <div>
        <ul>
          {spells.map((spell) => ( spell.level === spellLevel ?
          <li key={spell.index}> {spell.name} - {spell.level}</li> 
        : null))}
        </ul>
      </div>
    );
  }


export default Home;