import React from 'react'
import ReactDOM from 'react-dom'
import './music-album.css'

const album = ({ title, artist, numOfSongs, length, link }) => {

    return (
        <div className="container album">
            <p>album title: {title}</p>
            <p>artist: {artist}</p>
            <p>number of songs: {numOfSongs}</p>
            <p>album length: {length}</p>
            <a href={`//${link}`} target="_blank" >more</a>
        </div>
    )
}
album.defaultProps = {
    title:"First album",
    artist:"unknown",
    numOfSongs:"unknow",
    length:"unknown",
    link:" ",
}

export default album;