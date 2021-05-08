import React from 'react'
import { TileSize } from '../../utils/constants/constants'
import '../../css/mapTile.css'

const Tile =  ({ tile, forwardedRef }) => {

    let className = ''
   const refChecker = (ref) => {
        if (tile === 4 || tile === 7 || tile === 6) {
            forwardedRef(ref)
        }
    }
 
    switch (tile) {
        case 1:
            className = "front-fence"
            break;
        case -1:
            className = "back-fence"
            break;
        case 2:
            className = "left-side-fence"
            break;
        case -2:
            className = "right-side-fence"
            break;
        case 3:
            className = "trail"
            break;
        case 4:
            className = "rock"
            break;
        case 5:
            className = "grass"
            break;
        case 6:
            className = "enemy-grass"
            break;
        case 7:
            className = "tree"
            break;

        default:
            break;
    }

    return (
        <div
            className={className}
            style={{
                height: `${TileSize.height}vh`,
                width: `${TileSize.width}vw`,
                display: "inline-flex"
            }}
            ref={(ref) => refChecker(ref)}
        >

        </div>
    )
}

export default Tile