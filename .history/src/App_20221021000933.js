import './App.css';
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';
import Home from './Components/Home';
//import PokemonDetails from './Components/PokemonDetails';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element = {<Home/>} />
        {/* <Route path='/pokemondetails' element = {<PokemonDetails/>} />  */}
      </Routes>

      </Router>
    </div>
  );
}

export default App;
