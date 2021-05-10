import React from 'react'
import pokemonsAttributes from '../../utils/classes/Pokemon/attributesList'
import '../../css/store.css'
const Store = ({ closeStore, pokemonBuying }) => {
    const pokemonsNames = [
        "scyther",
        "hitmonlee",
        "bulbasaur",
        "caterpie",
        "charmander",
        "eevee",
        "ekans",
        "geodude",
        "metapod",
        "pidgey",
        "pikachu",
        "ponyta",
        "psyduck",
        "raticate",
        "rattata",
        "spearow",
        "squirtle",
        "voltorb",
        "vulpix",
        "weedle"
    ]

    const buy = (e) => {
        const pokemon = e.currentTarget.children[1].innerText
        let level = e.currentTarget.children[2].innerText.split('')
        level = Number(level.slice(level.length - 1).join(''))
        let price = e.currentTarget.children[3].innerText.split('')
        price.splice(price.length - 1)
        price = Number(price.join(''))
        const pokemonToBuy = {pokemon,level,price}
        pokemonBuying(pokemonToBuy)
    }

    return (
        <div className="store-wrapper">
            <h1>Pokemons Store</h1>
            <img
                className="pokemons-desplayer-pokeball"
                src={require('../../img/home/pokeball.png').default}
                alt="pokeball"
            >
            </img>
            <div className="content">
                {
                    pokemonsNames.map((pokemon) => {
                        return (
                            <div
                                onClick={(e) => buy(e)}
                                className="pokemon-gif"
                                key={pokemon}>
                                <img
                                    src={require(`../../img/pokemon-front/gif/${pokemon}.gif`).default}
                                    alt={pokemon}
                                >
                                </img>
                                <small>
                                    {pokemon}
                                </small>
                                <small>
                                    Lv.5
                                    </small>
                                <span className="pokemon-price">
                                    {
                                        Math.floor(
                                            Math.pow(200, pokemonsAttributes[pokemon].quality))
                                    }
                                    <span className="dollar-sign">
                                        $
                                    </span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <button className="exit-store-btn" onClick={() => closeStore()}>X</button>
        </div>
    )
}

export default Store