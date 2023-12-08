import React, { useState, useEffect } from "react";
import axios from 'axios';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    
    useEffect(()=>{
        const fetchData = async()=>{
            if (pokemonName.trim() !== ''){
                try{
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                    setPokemonData(response.data);
                } catch(error){
                    console.error('Error fetching data:',error);
                    setPokemonData(null);
                }
            } else {
                setPokemonData(null);
            }
        };

        fetchData();
    },[pokemonName]);

    return(
        <div>
            <label>
                Search Pokemon:
                <input
                type='text'
                value={pokemonName}
                onChange={(e)=>setPokemonName(e.target.value)}
                />
            </label>
        

        {pokemonData && (
            <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
            <div>
                <strong>Abilities:</strong>
                <ul>
                 {pokemonData.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                 ))}
                </ul>
            </div>
            <div>
                <strong>Base Experience: </strong> {pokemonData.base_experience};
            </div>
        </div>
    )}
    </div>
  );
};

export default PokemonSearch;