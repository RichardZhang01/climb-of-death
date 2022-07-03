const { Choice } = require('../models');

const choiceData = [
    {
        choice: `Excited!`, 
        // this is the original scenario
        parent_scenario_id: 1,
        child_scenario_id: 2   
    },
    {
        choice: `Fearful.`, 
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
        choice: `You are the Chosen One. A god has reached down to speak with you. If anyone is to climb this mountain, it is you. Also, head to the bathhouse. You stink.`, 
        parent_scenario_id: 3, 
        child_scenario_id: 6  
    },
    {
        choice: `You are right. You cannot do this. Let us head back home, oh wait, you sailed across the sea. Maybe you need a drink to calm your nerves. Head over to the inn and tavern for a drink.`, 
        parent_scenario_id: 3, 
        child_scenario_id: 7  
    },
    {
        choice: `Pay the doorman and enter the bathhouse with a bucket and rag.`, 
        parent_scenario_id: 4, 
        child_scenario_id: 8  
    },
    {
        choice: `Distract the bathhouse doorman and sneak past them. You should not have to pay for hygiene!`, 
        parent_scenario_id: 4, 
        child_scenario_id: 8  
    },
    {
        choice: `Kick the door open and declare yourself the village savior and let everyone know you have come to climb the Mountain of Death!`, 
        parent_scenario_id: 5,
        child_scenario_id: 9
    },
    {
        choice: `Enter <i>The Flying Fish</i> and walk up to the countertop to ask the bartender for a room and what is on the menu today.`, 
        parent_scenario_id: 5,
        child_scenario_id: 9
    },
    {
        choice: `Ask the attendant for entry to the bathhouse.`, 
        parent_scenario_id: 6,
        child_scenario_id: 8
    },
    {
        choice: `Distract the attendant and enter, so they do not realize how bad you smell.`, 
        parent_scenario_id: 6,
        child_scenario_id: 8
    },
    {
        choice: `Open the door to <i>The Flying Fish</i> carefully and look inside for any sketchy characters prior to talking to the owner.`, 
        parent_scenario_id: 7,
        child_scenario_id: 9
    },
    {
        choice: `Slowly approach the door of <i>The Flying Fish</i> and brace yourself for social engagement within the inn and tavern.`, 
        parent_scenario_id: 7,
        child_scenario_id: 9
    },
    {
        choice: `Talk to the large ogre.`, 
        parent_scenario_id: 8,
        child_scenario_id: 10
    },
    {
        choice: `Talk to the small gnome.`, 
        parent_scenario_id: 8,
        child_scenario_id: 11
    },
    {
        choice: `Continue talking to the Bartender.`, 
        parent_scenario_id: 9,
        child_scenario_id: 12
    },
    {
        choice: `Turn toward the dining hall and approach a wizened old man with graying hair. He might know something.`, 
        parent_scenario_id: 9,
        child_scenario_id: 13
    },
    {
        choice: `Thank the ogre and head out of <i>Wash & Board</i>. Take the secret pathway that the ogre told you about.`, 
        parent_scenario_id: 10,
        child_scenario_id: 14
    },
    {
        choice: `Get dressed, thank the gnome, and leave the bathhouse. As the sea breeze touches your freshly washed body you clasp the stone and squeeze it between your fist.`, 
        parent_scenario_id: 11,
        child_scenario_id: 15
    },
    {
        choice: `Nod and accept the bartender's knowledge. Ask for a map of the island and ask the bartender to point out the goblin base camp. Say your goodbyes and head toward the goblin base camp.`, 
        parent_scenario_id: 12,
        child_scenario_id: 16
    },
    {
        choice: `Wake up with a dry mouth and no means of getting rid of your headache. Take in your surroundings.`, 
        parent_scenario_id: 13,
        child_scenario_id: 17
    },
    {
        choice: `Turn left at the blue stone.`, 
        parent_scenario_id: 14,
        child_scenario_id: 18
    },
    {
        choice: `Turn right at the blue stone.`, 
        parent_scenario_id: 14,
        child_scenario_id: 19
    },
    {
        choice: `Stone order: blue, green and red.`, 
        parent_scenario_id: 15,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: green, blue and red.`, 
        parent_scenario_id: 15,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: red, green and blue.`, 
        parent_scenario_id: 15,
        child_scenario_id: 27
    },
    {
        choice: `Accept the goblin leader's help and head up the mountain path.`, 
        parent_scenario_id: 16,
        child_scenario_id: 20
    },
    {
        choice: `Refuse the goblin leader and ask for a place to rest before heading up the mountain alone.`, 
        parent_scenario_id: 16,
        child_scenario_id: 21
    },
    {
        choice: `Stone order: blue, green and red.`, 
        parent_scenario_id: 17,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: green, blue and red.`, 
        parent_scenario_id: 17,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: red, green and blue.`, 
        parent_scenario_id: 17,
        child_scenario_id: 27
    },
    {
        choice: `Stone order: blue, green and red.`, 
        parent_scenario_id: 18,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: green, blue and red.`, 
        parent_scenario_id: 18,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: red, green and blue.`, 
        parent_scenario_id: 18,
        child_scenario_id: 27
    },
    {
        choice: `Follow the Goblin leader up the mountain path.`, 
        parent_scenario_id: 20,
        child_scenario_id: 22
    },
    {
        choice: `Rest and continue up the Mountain of Death alone.`, 
        parent_scenario_id: 21,
        child_scenario_id: 23
    },
    {
        choice: `Stone order: blue, green and red.`, 
        parent_scenario_id: 22,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: green, blue and red.`, 
        parent_scenario_id: 22,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: red, green and blue.`, 
        parent_scenario_id: 22,
        child_scenario_id: 27
    },
    {
        choice: `Head left up the path.`, 
        parent_scenario_id: 23,
        child_scenario_id: 24
    },
    {
        choice: `Head right up the path.`, 
        parent_scenario_id: 23,
        child_scenario_id: 25
    },
    {
        choice: `Stone order: blue, green and red.`, 
        parent_scenario_id: 24,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: green, blue and red.`, 
        parent_scenario_id: 24,
        child_scenario_id: 26
    },
    {
        choice: `Stone order: red, green and blue.`, 
        parent_scenario_id: 24,
        child_scenario_id: 27
    },
    {
        choice: `Turn and run and scream for your life!`, 
        parent_scenario_id: 27,
        child_scenario_id: 28
    },
    {
        choice: `Do your best to stay calm and accept your fate.`, 
        parent_scenario_id: 27,
        child_scenario_id: 29
    },
    {
        choice: `Read the gravestone and after that head up to the peak.`, 
        parent_scenario_id: 29,
        child_scenario_id: 30
    },
    {
        choice: `Rush to the peak! I have no time to read so close to the top!`, 
        parent_scenario_id: 29,
        child_scenario_id: 31
    },
    {
        choice: `Continue to the peak of the mountaintop.`, 
        parent_scenario_id: 30,
        child_scenario_id: 32
    },
    {
        choice: `Look around at the blurry objects before you lose consciousness.`, 
        parent_scenario_id: 31,
        child_scenario_id: 33
    },
    {
        choice: `Pick up the crown of gold and smash it on the ground.`, 
        parent_scenario_id: 32,
        child_scenario_id: 34
    },
    {
        choice: `Pick up the book of leather and read the contents.`, 
        parent_scenario_id: 32,
        child_scenario_id: 35
    },
    {
        choice: `Pick up the snowglobe and smash it on the ground.`, 
        parent_scenario_id: 32,
        child_scenario_id: 36
    },
    {
        choice: `Pick up the blurry, pointy, and metal yellow-looking object.`, 
        parent_scenario_id: 33,
        child_scenario_id: 37
    },
    {
        choice: `Pick up the soft, rectangular, and light brown-looking object.`, 
        parent_scenario_id: 33,
        child_scenario_id: 38
    },
    {
        choice: `Pick up the cold, smooth, and clear ball-looking object.`, 
        parent_scenario_id: 33,
        child_scenario_id: 39
    },
    
]

const seedChoices = () => Choice.bulkCreate(choiceData);

module.exports = seedChoices;