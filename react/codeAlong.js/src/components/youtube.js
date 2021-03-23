import axios from 'axios'

const KEY = 'AIzaSyCE-GwTGYuGzHANrWpiN31a8g7qly79iAk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    }
})