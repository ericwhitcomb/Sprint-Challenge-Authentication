import React from 'react';
import { Link } from 'react-router-dom';

import JokeList from './JokeList';

class Home extends React.Component {
    render() {
        if (localStorage.getItem('jwt')) {
            return (
            <section className="content">
                <JokeList />
            </section>);
        } else {
            return (
            <section className="content">
                <Link to="/signin" className="btn btn-blue">Sign In</Link>
                <Link to="/signup" className="btn btn-green">Sign Up</Link>
            </section>);
        }
    }
};

export default Home;