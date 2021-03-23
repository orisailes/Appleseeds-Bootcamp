import React from 'react'
import SearchBar from './components/SearchBar'
import youtube from './components/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import './normalize.css'


class app extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    onSearchSubmit = async (term) => {
        const respone = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
             videos: respone.data.items,
             selectedVideo:respone.data.items[0]
             });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount = () => {
        this.onSearchSubmit('moana')
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default app;