import React from 'react';

const JokeItem = (props) => {
    return (
        <p className="joke-item">{props.joke.joke}</p>
    )
}

export default JokeItem;