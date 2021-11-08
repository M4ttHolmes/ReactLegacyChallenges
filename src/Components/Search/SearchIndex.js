import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
            searchTerm: "",
        }
    }

    searchFunction(e) {
        this.setState({ searchTerm: e.target.value })
    }


    render() {
        console.log(this.state);
        return(
            <div>
                <Input placeholder='Search Here' 
                    value={this.state.searchTerm} 
                    onChange={(e) => this.searchFunction(e)} 
                />
                <h3>Results:</h3>
                <Results things={this.state.things.filter(result => result.includes(this.state.searchTerm))} />
            </div>
        )
    }
}

class Results extends Component {
    render() {
        return(
            <div>
                {this.props.things.map(thing => <li key={thing}>{thing}</li> )}
            </div>
        )
    }
}