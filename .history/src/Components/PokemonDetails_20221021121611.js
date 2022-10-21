import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, CardBody, CardTitle } from "reactstrap";



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
        console.log(res.data)
        setPokemonResponse(res.data);
    }

    function getAbilitiesAndMoves(){
        //console.log(pokemonResponse.abilities.length);
        if(typeof pokemonResponse.abilities != "undefined" ){
        let abilitiesarr = pokemonResponse.abilities
       console.log(abilitiesarr);
       let s = ""
       for(var i=0;i<abilitiesarr.length;i++){
        s+=abilitiesarr[i].ability.name
        s+=","
        //console.log(abilities.toString);
       }
       setStringAbilities(s.substring(0,s.length-1));
       
    }
    }

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${pokemonResponse.id}`+".png";
    return(
        <div>
            <Card>
                <CardTitle><img src={imageUrl} alt={pokemonResponse.name}></img></CardTitle>
                <CardBody>
                <p>Pokemon Name: {pokemonResponse.name}</p>
                <p>Pokemon weight: {pokemonResponse.weight}</p>
                <p>Pokemon height: {pokemonResponse.height}</p>
                {stringAbilities != "" &&  <p>Pokemon Abilities: {stringAbilities}</p>}
                </CardBody>
            </Card>

        </div>
    )
}

export default PokemonDetails;