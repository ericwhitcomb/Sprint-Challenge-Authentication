import React from 'react';
import axios from 'axios';

class Signup extends React.Component {

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
            this.setState({ message: "Must enter username and password to sign up" });
        } else {
            this.setState({ message: "Signing up..." });
            const creds = { username: this.state.username, password: this.state.password };
            axios.post('http://localhost:3300/api/register', creds)
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
                        Sign Up
                    </button>
                </form>
                <div className="form-message">
                    {this.state.message}
                </div>
            </>
        )
    }
}

export default Signup;