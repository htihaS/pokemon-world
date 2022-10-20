import React, { useEffect, useState } from 'react';
import { ListGroup } from 'reactstrap';
import axios from "axios";
import PokemonDetails from './PokemonDetails';
import { Link } from 'react-router-dom';

const Sidebar =()=>{

    const [pokemon,setPokemon] = useState([])
    const [selectedPokemonUrl,setSelectedPokemonUrl] = useState();
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

    function showPokemon(selectedPokemon){
        console.log(selectedPokemon.url);
        setSelectedPokemonUrl(selectedPokemon.url);
    }

    return(
        <div>
            {
                pokemon.length > 0? pokemon.map((item=> (<ListGroup><Link tag ='a' to='/pokemondetails' onClick={()=>{showPokemon(item)}}>{item.name}</Link></ListGroup> ) )): "No pokemon"
            }
            {}
                selectedPokemonUrl.length != undefined ?
                <PokemonDetails url={selectedPokemonUrl}></PokemonDetails>:"";
            }
        
        </div>
        )
}

export default Sidebar;