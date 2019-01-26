import React from 'react';
import axios from 'axios';

class Signin extends React.Component {

    state = {
        username: "",
        password: "",
        message: "",
    };

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            this.setState({ message: "Must enter username and password to sign in" });
        } else {
            this.setState({ message: "Signing in..." });
            const creds = { username: this.state.username, password: this.state.password };
            axios.post('http://localhost:3300/api/login', creds)
                .then(response => {
                    localStorage.setItem('jwt', response.data.token);
                    localStorage.setItem('username', response.data.username);
                    this.props.history.push("/");
                })
                .catch(err => {
                    this.setState({ message: err.response.data.message });
                });
        }
    };

    render() {
        return (
            <>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input-field"
                        name="username"
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        className="input-field"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button
                        className="btn btn-submit"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Sign In
                    </button>
                    <div className="message">
                        {this.state.message}
                    </div>
                </form>
            </>
        )
    }
}

export default Signin;