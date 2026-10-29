
/* Original children's stories written for Funhouse Oracle. pages: [emoji scene, text] */
const STORY_CATS=[["bed","🌙","Bedtime"],["animal","🐾","Animals"],["adv","🗺️","Adventure"],["fairy","🏰","Fairy tales"],["friend","💛","Friendship"],["funny","😂","Funny"],["space","🚀","Space"],["ocean","🌊","Ocean"],["choose","🔀","Choose your path"]];
const STORIES=[
{id:"moon-blanket",cat:"bed",em:"🌙",t:"The Moon's Soft Blanket",age:"3-6",pages:[
 ["🌙","Every night, the Moon knitted a blanket out of silver starlight. She knitted slowly, one sparkly stitch at a time, humming a quiet tune."],
 ["🧶","One evening, a little star called Pip asked, \"Moon, who is the blanket for?\" The Moon smiled. \"It's for everyone who is getting ready to sleep.\""],
 ["🏡","She laid the blanket gently over the rooftops. Over the farms. Over the sleepy rivers and the quiet forests. Everything it touched grew calm and still."],
 ["🦉","The owls stopped hooting. The crickets sang more softly. Even the wind whispered, \"Shhh, shhh,\" as it tiptoed through the trees."],
 ["🛏️","Then the Moon tucked the last corner of the blanket around a little bed, right where you are lying now. It felt warm, and light, and safe."],
 ["✨","\"Goodnight,\" whispered the Moon. \"I'll keep watch until morning.\" And with the starlight blanket around you, your eyes grew heavy, and heavier, and closed. Goodnight."]]},
{id:"sleepy-bear",cat:"bed",em:"🐻",t:"Bruno the Sleepy Bear",age:"2-5",pages:[
 ["🐻","Bruno the bear loved autumn. He loved crunchy leaves, sweet berries, and long walks with his mama. But most of all, he loved being awake."],
 ["🍂","\"Time for the long winter sleep,\" said Mama Bear. \"But I'm not tired!\" said Bruno, rubbing his eyes with a big furry paw."],
 ["🍯","So Mama made him warm honey milk. She told him about the dreams waiting for him: dreams of meadows, of rivers full of fish, of buzzing summer bees."],
 ["❄️","Outside, the first snowflakes began to fall, slow and soft, like feathers from a pillow. Bruno watched them drift past the cave. One, two, three…"],
 ["😴","\"Mama,\" yawned Bruno, \"will you be here when I wake up?\" \"Always,\" said Mama, and she hugged him close."],
 ["💤","Bruno curled into a fuzzy ball. He counted snowflakes until his breathing grew slow and deep. And there, in the cozy cave, he dreamed of spring. Goodnight, Bruno. Goodnight, little one."]]},
{id:"night-garden",cat:"bed",em:"🌸",t:"The Night Garden",age:"3-7",pages:[
 ["🌸","When the sun goes down, most gardens go to sleep. But not Lila's garden. Lila's garden wakes up."],
 ["🌼","The moonflowers open their pale petals, one by one. The fireflies switch on their tiny lanterns. And the snails go for their slow evening stroll."],
 ["🐞","Lila tiptoed outside in her pajamas. \"What are you all doing?\" she whispered. \"We're getting the night ready,\" said a ladybug, \"so it's gentle for sleepy children.\""],
 ["🌙","The fireflies drew soft circles in the air. The moonflowers breathed out a sweet smell like vanilla. The frog by the pond sang one low, sleepy note."],
 ["🧸","Lila yawned. \"It's beautiful,\" she said. \"Now it's your turn to sleep,\" said the ladybug. \"We'll look after the garden.\""],
 ["💫","Lila went back to bed and pulled the covers to her chin. Through the window, the fireflies blinked goodnight. And the night garden kept watch until morning."]]},
{id:"brave-mouse",cat:"animal",em:"🐭",t:"Mimi the Brave Little Mouse",age:"3-7",pages:[
 ["🐭","Mimi was the smallest mouse in the meadow. Her ears were small, her paws were small, and her voice was so small that nobody ever heard it."],
 ["🦁","One day, a big lion got his paw stuck in a tangle of vines. He roared and roared, but the more he pulled, the tighter the vines became."],
 ["🐘","The elephant was too big to reach the knot. The giraffe's neck was too long to bend. The animals shook their heads. \"Nobody can help him.\""],
 ["✂️","\"I can,\" said Mimi. This time, everybody heard. She scurried into the tangle and nibbled, nibble, nibble, nibble, until the vine snapped."],
 ["🎉","The lion pulled his paw free. \"Thank you, little one,\" he said, bowing low. \"You were the bravest of us all.\""],
 ["💛","From that day on, whenever Mimi spoke, the whole meadow listened. Because being small never means being unimportant. The end."]]},
{id:"penguin-hat",cat:"animal",em:"🐧",t:"Percy Penguin's Lost Hat",age:"3-6",pages:[
 ["🐧","Percy the penguin had a bright red woolly hat. His grandma had knitted it, and he wore it every single day."],
 ["🌬️","One windy morning, WHOOSH! The wind snatched the hat right off his head and sent it tumbling across the ice."],
 ["🦭","Percy waddled after it as fast as he could. \"Have you seen my hat?\" he asked a seal. \"It went that way!\" said the seal, pointing a flipper."],
 ["🐋","He asked a whale. \"It went that way!\" He asked a seagull. \"It went that way!\" Percy waddled, slid, and waddled some more."],
 ["🐣","At last, he found it, in a snowy nest, keeping a tiny chick warm. The chick shivered. \"Is this yours?\" it squeaked."],
 ["❤️","Percy thought about it. \"You can borrow it,\" he said, \"until you grow your fluffy feathers.\" Grandma was very proud. And Percy's head? It felt cold, but his heart felt wonderfully warm."]]},
{id:"turtle-race",cat:"animal",em:"🐢",t:"Tilly Turtle Takes Her Time",age:"4-8",pages:[
 ["🐢","Tilly the turtle did everything slowly. She ate slowly, she walked slowly, and she even smiled slowly."],
 ["🐇","\"Hurry up, Tilly!\" said the rabbits. \"You'll miss everything!\" But Tilly just said, \"I like to notice things.\""],
 ["🗺️","One day, the animals had a treasure hunt. The rabbits zoomed ahead, racing past every clue. Tilly walked slowly, looking carefully at everything."],
 ["🔍","She noticed a tiny arrow scratched on a rock. She noticed a ribbon tied to a branch. She noticed footprints that led behind the waterfall."],
 ["💎","The rabbits ran in circles, puzzled and tired. Tilly walked slowly behind the waterfall, and there was the treasure: a box of shiny pebbles for everyone."],
 ["🌿","She shared the pebbles with all her friends. \"How did you find it?\" they asked. Tilly smiled her slow smile. \"I took my time.\" The end."]]},
{id:"map-attic",cat:"adv",em:"🗺️",t:"The Map in the Attic",age:"5-9",pages:[
 ["📦","On a rainy afternoon, Leo and his little sister Ava climbed into the attic. Behind an old trunk, they found a rolled-up map tied with string."],
 ["🗺️","The map showed their own house! But there was a dotted line from the kitchen to the garden, and a big X under the old apple tree."],
 ["🌧️","They put on their raincoats and followed the line: ten steps past the shed, three hops over the puddle, and a left turn at the scarecrow."],
 ["⛏️","Under the apple tree, they dug with their little spades until, CLINK, they hit a small metal box."],
 ["📜","Inside was a letter: \"To whoever finds this: I buried my favorite toys here when I was eight. I hope they make you happy too. Love, Grandpa.\""],
 ["🧸","There was a wooden boat, a tin whistle and a tiny teddy bear. That evening, Grandpa laughed and laughed when they showed him. \"You found my treasure!\" And the three of them played together until bedtime."]]},
{id:"balloon-trip",cat:"adv",em:"🎈",t:"Rosie's Balloon Trip",age:"4-8",pages:[
 ["🎈","Rosie held a big bunch of birthday balloons. Red, yellow, blue and green. A gust of wind blew, and suddenly her feet lifted off the ground!"],
 ["🏙️","Up, up she floated, over her street and over the park. The people below looked as small as ants. \"Wheee!\" laughed Rosie."],
 ["🦅","An eagle flew beside her. \"Where are you going?\" it asked. \"I don't know!\" said Rosie. \"But the view is wonderful!\""],
 ["🌈","She floated through a rainbow, and her dress turned every color at once. She waved to a surprised pilot in a little airplane."],
 ["🏠","\"I'd like to go home now,\" said Rosie. The eagle gently pecked one balloon, POP, then another, POP, and Rosie drifted slowly back down."],
 ["🎂","She landed right in her garden, just in time for cake. \"Where have you been?\" asked Mom. Rosie grinned. \"On the best birthday adventure ever!\""]]},
{id:"lost-key",cat:"adv",em:"🗝️",t:"The Little Golden Key",age:"5-9",pages:[
 ["🗝️","On the way to school, Sam found a little golden key lying in the grass. It was warm, and it hummed softly in his hand."],
 ["🌳","At lunchtime, he noticed a tiny door at the bottom of the oldest tree in the schoolyard. It had a tiny golden keyhole."],
 ["🚪","Sam turned the key. The door swung open, and he shrank, smaller and smaller, until he could walk right inside."],
 ["🍄","Inside was a village of mushroom houses, where beetles sold acorn soup and ants carried lanterns. \"You found our key!\" cheered the villagers."],
 ["🎆","They had lost it for a hundred years, and without it the village door could never open to the sunshine. They threw a party with dandelion fireworks."],
 ["🔔","When the school bell rang, Sam grew back to normal size. He kept the secret, but every lunchtime he left a crumb of cake by the little door. The end."]]},
{id:"princess-dragon",cat:"fairy",em:"🐉",t:"The Princess Who Befriended a Dragon",age:"4-8",pages:[
 ["🏰","Princess Mei lived in a castle on a hill. Everyone in the kingdom was afraid of the dragon who lived in the mountain."],
 ["🐉","\"He breathes fire!\" said the guards. \"He's terrible!\" said the cooks. But Mei noticed something: the dragon never actually hurt anyone."],
 ["🧺","One morning, Mei packed a basket of bread and cheese and climbed the mountain by herself. Her knees shook, but she kept going."],
 ["😢","At the top, she found the dragon crying. \"Nobody ever visits me,\" he sniffed. \"They just run away.\" His tears made little puffs of steam."],
 ["🧀","Mei sat down and shared her lunch. The dragon loved cheese. They talked all afternoon, and laughed so much that he accidentally toasted the bread."],
 ["🤝","Mei brought the dragon home to meet the kingdom. Soon he was lighting the castle fires every winter and giving rides to the children. Sometimes the scariest thing is just a friend you haven't met yet."]]},
{id:"star-wish",cat:"fairy",em:"⭐",t:"The Wishing Star",age:"3-7",pages:[
 ["⭐","High in the sky lived a little star who could grant one wish every hundred years. Tonight was the night."],
 ["👀","She looked down at the world. A king wished for more gold. A pirate wished for a bigger ship. A girl named Nora looked up and whispered."],
 ["🌻","\"I wish my grandma's garden would bloom again,\" said Nora. \"She's been sad since winter, and flowers always make her smile.\""],
 ["💫","The little star smiled. Of all the wishes, this was the kindest. She sent a sparkle, ziiing, down through the night sky."],
 ["🌷","In the morning, Grandma's garden was full of tulips, roses and sunflowers, nodding in the breeze. Grandma laughed and cried at the same time."],
 ["🌌","Nora never knew where the flowers came from. But every night after that, she waved at one twinkly star. And the star always twinkled back."]]},
{id:"shoemaker-elves",cat:"fairy",em:"🧝",t:"The Tiny Helpers",age:"4-8",pages:[
 ["🧵","In a tiny shop lived Oma, a tailor whose eyes had grown tired. She couldn't sew as fast as she used to, and her shelves were nearly empty."],
 ["🌙","One night she left a half-finished coat on her table and went to bed. In the morning, the coat was finished, with perfect, tiny stitches!"],
 ["🔦","The next night, she hid behind the curtain. At midnight, two little helpers climbed out of a teacup and began to sew, singing a tiny song."],
 ["🧥","Their own clothes were patched and thin. \"They help me,\" thought Oma, \"so I will help them.\" She sewed two little coats and two little hats."],
 ["🎁","The helpers found the gifts and danced around the table with joy. They hugged Oma's thumb, which was the biggest hug they could manage."],
 ["☕","From then on, they sewed together every evening, three friends and a pot of tea. And the shop was never empty again."]]},
{id:"new-kid",cat:"friend",em:"🏫",t:"The New Kid",age:"4-8",pages:[
 ["🏫","On the first day at her new school, Zara stood alone by the fence. She didn't know anyone, and her tummy felt full of butterflies."],
 ["⚽","A boy named Ben kicked his ball too hard, and it rolled right to Zara's feet. She kicked it back, a perfect pass!"],
 ["😮","\"Whoa, you're good!\" said Ben. \"Want to play?\" Zara nodded. Her butterflies flew away, one by one."],
 ["🍎","At lunch, Ben introduced her to his friends. Zara shared her mango slices, which nobody had ever tried before. Everybody loved them."],
 ["🎨","In art class, they drew a giant picture together of a football game on the moon. The teacher hung it on the wall."],
 ["💛","On the way home, Zara told her dad, \"I made friends today.\" Sometimes all it takes to start a friendship is one small kick, one small smile, or one small hello."]]},
{id:"sharing-umbrella",cat:"friend",em:"☂️",t:"The Big Yellow Umbrella",age:"3-6",pages:[
 ["☂️","Kiko had a big yellow umbrella. When it rained, she stayed perfectly dry underneath it."],
 ["🐸","Splash! A frog hopped by. \"May I share?\" he asked. \"Of course,\" said Kiko. And there was room for two."],
 ["🐱","A soggy cat meowed. \"May I share?\" \"Of course!\" said Kiko. They squeezed a little, and there was room for three."],
 ["🐥","A duckling, a hedgehog and a very wet snail joined them. Everyone squished together, giggling, under the big yellow umbrella."],
 ["🌈","When the rain stopped, a rainbow stretched across the sky. Nobody wanted to leave. They had become friends under the umbrella."],
 ["☀️","\"Same time next rain?\" asked the frog. Kiko laughed. \"Same time next rain!\" Because a good umbrella, like a good heart, always has room for one more."]]},
{id:"robot-friend",cat:"friend",em:"🤖",t:"Bolt the Robot Learns to Laugh",age:"5-9",pages:[
 ["🤖","Bolt was a helpful robot. He could carry boxes, sweep floors and add up numbers faster than anyone. But Bolt didn't know how to laugh."],
 ["👧","A girl named Ruby wanted to teach him. She told him a joke: \"Why did the cookie go to the doctor? Because it felt crummy!\""],
 ["❓","Bolt beeped. \"Analysis: cookies cannot feel.\" Ruby giggled anyway. She tried funny faces, silly dances and a song about a dancing sock."],
 ["🧦","Bolt watched carefully. Ruby slipped on a banana peel, landed on a cushion, and a sock flew onto her head. She burst out laughing."],
 ["😂","Something warm started in Bolt's circuits. It bubbled up and came out as: \"Ha. Ha-ha. HA-HA-HA!\" His lights flashed every color."],
 ["💖","\"You laughed!\" cried Ruby. \"I did not know I could,\" said Bolt. \"I think it happens when you are with a friend.\" And they laughed together all afternoon."]]},
{id:"pancake-tower",cat:"funny",em:"🥞",t:"The Tallest Pancake Tower",age:"3-7",pages:[
 ["🥞","Grandpa Joe made pancakes every Sunday. This Sunday, little Max said, \"Let's make the tallest pancake tower in the world!\""],
 ["🍳","Flip! One pancake. Flip! Two pancakes. Flip, flip, flip! Soon the tower was taller than the table."],
 ["🪜","They needed a chair. Then a ladder. The tower wobbled past the window. The neighbors stopped and stared."],
 ["🐦","A bird landed on top and asked for syrup. A cloud floated by and got a little bit sticky. The tower swayed left… and right…"],
 ["💥","WHOMP! The tower toppled, and pancakes rained down all over the kitchen, onto the cat, onto Grandpa's head and into the fish tank."],
 ["😂","Max and Grandpa laughed so hard they had to sit on the floor. Then they invited the whole street for breakfast. There were exactly enough pancakes for everyone."]]},
{id:"dog-moon",cat:"funny",em:"🐶",t:"The Dog Who Wanted to Bark at the Moon",age:"3-7",pages:[
 ["🐶","Every night, Biscuit the dog barked at the moon. \"WOOF! Come down here and play!\" But the moon never came down."],
 ["🪜","So Biscuit had a plan. He climbed onto the doghouse. Then onto the fence. Then onto the roof of the house!"],
 ["🌕","\"WOOF!\" he barked, as loudly as he could. \"I'm closer now! Come and play!\" The moon just smiled its round, silvery smile."],
 ["🐈","A cat on the chimney sighed. \"The moon is very far away, silly dog. Even I can't reach it, and I'm excellent at climbing.\""],
 ["🪞","Just then, Biscuit saw the moon shining in a puddle in the yard. He leaped off the roof, onto the hay, and into the puddle. SPLASH!"],
 ["🛁","\"I caught it!\" he barked happily, soaking wet. The family laughed and gave Biscuit a bubbly bath. And that night, he dreamed of playing fetch with the moon."]]},
{id:"silly-hats",cat:"funny",em:"🎩",t:"The Day Everyone Wore Silly Hats",age:"3-7",pages:[
 ["👑","The king of Bumbleton woke up grumpy. \"Nobody in this kingdom ever laughs!\" he complained. So he made a new law: everyone must wear a silly hat."],
 ["🎩","The baker wore a hat shaped like a cake. The farmer wore a hat with a real chicken on it. The chicken did not mind at all."],
 ["🐙","The mayor wore an octopus hat that waved hello. The schoolteacher wore a hat that played trumpet music every time she nodded."],
 ["🤣","By lunchtime, the whole town was giggling. By dinnertime, they were laughing so hard that the flowers started laughing too."],
 ["🍲","The king laughed until his crown fell into his soup. \"Splendid!\" he cried. \"Silly Hat Day, every Friday, forever!\""],
 ["🧢","And so, if you ever visit Bumbleton on a Friday, don't forget your silliest hat. Maybe one with a teapot on top?"]]},
{id:"moon-picnic",cat:"space",em:"🚀",t:"A Picnic on the Moon",age:"4-8",pages:[
 ["🚀","Nia built a rocket out of cardboard boxes, a colander and lots of tape. \"Three, two, one, blast off!\" she shouted. And whoosh, it really flew!"],
 ["🌍","She zoomed past clouds and satellites. The Earth below looked like a big blue marble swirled with white."],
 ["🌕","She landed on the moon with a soft bump. Everything was gray and quiet, and she could jump ten times higher than at home!"],
 ["🥪","Nia spread out her picnic blanket and ate a sandwich while watching the Earth rise over the moon's horizon. It was the most beautiful view."],
 ["👽","A friendly little alien hopped over. \"What's that?\" it asked, pointing at her sandwich. Nia shared it. The alien loved peanut butter."],
 ["🛏️","\"Come back anytime!\" waved the alien. Nia flew home just in time for bed. In the morning, there was a little moon rock on her pillow."]]},
{id:"star-counting",cat:"space",em:"🌟",t:"Counting Stars with Dad",age:"3-6",pages:[
 ["🌟","On warm summer nights, Theo and his dad lay on a blanket in the backyard and counted stars."],
 ["☝️","\"One,\" said Theo, pointing. \"Two, three, four…\" Dad pointed out the Big Dipper, like a giant spoon in the sky."],
 ["🌠","Suddenly, a shooting star zipped across the sky. \"Make a wish!\" said Dad. Theo squeezed his eyes shut and wished very hard."],
 ["🪐","Dad told him that some of the lights were planets, and that the stars were giant suns, very, very far away."],
 ["🧺","\"Forty-one, forty-two…\" Theo's counting slowed down. \"Forty… three…\" His eyes were getting heavy."],
 ["💤","Dad carried him inside and tucked him into bed. \"What did you wish for?\" Dad whispered. But Theo was already asleep, dreaming of the stars."]]},
{id:"planet-colors",cat:"space",em:"🪐",t:"Pluto's Rainbow Party",age:"4-8",pages:[
 ["🪐","Far out in space, little Pluto felt lonely. \"The other planets are so big and bright,\" Pluto sighed. \"Nobody notices me out here.\""],
 ["☀️","So Pluto decided to throw a party. It sent invitations on shooting stars to every planet in the solar system."],
 ["🔴","Mars came in red. Neptune came in blue. Saturn twirled in with her rings like a hula hoop. Jupiter brought a giant cake with a storm on top."],
 ["🌈","Together, their colors filled the dark sky like a rainbow. They danced around the Sun, who played the music."],
 ["🎂","\"Why did you all come so far?\" asked Pluto. \"Because you invited us,\" said Earth, \"and friends always come.\""],
 ["✨","Pluto glowed brighter than ever before. And now, every time you look at the night sky, remember that even the smallest star is part of the party."]]},
{id:"octopus-hugs",cat:"ocean",em:"🐙",t:"Olly Octopus Gives Eight Hugs",age:"2-6",pages:[
 ["🐙","Olly the octopus had eight long arms. And Olly loved hugs. So every morning, Olly gave eight hugs."],
 ["🐠","Hug number one for Finn the fish. Hug number two for Sally the seahorse. Hug number three for Crab, who was a bit grumpy until he got his hug."],
 ["🐢","Hug four for old Turtle. Hug five for the baby whale, who was so big that Olly had to stretch very wide."],
 ["🦀","Hugs six and seven were for the twin starfish. They always wanted their hugs at the exact same time."],
 ["❓","That left one more hug. Olly looked around. Who needed it? \"Me,\" said a small voice. It was Olly's own reflection in a shiny shell."],
 ["💙","So Olly gave the last hug to Olly. Because the people we love deserve hugs, and we deserve them too. The end."]]},
{id:"mermaid-song",cat:"ocean",em:"🧜‍♀️",t:"The Mermaid Who Lost Her Song",age:"4-8",pages:[
 ["🧜‍♀️","Marina was a mermaid with the most beautiful singing voice in the sea. But one morning, she opened her mouth and only bubbles came out."],
 ["🫧","\"My song is gone!\" she bubbled. Her friends wanted to help. The dolphins said, \"Songs live in happy places. Let's look!\""],
 ["🐬","They searched the coral reef, where the colors made her smile. A little hum came back. Hmm-hmm."],
 ["🐳","They swam with the whales, who sang deep, slow songs. Marina felt peaceful, and a few notes floated out. La-la-la."],
 ["🌅","At sunset, all her friends gathered and sang to her, a little out of tune and very loud. Marina laughed, and her laugh turned into a song."],
 ["🎶","Her voice was back, stronger than ever. She realised her song had never been lost. It just needed her friends to help it come home."]]},
{id:"lighthouse",cat:"ocean",em:"🗼",t:"The Lighthouse Keeper's Cat",age:"4-8",pages:[
 ["🗼","On a rocky island stood a tall lighthouse. It was looked after by old Mr. Finch and his clever cat, Pepper."],
 ["⛈️","One stormy night, the lighthouse lamp flickered and went out. Mr. Finch had a cold and was fast asleep."],
 ["🚢","Far out at sea, a little fishing boat was lost in the waves. Without the light, they couldn't find the way home."],
 ["🐈","Pepper meowed, but Mr. Finch only snored. So Pepper jumped on the bed, and padded across his face, and tickled his nose with her tail."],
 ["💡","\"Achoo! What is it, Pepper?\" He saw the dark window, hurried up the stairs and fixed the lamp. The bright beam swept across the sea."],
 ["🐟","The fishing boat came safely home. The next morning, the fishermen brought Pepper the biggest fish she had ever seen. She ate every bit of it, purring proudly."]]},
/* choose-your-path stories: pages can have choices [label, page index] */
{id:"cyoa-forest",cat:"choose",em:"🌲",t:"The Whispering Forest",age:"5-10",pages:[
 ["🌲","You walk into the Whispering Forest with a lantern. The trees whisper your name. Two paths lie ahead: one sparkles with blue light, the other smells of warm cookies.",[["Follow the blue light",1],["Follow the cookie smell",2]]],
 ["💙","The blue light is a family of glowing fireflies. \"Will you help us?\" they ask. \"Our queen is stuck in a spider's web!\"",[["Help untangle the web",3],["Ask the spider politely",4]]],
 ["🍪","The smell leads to a tiny cottage. A friendly badger in an apron is baking. \"You're just in time!\" he says. \"But I've lost my secret ingredient.\"",[["Search the garden",5],["Taste the cookies to guess",6]]],
 ["🕸️","You carefully untangle the web, strand by strand. The firefly queen is free! She sprinkles you with light, and you glow softly for the rest of the night. The end. 🌟",[]],
 ["🕷️","\"Excuse me, Mr. Spider,\" you say. The spider blushes. \"Oh dear, I thought she was a moth!\" He lets the queen go and gives you a silk scarf as a sorry gift. The end. 🧣",[]],
 ["🌿","In the garden you find golden honey hidden under a sunflower. The badger cheers! The cookies are the best he has ever baked, and he names them after you. The end. 🍯",[]],
 ["😋","You taste one cookie… and another… \"It needs cinnamon!\" you announce. You're right! The badger makes you his official cookie taster forever. The end. 👑",[]]]},
{id:"cyoa-space",cat:"choose",em:"🛸",t:"Captain You and the Lost Planet",age:"5-10",pages:[
 ["🛸","You are the captain of the starship Sparkle. Your mission: find the lost planet Gloop. Your robot says, \"Two routes, Captain!\"",[["Fly through the comet storm",1],["Take the slow, safe route",2]]],
 ["☄️","Comets whizz past! You steer left, right, and loop-the-loop. On the other side you see a planet covered in purple jelly.",[["Land on the jelly",3],["Send the robot first",4]]],
 ["🐌","The slow route passes a space station run by snails. \"We know a shortcut,\" they say, \"if you can solve our riddle.\"",[["Solve the riddle",5],["Politely say no thanks",6]]],
 ["🟣","You land with a giant BOING! The jelly bounces you around and the Gloopians laugh and laugh. You've found Planet Gloop, the bounciest planet in the galaxy! The end. 🎉",[]],
 ["🤖","Your robot lands and sends back a message: \"Captain, it's made of grape jelly. Bring bread!\" You have the tastiest picnic in space history. The end. 🥪",[]],
 ["🧩","\"What has stars but isn't the sky?\" \"A starfish!\" you answer. The snails cheer and open a rainbow wormhole straight to Gloop. The end. 🌈",[]],
 ["🛰️","You fly the long way and see a hundred wonderful things: a dancing nebula, a singing moon, a comet shaped like a cat. Gloop can wait for tomorrow's adventure. The end. ✨",[]]]},
{id:"cyoa-castle",cat:"choose",em:"🏰",t:"The Castle of Riddles",age:"6-10",pages:[
 ["🏰","A golden castle appears in your garden. On the door is a sign: \"Answer well, and the treasure is yours.\" Inside, two doors wait.",[["The door with a dragon carving",1],["The door with a rabbit carving",2]]],
 ["🐉","A small, sleepy dragon guards a chest. \"Tell me a joke,\" it yawns, \"or no treasure.\"",[["Tell a funny joke",3],["Sing a lullaby instead",4]]],
 ["🐇","A rabbit in a waistcoat checks his watch. \"Quick! Help me find my carrot, or I'll be late for the queen's tea!\"",[["Look under the table",5],["Check his pocket",6]]],
 ["😂","\"Why can't dragons sleep? They're afraid of the knight!\" The dragon laughs so hard it hiccups out sparkles and opens the chest: it's full of storybooks! The end. 📚",[]],
 ["🎵","You sing softly. The dragon falls fast asleep, snoring little puffs of smoke, and the chest clicks open. Inside is a tiny golden star that glows at bedtime. The end. ⭐",[]],
 ["🥕","Under the table, you find the carrot and a teapot. The queen invites you to tea and crowns you Princess or Prince of Riddles for a day. The end. 👑",[]],
 ["⌚","The carrot was in his pocket all along! The rabbit is so embarrassed he gives you his golden watch, which can stop time for exactly one minute. The end. ⏳",[]]]}
];

