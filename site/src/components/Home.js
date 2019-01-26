import React from 'react';
import { Link } from 'react-router-dom';

import JokeList from './JokeList';

class Home extends React.Component {
    render() {
        if (localStorage.getItem('jwt')) {
            return (
                <JokeList />
            );
        } else {
            return (
                <>
                    <Link to="/signin" className="btn btn-large btn-blue">Sign In</Link>
                    <Link to="/signup" className="btn btn-large btn-green">Sign Up</Link>
                </>
            );
        }
    }
};

export default Home;