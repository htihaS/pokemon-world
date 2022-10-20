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
        var result ={}
        result.id = a.id;
        result.name = a.name;
        result.height = a.height;
        result.weight = a.weight;
        var abil = a.abilities;
        var mv = a.moves;
        resulabilities = [];
        moves = [];
        for(var i=0;i<abil.length;i++){
            abilities.push(abil[i].ability.name);
        }
        for(var j=0;j<3;j++){
            moves.push(mv[j].move.name);
        }
        console.log(id);
        console.log(moves);
        return id,name,height,weight,abilities,moves;
        
    }

    return(
        <div>
            <h1>Pokemon Detail {url}</h1>
        </div>
    )
}

export default PokemonDetails;