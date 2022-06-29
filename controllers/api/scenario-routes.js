const scenarios = require('express').Router();
const { Scenario, Choice } = require('../../models');

scenarios.get('/', async (req, res) => {

    try {
        const scenarioData = await Scenario.findAll({ include: Choice });
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        };

        res.status(200).json({ 
            message: "Successfully retrieved scenario data",
            data: scenarioData
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

scenarios.get('/:id', async (req, res) => {

    try {
        const scenarioData = await Scenario.findByPK(req.params.id, { include: Choice });
        
        if (!scenarioData) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully retrieved scenario data",
            data: scenarioData
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

scenarios.post('/', async (req, res) => {

    try {
        const createScenarios = await Scenario.bulkCreate(req.body);
        
        if (!createScenarios) {
            res.status(404).json({ 
                message: "Error seeding scenario data",
            });
        }

        res.status(200).json({ 
            message: "Successfully seeded data",
            data: createScenarios
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = scenarios;