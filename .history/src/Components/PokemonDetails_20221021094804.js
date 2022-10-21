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
    function getPokemonImage(){
        // const image = axios.get();
    }

    // function getdata(response){
    //     var result ={}
    //     result.id = response.id;
    //     result.name = response.name;
    //     result.height = response.height;
    //     result.weight = response.weight;
    //     result.abil = response.abilities;
    //     result.mv = response.moves;
    //     // for(var i=0;i<2;i++){
    //     //     result.abilities[i]=abil[i].ability.name;
    //     // }
    //     // for(var j=0;j<3;j++){
    //     //     result.moves[j]=mv[j].move.name;
    //     // }
    //     console.log(response.id);
    //     console.log(response.moves);
    //     return result;
        
    // }

    return(
        <div>
            <p>Pokemon Id: {pokemonResponse.id}</p>
            <p>Pokemon Name: {pokemonResponse.name}</p>
            <p>Pokemon weight: {pokemonResponse.weight}</p>
            <p>Pokemon height: {</p>
            
        </div>
    )
}

export default PokemonDetails;