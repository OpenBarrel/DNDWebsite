import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Title } from '../Components/Header';
import{ getAllSpells } from '../D&DHandler'
import { useEffect, useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';

  function Home(props){
    return (
      <>
        <p>Welcome to my D&D Wiki!</p>
      </>
    );
  }


export default Home;