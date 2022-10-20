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

    const [details,setDetails] = useState();
    

    const url = props.url;

    useEffect(()=>{
        //getPokemonImage(url);
        //console.log(url);
        getPokemonDetails();
    },[url])

    function getPokemonDetails(){
        axios.get(`${url}`).then(
            (response)=>{
                //  console.log("Name: ",response.data.name);
                //  console.log("Height: ",response.data.height);
                //  console.log("Weight: ",response.data.weight);
                //  setId(response.data.id);
                //  setName(response.data.name);
                //  setHeight(response.data.height);
                //  setWeight(response.data.weight);
                //  response.data.abilities.map((item,idx)=>{
                //     setAbilites(item[idx].ability.name)
                //  });
                //  response.data.moves.map((item,idx)=>{
                //     setMoves(item[idx].move.name)
                //  });
                setDetails = getdata(response);
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

    function getdata(a){
        var id = a.id;
        var name = a.name;
        var height = a.height;
        var weight = a.weight;
        var abil = a.abilities;
        var mv = a.moves;
        var abilities = [];
        var moves = [];
        for(var i=0;i<abil.length;i++){
            abilities.push(abil[i].ability.name);
        }
        for(var i=0;i<3;i++){
            moves.push(mv[i].move.name);
        }
        console.log()
        console.log(moves);
        
    }

    return(
        <div>
            <h1>Pokemon Detail {url}</h1>
        </div>
    )
}

export default PokemonDetails;