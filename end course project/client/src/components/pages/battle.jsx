import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/battle.css'
import Button from '../utils/Button'
import Pokemon from '../utils/Pokemon'
import pokemonList from '../../utils/classes/Pokemon/pokemonsList'
import _ from 'lodash';

function Battle() {

    const fakeEnemyPokemon = pokemonList.hitmonlee(16)


    const { user, setUser } = useContext(userContext)
    const [isBattleWanted, setIsBattleWanted] = useState(null)
    const [chosenPokemon, setChosenPokemon] = useState({})
    const [enemyPokemon, setEnemyPokemon] = useState(fakeEnemyPokemon)
    const [battleStarted, setBattleStarted] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(true)
    const [isPokemonChangeWanted, setIsPokemonChangeWanted] = useState(false)
    const [turnIsActive, setTurnIsActive] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [message, setMessage] = useState('Battle Start!')

    useEffect(() => {
        if (Object.keys(chosenPokemon).length > 0) {
            let newUser = _.cloneDeep(user)
            newUser.pokemons.find((poke, i) => {
                if (poke.name === chosenPokemon.name) newUser.pokemons[i] = chosenPokemon
            })
            setUser(newUser)
            if (chosenPokemon.hp === 0) { // if user pokemon die
                debugger
                const isPokemonLeft = user.pokemons.every((pokemon) => pokemon.hp > 0)
                if (isPokemonLeft) {
                    const newPokemon = user.pokemons[Math.floor(Math.random() * user.pokemons.length)]
                    while (newPokemon.hp === 0) {
                        newPokemon = user.pokemons[Math.floor(Math.random() * user.pokemons.length)]
                    }
                    setChosenPokemon(newPokemon)
                    console.log(newPokemon);
                    setTurnIsActive(false)
                }
                if (!isPokemonLeft) {
                    setGameOver(true)
                }
            }
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

    const handleUserAttack = async (attack) => {
        setTurnIsActive(true)
        // await wait(250)
        setMessage(`${chosenPokemon.name.toUpperCase()} Use ${attack.toUpperCase()}!`)
        // await wait(1500)
        let enemyHelper = _.cloneDeep(enemyPokemon)
        enemyHelper.hp -= 10
        if (enemyHelper.hp < 0) enemyHelper.hp = 0
        setEnemyPokemon(enemyHelper)
        if (enemyHelper.hp !== 0) {
            enemyTurn()
        }
        if (enemyHelper.hp === 0) {
            handlePokemonDead(enemyPokemon, 'enemy')
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

    const handlePokemonDead = (belonging) => {
        // console.log(belonging);
        // if (belonging === 'user') {
        //     debugger

        // } else {
        //     console.log('cp dead');
        // }
        // //TODO: change pokemon if userPokemonHp is > 0
        // //TODO: else, user is lose
        // //TODO: handle enemy dead
        // setTurnIsActive(false)
    }

    const handleRun = () => {
        console.log('run!!');
    }

    return (
        <div
            className="battle-page"
        >
            {gameOver && <div className="hider"></div>}
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
                                        <h3>HP: {poke.maxHp / poke.hp * 100}%</h3>
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
                    isBattleWanted ?
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
                    (battleStarted && isBattleWanted) &&
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