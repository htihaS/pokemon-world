import './App.css';
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';
import Home from './Components/Home';
import PokemonDetails from './Components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pokemondetails' element={<PokemonDetails/>} /></Route>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
