import React, { useEffect } from "react";


const PokemonDetails =(props)=>{

    const url = props.url;

    useEffect((url)=>{
        getPokemonImage(url);
        getPokemonDetails(url);
    },[])

    function getPokemonDetails(url){
        
    }
// name, height, weight, abilities, moves,
    function getPokemonImage(url){
        
    }

    return(
        <h1>Pokemon Detail {url}</h1>
    )
}

export default PokemonDetails;