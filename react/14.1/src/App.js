import React from 'react'


class app extends React.Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef()
    }
    componentDidMount = () => {
        this.myInput.focus()
    }
    


    render() {
        return (
            <div>
                <input type="text" ref={ref => this.myInput = ref} />
            </div>
        )
    }
}

export default app