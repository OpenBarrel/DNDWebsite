import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Spells(props) {
    const [spells, setSpells] = useState([]);
    const spellLevel = props.level;
    const tabs = [1,2,3,4,5,6,7,8,9];

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
        <ul className='nav nav-tabs'>
            {tabs.map( (level) => (<li><a href={'#spells/' + level} >Level {level}</a></li>) )}
        </ul>
        <ul>
          {spells.map((spell) => ( spell.level === spellLevel ?
          <li key={spell.index}> {spell.name} - {spell.level} - {spell.school.name}</li> 
        : null))} 
        </ul>
      </div>
    ); 
}