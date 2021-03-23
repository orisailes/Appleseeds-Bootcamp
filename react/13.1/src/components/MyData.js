import React from 'react'
import data from '../data'
import Card from './Card'

class myData extends React.Component {
    state = {
        allNames: [],
        oldNames: [],
    }

    componentDidMount = () => {
        this.setState({ allNames: data.map((e, i) => { return e.name }) })
    }


    getDataOldNames = () => {
        const helper = []
         data.map((e, i) => {
            if (data[i].birthday.split('-')[2] <= 1990) {
                 helper.push(e.name)
            }
        })
        this.state.oldNames = helper
    }

    displayDataByName = (person) => {
        const found = this.state.allNames.find( (e)=>e===person)
        return(
            <div>
                {found}
            </div>
        )
    }



    render() {
        this.getDataOldNames()
        return (
            <div>
                {this.displayDataByName(this.props.findHim)}
                <Card oldGuys={this.state.oldNames}/>
            </div>
        )
    }
}

export default myData