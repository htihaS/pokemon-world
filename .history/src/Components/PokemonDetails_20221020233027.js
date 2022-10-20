import React, { useEffect } from "react";


const PokemonDetails =(props)=>{

    

    useEffect(()=>{
        const url = props.url;
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