/* ================= v13: Story time + games with your character ================= */
const UI17={
 en:{st_title:"Story time",st_sub:"Cozy stories read aloud by your character. Pick one, make your own, or ask for any story.",pl_stories:"Stories",st_make:"✨ Make a story",st_ask:"🪄 Any story you want",st_mine:"My stories",st_all:"All",st_read:"▶ Read to me",st_pause:"⏸ Pause",st_sleep:"🌙 Sleep mode",st_age:"Ages {a}",st_pages:"{n} pages",st_end:"The end",st_again:"Read again",st_next:"Another story",st_night:"Goodnight. Sweet dreams 🌙",
  sm_hero:"Who is the hero?",sm_name:"Hero's name",sm_place:"Where?",sm_friend:"Who helps?",sm_lesson:"What should it teach?",sm_len:"Length",sm_short:"Short",sm_long:"Long",sm_go:"Create my story",sm_rand:"🎲 Surprise me",
  sa_ph:"e.g. a unicorn who is scared of the dark, a dinosaur at school…",sa_age:"Age",sa_go:"Write my story",sa_writing:"Writing your story…",sa_offline:"Here's a story from my offline story maker. Turn on a free AI brain for any story you can imagine!",st_keep:"Keep reading bedtime stories",
  cg_title:"Play with your character",cg_sub:"Your character moves, reacts and plays with you.",
  g_simon:["Copy my moves","Watch the moves, then repeat them in order."],g_rps:["Rock Paper Scissors","Best of 5 against your character."],g_feel:["Guess my feeling","Read the face and pick the emotion."],g_dance:["Dance beat","Tap on the beat while they dance."],g_dice:["Story dice","Roll 3 dice and get a brand-new story."],
  sim_watch:"Watch carefully! Round {r}.",sim_go:"Your turn! Tap the moves in the same order.",sim_ok:"Perfect! Get ready for the next round…",sim_bad:"Oops! That was {m}. You reached round {r}! 🎉",rps_pick:"Rock, paper or scissors?",rps_win:"You win this round!",rps_lose:"I win this one!",rps_tie:"It's a tie!",rps_score:"You {a} · Me {b}",rps_end_w:"You beat me {a} to {b}! Champion! 🏆",rps_end_l:"I won {b} to {a}. Rematch?",
  fe_q:"How am I feeling?",fe_ok:"Yes! I'm {f}.",fe_bad:"Not quite, I'm {f}.",fe_end:"You read {s} out of {n} feelings!",da_tap:"TAP!",da_ready:"Get ready… tap the big button on every beat!",da_end:"Dance over! Score {s} · best combo {c}",dice_roll:"🎲 Roll again",dice_you:"Your turn to tell one!",again:"Play again"},
 vi:{st_title:"Giờ kể chuyện",st_sub:"Truyện ấm áp do nhân vật của bạn đọc to. Chọn truyện, tự tạo truyện, hoặc yêu cầu bất kỳ truyện nào.",pl_stories:"Truyện",st_make:"✨ Tạo truyện",st_ask:"🪄 Truyện bạn muốn",st_mine:"Truyện của tôi",st_all:"Tất cả",st_read:"▶ Đọc cho tôi",st_pause:"⏸ Tạm dừng",st_sleep:"🌙 Chế độ ngủ",st_age:"Tuổi {a}",st_pages:"{n} trang",st_end:"Hết",st_again:"Đọc lại",st_next:"Truyện khác",st_night:"Chúc ngủ ngon 🌙",
  sm_hero:"Nhân vật chính là ai?",sm_name:"Tên nhân vật",sm_place:"Ở đâu?",sm_friend:"Ai giúp đỡ?",sm_lesson:"Bài học là gì?",sm_len:"Độ dài",sm_short:"Ngắn",sm_long:"Dài",sm_go:"Tạo truyện",sm_rand:"🎲 Ngẫu nhiên",sa_ph:"vd: kỳ lân sợ bóng tối, khủng long đi học…",sa_age:"Tuổi",sa_go:"Viết truyện",sa_writing:"Đang viết truyện…",sa_offline:"Đây là truyện từ máy tạo truyện ngoại tuyến. Bật AI miễn phí để có mọi truyện bạn tưởng tượng!",st_keep:"Đọc tiếp truyện ngủ",
  cg_title:"Chơi cùng nhân vật",cg_sub:"Nhân vật di chuyển, phản ứng và chơi cùng bạn.",g_simon:["Bắt chước động tác","Xem động tác rồi làm lại đúng thứ tự."],g_rps:["Oẳn tù tì","Thắng 3 trong 5 ván."],g_feel:["Đoán cảm xúc","Nhìn gương mặt và chọn cảm xúc."],g_dance:["Nhịp điệu","Chạm đúng nhịp khi nhân vật nhảy."],g_dice:["Xúc xắc kể chuyện","Tung 3 xúc xắc để có truyện mới."],again:"Chơi lại"}};
