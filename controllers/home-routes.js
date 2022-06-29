const homepage = require('express').Router();
// const { User } = require('../models');

homepage.get('/', (req, res) => {       
    if (req.session.loggedIn) {
        res.redirect('/gamepage');
        return;
    }
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

homepage.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/gamepage');
        return;
    }
    res.render('login');
});

homepage.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/gamepage');
        return;
    }
    res.render('signup');
});

module.exports = homepage;