const gamepage = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Scenario, Choice } = require('../models');

gamepage.get('/', withAuth, async (req, res) => { 

    try {

        const scenarioData = await Scenario.findByPk(1, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        const scenario = scenarioData.get({ plain: true });
        res.render('gamepage', { scenario, loggedIn: req.session.loggedIn });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

gamepage.get('/:id', withAuth, async (req, res) => { 

    try {

        const scenarioData = await Scenario.findByPk(req.params.id, { include: Choice } );
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        const scenario = scenarioData.get({ plain: true });
        res.render('gamepage', { scenario, loggedIn: req.session.loggedIn });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };

});

module.exports = gamepage;