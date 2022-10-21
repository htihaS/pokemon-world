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
        //console.log(pokemonResponse.abilities);
       let abilitiesarr = pokemonResponse.abilities
       con
       for(var i=0;i<abilitiesarr.length;i++){
        console.log(abilitiesarr[i].ability.name)
        //console.log(abilities.toString);
       }
    }

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${pokemonResponse.id}`+".png";
    var abilitiesString =abilities.toString;
    return(
        <div>
            <Card>
                <CardTitle><img src={imageUrl} alt={pokemonResponse.name}></img></CardTitle>
                <CardBody>
                <p>Pokemon Id: {pokemonResponse.id}</p>
                <p>Pokemon Name: {pokemonResponse.name}</p>
                <p>Pokemon weight: {pokemonResponse.weight}</p>
                <p>Pokemon height: {pokemonResponse.height}</p>
                <p>Pokemon Abilities: {abilitiesString}</p>
                </CardBody>
            </Card>

        </div>
    )
}

export default PokemonDetails;