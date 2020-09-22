import React from "react";
import PropTypes from 'prop-types';
import '../QuoteCard.css';

class QuoteCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: true
        }
    }

    render() {
        return <figure key={this.props.id} className="QuoteCard">
            <img src={this.props.avatar} alt={this.props.name}/>
            <figcaption>
                <blockquote>
                    {this.props.quote}
                </blockquote>
                <p>
                    <cite>{this.props.name}</cite>
                    <span className={this.state.favorite === true ? 'is-favorite' : ''}  onClick={event => {
                        const isFavorite = !this.state.favorite;
                        this.setState({ favorite: isFavorite });
                    }}>&#9733;</span>
                </p>
            </figcaption>
        </figure>
    }
}

QuoteCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
};

export default QuoteCard