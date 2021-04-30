import React from 'react';
import StatsContainer from './StatsContainer'
import '../../css/pokemon.css';

function Pokemon({ isUserPokemon, pokemon }) {
    return (
        <div className={`pokemon  ${isUserPokemon ? "user-pokemon" : "enemy-pokemon"}`}>
            {
                isUserPokemon?
                <img src={require(`../../pokemons/img/pokemon-back/${pokemon.name}.png`).default}></img>
                :
                <img src={require(`../../pokemons/img/pokemon-front/${pokemon.name}.png`).default}></img>
            }
            <StatsContainer pokemon={pokemon} isUserPokemon={isUserPokemon}/>
        </div>

    )
}

export default Pokemon