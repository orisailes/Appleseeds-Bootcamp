import React from 'react'
import storeData from '../store'
import Card from './Cards'

class product extends React.Component {
    state = {
        product: null,
        card: null
    }
    componentDidMount = () => {
        const id = Number(this.props.match.params.id)
        const found = storeData.find(item => item.id === id)
        this.setState({
            product:
            {
                title: found.title,
                img: found.imageUrl,
                price: found.price,
                size: found.size,
                id: found.id,
            },
            
        })
        
    }

    render() {
        return (
            <div>
                <h1>your product:</h1>
                {this.state.product && <Card data={this.state.product}/>}
            </div>
        )
    }
}

export default product