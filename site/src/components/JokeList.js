import React from 'react';
import axios from 'axios';
import JokeItem from './JokeItem';

class JokeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loading: false,
            jokes: []
        }
    }

    componentWillMount() {
        this.setState({...this.state, loading: true});
        const token = localStorage.getItem('jwt');
        const headers = { headers: {"Authorization" : token} };
        axios.get('http://localhost:3300/api/jokes', headers)
            .then(response => {
                this.setState({error: null, loading: false, jokes: response.data});
            })
            .catch(err => {
                this.setState({error: "Unable to retrieve jokes from server", loading: false, jokes: []});
            })

    }

    render() {
        return (
            <section className="joke-list">
                { this.state.loading === true ? <h3>Loading...</h3>: null }
                { this.state.error !== null ? <h3>{this.state.error}</h3> : null }
                { this.state.jokes.map(joke => <JokeItem joke={joke} key={joke.id} /> ) }
            </section>
        )
    }
}

export default JokeList;