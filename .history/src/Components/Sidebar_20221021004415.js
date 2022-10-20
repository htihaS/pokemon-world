import React, { useEffect, useState } from 'react';
import { ListGroup , Row , Col , Container, Button } from 'reactstrap';
import axios from "axios";
import PokemonDetails from './PokemonDetails';
//import { Link } from 'react-router-dom';

const Sidebar =()=>{

    const [pokemon,setPokemon] = useState([])
    const [selectedPokemonUrl,setSelectedPokemonUrl] = useState("");
    const pokemonNamesUrl = "https://pokeapi.co/api/v2/pokemon?limit=10" 

    useEffect(()=>{
        getPokemonData();
    },[])

    function getPokemonData(){
        axios.get(`${pokemonNamesUrl}`).then(
            (response) =>{
                setPokemon(response.data.results)
            },
            (error) => {
                console.log("error in fetching data");
            }
            )
    }

    function showPokemon(selectedPokemon){
        console.log(selectedPokemon.url);
        setSelectedPokemonUrl(selectedPokemon.url);
    }

    return(
        <div>
            <Container>  
            <Row>
                <Col md={4}>
                    {
                        pokemon.length > 0? pokemon.map((item=> (<ListGroup><l onClick={()=>{showPokemon(item)}}>{item.name}</Button></ListGroup> ) )): "No pokemon"
                    }
                </Col>
                <Col md={8}>
                    {
                        selectedPokemonUrl !== "" ? (<PokemonDetails url={selectedPokemonUrl}></PokemonDetails>):null
                    
                    }
                </Col>   
            </Row>
            </Container>

        </div>
        )
}

export default Sidebar;