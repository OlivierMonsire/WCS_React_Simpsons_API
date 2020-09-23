
import React from 'react';

function DisplayQuote({ quote }) {
    return (
        <div className="QuoteForm">
            <h4>{quote.character}</h4>
            <img src={quote.image} />
                <p>{quote.quote}</p>
        </div>
    );
}

export default DisplayQuote;