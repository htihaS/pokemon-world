import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, CardBody, CardTitle } from "reactstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';


const PokemonDetails =(props)=>{
    
    // const [abilities,setAbilites] = useState([]);
    // const [moves,setMoves] = useState([]);
    const [stringAbilities,setStringAbilities] = useState("");
    const [stringMoves,setStringMoves] = useState("");

    const [pokemonResponse,setPokemonResponse] =useState({});

    const url = props.url;
    

    useEffect(()=>{
        //getPokemonImage(url);
        //console.log(url);
        getPokemonDetails();
    },[url])

    useEffect(()=>{
        //console.log("abilities: ",pokemonResponse.abilities);
        if( typeof pokemonResponse.abilities != "undefined" || pokemonResponse.abilities != []){
            getAbilitiesAndMoves();
        }
    },[pokemonResponse])

     async function getPokemonDetails(){
        const res = await axios.get(`${url}`)
        //console.log(res.data)
        setPokemonResponse(res.data);
    }

    function getAbilitiesAndMoves(){
        //console.log(pokemonResponse.abilities.length);
        if(typeof pokemonResponse.abilities != "undefined" ){
        let abilitiesarr = pokemonResponse.abilities
       //console.log(abilitiesarr);
       let s = "";
       for(var i=0;i<abilitiesarr.length;i++){
        s+=abilitiesarr[i].ability.name
        s+=","
        //console.log(abilities.toString);
       }
       setStringAbilities(s.substring(0,s.length-1));
    }
    if(typeof pokemonResponse.moves != "undefined"){
        let movesarr = pokemonResponse.moves;
        // console.log(movesarr);
        let s ="";
        for(var j=0;j<1;j++){
            s+=movesarr[i].move.name;
        }
        setStringMoves(s);
    }
    }

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${pokemonResponse.id}`+".png";
    return(
        <div>
            <Card>
                <CardTitle class><img src={imageUrl} alt={pokemonResponse.name}></img></CardTitle>
                <CardBody>
                <p>Pokemon Name: {pokemonResponse.name}</p>
                <p>Pokemon weight: {pokemonResponse.weight}</p>
                <p>Pokemon height: {pokemonResponse.height}</p>
                {stringAbilities != "" &&  <p>Pokemon Abilities: {stringAbilities}</p>}
                {stringMoves != "" && <p>Pokemon Moves: {stringMoves}</p>}
                </CardBody>
            </Card>

        </div>
    )
}

export default PokemonDetails;