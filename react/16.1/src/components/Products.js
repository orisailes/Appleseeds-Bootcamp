import React from 'react'
import { Link } from 'react-router-dom'
import storeData from '../store'

class products extends React.Component {
    state = {
        productsLinks: [],
        product: null,
    }

    componentDidMount = () => {
        const links = storeData.map((item) => {
            return <Link key={item.id} to={`${this.props.match.path}/${item.id}`}>{item.title}</Link>;
        })
        this.setState({ productsLinks: links })
    }

    render() {
        return (
            <React.Fragment>
                    <div>
                        {this.state.productsLinks}
                    </div>
            </React.Fragment>
        )
    }
}

export default products