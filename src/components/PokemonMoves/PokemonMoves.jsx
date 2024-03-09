import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function PokemonMoves() {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1/')
            .then(response => response.json())
            .then(data => {

                console.log(data);
                setPokemonData(data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return pokemonData ? (
        <div>
            <p>{pokemonData.name}'s moves:</p>
            <ul>
                {pokemonData.moves.map((move, index) => {
                    return <li key={index}>{move.move.name}</li>;
                })}
            </ul>
        </div>
    ) : null


    // if (pokemonData) {
    //     return (
    //         <div>
    //             <p>{pokemonData.name}'s moves:</p>
    //             <ul>
    //                 {pokemonData.moves.map((move, index) => {
    //                     return <li key={index}>{move.move.name}</li>;
    //                 })}
    //             </ul>
    //         </div>
    //     );
    // } else {
    //     return null;
    // }
}

export default PokemonMoves;