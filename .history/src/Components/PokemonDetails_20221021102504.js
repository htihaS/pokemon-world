import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";



const PokemonDetails =(props)=>{

    const [id,setId] = useState();
    const [name,setName] = useState("");
    const [height,setHeight] = useState();
    const [weight,setWeight] = useState();
    const [abilities,setAbilites] = useState([]);
    const [moves,setMoves] = useState([]);

    const [details,setDetails] = useState({});
    const [pokemonResponse,setPokemonResponse] =useState({});

    const url = props.url;
    

    useEffect(()=>{
        //getPokemonImage(url);
        //console.log(url);
        getPokemonDetails();
    },[url])

    function getPokemonDetails(){
        axios.get(`${url}`).then(
            (response)=>{
                setPokemonResponse(response.data);
            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    }
// name, height, weight, abilities, moves,
    

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonResponse.id}.png";

    return(
        <div>
            <img src={imageUrl} alt={pokemonResponse.name}"></img>
            <p>Pokemon Id: {pokemonResponse.id}</p>
            <p>Pokemon Name: {pokemonResponse.name}</p>
            <p>Pokemon weight: {pokemonResponse.weight}</p>
            <p>Pokemon height: {pokemonResponse.height}</p>
            
        </div>
    )
}

export default PokemonDetails;