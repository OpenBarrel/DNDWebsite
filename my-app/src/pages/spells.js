import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Spells(props) {
    const [spells, setSpells] = useState([]);
    const [useClass, setUseClass] = useState([]);
    const spellLevel = props.level;
    const tabs = [0,1,2,3,4,5,6,7,8,9];
    let classFiltering = props.checkClass;

    // used to save once loaded to reduce load times
    useEffect( () => {
      const savedSpells = localStorage.getItem("spells");
      if (savedSpells) setSpells(JSON.parse(savedSpells));
      getAllSpells().then( (spells) => {
        setSpells(spells);
        localStorage.setItem("spells", JSON.stringify(spells));
      });
    
    }, []);

    
    // maps each spell for display, filters by spell level and optionally filters by class
    return (
      <div>
        <ul className='nav nav-tabs'>
            {tabs.map( (level) => (<li><a href={'#spells/' + level} >Level {level}</a></li>) )}
            <button onClick={() => (setUseClass(!useClass))}>Use Classes: {useClass.toString()}</button>
        </ul>
        <ul>
          {spells.filter((spell) => ((spell.level === spellLevel)))
          .filter((spell) => (useClass === true ? (spell.classes
          .some(name => name.index === 'cleric')): true)).map((spell) => ( 
          <li key={spell.index}> {spell.name} - {spell.level === 0 ? 'Cantrip' : spell.level} - {spell.school.name}</li> 
        ))} 
        </ul>
      </div>
    ); 
}