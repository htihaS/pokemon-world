import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";



const PokemonDetails =(props)=>{

    const [id,setid] = useState();

    const url = props.url;

    useEffect(()=>{
        //getPokemonImage(url);
        //console.log(url);
        getPokemonDetails();
    },[url])

    function getPokemonDetails(){
        axios.get(`${url}`).then(
            (response)=>{
                 console.log("Name: ",response.data.name);
                 console.log("Height: ",response.data.height);
                 console.log("Weight: ",response.data.weight);

            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    }
// name, height, weight, abilities, moves,
    function getPokemonImage(){
        var id = 
    }

    function getdata(a){
        axios.get(`${a}`).then(
            (response)=>{
                console.log("HI",response.data);
                // console.log("Name: ",response.data.name);
                // console.log("Height: ",response.data.height);
                // console.log("Weight: ",response.data.weight);

            },
            (error)=>{
                console.log("NoT FOunD");
            }
        )
    }

    return(
        <div>
            <h1>Pokemon Detail {url}</h1>
        </div>
    )
}

export default PokemonDetails;