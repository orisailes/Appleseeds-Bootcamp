import React from 'react';


function ExpBar({ pokemon }) {
    return (
        <>
            <small>EXP.</small>
            <div>
                <progress value={pokemon.exp} max="100" className="exp-bar">
                </progress>
            </div>
        </>
    )
}

export default ExpBar