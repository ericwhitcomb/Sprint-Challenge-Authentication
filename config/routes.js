const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');
const db = require('../database/models/userModel');
const authHelper = require('../helpers/authHelper.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const creds = req.body;
  creds.password = bcrypt.hashSync(creds.password, 16);
  db.insertUser(creds)
    .then(ids => {
      if (ids.length) {
        const token = authHelper.generateToken(creds.username);
        res.status(201).json({ username: creds.username, token });
      } else {
        res.status(400).json({ message: "Unable to register user" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Server error" });
    });
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
