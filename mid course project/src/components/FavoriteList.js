import React from 'react'
import './css/favorite.css'
import הראל from '../img/הראל.png'
import אנליסט from '../img/אנליסט.png'
import מגדל from '../img/מגדל.png'
import אלטשולר from '../img/אלטשולר.png'
import מיטב from '../img/מיטב.png'

function Favorite() {
    const temp = JSON.parse(localStorage.getItem('favorites'));

    
    let images = {
        מיטב: מיטב,
        אלטשולר: אלטשולר,
        מגדל: מגדל,
        אנליסט: אנליסט,
        הראל: הראל,
    }


    return (
        <div className="favorites">
            <div className="favorites-content">
                {temp.map((item) => {
                    return (
                        <>
                            <div className="favorite-card">

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorite