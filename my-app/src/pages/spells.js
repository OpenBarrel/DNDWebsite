import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';
import SpellCard from '../Components/SpellCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

            {tabs.map( (level) => ( level === 0 ? <li class='nav-item'><a class="nav-link" id="spellLevels" href={'#spells/' + level}> Cantrips</a></li> : <li class='nav-item'><a class="nav-link" id="spellLevels" href={'#spells/' + level} > Level {level}</a></li>) )}
            
        </ul>
        <div class='container-fluid px-2' id='container'>
          <div class='row' id='spellHeader'>
            <div class='col-md-auto' id='filterCol'>
              <button class="btn btn-secondary" onClick={() => (setUseClass(!useClass))}>Use Classes: {useClass.toString().charAt(0).toUpperCase() + useClass.toString().slice(1)}</button>
            </div>

            <div class='col' id='filterCol'>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Class: {selectedClass.toString().charAt(0).toUpperCase() + selectedClass.slice(1)}
                </button>
                <div class="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                  {classes.map( (name) => (<button class="dropdown-item" type="button" onClick={() => setClass(name)}>{name.charAt(0).toUpperCase() + name.slice(1)}</button>))}
                </div>
              </div>       
            </div>
            </div>
            <div class='row'>
            <div class='col-md-auto'>
              <ul className='spellList'>
                {spells.filter((spell) => ((spell.level === spellLevel)))
                .filter((spell) => (useClass === true ? (spell.classes
                .some(name => name.index === selectedClass.toString())): true)).map((spell) => ( 
                // Actual spell stuff

                <SpellCard key={spell.index} spell={spell}/>
                //<li key={spell.index}> {spell.name} - {spell.level === 0 ? 'Cantrip' : spell.level} - {spell.school.name}</li> 
              ))} 
              </ul>
            </div>
          </div>
        </div>
      </div>
    ); 
}