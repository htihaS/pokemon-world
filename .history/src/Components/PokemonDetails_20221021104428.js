import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, CardBody, CardTitle } from "reactstrap";



const PokemonDetails =(props)=>{
    
    const [abilities,setAbilites] = useState([]);
    const [moves,setMoves] = useState([]);
    
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
                getAbilitiesMoves();
            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    }

    function getAbilitiesMoves(){
        console.log(pokemonResponse.abilities);
        pokemonResponse.abilities.map((item)=>{
            if(item ==="ability"){
                setAbilites(item.name);
            }
        })
        console.log()
    }

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${pokemonResponse.id}`+".png";

    return(
        <div>
            <Card>
                <CardTitle><img src={imageUrl} alt={pokemonResponse.name}></img></CardTitle>
                <CardBody>
                <p>Pokemon Id: {pokemonResponse.id}</p>
                <p>Pokemon Name: {pokemonResponse.name}</p>
                <p>Pokemon weight: {pokemonResponse.weight}</p>
                <p>Pokemon height: {pokemonResponse.height}</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default PokemonDetails;