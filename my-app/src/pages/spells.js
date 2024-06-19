import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js//bootstrap.bundle.min.js';


export default function Spells(props) {
    const [spells, setSpells] = useState([]);
    const [useClass, setUseClass] = useState([]);
    const [selectedClass, setClass] = useState([]);
    const spellLevel = props.level;
    const tabs = [0,1,2,3,4,5,6,7,8,9];
    const classes =['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard'];

    // used to save once loaded to reduce load times
    useEffect( () => {
      setUseClass(false);
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
            <button class="btn btn-secondary" onClick={() => (setUseClass(!useClass))}>Use Classes: {useClass.toString()}</button>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Class: {selectedClass}
              </button>
              <div class="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                {classes.map( (name) => (<button class="dropdown-item" type="button" onClick={() => setClass(name)}>{name}</button>))}
              </div>
            </div>
        </ul>
        <ul>
          {spells.filter((spell) => ((spell.level === spellLevel)))
          .filter((spell) => (useClass === true ? (spell.classes
          .some(name => name.index === selectedClass.toString())): true)).map((spell) => ( 
          <li key={spell.index}> {spell.name} - {spell.level === 0 ? 'Cantrip' : spell.level} - {spell.school.name}</li> 
        ))} 
        </ul>
      </div>
    ); 
}