import React, { useEffect } from "react";


const PokemonDetails =(props)=>{

    const url = props.url;

    useEffect(()=>{
        getPokemonImage(url);
        getPokemonDetails();
    },[])

    function getPokemonDetails(){

    }

    function getPokemonImage

    return(
        <h1>Pokemon Detail {url}</h1>
    )
}

export default PokemonDetails;