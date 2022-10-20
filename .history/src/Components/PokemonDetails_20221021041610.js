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
                console.log(response);
                setDetails = getdata(response);
                console.log(setDetails);
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

    function getdata(res){
        var result ={}
        result.id = res.id;
        result.name = res.name;
        result.height = res.height;
        result.weight = res.weight;
        result.abil = res.abilities;
        result.mv = res.moves;
        // for(var i=0;i<2;i++){
        //     result.abilities[i]=abil[i].ability.name;
        // }
        // for(var j=0;j<3;j++){
        //     result.moves[j]=mv[j].move.name;
        // }
        console.log(res.id);
        console.log(res.moves);
        return result;
        
    }

    return(
        <div>
            <h1>Pokemon Detail {url}</h1>
        </div>
    )
}

export default PokemonDetails;