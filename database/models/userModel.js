const db = require('../dbConfig.js');

module.exports = {
    insertUser: (user) => {
        return db('users').insert(user);
    },

    findByUsername: (username) => {
        return db('users').where('username', username);
    },
}