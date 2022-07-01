const dashboard = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Scenario, Choice } = require('../models');

dashboard.get('/', withAuth, async (req, res) => { 

    try {
        let startedAdventure = false;
        const dbUserData = await User.findOne({
            where: {
              id: req.session.user_id,
            },
        });

        if (!dbUserData) {
            res.status(404).json({ 
                message: "No user found",
            });
        };

        const userData = dbUserData.get({ plain: true });
        if (userData.scenario_id) {
            startedAdventure = true;
        }
        
        res.render('dashboard', { 
            userData, 
            loggedIn: req.session.loggedIn,
            previousAdventure: startedAdventure 
        });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

module.exports = dashboard;