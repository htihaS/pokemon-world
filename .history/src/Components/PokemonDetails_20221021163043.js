import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, CardBody, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


const PokemonDetails =(props)=>{
    
    // const [abilities,setAbilites] = useState([]);
    // const [moves,setMoves] = useState([]);
    const [stringAbilities,setStringAbilities] = useState("");
    const [stringMoves,setStringMoves] = useState("");
    const [stats,setStats] = useState([]);

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
            getstats();
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

    function getstats(){
        if(typeof pokemonResponse.stats != "undefined"){
            let statsarr = pokemonResponse.stats;
            // console.log(statsarr[1].base_stat);
            // console.log(statsarr[1].stat.name);
            for(let i=0;i<statsarr.length;i++){
                let tempkey = statsarr[i].stat.name;
                let tempvalue = statsarr[i].base_stat;
                setStats({...stats,name:tempkey,value:tempvalue});
            }
            console.log(stats);
        }
    }

    const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${pokemonResponse.id}`+".png";
    return(
        <div>
            <Card>
                <CardTitle ><img class="pokemon-image" src={imageUrl} alt={pokemonResponse.name}></img></CardTitle>
                <CardBody>
                <h2><strong>{pokemonResponse.name}</strong></h2>
                <p>weight: {pokemonResponse.weight}</p>
                <p>height: {pokemonResponse.height}</p>
                {stringAbilities != "" &&  <p>Pokemon Abilities: {stringAbilities}</p>}
                {stringMoves != "" && <p>Pokemon Moves: {stringMoves}</p>}
                </CardBody>
                {/* {console.log(pokemonResponse.stats)} */}
                <ProgressBar now={20}/> 
            </Card>

        </div>
    )
}

export default PokemonDetails;