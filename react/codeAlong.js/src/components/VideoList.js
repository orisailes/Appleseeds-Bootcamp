import React, { Component } from 'react'
import VideoItem from './VideoItem'
class VideoList extends Component{



    render(){
        const {videos,onVideoSelect} = this.props
        const renderdList = videos.map(video=> <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>)
        return(
            <div className="ui relaxed divided list">
                {renderdList}
            </div>
        )
    }

}

export default VideoList;