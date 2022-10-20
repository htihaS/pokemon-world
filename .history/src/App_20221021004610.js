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
      <Sidebar></Sidebar>
      axios.get(`${url}`).then(
            (response)=>{
                console.log("HI",response.data);
                // console.log("Name: ",response.data.name);
                // console.log("Height: ",response.data.height);
                // console.log("Weight: ",response.data.weight);

            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    </div>
  );
}

export default App;
