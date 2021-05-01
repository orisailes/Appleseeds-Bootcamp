import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/battle.css'
import Button from '../utils/Button'
import Pokemon from '../utils/Pokemon'
import pokemonList from '../../utils/classes/Pokemon/pokemonsList'
import _ from 'lodash';

function Battle() {

    const fakeEnemyPokemon = pokemonList.hitmonlee(26)


    const { user, setUser } = useContext(userContext)
    const [isBattleWanted, setIsBattleWanted] = useState(null)
    const [chosenPokemon, setChosenPokemon] = useState({})
    const [enemyPokemon, setEnemyPokemon] = useState(fakeEnemyPokemon)
    const [battleStarted, setBattleStarted] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(true)
    const [isPokemonChangeWanted, setIsPokemonChangeWanted] = useState(false)
    const [turnIsActive, setTurnIsActive] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [whoCauseDamage, setWhoCauseDamage] = useState({})
    const [message, setMessage] = useState('Battle Start!')

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        user.pokemons.forEach((poke) => whoCauseDamage[poke.name] = 0)
    }, [])

    useEffect(() => {
        const isPokemonLeft = user.pokemons.find((pokemon) => pokemon.hp > 150)
        console.log(isPokemonLeft);
        if(gameOver && isPokemonLeft){
            //handle exp increse
            console.log(whoCauseDamage);    
            console.log('user won');
        }else{
            console.log('user die');
        }
    }, [gameOver])

    useEffect(() => {
        if (Object.keys(chosenPokemon).length > 0) {
            console.log(whoCauseDamage);
            let newUser = _.cloneDeep(user)
            newUser.pokemons.find((poke, i) => {
                if (poke.name === chosenPokemon.name) newUser.pokemons[i] = chosenPokemon
            })
            setUser(newUser)
            if (chosenPokemon.hp === 0) { // if user pokemon die
                const nextPokemon = newUser.pokemons.find((pokemon) => pokemon.hp > 0) // check if some pokemon got hp left and take him
                if (nextPokemon) {
                    setChosenPokemon(nextPokemon)
                    setTurnIsActive(false)
                }
                if (!nextPokemon) {
                    setGameOver(true)
                }
            }
        }
    }, [chosenPokemon])



    const handleUserAttack = async (attack) => {    //! battle manage
        setTurnIsActive(true)
        // await wait(250)
        setMessage(`${chosenPokemon.name.toUpperCase()} Use ${attack.toUpperCase()}!`)
        // await wait(1500)
        let enemyHelper = _.cloneDeep(enemyPokemon)
        let userDamage = 10 //! calculate needed
        if (enemyHelper.hp < userDamage) userDamage = enemyHelper.hp
        enemyHelper.hp -= userDamage
        const manageCausingDamageHelper = { ...whoCauseDamage }
        manageCausingDamageHelper[chosenPokemon.name] += userDamage
        setWhoCauseDamage(manageCausingDamageHelper)
        setEnemyPokemon(enemyHelper)
        if (enemyHelper.hp !== 0) enemyTurn()
        if (enemyHelper.hp === 0) {
            console.log(whoCauseDamage);
            setGameOver(true)
            setMessage(`${enemyPokemon.name.toUpperCase()} Is DEAD!`)
        }
        // setMessage(`${}`)
        // await wait(500)
    }

    const enemyTurn = async () => {
        setMessage(`Its ${enemyPokemon.name.toUpperCase()} Turn...`)
        // await wait(1500)
        let randomEnemyAttack = enemyPokemon.attacks[Math.floor(Math.random() * enemyPokemon.attacks.length)]
        setMessage(`${enemyPokemon.name.toUpperCase()} Choose ${randomEnemyAttack.replace("_", " ").toUpperCase()}!`)
        // await wait(1500)
        let userHelper = _.cloneDeep(chosenPokemon)
        userHelper.hp -= 10
        if (userHelper.hp < 0) userHelper.hp = 0
        setChosenPokemon(userHelper)
        // await wait(500)
        if (userHelper.hp !== 0) {
            setMessage(`${chosenPokemon.name.toUpperCase()} Turn...`)
            setTurnIsActive(false)
        }
    }

    const handlePokemonChoose = (e) => {
        const pokemonName = e.target.id
        const pokemon = user.pokemons.find(poke => poke.name === pokemonName)
        console.log(pokemon);
        setChosenPokemon(pokemon)
        setBattleStarted(true)
    }

    const handleChangePokemon = () => {
        setIsPokemonChangeWanted(true)
        console.log(user);
        console.log(chosenPokemon);
    }

    const handleRun = () => {
        console.log('run!!');
    }

    return (
        <div
            className="battle-page"
        >
            {gameOver && <div className="hider">{JSON.stringify(whoCauseDamage)}</div>}
            {
                isPokemonChangeWanted &&
                <div className="hider">
                    <>
                        <div className="user-pokemons-container">
                            {user.pokemons.map((poke) => {
                                return (
                                    <div
                                        key={poke.name}
                                        onClick={() => {
                                            setChosenPokemon(poke)
                                            setIsPokemonChangeWanted(false)
                                        }}
                                        className="user-individual-pokemon">
                                        <img src={require(`../../pokemons/img/pokemon-front/${poke.name}.png`).default} alt={poke.name} />
                                        <h3>Lv: {poke.level}</h3>
                                        <h3>HP: {Math.round(poke.hp / poke.maxHp * 100)}%</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                </div>
            }
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
                    isBattleWanted ? //* first user "chatting" -> choose between run and battle
                        battleStarted === false &&
                        <div className="message-box">{user.pokemons.map((poke) => {
                            return (
                                <React.Fragment key={poke.name}>

                                    <Button
                                        turnIsActive={turnIsActive}
                                        id={poke.name}
                                        onClick={(e) => handlePokemonChoose(e)}
                                        text={poke.name} />

                                </React.Fragment>
                            )
                        })}</div>
                        :
                        isBattleWanted === false ?
                            handleRun()
                            :
                            <div className="message-box">
                                <div className="first-btn">

                                    <Button
                                        turnIsActive={turnIsActive}
                                        onClick={() => setIsBattleWanted(false)}
                                        text="run" />

                                    <Button
                                        turnIsActive={turnIsActive}
                                        onClick={() => setIsBattleWanted(true)}
                                        text="battle" />

                                </div>
                            </div>
                }
                {
                    (battleStarted && isBattleWanted) && //* if user want to fight
                    <>
                        <div className="message-box">
                            <div className="message">
                                <h2>{message}</h2>
                            </div>
                            <div className="battle-btn-container">
                                {
                                    displayOptions ?
                                        <>
                                            <Button
                                                turnIsActive={turnIsActive} onClick={() => {
                                                    {
                                                        setDisplayOptions(false)
                                                    }
                                                }}
                                                text="fight" />

                                            <Button
                                                turnIsActive={turnIsActive}
                                                onClick={handleRun}
                                                text="run" />

                                            <Button
                                                turnIsActive={turnIsActive}
                                                className="pokemon-switch-btn"
                                                onClick={() => handleChangePokemon()} text="pokemons" />
                                        </>
                                        :
                                        <>

                                            {chosenPokemon.attacks.map((attack) => {

                                                return (
                                                    <React.Fragment key={attack}>

                                                        <Button
                                                            turnIsActive={turnIsActive}
                                                            className="attack-btn"
                                                            text={attack}
                                                            onClick={() => handleUserAttack(attack)} />

                                                    </React.Fragment>
                                                )
                                            })}

                                            <Button
                                                turnIsActive={turnIsActive}
                                                className="pokemon-switch-btn"
                                                onClick={() => handleChangePokemon()} text="pokemons" />

                                        </>
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Battle