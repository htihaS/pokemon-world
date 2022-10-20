import axios from "axios";
import React, { useEffect } from "react";
//import { Button } from "reactstrap";


const PokemonDetails =(props)=>{

    const url = props.url;

    useEffect((url)=>{
        getPokemonImage(url);
        getPokemonDetails(url);
    },)

    function getPokemonDetails(url){
        axios.get(`${url}`).then(
            (response)=>{
                console.log("HI",response.data);
                // console.log("Name: ",response.data.name);
                // console.log("Height: ",response.data.height);
                // console.log("Weight: ",response.data.weight);

            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    }
// name, height, weight, abilities, moves,
    function getPokemonImage(url){
        
    }

    return(
        <div>
            <h1>Pokemon Detail {url}</h1>
            <
        </div>
    )
}

export default PokemonDetails;