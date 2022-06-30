const { Choice } = require('../models');

const choiceData = [
    {
        choice: `Excited!`, 
        // this is the original scenario I came from
        parent_scenario_id: 1,
        child_scenario_id:    
    },
    {
        choice: `Fearful...`, 
        parent_scenario_id: 1,
        child_scenario_id:    
    },
    {
        choice: `Immediately try to find a bathhouse.`, 
        parent_scenario_id: 2, 
        child_scenario_id:   
    },
    {
        choice: `Enter the local inn and tavern.`, 
        parent_scenario_id: 2,
        child_scenario_id:    
    },
    {
        choice: `You are the Chosen One. A God has reached down to speak with you. If anyone is to climb this mountain, it is you. Also, head to the bathhouse. You stink.`, 
        parent_scenario_id: 3, 
        child_scenario_id:   
    },
    {
        choice: `You are right. You cannot do this. Let us head back home, oh wait, you sailed across the sea. Maybe you need a drink to calm your nerves. Head over to the inn and tavern for a drink.`, 
        parent_scenario_id: 3, 
        child_scenario_id:   
    },
    {
        choice: `Pay the doorman and enter the bathhouse with a bucket and a rag.`, 
        parent_scenario_id: 4, 
        child_scenario_id:   
    },
    {
        choice: `Distract the bathhouse doorman and sneak past them. You should not have to pay for hygiene!`, 
        parent_scenario_id: 4, 
        child_scenario_id:   
    },
    {
        choice: `Kick the door open and declare yourself the village savior and let everyone know you have come to climb the Mountain of Death!`, 
        parent_scenario_id: 5,
        child_scenario_id:
    },
    {
        choice: `Enter the Flying Fish and walk up to the countertop to ask the bartender for a room and what is on the menu today.`, 
        parent_scenario_id: 5,
        child_scenario_id:
    },
    {
        choice: `Ask the attendant for entry to the bathhouse.`, 
        parent_scenario_id: 6,
        child_scenario_id:
    },
    {
        choice: `Distract the attendant and enter, so they do not realize how bad you smell.`, 
        parent_scenario_id: 6,
        child_scenario_id:
    },
    {
        choice: `Open the door to the Flying Fish carefully and look inside for any sketchy characters prior to talking to the owner.`, 
        parent_scenario_id: 7,
        child_scenario_id:
    },
    {
        choice: `Slowly approach the door of The Flying Fish and brace yourself for social engagement within the inn and tavern.`, 
        parent_scenario_id: 7,
        child_scenario_id:
    }
]

const seedData = () => {
    Choice.bulkCreate(choiceData);
}

module.exports = seedData;