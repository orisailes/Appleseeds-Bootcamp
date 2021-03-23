import React from 'react'
import data from '../data'

class Card extends React.Component {

    makeOldManCard = () => {
        const helper = [];
        for (let person of data) {
            for (let oldPerson of this.props.oldGuys) {
                if (person.name === oldPerson) {
                    helper.push(
                        <div>
                            <h2>{oldPerson}</h2>
                            <h3>Birthday:{person.birthday}</h3>
                            <h3>Favorite Meat:{person.favoriteFoods.meats.forEach(element => {
                                <p>element</p>
                            })}</h3>
                            <h3>Favorite Fish:{person.favoriteFoods.fish.forEach(element => {
                                <p>element</p>
                            })}</h3>
                        </div>
                    )
                }
            }
        }
        return helper
    }

    render() {
        return (
            <div>
                {this.makeOldManCard()}
            </div>
        )
    }
}

export default Card