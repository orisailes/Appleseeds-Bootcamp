import React from 'react'

const Sound = ({ soundFileName }) => (
    <audio muted autoPlay src={`../../sound/${soundFileName}.mp3`} />
)

export default Sound