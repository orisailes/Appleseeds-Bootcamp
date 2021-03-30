import React from 'react'
import axios from 'axios'

class App extends React.Component {
    state = {
        joke: ``,
        jokesCategories: [],
        categoryToSeek:``,
    }

    componentDidMount = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({ jokesCategories: response.data.map((e)=>{
            return <button value={e} onClick={this.getCategory}>{e}</button>
        }) })
    }


    giveMeJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random',{
            params:{category:this.state.categoryToSeek}
        })
        this.setState({ joke: response.data.value })
        console.log(this.state)

    }

    getCategory = (e) => {
        this.setState({categoryToSeek:e.target.value,isCategoryClicked:true})
        {document.querySelector(`.btn`).style.visibility = "visible"}
    }

    render() {
        return (
            <div>
                <h1>Chuck Norris Jokes!</h1>
                <h3>choose joke category</h3>
                {this.state.jokesCategories}
                <div><p>{this.state.joke}</p></div>
               <button style={{visibility:"hidden"}} className="btn" onClick={this.giveMeJoke}>JOKE ME</button>
            </div>
        )
    }
}

export default App;


