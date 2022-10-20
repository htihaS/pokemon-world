import './App.css';
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/show Pokemon' element={<PokemonData></PokemonData>}
      </Routes>


      </Router>
    </div>
  );
}

export default App;
