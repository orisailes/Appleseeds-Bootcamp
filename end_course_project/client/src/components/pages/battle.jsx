import React, { useContext, useState, useEffect, useRef } from 'react'
import { userContext } from '../../utils/context/userContext'
import { Link } from 'react-router-dom'
import '../../css/battle.css'
import Button from '../utils/Button'
import Pokemon from '../utils/Pokemon'
import pokemonsGenerator from '../../utils/classes/Pokemon/pokemonsGenerator'
import attributesList from '../../utils/classes/Pokemon/attributesList'
import _ from 'lodash';
import ExpBar from '../utils/ExpBar'


function Battle() {

    const fakeEnemyPokemon = pokemonsGenerator.makePokemon("raticate", 40)

    const { user, setUser } = useContext(userContext)
    const [enemyPokemon, setEnemyPokemon] = useState(fakeEnemyPokemon)
    const [whoCauseDamage, setWhoCauseDamage] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState({})
    const [endGameNewLevels, setEndGameNewLevels] = useState({})
    const [battleStarted, setBattleStarted] = useState(false)
    const [isPokemonChangeWanted, setIsPokemonChangeWanted] = useState(false)
    const [turnIsActive, setTurnIsActive] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [isUserLose, setIsUserLose] = useState(false)
    const [gameEndHider, setGameEndHider] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(true)
    const [isBattleWanted, setIsBattleWanted] = useState(null)
    const [enemyHealCharge, setEnemyHealCharge] = useState(0)
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
        console.log(window)
        const endGameSession = async () => {

            const isPokemonLeft = user.pokemons.find((pokemon) => pokemon.hp > 0)

            if (gameOver && isPokemonLeft) {
                // await wait(1000)
                let newUser = _.cloneDeep(user)
                let newLevels = {}
                let levelUpCounters = {}
                for (let pokemon in whoCauseDamage) {
                    debugger
                    const damagePercentCause = whoCauseDamage[pokemon] / (enemyPokemon.maxHp + enemyHealCharge)
                    if (damagePercentCause) {
                        newUser.pokemons.find((poke, i) => {
                            if (poke.name === pokemon) {
                                let result = poke.calculateExp(enemyPokemon, damagePercentCause)
                                while (result >= poke.maxExp - poke.exp) { //  pokemon level up
                                    levelUpCounters[poke.name] ? levelUpCounters[poke.name]++ : levelUpCounters[poke.name] = 1
                                    newLevels[poke.name] = poke.level
                                    result -= (poke.maxExp - poke.exp)
                                    newLevels[poke.name]++
                                    poke = pokemonsGenerator.makePokemon(poke.name, newLevels[poke.name])
                                    newUser.pokemons[i] = poke
                                }
                                newUser.pokemons[i].exp = result
                            }
                        })
                    }
                }
                const newMoney = Math.floor(attributesList[enemyPokemon.name].quality * 10 * enemyPokemon.level * (Math.random() * (1 - 0.5) + 0.5))
                newUser.money += newMoney
                setEndGameNewLevels(levelUpCounters)
                console.log('newUser:', newUser)
                console.log(enemyPokemon);
                setUser(newUser)
            }
            if (gameOver && isUserLose) {

            }
        }
        endGameSession()

    }, [gameEndHider])

    useEffect(() => {

        const isPokemonLeft = user.pokemons.find((pokemon) => pokemon.hp > 0)
        if (gameOver && isPokemonLeft) {
            setGameEndHider(true)
        }
        if (gameOver && !isPokemonLeft) {
            setGameEndHider(true)
            setWhoCauseDamage([])
            setIsUserLose(true)
            console.log('user die'); // double check
        }
    }, [gameOver])


    useEffect(() => {

        const chosenPokemonChanged = async () => {
            if (Object.keys(chosenPokemon).length > 0) {

                let newUser = _.cloneDeep(user)
                newUser.pokemons.find((poke, i) => (poke.name === chosenPokemon.name) ? newUser.pokemons[i] = chosenPokemon : null)
                setUser(newUser)
                if (chosenPokemon.hp === 0) { // if user pokemon die
                    const nextPokemon = newUser.pokemons.find((pokemon) => pokemon.hp > 0) // check if some pokemon got hp left and take him
                    userPokemonRef.current.classList.add("user-pokemon-die")
                    // await wait(1500)
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
        const enemyPokemonChanged = async () => {
            if (enemyPokemon.hp <= 0) {
                setMessage(`${enemyPokemon.name.toUpperCase()} Is DEAD!`)
                // await wait(1000)
                enemyPokemonRef.current.classList.add("enemy-pokemon-die")
                // await wait(1500)
                setGameOver(true)
            }
        }
        enemyPokemonChanged()
    }, [enemyPokemon])

    const manageBattle = async (userAttack) => {
        //!better solution needed! not working!
        userPokemonRef.current && userPokemonRef.current.classList.remove("user-pokemon-img")
        enemyPokemonRef.current && enemyPokemonRef.current.classList.remove("enemy-pokemon-img")

        //! battle manage

        setTurnIsActive(true)
        setMessage(`${chosenPokemon.name.toUpperCase()} Use ${userAttack.toUpperCase()}!`)
        let enemyHelper = _.cloneDeep(enemyPokemon)
        let userHelper = _.cloneDeep(chosenPokemon)
        let isUserMiss = chosenPokemon.isHitTarget(enemyPokemon)
        let isEnemyMiss = enemyPokemon.isHitTarget(chosenPokemon)
        let userStatsCharged = false
        let enemyStatsCharged = false
        let enemyDead = false
        const randomEnemyAttack = enemyPokemon.attacks[Math.floor(Math.random() * enemyPokemon.attacks.length)]
        if (userAttack === "heal" || userAttack === "shield") {
            // await wait(1250)
            await handleStatsCharged(chosenPokemon, userAttack)
            userStatsCharged = true
        }
        else {
            userPokemonRef.current.classList.add("user-attacks")
            // await wait(750)
            userPokemonRef.current.classList.remove("user-attacks")
        }

        if (!isUserMiss && !userStatsCharged) {
            enemyPokemonRef.current.classList.add("get-hurt")
            // await wait(500)
            enemyPokemonRef.current.classList.remove("get-hurt")
            let userDamage = chosenPokemon.calculateDamage(enemyPokemon, userAttack)
            if (enemyHelper.hp < userDamage) userDamage = enemyHelper.hp
            enemyHelper.hp -= userDamage

            const manageCausingDamageHelper = { ...whoCauseDamage }
            manageCausingDamageHelper[chosenPokemon.name] += userDamage

            setWhoCauseDamage(manageCausingDamageHelper)

            setEnemyPokemon(enemyHelper)

            if (enemyHelper.hp === 0) {
                setMessage(`${enemyPokemon.name.toUpperCase()} Is DEAD!`)
                // await wait(1500)
                enemyDead = true
                // using use effect above, to do better rendering job
            }
        }
        if (isUserMiss && !userStatsCharged) {
            // await wait(500)
            setMessage(`It wasn't very effective...`)
            // await wait(1500)

        }

        // enemy turn from here
        if (!enemyDead) {
            setMessage(`Its ${enemyPokemon.name.toUpperCase()} Turn...`)
            // await wait(750)
            setMessage(`${enemyPokemon.name.toUpperCase()} Choose ${randomEnemyAttack.replace("_", " ").toUpperCase()}!`)

            if (randomEnemyAttack === "heal" || randomEnemyAttack === "shield") {
                await handleStatsCharged(enemyHelper, randomEnemyAttack)
                enemyStatsCharged = true
                // await wait(1500)
                setMessage(`Its ${chosenPokemon.name.toUpperCase()} Turn...`)
                setEnemyPokemon(enemyHelper)
                setTurnIsActive(false)
            } else {
                enemyPokemonRef.current.classList.add("enemy-attacks")
                // await wait(500)
                enemyPokemonRef.current.classList.remove("enemy-attacks")
            }

            if (!isEnemyMiss && !enemyStatsCharged) {
                userPokemonRef.current.classList.add("get-hurt")
                // await wait(500)
                userPokemonRef.current.classList.remove("get-hurt")

                let enemyDamage = enemyPokemon.calculateDamage(chosenPokemon, randomEnemyAttack)
                userHelper.hp -= enemyDamage

                if (userHelper.hp < 0) {
                    userHelper.hp = 0
                    setMessage(`${userHelper.name.toUpperCase()} DEAD!`)
                    // await wait(1500)

                }
                setChosenPokemon(userHelper)
                // await wait(500)
            }

            if (isEnemyMiss && !enemyStatsCharged) {
                // await wait(500)
                setMessage(`It wasn't very effective...`)
                // await wait(1500)
                setMessage(`Its ${chosenPokemon.name.toUpperCase()} Turn...`)
                setTurnIsActive(false)
            }
        }

    }

    const handlePokemonChoose = (e) => {
        const pokemonName = e.currentTarget.id
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
                debugger
                if (enemyPokemon.name === pokemon.name) {
                    let hpAdded = pokemon.hp
                    pokemon.hp = pokemon.increseHp(attack)
                    hpAdded = pokemon.hp - hpAdded
                    let helper = _.cloneDeep(enemyHealCharge)
                    helper += hpAdded
                    setEnemyHealCharge(helper)
                }else{
                    pokemon.hp = pokemon.increseHp(attack)
                }
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
        <>
            <div
                className="battle-page" // 70% of the upper side screen
            >
                {gameEndHider ?
                    isUserLose ?
                        <div className="hider">
                            <div>
                                <h1>R.I.P</h1>
                            </div>
                        </div>
                        :
                        <div className="hider">
                            <div className="end-game-pokemons-container">
                                {user.pokemons.map((poke) => {
                                    let isLeveledUp = Boolean
                                    { Object.keys(endGameNewLevels).includes(poke.name) ? isLeveledUp = true : isLeveledUp = false }
                                    return (
                                        <>
                                            <div
                                                key={poke.name}
                                                className="end-game-individual-pokemon">
                                                <img src={require(`../../img/pokemon-front/${poke.name}.png`).default} alt={poke.name} />
                                                <h3
                                                    className={isLeveledUp ? "new-level-recived" : ""}>
                                                    Lv: {poke.level}
                                                    {isLeveledUp && <span className="new-level-recived-span"> (+ {endGameNewLevels[poke.name]})</span>}
                                                </h3>
                                                <h3>HP: {Math.round(poke.hp / poke.maxHp * 100)}%</h3>
                                                <ExpBar pokemon={poke} />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div>
                                <h3 className="user-money">
                                    New Money: <span className="user-money-span">{user.money}$</span>
                                </h3>
                            </div>
                            <Link to="/">HOME</Link>
                        </div>
                    : null
                }

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
                                            <img src={require(`../../img/pokemon-front/gif/${poke.name}.gif`).default} alt={poke.name} />
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
                <div
                    className="message-box-container" // 30% of the lower side screen
                >
                    {
                        isBattleWanted ? //* first user "chatting" -> choose between run and battle
                            battleStarted === false &&
                            <div className="message-box">{user.pokemons.map((poke) => {
                                return (
                                    <React.Fragment key={poke.name}>
                                        <div
                                            onClick={(e) => handlePokemonChoose(e)}
                                            className="pokemon-choose-div"
                                            id={poke.name}
                                        >
                                            <img src={require(`../../img/pokemon-front/gif/${poke.name}.gif`).default}></img>
                                            <Button
                                                turnIsActive={turnIsActive}
                                                text={poke.name} />
                                            <small>Lv: {poke.level}</small>
                                            <small>HP: {Math.round(poke.hp / poke.maxHp * 100)}%</small>
                                        </div>
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
                                                                onClick={() => manageBattle(attack)} />

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
        </>
    )
}

export default Battle