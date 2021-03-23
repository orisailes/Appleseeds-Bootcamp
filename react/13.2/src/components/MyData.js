import React from 'react'
import axios from 'axios'
import Input from './InputSearch'
import Button from './Button'


class dataMassage extends React.Component {
    state = { data: [], newData: [] }

    componentDidMount = async () => {
        const helper = [];
        for (let i = 0; i < 6; i++) {
            let response = await axios.get('https://randomuser.me/api/')
            response = response.data.results
            helper.push({
                name: `{${response[0].name.first.toLowerCase()} ${response[0].name.last.toLowerCase()}}`,
                hisDiv:
                    <div key={response[0].login.uuid}>
                        <h3>{response[0].name.first} {response[0].name.last}</h3>
                        <img src={response[0].picture.large} alt={response[0].login.username} />
                    </div>
            })
        }
        const onlyDivs = helper.map((e) => { return e.hisDiv })
        this.setState({ data: helper, newData: onlyDivs })
    }

    getInputValue = (info) => {
        info = info.toLowerCase()
        let newData = [];
        console.log(this.state)
        this.state.data.forEach((user, i) => {
            if (user.name.includes(info)) {
                newData.push(this.state.data[i].hisDiv)
            }
        })
        this.setState({ newData: newData })
    }

    render() {
        const myDivs = this.state.data.map((e) => {
            return e.hisDiv
        })
        return (
            <div>
                <div className="search-container">
                    <Input getInputValue={this.getInputValue} />
                    <Button getInputValue={this.getInputValue} />
                </div>
                <div className="flex">
                    {this.state.newData}
                </div>
            </div>
        )
    }
}

export default dataMassage