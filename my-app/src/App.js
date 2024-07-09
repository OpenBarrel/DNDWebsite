import style from './style.css'
import Home from './pages/home';
import Testpage from './pages/testpage';
import Spells from './pages/spells';
import Races from './pages/races';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';

function App() {

  const tabs = [0,1,2,3,4,5,6,7,8,9];

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Testpage/>}/>
          <Route path='/spells' element={<Spells level={0}/>}/>
          <Route path='/races' element={<Races/>}/>
          // creates routes for all spell pages using .map()
          {tabs.map( (level) => (<Route path={'/spells/'+level} element={<Spells level={level}/>}/>))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;