import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Title } from '../Components/Header';
import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';

function printContents(string) {
  
    console.log(string);
  }
  
  function TableRow(props){
    return(
      <div class="row">
        <div class="col"><Button onClick={() => printContents(props.name1)}>{props.name1}</Button></div>
        <div class="col"><Button onClick={() => printContents(props.name2)}>{props.name2}</Button></div>
        <div class="col"><Button onClick={() => printContents(props.name3)}>{props.name3}</Button></div>
      </div>
    );
  }
  
  function Table(){
    return(
      <div class="container text-center">
        <TableRow name1="Coal" name2="Oil" name3="Natural Gas"></TableRow>
        <TableRow name1="Nuclear" name2="Solar" name3="Wind"></TableRow>
        <TableRow name1="Water" name2="Geothermal" name3="Biofuel"></TableRow>
      </div>
    );
  }

  function Home(){

    const [spells, setSpells] = useState([]);
    const spellLevel = 1;

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