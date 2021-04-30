import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../../utils/context/userContext'
import { motion } from 'framer-motion'
import '../../css/battle.css'
import Button from '../utils/Button'
import Pokemon from '../utils/Pokemon'
import pokemonList from '../../utils/classes/Pokemon/pokemonsList'

const Battle = () => {

    const fakeEnemyPokemon = pokemonList.hitmonlee(16)


    const { user, setUser } = useContext(userContext)
    const [isBattleWanted, setIsBattleWanted] = useState(null)
    const [chosenPokemon, setChosenPokemon] = useState({})
    const [enemyPokemon, setEnemyPokemon] = useState(fakeEnemyPokemon)
    const [battleStarted, setBattleStarted] = useState(false)

    useEffect(() => {
        if (Object.keys(chosenPokemon).length > 0) {
            console.log(chosenPokemon);
        }
        return (() => {
            console.log('unmounted');
            //TODO: save user new pokemon in atlas ad in context
        })
    }, [chosenPokemon])

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handlePokemonChoose = (e) => {
        const pokemonName = e.target.innerText
        setChosenPokemon(user.pokemons.find(poke => poke.name === pokemonName))
        setBattleStarted(true)
    }


    return (
        <motion.div
         exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:1}}
          className="battle-page"
         >
            <div className="pokemons-container">
                <Pokemon isUserPokemon={false} pokemon={enemyPokemon} />
                {
                    battleStarted &&
                    <>
                        <Pokemon isUserPokemon={true} pokemon={chosenPokemon} />
                    </>
                }
            </div>
            <div className="message-box-container">
                {
                    isBattleWanted ?
                        battleStarted === false &&
                        <div className="message-box">{user.pokemons.map((poke) => {
                            return (
                                <React.Fragment key={poke.name}>
                                    <Button onClick={(e) => handlePokemonChoose(e)} text={poke.name} />
                                </React.Fragment>
                            )
                        })}</div>
                        :
                        isBattleWanted === false ?
                            <div>Run</div>
                            :
                            <div className="message-box">
                                <Button onClick={() => setIsBattleWanted(false)} text="RUN" />
                                <Button onClick={() => setIsBattleWanted(true)} text="BATTLE" />
                            </div>
                }
            </div>
        </motion.div>
    )
}

export default Battle