for(const k of ["en","vi"])Object.assign(PACKS[k].ui,UI17[k]);
const ensureStage=()=>{if(!S.stageOn)$("#stageBtn").click()};
/* ---------- story view ---------- */
$("#view-wish").after(h("section",{class:"view",id:"view-stories",hidden:true}));
document.querySelectorAll(".play-seg").forEach(s=>s.remove());
{const seg=v=>h("div",{class:"seg play-seg"},...[["games","🕹️","pl_games"],["stories","📚","pl_stories"],["future","🔮","pl_future"],["wish","🪙","pl_wish"]].map(([k,em,lab])=>h("button",{type:"button",class:k===v?"on":"",onclick:()=>switchTab(k)},em+" "+TT(lab))));
 ["games","stories","future","wish"].forEach(v=>$("#view-"+v).prepend(seg(v)));}
{const _st4=switchTab;switchTab=function(v){if(v==="stories"){_st4("games");$("#view-games").hidden=true;$("#view-stories").hidden=false;renderStories()}else{_st4(v);$("#view-stories").hidden=true}
  const pv=["games","future","wish","stories"];const play=document.querySelector('.tabs [data-v="play"]');if(play)play.setAttribute("aria-selected",pv.includes(v));
  document.querySelectorAll(".play-seg").forEach(s=>[...s.children].forEach((b,i)=>b.classList.toggle("on",["games","stories","future","wish"][i]===v)))};}
