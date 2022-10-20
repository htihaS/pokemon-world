import React from "react";


const PokemonDetails =(props)=>{

    const url = props.url;
    return(
        <h1>Pokemon  Detail {url}</h1>
    )
}

export default PokemonDetails;