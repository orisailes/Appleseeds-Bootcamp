import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import './app.css'

class App extends React.Component {
    state = {
        getMe: <Form myFunc={this.dataToMyApp.bind(this)} />,
        makeForm: true,
        hasPermition: false
    }
  
  // isConfirm(info) {

    //     const onClickHandler = () => {
    //         this.setState({ hasPermition: true, makeForm: false })
    //     }

    //     this.setState({
    //         makeForm: false,
    //         hasPermition: true,
    //         displayUserInputData:
    //             <div>
    //                 <p>
    //                     Name: {info.textInput}<br></br>
    //                     Favorite color: {info.colorInput}<br></br>
    //                     Your reson for this: {info.explainInput}
    //                 </p>
    //                 <h2>Are you sure?</h2>
    //                 <button onClick={onClickHandler}>Yes!</button>
    //                 <button onClick={onClickHandler}>No! go back!</button>
    //             </div>
    //     })

    // }
    
    dataToMyApp(info) {


        this.setState({
            makeForm: false,
            hasPermition: true,
            displayUserInputData:
                <div style={info.colorInput ? { background: info.colorInput } : { background: "black" }} className="new-container">
                    <div className="content-container">
                        <h1 style={{ color: "floralwhite" }} >So..{info.textInput}</h1>
                        <p style={{ color: "floralwhite" }} >"{info.explainInput}"</p>
                        <h3 style={{ color: "floralwhite" }} >Sound like a good reason for picking it.</h3>
                        <h3 style={{ color: "floralwhite" }} >i hope i hear from you again!</h3>
                    </div>
                </div>
        })

    }

    render() {
        if (this.state.makeForm) {
            return <div> {this.state.getMe} </div>;
        } else if (this.state.hasPermition) {
            return this.state.displayUserInputData
        }

    }
}

export default App;