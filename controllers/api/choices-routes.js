const choices = require('express').Router();
const { Scenario, Choice } = require('../../models');

choices.get('/', async (req, res) => {

    try {
        const choiceData = await Choice.findAll({ include: Scenario });
        
        if (!choiceData) {
            res.status(404).json({ 
                message: "No choice data found",
            });
        };

        res.status(200).json({ 
            message: "Successfully retrieved choice data",
            data: choiceData
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

choices.get('/:id', async (req, res) => {

    try {
        const choiceData = await Choice.findByPk(req.params.id, { include: Scenario });
        
        if (!choiceData) {
            res.status(404).json({ 
                message: "No choice data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully retrieved choice data",
            data: choiceData
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

choices.post('/', async (req, res) => {

    try {
        const createChoices = await Choice.bulkCreate(req.body);
        
        if (!createChoices) {
            res.status(404).json({ 
                message: "Error seeding choice data",
            });
        }

        res.status(200).json({ 
            message: "Successfully seeded choices",
            data: createChoices
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

choices.put('/:id', async (req, res) => {

    try {
        const updateChoice = await Choice.update(req.body, { where: { id: req.params.id } });
        
        if (!updateChoice) {
            res.status(404).json({ 
                message: "No choice data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully updated choice data",
            data: updateChoice
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

choices.delete('/:id', async (req, res) => {

    try {
        const deleteChoice = await Choice.destroy({ where: { id: req.params.id } });
        
        if (!deleteChoice) {
            res.status(404).json({ 
                message: "No choice data found",
            });
        }

        res.status(200).json({ 
            message: "Successfully deleted choice data",
            data: deleteChoice
        });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = choices;