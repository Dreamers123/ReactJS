import React, { Component } from 'react';
import '../App.css';


class DisplayName extends Component {
    state = {
        name: '',
        names: [],
    };
    onFormSubmit = (evt) => {
        const names = [ ...this.state.names, this.state.name ];
        this.setState({ names: names, name: '' });
        evt.preventDefault();
    };
    onNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input type="text2"
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />

                    <input type='submit' />
                </form>

                <div className="name">
                    <h3>Names</h3>
                    <ul>
                        { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
                    </ul>
                </div>
            </div>
        );
    }
};
export default DisplayName;

