import React from 'react'
import {Link } from 'react-router-dom'

class header extends React.Component {



    render() {
        return (
            <div className="header">
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div>
        )
    }
}

export default header