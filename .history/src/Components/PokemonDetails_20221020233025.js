import React, { useEffect } from "react";


const PokemonDetails =(props)=>{

    

    useEffect(()=>{
        getPokemonImage(url);
        getPokemonDetails();
    },[])

    function getPokemonDetails(){

    }

    function getPokemonImage(url){

    }

    return(
        <h1>Pokemon Detail {url}</h1>
    )
}

export default PokemonDetails;