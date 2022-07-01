const { Scenario } = require('../models');

const scenarioData = [
    {
        content: `Last night, you slept in your cot beneath the deck of the Explorer, a tradeship. The wind was calm upon the sea. Recently, you learned about a small island off the coast of Java from your late mentor. This island is shrouded in mystery as a large and icy mountain appeared in the center of the island overnight about a year ago. As the sun rises, a chilling breeze floats across the sea and sunlight hits the large mountain in the center of the island. Aboard the Explorers deck, you witness a golden light exposing the peak of the mountain. A memory enters your mind, "Climb the Mountain of Death and seek riches beyond your wildest dreams." The familiar voice of your mentor fades as you gaze up at a mountainous mountain, a burly boulder of ice and snow, and a shiphand shouts, “Land ho! We are nearing the docks of the village of Kode!” How do you feel at this moment?`
    },
    {
        content: `For the first time in a long time, your feet unconsciously begin to walk towards your goal. Ascend to the peak. Climb the Mountain of Death and survive. You are sure there are monsters and treasures abound, but know that you must be prepared for danger and surprise. For a moment, all you hear is the wind and peace draws close. Your nose picks up a scent of rot and terrible body odor. You need to find a bathouse in the village before climbing the mountain. What do you choose to do as the Explorer tradeship docks in the village of Kode?`
    },
    {
        content: `No, no, no, no, no. My journey has been so long that I cannot endure another one. I am no mountaineer. I am no winter survivalist. Those druids taught me how to differentiate between berries and animal poop, not “climb the Mountain of Death”! Who says yes to climbing a mountain of death? Is it just a fun activity people take on when they are bored and have nothing to do? Why me?!`
    },
    {
        content: `Walking through the village of Kode, you see the gentlefolk made up of fishers, weavers, and small plot farmers. Various woodcutting tools sit near a shack of three men playing cards on a wooden stump. One eyes you curiously and asks what you are looking for. You ask where the bathhouse is located and they point you towards the end of town. A blue painted wooden cabin sits with buckets next to it and rags on a drying rack.`
    },
    {
        content: `As you exit the ship, you ask the boat attendant where the inn is located. She points you in the direction of the largest building where smoke exits from the chimney top. Excited to explore the village of Kode, you head straight towards “The Flying Fish” for room and board.`
    },
    {
        content: `Yes, it is true. I stink. I should avoid people until I have cleaned myself up! You wander the edge of the town avoiding eye contact. You stumble up a blue painted cabin with an attendant standing near the door. The sign above the attendants reads “Wash & Board”. You have reached the bathhouse.`
    },
    {
        content: `My mentor has put a huge responsibility on my plate coming to this village. Nobody knows anything about the Mountain of Death! It would be silly of me to think the villagers would share their secrets with me. BIG SIGH! I shall head into “The Flying Fish” to find a room and to gather my energy.`
    },
    {
        content: `You enter the Wash & Board. The bathhouse is a steamy mess of thick scent and bubbles. A strong scent of body odor and soap strikes your nostrils. A humongous ogre sits in the far corner with a loofah on a stick. In the middle of a stool, a gnome sits  with a washcloth. Who do you choose to talk to?`
    },
    {
        content: `You enter The Flying Fish. The tavern is a sticky mess of thick ale and a hardened floor of crushed nut shells. A strong scent of body odor and stale breath strikes your nostrils. A human bartender stands behind an oak countertop, he is currently speaking to a short dwarven woman. As you approach the bartender, he turns to acknowledge and asks about your visit to Kode! You talk to him about the Mountain of Death and he lets you know about the countless deaths related to the hikes up the mountain. The bartender lets you know someone tried to float up in a balloon and was struck by lightning. Ever since then dark and stormy clouds have sectioned off the upper half of the Mountain of Death.`
    },
    {
        content: `You grab a stool and stride towards the corner with the ogre. As you pull out your rag, a large hand reaches over and offers you a fresh loofah stick. A low grumble exits the big ochre skinned beast, “Always good to take a shower. Everyone disappeared over the last year. Good to have good people. Mountains take people from bottom to top, but no one makes it to top.” You ask the Ogre about the Mountain of Death and he shares with you that people have been going missing and getting sick, so the villages population has dwindled. He tells you about a secret path further down from the bathhouse, he says to stay quiet until you reach the big blue stone, then go left.`
    },
    {
        content: `You grab a short stool and head towards the middle of the room. As you pull out your rag, a small hand reaches over and offers you a tiny tissue. As the steam touches the tissue it begins to wilt. You pick it out from the Gnomes hands and begin to wash your hands. The paper disintegrates with the water on your body. The Gnome perks up and says, “So, I guess you are here to check out the mountain? You should be careful heading up the mountain base. Goblins camp out there knowing that adventurers and researchers have been interested, but they do not ascend the mountain due to its mysterious nature.” You speak to the Gnome about the fears and questions of the mountaintop. He passes you a strangely carved stone and tells you to crush it after you leave the Wash & Board.`
    },
    {
        content: `The Bartender lets you know that everyone has been hating on the goblins at the base of the mountain, however, the goblins always show adventurers and researchers how to get up the mountain. In fact, the Bartender went to adventure up the mountain once it had appeared and the goblins told him that he would get lost if he continued past them, so they are gatekeepers in a sense.`
    },
    {
        content: `You turn away from the Bartender with two pints of ale and head over to the table with the Wizened Old Man. Wide eyes peer behind greasy gray hair and a voice squeaks out, “Sit down, old friend. It has been a long time since I have seen you.” Confused, you share a table and drink with the unfamiliar old fellow as he spins a tale of magic and misery. Drink after drink is sent to your table as the night flashes before your very eyes. Drinks at the table. Drinks in the town square. Drinks at the edge of the forest. Finally, drinks at the base of the Mountain of Death.`
    },
    {
        content: `Trusting in your new friend, Ogre, you scale your way up shale and cliffside. In an hour, you reach snow and ice. You recognize the descent would not be possible. You are stuck on the Mountain of Death with no way down. Descent is not an option, so you must head up the mountain. You walk further up the mountain and reach a blue stone that the Ogre told you about. `
    },
    {
        content: `Your body turns into dust and is sucked into a purple portal. As you travel through space and time, you pop out of the other end of the purple portal. Your body rematerialized. In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones.”`
    },
    {
        content: `You thank the Bartender for the plentiful information and with a map in hand begin to head towards the base of the Mountain of DeathA couple hours pass and you reach the base camp with a small fire in the dark of night. Your heavy set body stomps into the newly formed ice and snow. A voice calls out to you, “Do you seek the mountaintop? You should be careful, it is dangerous and nobody has reached the top and come back yet.” As you step into the light and your eyes adjust you see a square shouldered goblin with two other goblins preparing fish for a late dinner. The Goblin leader sees the determination in your eyes and offers to take you up the first part of the mountain.`
    },
    {
        content: `In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones.”`
    },
    {
        content: `And so it goes, not listening to your trust Ogre companion you turn right at the blue landmark. Five steps to the right of the blue landmark stone and the ice sheet begins to slide beneath your feet. Uncontrollable and unprepared, you slide off the Mountain of Death only to plummet to your death. Try again! Maybe a new pathway will open up with the right decisions.`
    },
    {
        content: `You graciously accept any help you can get with this mysterious mountain and harbinger of death.`
    },
    {
        content: `You vehemently deny any help from the goblins. You can do it yourself and you have the interest in being solo. In fact, you are the sole reason why the village will survive. Right?`
    },
    {
        content: `The goblin leader does not say much more and guides you up the path. At a fork, he wishes you good luck and tells you that the right of the fork is death. You continue to the left and reach an intricate stone puzzle. In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones.”`
    },
    {
        content: `You rest and eat fish before heading up the Mountain of Death by lonesome. You reach a blue stone landmark and a fork in the road.`
    },
    {
        content: `In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones.”`
    },
    {
        content: `And so it goes, not accepting help from the Goblin leader and not acknowledging the Bartenders assistance costs you your life. Five steps to the right of the blue landmark stone and the ice sheet begins to slide beneath your feet. Uncontrollable and unprepared, you slide off the Mountain of Death only to plummet to your death. Try again! Maybe a new pathway will open up with the right decisions.`
    },
    {
        content: `Reading may be your passion, but it is not your forte. You place the stones in the incorrect order and the gargoyles come to life. The three pick you up and toss you off the Mountain of Death. Try again! Maybe another story pathway will open up for you. `
    },
]

const seedScenarios = () => Scenario.bulkCreate(scenarioData);

module.exports = seedScenarios;