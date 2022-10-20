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

    //const [details,setDetails]
    

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