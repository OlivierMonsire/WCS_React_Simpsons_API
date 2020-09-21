import React from "react";
import PropTypes from 'prop-types';

const QuoteCard = (props) => {

    return <figure className="QuoteCard">
        <img src = {props.avatar} alt={props.name} />
            <figcaption>
                <blockquote>
                    Shoplifting is a victimless crime, like punching someone in the dark.
                </blockquote>
                <cite>{props.name}</cite>
            </figcaption>
    </figure>
}

QuoteCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default QuoteCard