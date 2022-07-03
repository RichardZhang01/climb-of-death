const { Scenario } = require('../models');

const scenarioData = [
    {
        // Scenario 1
        content: `<p class="mb-5">Last night, you slept in your cot beneath the deck of <i>The Explorer</i>, a tradeship. The wind was calm upon the sea.</p>
 
        <p class="mb-5">Recently, you learned about a small island off the coast of Java from your late mentor. This island is shrouded in mystery as a large, icy mountain appeared in the center of the island overnight about a year ago. As the sun rises, a chilling breeze floats across the sea and sunlight hits the large mountain in the center of the island.</p>
        
        <p class="mb-5">Aboard <i>The Explorer</i>'s deck, you witness a golden light exposing the peak of the mountain. A memory enters your mind, <i>climb the Mountain of Death and seek riches beyond your wildest dreams.</i> The familiar voice of your mentor fades as you gaze up at a mountainous mountain, a burly boulder of ice and snow, and a shiphand shouts, “Land ho! We are nearing the docks of the village of Kode!"</p>
        
        <p class="mb-5">How do you feel at this moment?</p>`
    },
    {
        // Scenario 2
        content: `<p class="mb-5">For the first time in a long time, your feet unconsciously begin to walk toward your goal. Ascend to the peak. Climb the Mountain of Death and survive. You are sure there are monsters and treasures abound, but know that you must be prepared for dangers and surprises.</p>

        <p class="mb-5">For a moment, all you hear is the wind and peace draws close. Your nose picks up the scent of rot and terrible body odor. You need to find a bathouse in the village before climbing the mountain.</p> 
        
        <p class="mb-5">What do you choose to do as The Explorer tradeship docks in the village of Kode?</p>`
    },
    {
        // Scenario 3
        content: `<p class="mb-5">No, no, no, no, no. My journey has been so long that I cannot endure another one. I am no mountaineer. I am no winter survivalist. Those druids taught me how to differentiate between berries and animal poop, not <i>climb the Mountain of Death</i>. Who says yes to climbing a mountain of death? Is it just a fun activity people take on when they are bored and have nothing to do? Why me?!</p>`
    },
    {
        // Scenario 4
        content: `<p class="mb-5">Walking through the village of Kode, you see the villagers made up of fishers, weavers, and small plot farmers. Various woodcutting tools sit near a shack of three men playing cards on a wooden stump.</p> 

        <p class="mb-5">One eyes you curiously and asks what you are looking for. You ask where the bathhouse is located and they point you toward the end of town.</p>
        
        <p class="mb-5">A blue painted wooden cabin sits with buckets next to it and rags on a drying rack.</p>`
    },
    {
        // Scenario 5
        content: `<p class="mb-5">As you exit the ship, you ask the boat attendant where the inn is located. She points you in the direction of the town's largest building where smoke drifts upward from its chimney. </p>
        <p class="mb-5">Excited to explore the village of Kode, you head straight toward <i>The Flying Fish</i> for room and board.</p>`
    },
    {
        // Scenario 6
        content: `<p class="mb-5">Yes, it is true. I stink. I should avoid people until I have cleaned myself up!</p> 

        <p class="mb-5">You wander the edge of the town avoiding eye contact. You stumble up a blue painted cabin with an attendant standing near the door. The sign above the attendants reads <i>Wash & Board</i>. You have reached the bathhouse.</p>`
    },
    {
        // Scenario 7
        content: `<p class="mb-5">My mentor has put a huge responsibility on my shoulders coming to this village. Nobody knows anything about the Mountain of Death! It would be silly of me to think the villagers would share their secrets with me. BIG SIGH! I shall head into <i>The Flying Fish</i> to find a room and to gather my energy.</p>`
    },
    {
        // Scenario 8
        content: `<p class="mb-5">You enter <i>Wash & Board</i>. The bathhouse is a steamy mess of thick scents and bubbles. The strong scent of body odor and soap strikes your nostrils.</p>

        <p class="mb-5">A humongous ogre sits in the far corner with a loofah on a stick. In the middle of a stool, a gnome sits  with a washcloth. </p>
        
        <p class="mb-5">Who do you choose to talk to?</p>`
    },
    {
        // Scenario 9
        content: `<p class="mb-5">You enter <i>The Flying Fish</i>. The tavern is a sticky mess of thick ale, the floor strewn with crushed nut shells. The stench of body odor and stale breath strikes your nostrils. 

        <p class="mb-5">A human bartender stands behind an oak countertop. He is currently speaking to a short dwarven woman.</p> 
        
        <p class="mb-5">As you approach the bartender, he turns to acknowledge you and asks about your visit to Kode. You talk to him about the Mountain of Death and he lets you know about the countless deaths related to the hikes up the mountain. According to him, someone had once tried to fly up in a balloon and was struck by lightning. Ever since then, dark and stormy clouds have sectioned off the upper half of the Mountain of Death.</p>`
    },
    {
        // Scenario 10
        content: `<p class="mb-5">You grab a stool and stride toward the corner with the ogre. As you pull out your rag, a large hand reaches over and offers you a fresh loofah stick.</p>
 
        <p class="mb-5">A low grumble exits the big ochre skinned beast, "Always good to take a shower. Everyone disappeared over the last year. Good to have good people. Mountain takes people from base to tip, but no one makes it to the top."</p> 
        
        <p class="mb-5">You ask the ogre about the Mountain of Death and he shares with you that people have been going missing and getting sick, so the village's population has dwindled. He tells you about a secret path further down from the bathhouse, he says to stay quiet until you reach the big blue stone, then go left.</p>`
    },
    {
        // Scenario 11
        content: `<p class="mb-5">You grab a short stool and head toward the middle of the room. As you pull out your rag, a small hand reaches over and offers you a tiny tissue. As the steam touches the tissue it begins to wilt. You pick it out from the gnome's hands and begin to wash your hands. The paper disintegrates with the water on your body.</p> 

        <p class="mb-5">The gnome perks up and says, "so, I guess you are here to check out the mountain? You should be careful heading up the mountain base. Goblins camp out there knowing that adventurers and researchers have been interested, but they do not ascend the mountain due to its mysterious nature."</p> 
        
        <p class="mb-5">You speak to the gnome about the fears and questions surrounding the peak of the mountain. He passes you a strangely carved stone and tells you to crush it after you leave <i>Wash & Board</i>.</p>`
    },
    {
        // Scenario 12
        content: `<p class="mb-5">The bartender lets you know that everyone has been hating on the goblins at the base of the mountain. However, the goblins always show adventurers and researchers how to get up the mountain. In fact, the Bartender went to adventure up the mountain when it appeared and the goblins told him that he would get lost if he continued past them, so they were gatekeepers in a sense.</p>`
    },
    {
        // Scenario 13
        content: `<p class="mb-5">You turn away from the bartender with two pints of ale and head over to the table with the wizened old man.</p>

        <p class="mb-5">Wide eyes peer at you from behind greasy gray hair and a voice squeaks out, "sit down, old friend. It has been a long time since I have seen you."</p> 
        
        <p class="mb-5">Confused, you share a table and drink with the unfamiliar old fellow as he spins a tale of magic and misery. Drink after drink is sent to your table as the night flashes before your eyes. Drinks at the table. Drinks in the town square. Drinks in the forest's edge. Finally, drinks at the base of the Mountain of Death.</p>`
    },
    {
        // Scenario 14
        content: `<p class="mb-5">Trusting in your new friend, the ogre, you scale your way up shale and cliffside. After an hour, you reach snow and ice.</p> 

        <p class="mb-5">You recognize the descent would not be possible. You are stuck on the Mountain of Death with no way down. Descent is not an option, so you must head up the mountain.</p> 
        
        <p class="mb-5">You walk further up the mountain and reach a blue stone that the Ogre told you about.</p>`
    },
    {
        // Scenario 15
        content: `<p class="mb-5">Your body turns into dust and is sucked into a purple portal. You travel through space and time, and you pop out of the other end of the purple portal. Your body rematerialized.</p>

        <p class="mb-5">In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, "Read well and follow the order, then place the stones."</p>`
    },
    {
        // Scenario 16
        content: `<p class="mb-5">You thank the bartender for the plentiful information and with a map in hand begin to head toward the base of the Mountain of Death.</p>

        <p class="mb-5">A couple hours pass and you reach the base camp with a small fire in the dark of night. Your heavy set body stomps into the newly formed ice and snow.</p>
        
        <p class="mb-5">A voice calls out to you, "do you seek the mountaintop? You should be careful, it is dangerous and nobody has reached the top and come back yet."</p>
        
        <p class="mb-5">As you step into the light and your eyes adjust, you see a square shouldered goblin with two other goblins preparing fish for a late dinner. The goblin leader sees the determination in your eyes and offers to take you up the first part of the mountain.</p>`
    },
    {
        // Scenario 17
        content: `<p class="mb-5">In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones."</p>`
    },
    {
        // Scenario 18
        content: `<p class="mb-5">In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, "Read well and follow the order, then place the stones."</p>`
    },
    {
        // Scenario 19
        content: `<p class="mb-5">And so it goes.</p>

        <p class="mb-5">Not listening to your trusty ogre companion, you turn right at the blue landmark. Five steps to the right of the blue landmark stone, the ice sheet begins to slide beneath your feet.</p> 
        
        <p class="mb-5">Uncontrollable and unprepared, you slide off the Mountain of Death only to plummet to your death.</p> 
        
        <p class="mb-5"><b>Try again! Maybe a new pathway will open up with the right decisions.</b></p>`
    },
    {
        // Scenario 20
        content: `<p class="mb-5">You graciously accept any help you can get with this mysterious mountain and harbinger of death.</p>`
    },
    {
        // Scenario 21
        content: `<p class="mb-5">You vehemently deny any help from the goblins. You can do it yourself. In fact, you are the sole reason why the village will survive.</p>`
    },
    {  
        // Scenario 22
        content: `<p class="mb-5">The goblin leader does not say much more and guides you up the path.</p> 

        <p class="mb-5">At a fork, he wishes you good luck and tells you that the right of the fork lies death. You continue to the left and reach an intricate stone puzzle.</p> 
        
        <p class="mb-5">In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, "Read well and follow the order, then place the stones."</p>
        `
    },
    {
        // Scenario 23
        content: `<p class="mb-5">You rest and eat fish before heading up the Mountain of Death by your lonesome. You reach a blue stone landmark and a fork in the road.</p>`
    },
    {
        // Scenario 24
        content: `<p class="mb-5">In front of you are three stone gargoyles with colored gems embedded in each of them: red, green and blue. At the center of a stone platform a rock is inscribed with the words, “Read well and follow the order, then place the stones."</p>`
    },
    {
        // Scenario 25
        content: `<p class="mb-5">And so it goes.</p>

        <p class="mb-5">Not accepting help from the Goblin leader and not acknowledging the bartender's assistance cost your life.</p>
        
        <p class="mb-5">Five steps to the right of the blue landmark stone and the ice sheet begins to slide beneath your feet.</p> 
        
        <p class="mb-5">Uncontrollable and unprepared, you slide off the Mountain of Death only to plummet to your death.</p> 
        
        <p class="mb-5"><b>Try again! Maybe a new pathway will open up with the right decisions.</b></p>`
    },
    {
        // Scenario 26
        content: `<p class="mb-5">Reading may be your passion, but it is not your forte.</p> 

        <p class="mb-5">You place the stones in the incorrect order and the gargoyles come to life. The three pick you up and toss you off the Mountain of Death.</p> 
        
        <p class="mb-5"><b>Try again! Maybe another story pathway will open up for you.</b></p>`
    },
    {
        // Scenario 27
        content: `<p class="mb-5">You are a skilled reader and your memory is unmatched!</p> 

        <p class="mb-5">You put the colorful stones in the correct order and the gargoyles begin to shift and shake. As the dust and snow surrounding their stone-like existence falls to the ground, you see the animated eyes of the gargoyles begin to glow red, green and blue. The stone wings begin to flap and when the gargoyles lift off they begin to hover over to you.</p> 
        
        <p class="mb-5">What do you do?</p>`
    },
    {
        // Scenario 28
        content: `<p class="mb-5">You panic and begin to run as fast as you can. Beneath your feet, the ice shifts and shakes. You lose your footing and begin to tumble down the Mountain of Death.</p> 

        <p class="mb-5">The gargoyles quicken their pace and reach out to grab you, but your momentum is too fast. The fall to the bottom of a rocky crag lasts for what seems to be a long time, but the crunch is a short-lived moment.</p> 
        
        <p class="mb-5"><b>You have died!</b></p>`
    },
    {
        // Scenario 29
        content: `<p class="mb-5">The entire journey up this mountain has been a test. A test of curiosity. A test of courage. A test of resilience.</p> 

        <p class="mb-5">You have spoken with your mentor. You have met townsfolk in Kode. You have found your own unique way up the base of the mountain.</p>  
        
        <p class="mb-5">Finally, you have solved a puzzle that no one else has ever solved before.</p>  
        
        <p class="mb-5">You have reached the clouds of the Mountain of Death.</p>  
        
        <p class="mb-5">As you accept your fate, the three stone gargoyles grab onto you and flap their wings harder. You feel your feet lift off the ground and weightlessness combats the nature of gravity.</p>  
        
        <p class="mb-5">You are flying!</p>  
        
        <p class="mb-5">Your body and gear are coated with precipitation as you emerge from the cloudtop. The gargoyles begin to slow the flight and hover over a flattened rocky platform with a gravestone.</p> 
        
        <p class="mb-5">As you conform to gravity, your gaze lifts and you see the peak of the Mountain of Death.</p>`
    },
    {
        // Scenario 30
        content: `<p class="mb-5">This magical journey is nearing its end.</p> 

        <p class="mb-5">You have recognized that talking and reading has provided you with new information. You squat to read the gravestone. It says: move slow and reach the mountaintop. You will face three choices. A crown of gold, a book of leather, and a snowglobe of the Island of Death. Smash the item of your choosing.</p>`
    },
    {
        // Scenario 31
        content: `<p class="mb-5">Hurry up and move your legs! Reach the peak and achieve your goals as soon as possible. </p>

        <p class="mb-5">Your lungs begin to burn. Your vision begins to burn, the oxygen at this elevation is too thin and you have not adjusted to it. You almost pass out, but steel yourself as the journey has been too arduous to give up now.</p> 
        
        <p class="mb-5">You reach the peak of the Mountain of Death.</p>`
    },
    {
        // Scenario 32
        content: `<p class="mb-5">Assisted by new information, you continue your ascent.</p> 

        <p class="mb-5">You are firm and confident in your steps. You are patient and take your time which helps at this altitude. You begin to get dizzy and gather your strength before continuing to the peak.</p> 
        
        <p class="mb-5">Sweat beads down your brow. The final step up the rocky crags causes you to slip. You catch yourself and cut your hand. Blood trickles down into the snow.</p> 
        
        <p class="mb-5">You have finally reached the peak of the Mountain of Death. The view is beautiful as you peer into the horizon of the Sea of Java. The journey has been long and arduous and now you, defying all odds, have reached the mountaintop.</p> 
        
        <p class="mb-5">At the peak, you see a table with three items: a golden crown, a leatherbound book, and a snowglobe.</p> 
        
        <p class="mb-5">Knowing you must smash an item, which one item do you pick up?</p>`
    },
    {
        // Scenario 33
        content: `<p class="mb-5">With your vision fading fast, you see a shiny yellow object. In your hands, the yellow object is pointy and cold to the touch. It feels like a metal of some kind, maybe gold?</p> 

        <p class="mb-5">Next to it sits a brown rectangular object and, in your hands, it is soft and cool. It feels like suede or leather.</p> 
        
        <p class="mb-5">The final item has a heft to it. In your hands, it is smooth to the touch and vaguely transparent. It has a flat base. Maybe it is a crystal ball?</p> 
        
        <p class="mb-5">Knowing there is a yellow, brown and smooth object, which item do you pick?</p>`
    },
    {
        // Scenario 34
        content: `<p class="mb-5">You pick up the crown of gold and it looks spectacular.</p> 

        <p class="mb-5">So much so that you hesitate to smash the crown. Your arm comes up and you spike the crown into the mountaintop. It sticks deep into the ice and the mountain begins to shake.</p>  
        
        <p class="mb-5">A crack begins to appear and snow begins to fall into a widening crevice. The ice shifts and you fall into the black hole. The descent feels endless and you fall into a pile of gold and treasure!</p>  
        
        <p class="mb-5">A hoard has appeared before your eyes and you begin to swim your way through the Scrooge McDuck wealth with no way of exiting the vault of treasures.</p>  
        
        <p class="mb-5"><b>Congratulations, you have reached one of six endings. </b></p>`
    },
    {
        // Scenario 35
        content: `<p class="mb-5">You pick up the leatherbound book and unwind the tie. 

        <p class="mb-5">You sit and begin to read the story within and you notice similarities to the beginning of this story. Before long, you find yourself reading for hours.</p> 
        
        <p class="mb-5">When you look up you are back in the village of Kode. Your memories begin to fade and you think, <i>ah, I must get back to work.</i></p> 
        
        <p class="mb-5">You see a group of three men next to the lumber shed. They are playing cards and invite you to sit down as the woodcutting winds down for the day. </p>
        
        <p class="mb-5">You think once again, <i>I must get back to work, there was something I was trying to do.</i> </p>
        
        <p class="mb-5">You look toward the mountaintop and remember when it appeared out of nowhere last year. Nowadays, adventurers and researchers come to visit the mountain, but the townsfolk of Kode know better.</p>
        
        <p class="mb-5"><b>Congratulations, you have reached one of six endings.</b></p>`
    },
    {
        // Scenario 36
        content: `<p class="mb-5">You pick up the Snowglobe of Death and peer into the transparent, watery sphere.</p> 

        <p class="mb-5">Inside, a miniature replica of the Island of Death holds a dock and port for the village of Kode, a familiar forest, and an unmistakable recreation of the Mountain of Death.</p> 
        
        <p class="mb-5">The snowglobe seems to be a magical copy of the island itself. You hold the snow globe for one more second before striking the mountain peak.</p>  
        
        <p class="mb-5">As the glass shatters, you feel the mountain quake beneath your feet. An avalanche begins to form as ice shakes down the mountainside.</p>
        
        <p class="mb-5">The cloudtop dissipates and you are able to see the village of Kode. The avalanche is going to destroy the village!</p>
        
        <p class="mb-5">The avalanche seems to slow down, as if time itself has stopped gravity. The remnants of the snow globe release a purple gas that reaches into the sky.</p>
        
        <p class="mb-5">A column of light spears down from the heavens to touch the purple gas. As the beam of light connects, a thunderous noise emanates from the tunnel of light.</p>
        
        <p class="mb-5">The ground shakes harder and you lose your footing. You begin to slide down the Mountain of Death.</p>
        
        <p class="mb-5">The beam of purple holiness stretches in diameter to reach across the island. A pulse of magical energy shatters the illusion of the Island of Death.</p>
        
        <p class="mb-5">The mountain crumbles layer by layer, like an icy cake. The ice frosting falls from the mountain and the ice cream insides erupt!</p>
        
        <p class="mb-5">You are brought from the peak to the base of the mountain in the blink of an eye. Surprisingly, you are unharmed.</p>
        
        <p class="mb-5">The villagers of Kode run to the base of the Mountain of Death and see you emerge. They approach and run past you.</p>
        
        <p class="mb-5">When you turn around, you see the many missing adventurers and researchers that ventured up the Mountain of Death.</p>
        
        <p class="mb-5">You have rescued the island, the village, the adventurers, and the researchers. You discovered the secret of the Mountain of Death!<p>
        
        <p class="mb-5"><b>Congratulations, you have reached the one successful ending. You have discovered the secret of the Mountain of Death and broken the curse!</b></p>`
    },
    {
        // Scenario 37
        content: `<p class="mb-5">The yellow metal object feels awkward in your hands, but your vision clears and you see a crown of gold. You place it on your head and give a heavy exhale.</p>

        <p class="mb-5">You sit next to the leatherbound book and a silly looking snowglobe.</p>
        
        <p class="mb-5">Your head feels different and as you look down at your hands you see the color of gold extending across your body. It is becoming hard to move and you panic. You stand up sluggishly and begin to run toward the exit you came from.</p>
        
        <p class="mb-5">Your body is cold and you can no longer move. You begin to fall over as a single tear runs down your golden cheek.</p> 
        
        <p class="mb-5">You are immortalized in gold at the peak of the Mountain of Death.</p>
        
        <p class="mb-5"><b>Congratulations, you have reached one of six endings.</b></p>`
    },
    {
        // Scenario 38
        content: `<p class="mb-5">The brown soft object feels calming to touch. Your vision clears and you see a notebook in your hand. A beautiful leatherbound book wrapped in leather bindings sits between your fingers.</p>

        <p class="mb-5">You unwrap the book and begin to read the contents. You learn about the Sea of Java, the Island of Death, the village of Kode, and the newly formed Mountain of Death.</p>
        
        <p class="mb-5">You reach the end of the story and learn about a person who reached the top and failed to break the curse of the island. You look up at the horizon and see a dark storm headed toward the top of the mountain.</p>
        
        <p class="mb-5">The calm atmosphere of the mountaintop is unsettling at this moment. You experienced a long journey, but with no way down the mountain and a storm coming, you feel as though the end will be short.</p>
        
        <p class="mb-5"><b>Congratulations, you have reached one of six endings.</b></p>`
    },
    {
        // Scenario 39
        content: `<p class="mb-5">The transparent ball object has a certain heft to it. Your vision clears as you see a snowglobe of the very island you are on! The intricacy of the island, mountain and village takes your attention. You shake the snow globe and snow begins to fall on the mountaintop.</p>

        <p class="mb-5">You snow land on your neck and shoulders. You look up and snow begins to fall upon the Mountain of Death, the wind picks up, and you shiver. You look at where you entered from only to see the clouds have risen to obscure your vision.</p>
        
        <p class="mb-5">There is no escape from the mountain. You quickly succumb to the weather as hypothermia overtakes your body. The snow globe rolls out of your hands and lands perfectly where it once sat with snow softly falling on the replica island, mountain and village.</p>
        
        <p class="mb-5"><b>Congratulations, you have reached one of six endings.</b></p>`
    }
]

const seedScenarios = () => Scenario.bulkCreate(scenarioData);

module.exports = seedScenarios;