let STY=Object.assign({cat:"all",mine:[],sleep:false,keep:false,reads:{}},store.get("stories",{}));const saveSTY=()=>store.set("stories",STY);
function renderStories(){const V=$("#view-stories");const seg=V.querySelector(".play-seg");V.innerHTML="";if(seg)V.append(seg);
  V.append(h("div",{class:"ac-hero"},h("div",null,h("h2",null,"📚 "+TT("st_title")),h("p",{class:"sub"},TT("st_sub")))));
  V.append(h("div",{class:"ac-tiles st-tools"},h("button",{type:"button",class:"ac-tile hot",onclick:openMaker},h("span",{class:"em"},"✨"),h("b",null,TT("st_make").slice(2))),
    h("button",{type:"button",class:"ac-tile",onclick:openAsk},h("span",{class:"em"},"🪄"),h("b",null,TT("st_ask").slice(2))),
    h("button",{type:"button",class:"ac-tile"+(STY.sleep?" hot":""),onclick:()=>{STY.sleep=!STY.sleep;saveSTY();renderStories()}},h("span",{class:"em"},"🌙"),h("b",null,TT("st_sleep").slice(2)),h("small",null,STY.sleep?"ON":"OFF"))));
  const cats=[["all","📖",TT("st_all")],...(STY.mine.length?[["mine","💖",TT("st_mine")]]:[]),...STORY_CATS];
  V.append(h("div",{class:"qs"},...cats.map(([k,em,n])=>h("button",{type:"button",class:"qs-i"+(STY.cat===k?" hot":""),onclick:()=>{STY.cat=k;saveSTY();renderStories()}},h("span",{class:"em"},em),h("span",null,n)))));
  const list=STY.cat==="mine"?STY.mine:STY.cat==="all"?[...STY.mine,...STORIES]:STORIES.filter(s=>s.cat===STY.cat);
  const g=h("div",{class:"st-grid"});list.forEach(s=>g.append(h("button",{type:"button",class:"st-card",onclick:()=>openReader(s)},h("span",{class:"st-em"},s.em),h("b",null,s.t),h("small",null,(s.age?fill(TT("st_age"),{a:s.age})+" · ":"")+fill(TT("st_pages"),{n:s.pages.length})+(STY.reads[s.id]?" · ✓":"")))));V.append(g)}
