import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Testpage from './pages/testpage';
import Spells from './pages/spells';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';

function App() {

  const tabs = [1,2,3,4,5,6,7,8,9];

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home level={1}/>}/>
          <Route path='/test' element={<Testpage/>}/>
          <Route path='/spells' element={<Spells level={1}/>}/>
          <Route path='/spells/1' element={<Spells level={1}/>}/>
          <Route path='/spells/2' element={<Spells level={2}/>}/>
          <Route path='/spells/3' element={<Spells level={3}/>}/>
          <Route path='/spells/4' element={<Spells level={4}/>}/>
          <Route path='/spells/5' element={<Spells level={5}/>}/>
          <Route path='/spells/6' element={<Spells level={6}/>}/>
          <Route path='/spells/7' element={<Spells level={7}/>}/>
          <Route path='/spells/8' element={<Spells level={8}/>}/>
          <Route path='/spells/9' element={<Spells level={9}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;