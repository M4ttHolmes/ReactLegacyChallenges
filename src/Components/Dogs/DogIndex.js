import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }

    componentDidMount = () => {
        console.log("Component Mounted!");
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                url: data.message
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <button onClick={this.componentDidMount}>Moar Doggos</button>
                <br />
                <img src={this.state.url} alt="doggo" />
            </div>
        )
    }

}