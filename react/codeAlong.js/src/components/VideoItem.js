import React, { Component } from 'react'
import './videoitem.css'
class VideoItems extends Component {



    render() {
        const { video,onVideoSelect } = this.props
        return (
            <div onClick={()=>onVideoSelect(video)} className="item video-item">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoItems