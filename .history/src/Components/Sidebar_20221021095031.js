import React, { useEffect, useState } from 'react';
import {  Row , Col , Container } from 'reactstrap';
import axios from "axios";
import PokemonDetails from './PokemonDetails';
//import { Link } from 'react-router-dom';


const Sidebar =()=>{

    const [pokemon,setPokemon] = useState([])
    const [selectedPokemonUrl,setSelectedPokemonUrl] = useState("");
    const pokemonNamesUrl = "https://pokeapi.co/api/v2/pokemon?limit=10" 

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
        <div>
            
                    {
                        pokemon.length > 0? pokemon.map((item=> (<ul><li onClick={()=>{
                            setSelectedPokemonUrl(item.url);
                        }}>{item.name}</li></ul> ) )): "No pokemon"
                    }
               
                    {
                        selectedPokemonUrl !== "" ? (<PokemonDetails url={selectedPokemonUrl}></PokemonDetails>):null
                    
                    }
               

        </div>
        )
}

export default Sidebar;