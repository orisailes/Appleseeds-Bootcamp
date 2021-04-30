import React from 'react';
import StatsContainer from './StatsContainer'
import { motion } from 'framer-motion'
import '../../css/pokemon.css';

function Pokemon({ isUserPokemon, pokemon }) {
    return (

        <div className={`pokemon  ${isUserPokemon ? "user-pokemon" : "enemy-pokemon"}`}>
            <img
                src={require(`../../pokemons/img/pokemon-${isUserPokemon ? "back" : "front"}/${pokemon.name}.png`).default}
            >
            </img>
            <StatsContainer pokemon={pokemon} isUserPokemon={isUserPokemon} />
        </div >


    )
}

export default Pokemon