/* ---------- reader ---------- */
let RD=null;
function narrator(){const c=Object.assign({},E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar());c.rate=(c.rate||1)*(STY.sleep?.82:.92);if(STY.sleep)c.pitch=(c.pitch||1)*.96;return c}
function openReader(s){closeReader();RD={s,i:0,auto:false};const ov=h("div",{class:"story-ov"+(STY.sleep?" sleep":""),id:"storyOv",role:"dialog","aria-label":s.t});document.body.append(ov);drawPage();STY.reads[s.id]=1;saveSTY();HB.add(3,"story");HB.ev("game")}
function closeReader(){const o=$("#storyOv");if(o)o.remove();if(RD){RD.auto=false;stopAudio();try{speechSynthesis.cancel()}catch(e){}}RD=null}
function drawPage(){const o=$("#storyOv");if(!o||!RD)return;const s=RD.s,p=s.pages[RD.i];o.innerHTML="";const last=RD.i>=s.pages.length-1,choices=p[2]||null;
  o.append(h("div",{class:"st-top"},h("b",null,s.em+" "+s.t),h("button",{type:"button",class:"btn ghost small",onclick:closeReader},"✕")));
  o.append(h("div",{class:"st-scene"},h("span",{class:"st-big"},p[0])),h("p",{class:"st-text",id:"stText"},p[1]));
  if(choices&&choices.length)o.append(h("div",{class:"st-choices"},...choices.map(([lab,to])=>h("button",{type:"button",class:"btn",onclick:()=>{RD.i=to;drawPage();if(RD.auto)readPage()}},lab))));
  o.append(h("div",{class:"st-dots"},...s.pages.map((_,i)=>h("i",{class:i===RD.i?"on":""}))));
  const end=last||(choices&&!choices.length);
  o.append(h("div",{class:"st-ctrl"},h("button",{type:"button",class:"btn ghost",disabled:RD.i===0,onclick:()=>{RD.i--;drawPage();if(RD.auto)readPage()}},"◀"),
    h("button",{type:"button",class:"btn",onclick:()=>{RD.auto=!RD.auto;if(RD.auto)readPage();else{stopAudio();try{speechSynthesis.cancel()}catch(e){}}drawPage()}},RD.auto?TT("st_pause"):TT("st_read")),
    end?h("button",{type:"button",class:"btn ghost",onclick:()=>{const pool=STORIES.filter(x=>x.cat===(STY.sleep?"bed":s.cat)&&x!==s);openReader(pick(pool.length?pool:STORIES))}},TT("st_next")):h("button",{type:"button",class:"btn ghost",disabled:!!(choices&&choices.length),onclick:()=>{RD.i++;drawPage();if(RD.auto)readPage()}},"▶")));
  if(end)o.append(h("p",{class:"st-endnote"},"🌟 "+TT("st_end")+" 🌟"))}
function readPage(){if(!RD)return;const s=RD.s,p=s.pages[RD.i],my=RD;const t=$("#stText");if(t)t.classList.add("reading");
  speakAs(narrator(),p[1],()=>{if(RD!==my||!RD.auto)return;if(t)t.classList.remove("reading");const choices=p[2];
    if(choices&&choices.length){speakAs(narrator(),choices.map(c=>c[0]).join(", or "),null,"en");return}
    if(RD.i<s.pages.length-1&&!(choices&&!choices.length)){setTimeout(()=>{if(RD!==my||!RD.auto)return;RD.i++;drawPage();readPage()},STY.sleep?1400:700)}
    else if(STY.sleep){setTimeout(()=>{if(RD!==my)return;const o=$("#storyOv");if(o){o.classList.add("night");o.innerHTML="";o.append(h("div",{class:"st-night"},h("span",{class:"st-big"},"🌙"),h("p",null,TT("st_night")),h("button",{type:"button",class:"btn ghost small",onclick:closeReader},"✕")))}speakAs(narrator(),TT("st_night").replace("🌙",""))},1200)}
    else{RD.auto=false;drawPage()}},s.lang||"en")}
/* ---------- offline story maker ---------- */
const SM={hero:[["bunny","🐰"],["dragon","🐉"],["girl","👧"],["boy","👦"],["robot","🤖"],["unicorn","🦄"],["kitten","🐱"],["dinosaur","🦖"],["puppy","🐶"],["princess","👸"]],
 place:[["forest","🌲","in an enchanted forest where the trees could hum"],["castle","🏰","in a castle made of sugar cubes"],["sea","🌊","by a sparkly blue sea"],["space","🚀","on a planet with three moons"],["city","🏙️","in a busy city full of twinkling lights"],["candy","🍭","in a land where the hills were made of ice cream"],["jungle","🌴","in a jungle full of singing birds"],["snow","❄️","in a snowy mountain village"]],
 friend:[["owl","🦉","a wise old owl"],["turtle","🐢","a slow and patient turtle"],["fairy","🧚","a tiny fairy with glittery wings"],["puppy","🐶","a bouncy puppy"],["bear","🐻","a gentle bear"],["bird","🐦","a chatty little bird"]],
 lesson:[["kindness","💗","being kind"],["courage","🦁","being brave"],["sharing","🍪","sharing"],["patience","⏳","being patient"],["honesty","🪞","telling the truth"],["friendship","🤝","friendship"]],
 names:["Luna","Milo","Pip","Rosie","Kai","Bella","Theo","Mochi","Zuzu","Nova","Oscar","Lily"]};
