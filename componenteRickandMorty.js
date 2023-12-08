import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
 
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
 
    fetchCharacters();
  }, []); 
 
  const handleNextCharacter = () => {
    setCurrentCharacterIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };
 
  const handlePrevCharacter = () => {
    setCurrentCharacterIndex(
      (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
    );
  };
 
  if (characters.length === 0) {
    return <p>Cargando...</p>;
  }
 
  const currentCharacter = characters[currentCharacterIndex];
 
  return (
<div>
<img src={currentCharacter.image} alt={currentCharacter.name} />
<h2>{currentCharacter.name}</h2>
<p>Status: {currentCharacter.status}</p>
<p>Species: {currentCharacter.species}</p>
      {}
<button class= 'clickAnterior'onClick={handlePrevCharacter}>Anterior</button>
<button class='clickSiguiente' onClick={handleNextCharacter}>Siguiente</button>
</div>
  );
};
 
export default RickAndMortyApp;
