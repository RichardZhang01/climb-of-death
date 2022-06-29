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
        const scenarioData = await Scenario.findByPk(req.params.id, { include: Choice });
        
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

scenarios.put('/:id', async (req, res) => {

    try {
        const updateScenario = await Scenario.update(req.body, { where: { id: req.params.id } });
        
        if (!updateScenario) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully updated scenario data",
            data: updateScenario
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

scenarios.put('/:id', async (req, res) => {

    try {
        const deleteScenario = await Scenario.delete({ where: { id: req.params.id } });
        
        if (!deleteScenario) {
            res.status(404).json({ 
                message: "No scenario data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully deleted scenario data",
            data: deleteScenario
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = scenarios;