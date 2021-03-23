import React, { Component, Fragment } from 'react'

class VideoDetail extends Component {

    render() {
        const { video } = this.props;
        return !video ? <div>Loading..</div> :
          (
            <Fragment>
                <div className="ui embed">
                    <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </Fragment>
        )
    }
}

export default VideoDetail