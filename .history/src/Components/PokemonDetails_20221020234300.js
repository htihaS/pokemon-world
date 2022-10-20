import axios from "axios";
import React, { useEffect } from "react";


const PokemonDetails =(props)=>{

    const url = props.url;

    useEffect((url)=>{
        getPokemonImage(url);
        getPokemonDetails(url);
    },[])

    function getPokemonDetails(url){
        axios.get(`${url}`).then(
            (response)=>{
                console.log("Name: ",response.data.name);
                console.log("Heigth: ",response.data.height);
                console.log("",response.data.weight);

            },
            (error)=>{

            }
        )
    }
// name, height, weight, abilities, moves,
    function getPokemonImage(url){
        
    }

    return(
        <h1>Pokemon Detail {url}</h1>
    )
}

export default PokemonDetails;