const SMT={
 open:["Once upon a time, {place}, there lived a little {hero} named {name}.","Long, long ago, {place}, a {hero} called {name} woke up with a big smile.","{place}, where the wind smelled like cinnamon, lived {name} the {hero}."],
 trait:["{name} loved to {love}, and dreamed of a great adventure.","{name} was curious about everything and asked a hundred questions every day.","{name} was small, but had the biggest heart in the whole land."],
 love:["dance in the rain","collect shiny pebbles","sing to the flowers","draw maps of secret places","bake honey cakes","count the stars"],
 problem:{kindness:["One day, {name} met a grumpy little creature who had no friends at all."],courage:["One day, a strange noise came from a dark cave, and everyone was too scared to look."],sharing:["One day, {name} found a basket of the most delicious berries in the world."],patience:["One day, {name} planted a magic seed that promised to grow into something wonderful."],honesty:["One day, {name} accidentally broke a very precious vase, and nobody saw."],friendship:["One day, {name} saw that a new neighbor was sitting all alone."]},
 meet:["Just then, {friend} appeared. \"Can I help?\" it asked.","Along came {friend}, who always knew what to say.","{friend} hurried over to {name}. \"Don't worry,\" it said, \"we'll figure it out together.\""],
 middle:{kindness:["{name} said hello, shared a warm smile and offered to play. The grumpy creature blinked in surprise.","Little by little, with kind words and gentle patience, the creature's frown turned upside down."],courage:["{name}'s knees wobbled, but {name} took a deep breath and walked into the cave, one small step at a time.","Inside was a baby bear with a thorn in its paw! {name} carefully pulled it out."],sharing:["{name} wanted to keep them all, but then saw the hungry birds and the tired squirrels.","So {name} shared the berries, one for you and one for you, until everyone had some."],patience:["{name} watered the seed every morning. Nothing happened. {name} waited, and waited, and waited some more.","Then one sunny morning, a tiny green shoot peeked out, and it kept growing until it became a tree full of golden fruit."],honesty:["{name}'s tummy felt twisty and uncomfortable. Keeping the secret felt heavier every minute.","So {name} went to tell the truth. \"I'm sorry, it was me,\" {name} said in a small voice."],friendship:["{name} walked over and said, \"Would you like to play with me?\"","They built a fort, invented a secret handshake and laughed until the sun went down."]},
 end:{kindness:["Soon they were best friends, and the creature was never grumpy again."],courage:["The bear's whole family came to say thank you, and {name} was the hero of {placeShort}."],sharing:["And somehow, sharing made the berries taste even sweeter."],patience:["{name} shared the golden fruit with everyone, and it was worth every single day of waiting."],honesty:["\"Thank you for being honest,\" came the gentle answer. \"Truth is more precious than any vase.\""],friendship:["From that day on, {name} never played alone again, and neither did the new friend."]},
 moral:["And {name} learned that {lesson} makes the whole world a little brighter.","Because {lesson} is a kind of magic that everyone can do."],
 close:["That night, {name} curled up, warm and happy, and drifted off to sleep. The end.","And as the stars came out, {name} yawned a big yawn and dreamed sweet dreams. Goodnight, {name}. The end."]};
function makeStory(o){const hero=o.hero||pick(SM.hero),place=o.place||pick(SM.place),fr=o.friend||pick(SM.friend),ls=o.lesson||pick(SM.lesson),name=o.name||pick(SM.names);
  const f=s=>fill(s,{name,hero:hero[0],place:place[2],placeShort:"the "+place[0],friend:fr[2],lesson:ls[2],love:pick(SMT.love)}).replace(/^\w/,c=>c.toUpperCase());
  const pages=[[place[1]+hero[1],f(pick(SMT.open))+" "+f(pick(SMT.trait))],[hero[1],f(pick(SMT.problem[ls[0]]))],[fr[1],f(pick(SMT.meet))+" "+f(SMT.middle[ls[0]][0])],[ls[1],f(SMT.middle[ls[0]][1])],["🌟",f(pick(SMT.end[ls[0]]))+" "+f(pick(SMT.moral))],["🌙",f(pick(SMT.close))]];
  if(o.long)pages.splice(2,0,["🗺️",f(pick(["On the way, {name} crossed a wobbly bridge and a river that giggled.","{name} packed a snack, a lantern and a big dose of courage, and set off."]))]);
  return {id:"my"+Date.now().toString(36),cat:"mine",em:hero[1],t:name+" and the "+({kindness:"Kind Heart",courage:"Brave Step",sharing:"Magic Berries",patience:"Golden Tree",honesty:"Honest Words",friendship:"New Friend"})[ls[0]],age:"3-8",pages}}
function openMaker(){const sel={hero:null,place:null,friend:null,lesson:null,long:false};const m=modal("✨ "+TT("st_make").slice(2));const b=m.b;
  const row=(lab,key,list)=>{const r=h("div",{class:"ward-row"});list.forEach(it=>r.append(h("button",{type:"button",class:"wchip",onclick:e=>{sel[key]=it;r.querySelectorAll(".wchip").forEach(x=>x.classList.remove("on"));e.currentTarget.classList.add("on")}},it[1]+" "+it[0])));b.append(h("span",{class:"label"},lab),r)};
  row(TT("sm_hero"),"hero",SM.hero);const nm=h("input",{class:"ac-input",placeholder:TT("sm_name")+" ("+pick(SM.names)+")"});b.append(h("span",{class:"label"},TT("sm_name")),nm);
  row(TT("sm_place"),"place",SM.place);row(TT("sm_friend"),"friend",SM.friend);row(TT("sm_lesson"),"lesson",SM.lesson);
  b.append(h("label",{class:"note",style:"display:flex;gap:8px;align-items:center;margin:8px 0"},h("input",{type:"checkbox",onchange:e=>sel.long=e.target.checked}),TT("sm_long")));
  const go=s=>{STY.mine.unshift(s);STY.mine=STY.mine.slice(0,30);saveSTY();m.close();openReader(s);if(RD){RD.auto=true;drawPage();readPage()}};
  b.append(h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:()=>go(makeStory(Object.assign({},sel,{name:nm.value.trim()})))},"📖 "+TT("sm_go")),h("button",{type:"button",class:"btn ghost",onclick:()=>go(makeStory({long:sel.long}))},TT("sm_rand"))))}
function openAsk(){const m=modal("🪄 "+TT("st_ask").slice(2));const b=m.b;const ta=h("textarea",{class:"ac-input",rows:"3",placeholder:TT("sa_ph")});let age=5,len=1;
  b.append(ta,h("span",{class:"label"},TT("sa_age")),h("div",{class:"hb-gsel"},...[3,5,7,10].map(a=>{const x=h("button",{type:"button",class:"wchip"+(a===age?" on":""),onclick:()=>{age=a;x.parentElement.querySelectorAll(".wchip").forEach(y=>y.classList.remove("on"));x.classList.add("on")}},a+"+");return x})),
    h("span",{class:"label"},TT("sm_len")),h("div",{class:"hb-gsel"},...[TT("sm_short"),TT("sm_long")].map((l,i)=>{const x=h("button",{type:"button",class:"wchip"+(i===len?" on":""),onclick:()=>{len=i;x.parentElement.querySelectorAll(".wchip").forEach(y=>y.classList.remove("on"));x.classList.add("on")}},l);return x})),
    h("button",{type:"button",class:"btn ac-check",onclick:()=>{const q=ta.value.trim();if(!q)return;m.close();requestStory(q,age,len)}},"✍️ "+TT("sa_go")));
  if(!S.brainOn)b.append(h("p",{class:"note"},TT("sa_offline")),h("button",{type:"button",class:"btn ghost",onclick:()=>{m.close();aiSetup(()=>openAsk())}},"⚡ "+TT("ai_title")))}
