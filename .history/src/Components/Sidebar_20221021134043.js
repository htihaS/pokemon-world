import React, { useEffect, useState } from 'react';
//import {  Row , Col , Container } from 'reactstrap';
import axios from "axios";
import PokemonDetails from './PokemonDetails';
//import { Link } from 'react-router-dom';


const Sidebar =()=>{

    const [pokemon,setPokemon] = useState([])
    const [selectedPokemonUrl,setSelectedPokemonUrl] = useState("");
    const pokemonNamesUrl = "https://pokeapi.co/api/v2/pokemon?limit=100" 

    useEffect(()=>{
        getPokemonData();
    },[])

    function getPokemonData(){
        axios.get(`${pokemonNamesUrl}`).then(
            (response) =>{
                setPokemon(response.data.results)
            },
            (error) => {
                console.log("error in fetching data");
            }
            )
    }
   

    return(
        <div className='home'>
                <div className='sidebar scrollbar list-group list-group-flush overflow-auto h-100'>
                    <ul className='ul-border'>{
                        pokemon.length > 0? pokemon.map((item)=> (<li className='list' onClick={()=>{
                            var ul = document.getElementById("list");

var listItems = ul.getElementsByTagName("li");

for(li of  listItems){
  li.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  })
}
                            setSelectedPokemonUrl(item.url);
                        }}>{item.name}</li> ) )  : "No pokemon"
                    }
                    </ul>
               </div>
               <div className='details'>
                    {
                        selectedPokemonUrl !== "" ? (<PokemonDetails url={selectedPokemonUrl}></PokemonDetails>):null
                    
                    }
               </div>

        </div>
        )
}

export default Sidebar;