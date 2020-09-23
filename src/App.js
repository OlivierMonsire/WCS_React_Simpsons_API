import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import Axios from "axios";
import DisplayQuote from "./components/DisplayQuote";

const sampleQuote = {
    id: 1,
    quote:
        "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: sampleQuote
        };
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        // Send the request
        Axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
            // Extract the DATA from the received response
            .then(response => response.data)
            // Use this data to update the state
            .then(data => {
                this.setState({
                    quote: data[0],
                });
            });
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <DisplayQuote quote={this.state.quote}/>
                <button type="button" onClick={this.getQuote}>Get quote</button>
            </div>
        );
    }
}


export default App;