const EMOJI_KEYS=[["dragon","🐉"],["unicorn","🦄"],["dinosaur","🦖"],["cat","🐱"],["dog","🐶"],["bunny","🐰"],["rabbit","🐰"],["bear","🐻"],["robot","🤖"],["princess","👸"],["space","🚀"],["moon","🌙"],["star","⭐"],["sea","🌊"],["ocean","🌊"],["fish","🐠"],["school","🏫"],["forest","🌲"],["castle","🏰"],["dark","🌙"],["snow","❄️"],["rain","🌧️"],["birthday","🎂"],["pizza","🍕"],["car","🚗"],["train","🚂"],["fairy","🧚"],["monster","👾"],["pirate","🏴‍☠️"],["horse","🐴"],["owl","🦉"],["sun","☀️"],["flower","🌸"],["tree","🌳"],["friend","🤝"],["music","🎵"],["ball","⚽"]];
const emojiFor=t=>{t=t.toLowerCase();const k=EMOJI_KEYS.find(([w])=>t.includes(w));return k?k[1]:pick(["✨","🌟","📖","🌈","💫","🌙"])};
async function requestStory(q,age,len){
  if(!S.brainOn||!S.engine){const heroK=SM.hero.find(([w])=>q.toLowerCase().includes(w));const s=makeStory({hero:heroK,long:len===1});s.t="✨ "+q.slice(0,40);s.pages[0][1]=s.pages[0][1];STY.mine.unshift(s);saveSTY();toast(TT("sa_offline"));openReader(s);return}
  const s={id:"my"+Date.now().toString(36),cat:"mine",em:emojiFor(q),t:q.slice(0,42),age:age+"+",pages:[["✍️",TT("sa_writing")]]};openReader(s);
  const words=len?450:220;
  const prompt="Write an original, gentle children's story for a "+age+"-year-old about: "+q+". About "+words+" words, simple vivid words, warm and positive, a little funny, nothing scary or violent, a clear small lesson, and a calm cozy ending. First line: the title only. Then 5 to 7 short paragraphs separated by blank lines. "+langLine();
  try{const it=await S.engine.chat.completions.create({messages:[{role:"user",content:prompt}],max_tokens:len?900:520,temperature:.9,stream:true});let o="";
    for await(const c of it){o+=c.choices[0]?.delta?.content||"";if(RD&&RD.s===s){const t=$("#stText");if(t)t.textContent=cleanAI(o).slice(-400)}}
    o=cleanAI(o).replace(/\*\*/g,"").replace(/^#+\s*/gm,"");const parts=o.split(/\n\s*\n|\n/).map(x=>x.trim()).filter(Boolean);
    if(parts.length>1){s.t=parts.shift().replace(/^title:\s*/i,"").replace(/^["“]|["”]$/g,"").slice(0,60)}
    s.pages=parts.map(p=>[emojiFor(p),p]);if(!s.pages.length)throw new Error("empty");s.lang=replyLang();
    STY.mine.unshift(s);STY.mine=STY.mine.slice(0,30);saveSTY();if(RD&&RD.s===s){RD.i=0;drawPage();RD.auto=true;drawPage();readPage()}}
  catch(e){closeReader();const s2=makeStory({long:len===1});openReader(s2)}}
/* bedtime game + chat requests open the story world */
{const _sg4=startGame;startGame=function(id){if(id==="bedtime"){switchTab("stories");STY.cat="bed";STY.sleep=true;saveSTY();renderStories();return}return _sg4(id)};}
{const _spk4=sparkReply;sparkReply=function(raw){const m=String(raw).match(/\b(?:tell|read|make|write)\s+(?:me\s+)?(?:a\s+)?(?:bedtime\s+)?story(?:\s+about\s+(.+))?/i)||String(raw).match(/kể (?:cho (?:tôi|mình|em|con) )?(?:nghe )?(?:một )?(?:câu )?chuyện(?: về (.+))?/i);
  if(m&&!S.game&&!S.tutor){setTimeout(()=>{if(m[1])requestStory(m[1],6,0);else{switchTab("stories")}},900);return replyLang()==="vi"?"Ngồi thoải mái nhé, chuyện sắp bắt đầu rồi! 📖":"Get cozy… your story is starting! 📖"}return _spk4(raw)};}
/* ---------- games with your character ---------- */
const MOVES=[["wave","👋","Wave"],["cheer","🙌","Cheer"],["heart","❤️","Heart"],["nod","👍","Nod"],["think","🤔","Think"],["bow","🙇","Bow"],["dance","💃","Dance"],["shrug","🤷","Shrug"]];
const FEELS2=[["happy","😄","happy",{face:"happy",g:"cheer",say:"Yay! What a wonderful day!"}],["sad","😢","sad",{face:"sad",g:"bow",say:"Oh no… I dropped my ice cream."}],["surprised","😮","surprised",{face:"surprised",g:"shrug",say:"Whoa! I did not expect that!"}],["laugh","😂","laughing",{face:"laugh",g:"laugh",say:"Ha ha ha! That's so funny!"}],["think","🤔","thinking",{face:null,g:"think",say:"Hmm… let me think about that."}],["love","🥰","in love",{face:"happy",g:"heart",say:"Aww, I love you so much!"}]];
function gameOv(big,small,ms){let o=$("#gameOv");if(!o){o=h("div",{id:"gameOv",class:"game-ov"});$("#stageBox").append(o)}o.innerHTML="";o.append(h("div",{class:"go-big"},big),small?h("div",{class:"go-small"},small):"");o.classList.remove("hide");void o.offsetWidth;o.classList.add("show");clearTimeout(o._t);if(ms)o._t=setTimeout(()=>o.classList.remove("show"),ms)}
function hideOv(){const o=$("#gameOv");if(o)o.classList.remove("show")}
const CGAMES=[{id:"simon",em:"🪞"},{id:"rps",em:"✊"},{id:"feel",em:"🎭"},{id:"dance",em:"🎶"},{id:"dice",em:"🎲"}];
for(const k of ["en","vi"])for(const g of CGAMES)if(UI17[k]["g_"+g.id])PACKS[k].games[g.id]=UI17[k]["g_"+g.id];
const charName=()=>(E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar()).name;
function simonShow(g){g.phase="show";g.input=[];oracle(say(fill(TT("sim_watch"),{r:g.r}),""),[]);let i=0;
  const step=()=>{if(S.game!==g)return;if(i>=g.seq.length){hideOv();g.phase="input";oracle(say(TT("sim_go"),""),[...MOVES.slice(0,g.r<3?4:6).map(m=>({t:m[1]+" "+m[2],c:"g:mv_"+m[0]})),STOPC()]);return}
    const m=MOVES.find(x=>x[0]===g.seq[i]);play(m[0]);gameOv(m[1],m[2],900);sfx("blip");i++;setTimeout(step,1300)};setTimeout(step,900)}
let RPS_HIST=[];
function feelAsk(g){const f=pick(FEELS2.filter(x=>x!==g.last));g.last=f;g.cur=f;if(f[3].face){ST.face=f[3].face;ST.faceUntil=performance.now()+3500}play(f[3].g);gameOv("❓","",0);
  speakAs(E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar(),f[3].say,null,"en");setTimeout(()=>{if(S.game===g)oracle(say(TT("fe_q")+" ("+(g.i+1)+"/"+g.n+")",""),[...shuffle([f,...shuffle(FEELS2.filter(x=>x!==f)).slice(0,3)]).map(x=>({t:x[1]+" "+x[2],c:"g:fe_"+x[0]})),STOPC()])},1400)}
function diceRoll(g){const A=pick(SM.hero),P=pick(SM.place),O=pick([["a magic hat","🎩"],["a golden key","🗝️"],["a giant cookie","🍪"],["a tiny umbrella","☂️"],["a singing shell","🐚"],["a flying carpet","🧞"],["a treasure map","🗺️"],["a glowing egg","🥚"]]);
  gameOv(A[1]+" "+P[1]+" "+O[1],"",2500);play("mystic");
  const nm=pick(SM.names);const t=fill(pick(["Once, {p}, a {h} named {n} found {o}. When {n} picked it up, it began to glow and whisper a secret: \"Make someone smile today.\" So {n} used it to help a sad neighbor, and the whole town threw a party. The end!","{n} the {h} was bored {p}, until {o} fell from the sky. It could grant one wish. {n} thought and thought, and finally wished for a friend to share it with. POP! A new best friend appeared. The end!"]),{p:P[2],h:A[0],n:nm,o:O[0]});
  setTimeout(()=>{if(S.game===g){oracle(say(t,""),[{t:TT("dice_roll"),c:"g:roll"},{t:"✍️ "+TT("dice_you"),c:"g:you"},STOPC()])}},1200)}
let DANCE=null;
function danceStart(g){ensureStage();const bpm=100,beat=60000/bpm;const n=24;g.score=0;g.combo=0;g.best=0;g.hits=new Set();
  const o=$("#stageBox");o.classList.add("dancing");let pad=$("#dancePad");if(!pad){pad=h("button",{type:"button",id:"dancePad",class:"dance-pad"},TT("da_tap"));o.append(pad)}pad.hidden=false;
  gameOv("🎶",TT("da_ready"),1800);const t0=performance.now()+2400;g.t0=t0;g.beat=beat;g.n=n;
  pad.onpointerdown=e=>{e.preventDefault();if(S.game!==g)return;const now=performance.now();const k=Math.round((now-t0)/beat);if(k<0||k>=n||g.hits.has(k))return;const d=Math.abs(now-(t0+k*beat));
    let pts=0,lab="";if(d<90){pts=3;lab="PERFECT!"}else if(d<170){pts=1;lab="GOOD"}else{g.combo=0;lab="miss"}
    if(pts){g.hits.add(k);g.combo++;g.best=Math.max(g.best,g.combo);g.score+=pts*(1+Math.floor(g.combo/5));sfx(pts===3?"ding":"blip")}pad.dataset.lab=lab;pad.classList.remove("hit");void pad.offsetWidth;pad.classList.add("hit")};
  const ac=audioCtx();for(let k=0;k<n;k++){const at=(t0+k*beat-performance.now())/1000;if(ac&&at>0){const os=ac.createOscillator(),gn=ac.createGain();os.frequency.value=k%4===0?110:80;os.type="sine";gn.gain.setValueAtTime(.0001,ac.currentTime+at);gn.gain.exponentialRampToValueAtTime(.5,ac.currentTime+at+.005);gn.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+at+.14);os.connect(gn).connect(ac.destination);os.start(ac.currentTime+at);os.stop(ac.currentTime+at+.16)}}
  let k=0;const tick=()=>{if(S.game!==g){pad.hidden=true;o.classList.remove("dancing");return}const now=performance.now();const kk=Math.floor((now-t0)/beat);
    if(kk>=0&&kk!==k){k=kk;pad.classList.remove("pulse");void pad.offsetWidth;pad.classList.add("pulse");if(k%4===0)play(pick(["dance","cheer","wave"]))}
    if(now>t0+n*beat+400){pad.hidden=true;o.classList.remove("dancing");S.game=null;HB.add(Math.min(20,Math.round(g.score/4)),"game");if(g.score>40)confetti();oracle(say(fill(TT("da_end"),{s:g.score,c:g.best}),""),[{t:TT("again"),c:"newgame:dance"},C("stop")]);return}
    requestAnimationFrame(tick)};requestAnimationFrame(tick)}
{const _sg5=startGame;startGame=function(id){if(!CGAMES.find(x=>x.id===id))return _sg5(id);
  S.stats.games++;saveStats();switchTab("chat");ensureStage();sfx("coin");S.awaiting=null;HB.add(3,"game");HB.ev("game");const g={id};S.game=g;
  if(id==="simon"){g.r=1;g.seq=[pick(MOVES)[0],pick(MOVES)[0]];simonShow(g)}
  if(id==="rps"){g.a=0;g.b=0;g.n=0;oracle(say(TT("rps_pick"),""),[{t:"✊",c:"g:rps_r"},{t:"✋",c:"g:rps_p"},{t:"✌️",c:"g:rps_s"},STOPC()]);play("wave")}
  if(id==="feel"){g.i=0;g.n=8;g.s=0;feelAsk(g)}
  if(id==="dance")danceStart(g);
  if(id==="dice")diceRoll(g)};}
{const _gi3=gameInput;gameInput=function(t,tok){const g=S.game;if(!g||!CGAMES.find(x=>x.id===g.id))return _gi3(t,tok);const low=(t||"").toLowerCase();
  if(tok==="stop"||STOPRE.test(low)){hideOv();const p=$("#dancePad");if(p)p.hidden=true;endGame(G("stopped"));return true}
  if(g.id==="simon"){if(g.phase!=="input")return true;const mv=(tok||"").replace(/^mv_/,"")||(MOVES.find(m=>low.includes(m[2].toLowerCase()))||[])[0];if(!mv)return true;
    const exp=g.seq[g.input.length];play(mv);if(mv!==exp){S.game=null;sfx("buzz");play("shrug");HB.add(g.r*2,"game");if(g.r>=5)confetti();const em=MOVES.find(m=>m[0]===exp);oracle(say(fill(TT("sim_bad"),{m:em[1]+" "+em[2],r:g.r}),""),[{t:TT("again"),c:"newgame:simon"},C("stop")]);return true}
    g.input.push(mv);sfx("ding");if(g.input.length===g.seq.length){g.r++;g.seq.push(pick(MOVES.slice(0,g.r<3?4:6))[0]);oracle(say(TT("sim_ok"),""),[]);play("cheer");setTimeout(()=>simonShow(g),1400)}return true}
  if(g.id==="rps"){const k=(tok||"").replace("rps_","")||(/rock|búa|✊/.test(low)?"r":/paper|bao|✋/.test(low)?"p":/scissor|kéo|✌/.test(low)?"s":"");if(!k)return true;
    RPS_HIST.push(k);const counter={r:"p",p:"s",s:"r"};const fav=["r","p","s"].sort((a,b)=>RPS_HIST.filter(x=>x===b).length-RPS_HIST.filter(x=>x===a).length)[0];const me=Math.random()<.35?counter[fav]:pick(["r","p","s"]);
    const E2={r:"✊",p:"✋",s:"✌️"};gameOv(E2[me],charName(),1600);g.n++;const win=(k==="r"&&me==="s")||(k==="p"&&me==="r")||(k==="s"&&me==="p");let msg;
    if(k===me){msg=TT("rps_tie");play("shrug")}else if(win){g.a++;msg=TT("rps_win");play("bow");sfx("ding")}else{g.b++;msg=TT("rps_lose");play("cheer");ST.face="laugh";ST.faceUntil=performance.now()+1500}
    if(g.a>=3||g.b>=3){S.game=null;const won=g.a>g.b;if(won){confetti();HB.add(8,"game")}setTimeout(()=>oracle(say((E2[k]+" vs "+E2[me]+" · ")+fill(won?TT("rps_end_w"):TT("rps_end_l"),{a:g.a,b:g.b}),""),[{t:TT("again"),c:"newgame:rps"},C("stop")]),900);return true}
    setTimeout(()=>oracle(say(E2[k]+" vs "+E2[me]+" · "+msg+" "+fill(TT("rps_score"),{a:g.a,b:g.b}),""),[{t:"✊",c:"g:rps_r"},{t:"✋",c:"g:rps_p"},{t:"✌️",c:"g:rps_s"},STOPC()]),700);return true}
  if(g.id==="feel"){const k=(tok||"").replace("fe_","");const f=FEELS2.find(x=>x[0]===k)||FEELS2.find(x=>low.includes(x[2]));if(!f)return true;const ok=f===g.cur;hideOv();
    if(ok){g.s++;sfx("ding");play("cheer")}else sfx("buzz");addMsg("bot",fill(ok?TT("fe_ok"):TT("fe_bad"),{f:g.cur[1]+" "+g.cur[2]}));g.i++;
    if(g.i>=g.n){S.game=null;if(g.s>=6)confetti();HB.add(g.s,"game");setTimeout(()=>oracle(say(fill(TT("fe_end"),{s:g.s,n:g.n}),""),[{t:TT("again"),c:"newgame:feel"},C("stop")]),700)}else setTimeout(()=>feelAsk(g),900);return true}
  if(g.id==="dice"){if(tok==="roll"){diceRoll(g);return true}if(tok==="you"){oracle(say(replyLang()==="vi"?"Kể đi, mình đang nghe nè! 👂":"Go on, I'm listening! 👂",""),[STOPC()]);g.listen=true;return true}
    if(g.listen&&t){g.listen=false;play("cheer");confetti();oracle(say(pick(["What a story! I loved the ending.","Wow, you're a natural storyteller!","That was amazing! Can I borrow that idea?"]),""),[{t:TT("dice_roll"),c:"g:roll"},C("stop")]);return true}return true}
  if(g.id==="dance")return true;return false};}
