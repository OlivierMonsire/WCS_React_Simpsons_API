import React, { Component } from 'react';
import '../assets/QuoteForm.css';

class QuoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            char: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    MAX_LENGTH = 10

    handleChange(event) {
        if (event.target.value.length <= this.MAX_LENGTH) {
            console.log(event.target.value)
            if (event.target.value[event.target.value.length-1] === "\\" || event.target.value[event.target.value.length-1] === "*" ){
                console.log('oui')
            }
            this.setState({
                value: event.target.value,
                char: this.MAX_LENGTH - event.target.value.length
            });
        }
    }

    render() {
        return (
            <form
                className="QuoteForm"
            >
                <label htmlFor="character">Character:</label>
                <input
                    id="character"
                    name="character"
                    type="text"
                    value={this.state.value} onChange={this.handleChange}
                />
                <p>{this.state.value}</p>
                <small hidden={this.state.char === 0 } >Il vous reste {this.state.char} caractère {this.state.char > 1 ? 's' : ''} </small>
                <small className="urgent" hidden={this.state.value.length !== this.MAX_LENGTH}>
                    <span className="">!</span>
                    Vous avez atteint la limite maximale de caractères</small>

            </form>
        );
    }
}

export default QuoteForm;

