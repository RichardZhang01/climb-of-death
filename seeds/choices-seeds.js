const { Choice } = require('../models');

const choiceData = [
    {
        choice: `Excited!`, 
        // this is the original scenario
        parent_scenario_id: 1,
        child_scenario_id: 2   
    },
    {
        choice: `Fearful...`, 
        parent_scenario_id: 1,
        child_scenario_id: 3   
    },
    {
        choice: `Immediately try to find a bathhouse.`, 
        parent_scenario_id: 2, 
        child_scenario_id: 4  
    },
    {
        choice: `Enter the local inn and tavern.`, 
        parent_scenario_id: 2,
        child_scenario_id: 5   
    },
    {
        choice: `You are the Chosen One. A God has reached down to speak with you. If anyone is to climb this mountain, it is you. Also, head to the bathhouse. You stink.`, 
        parent_scenario_id: 3, 
        child_scenario_id: 6  
    },
    {
        choice: `You are right. You cannot do this. Let us head back home, oh wait, you sailed across the sea. Maybe you need a drink to calm your nerves. Head over to the inn and tavern for a drink.`, 
        parent_scenario_id: 3, 
        child_scenario_id: 7  
    },
    {
        choice: `Pay the doorman and enter the bathhouse with a bucket and a rag.`, 
        parent_scenario_id: 4, 
        child_scenario_id: 8  
    },
    {
        choice: `Distract the bathhouse doorman and sneak past them. You should not have to pay for hygiene!`, 
        parent_scenario_id: 4, 
        child_scenario_id: 9  
    },
    {
        choice: `Kick the door open and declare yourself the village savior and let everyone know you have come to climb the Mountain of Death!`, 
        parent_scenario_id: 5,
        child_scenario_id: 10
    },
    {
        choice: `Enter the Flying Fish and walk up to the countertop to ask the bartender for a room and what is on the menu today.`, 
        parent_scenario_id: 5,
        child_scenario_id: 11
    },
    {
        choice: `Ask the attendant for entry to the bathhouse.`, 
        parent_scenario_id: 6,
        child_scenario_id: 12
    },
    {
        choice: `Distract the attendant and enter, so they do not realize how bad you smell.`, 
        parent_scenario_id: 6,
        child_scenario_id: 13
    },
    {
        choice: `Open the door to the Flying Fish carefully and look inside for any sketchy characters prior to talking to the owner.`, 
        parent_scenario_id: 7,
        child_scenario_id: 14
    },
    {
        choice: `Slowly approach the door of The Flying Fish and brace yourself for social engagement within the inn and tavern.`, 
        parent_scenario_id: 7,
        child_scenario_id: 15
    }
]

const seedData = () => {
    Choice.bulkCreate(choiceData);
}

module.exports = seedData;