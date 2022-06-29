const { Scenario } = require('../models');
const sequelize = require('../config/connection');

const scenarioData = [
    {
        id: 1,
        content: `Last night, you slept in your cot beneath the deck of the Explorer, a tradeship. The wind was calm upon the sea. Recently, you learned about a small island off the coast of Java from your late mentor. This island is shrouded in mystery as a large and icy mountain appeared in the center of the island overnight about a year ago. As the sun rises, a chilling breeze floats across the sea and sunlight hits the large mountain in the center of the island. Aboard the Explorers deck, you witness a golden light exposing the peak of the mountain. A memory enters your mind, "Climb the Mountain of Death and seek riches beyond your wildest dreams." The familiar voice of your mentor fades as you gaze up at a mountainous mountain, a burly boulder of ice and snow, and a shiphand shouts, “Land ho! We are nearing the docks of the village of Kode!” How do you feel at this moment?`,
    },
    {
        id: 2,
        content: `For the first time in a long time, your feet unconsciously begin to walk towards your goal. Ascend to the peak. Climb the Mountain of Death and survive. You are sure there are monsters and treasures abound, but know that you must be prepared for danger and surprise. For a moment, all you hear is the wind and peace draws close. Your nose picks up a scent of rot and terrible body odor. You need to find a bathouse in the village before climbing the mountain. What do you choose to do as the Explorer tradeship docks in the village of Kode?`,
    },
    {
        id: 3,
        content: `No, no, no, no, no. My journey has been so long that I cannot endure another one. I am no mountaineer. I am no winter survivalist. Those druids taught me how to differentiate between berries and animal poop, not “climb the Mountain of Death”! Who says yes to climbing a mountain of death? Is it just a fun activity people take on when they are bored and have nothing to do? Why me?!`,
    },
]

const seedData = () => {
    Scenario.bulkCreate(scenarioData);
}

module.exports = seedData;