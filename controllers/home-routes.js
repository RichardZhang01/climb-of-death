const homepage = require('express').Router();
const loggedIn = require('../utils/notLoggedIn')

homepage.get('/', loggedIn, (req, res) => {       
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

homepage.get('/login', loggedIn, (req, res) => {
    res.render('login');
});

homepage.get('/signup', loggedIn, (req, res) => {
    res.render('signup');
});

module.exports = homepage;