/* games tab: "Play with your character" section */
function charGamesBox(){const box=h("div",{class:"panel cg-box",id:"cgBox"},h("span",{class:"label"},"🎭 "+TT("cg_title")),h("p",{class:"note"},TT("cg_sub")));
  const g=h("div",{class:"cg-row"});CGAMES.forEach(x=>{const [n,d]=PU().games[x.id]||PACKS.en.games[x.id];g.append(h("button",{type:"button",class:"cg-card",onclick:()=>startGame(x.id)},h("span",{class:"em"},x.em),h("b",null,n),h("small",null,d)))});
  g.prepend(h("button",{type:"button",class:"cg-card hot",onclick:()=>switchTab("stories")},h("span",{class:"em"},"📚"),h("b",null,TT("st_title")),h("small",null,STORIES.length+" "+TT("pl_stories").toLowerCase())));box.append(g);return box}
{const _rg=renderGames;renderGames=function(){_rg();const old=$("#cgBox");if(old)old.remove();const V=$("#view-games");const seg=V.querySelector(".play-seg");V.insertBefore(charGamesBox(),seg?seg.nextSibling:V.firstChild)};}
renderGames();
/* quick start: stories */
{const _qs=quickStart;quickStart=function(){_qs();const q=$("#quickStart");if(q&&!q.querySelector(".qs-story"))q.insertBefore(h("button",{type:"button",class:"qs-i qs-story",onclick:()=>switchTab("stories")},h("span",{class:"em"},"📚"),h("span",null,TT("st_title"))),q.children[2]||null)};}
quickStart();

