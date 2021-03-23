import React from 'react'
import { Link } from 'react-router-dom'
class card extends React.Component {

    render() {
        const { title, img, price, size, id } = this.props.data
        return (
            <div key={id}>
                <h3>{title}</h3>
                <h3>{price}$</h3>
                <img src={img} alt={title} />
                <h3>size:{size}</h3>
                <button><Link to="/products">Back</Link></button>
            </div>
        )
    }
}

export default card