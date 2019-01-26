import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/" className="header-title">
                    <h1>Dad Jokes</h1>
                </Link>
                <section className="header-controls">
                    {localStorage.getItem('jwt') ?
                        <><span>Hello, {localStorage.getItem('username')}</span> | <Link to="/signout">Sign Out</Link></> :
                        null
                    }
                </section>
            </header>
        );
    }
};

export default Header;