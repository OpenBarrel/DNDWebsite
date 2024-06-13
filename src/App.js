import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Testpage from './pages/testpage';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Testpage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;