import React from 'react'
import Tile from './Tile'

const MapView = React.memo(({tiles}) => {
    console.log('map view re rendered');
    return (
        tiles.map(row => row.map(tile => <Tile 
             tile={tile} />))
    )

},(prevProps,newProps)=>{
    if(prevProps.tiles===newProps){
        return false
    }
    return true
})
export default MapView