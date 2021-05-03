import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/battle.css'
import Button from '../utils/Button'
import Pokemon from '../utils/Pokemon'
import pokemonsGenerator from '../../utils/classes/Pokemon/pokemonsGenerator'
import _ from 'lodash';

function Battle() {

    const fakeEnemyPokemon = pokemonsGenerator.scyther(1)

  //TODO:merge user and enemy battle functions. make exp util
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
    const userPokemonRef = useRef(null)
    const enemyPokemonRef = useRef(null)

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        user.pokemons.forEach((poke) => whoCauseDamage[poke.name] = 0)
    }, [])

    useEffect(() => {
        const isPokemonLeft = user.pokemons.find((pokemon) => pokemon.hp > 150)
        if (gameOver && isPokemonLeft) {
            //! handle exp increse
            console.log(whoCauseDamage);
            console.log('user won');
        }
        if (gameOver) {
            console.log('user die'); // not true
        }
    }, [gameOver])

    useEffect(() => {
        const chosenPokemonChanged = async () => {
            if (Object.keys(chosenPokemon).length > 0) {

                let newUser = _.cloneDeep(user)
                newUser.pokemons.find((poke, i) => {
                    if (poke.name === chosenPokemon.name) newUser.pokemons[i] = chosenPokemon
                })
                setUser(newUser)
                if (chosenPokemon.hp === 0) { // if user pokemon die
                    const nextPokemon = newUser.pokemons.find((pokemon) => pokemon.hp > 0) // check if some pokemon got hp left and take him
                    userPokemonRef.current.classList.add("user-pokemon-die")
                    await wait(1500)
                    userPokemonRef.current.classList.remove("user-pokemon-die")
                    if (nextPokemon) {
                        setChosenPokemon(nextPokemon)
                    }
                    if (!nextPokemon) {
                        setGameOver(true)
                    }
                }
                if (chosenPokemon.hp !== 0) {
                    setTurnIsActive(false)
                }
            }
        }
        chosenPokemonChanged()
    }, [chosenPokemon])

    useEffect(() => {
      debugger
        const enemyPokemonChanged = async () => {
            if (enemyPokemon.hp <= 0) {
                setMessage(`${enemyPokemon.name.toUpperCase()} Is DEAD!`)
                await wait(1000)
                enemyPokemonRef.current.classList.add("enemy-pokemon-die")
                await wait(1500)
                setGameOver(true)
            }
        }
        enemyPokemonChanged()
    }, [enemyPokemon])

    const handleUserAttack = async (attack) => {

        //!better solution needed! not working!
        userPokemonRef.current && userPokemonRef.current.classList.remove("user-pokemon-img")
        enemyPokemonRef.current && enemyPokemonRef.current.classList.remove("enemy-pokemon-img")

        //! battle manage

        setTurnIsActive(true)
        setMessage(`${chosenPokemon.name.toUpperCase()} Use ${attack.toUpperCase()}!`)
        let enemyHelper = _.cloneDeep(enemyPokemon)
        let isMiss = chosenPokemon.isHitTarget(enemyPokemon)
        let statsCharged = false
        if (attack === "heal" || attack === "shield") {
            await handleStatsCharged(chosenPokemon, attack)
            statsCharged = true
            enemyTurn()
        }
        else {
            userPokemonRef.current.classList.add("user-attacks")
            await wait(750)
            userPokemonRef.current.classList.remove("user-attacks")
        }
        if (!isMiss && !statsCharged) {
            enemyPokemonRef.current.classList.add("get-hurt")
            await wait(500)
            enemyPokemonRef.current.classList.remove("get-hurt")
            let userDamage = chosenPokemon.calculateDamage(enemyPokemon, attack)
            if (enemyHelper.hp < userDamage) userDamage = enemyHelper.hp
            enemyHelper.hp -= userDamage
            
            const manageCausingDamageHelper = { ...whoCauseDamage }
            manageCausingDamageHelper[chosenPokemon.name] += userDamage
            
            setWhoCauseDamage(manageCausingDamageHelper)
            setEnemyPokemon(enemyHelper)
            debugger
            if (enemyHelper.hp !== 0) enemyTurn()
            if (enemyHelper.hp === 0) {
                setMessage(`${enemyPokemon.name.toUpperCase()} Is DEAD!`)
                await wait(1500)
                // using use effect above, to do better rendering job
            }
        }
        if (isMiss && !statsCharged) {
            await wait(500)
            setMessage(`It wasn't very effective...`)
            await wait(1500)
            enemyTurn()
        }

    }

    const enemyTurn = async () => {
        setMessage(`Its ${enemyPokemon.name.toUpperCase()} Turn...`)
        let randomEnemyAttack = enemyPokemon.attacks[Math.floor(Math.random() * enemyPokemon.attacks.length)]
        setMessage(`${enemyPokemon.name.toUpperCase()} Choose ${randomEnemyAttack.replace("_", " ").toUpperCase()}!`)
        let statsCharged = false
        let userHelper = _.cloneDeep(chosenPokemon)
        let isMiss = enemyPokemon.isHitTarget(chosenPokemon)
        debugger
        await wait(750)

        if (randomEnemyAttack === "heal" || randomEnemyAttack === "shield") {
            debugger
            await handleStatsCharged(enemyPokemon, randomEnemyAttack)
            statsCharged = true
            let enemyHelper = _.cloneDeep(enemyPokemon)
            setEnemyPokemon(enemyHelper)
            setTurnIsActive(false)
        } else {
            enemyPokemonRef.current.classList.add("enemy-attacks")
            await wait(500)
            enemyPokemonRef.current.classList.remove("enemy-attacks")
        }

        if (!isMiss && !statsCharged) {
            userPokemonRef.current.classList.add("get-hurt")
            await wait(500)
            userPokemonRef.current.classList.remove("get-hurt")

            let enemyDamage = enemyPokemon.calculateDamage(chosenPokemon, randomEnemyAttack)
            userHelper.hp -= enemyDamage

            if (userHelper.hp < 0) {
                userHelper.hp = 0
                setMessage(`${userHelper.name.toUpperCase()} DEAD!`)
                await wait(1500)

            }
            setChosenPokemon(userHelper)
            await wait(500)
        }

        if (isMiss && !statsCharged) {
            await wait(500)
            setMessage(`It wasn't very effective...`)
            await wait(1500)
            setMessage(`Its ${chosenPokemon.name.toUpperCase()} Turn...`)
            setTurnIsActive(false)
        }

    }

    const handlePokemonChoose = (e) => {
        const pokemonName = e.target.id
        const pokemon = user.pokemons.find(poke => poke.name === pokemonName)
        pokemon.hp > 0 && setChosenPokemon(pokemon)
        setBattleStarted(true)
    }

    const handleChangePokemon = () => {
        setIsPokemonChangeWanted(true)
    }

    const handleStatsCharged = async (pokemon, attack) => {
        switch (true) {
            case (attack === "heal"): // can add in future more

                pokemon.hp = pokemon.increseHp(attack)
                break;
            case (attack === "shield"): // can add in future more
                pokemon.defense = pokemon.increseDefense(attack)
                break;
            default:
                break;
        }
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
                <Pokemon forwardedRef={enemyPokemonRef} isUserPokemon={false} pokemon={enemyPokemon} />
                {
                    battleStarted &&
                    <>
                        <Pokemon forwardedRef={userPokemonRef} isUserPokemon={true} pokemon={chosenPokemon} />
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