import React from "react";
import { Link } from "react-router-dom";
import { useState,Us } from "react";

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
            <Link tag="a" to="/">Home</Link>
            <Link tag="a" to="/pokemondetails">PokemonDetails</Link>
        </div>
        )
}

export default Sidebar;