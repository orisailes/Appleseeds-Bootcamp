import React from 'react'
import ReactDOM from 'react-dom'
import Album from './components/MusicAlbum'

class App extends React.Component {

    render() {
        return (
            <div >
                <Album title="Only by the night" artist="Kings Of Leon" numOfSongs="15" length="50min" link="www.spotify.com"/>
                <Album title="Awaken,my love" artist="Childish Gambino" numOfSongs="10" length="102min" link="www.spotify.com"/>
                <Album  />
                <Album title="The long way home" artist="Aaron Taylor" numOfSongs="12" length="60min" link="www.spotify.com"/>
            </div>
        )
    }
    
}

export default App;