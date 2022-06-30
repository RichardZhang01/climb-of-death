const gamepage = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Scenario, Choice } = require('../models');

gamepage.get('/', withAuth, async (req, res) => { 

    try {

        const scenarioData = await Scenario.findbyPk(1, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        res.render('gamepage', { scenarioData, loggedIn: req.session.loggedIn });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

gamepage.get('/:id', withAuth, async (req, res) => { 

    try {

        const scenarioData = await Scenario.findbyPk(req.params.id, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        res.render('gamepage', { scenarioData, loggedIn: req.session.loggedIn });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

module.exports = gamepage;