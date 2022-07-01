const gamepage = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Scenario, Choice } = require('../models');
const users = require('./api/user-routes');

gamepage.get('/', withAuth, async (req, res) => { 

    try {

        const scenarioData = await Scenario.findByPk(1, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        await User.update({ scenario_id: 1}, { where: { id: req.session.user_id } });

        const scenario = scenarioData.get({ plain: true });
        res.render('gamepage', { 
            scenario, 
            loggedIn: req.session.loggedIn 
        });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

gamepage.get('/:id', withAuth, async (req, res) => { 

    try {
        let gameOver = false;
        const scenarioData = await Scenario.findByPk(req.params.id, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        await User.update({ scenario_id: req.params.id}, { where: { id: req.session.user_id } });

        const scenario = scenarioData.get({ plain: true });
        if (!scenario.choices.length) {
            gameOver = true;
        }
        res.render('gamepage', { 
            scenario, 
            loggedIn: req.session.loggedIn,
            gameEnd: gameOver 
        });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

module.exports = gamepage;