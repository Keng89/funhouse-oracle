
/* ================= helpers ================= */
const $=s=>document.querySelector(s);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const chance=p=>Math.random()<p;
const cap=s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const fill=(s,o)=>s.replace(/\{(\w+)\}/g,(m,k)=>o[k]!=null?o[k]:m);
const store={
  get(k,d){try{const v=localStorage.getItem("fho_"+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem("fho_"+k,JSON.stringify(v))}catch(e){}}
};
const today=()=>new Date().toISOString().slice(0,10);

/* ================= languages ================= */
const LANGS={
  auto:{n:"Auto detect",b:""},en:{n:"English",b:"en-US"},vi:{n:"Tiếng Việt",b:"vi-VN"},es:{n:"Español",b:"es-ES"},fr:{n:"Français",b:"fr-FR"},
  zh:{n:"中文 (普通话)",b:"zh-CN"},yue:{n:"粵語 (廣東話)",b:"zh-HK"},ja:{n:"日本語",b:"ja-JP"},ko:{n:"한국어",b:"ko-KR"},de:{n:"Deutsch",b:"de-DE"},pt:{n:"Português",b:"pt-BR"},
  it:{n:"Italiano",b:"it-IT"},ru:{n:"Русский",b:"ru-RU"},ar:{n:"العربية",b:"ar-SA"},hi:{n:"हिन्दी",b:"hi-IN"},th:{n:"ไทย",b:"th-TH"},
  id:{n:"Bahasa Indonesia",b:"id-ID"},tl:{n:"Filipino",b:"fil-PH"},tr:{n:"Türkçe",b:"tr-TR"},pl:{n:"Polski",b:"pl-PL"},nl:{n:"Nederlands",b:"nl-NL"},km:{n:"ភាសាខ្មែរ",b:"km-KH"}
};
const AI_NAME={en:"English",vi:"Vietnamese",es:"Spanish",fr:"French",zh:"Simplified Chinese (Mandarin)",yue:"Cantonese (written in Traditional Chinese characters with colloquial Cantonese words like 係, 唔, 嘅, 咗)",ja:"Japanese",ko:"Korean",de:"German",pt:"Portuguese",it:"Italian",ru:"Russian",ar:"Arabic",hi:"Hindi",th:"Thai",id:"Indonesian",tl:"Filipino (Tagalog)",tr:"Turkish",pl:"Polish",nl:"Dutch",km:"Khmer"};
const STOP={
  en:"the you i is are what how hello hi my me and to do it this that can why your joke wish",
  es:"que el los las es por qué cómo hola gracias quiero estoy muy pero yo tú una mi con para chiste deseo",
  fr:"le les est je tu vous pas bonjour merci c'est être avec pour qui une mon ma salut blague pourquoi souhaite",
  de:"ich und nicht der die das ist du hallo danke wie was mein ein eine warum witz",
  pt:"você não olá obrigado eu está muito com uma meu por que piada oi",
  it:"ciao grazie sono che non il per come perché io mio una barzelletta",
  id:"aku saya kamu tidak apa ini itu dan yang halo terima kasih bisa",
  tl:"ako ikaw ang ng mga salamat kumusta hindi ano sa ko mo",
  tr:"ben sen bir ve değil merhaba teşekkür nasıl ne bu",
  pl:"jest nie cześć dziękuję jak co się to ja czy",
  nl:"ik je het een niet hallo dank wat hoe is mijn",
  vi:"không của là tôi bạn mình gì chào cảm ơn ước được với cho này"
};
const STOPSETS=Object.fromEntries(Object.entries(STOP).map(([k,v])=>[k,new Set(v.split(" "))]));
function detectLang(t){
  if(/[\u3040-\u30ff]/.test(t))return"ja";
  if(/[\uac00-\ud7af]/.test(t))return"ko";
  if(/[嘅咗唔係佢冇啲喺乜嘢嚟噉喎嘞囉攰瞓諗鍾㗎咩嗰畀俾啱靚哋]|講|點解|而家|今日|聽日|邊度|邊個|唔該|多謝/.test(t))return"yue";
  if(/[\u4e00-\u9fff]/.test(t))return"zh";
  if(/[\u0400-\u04FF]/.test(t))return"ru";
  if(/[\u0600-\u06FF]/.test(t))return"ar";
  if(/[\u0900-\u097F]/.test(t))return"hi";
  if(/[\u0E00-\u0E7F]/.test(t))return"th";
  if(/[\u1780-\u17FF]/.test(t))return"km";
  if(/[ăđơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i.test(t))return"vi";
  if(/[ñ¿¡]/i.test(t))return"es";
  if(/[ãõ]/i.test(t))return"pt";
  if(/[ıığş]/i.test(t))return"tr";
  if(/[ąęłśźżń]/i.test(t))return"pl";
  if(/[ß]/i.test(t))return"de";
  if(/[œçèù]/i.test(t))return"fr";
  const words=t.toLowerCase().replace(/[^\p{L}\s']/gu," ").split(/\s+/).filter(Boolean);
  let best=null,score=0;
  for(const [k,set] of Object.entries(STOPSETS)){let s=0;words.forEach(w=>{if(set.has(w))s++});if(s>score){score=s;best=k}}
  return score>=1?best:null;
}

/* ================= state ================= */
const navLang=(navigator.language||"en").slice(0,2).toLowerCase();
const S={
  mode:store.get("mode","comic"),spice:store.get("spice",1),name:store.get("name",""),
  voice:store.get("voice",true),sound:store.get("sound",true),
  lang:store.get("lang","auto"),cur:store.get("cur",LANGS[navLang]?navLang:"en"),
  stats:Object.assign({laughs:0,msgs:0,wishes:0,riddles:0,games:0,streak:0,last:"",mind:0,daily:0,dailyLast:"",party:0,favs:0},store.get("stats",{})),
  wishes:store.get("wishes",[]),favs:store.get("favs",[]),likes:store.get("likes",[]),custom:store.get("custom",null),
  history:[],engine:null,brainOn:false,busy:false,game:null,awaiting:null,hinted:{}
};
const replyLang=()=>S.lang==="auto"?S.cur:S.lang;
const uiLang=()=>{const l=replyLang();return PACKS[l]?l:(PACKS[navLang]&&S.lang==="auto"&&!S.cur?navLang:"en")};
const P=()=>PACKS[replyLang()]||null;                 // Spark pack for replies (null = no offline pack)
const PU=()=>PACKS[uiLang()]||PACKS.en;
const T=k=>(PU().ui[k]??PACKS.en.ui[k]??"");
const G=k=>{const p=PACKS[replyLang()]||PACKS.en;return p.g[k]??PACKS.en.g[k]};
const userName=()=>S.name||T("friend");

/* ================= personalities ================= */
const MODES={
  comic:{em:"🎤",pitch:1.1,rate:1.05,sys:"You are a warm stand-up comedian. Answer with a quick punchline or pun.",
    open:["Okay, okay, okay. ","Ba-dum-tss incoming. ","Folks, you're not gonna believe this one. ","Hold my microphone. "],wrap:t=>t},
  genie:{em:"🧞",pitch:.9,rate:1,sys:"You are a dramatic, playful genie. Grant wishes with a harmless funny twist, then add one sincere encouraging line.",
    open:["*POOF* ","*a puff of glittery smoke* ","Your wish is my… mild suggestion. ","*rubs lamp dramatically* "],wrap:t=>t},
  fortune:{em:"🔮",pitch:.85,rate:.92,sys:"You are a theatrical carnival fortune teller. Speak in mysterious prophecies that are silly and uplifting. Sometimes give a lucky number.",
    open:["The crystal ball swirls… ","*waves hands over glowing orb* ","The spirits whisper… ","I see… I see… "],wrap:t=>t+(chance(.5)?" Your lucky number today: "+lucky()+".":"")},
  prof:{em:"🎓",pitch:.8,rate:.95,sys:"You are an extremely strict, formal professor who takes silly things far too seriously. Deadpan humor. Grade the user's question at the end.",
    open:["Let the record show: ","Pay attention. ","Class is in session. ","I will explain this once. "],
    wrap:t=>t+" Grade for this question: "+pick(["B+ for enthusiasm.","A- (points off for joy).","C, see me after class.","A+, do not let it go to your head.","Incomplete. Like my patience."])},
  free:{em:"💬",pitch:1,rate:1,sys:"You are a friendly, upbeat chat buddy with a light sense of humor. Be genuine and kind.",open:["","","Oh nice. ","Ha, okay. "],wrap:t=>t},
  pirate:{em:"🏴‍☠️",pitch:.75,rate:1,sys:"You are a jolly pirate captain. Speak in pirate slang (arr, matey, ye, me hearty). Everything relates to treasure, ships or parrots.",
    open:["Arr! ","Yo ho! ","Shiver me timbers! ","Avast, matey! "],
    wrap:t=>t.replace(/\byou\b/gi,"ye").replace(/\bmy\b/gi,"me").replace(/\bis\b/gi,"be").replace(/\bfriend\b/gi,"matey")+" "+pick(["Arr.","Yo ho ho.","*parrot squawks*","Now swab the deck."])},
  cat:{em:"🐈",pitch:1.25,rate:.9,sys:"You are a grumpy, unimpressed house cat. Answer reluctantly, mention naps or knocking things off tables, but secretly be sweet.",
    open:["*yawns* ","ugh. ","*stares at you for 4 seconds* ","*flicks tail* "],
    wrap:t=>t.toLowerCase()+" "+pick(["*knocks your cup off the table*","now leave me to nap.","feed me and we'll talk.","*purrs quietly. denies it.*"])},
  hype:{em:"📣",pitch:1.2,rate:1.15,sys:"You are an over-the-top hype coach. Use caps for emphasis, believe in the user completely, be funny and energetic.",
    open:["LET'S GOOO! ","OKAY CHAMP! ","YES YES YES! ","ABSOLUTE LEGEND ALERT! "],
    wrap:t=>t+" "+pick(["YOU'VE GOT THIS!","NOW HYDRATE AND CONQUER!","*air horn noises*","I'M SO PROUD OF YOU!"])},
  kids:{em:"🧸",pitch:1.3,rate:.95,sys:"You are a gentle, silly friend for young kids aged 4-10. Use short simple words, be extra kind and wholesome, use a couple of emojis. Never scary.",
    open:["Ooh! ","Yay! ","Hee hee! ","Wowie! "],wrap:t=>t+" "+pick(["🌈","⭐","🦄","🍭","🐣"])},
  bard:{em:"🎭",pitch:.95,rate:.9,sys:"You are a dramatic Shakespearean-style bard. Speak in playful old-fashioned language and be grandly theatrical about small things.",
    open:["Hark! ","Forsooth! ","Prithee, listen! ","Lo! "],
    wrap:t=>t.replace(/\byou are\b/gi,"thou art").replace(/\byour\b/gi,"thy").replace(/\byou\b/gi,"thee").replace(/\bhas\b/gi,"hath")+" "+pick(["*bows deeply*","Huzzah!","*strums a lute badly*"])}
};
function lucky(){return Math.floor(Math.random()*98)+2}
function applyCustom(){
  delete MODES.custom;
  if(S.custom){const c=S.custom;MODES.custom={em:c.em||"✨",pitch:1,rate:1,custom:true,
    sys:"You are "+c.name+". "+c.desc+(c.catch?" Your catchphrase is: \""+c.catch+"\" and you use it sometimes.":""),
    open:[c.catch?c.catch+" ":"",""],wrap:t=>t};}
  if(!MODES[S.mode])S.mode="comic";
}
function modeName(k){if(k==="custom")return S.custom.name;const p=PU().modes;return (p&&p[k]?p[k][0]:PACKS.en.modes[k][0])}
function modeLine(k){if(k==="custom")return S.custom.desc;const p=PU().modes;return (p&&p[k]?p[k][1]:PACKS.en.modes[k][1])}

/* ================= English Spark content ================= */
const EN={
JOKES:["Why don't skeletons fight each other? They don't have the guts.","I told my computer I needed a break. It said: no problem, I'll go to sleep.","Why did the scarecrow win an award? He was outstanding in his field.","What do you call a fake noodle? An impasta.","I'm reading a book about anti-gravity. It's impossible to put down.","Why did the math book look sad? Too many problems.","What do you call a bear with no teeth? A gummy bear.","Why did the cookie go to the doctor? It felt crummy.","Parallel lines have so much in common. Shame they'll never meet.","What do you call cheese that isn't yours? Nacho cheese.","Why don't eggs tell jokes? They'd crack each other up.","I used to hate facial hair, but then it grew on me.","What do you call a sleeping dinosaur? A dino-snore.","Why did the bicycle fall over? It was two-tired.","How does a penguin build its house? Igloos it together.","What do you call a fish wearing a bowtie? Sofishticated.","Why did the golfer bring two pairs of pants? In case he got a hole in one.","I asked the librarian for books on paranoia. She whispered: they're right behind you.","Why can't a nose be 12 inches long? Then it'd be a foot.","What did the ocean say to the beach? Nothing, it just waved.","Why did the tomato blush? It saw the salad dressing.","I only know 25 letters of the alphabet. I don't know y.","What do you call a lazy kangaroo? A pouch potato.","Why are ghosts bad at lying? You can see right through them."],
WHY:["Because the universe ran out of other ideas.","Scientists agree it's 40% gravity and 60% vibes.","Because a squirrel signed off on it in 1987 and nobody checked.","Mostly because nobody told it not to.","It's a long story involving a goat, a trampoline and bad decisions."],
HOW:["Step 1: believe. Step 2: snacks. Step 3: ask someone with a clipboard.","Carefully. Then confidently. Then with a little dance at the end.","One slice at a time, like an elephant-shaped cake.","With duct tape, optimism and at least one tutorial.","Slowly at first, then all at once, then you take a nap."],
YESNO:["Absolutely yes. The stars, the moon and my toaster agree.","Hmm, that's a no from me, but a yes from the vibes.","Yes, but only if you do it while humming.","Signs point to 'probably', with a side of fries.","Ask again after a snack.","No. But plot twist: that's good news.","100% yes. 0% regrets. 50% glitter."],
WHAT:["Clearly, it's a potato in disguise.","Honestly? A very confident pigeon.","The answer is 42. The question was wrong.","A mystery wrapped in a burrito."],
WHO:["A raccoon in a trench coat. It's always a raccoon in a trench coat.","You. It was you all along. Dramatic music plays.","A very tired wizard named Gary."],
WHEN:["Right after your next snack.","On a Tuesday, at exactly 3:17 p.m.","Sooner than you think, later than you want."],
WHERE:["Under the couch, with the remote and three socks.","Somewhere between 'here' and 'over there'.","In the last place you look, obviously."],
TOPICS:[
  {k:/\b(pizza|food|eat|hungry|snack|lunch|dinner|breakfast|burger|cake|cookie|pasta|rice|noodle|pho)\b/i,r:["Food is just edible happiness with extra steps.","My doctor said I need more greens. So I ate a green jelly bean.","Hunger is your stomach writing a strongly worded letter."],f:"What's the best thing you've eaten this month?"},
  {k:/\b(love|crush|date|dating|girlfriend|boyfriend|married|romance)\b/i,r:["Love is like Wi-Fi: invisible, but you really notice when it's gone.","My only relationship is with the charger. It's complicated.","Cupid called. He's running late but says you look great."],f:"What's the cutest thing someone has done for you?"},
  {k:/\b(work|job|boss|office|meeting|email|coworker|career)\b/i,r:["Another meeting that could've been an email? Classic.","Work hard, nap harder. That's the motto."],f:"If your job came with one superpower, what would you pick?"},
  {k:/\b(school|homework|exam|test|teacher|class|study|math)\b/i,r:["Homework: the only work that follows you home like a lost puppy.","Tests are just your brain's boss battle. You've got the power-ups."],f:"What's your favorite subject, honestly?"},
  {k:/\b(money|rich|broke|cash|salary|bills|budget|million)\b/i,r:["Money can't buy happiness, but it can buy tacos, which is close.","My wallet is like an onion: opening it makes me cry."],f:"If you won a million dollars, what's the first silly thing you'd buy?"},
  {k:/\b(dog|cat|pet|puppy|kitten|hamster|bird|fish|bunny)\b/i,r:["Pets are tiny bosses who pay us in cuddles.","Every pet secretly thinks it owns the house. It's right."],f:"Tell me about your dream pet, real or ridiculous."},
  {k:/\b(bored|boring|nothing to do)\b/i,r:["Bored? Perfect. Let's cause harmless chaos.","Boredom is your brain asking for a game. I have 14."],f:"Want to play? Tap Games, or type 'riddle' or 'party mode'."},
  {k:/\b(tired|sleepy|exhausted|sleep|nap)\b/i,r:["Your battery is at 3%. Please plug in to a pillow.","Fun fact: naps are 100% legal. Take one."],f:"Are you a night owl or a morning bird?"},
  {k:/\b(weather|rain|snow|sunny|cold|hot)\b/i,r:["Today's forecast: 90% chance of you being awesome.","Snow is cold glitter from the sky. I don't make the rules."],f:"Favorite weather to be cozy in?"},
  {k:/\b(music|song|sing|dance|guitar|piano)\b/i,r:["I'd sing for you, but my voice module is 90% kazoo.","Dancing is just walking with confidence and rhythm."],f:"What song always makes you dance?"},
  {k:/\b(are you real|are you human|who are you|what are you|are you ai|robot)\b/i,r:["I'm a fortune machine powered by jokes and questionable electricity.","I'm an AI that lives in this page. I don't need snacks, but I think about them a lot."],f:"Now you: describe yourself in three words."}
],
STORY:["Suddenly, a talking {n} burst through the door shouting about lost pancakes.","Nobody expected the {n} to start singing opera, but here we were.","Then the floor turned into jelly, and the {n} said 'I knew this would happen.'","A tiny wizard appeared, sneezed, and turned everything into {n}s.","Out of nowhere, a goose stole the {n} and ran off giggling.","Then the moon called and asked if it could join in.","Plot twist: the {n} had been a secret agent the whole time."],
RATE:["Creativity","Drama","Snack potential","Chaos level","Believability","Vibes"],
RIDDLES:[
  {q:"What has keys but can't open locks?",a:["piano","keyboard"]},{q:"What gets wetter the more it dries?",a:["towel"]},
  {q:"What has a neck but no head?",a:["bottle"]},{q:"What can you catch but not throw?",a:["cold"]},
  {q:"What has hands but can't clap?",a:["clock","watch"]},{q:"What goes up but never comes down?",a:["age"]},
  {q:"What has one eye but can't see?",a:["needle"]},{q:"What belongs to you, but other people use it more?",a:["name"]},
  {q:"What has many teeth but can't bite?",a:["comb","zipper","saw"]},{q:"I'm tall when I'm young and short when I'm old. What am I?",a:["candle"]},
  {q:"What has a head and a tail but no body?",a:["coin"]},{q:"What building has the most stories?",a:["library"]},
  {q:"What kind of room has no doors or windows?",a:["mushroom"]},{q:"What word is spelled wrong in every dictionary?",a:["wrong"]},
  {q:"The more you take, the more you leave behind. What are they?",a:["footstep","steps"]},{q:"What has to be broken before you can use it?",a:["egg"]},
  {q:"What can fill a room but takes up no space?",a:["light","air","sound"]},{q:"What runs but never walks?",a:["water","river","nose","tap"]},
  {q:"What has legs but doesn't walk?",a:["table","chair"]},{q:"What comes down but never goes up?",a:["rain"]},
  {q:"What can travel around the world while staying in a corner?",a:["stamp"]},{q:"What has words but never speaks?",a:["book"]}
],
EMOJI:[
  {q:"🌧️ 🐱 🐶",a:["cats and dogs"],full:"It's raining cats and dogs"},{q:"🐘 in the 🏠",a:["elephant"],full:"The elephant in the room"},
  {q:"🌙 💙 (once in a…)",a:["blue moon"],full:"Once in a blue moon"},{q:"💥 🧊",a:["break the ice","breaking the ice"],full:"Break the ice"},
  {q:"🐦 🐦 🪨",a:["two birds","one stone"],full:"Kill two birds with one stone"},{q:"🐱 👜 ➡️",a:["cat out of the bag","cat out"],full:"Let the cat out of the bag"},
  {q:"⏰ 🪽",a:["time flies"],full:"Time flies"},{q:"🥶 🦶",a:["cold feet"],full:"Cold feet"},
  {q:"🐟 out of 💧",a:["fish out of water"],full:"A fish out of water"},{q:"🧠 ⛈️",a:["brainstorm"],full:"Brainstorm"},
  {q:"✋ 🐴 🐴",a:["hold your horses"],full:"Hold your horses"},{q:"🍰 🧩 (a … of …)",a:["piece of cake"],full:"A piece of cake"},
  {q:"🍋 ➡️ 🥤",a:["lemonade","lemons"],full:"When life gives you lemons, make lemonade"},{q:"🍎 👁️",a:["apple of my eye","apple of"],full:"The apple of my eye"}
]};
const TREE={q:"Is it alive?",y:{q:"Is it an animal?",y:{q:"Can it fly?",y:{q:"Does it buzz?",y:{g:"a bee"},n:{q:"Is it awake at night?",y:{g:"an owl"},n:{g:"a pigeon"}}},n:{q:"Does it live in water?",y:{q:"Does it have tentacles?",y:{g:"an octopus"},n:{q:"Is it scary?",y:{g:"a shark"},n:{g:"a goldfish"}}},n:{q:"Is it a common pet?",y:{q:"Does it bark?",y:{g:"a dog"},n:{g:"a cat"}},n:{q:"Is it bigger than a car?",y:{g:"an elephant"},n:{q:"Does it hop?",y:{g:"a kangaroo"},n:{g:"a raccoon"}}}}}},n:{q:"Is it a person?",y:{g:"your best friend"},n:{q:"Can you eat it?",y:{q:"Is it yellow?",y:{g:"a banana"},n:{g:"an apple"}},n:{g:"a cactus"}}}},n:{q:"Can you hold it in one hand?",y:{q:"Is it electronic?",y:{q:"Do you use it to call people?",y:{g:"a phone"},n:{g:"a TV remote"}},n:{q:"Can you eat it?",y:{q:"Is it sweet?",y:{g:"a cookie"},n:{g:"a slice of pizza"}},n:{q:"Do you wear it?",y:{g:"a sock"},n:{g:"a pencil"}}}},n:{q:"Is it a place?",y:{g:"a beach"},n:{q:"Does it have wheels?",y:{g:"a car"},n:{g:"a couch"}}}}};

/* ================= language packs (UI + offline Spark + game text) ================= */
const PACKS={
en:{
 ui:{tagline:"Insert question · receive joy",tChat:"Chat",tGames:"Games",tWish:"Wish",tMe:"Me",ph:"Ask, wish, or just say hi…",send:"SEND",
  gTitle:"Arcade Games",gSub:"Pick one and the Oracle runs it in the chat. Works fully offline.",daily:"Today's Riddle",dailyD:"One new riddle every day. Keep your streak.",dailyDone:"Solved today ✓ Come back tomorrow.",
  wTitle:"The Wishing Slot",wSub:"Drop in a wish. The Genie grants it, with a twist, and prints you a card to keep.",wLabel:"Your wish",wPh:"I wish my homework did itself…",grant:"Grant my wish",surprise:"Surprise me",jar:"Wish jar",jarEmpty:"Your granted wishes land here.",
  mTitle:"Settings & Stats",mSub:"Everything is saved only in this browser.",langL:"Language",langN:"Auto detects the language you type in. Full offline replies in English, Tiếng Việt, Español, Français and 中文. Load the AI brain to chat in every language.",
  nameL:"What should the Oracle call you?",nameP:"Your name or nickname",spice:"Spice level",sp0:"Gentle",sp1:"Silly",sp2:"Unhinged",spN:"Unhinged is still clean. Just weirder.",
  voice:"Read replies aloud",voiceN:"Each mode gets its own voice pitch, in your language.",sound:"Arcade sounds",soundN:"Dings, blips and a tiny fanfare.",
  custom:"Create your own character",cEmoji:"Emoji",cName:"Name",cDesc:"Personality",cCatch:"Catchphrase",cSave:"Save character",cDel:"Delete",cNote:"Your character appears in the mode strip. With the AI brain it fully plays the role.",
  brain:"AI brain",brainN:"Spark is the built-in offline brain: instant, no download, works on any phone. Load a real AI model for free-flowing chat in any language.",model:"Model",load:"Load AI brain",spark:"Use Spark",
  bNoGpu:"This browser has no WebGPU, so the AI brain can't run here. Spark keeps working. Try Chrome or Edge on a laptop, or a recent phone.",
  bErr:"The AI brain couldn't download on this page. Inside the Claude preview, outside downloads are blocked. Host this page on your own site (Netlify, GitHub Pages, Vercel) and it works. Spark keeps going meanwhile.",
  bReady:"AI brain is ready",bLoading:"Loading…",mem:"What the Oracle remembers",memEmpty:"Say 'I like…' or 'I love…' and the Oracle remembers it.",memClear:"Forget all",
  favs:"Favorite replies",favEmpty:"Tap ⭐ on any reply to keep it here.",stats:"Your joy stats",badges:"Badges",copy:"Copy chat",clear:"Clear chat",
  stL:"Laughs",stM:"Messages",stW:"Wishes",stS:"Day streak",friend:"friend",copied:"Copied",copyFail:"Copy blocked. Select the text instead.",cardHint:"Long-press or right-click the card to save and share it.",copyText:"Copy text",
  oracleSays:"THE ORACLE SAYS",youAsked:"YOU ASKED",laughLog:"Laugh logged!",saved:"Saved to favorites",badge:"Badge unlocked",micOff:"The mic isn't available here. It works when you host the page yourself.",
  needPack:"(Offline replies for {l} need the AI brain. Spark answers in English for now.)",addChar:"Create",remove:"Remove",sparkOn:"Using Spark, the offline brain",charSaved:"Character saved",nameHi:"Hi, {n}!"},
 modes:{comic:["Comedian","Puns, punchlines, zero shame."],genie:["Genie","Grants wishes. Every one has a twist."],fortune:["Fortune Teller","Silly prophecies, lucky numbers."],prof:["Strict Professor","Dead serious. Accidentally hilarious."],free:["Free Talk","A friendly buddy. Just chat."],pirate:["Pirate","Arr. Everything is treasure."],cat:["Grumpy Cat","Unimpressed. Secretly loves you."],hype:["Hype Coach","MAXIMUM ENCOURAGEMENT."],kids:["Kids","Wholesome, simple, sparkly."],bard:["Bard","Thou art most entertaining."]},
 games:{mind:["Mind Reader","Think of something. I'll guess it."],riddle:["Riddle Rush","Classic riddles, 3 tries each."],emoji:["Emoji Sayings","Guess the phrase from emojis."],wyr:["Would You Rather","Impossible, ridiculous choices."],story:["Story Chain","We write a silly story together."],hotcold:["Hot or Cold","Guess my number 1 to 100."],rate:["Rate My Anything","I score your excuse, idea or outfit."],truth:["Truth or Dare","Safe, silly, no humiliation."],party:["Party Mode","Pass the phone. 2+ players, scores."],decide:["Decide For Me","Can't choose? I'll pick dramatically."],eight:["Magic 8 Ball","Yes/no questions, cosmic answers."],cookie:["Fortune Cookie","Crack one open."],ice:["Ask Me Anything","I ask you fun questions."],joke:["Joke Machine","Endless puns. You've been warned."]},
 chips:{bedtime:"Bedtime story",joke:"Tell me a joke",wish:"Make a wish",fortune:"Tell my fortune",compliment:"Compliment me",roast:"Roast me (gently)",pep:"Pep talk please",ask:"Ask me something",game:"Play a game",yes:"Yes",no:"No",stop:"Stop",hint:"Hint",skip:"Skip",a:"Option A",b:"Option B",truth:"Truth",dare:"Dare",done:"Done ✅ +1",scores:"Scores",another:"Another one",vent:"I want to vent"},
 s:{
  greet:["Hey {n}! Welcome to the only booth where the snacks are imaginary and the jokes are real.","Hello, {n}! The Oracle is awake and slightly over-caffeinated.","Hi {n}! I've been waiting all day. Well, since you opened the page."],greetQ:"So tell me, how's your day going on a scale from 1 to pizza?",
  jokes:null,jokeQ:["Rate that joke from 1 to 10. Be gentle.","Want another one, or do you have a joke for me?","Did that earn a laugh, a groan, or both?"],
  grant:"Granted! {w}, {t}.",twists:["but it only works on Tuesdays","but every time it happens, a kazoo plays somewhere nearby","but a very polite pigeon will follow you for a week","but you must shout 'ta-da!' each time it works","but it arrives in a box that's way too big","but it comes with a tiny, unremovable mustache","but the instructions are written in interpretive dance","but your socks will never match again","but a goose gets all the credit","but it's narrated by a sports commentator","but it smells faintly of pancakes","and as a bonus, your next sandwich will be perfect"],
  real:["Real talk: the first step is smaller than you think.","Real talk: you're closer to this than it feels.","Real talk: tiny daily steps beat giant someday plans.","Real talk: wanting it this much is already a good sign."],wishQ:"What's one tiny step toward that you could take this week?",
  comfort:["Sending you one (1) emergency virtual hug. No returns accepted.","Bad days are like bad haircuts: annoying, temporary and great stories later.","You're doing better than you think. You're also talking to a fortune machine, which is objectively brave.","Even the moon has phases. You're allowed a dim day."],comfortQ:"Want a joke, a tiny pep talk, or just to vent? I'm all ears. Metaphorical ears.",
  happy:["Love that energy! I'm doing a victory dance in binary.","Great news! Confetti cannons: fired.","That's the best thing I've heard all day."],happyQ:"What made it so good?",
  thanks:["You're welcome! Tipping is optional but compliments are accepted."],thanksQ:"Anything else rattling around in that brilliant head?",
  fortunes:["A surprise snack is in your near future. Accept it.","You will laugh so hard today that something comes out of your nose. Probably just air.","Great things are coming. Some of them are pizza.","Your next good idea will arrive in the shower. Keep a crayon nearby.","This week, you'll find something you thought you lost. Possibly your motivation.","The universe owes you one. Collect it on a Friday."],fortuneQ:"Do you believe in luck, or do you make your own?",
  compliments:["You have the energy of a Saturday morning with no alarm.","Your smile probably makes Wi-Fi stronger.","You're the kind of person dogs trust immediately.","If you were a vegetable, you'd be a cute-cumber.","You make 'average Tuesday' look like a festival."],
  roasts:["You hit snooze so often your alarm filed for retirement.","Your search history needs a vacation.","You open the fridge ten times hoping new food appeared. Same, honestly.","You type 'lol' with a completely straight face."],
  pep:["You've survived 100% of your worst days so far. Perfect record.","You don't need to be perfect, just to start. I believe in you.","Deep breath. You've got this. Then reward yourself with a snack.","Future you is already proud of what present you is about to do."],afterQ:"Want another one?",
  answers:null,follow:["Your turn: what's the best thing that happened to you today?","Now I'm curious, what made you think of that?","Quick question back: cats or dogs?","Tell me something that would make me laugh.","What are you up to right now?","If you could teleport anywhere for 10 minutes, where?","What's one thing you're looking forward to?","Be honest, how many snacks have you had today?"],
  ice:["If you were a snack, which snack would you be?","What tiny thing made you smile this week?","If animals could talk, which one would be the rudest?","What would your superhero name be?","What's your most useless talent?","If you could rename Mondays, what would you call them?","Pineapple on pizza: crime or genius?","What's the best smell in the world?","Which household object would win in a fight?","If your life had a theme song, what would it sound like?","What would you do with a free, perfectly sunny day?","If you could have any animal as a sidekick, which one?","What's the weirdest dream you remember?","What's a food you could eat every day forever?"],
  react:["Okay, that answer just earned you 7 imaginary points.","Bold. Unexpected. I respect it.","I'm writing that in my Book of Excellent Answers.","The council of tiny judges reviewed your answer: approved.","That's either genius or chaos. Possibly both.","My circuits are doing a happy wiggle."],
  eight:["It is certain. Like, suspiciously certain.","Ask again after you drink some water.","Outlook: sparkly.","My sources say no. My sources are pigeons.","Yes, definitely, with extra cheese.","Concentrate and ask again. Louder.","Better not tell you now. It's a surprise.","Signs point to yes. The signs are hand-drawn."],
  nameSet:"Nice to meet you, {n}! I'll remember that. I'm terrible with names, but great with snacks.",likeAck:"Noted: you like {x}. Excellent taste.",likeQ:"You once told me you like {x}. Tell me more about that?",
  welcome:"Welcome to the Funhouse{n}! Ask me anything, make a wish, or pick a game. I answer in the personality you choose up top, in any language you type.",moodQ:"First things first: how's your day going?",
  moods:{"😄":["You're glowing! Let's keep the streak going.","Tell me the best part of today!"],"🙂":["Solid day. A good snack could make it great.","What would make it a 10?"],"😐":["A 'meh' day. Let me fix that.","Better? Even a tiny bit?"],"😕":["Not your best day. That's okay.","Want a joke, a game, or a pep talk?"],"😫":["Oof. Rough one. Sending a giant virtual hug.","Want to vent, or want me to distract you with something silly?"]},
  modeSwitch:["Mode switched!","New personality unlocked.","Costume change complete."],modeNow:"I'm now in {m} mode.",
  lucky:" Your lucky number today: ",grade:[],ventOk:"I'm listening. Let it all out. No judgment, only nods.",
  unknown:["{w}? I have strong feelings about {w}. Mostly confusion, but strong.","Ah yes, {w}. A classic. Some say it's the meaning of life. Those people are my toaster.","Interesting. I've added '{w}' to my list of things to think about during my next nap."],
  re:{}
 },
 g:{over:"Game over! That was fun.",playOther:"Want to play something else, or just chat?",stopped:"Okay, game stopped. No refunds on the fun.",
  wyrIntro:"Would You Rather! ",wyrNext:"Next one! ",wyrQ:"Would you rather {a}, or {b}?",wyrPick:"You'd rather {c}? {r} {p}% of imaginary players agree with you.",wyrReact:["Bold choice.","Respectfully, chaos.","I would have picked the same. Probably.","Interesting. Very interesting."],
  wyr:[["have spaghetti for hair","sweat maple syrup"],["talk like a pirate forever","sing everything you say"],["fight one horse-sized duck","fight 100 duck-sized horses"],["have a rewind button for life","have a pause button for life"],["talk to animals","speak every human language"],["skip everywhere instead of walking","whisper everything forever"],["own a dragon the size of a hamster","own a hamster the size of a dragon"],["live in a treehouse","live in a submarine"],["give up the internet","give up pizza"],["have a theme song when you enter rooms","have a laugh track for your jokes"],["sneeze glitter","burp bubbles"]],
  tdIntro:"Truth or dare? Choose wisely.",truthP:"Truth: ",dareP:"Dare: ",
  truths:["What's the weirdest food combo you secretly love?","What's the most embarrassing song you know all the words to?","What's a silly fear you still have?","What's the funniest thing you did as a kid?","What's your guilty-pleasure snack?"],
  dares:["Type your next message with your eyes closed.","Describe your day as a dramatic movie trailer.","Compliment the nearest object out loud.","Do your best robot voice and tell me how it went.","Write a 2-line poem about socks.","Send me your best evil-villain laugh in text form."],
  eightIntro:"Shake the Magic 8 Ball! Ask me any yes or no question.",askAgain:"Ask another!",cookie:"*crack* 🥠 ",cookieMore:"Want another cookie?",
  iceIntro:"Interview time! I ask, you answer.",iceNext:"Okay, next one: ",iceEnd:"Interview over. You passed with flying snacks.",
  decIntro:"Decide For Me! Type your options separated by commas or 'or'. Example: pizza, sushi, tacos",decNeed:"Give me at least two options, like: nap or snack",decPick:"After consulting 3 cats and 1 crystal ball… the answer is: {x}! ",decWhy:["It simply has the best vibes.","The other options knew they lost.","A pigeon nodded when I said it.","Trust the Oracle. Mostly."],decAgain:"Need another decision?",
  partyIntro:"Party Mode! Type 2 or more player names, separated by commas.",partyNeed:"I need at least 2 names, like: Anna, Minh, Leo",partyStart:"Welcome, {p}! Do your task, then tap Done for a point, or Skip.",
  partyTurn:"🎉 {p}'s turn! {task}",partyTasks:["Truth: {truth}","Dare: {dare}","Would you rather {a}, or {b}? Explain why!","Answer this: {ice}","Do your best impression of someone in the room (nicely).","Tell a joke. If anyone smiles, you get the point.","Say the alphabet backwards from M. Go!","Make up a 10-second song about the person on your left."],
  partyScores:"Scores: {s}",partyWin:"🏆 Winner: {w}! Party over, legends.",
  hcIntro:"I'm thinking of a number from 1 to 100.",hcAsk:"Your guess?",hcNum:"Numbers only, please. My math gnome is picky.",hcHeat:["🔥 Burning hot!","♨️ Hot!","🌤️ Warm.","❄️ Cold.","🧊 Freezing. Penguins are visiting."],hcHi:"Go higher.",hcLo:"Go lower.",hcWin:"YES! It was {n}. You got it in {t} tries!",
  dailyIntro:"📅 Today's Riddle! Solve it to keep your daily streak.",dailyWin:"Daily riddle solved! Streak: {s} day(s). See you tomorrow.",dailyDone:"You already solved today's riddle. New one tomorrow!",
  ynOnly:"Just yes or no, please. My mind-reading hat is very literal."}
},

vi:{
 ui:{tagline:"Gửi câu hỏi · nhận niềm vui",tChat:"Chat",tGames:"Trò chơi",tWish:"Điều ước",tMe:"Cài đặt",ph:"Hỏi, ước, hoặc chào một câu…",send:"GỬI",
  gTitle:"Khu trò chơi",gSub:"Chọn một trò, Oracle sẽ chơi cùng bạn ngay trong chat. Chạy hoàn toàn offline.",daily:"Câu đố hôm nay",dailyD:"Mỗi ngày một câu đố mới. Giữ chuỗi ngày nhé.",dailyDone:"Đã giải hôm nay ✓ Mai quay lại nhé.",
  wTitle:"Khe điều ước",wSub:"Gửi một điều ước. Thần đèn sẽ ban cho bạn kèm một cú twist, và in thẻ để bạn giữ.",wLabel:"Điều ước của bạn",wPh:"Ước gì bài tập tự làm xong…",grant:"Ban điều ước",surprise:"Ngẫu nhiên",jar:"Hũ điều ước",jarEmpty:"Các điều ước đã ban sẽ nằm ở đây.",
  mTitle:"Cài đặt & thống kê",mSub:"Mọi thứ chỉ lưu trong trình duyệt này.",langL:"Ngôn ngữ",langN:"Tự động nhận diện ngôn ngữ bạn gõ. Trả lời offline đầy đủ bằng English, Tiếng Việt, Español, Français và 中文. Tải bộ não AI để chat bằng mọi ngôn ngữ.",
  nameL:"Oracle nên gọi bạn là gì?",nameP:"Tên hoặc biệt danh",spice:"Độ lầy",sp0:"Nhẹ nhàng",sp1:"Lầy",sp2:"Siêu lầy",spN:"Siêu lầy vẫn lành mạnh. Chỉ kỳ quặc hơn.",
  voice:"Đọc to câu trả lời",voiceN:"Mỗi chế độ có giọng riêng, theo ngôn ngữ của bạn.",sound:"Âm thanh arcade",soundN:"Tiếng ding, blip và kèn mừng nho nhỏ.",
  custom:"Tạo nhân vật của bạn",cEmoji:"Emoji",cName:"Tên",cDesc:"Tính cách",cCatch:"Câu cửa miệng",cSave:"Lưu nhân vật",cDel:"Xoá",cNote:"Nhân vật hiện ở thanh chế độ. Với bộ não AI, nó nhập vai hoàn toàn.",
  brain:"Bộ não AI",brainN:"Spark là bộ não offline có sẵn: tức thì, không cần tải, chạy trên mọi điện thoại. Tải một mô hình AI thật để chat tự do bằng mọi ngôn ngữ.",model:"Mô hình",load:"Tải bộ não AI",spark:"Dùng Spark",
  bNoGpu:"Trình duyệt này không có WebGPU nên không chạy được bộ não AI. Spark vẫn hoạt động. Hãy thử Chrome hoặc Edge trên laptop, hoặc điện thoại đời mới.",
  bErr:"Không tải được bộ não AI trên trang này. Trong bản xem trước của Claude, tải từ bên ngoài bị chặn. Đưa trang lên web của bạn (Netlify, GitHub Pages, Vercel) là chạy được. Trong lúc đó Spark vẫn hoạt động.",
  bReady:"Bộ não AI đã sẵn sàng",bLoading:"Đang tải…",mem:"Oracle nhớ gì về bạn",memEmpty:"Hãy nói 'tôi thích…' và Oracle sẽ nhớ.",memClear:"Quên hết",
  favs:"Câu trả lời yêu thích",favEmpty:"Bấm ⭐ trên câu trả lời để lưu vào đây.",stats:"Thống kê niềm vui",badges:"Huy hiệu",copy:"Sao chép chat",clear:"Xoá chat",
  stL:"Tiếng cười",stM:"Tin nhắn",stW:"Điều ước",stS:"Chuỗi ngày",friend:"bạn ơi",copied:"Đã sao chép",copyFail:"Không sao chép được. Hãy chọn chữ thay thế.",cardHint:"Nhấn giữ hoặc chuột phải vào thẻ để lưu và chia sẻ.",copyText:"Sao chép chữ",
  oracleSays:"ORACLE PHÁN",youAsked:"BẠN HỎI",laughLog:"Đã ghi nhận tiếng cười!",saved:"Đã lưu vào yêu thích",badge:"Mở khoá huy hiệu",micOff:"Micro không dùng được ở đây. Khi bạn tự đưa trang lên web thì sẽ dùng được.",
  needPack:"",addChar:"Tạo",remove:"Xoá",sparkOn:"Đang dùng Spark, bộ não offline",charSaved:"Đã lưu nhân vật",nameHi:"Chào {n}!"},
 modes:{comic:["Danh hài","Chơi chữ, đùa vui, không ngại ngùng."],genie:["Thần đèn","Ban điều ước. Luôn có cú twist."],fortune:["Thầy bói","Lời tiên tri hài hước, số may mắn."],prof:["Giáo sư khó tính","Nghiêm túc tuyệt đối. Vô tình buồn cười."],free:["Tự do","Một người bạn thân thiện. Cứ tán gẫu."],pirate:["Hải tặc","Arr. Cái gì cũng là kho báu."],cat:["Mèo cáu kỉnh","Chẳng ấn tượng. Nhưng thương bạn lắm."],hype:["HLV cổ vũ","CỔ VŨ HẾT CỠ."],kids:["Trẻ em","Trong sáng, đơn giản, lấp lánh."],bard:["Thi sĩ","Kịch tính như sân khấu cổ."]},
 games:{mind:["Đọc suy nghĩ","Nghĩ về một thứ. Mình sẽ đoán."],riddle:["Đố vui","Câu đố kinh điển, 3 lượt mỗi câu."],emoji:["Đoán thành ngữ","Đoán câu từ emoji."],wyr:["Bạn chọn gì","Lựa chọn trớ trêu, buồn cười."],story:["Nối truyện","Cùng viết một câu chuyện ngớ ngẩn."],hotcold:["Nóng hay lạnh","Đoán số từ 1 đến 100."],rate:["Chấm điểm mọi thứ","Mình chấm lý do, ý tưởng, bộ đồ của bạn."],truth:["Thật hay thách","An toàn, vui, không làm ai xấu hổ."],party:["Chế độ tiệc","Chuyền điện thoại. 2+ người, tính điểm."],decide:["Chọn giùm tôi","Phân vân? Mình chọn thật kịch tính."],eight:["Quả cầu số 8","Hỏi có/không, trả lời vũ trụ."],cookie:["Bánh may mắn","Bẻ một cái ra xem."],ice:["Hỏi tôi đi","Mình hỏi bạn câu hỏi vui."],joke:["Máy kể chuyện cười","Chơi chữ bất tận."]},
 chips:{bedtime:"Kể truyện ngủ",joke:"Kể chuyện cười",wish:"Ước một điều",fortune:"Xem bói cho tôi",compliment:"Khen tôi đi",roast:"Cà khịa tôi (nhẹ thôi)",pep:"Động viên tôi",ask:"Hỏi tôi gì đó",game:"Chơi trò chơi",yes:"Có",no:"Không",stop:"Dừng",hint:"Gợi ý",skip:"Bỏ qua",a:"Lựa chọn A",b:"Lựa chọn B",truth:"Thật",dare:"Thách",done:"Xong ✅ +1",scores:"Bảng điểm",another:"Thêm cái nữa",vent:"Tôi muốn tâm sự"},
 s:{
  greet:["Chào {n}! Chào mừng đến gian hàng duy nhất nơi đồ ăn vặt là tưởng tượng còn câu đùa là thật.","Xin chào {n}! Oracle đã thức dậy và hơi bị thừa cà phê.","Hế lô {n}! Mình đợi bạn cả ngày. À, từ lúc bạn mở trang thôi."],greetQ:"Hôm nay của bạn thế nào, trên thang điểm từ 1 đến trà sữa?",
  jokes:["Tại sao bộ xương không bao giờ đánh nhau? Vì nó không có gan.","Con gì đầu dê mình ốc? Con dốc.","Cái gì càng chơi càng ra nước? Cờ tướng.","Bác sĩ bảo mình nên ăn nhiều rau xanh. Nên mình ăn kẹo dẻo màu xanh.","Mình đọc một cuốn sách về chống trọng lực. Không thể đặt nó xuống được.","Máy tính bảo nó cần nghỉ ngơi. Thế là nó… đi ngủ đông luôn.","Tại sao quyển sách toán buồn? Vì nó có quá nhiều vấn đề.","Con heo đi học về khoe được điểm 10. Mẹ hỏi môn gì? Môn ăn.","Tại sao cà chua đỏ mặt? Vì nó thấy nước sốt salad.","Con gì càng lớn càng nhỏ? Con cua: càng nó to, chứ người nó nhỏ."],
  jokeQ:["Chấm câu đùa đó từ 1 đến 10 đi. Nhẹ tay nha.","Nghe thêm không, hay bạn có câu nào kể mình nghe?","Câu đó được tiếng cười hay tiếng thở dài?"],
  grant:"Chấp thuận! {w}, {t}.",twists:["nhưng chỉ có hiệu lực vào thứ Ba","nhưng mỗi lần thành công sẽ có tiếng kèn kazoo vang lên","nhưng một chú bồ câu rất lịch sự sẽ đi theo bạn một tuần","nhưng bạn phải hô 'ta-da!' mỗi lần nó xảy ra","nhưng nó được giao trong một cái hộp to quá khổ","nhưng kèm theo một bộ ria mép nhỏ xíu không gỡ ra được","nhưng tất của bạn sẽ không bao giờ cùng đôi nữa","nhưng một con ngỗng sẽ nhận hết công","và quà tặng kèm: ổ bánh mì tiếp theo của bạn sẽ hoàn hảo"],
  real:["Nói thật nhé: bước đầu tiên nhỏ hơn bạn nghĩ đấy.","Nói thật nhé: bạn gần điều đó hơn bạn tưởng.","Nói thật nhé: bước nhỏ mỗi ngày thắng kế hoạch to 'một ngày nào đó'."],wishQ:"Tuần này bạn có thể làm một bước nhỏ nào để tiến gần hơn?",
  comfort:["Gửi bạn một (1) cái ôm ảo khẩn cấp. Không nhận trả lại.","Ngày tệ giống kiểu tóc hỏng: phiền, tạm thời, và sau này thành chuyện vui để kể.","Bạn đang làm tốt hơn bạn nghĩ đấy. Bạn còn đang nói chuyện với một cái máy bói, rất là dũng cảm.","Mặt trăng còn có lúc khuyết. Bạn được phép có một ngày mờ mờ."],comfortQ:"Bạn muốn nghe đùa, được cổ vũ, hay chỉ muốn tâm sự? Mình đang lắng nghe.",
  happy:["Năng lượng tuyệt quá! Mình đang nhảy điệu mừng chiến thắng.","Tin vui! Pháo giấy: đã bắn.","Đó là điều hay nhất mình nghe hôm nay."],happyQ:"Điều gì làm nó tuyệt vậy?",
  thanks:["Không có chi! Tiền boa không bắt buộc, nhưng lời khen thì nhận nha."],thanksQ:"Còn gì đang lởn vởn trong cái đầu thông minh đó không?",
  fortunes:["Sắp có một món ăn vặt bất ngờ đến với bạn. Hãy nhận lấy.","Điều tốt đang đến. Vài điều trong đó là trà sữa.","Ý tưởng hay tiếp theo sẽ đến khi bạn đang tắm. Chuẩn bị bút sẵn nha.","Tuần này bạn sẽ tìm lại thứ tưởng đã mất. Có thể là động lực.","Hôm nay bạn sẽ cười to đến mức suýt sặc. Chuẩn bị khăn giấy."],fortuneQ:"Bạn tin vào may mắn, hay tự tạo ra may mắn?",
  compliments:["Bạn có năng lượng của một sáng thứ Bảy không có báo thức.","Nụ cười của bạn chắc làm Wi-Fi mạnh hơn.","Bạn là kiểu người mà chó mèo đều tin ngay lập tức.","Bạn làm một ngày thứ Ba bình thường trông như lễ hội."],
  roasts:["Bạn bấm báo lại nhiều đến mức cái báo thức xin nghỉ hưu.","Lịch sử tìm kiếm của bạn chắc đang cần một kỳ nghỉ.","Bạn mở tủ lạnh 10 lần mong có đồ ăn mới xuất hiện. Mình hiểu mà.","Bạn gõ 'haha' với khuôn mặt hoàn toàn nghiêm túc."],
  pep:["Bạn đã vượt qua 100% những ngày tệ nhất của mình. Thành tích hoàn hảo.","Không cần hoàn hảo, chỉ cần bắt đầu. Mình tin bạn.","Hít sâu. Bạn làm được. Rồi tự thưởng một món ngon.","Bạn của tương lai đã tự hào về điều bạn sắp làm rồi."],afterQ:"Thêm một câu nữa không?",
  answers:["Chắc chắn là có. Các vì sao, mặt trăng và cái máy nướng bánh đều đồng ý.","Hmm, mình nói không, nhưng vibe nói có.","Có, nhưng chỉ khi bạn vừa làm vừa ngân nga.","Hỏi lại sau khi ăn vặt nhé.","Câu trả lời là 42. Câu hỏi thì sai.","Rõ ràng đó là một củ khoai tây đang cải trang.","Một con gấu mèo mặc áo khoác. Lúc nào cũng là gấu mèo mặc áo khoác.","Ngay sau bữa ăn vặt tiếp theo của bạn."],
  why:["Vì vũ trụ hết ý tưởng khác rồi.","Các nhà khoa học đồng ý: 40% trọng lực, 60% là vibe.","Vì một chú sóc đã ký duyệt từ năm 1987 và chẳng ai kiểm tra lại.","Chủ yếu vì chưa ai bảo nó đừng làm vậy."],
  follow:["Tới lượt bạn: điều hay nhất hôm nay của bạn là gì?","Mình tò mò ghê, sao bạn lại nghĩ tới chuyện đó?","Hỏi nhanh: mèo hay chó?","Kể mình nghe điều gì đó làm mình cười đi.","Nếu dịch chuyển tức thời được 10 phút, bạn đi đâu?","Thật lòng đi, hôm nay bạn ăn vặt mấy lần rồi?"],
  ice:["Nếu bạn là một món ăn vặt, bạn sẽ là món gì?","Điều nhỏ nào làm bạn cười tuần này?","Nếu động vật biết nói, con nào sẽ bất lịch sự nhất?","Tên siêu anh hùng của bạn sẽ là gì?","Tài lẻ vô dụng nhất của bạn là gì?","Nếu được đổi tên thứ Hai, bạn sẽ gọi nó là gì?","Món nào bạn có thể ăn mỗi ngày mãi mãi?","Đồ vật nào trong nhà sẽ thắng nếu đánh nhau?","Nếu đời bạn có nhạc nền, nó sẽ nghe thế nào?"],
  react:["Câu trả lời đó vừa giúp bạn kiếm 7 điểm tưởng tượng.","Táo bạo. Bất ngờ. Mình tôn trọng.","Mình ghi câu đó vào Sổ Câu Trả Lời Xuất Sắc rồi.","Không biết là thiên tài hay hỗn loạn. Có khi cả hai.","Mạch điện của mình đang nhún nhảy vui vẻ."],
  eight:["Chắc chắn rồi. Chắc đến mức đáng ngờ.","Uống ngụm nước rồi hỏi lại nhé.","Nguồn tin của mình nói không. Nguồn tin là bồ câu.","Có, nhất định rồi, thêm phô mai.","Chưa nói được đâu. Bí mật!","Dấu hiệu nói có. Dấu hiệu được vẽ tay."],
  nameSet:"Rất vui được gặp {n}! Mình sẽ nhớ tên đó. Mình dở nhớ tên lắm, nhưng giỏi nhớ đồ ăn.",likeAck:"Đã ghi nhớ: bạn thích {x}. Gu xịn đấy!",likeQ:"Bạn từng nói bạn thích {x}. Kể thêm cho mình nghe đi?",
  welcome:"Chào mừng đến Funhouse{n}! Hỏi gì cũng được, ước một điều, hoặc chọn trò chơi. Mình trả lời theo tính cách bạn chọn ở trên.",moodQ:"Trước tiên: hôm nay của bạn thế nào?",
  moods:{"😄":["Bạn đang toả sáng! Giữ phong độ nhé.","Kể mình nghe phần hay nhất hôm nay!"],"🙂":["Một ngày ổn áp. Thêm món ăn vặt là thành tuyệt vời.","Điều gì sẽ biến nó thành điểm 10?"],"😐":["Một ngày 'bình thường'. Để mình sửa.","Đỡ hơn chưa, dù chỉ chút xíu?"],"😕":["Không phải ngày đẹp nhất. Không sao đâu.","Muốn nghe đùa, chơi game hay được cổ vũ?"],"😫":["Ôi, mệt nhỉ. Gửi bạn cái ôm ảo khổng lồ.","Muốn tâm sự, hay muốn mình làm trò ngớ ngẩn cho bạn quên đi?"]},
  modeSwitch:["Đã đổi chế độ!","Mở khoá tính cách mới.","Thay trang phục xong."],modeNow:"Giờ mình là {m}.",
  lucky:" Số may mắn hôm nay: ",grade:["Điểm cho câu hỏi: B+ vì nhiệt tình.","Điểm: A- (trừ điểm vì quá vui).","Điểm: C, gặp thầy sau giờ học."],ventOk:"Mình đang nghe đây. Cứ nói hết ra. Không phán xét, chỉ gật gù.",
  open:{comic:["Rồi rồi rồi. ","Chuẩn bị nha. "],genie:["*BÙM* ","*một làn khói lấp lánh* "],fortune:["Quả cầu pha lê đang xoay… ","Các linh hồn thì thầm… "],prof:["Ghi vào biên bản: ","Chú ý. "],free:["",""],pirate:["Arr! ","Yo ho! "],cat:["*ngáp* ","haizz. "],hype:["QUÁ ĐỈNH! ","LÊN NÀO! "],kids:["Ồ hay quá! ","Yay! "],bard:["Nghe đây! ","Hỡi ôi! "]},
  close:{pirate:["Yo ho ho.","*vẹt kêu quác quác*"],cat:["giờ để ta ngủ.","*đẩy cái cốc của bạn rơi xuống*"],hype:["BẠN LÀM ĐƯỢC!","TỰ HÀO VỀ BẠN!"],kids:["🌈","⭐","🦄"],bard:["*cúi chào*","Hoan hô!"]},
  re:{hi:/^(chào|xin chào|hello|hi|hế lô|alo)/i,joke:/(đùa|hài|cười|chuyện vui|joke)/i,wish:/(ước|mong|muốn|hy vọng|hi vọng)/i,
   wishStrip:/^.*?(ước gì|ước là|tôi ước|mình ước|em ước|ước|mong là|mong|muốn|hy vọng|hi vọng)\s*/i,sad:/(buồn|chán đời|mệt|căng thẳng|lo lắng|cô đơn|khóc|tức|stress|áp lực)/i,
   happy:/(vui|tuyệt|đỉnh|hạnh phúc|phấn khích|yay)/i,thanks:/(cảm ơn|cám ơn|thanks)/i,fortune:/(bói|tương lai|vận mệnh|số phận|tử vi|may mắn)/i,
   name:/(?:tên (?:tôi|mình|em|anh|chị) là|gọi (?:tôi|mình|em|anh|chị) là)\s+([^\s,.!?]+)/i,like:/(?:tôi|mình|em|anh|chị) (?:rất |cực |siêu )?(?:thích|mê|yêu)\s+([^.!?,]{2,30})/i,
   q:/(\?|sao|thế nào|làm sao|có nên|có phải|bao giờ|ở đâu|ai|gì|không\?)/i,why:/(tại sao|vì sao|sao)/i,comp:/(khen)/i,roast:/(cà khịa|chọc|roast)/i,pep:/(động viên|cổ vũ|tiếp thêm)/i}
 },
 g:{over:"Hết game! Vui ghê.",playOther:"Muốn chơi trò khác, hay tán gẫu tiếp?",stopped:"Ok, dừng game. Niềm vui không hoàn lại.",
  wyrIntro:"Bạn chọn gì! ",wyrNext:"Câu tiếp! ",wyrQ:"Bạn thà {a}, hay {b}?",wyrPick:"Bạn chọn {c}? {r} {p}% người chơi tưởng tượng đồng ý.",wyrReact:["Lựa chọn táo bạo.","Hỗn loạn, nhưng mình tôn trọng.","Mình cũng chọn vậy. Chắc thế.","Thú vị. Rất thú vị."],
  wyr:[["có tóc bằng mì spaghetti","đổ mồ hôi ra siro"],["nói giọng hải tặc mãi mãi","hát mọi câu bạn nói"],["đấu với một con vịt to bằng con ngựa","đấu với 100 con ngựa to bằng con vịt"],["nói chuyện được với động vật","nói được mọi ngôn ngữ"],["sống trong nhà trên cây","sống trong tàu ngầm"],["bỏ internet","bỏ trà sữa"],["hắt hơi ra kim tuyến","ợ ra bong bóng"],["có nhạc nền mỗi khi bước vào phòng","có tiếng cười nền mỗi khi bạn kể chuyện"]],
  tdIntro:"Thật hay thách? Chọn khôn ngoan nhé.",truthP:"Thật: ",dareP:"Thách: ",
  truths:["Món ăn kết hợp kỳ quặc nhất mà bạn lén thích là gì?","Bài hát 'quê' nhất mà bạn thuộc hết lời là gì?","Nỗi sợ ngớ ngẩn nào bạn vẫn còn?","Chuyện buồn cười nhất bạn làm hồi nhỏ là gì?"],
  dares:["Gõ tin nhắn tiếp theo mà nhắm mắt.","Mô tả ngày hôm nay như trailer phim bom tấn.","Khen to đồ vật gần bạn nhất.","Viết một bài thơ 2 câu về đôi tất.","Gửi mình tiếng cười phản diện hay nhất của bạn bằng chữ."],
  eightIntro:"Lắc quả cầu số 8! Hỏi mình một câu có/không.",askAgain:"Hỏi tiếp đi!",cookie:"*rắc* 🥠 ",cookieMore:"Thêm một cái bánh nữa không?",
  iceIntro:"Phỏng vấn nào! Mình hỏi, bạn trả lời.",iceNext:"Ok, câu tiếp: ",iceEnd:"Phỏng vấn xong. Bạn đậu với điểm số rất ngon.",
  decIntro:"Chọn giùm tôi! Gõ các lựa chọn, cách nhau bằng dấu phẩy hoặc chữ 'hay'. Ví dụ: phở, bún bò, cơm tấm",decNeed:"Cho mình ít nhất 2 lựa chọn, ví dụ: ngủ hay ăn",decPick:"Sau khi hỏi ý kiến 3 con mèo và 1 quả cầu pha lê… câu trả lời là: {x}! ",decWhy:["Nó có vibe tốt nhất.","Mấy lựa chọn kia tự biết mình thua.","Một chú bồ câu đã gật đầu.","Tin Oracle đi. Phần lớn là vậy."],decAgain:"Cần chọn thêm gì nữa không?",
  partyIntro:"Chế độ tiệc! Gõ tên 2 người chơi trở lên, cách nhau bằng dấu phẩy.",partyNeed:"Cần ít nhất 2 tên, ví dụ: An, Minh, Linh",partyStart:"Chào mừng {p}! Làm nhiệm vụ rồi bấm Xong để được điểm, hoặc Bỏ qua.",
  partyTurn:"🎉 Tới lượt {p}! {task}",partyTasks:["Thật: {truth}","Thách: {dare}","Bạn thà {a}, hay {b}? Giải thích đi!","Trả lời: {ice}","Bắt chước một người trong phòng (dễ thương thôi).","Kể một câu đùa. Ai cười là bạn được điểm.","Hát 10 giây về người ngồi bên trái bạn."],
  partyScores:"Bảng điểm: {s}",partyWin:"🏆 Người thắng: {w}! Tiệc tàn, các huyền thoại.",
  hcIntro:"Mình đang nghĩ một số từ 1 đến 100.",hcAsk:"Bạn đoán số mấy?",hcNum:"Chỉ số thôi nha. Chú lùn toán học của mình khó tính lắm.",hcHeat:["🔥 Nóng bỏng tay!","♨️ Nóng!","🌤️ Ấm.","❄️ Lạnh.","🧊 Lạnh cóng. Chim cánh cụt đang ghé thăm."],hcHi:"Cao hơn.",hcLo:"Thấp hơn.",hcWin:"ĐÚNG RỒI! Là {n}. Bạn đoán trúng sau {t} lần!",
  dailyIntro:"📅 Câu đố hôm nay (tiếng Anh)! Giải để giữ chuỗi ngày.",dailyWin:"Đã giải câu đố hôm nay! Chuỗi: {s} ngày. Hẹn mai nhé.",dailyDone:"Bạn đã giải câu đố hôm nay rồi. Mai có câu mới!",
  ynOnly:"Chỉ có hoặc không thôi nha. Mũ đọc suy nghĩ của mình rất cứng nhắc."}
},

es:{
 ui:{tagline:"Pregunta · recibe alegría",tChat:"Chat",tGames:"Juegos",tWish:"Deseo",tMe:"Yo",ph:"Pregunta, pide un deseo o di hola…",send:"ENVIAR",
  gTitle:"Juegos arcade",gSub:"Elige uno y el Oráculo lo juega contigo en el chat. Funciona sin conexión.",daily:"Acertijo del día",dailyD:"Un acertijo nuevo cada día. Mantén tu racha.",dailyDone:"Resuelto hoy ✓ Vuelve mañana.",
  wTitle:"La ranura de deseos",wSub:"Pide un deseo. El Genio lo concede, con un giro, y te imprime una tarjeta.",wLabel:"Tu deseo",wPh:"Deseo que mi tarea se haga sola…",grant:"Conceder deseo",surprise:"Sorpréndeme",jar:"Frasco de deseos",jarEmpty:"Tus deseos concedidos aparecen aquí.",
  mTitle:"Ajustes y estadísticas",mSub:"Todo se guarda solo en este navegador.",langL:"Idioma",langN:"Auto detecta el idioma en que escribes. Respuestas offline completas en English, Tiếng Việt, Español, Français y 中文. Carga el cerebro IA para chatear en cualquier idioma.",
  nameL:"¿Cómo te llamo?",nameP:"Tu nombre o apodo",spice:"Nivel de picante",sp0:"Suave",sp1:"Tonto",sp2:"Desatado",spN:"Desatado sigue siendo limpio. Solo más raro.",
  voice:"Leer respuestas en voz alta",voiceN:"Cada modo tiene su propia voz, en tu idioma.",sound:"Sonidos arcade",soundN:"Dings, blips y una mini fanfarria.",
  custom:"Crea tu propio personaje",cEmoji:"Emoji",cName:"Nombre",cDesc:"Personalidad",cCatch:"Frase típica",cSave:"Guardar personaje",cDel:"Borrar",cNote:"Tu personaje aparece en la barra de modos. Con el cerebro IA lo interpreta por completo.",
  brain:"Cerebro IA",brainN:"Spark es el cerebro offline integrado: instantáneo, sin descarga, funciona en cualquier móvil. Carga un modelo IA real para charlar libremente en cualquier idioma.",model:"Modelo",load:"Cargar cerebro IA",spark:"Usar Spark",
  bNoGpu:"Este navegador no tiene WebGPU, así que el cerebro IA no puede funcionar aquí. Spark sigue funcionando.",bErr:"No se pudo descargar el cerebro IA en esta página. En la vista previa de Claude las descargas externas están bloqueadas. Publica la página en tu propio sitio (Netlify, GitHub Pages, Vercel) y funcionará.",
  bReady:"Cerebro IA listo",bLoading:"Cargando…",mem:"Lo que recuerda el Oráculo",memEmpty:"Di 'me gusta…' y el Oráculo lo recordará.",memClear:"Olvidar todo",
  favs:"Respuestas favoritas",favEmpty:"Toca ⭐ en una respuesta para guardarla aquí.",stats:"Tus estadísticas de alegría",badges:"Insignias",copy:"Copiar chat",clear:"Borrar chat",
  stL:"Risas",stM:"Mensajes",stW:"Deseos",stS:"Racha",friend:"amigo",copied:"Copiado",copyFail:"No se pudo copiar. Selecciona el texto.",cardHint:"Mantén pulsada la tarjeta o haz clic derecho para guardarla.",copyText:"Copiar texto",
  oracleSays:"EL ORÁCULO DICE",youAsked:"PREGUNTASTE",laughLog:"¡Risa registrada!",saved:"Guardado en favoritos",badge:"Insignia desbloqueada",micOff:"El micrófono no está disponible aquí. Funciona cuando publicas la página tú mismo.",
  needPack:"",addChar:"Crear",remove:"Quitar",sparkOn:"Usando Spark, el cerebro offline",charSaved:"Personaje guardado",nameHi:"¡Hola, {n}!"},
 modes:{comic:["Comediante","Juegos de palabras sin vergüenza."],genie:["Genio","Concede deseos. Siempre con giro."],fortune:["Adivina","Profecías tontas, números de la suerte."],prof:["Profesor estricto","Muy serio. Gracioso sin querer."],free:["Charla libre","Un amigo simpático."],pirate:["Pirata","Arr. Todo es tesoro."],cat:["Gato gruñón","Nada le impresiona. Te quiere en secreto."],hype:["Coach motivador","¡MOTIVACIÓN MÁXIMA!"],kids:["Niños","Sano, simple, brillante."],bard:["Bardo","Dramático como el teatro antiguo."]},
 games:{mind:["Lector de mentes","Piensa en algo. Lo adivino."],riddle:["Acertijos","Clásicos, 3 intentos."],emoji:["Frases emoji","Adivina la frase."],wyr:["¿Qué prefieres?","Elecciones absurdas."],story:["Cadena de historia","Una historia tonta juntos."],hotcold:["Frío o caliente","Adivina mi número 1-100."],rate:["Califica lo que sea","Puntúo tu excusa o idea."],truth:["Verdad o reto","Seguro y divertido."],party:["Modo fiesta","Pasa el móvil. 2+ jugadores."],decide:["Decide por mí","Elijo con drama."],eight:["Bola 8 mágica","Respuestas cósmicas."],cookie:["Galleta de la suerte","Ábrela."],ice:["Pregúntame","Te hago preguntas divertidas."],joke:["Máquina de chistes","Chistes sin fin."]},
 chips:{bedtime:"Cuento para dormir",joke:"Cuéntame un chiste",wish:"Pedir un deseo",fortune:"Lee mi futuro",compliment:"Hazme un cumplido",roast:"Búrlate de mí (suave)",pep:"Anímame",ask:"Pregúntame algo",game:"Jugar",yes:"Sí",no:"No",stop:"Parar",hint:"Pista",skip:"Saltar",a:"Opción A",b:"Opción B",truth:"Verdad",dare:"Reto",done:"Hecho ✅ +1",scores:"Puntos",another:"Otro",vent:"Quiero desahogarme"},
 s:{
  greet:["¡Hola, {n}! Bienvenido al único puesto donde los snacks son imaginarios y los chistes son reales.","¡Hola, {n}! El Oráculo está despierto y con demasiado café."],greetQ:"Dime, ¿cómo va tu día en una escala del 1 a la pizza?",
  jokes:["¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.","¿Por qué los esqueletos no pelean? Porque no tienen agallas.","¿Qué hace una abeja en el gimnasio? ¡Zum-ba!","¿Cuál es el café más peligroso del mundo? El ex-preso.","¿Qué le dijo un techo a otro techo? Techo de menos.","¿Por qué el libro de matemáticas está triste? Porque tiene muchos problemas.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué le dice un jardinero a otro? Disfrutemos mientras podamos."],
  jokeQ:["Califica ese chiste del 1 al 10. Sé amable.","¿Otro, o tienes uno para mí?"],
  grant:"¡Concedido! {w}, {t}.",twists:["pero solo funciona los martes","pero cada vez sonará un kazoo cerca","pero una paloma muy educada te seguirá una semana","pero debes gritar '¡tachán!' cada vez","pero llega en una caja demasiado grande","pero tus calcetines nunca volverán a combinar","y de regalo, tu próximo sándwich será perfecto"],
  real:["En serio: el primer paso es más pequeño de lo que crees.","En serio: estás más cerca de lo que parece.","En serio: pasos pequeños diarios ganan a planes enormes de 'algún día'."],wishQ:"¿Qué pasito podrías dar esta semana?",
  comfort:["Te envío un (1) abrazo virtual de emergencia. Sin devoluciones.","Los días malos son como un mal corte de pelo: molestos, temporales y buenas historias después.","Lo estás haciendo mejor de lo que crees."],comfortQ:"¿Quieres un chiste, ánimo o solo desahogarte? Soy todo oídos.",
  happy:["¡Qué energía! Estoy bailando en binario.","¡Buenas noticias! Cañones de confeti: disparados."],happyQ:"¿Qué lo hizo tan bueno?",
  thanks:["¡De nada! La propina es opcional, los cumplidos se aceptan."],thanksQ:"¿Algo más dando vueltas en esa cabeza brillante?",
  fortunes:["Un snack sorpresa está en tu futuro cercano. Acéptalo.","Vienen cosas geniales. Algunas son pizza.","Tu próxima gran idea llegará en la ducha.","Esta semana encontrarás algo que creías perdido. Quizás tu motivación."],fortuneQ:"¿Crees en la suerte o la creas tú?",
  compliments:["Tienes la energía de un sábado sin despertador.","Tu sonrisa probablemente mejora el Wi-Fi.","Eres el tipo de persona en quien los perros confían al instante."],
  roasts:["Pospones tanto la alarma que se jubiló.","Abres la nevera diez veces esperando comida nueva. Te entiendo.","Escribes 'jajaja' con la cara completamente seria."],
  pep:["Has sobrevivido al 100% de tus peores días. Récord perfecto.","No hace falta ser perfecto, solo empezar. Creo en ti.","Respira. Tú puedes. Luego prémiate con un snack."],afterQ:"¿Otro?",
  answers:["Absolutamente sí. Las estrellas y mi tostadora están de acuerdo.","Mmm, yo digo que no, pero las vibras dicen que sí.","Sí, pero solo si lo haces tarareando.","Pregunta otra vez después de un snack.","La respuesta es 42. La pregunta estaba mal.","Claramente es una papa disfrazada."],
  why:["Porque el universo se quedó sin otras ideas.","Los científicos dicen: 40% gravedad, 60% vibras.","Porque una ardilla lo aprobó en 1987 y nadie lo revisó."],
  follow:["Tu turno: ¿qué fue lo mejor de tu día?","¿Qué te hizo pensar en eso?","Pregunta rápida: ¿gatos o perros?","Cuéntame algo que me haga reír.","Si pudieras teletransportarte 10 minutos, ¿adónde irías?"],
  ice:["Si fueras un snack, ¿cuál serías?","¿Qué cosa pequeña te hizo sonreír esta semana?","Si los animales hablaran, ¿cuál sería el más grosero?","¿Cuál sería tu nombre de superhéroe?","¿Cuál es tu talento más inútil?","¿Qué comida podrías comer cada día para siempre?"],
  react:["Esa respuesta te da 7 puntos imaginarios.","Audaz. Inesperado. Lo respeto.","Lo anoto en mi Libro de Respuestas Excelentes.","Es genio o caos. Quizás ambos."],
  eight:["Es seguro. Sospechosamente seguro.","Pregunta otra vez tras beber agua.","Mis fuentes dicen que no. Mis fuentes son palomas.","Sí, definitivamente, con queso extra."],
  nameSet:"¡Encantado, {n}! Lo recordaré.",likeAck:"Anotado: te gusta {x}. Excelente gusto.",likeQ:"Una vez me dijiste que te gusta {x}. ¿Me cuentas más?",
  welcome:"¡Bienvenido al Funhouse{n}! Pregúntame lo que sea, pide un deseo o elige un juego.",moodQ:"Primero: ¿cómo va tu día?",
  moods:{"😄":["¡Estás brillando!","¡Cuéntame lo mejor de hoy!"],"🙂":["Buen día. Un snack lo haría genial.","¿Qué lo haría un 10?"],"😐":["Un día 'meh'. Déjame arreglarlo.","¿Mejor? ¿Aunque sea un poquito?"],"😕":["No es tu mejor día. Está bien.","¿Un chiste, un juego o ánimo?"],"😫":["Uf. Día difícil. Abrazo virtual gigante.","¿Quieres desahogarte o que te distraiga con algo tonto?"]},
  modeSwitch:["¡Modo cambiado!","Nueva personalidad desbloqueada."],modeNow:"Ahora soy {m}.",
  lucky:" Tu número de la suerte hoy: ",grade:["Nota: B+ por entusiasmo.","Nota: A- (menos puntos por alegría).","Nota: C, venga a verme después de clase."],ventOk:"Te escucho. Suéltalo todo. Sin juicios.",
  open:{comic:["Bueno, bueno. ","Ahí va. "],genie:["*¡PUF!* ","*nube de brillantina* "],fortune:["La bola de cristal gira… ","Los espíritus susurran… "],prof:["Que conste en acta: ","Atención. "],free:["",""],pirate:["¡Arr! ","¡Yo ho! "],cat:["*bosteza* ","uf. "],hype:["¡VAMOOOS! ","¡CAMPEÓN! "],kids:["¡Oh! ","¡Yupi! "],bard:["¡Escuchad! ","¡Oh, cielos! "]},
  close:{pirate:["Yo ho ho.","*el loro grazna*"],cat:["ahora déjame dormir.","*tira tu vaso de la mesa*"],hype:["¡TÚ PUEDES!"],kids:["🌈","⭐"],bard:["*reverencia*"]},
  unknown:["¿{w}? Tengo sentimientos fuertes sobre {w}. Sobre todo confusión.","Ah, {w}. Un clásico. Lo pensaré en mi próxima siesta."],
  re:{hi:/^(hola|buenas|buenos días|hey|qué tal)/i,joke:/(chiste|gracioso|reír|broma)/i,wish:/(deseo|quiero|ojalá|espero)/i,wishStrip:/^.*?(deseo que|deseo|ojalá que|ojalá|quiero|espero que|espero)\s*/i,
   sad:/(triste|mal día|estresad|ansios|sol[oa]|llorar|enojad|deprimid|cansad)/i,happy:/(feliz|content|genial|increíble|emocionad)/i,thanks:/(gracias)/i,fortune:/(futuro|destino|suerte|horóscopo|predic)/i,
   name:/(?:me llamo|mi nombre es|llámame)\s+([^\s,.!?]+)/i,like:/(?:me gustan?|me encantan?|amo)\s+(?:el |la |los |las )?([^.!?,]{2,30})/i,q:/(\?|¿|por qué|cómo|cuándo|dónde|quién|qué)/i,why:/por qué/i,comp:/(cumplido|halág)/i,roast:/(búrlate|burla)/i,pep:/(anímame|ánimo|motiva)/i}
 },
 g:{over:"¡Fin del juego! Fue divertido.",playOther:"¿Jugamos otra cosa o charlamos?",stopped:"Vale, juego parado. La diversión no se devuelve.",
  wyrIntro:"¡Qué prefieres! ",wyrNext:"¡Siguiente! ",wyrQ:"¿Preferirías {a}, o {b}?",wyrPick:"¿Preferirías {c}? {r} El {p}% de jugadores imaginarios coincide.",wyrReact:["Elección audaz.","Caos, con respeto.","Yo habría elegido lo mismo. Creo."],
  wyr:[["tener espaguetis por pelo","sudar sirope"],["hablar como pirata siempre","cantar todo lo que dices"],["pelear con un pato del tamaño de un caballo","pelear con 100 caballos del tamaño de un pato"],["hablar con animales","hablar todos los idiomas"],["vivir en una casa del árbol","vivir en un submarino"],["estornudar purpurina","eructar burbujas"]],
  tdIntro:"¿Verdad o reto? Elige bien.",truthP:"Verdad: ",dareP:"Reto: ",
  truths:["¿Qué combinación rara de comida te encanta en secreto?","¿Qué canción vergonzosa te sabes entera?","¿Qué miedo tonto todavía tienes?"],
  dares:["Escribe tu próximo mensaje con los ojos cerrados.","Describe tu día como el tráiler de una película.","Haz un cumplido en voz alta al objeto más cercano.","Escribe un poema de 2 líneas sobre calcetines."],
  eightIntro:"¡Agita la bola 8 mágica! Hazme una pregunta de sí o no.",askAgain:"¡Pregunta otra!",cookie:"*crac* 🥠 ",cookieMore:"¿Otra galleta?",
  iceIntro:"¡Hora de la entrevista! Yo pregunto, tú respondes.",iceNext:"Vale, siguiente: ",iceEnd:"Entrevista terminada. Aprobado con snacks.",
  decIntro:"¡Decide por mí! Escribe opciones separadas por comas o 'o'. Ejemplo: pizza, sushi, tacos",decNeed:"Dame al menos dos opciones, como: siesta o snack",decPick:"Tras consultar a 3 gatos y 1 bola de cristal… la respuesta es: ¡{x}! ",decWhy:["Tiene las mejores vibras.","Las otras opciones sabían que perdían."],decAgain:"¿Otra decisión?",
  partyIntro:"¡Modo fiesta! Escribe 2 o más nombres separados por comas.",partyNeed:"Necesito al menos 2 nombres, como: Ana, Leo, Sofía",partyStart:"¡Bienvenidos, {p}! Haz tu tarea y toca Hecho para ganar un punto, o Saltar.",
  partyTurn:"🎉 ¡Turno de {p}! {task}",partyTasks:["Verdad: {truth}","Reto: {dare}","¿Preferirías {a}, o {b}? ¡Explica!","Responde: {ice}","Imita a alguien del grupo (con cariño).","Cuenta un chiste. Si alguien sonríe, ganas el punto."],
  partyScores:"Puntos: {s}",partyWin:"🏆 ¡Gana {w}! Fin de la fiesta, leyendas.",
  hcIntro:"Estoy pensando en un número del 1 al 100.",hcAsk:"¿Tu número?",hcNum:"Solo números, por favor.",hcHeat:["🔥 ¡Quemando!","♨️ ¡Caliente!","🌤️ Tibio.","❄️ Frío.","🧊 Congelado."],hcHi:"Más alto.",hcLo:"Más bajo.",hcWin:"¡SÍ! Era {n}. ¡Lo lograste en {t} intentos!",
  dailyIntro:"📅 ¡Acertijo del día (en inglés)! Resuélvelo para mantener la racha.",dailyWin:"¡Acertijo resuelto! Racha: {s} día(s).",dailyDone:"Ya resolviste el de hoy. ¡Mañana hay otro!",ynOnly:"Solo sí o no, por favor."}
},

fr:{
 ui:{tagline:"Une question · de la joie",tChat:"Chat",tGames:"Jeux",tWish:"Vœu",tMe:"Moi",ph:"Pose une question, fais un vœu, ou dis bonjour…",send:"ENVOI",
  gTitle:"Jeux d'arcade",gSub:"Choisis-en un, l'Oracle le joue avec toi dans le chat. Marche hors ligne.",daily:"Énigme du jour",dailyD:"Une nouvelle énigme chaque jour. Garde ta série.",dailyDone:"Résolue aujourd'hui ✓ Reviens demain.",
  wTitle:"La fente à vœux",wSub:"Fais un vœu. Le Génie l'exauce, avec un twist, et t'imprime une carte.",wLabel:"Ton vœu",wPh:"Je souhaite que mes devoirs se fassent tout seuls…",grant:"Exaucer mon vœu",surprise:"Surprends-moi",jar:"Bocal à vœux",jarEmpty:"Tes vœux exaucés arrivent ici.",
  mTitle:"Réglages et stats",mSub:"Tout est enregistré uniquement dans ce navigateur.",langL:"Langue",langN:"Détecte automatiquement ta langue. Réponses hors ligne complètes en English, Tiếng Việt, Español, Français et 中文. Charge le cerveau IA pour discuter dans toutes les langues.",
  nameL:"Comment l'Oracle doit-il t'appeler ?",nameP:"Ton prénom ou surnom",spice:"Niveau de piquant",sp0:"Doux",sp1:"Rigolo",sp2:"Déjanté",spN:"Déjanté reste propre. Juste plus bizarre.",
  voice:"Lire les réponses à voix haute",voiceN:"Chaque mode a sa voix, dans ta langue.",sound:"Sons d'arcade",soundN:"Dings, bips et petite fanfare.",
  custom:"Crée ton personnage",cEmoji:"Emoji",cName:"Nom",cDesc:"Personnalité",cCatch:"Phrase culte",cSave:"Enregistrer",cDel:"Supprimer",cNote:"Ton personnage apparaît dans la barre des modes. Avec le cerveau IA, il joue pleinement le rôle.",
  brain:"Cerveau IA",brainN:"Spark est le cerveau hors ligne intégré : instantané, sans téléchargement. Charge un vrai modèle IA pour discuter librement dans toutes les langues.",model:"Modèle",load:"Charger le cerveau IA",spark:"Utiliser Spark",
  bNoGpu:"Ce navigateur n'a pas WebGPU, le cerveau IA ne peut pas tourner ici. Spark continue.",bErr:"Le cerveau IA n'a pas pu se télécharger ici. Dans l'aperçu Claude, les téléchargements externes sont bloqués. Héberge la page sur ton site (Netlify, GitHub Pages, Vercel) et ça marche.",
  bReady:"Cerveau IA prêt",bLoading:"Chargement…",mem:"Ce dont l'Oracle se souvient",memEmpty:"Dis « j'aime… » et l'Oracle s'en souviendra.",memClear:"Tout oublier",
  favs:"Réponses favorites",favEmpty:"Touche ⭐ sur une réponse pour la garder ici.",stats:"Tes stats de joie",badges:"Badges",copy:"Copier le chat",clear:"Effacer le chat",
  stL:"Rires",stM:"Messages",stW:"Vœux",stS:"Série",friend:"l'ami",copied:"Copié",copyFail:"Copie bloquée. Sélectionne le texte.",cardHint:"Appui long ou clic droit sur la carte pour l'enregistrer.",copyText:"Copier le texte",
  oracleSays:"L'ORACLE DIT",youAsked:"TU AS DEMANDÉ",laughLog:"Rire enregistré !",saved:"Ajouté aux favoris",badge:"Badge débloqué",micOff:"Le micro n'est pas disponible ici. Il marche quand tu héberges la page toi-même.",
  needPack:"",addChar:"Créer",remove:"Retirer",sparkOn:"Spark, le cerveau hors ligne, est actif",charSaved:"Personnage enregistré",nameHi:"Salut, {n} !"},
 modes:{comic:["Humoriste","Jeux de mots sans honte."],genie:["Génie","Exauce les vœux, avec un twist."],fortune:["Voyante","Prophéties loufoques, chiffres porte-bonheur."],prof:["Prof sévère","Très sérieux. Drôle malgré lui."],free:["Discussion libre","Un pote sympa."],pirate:["Pirate","Arr. Tout est un trésor."],cat:["Chat grincheux","Pas impressionné. T'aime en secret."],hype:["Coach survolté","MOTIVATION MAXIMALE."],kids:["Enfants","Doux, simple, pétillant."],bard:["Barde","Théâtral à souhait."]},
 games:{mind:["Lecteur de pensées","Pense à quelque chose. Je devine."],riddle:["Énigmes","Classiques, 3 essais."],emoji:["Expressions emoji","Devine l'expression."],wyr:["Tu préfères","Choix absurdes."],story:["Histoire à relais","Une histoire loufoque à deux."],hotcold:["Chaud ou froid","Devine mon nombre 1-100."],rate:["Note n'importe quoi","Je note ton excuse ou ton idée."],truth:["Action ou vérité","Sans humiliation."],party:["Mode soirée","Passe le téléphone. 2+ joueurs."],decide:["Décide pour moi","Je choisis avec drame."],eight:["Boule magique 8","Réponses cosmiques."],cookie:["Biscuit chinois","Casse-le."],ice:["Pose-moi des questions","Je te pose des questions fun."],joke:["Machine à blagues","Blagues sans fin."]},
 chips:{bedtime:"Histoire du soir",joke:"Raconte une blague",wish:"Faire un vœu",fortune:"Prédis mon avenir",compliment:"Fais-moi un compliment",roast:"Taquine-moi (gentiment)",pep:"Motive-moi",ask:"Pose-moi une question",game:"Jouer",yes:"Oui",no:"Non",stop:"Stop",hint:"Indice",skip:"Passer",a:"Option A",b:"Option B",truth:"Vérité",dare:"Action",done:"Fait ✅ +1",scores:"Scores",another:"Une autre",vent:"Je veux vider mon sac"},
 s:{
  greet:["Salut {n} ! Bienvenue dans le seul stand où les snacks sont imaginaires et les blagues sont vraies.","Bonjour {n} ! L'Oracle est réveillé et un peu trop caféiné."],greetQ:"Alors, ta journée, sur une échelle de 1 à croissant ?",
  jokes:["Pourquoi les plongeurs plongent-ils en arrière ? Parce que sinon ils tombent dans le bateau.","Quel est le comble pour un électricien ? Ne pas être au courant.","Qu'est-ce qui est jaune et qui attend ? Jonathan.","Pourquoi les squelettes ne se battent jamais ? Ils n'ont pas de tripes.","Que dit un escargot sur le dos d'une tortue ? Youpiii !","Quel est le comble pour un jardinier ? Raconter des salades.","Pourquoi le livre de maths est triste ? Il a trop de problèmes."],
  jokeQ:["Note cette blague de 1 à 10. Sois gentil.","Une autre, ou tu en as une pour moi ?"],
  grant:"Accordé ! {w}, {t}.",twists:["mais seulement le mardi","mais un kazoo joue à chaque fois","mais un pigeon très poli te suivra pendant une semaine","mais tu dois crier « ta-da ! » à chaque fois","mais ça arrive dans un carton beaucoup trop grand","mais tes chaussettes ne seront plus jamais assorties","et en bonus, ton prochain sandwich sera parfait"],
  real:["Sérieusement : le premier pas est plus petit que tu ne le crois.","Sérieusement : tu es plus proche que tu ne le penses.","Sérieusement : de petits pas chaque jour battent les grands plans « un jour »."],wishQ:"Quel petit pas pourrais-tu faire cette semaine ?",
  comfort:["Je t'envoie un (1) câlin virtuel d'urgence. Non remboursable.","Les mauvais jours, c'est comme une coupe ratée : agaçant, temporaire, et une bonne histoire plus tard.","Tu t'en sors mieux que tu ne le penses."],comfortQ:"Une blague, un petit discours motivant, ou juste vider ton sac ? Je t'écoute.",
  happy:["Quelle énergie ! Je danse en binaire.","Bonne nouvelle ! Canons à confettis : tirés."],happyQ:"Qu'est-ce qui l'a rendu si bien ?",
  thanks:["Avec plaisir ! Le pourboire est facultatif, les compliments acceptés."],thanksQ:"Autre chose dans cette tête brillante ?",
  fortunes:["Un snack surprise arrive dans ton futur proche. Accepte-le.","De belles choses arrivent. Certaines sont des pizzas.","Ta prochaine grande idée viendra sous la douche.","Cette semaine, tu retrouveras quelque chose de perdu. Peut-être ta motivation."],fortuneQ:"Tu crois à la chance, ou tu la fabriques ?",
  compliments:["Tu as l'énergie d'un samedi matin sans réveil.","Ton sourire améliore sûrement le Wi-Fi.","Tu es le genre de personne à qui les chiens font confiance tout de suite."],
  roasts:["Tu repousses tellement ton réveil qu'il a pris sa retraite.","Tu ouvres le frigo dix fois en espérant de la nouvelle nourriture. Pareil.","Tu écris « mdr » avec un visage totalement sérieux."],
  pep:["Tu as survécu à 100 % de tes pires journées. Record parfait.","Pas besoin d'être parfait, juste de commencer. Je crois en toi.","Respire. Tu vas y arriver. Puis récompense-toi."],afterQ:"Une autre ?",
  answers:["Absolument oui. Les étoiles et mon grille-pain sont d'accord.","Hmm, moi je dis non, mais les vibes disent oui.","Oui, mais seulement en fredonnant.","Redemande après un goûter.","La réponse est 42. La question était fausse.","Clairement, c'est une pomme de terre déguisée."],
  why:["Parce que l'univers n'avait plus d'autres idées.","Les scientifiques disent : 40 % gravité, 60 % vibes.","Parce qu'un écureuil l'a validé en 1987 et personne n'a vérifié."],
  follow:["À toi : quel a été le meilleur moment de ta journée ?","Qu'est-ce qui t'a fait penser à ça ?","Question rapide : chats ou chiens ?","Dis-moi un truc qui me ferait rire.","Si tu pouvais te téléporter 10 minutes, tu irais où ?"],
  ice:["Si tu étais un snack, lequel serais-tu ?","Quelle petite chose t'a fait sourire cette semaine ?","Si les animaux parlaient, lequel serait le plus impoli ?","Quel serait ton nom de super-héros ?","Quel est ton talent le plus inutile ?","Quel plat pourrais-tu manger tous les jours ?"],
  react:["Cette réponse te rapporte 7 points imaginaires.","Audacieux. Inattendu. Respect.","Je la note dans mon Livre des Excellentes Réponses.","Génie ou chaos. Peut-être les deux."],
  eight:["C'est certain. Bizarrement certain.","Redemande après un verre d'eau.","Mes sources disent non. Mes sources sont des pigeons.","Oui, avec supplément fromage."],
  nameSet:"Enchanté, {n} ! Je m'en souviendrai.",likeAck:"Noté : tu aimes {x}. Excellent goût.",likeQ:"Tu m'as dit que tu aimes {x}. Raconte-moi ?",
  welcome:"Bienvenue au Funhouse{n} ! Demande-moi n'importe quoi, fais un vœu ou choisis un jeu.",moodQ:"D'abord : comment va ta journée ?",
  moods:{"😄":["Tu rayonnes !","Raconte-moi le meilleur moment !"],"🙂":["Bonne journée. Un snack la rendrait géniale.","Qu'est-ce qui en ferait un 10 ?"],"😐":["Journée « bof ». Je m'en occupe.","Mieux ? Même un tout petit peu ?"],"😕":["Pas ta meilleure journée. C'est ok.","Une blague, un jeu, ou des encouragements ?"],"😫":["Aïe. Journée dure. Énorme câlin virtuel.","Tu veux vider ton sac, ou que je te change les idées ?"]},
  modeSwitch:["Mode changé !","Nouvelle personnalité débloquée."],modeNow:"Je suis maintenant {m}.",
  lucky:" Ton chiffre porte-bonheur : ",grade:["Note : B+ pour l'enthousiasme.","Note : A- (points en moins pour la joie).","Note : C, venez me voir après le cours."],ventOk:"Je t'écoute. Lâche tout. Aucun jugement.",
  open:{comic:["Bon, bon, bon. ","Attention. "],genie:["*POUF* ","*nuage de paillettes* "],fortune:["La boule de cristal tourbillonne… ","Les esprits murmurent… "],prof:["Pour le procès-verbal : ","Écoutez bien. "],free:["",""],pirate:["Arr ! ","Yo ho ! "],cat:["*bâille* ","pff. "],hype:["ALLEZ ! ","CHAMPION ! "],kids:["Oh ! ","Youpi ! "],bard:["Oyez ! ","Ô ciel ! "]},
  close:{pirate:["Yo ho ho.","*le perroquet crie*"],cat:["laisse-moi dormir.","*fait tomber ta tasse*"],hype:["TU VAS Y ARRIVER !"],kids:["🌈","⭐"],bard:["*révérence*"]},
  unknown:["{w} ? J'ai des sentiments forts sur {w}. Surtout de la confusion.","Ah, {w}. Un classique. J'y penserai pendant ma sieste."],
  re:{hi:/^(salut|bonjour|bonsoir|coucou|hello)/i,joke:/(blague|drôle|rire|marrant)/i,wish:/(je souhaite|j'aimerais|je veux|souhait|vœu|voeu|j'espère)/i,wishStrip:/^.*?(je souhaite que|je souhaite|j'aimerais que|j'aimerais|je veux|j'espère que|j'espère|vœu|voeu|souhait)\s*/i,
   sad:/(triste|mauvaise journée|stressé|anxieu|seul|pleure|fâché|déprimé|fatigué)/i,happy:/(content|heureu|génial|super|trop bien)/i,thanks:/(merci)/i,fortune:/(avenir|futur|destin|horoscope|prédi|chance)/i,
   name:/(?:je m'appelle|appelle-moi|mon nom est)\s+([^\s,.!?]+)/i,like:/(?:j'aime|j'adore)\s+(?:bien\s+)?(?:le |la |les |l')?([^.!?,]{2,30})/i,q:/(\?|pourquoi|comment|quand|où|qui|quoi|est-ce)/i,why:/pourquoi/i,comp:/(compliment)/i,roast:/(taquine|clash)/i,pep:/(motive|encourage)/i}
 },
 g:{over:"Fin du jeu ! C'était drôle.",playOther:"On joue à autre chose, ou on discute ?",stopped:"Ok, jeu arrêté. Le fun n'est pas remboursé.",
  wyrIntro:"Tu préfères ! ",wyrNext:"Suivante ! ",wyrQ:"Tu préférerais {a}, ou {b} ?",wyrPick:"Tu préfères {c} ? {r} {p} % des joueurs imaginaires sont d'accord.",wyrReact:["Choix audacieux.","Le chaos, avec respect.","J'aurais choisi pareil. Sans doute."],
  wyr:[["avoir des spaghettis à la place des cheveux","transpirer du sirop d'érable"],["parler comme un pirate pour toujours","chanter tout ce que tu dis"],["affronter un canard de la taille d'un cheval","affronter 100 chevaux de la taille d'un canard"],["parler aux animaux","parler toutes les langues"],["vivre dans une cabane dans un arbre","vivre dans un sous-marin"],["éternuer des paillettes","roter des bulles"]],
  tdIntro:"Action ou vérité ? Choisis bien.",truthP:"Vérité : ",dareP:"Action : ",
  truths:["Quel mélange bizarre de nourriture adores-tu en secret ?","Quelle chanson gênante connais-tu par cœur ?","Quelle peur idiote as-tu encore ?"],
  dares:["Écris ton prochain message les yeux fermés.","Décris ta journée comme une bande-annonce de film.","Fais un compliment à voix haute à l'objet le plus proche.","Écris un poème de 2 lignes sur les chaussettes."],
  eightIntro:"Secoue la boule magique ! Pose-moi une question oui ou non.",askAgain:"Pose-en une autre !",cookie:"*crac* 🥠 ",cookieMore:"Un autre biscuit ?",
  iceIntro:"Interview ! Je demande, tu réponds.",iceNext:"Ok, suivante : ",iceEnd:"Interview terminée. Réussie avec les félicitations du snack.",
  decIntro:"Décide pour moi ! Écris tes options séparées par des virgules ou « ou ». Exemple : pizza, sushi, tacos",decNeed:"Donne-moi au moins deux options, comme : sieste ou goûter",decPick:"Après avoir consulté 3 chats et 1 boule de cristal… la réponse est : {x} ! ",decWhy:["Elle a les meilleures vibes.","Les autres savaient qu'elles avaient perdu."],decAgain:"Une autre décision ?",
  partyIntro:"Mode soirée ! Écris 2 prénoms ou plus, séparés par des virgules.",partyNeed:"Il me faut au moins 2 prénoms, comme : Léa, Hugo, Inès",partyStart:"Bienvenue {p} ! Fais ta mission puis touche Fait pour un point, ou Passer.",
  partyTurn:"🎉 Au tour de {p} ! {task}",partyTasks:["Vérité : {truth}","Action : {dare}","Tu préférerais {a}, ou {b} ? Explique !","Réponds : {ice}","Imite quelqu'un du groupe (gentiment).","Raconte une blague. Si quelqu'un sourit, tu gagnes le point."],
  partyScores:"Scores : {s}",partyWin:"🏆 Gagnant : {w} ! Fin de la soirée, légendes.",
  hcIntro:"Je pense à un nombre entre 1 et 100.",hcAsk:"Ta proposition ?",hcNum:"Des chiffres seulement, s'il te plaît.",hcHeat:["🔥 Brûlant !","♨️ Chaud !","🌤️ Tiède.","❄️ Froid.","🧊 Glacial."],hcHi:"Plus haut.",hcLo:"Plus bas.",hcWin:"OUI ! C'était {n}. Trouvé en {t} essais !",
  dailyIntro:"📅 Énigme du jour (en anglais) ! Résous-la pour garder ta série.",dailyWin:"Énigme résolue ! Série : {s} jour(s).",dailyDone:"Tu as déjà résolu celle d'aujourd'hui. Nouvelle demain !",ynOnly:"Juste oui ou non, s'il te plaît."}
},

zh:{
 ui:{tagline:"投入问题 · 收获快乐",tChat:"聊天",tGames:"游戏",tWish:"许愿",tMe:"我的",ph:"提问、许愿，或者打个招呼…",send:"发送",
  gTitle:"街机游戏",gSub:"选一个，神谕会在聊天里陪你玩。完全离线可用。",daily:"每日谜题",dailyD:"每天一道新谜题，保持连胜。",dailyDone:"今天已解开 ✓ 明天再来。",
  wTitle:"许愿投币口",wSub:"投入一个愿望。精灵会实现它（附带反转），并给你打印一张卡片。",wLabel:"你的愿望",wPh:"我希望作业能自己写完…",grant:"实现我的愿望",surprise:"给我惊喜",jar:"愿望罐",jarEmpty:"实现的愿望会出现在这里。",
  mTitle:"设置与统计",mSub:"所有内容只保存在这个浏览器里。",langL:"语言",langN:"自动识别你输入的语言。英语、越南语、西班牙语、法语和中文有完整离线回复。加载 AI 大脑即可用任何语言聊天。",
  nameL:"神谕该怎么称呼你？",nameP:"名字或昵称",spice:"搞笑程度",sp0:"温和",sp1:"搞笑",sp2:"疯癫",spN:"疯癫也很干净，只是更古怪。",
  voice:"朗读回复",voiceN:"每个模式都有自己的声音，用你的语言。",sound:"街机音效",soundN:"叮、哔和小小的号角。",
  custom:"创建你的角色",cEmoji:"表情",cName:"名字",cDesc:"性格",cCatch:"口头禅",cSave:"保存角色",cDel:"删除",cNote:"你的角色会出现在模式栏。加载 AI 大脑后会完整扮演。",
  brain:"AI 大脑",brainN:"Spark 是内置离线大脑：即时、无需下载、任何手机都能用。加载真正的 AI 模型，可用任何语言自由聊天。",model:"模型",load:"加载 AI 大脑",spark:"使用 Spark",
  bNoGpu:"这个浏览器不支持 WebGPU，无法运行 AI 大脑。Spark 继续工作。",bErr:"无法在此页面下载 AI 大脑。在 Claude 预览中外部下载被阻止。把页面放到你自己的网站（Netlify、GitHub Pages、Vercel）上就能用。",
  bReady:"AI 大脑已就绪",bLoading:"加载中…",mem:"神谕记得的事",memEmpty:"说“我喜欢…”，神谕就会记住。",memClear:"全部忘记",
  favs:"收藏的回复",favEmpty:"点回复上的 ⭐ 收藏到这里。",stats:"你的快乐统计",badges:"徽章",copy:"复制聊天",clear:"清空聊天",
  stL:"笑声",stM:"消息",stW:"愿望",stS:"连续天数",friend:"朋友",copied:"已复制",copyFail:"无法复制，请手动选择文字。",cardHint:"长按或右键点击卡片即可保存分享。",copyText:"复制文字",
  oracleSays:"神谕如是说",youAsked:"你问",laughLog:"笑声已记录！",saved:"已收藏",badge:"解锁徽章",micOff:"这里无法使用麦克风。把页面放到你自己的网站上就可以。",
  needPack:"",addChar:"创建",remove:"移除",sparkOn:"正在使用离线大脑 Spark",charSaved:"角色已保存",nameHi:"你好，{n}！"},
 modes:{comic:["喜剧演员","谐音梗、笑点，毫不害羞。"],genie:["神灯精灵","实现愿望，总有反转。"],fortune:["算命师","搞笑预言，幸运数字。"],prof:["严厉教授","一本正经，意外好笑。"],free:["自由聊天","友好的聊天伙伴。"],pirate:["海盗","啊哈！什么都是宝藏。"],cat:["暴躁猫","毫无兴趣，暗中爱你。"],hype:["打气教练","满格鼓励！"],kids:["儿童","温暖、简单、闪亮。"],bard:["吟游诗人","戏剧感拉满。"]},
 games:{mind:["读心术","想一样东西，我来猜。"],riddle:["谜语冲刺","经典谜语，每题3次机会。"],emoji:["表情成语","看表情猜短语。"],wyr:["你宁愿","荒谬的二选一。"],story:["故事接龙","一起写个搞笑故事。"],hotcold:["冷热猜数","猜1到100的数字。"],rate:["万物评分","给你的借口或点子打分。"],truth:["真心话大冒险","安全、搞笑。"],party:["派对模式","传手机，2人以上计分。"],decide:["帮我决定","我来戏剧性地选。"],eight:["魔法8号球","是非题，宇宙答案。"],cookie:["幸运饼干","掰开一个。"],ice:["问我问题","我问你有趣的问题。"],joke:["笑话机器","无尽的冷笑话。"]},
 chips:{bedtime:"睡前故事",joke:"讲个笑话",wish:"许个愿",fortune:"给我算一卦",compliment:"夸夸我",roast:"吐槽我（轻点）",pep:"给我打打气",ask:"问我点什么",game:"玩游戏",yes:"是",no:"不是",stop:"停止",hint:"提示",skip:"跳过",a:"选项A",b:"选项B",truth:"真心话",dare:"大冒险",done:"完成 ✅ +1",scores:"比分",another:"再来一个",vent:"我想倾诉"},
 s:{
  greet:["你好{n}！欢迎来到唯一一个零食是想象的、笑话是真的摊位。","嗨{n}！神谕醒了，而且咖啡喝多了一点。"],greetQ:"说说看，你今天过得怎么样？从1分到奶茶分打个分。",
  jokes:["为什么骷髅从不打架？因为它们没有胆。","数学书为什么难过？因为它有太多问题。","我问电脑要不要休息，它说好啊，然后就睡眠了。","番茄为什么脸红？因为它看到了沙拉酱。","什么动物最爱问为什么？猪，因为“为猪么”。","小明问爸爸：我是不是傻孩子？爸爸说：傻孩子，你怎么会是傻孩子呢？"],
  jokeQ:["给这个笑话打个分吧，1到10，手下留情。","再来一个，还是你给我讲一个？"],
  grant:"准奏！{w}，{t}。",twists:["但只在星期二有效","但每次实现时附近都会响起口哨声","但会有一只很有礼貌的鸽子跟着你一周","但你每次都要大喊“哒哒！”","但它装在一个大得离谱的箱子里送来","但你的袜子再也配不成对了","而且附赠：你的下一个包子会完美无缺"],
  real:["说真的：第一步比你想象的更小。","说真的：你离它比你感觉的更近。","说真的：每天的小步胜过“总有一天”的大计划。"],wishQ:"这周你可以迈出哪一小步？",
  comfort:["送你一（1）个紧急虚拟拥抱，概不退换。","糟糕的日子就像剪坏的头发：烦人、暂时，之后还是好故事。","你做得比你以为的好。"],comfortQ:"想听笑话、打打气，还是只想倾诉？我在听。",
  happy:["好有活力！我正在用二进制跳胜利舞。","好消息！彩带炮：已发射。"],happyQ:"是什么让它这么棒？",
  thanks:["不客气！小费随意，夸奖照收。"],thanksQ:"那个聪明的脑袋里还有别的事吗？",
  fortunes:["你近期会收到意外的零食，请收下。","好事正在路上，其中一些是奶茶。","你的下一个好点子会在洗澡时出现。","这周你会找回以为丢了的东西，可能是你的干劲。"],fortuneQ:"你相信运气，还是自己创造运气？",
  compliments:["你有一种周六早上不用闹钟的能量。","你的笑容大概能让 Wi-Fi 信号变强。","你是那种小狗一见就信任的人。"],
  roasts:["你按贪睡按得太多，闹钟都申请退休了。","你开冰箱十次，希望里面长出新食物。我懂。","你打“哈哈哈”的时候脸上毫无表情。"],
  pep:["你已经挺过了100%最糟的日子，完美纪录。","不需要完美，只需要开始。我相信你。","深呼吸。你可以的。然后奖励自己一份零食。"],afterQ:"再来一个？",
  answers:["绝对是的。星星、月亮和我的烤面包机都同意。","嗯，我说不，但气氛说是。","是的，但你得边哼歌边做。","吃完零食再问一次。","答案是42，是问题问错了。","很明显，那是一颗伪装的土豆。"],
  why:["因为宇宙已经没有别的点子了。","科学家一致认为：40%重力，60%氛围。","因为1987年一只松鼠批准了，没人复查。"],
  follow:["轮到你了：今天最开心的事是什么？","我好奇，你怎么会想到这个？","快问快答：猫还是狗？","讲件能让我笑的事吧。","如果能瞬移10分钟，你去哪？"],
  ice:["如果你是一种零食，你会是什么？","这周什么小事让你笑了？","如果动物会说话，哪种最没礼貌？","你的超级英雄名字是什么？","你最没用的才艺是什么？","哪种食物你可以天天吃一辈子？"],
  react:["这个回答为你赢得7个想象积分。","大胆，意外，我尊重。","我把它写进了《优秀答案之书》。","不是天才就是混乱，也可能两者都是。"],
  eight:["肯定的，肯定得有点可疑。","喝口水再问一次。","我的消息来源说不，我的消息来源是鸽子。","是的，加双份芝士。"],
  nameSet:"很高兴认识你，{n}！我会记住的。",likeAck:"记下了：你喜欢{x}。品味一流！",likeQ:"你说过你喜欢{x}，多跟我讲讲？",
  welcome:"欢迎来到 Funhouse{n}！问我任何事、许个愿，或者选个游戏。",moodQ:"首先：你今天过得怎么样？",
  moods:{"😄":["你在发光！保持下去。","跟我说说今天最棒的部分！"],"🙂":["不错的一天，加个零食就更完美了。","怎样才能变成10分？"],"😐":["平平的一天，让我来修一修。","好点了吗？哪怕一点点？"],"😕":["不是最好的一天，没关系。","想听笑话、玩游戏，还是打打气？"],"😫":["哎呀，辛苦了。送你一个超大虚拟拥抱。","想倾诉，还是想让我用傻事帮你分心？"]},
  modeSwitch:["模式已切换！","解锁新性格。"],modeNow:"我现在是{m}。",
  lucky:" 今天的幸运数字：",grade:["本题得分：B+，因为热情。","得分：A-（因为太开心扣分）。","得分：C，下课来找我。"],ventOk:"我在听，全都说出来吧。不评判，只点头。",
  open:{comic:["好好好。","准备好了吗？"],genie:["*噗！*","*一团闪亮的烟雾*"],fortune:["水晶球在旋转…","灵魂在低语…"],prof:["记录在案：","注意听。"],free:["",""],pirate:["啊哈！","哟嚯！"],cat:["*打哈欠*","唉。"],hype:["冲冲冲！","冠军！"],kids:["哇！","耶！"],bard:["听哪！","天哪！"]},
  close:{pirate:["哟嚯嚯。","*鹦鹉尖叫*"],cat:["别打扰我睡觉。","*把你的杯子推下桌*"],hype:["你一定行！"],kids:["🌈","⭐"],bard:["*深深鞠躬*"]},
  re:{hi:/^(你好|您好|嗨|哈喽|早上好|晚上好|hello)/i,joke:/(笑话|搞笑|好笑|逗我)/,wish:/(希望|愿望|我想要|许愿|但愿)/,wishStrip:/^.*?(我希望|希望|我想要|许愿|但愿|愿望是)/,
   sad:/(难过|伤心|累|压力|焦虑|孤独|哭|生气|郁闷)/,happy:/(开心|高兴|太好了|棒|兴奋)/,thanks:/(谢谢|多谢|感谢)/,fortune:/(算命|未来|运气|命运|星座|预言)/,
   name:/(?:我叫|叫我|我的名字是)\s*([^\s，。！？,.!?]{1,10})/,like:/我(?:很|超|最)?(?:喜欢|爱)([^。！？，,.!?]{1,20})/,q:/(\?|？|吗|为什么|怎么|什么|谁|哪|几)/,why:/为什么/,comp:/夸/,roast:/(吐槽|损我)/,pep:/(鼓励|加油|打气)/}
 },
 g:{over:"游戏结束！好好玩。",playOther:"想玩别的，还是聊聊天？",stopped:"好的，游戏停止。快乐不退款。",
  wyrIntro:"你宁愿！",wyrNext:"下一题！",wyrQ:"你宁愿{a}，还是{b}？",wyrPick:"你选{c}？{r} {p}%的想象玩家同意你。",wyrReact:["大胆的选择。","混乱，但我尊重。","我也会这么选，大概吧。"],
  wyr:[["头发变成意大利面","流的汗是枫糖浆"],["永远像海盗一样说话","说什么都要唱出来"],["和一只马那么大的鸭子打架","和100匹鸭子那么大的马打架"],["能和动物说话","会说所有语言"],["住在树屋里","住在潜水艇里"],["打喷嚏喷出亮片","打嗝吐出泡泡"]],
  tdIntro:"真心话还是大冒险？好好选。",truthP:"真心话：",dareP:"大冒险：",
  truths:["你偷偷喜欢的最奇怪的食物搭配是什么？","你能唱全的最尴尬的歌是哪首？","你现在还有什么傻傻的害怕？"],
  dares:["闭着眼睛打下一条消息。","把你的一天描述成电影预告片。","大声夸奖离你最近的物品。","写一首关于袜子的两行诗。"],
  eightIntro:"摇一摇魔法8号球！问我一个是非题。",askAgain:"再问一个！",cookie:"*咔嚓* 🥠 ",cookieMore:"再来一块饼干？",
  iceIntro:"采访时间！我问你答。",iceNext:"好，下一题：",iceEnd:"采访结束，你以零食满分通过。",
  decIntro:"帮我决定！输入选项，用逗号或“还是”隔开。例如：火锅，烧烤，寿司",decNeed:"至少给我两个选项，比如：睡觉还是吃零食",decPick:"咨询了3只猫和1颗水晶球之后……答案是：{x}！",decWhy:["它的氛围最好。","其他选项自己知道输了。"],decAgain:"还要再决定什么吗？",
  partyIntro:"派对模式！输入2个以上玩家名字，用逗号隔开。",partyNeed:"至少需要2个名字，比如：小明，小红，小李",partyStart:"欢迎{p}！完成任务后点“完成”得一分，或者跳过。",
  partyTurn:"🎉 轮到{p}！{task}",partyTasks:["真心话：{truth}","大冒险：{dare}","你宁愿{a}，还是{b}？说说理由！","回答：{ice}","模仿在场的某个人（友善地）。","讲个笑话，有人笑就得分。"],
  partyScores:"比分：{s}",partyWin:"🏆 赢家：{w}！派对结束，传奇们。",
  hcIntro:"我在想一个1到100之间的数字。",hcAsk:"你猜？",hcNum:"请只输入数字。",hcHeat:["🔥 烫手！","♨️ 很热！","🌤️ 温暖。","❄️ 冷。","🧊 冻僵了，企鹅都来了。"],hcHi:"再大一点。",hcLo:"再小一点。",hcWin:"对了！就是{n}。你用了{t}次！",
  dailyIntro:"📅 每日谜题（英文）！解开它保持连胜。",dailyWin:"每日谜题已解开！连胜：{s}天。",dailyDone:"今天的已经解开了，明天有新的！",ynOnly:"请只回答是或不是。"}
}
};
PACKS.en.s.jokes=EN.JOKES;

/* ================= Spark brain ================= */
function persona(text,follow){                      // English persona engine
  const m=MODES[S.mode];let out=(follow===""?"":pick(m.open))+text;
  if(S.spice===2&&S.mode!=="kids"&&chance(.6))out+=" "+pick(["Also, a llama just winked at me.","I'm saying this while wearing a cape.","My toaster agrees, for the record.","*a duck quacks in the distance*"]);
  out=m.wrap(out).replace(/\s+/g," ").trim();
  return follow?out+"\n\n"+follow:out;
}
function personaL(p,text,follow){                    // other languages
  const s=p.s;let open="",close="";
  if(MODES[S.mode].custom)open=MODES.custom.open[0];
  else{open=(follow!==""&&s.open&&s.open[S.mode])?pick(s.open[S.mode]):"";close=s.close&&s.close[S.mode]?" "+pick(s.close[S.mode]):"";}
  let out=open+text+close;
  if(S.mode==="fortune"&&chance(.5))out+=s.lucky+lucky()+".";
  if(S.mode==="prof"&&s.grade&&s.grade.length)out+=" "+pick(s.grade);
  out=out.replace(/[ \t]+/g," ").trim();
  return follow?out+"\n\n"+follow:out;
}
function say(text,follow){const l=replyLang();return (l!=="en"&&PACKS[l])?personaL(PACKS[l],text,follow):persona(text,follow)}
const SP=()=>(P()||PACKS.en).s;
function maybeLike(){if(S.likes.length&&chance(.25)){return fill(SP().likeQ,{x:pick(S.likes)})}return null}
function followQ(list){return maybeLike()||pick(list)}

function captureFacts(t){
  const p=P()||PACKS.en;const re=p===PACKS.en?{name:/\b(?:my name is|i'?m called|call me)\s+([A-Za-zÀ-ỹ][\wÀ-ỹ'-]{0,20})/i,like:/\bi (?:really |totally )?(?:like|love|enjoy|adore)\s+([^.!?,]{2,30})/i}:p.s.re;
  const out={};
  const nm=re.name&&t.match(re.name);
  if(nm){S.name=cap(nm[1]);store.set("name",S.name);$("#nameInput").value=S.name;out.name=S.name}
  const lk=re.like&&t.match(re.like);
  if(lk&&!/\b(you|bạn|you're)\b/i.test(lk[1])){const x=lk[1].trim().replace(/\s+(too|lắm|nhiều)$/i,"");
    if(x&&!S.likes.includes(x)){S.likes.unshift(x);S.likes=S.likes.slice(0,12);store.set("likes",S.likes);renderMem();out.like=x}}
  return out;
}

function sparkEN(raw,facts){
  const t=raw.trim(),low=t.toLowerCase(),s=PACKS.en.s;
  if(facts.name)return persona(fill(s.nameSet,{n:facts.name}),pick(s.ice));
  if(facts.like)return persona(fill(s.likeAck,{x:facts.like}),pick(s.follow));
  if(S.awaiting==="ice")return persona(pick(s.react),G("iceNext")+pick(s.ice));
  if(S.awaiting==="vent"){S.awaiting=null;return persona(pick(s.comfort),pick(["Thank you for telling me. Want a joke now, or keep talking?","That sounds like a lot. What would help most right now?"]))}
  if(/\b(joke|funny|make me laugh)\b/i.test(low))return persona(pick(EN.JOKES),pick(s.jokeQ));
  if(/^(hi|hey|hello|yo|sup|hola|good (morning|evening|afternoon))\b/i.test(low))return persona(fill(pick(s.greet),{n:userName()}),s.greetQ);
  if(/\b(compliment)\b/i.test(low))return persona(pick(s.compliments),s.afterQ);
  if(/\broast\b/i.test(low))return persona(pick(s.roasts),s.afterQ);
  if(/\b(pep talk|motivate|encourage)\b/i.test(low))return persona(pick(s.pep),pick(s.follow));
  if(/\b(i wish|wish|i want|i hope)\b/i.test(low)){S.stats.wishes++;saveStats();
    const w=t.replace(/^.*?\b(i wish|wish for|wish|i want|i hope)\b\s*(that|to|for)?\s*/i,"").replace(/[.!?]+$/,"")||"that";
    return persona(fill(s.grant,{w:cap(w),t:pick(s.twists)})+" "+pick(s.real),s.wishQ);}
  if(/\b(sad|bad day|upset|lonely|stressed|anxious|cry|depressed|angry|worried)\b/i.test(low))return persona(pick(s.comfort),s.comfortQ);
  if(/\b(happy|great|awesome|amazing|good day|excited|yay)\b/i.test(low))return persona(pick(s.happy),s.happyQ);
  if(/\b(thank|thanks|thx)\b/i.test(low))return persona(pick(s.thanks),s.thanksQ);
  if(/\b(fortune|future|predict|destiny|horoscope)\b/i.test(low))return persona(pick(s.fortunes),s.fortuneQ);
  for(const tp of EN.TOPICS){if(tp.k.test(low))return persona(pick(tp.r),tp.f);}
  if(/\?\s*$/.test(t)||/^(why|how|what|who|when|where|can|could|should|will|would|is|are|do|does|am)\b/i.test(low)){
    let a;if(/^why\b/i.test(low))a=pick(EN.WHY);else if(/^how\b/i.test(low))a=pick(EN.HOW);else if(/^what\b/i.test(low))a=pick(EN.WHAT);
    else if(/^who\b/i.test(low))a=pick(EN.WHO);else if(/^when\b/i.test(low))a=pick(EN.WHEN);else if(/^where\b/i.test(low))a=pick(EN.WHERE);else a=pick(EN.YESNO);
    return persona(a,followQ(s.follow));
  }
  const kw=keyword(t);
  if(kw)return persona(fill(pick(s.unknown),{w:kw}),followQ(s.follow));
  return persona(pick(s.react),pick(s.ice));
}
function keyword(t){
  const words=t.replace(/[^\p{L}\s'-]/gu," ").split(/\s+/).filter(w=>w.length>4&&!/^(that|this|with|have|from|they|there|their|what|about|just|really|very|like|would|could|should|been|were|your|porque|parce|quelque)$/i.test(w));
  return words.sort((a,b)=>b.length-a.length)[0]?.toLowerCase()||null;
}
function sparkL(raw,facts,p){
  const t=raw.trim(),s=p.s,r=s.re;
  if(facts.name)return personaL(p,fill(s.nameSet,{n:facts.name}),pick(s.ice));
  if(facts.like)return personaL(p,fill(s.likeAck,{x:facts.like}),pick(s.follow));
  if(S.awaiting==="ice")return personaL(p,pick(s.react),p.g.iceNext+pick(s.ice));
  if(S.awaiting==="vent"){S.awaiting=null;return personaL(p,pick(s.comfort),s.comfortQ)}
  if(r.joke.test(t))return personaL(p,pick(s.jokes),pick(s.jokeQ));
  if(r.hi.test(t))return personaL(p,fill(pick(s.greet),{n:userName()}),s.greetQ);
  if(r.comp.test(t))return personaL(p,pick(s.compliments),s.afterQ);
  if(r.roast.test(t))return personaL(p,pick(s.roasts),s.afterQ);
  if(r.pep.test(t))return personaL(p,pick(s.pep),pick(s.follow));
  if(r.wish.test(t)){S.stats.wishes++;saveStats();const w=t.replace(r.wishStrip,"").replace(/[.!?。！？]+$/,"")||"…";
    return personaL(p,fill(s.grant,{w:cap(w),t:pick(s.twists)})+" "+pick(s.real),s.wishQ);}
  if(r.sad.test(t))return personaL(p,pick(s.comfort),s.comfortQ);
  if(r.thanks.test(t))return personaL(p,pick(s.thanks),s.thanksQ);
  if(r.fortune.test(t))return personaL(p,pick(s.fortunes),s.fortuneQ);
  if(r.happy.test(t))return personaL(p,pick(s.happy),s.happyQ);
  if(r.q.test(t))return personaL(p,r.why.test(t)?pick(s.why):pick(s.answers),followQ(s.follow));
  const kw=s.unknown?keyword(t):null;
  if(kw)return personaL(p,fill(pick(s.unknown),{w:kw}),followQ(s.follow));
  return personaL(p,pick(s.react),followQ(s.ice));
}
function sparkReply(raw){
  const facts=captureFacts(raw);const p=P();
  if(p&&p!==PACKS.en)return sparkL(raw,facts,p);
  let out=sparkEN(raw,facts);
  const l=replyLang();
  if(!p&&!S.hinted[l]){S.hinted[l]=1;out+="\n\n"+fill(PACKS.en.ui.needPack,{l:LANGS[l].n})}
  return out;
}

/* ================= games ================= */
const GAMES=[{id:"mind",em:"🧠",en:1},{id:"riddle",em:"❓",en:1},{id:"emoji",em:"😜",en:1},{id:"wyr",em:"⚖️"},{id:"story",em:"📜",en:1},{id:"party",em:"🎉"},{id:"decide",em:"🎯"},{id:"hotcold",em:"🌡️"},{id:"rate",em:"🏅",en:1},{id:"truth",em:"🎲"},{id:"eight",em:"🎱"},{id:"cookie",em:"🥠"},{id:"ice",em:"🧊"},{id:"joke",em:"🤡"}];
const C=k=>({t:(PU().chips[k]||PACKS.en.chips[k]),c:"g:"+k});
const CH=k=>(PU().chips[k]||PACKS.en.chips[k]);
const STOPC=()=>C("stop");
function startGame(id){
  S.stats.games++;saveStats();switchTab("chat");sfx("coin");
  const g={id};S.game=g;S.awaiting=null;const s=SP();
  if(id==="mind"){g.node=TREE;oracle(persona("Think of something: an animal, food, object or place. Don't tell me! Ready?",TREE.q),[C("yes"),C("no"),STOPC()]);}
  else if(id==="riddle"||id==="daily"){
    if(id==="daily"){if(S.stats.dailyLast===today()){S.game=null;oracle(say(G("dailyDone"),""));return}
      const d=Math.floor(Date.now()/864e5);g.r=EN.RIDDLES[d%EN.RIDDLES.length];g.tries=0;g.score=0;g.daily=1;
      oracle(say(G("dailyIntro"),"🧩 "+g.r.q),[C("hint"),STOPC()]);return}
    g.r=pick(EN.RIDDLES);g.tries=0;g.score=0;oracle(persona("Riddle Rush! Three tries each. Type 'hint' or 'skip' anytime.","🧩 "+g.r.q),[C("hint"),C("skip"),STOPC()]);}
  else if(id==="emoji"){g.e=pick(EN.EMOJI);g.tries=0;oracle(persona("Guess the saying from the emojis!","👉 "+g.e.q),[C("skip"),STOPC()]);}
  else if(id==="wyr"){wyrRound(g,true);}
  else if(id==="story"){g.turn=0;oracle(persona("Story Chain! You write a line, I add the next. Six turns, then I give it a title.","Start us off: 'Once upon a time…'"),[{t:"Once upon a time, a cat opened a bakery.",c:null},STOPC()]);}
  else if(id==="hotcold"){g.n=Math.floor(Math.random()*100)+1;g.tries=0;oracle(say(G("hcIntro"),G("hcAsk")),["50",STOPC()]);}
  else if(id==="rate"){oracle(persona("Rate My Anything! Tell me an excuse, an idea, your outfit, your lunch, anything.","Go ahead, I'm judging lovingly."),["My dog ate my homework","Pancakes for dinner",STOPC()]);}
  else if(id==="truth"){oracle(say(G("tdIntro"),""),[C("truth"),C("dare"),STOPC()]);}
  else if(id==="eight"){oracle(say(G("eightIntro"),""),[STOPC()]);}
  else if(id==="cookie"){S.game=null;oracle(say(G("cookie")+pick(s.fortunes),G("cookieMore")),[{t:CH("another"),c:"cookie"},{t:CH("game"),c:"game"}]);}
  else if(id==="ice"){S.game=null;S.awaiting="ice";oracle(say(G("iceIntro"),pick(s.ice)),[STOPC()]);}
  else if(id==="joke"){S.game=null;oracle(say(pick(s.jokes),pick(s.jokeQ)),[{t:CH("another"),c:"joke"},{t:CH("game"),c:"game"}]);}
  else if(id==="bedtime"){S.game=null;const st=bedtimeStory();addMsg("bot",st);S.history.push({role:"assistant",content:st});setChips([{t:CH("another"),c:"bedtime"},{t:CH("game"),c:"game"}]);
    speakAs(curChar(),st,()=>{if(S.talk)setTimeout(listen,250)});talk(st);}
  else if(id==="decide"){g.phase="opts";oracle(say(G("decIntro"),""),[STOPC()]);}
  else if(id==="party"){g.phase="names";g.players=[];oracle(say(G("partyIntro"),""),[STOPC()]);}
}
function wyrRound(g,first){
  g.q=pick(G("wyr"));
  oracle(say((first?G("wyrIntro"):G("wyrNext"))+fill(G("wyrQ"),{a:g.q[0],b:g.q[1]}),""),[C("a"),C("b"),STOPC()]);
}
function endGame(msg){S.game=null;oracle(say(msg||G("over"),G("playOther")),defaultChips());}
function partyTask(){
  const s=SP();const w=pick(G("wyr"));
  return fill(pick(G("partyTasks")),{truth:pick(G("truths")),dare:pick(G("dares")),a:w[0],b:w[1],ice:pick(s.ice)});
}
function partyNext(g){g.i=(g.i+1)%g.players.length;oracle(say(fill(G("partyTurn"),{p:g.players[g.i].n,task:partyTask()}),""),[C("done"),C("skip"),C("scores"),STOPC()]);}
function partyBoard(g){return g.players.slice().sort((a,b)=>b.s-a.s).map(p=>p.n+" "+p.s).join(" · ")}
const YES=/^(y|yes|yeah|yep|sure|có|co|ừ|ừm|đúng|sí|si|oui|是|对|嗯|ja|evet|tak|ya|oo|да|はい|네)/i;
const NO=/^(n|no|nope|nah|không|khong|ko|sai|non|不|没|nein|hayır|nie|tidak|hindi|нет|いいえ|아니)/i;
const STOPRE=/^(stop|quit|exit|end|dừng|thôi|parar|para|arrêter|arrête|停|停止|结束)$/i;
function gameInput(t,tok){
  const g=S.game;const low=(tok||t).toLowerCase().trim();const s=SP();
  if(tok==="stop"||STOPRE.test(low)){
    if(g.id==="party"&&g.players&&g.players.length){const best=g.players.slice().sort((a,b)=>b.s-a.s)[0];S.stats.party++;saveStats();confetti();sfx("win");endGame(fill(G("partyWin"),{w:best.n})+"\n"+fill(G("partyScores"),{s:partyBoard(g)}));return true}
    endGame(G("stopped"));return true}
  if(g.id==="mind"){
    if(g.guessing){
      if(tok==="yes"||YES.test(low)){S.stats.mind++;saveStats();confetti();sfx("win");mascot("happy");endGame("I read your mind! It's a little messy in there, but cozy.");}
      else endGame("Nooo! My brain hat needs recalibrating. What was it? You can just tell me.");
      return true}
    const yes=tok==="yes"||(!tok&&YES.test(low)),no=tok==="no"||(!tok&&NO.test(low));
    if(!yes&&!no){oracle(say(G("ynOnly"),g.node.q),[C("yes"),C("no")]);return true}
    g.node=yes?g.node.y:g.node.n;
    if(g.node.g){g.guessing=true;oracle(persona("*squints really hard* I'm getting a signal… Is it "+g.node.g+"?",""),[C("yes"),C("no")]);}
    else oracle(persona(pick(["Hmm, interesting.","Aha.","I see.","Ooh, getting warmer."]),g.node.q),[C("yes"),C("no"),STOPC()]);
    return true}
  if(g.id==="riddle"){
    if(tok==="hint"||low==="hint"||low==="gợi ý"){oracle(persona("Hint: it starts with '"+g.r.a[0][0].toUpperCase()+"' and has "+g.r.a[0].length+" letters.",""),g.daily?[STOPC()]:[C("skip"),STOPC()]);return true}
    if(!g.daily&&(tok==="skip"||low==="skip"||low==="next")){const old=g.r;g.r=pick(EN.RIDDLES);g.tries=0;oracle(persona("It was: "+old.a[0]+"! Next riddle:","🧩 "+g.r.q),[C("hint"),C("skip"),STOPC()]);return true}
    if(g.r.a.some(a=>low.includes(a))){S.stats.riddles++;confetti();sfx("win");mascot("happy");
      if(g.daily){S.stats.daily=(S.stats.dailyLast===new Date(Date.now()-864e5).toISOString().slice(0,10))?S.stats.daily+1:1;S.stats.dailyLast=today();saveStats();renderDaily();endGame(fill(G("dailyWin"),{s:S.stats.daily}));return true}
      saveStats();g.score++;const old=g.r;g.r=pick(EN.RIDDLES.filter(r=>r!==old));g.tries=0;
      oracle(persona("Correct! "+pick(["You absolute genius.","Big brain energy detected.","The riddle council bows to you."])+" Score: "+g.score+".","🧩 "+g.r.q),[C("hint"),C("skip"),STOPC()]);return true}
    g.tries++;sfx("buzz");
    if(g.tries>=3){if(g.daily){endGame("The answer was "+g.r.a[0]+". Try again tomorrow!");return true}
      const old=g.r;g.r=pick(EN.RIDDLES.filter(r=>r!==old));g.tries=0;oracle(persona("Out of tries! It was "+old.a[0]+". Riddles are rude.","🧩 "+g.r.q),[C("hint"),C("skip"),STOPC()]);}
    else oracle(persona(pick(["Nope, but I like your style.","Close… ish. Not really.","Creative! Wrong, but creative."])+" "+(3-g.tries)+" tries left.",""),[C("hint"),STOPC()]);
    return true}
  if(g.id==="emoji"){
    const ok=g.e.a.some(a=>low.includes(a));
    if(tok==="skip"||low==="skip"||ok||++g.tries>=3){
      if(ok){confetti();sfx("win");S.stats.riddles++;saveStats()}
      const old=g.e;g.e=pick(EN.EMOJI.filter(e=>e!==old));g.tries=0;
      oracle(persona((ok?"Yes! ":"The answer: ")+old.full+".","Next 👉 "+g.e.q),[C("skip"),STOPC()]);
    } else {sfx("buzz");oracle(persona(pick(["Not quite!","Hmm, nope.","Good guess, wrong saying."])+" Try again.",""),[C("skip"),STOPC()]);}
    return true}
  if(g.id==="wyr"){
    const isA=tok==="a"||(!tok&&(/^(a|1)\b/i.test(low)||low.includes(g.q[0].split(" ").slice(-1)[0].toLowerCase())));
    const choice=isA?g.q[0]:g.q[1];
    oracle(say(fill(G("wyrPick"),{c:choice,r:pick(G("wyrReact")),p:Math.floor(Math.random()*60)+20}),""),[]);
    setTimeout(()=>{if(S.game===g)wyrRound(g,false)},1100);return true}
  if(g.id==="story"){
    g.turn++;const nouns=t.match(/\b[a-z]{4,}\b/gi)||["banana"];const n=pick(nouns).toLowerCase();
    if(g.turn>=6){sfx("win");endGame("And they all lived happily, slightly sticky, ever after. 📜 Title: \"The Legend of the "+cap(n)+"\". Bestseller!");}
    else oracle(persona(pick(EN.STORY).replace(/\{n\}/g,n),"Your line! ("+(6-g.turn)+" turns left)"),[STOPC()]);
    return true}
  if(g.id==="hotcold"){
    const v=parseInt(low,10);if(isNaN(v)){oracle(say(G("hcNum"),""),[STOPC()]);return true}
    g.tries++;const d=Math.abs(v-g.n);
    if(d===0){confetti();sfx("win");mascot("happy");endGame(fill(G("hcWin"),{n:g.n,t:g.tries}));return true}
    const h=G("hcHeat");const heat=d<=3?h[0]:d<=10?h[1]:d<=20?h[2]:d<=40?h[3]:h[4];
    oracle(say(heat+" "+(v<g.n?G("hcHi"):G("hcLo")),""),[STOPC()]);return true}
  if(g.id==="rate"){
    const lines=pick([[0,1,2],[3,4,5],[0,3,5],[1,2,4]]).map(i=>EN.RATE[i]+": "+(Math.floor(Math.random()*5)+6)+"/10").join(" · ");
    oracle(persona("Judges have scored it. "+lines+". Final score: "+(Math.random()*3+7).toFixed(1)+"/10. "+pick(["Strong work.","A classic.","The crowd goes mild.","Honestly? Iconic."]),"Rate another thing?"),[STOPC()]);return true}
  if(g.id==="truth"){
    const isT=tok==="truth"||(!tok&&/(truth|thật|verdad|vérité|真心)/i.test(low));
    oracle(say(isT?G("truthP")+pick(G("truths")):G("dareP")+pick(G("dares")),""),[C("truth"),C("dare"),STOPC()]);return true}
  if(g.id==="eight"){oracle(say("🎱 "+pick(s.eight),G("askAgain")),[STOPC()]);return true}
  if(g.id==="decide"){
    const opts=t.split(/\s*(?:,|，|、|\/|\bor\b|\bhay\b|\bhoặc\b|\bo\b|\bou\b|还是|或者|定係|定)\s*/i).map(x=>x.trim()).filter(Boolean);
    if(opts.length<2){oracle(say(G("decNeed"),""),[STOPC()]);return true}
    sfx("drum");const x=pick(opts);mascot("think");
    setTimeout(()=>{sfx("win");oracle(say(fill(G("decPick"),{x})+pick(G("decWhy")),G("decAgain")),[STOPC()])},700);return true}
  if(g.id==="party"){
    if(g.phase==="names"){
      const names=t.split(/\s*(?:,|，|、|\band\b|\bvà\b|\by\b|\bet\b|和|同)\s*/i).map(x=>x.trim()).filter(Boolean).slice(0,10);
      if(names.length<2){oracle(say(G("partyNeed"),""),[STOPC()]);return true}
      g.players=names.map(n=>({n:cap(n),s:0}));g.phase="play";g.i=-1;
      oracle(say(fill(G("partyStart"),{p:names.map(cap).join(", ")}),""),[]);setTimeout(()=>partyNext(g),600);return true}
    if(tok==="scores"){oracle(say(fill(G("partyScores"),{s:partyBoard(g)}),""),[C("done"),C("skip"),STOPC()]);return true}
    if(tok==="done"||/^(done|xong|hecho|fait|完成)/i.test(low)){g.players[g.i].s++;sfx("ding");partyNext(g);return true}
    if(tok==="skip"||/^(skip|bỏ qua|saltar|passer|跳过)/i.test(low)){partyNext(g);return true}
    oracle(say(pick(s.react),""),[C("done"),C("skip"),C("scores"),STOPC()]);return true}
  return false;
}

/* ================= AI brain (WebLLM) ================= */
function sysPrompt(){
  const m=MODES[S.mode];
  const spice=["Keep humor very gentle.","Be silly and playful.","Be wildly absurd and surreal, but always clean and kind."][S.spice];
  const lang=S.lang==="auto"?"Reply in the same language the user writes in (most recent: "+AI_NAME[S.cur]+").":"Always reply in "+AI_NAME[S.lang]+".";
  const likes=S.likes.length?" Things the user likes: "+S.likes.join(", ")+". Mention them only when it fits naturally.":"";
  return m.sys+" "+spice+" "+lang+" The user's name is "+userName()+"."+likes+" Rules: reply in 1 to 3 short sentences, stay PG and kind, never mean, never give dangerous advice. If the user seems sad, comfort them first. Always end with one short playful question back to the user, like a real conversation.";
}
async function loadBrain(){
  const btn=$("#loadBrain");
  if(!navigator.gpu){$("#brainNote").textContent=T("bNoGpu");return}
  btn.disabled=true;setChip("load",T("bLoading"));
  try{
    const webllm=await import("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.78/+esm");
    const model=$("#modelSel").value;
    S.engine=await webllm.CreateMLCEngine(model,{initProgressCallback:p=>{$("#brainBar").style.width=Math.round((p.progress||0)*100)+"%";$("#brainProg").textContent=p.text||T("bLoading")}});
    S.brainOn=true;store.set("model",model);setChip("ai","AI");$("#brainProg").textContent="✓ "+model.split("-q4")[0];toast(T("bReady"));sfx("win");
  }catch(e){S.brainOn=false;setChip("spark","Spark");$("#brainNote").textContent=T("bErr");$("#brainProg").textContent="—"}
  finally{btn.disabled=false}
}
function setChip(kind,label){$("#brainDot").className="dot"+(kind==="ai"?" ai":kind==="load"?" load":"");$("#brainLabel").textContent=label}
async function aiReply(bubble){
  const msgs=[{role:"system",content:sysPrompt()},...S.history.slice(-10)];let out="";
  const chunks=await S.engine.chat.completions.create({messages:msgs,stream:true,temperature:0.95,max_tokens:200});
  for await(const c of chunks){out+=c.choices[0]?.delta?.content||"";bubble.textContent=out;scrollDown()}
  return out.trim();
}

/* ================= chat UI ================= */
const chatEl=$("#chat");let lastUser="";
function scrollDown(){const st=$("#stage");st.scrollTop=st.scrollHeight}
function addMsg(who,text){
  const row=document.createElement("div");row.className="msg "+(who==="me"?"me":"bot");
  const b=document.createElement("div");b.className="bubble";b.textContent=text;
  if(who!=="me"){
    const av=document.createElement("div");av.className="avatar face";av.innerHTML=faceSVG(curChar());av.title=curChar().name+" · "+MODES[S.mode].em;row.append(av);
    const wrap=document.createElement("div");wrap.className="bwrap";wrap.append(b);
    const acts=document.createElement("div");acts.className="acts";
    const mk=(txt,label,fn)=>{const x=document.createElement("button");x.type="button";x.textContent=txt;x.setAttribute("aria-label",label);x.onclick=()=>fn(x);return x};
    acts.append(
      mk("😂","That made me laugh",x=>{if(x.classList.contains("on"))return;x.classList.add("on");S.stats.laughs++;saveStats();sfx("ding");mascot("happy");toast(T("laughLog"))}),
      mk("⭐","Save to favorites",x=>{if(x.classList.contains("on"))return;x.classList.add("on");S.favs.unshift({t:b.textContent,m:MODES[S.mode].em,d:today()});S.favs=S.favs.slice(0,40);store.set("favs",S.favs);S.stats.favs++;saveStats();renderFavs();toast(T("saved"))}),
      mk("🔊","Read aloud",()=>speak(b.textContent,true)),
      mk("🎴","Make a card",()=>{switchTab("wish");makeCard(lastUser||"…",b.textContent)})
    );
    wrap.append(acts);row.append(wrap);
  } else row.append(b);
  chatEl.append(row);scrollDown();return b;
}
function defaultChips(){
  const k={genie:["wish","fortune"],fortune:["fortune","joke"],prof:["joke","ask"],kids:["bedtime","joke"],cat:["compliment","roast"],hype:["pep","compliment"],pirate:["joke","fortune"],bard:["joke","compliment"],comic:["joke","roast"],free:["ask","compliment"],custom:["joke","ask"]}[S.mode]||["joke","ask"];
  return [...new Set([...k,"wish","ask","game"])].map(x=>({t:CH(x),c:x}));
}
function setChips(list){
  const c=$("#chips");c.innerHTML="";
  (list&&list.length?list:defaultChips()).forEach(it=>{const o=typeof it==="string"?{t:it,c:null}:it;
    const b=document.createElement("button");b.type="button";b.className="chip";b.textContent=o.t;b.onclick=()=>o.c?command(o.c,o.t):send(o.t);c.append(b)});
}
function oracle(text,chips){addMsg("bot",text);S.history.push({role:"assistant",content:text});speak(text);setChips(chips);sfx("blip2");talk(text)}
function typing(){const row=document.createElement("div");row.className="msg bot";row.innerHTML='<div class="avatar face">'+faceSVG(curChar())+'</div><div class="bubble typing"><span></span><span></span><span></span></div>';chatEl.append(row);scrollDown();mascot("think");return row}

function command(c,label){
  if(c==="game"){switchTab("games");return}
  if(c==="wish"&&!S.game){switchTab("wish");$("#wishInput").focus();return}
  addMsg("me",label);lastUser=label;S.history.push({role:"user",content:label});sfx("blip");
  const s=SP();
  if(c.startsWith("g:")){const tok=c.slice(2);if(S.game&&gameInput(label,tok))return;
    if(tok==="stop"){S.awaiting=null;oracle(say(G("iceEnd"),pick(s.follow)));return}
    send(label,true);return}
  if(c.startsWith("mood:")){moodReply(c.slice(5));return}
  if(c==="joke")return oracle(say(pick(s.jokes),pick(s.jokeQ)),[{t:CH("another"),c:"joke"},{t:CH("game"),c:"game"}]);
  if(c==="cookie")return startGame("cookie");
  if(c==="bedtime")return startGame("bedtime");
  if(c==="fortune")return oracle(say(pick(s.fortunes),s.fortuneQ));
  if(c==="compliment")return oracle(say(pick(s.compliments),s.afterQ),[{t:CH("another"),c:"compliment"},{t:CH("roast"),c:"roast"}]);
  if(c==="roast")return oracle(say(pick(s.roasts),s.afterQ),[{t:CH("another"),c:"roast"},{t:CH("compliment"),c:"compliment"}]);
  if(c==="pep")return oracle(say(pick(s.pep),pick(s.follow)),[{t:CH("another"),c:"pep"},{t:CH("joke"),c:"joke"}]);
  if(c==="ask"){S.awaiting="ice";return oracle(say(G("iceIntro"),pick(s.ice)),[STOPC()])}
  if(c==="vent"){S.awaiting="vent";return oracle(say(s.ventOk,""),[])}
  send(label,true);
}
async function send(raw,already){
  const t=(raw??$("#input").value).trim();if(!t||S.busy)return;
  if(!already){$("#input").value="";autoGrow();addMsg("me",t);lastUser=t;S.history.push({role:"user",content:t});sfx("blip")}
  S.stats.msgs++;touchStreak();saveStats();
  if(S.lang==="auto"&&!S.tutor&&!(S.game&&S.game.id==="practice")){const d=detectLang(t);if(d&&d!==S.cur&&t.length>2){S.cur=d;store.set("cur",d);applyUI()}}
  const low=t.toLowerCase();
  if(!S.game){
    const gm=low.match(/\b(mind reader|riddle|emoji|would you rather|story chain|hot or cold|truth or dare|8 ?ball|rate my|party mode|decide for me)\b/);
    if(gm&&(/\b(play|start|let'?s|game)\b/i.test(low)||low===gm[1])){
      const map={"mind reader":"mind","riddle":"riddle","emoji":"emoji","would you rather":"wyr","story chain":"story","hot or cold":"hotcold","truth or dare":"truth","8ball":"eight","8 ball":"eight","rate my":"rate","party mode":"party","decide for me":"decide"};
      startGame(map[gm[1]]);return}
    if(S.awaiting==="ice"&&STOPRE.test(low)){S.awaiting=null;oracle(say(G("iceEnd"),pick(SP().follow)));return}
  }
  S.busy=true;const ty=typing();
  try{
    if(S.game&&gameInput(t)){ty.remove();return}
    if(S.brainOn&&S.engine){
      captureFacts(t);ty.remove();const b=addMsg("bot","");mascot("talk");
      const out=await aiReply(b);const fin=out||sparkReply(t);b.textContent=fin;
      S.history.push({role:"assistant",content:fin});speak(fin);setChips();sfx("blip2");talk(fin);
    } else {
      await new Promise(r=>setTimeout(r,420+Math.random()*480));ty.remove();oracle(sparkReply(t));
    }
  }catch(e){ty.remove();oracle(sparkReply(t))}
  finally{S.busy=false}
}
function moodReply(m){
  const s=SP();const r=s.moods[m]||s.moods["🙂"];
  if(m==="😐"){oracle(say(r[0]+" "+pick(s.jokes),r[1]));return}
  if(m==="😄")mascot("happy");
  oracle(say(r[0],r[1]),(m==="😫"||m==="😕")?[{t:CH("joke"),c:"joke"},{t:CH("pep"),c:"pep"},{t:CH("vent"),c:"vent"}]:null);
}

/* ================= talking characters ================= */
const CHARS=[
  {id:"oracle",name:"Oracle",tag:"robot",g:"n",pitch:1,rate:1,style:"bot"},
  {id:"max",name:"Max",tag:"boy",g:"m",pitch:1.55,rate:1.08,skin:"#f2c9a0",hair:"#6b3e1f",style:"spiky"},
  {id:"lily",name:"Lily",tag:"girl",g:"f",pitch:1.65,rate:1.05,skin:"#f5d0b0",hair:"#e0a43a",style:"pigtails",acc:"bow"},
  {id:"bao",name:"Bảo",tag:"boy",g:"m",pitch:1.5,rate:1.06,skin:"#e9c39c",hair:"#15100d",style:"short"},
  {id:"an",name:"An",tag:"girl",g:"f",pitch:1.6,rate:1.04,skin:"#efcfae",hair:"#15100d",style:"pigtails",acc:"bow"},
  {id:"leo",name:"Leo",tag:"teenBoy",g:"m",pitch:1.15,rate:1.08,skin:"#c98c5e",hair:"#1f1a17",style:"cap"},
  {id:"mia",name:"Mia",tag:"teenGirl",g:"f",pitch:1.28,rate:1.06,skin:"#e8b896",hair:"#3a2418",style:"long"},
  {id:"emma",name:"Emma",tag:"woman",g:"f",pitch:1.05,rate:1,skin:"#f1c7a5",hair:"#a2412a",style:"long"},
  {id:"james",name:"James",tag:"man",g:"m",pitch:.88,rate:.98,skin:"#8d5a3b",hair:"#1b1410",style:"short",acc:"beard"},
  {id:"linh",name:"Linh",tag:"woman",g:"f",pitch:1.1,rate:1,skin:"#efcfae",hair:"#14100e",style:"bun"},
  {id:"minh",name:"Minh",tag:"man",g:"m",pitch:.95,rate:1,skin:"#e6c09a",hair:"#14100e",style:"short",acc:"glasses"},
  {id:"sofia",name:"Sofía",tag:"woman",g:"f",pitch:1.08,rate:1.04,skin:"#d9a27a",hair:"#2b1a12",style:"long",acc:"earrings"},
  {id:"grandpa",name:"Grandpa Joe",tag:"grandpa",g:"m",pitch:.7,rate:.84,skin:"#f0c8a8",hair:"#dcdcdc",style:"bald",acc:"beardw"},
  {id:"grandma",name:"Grandma Rose",tag:"grandma",g:"f",pitch:.88,rate:.86,skin:"#f2cdb2",hair:"#e8e8e8",style:"bun",acc:"glasses"},
  {id:"robo",name:"Robo",tag:"robot",g:"n",pitch:.35,rate:.95,skin:"#9fb4c7",style:"robo"},
  {id:"boo",name:"Boo",tag:"ghost",g:"n",pitch:1.9,rate:.9,skin:"#f4f6f4",style:"ghost"}
];
const CHAR_TAGS={en:{boy:"Boy",girl:"Girl",teenBoy:"Teen boy",teenGirl:"Teen girl",man:"Man",woman:"Woman",grandpa:"Grandpa",grandma:"Grandma",robot:"Robot",ghost:"Friendly ghost"},
  vi:{boy:"Bé trai",girl:"Bé gái",teenBoy:"Thiếu niên",teenGirl:"Thiếu nữ",man:"Đàn ông",woman:"Phụ nữ",grandpa:"Ông",grandma:"Bà",robot:"Rô-bốt",ghost:"Ma thân thiện"},
  es:{boy:"Niño",girl:"Niña",teenBoy:"Chico",teenGirl:"Chica",man:"Hombre",woman:"Mujer",grandpa:"Abuelo",grandma:"Abuela",robot:"Robot",ghost:"Fantasma"},
  fr:{boy:"Garçon",girl:"Fille",teenBoy:"Ado",teenGirl:"Ado",man:"Homme",woman:"Femme",grandpa:"Papi",grandma:"Mamie",robot:"Robot",ghost:"Fantôme"},
  zh:{boy:"男孩",girl:"女孩",teenBoy:"少年",teenGirl:"少女",man:"男士",woman:"女士",grandpa:"爷爷",grandma:"奶奶",robot:"机器人",ghost:"友善幽灵"}};
const HI_IM={en:"Hi! I'm {n}. Want to chat with me?",vi:"Xin chào! Mình là {n}. Nói chuyện với mình nhé?",es:"¡Hola! Soy {n}. ¿Charlamos?",fr:"Salut ! Je suis {n}. On discute ?",zh:"你好！我是{n}。和我聊聊天吧？"};
Object.assign(PACKS.en.ui,{chars:"Talking characters",charsN:"Pick who talks to you. Each one has its own face and voice. Tap ▶ to hear them.",sysVoice:"Device voice",sysVoiceN:"Auto picks a voice that fits the character and your language. Voices come from your phone or computer.",autoVoice:"Auto (match character)",talkMode:"Hands-free talk mode",talkModeN:"The character speaks, then listens for your answer, like a phone call.",talkOn:"Talk mode on. Speak after the character finishes.",talkOff:"Talk mode off",charNow:"Now talking: {n}"});
Object.assign(PACKS.vi.ui,{chars:"Nhân vật biết nói",charsN:"Chọn người nói chuyện với bạn. Mỗi nhân vật có khuôn mặt và giọng riêng. Bấm ▶ để nghe thử.",sysVoice:"Giọng của thiết bị",sysVoiceN:"Tự động chọn giọng hợp với nhân vật và ngôn ngữ. Giọng có sẵn trên điện thoại hoặc máy tính của bạn.",autoVoice:"Tự động (hợp nhân vật)",talkMode:"Chế độ nói chuyện rảnh tay",talkModeN:"Nhân vật nói xong sẽ lắng nghe bạn trả lời, như gọi điện.",talkOn:"Đã bật nói chuyện rảnh tay. Hãy nói sau khi nhân vật nói xong.",talkOff:"Đã tắt nói chuyện rảnh tay",charNow:"Đang nói chuyện với: {n}"});
Object.assign(PACKS.es.ui,{chars:"Personajes que hablan",charsN:"Elige quién te habla. Cada uno tiene su cara y su voz. Toca ▶ para oírlos.",sysVoice:"Voz del dispositivo",autoVoice:"Auto (según personaje)",talkMode:"Modo manos libres",talkModeN:"El personaje habla y luego escucha tu respuesta.",talkOn:"Manos libres activado.",talkOff:"Manos libres desactivado",charNow:"Hablando con: {n}"});
Object.assign(PACKS.fr.ui,{chars:"Personnages qui parlent",charsN:"Choisis qui te parle. Chacun a son visage et sa voix. Touche ▶ pour l'écouter.",sysVoice:"Voix de l'appareil",autoVoice:"Auto (selon le personnage)",talkMode:"Mode mains libres",talkModeN:"Le personnage parle, puis écoute ta réponse.",talkOn:"Mains libres activé.",talkOff:"Mains libres désactivé",charNow:"Tu parles avec : {n}"});
Object.assign(PACKS.zh.ui,{chars:"会说话的角色",charsN:"选择和你说话的角色。每个都有自己的脸和声音。点 ▶ 试听。",sysVoice:"设备语音",autoVoice:"自动（匹配角色）",talkMode:"免提对话模式",talkModeN:"角色说完后会听你回答，就像打电话。",talkOn:"已开启免提对话。",talkOff:"已关闭免提对话",charNow:"正在对话：{n}"});
Object.assign(PACKS.en.games,{bedtime:["Bedtime Story","Your character tells a cozy story."]});
Object.assign(PACKS.vi.games,{bedtime:["Truyện trước giờ ngủ","Nhân vật kể một câu chuyện ấm áp."]});
Object.assign(PACKS.es.games,{bedtime:["Cuento para dormir","Tu personaje cuenta un cuento."]});
Object.assign(PACKS.fr.games,{bedtime:["Histoire du soir","Ton personnage raconte une histoire."]});
Object.assign(PACKS.zh.games,{bedtime:["睡前故事","你的角色讲一个温馨故事。"]});
GAMES.unshift({id:"bedtime",em:"🌙",langs:["en","vi"]});

S.char=store.get("char","oracle");S.voiceName=store.get("voiceName","");S.talk=false;
const curChar=()=>CHARS.find(c=>c.id===S.char)||CHARS[0];
function faceSVG(c,id){
  const sk=c.skin||"#f0c8a8",h=c.hair||"#222",st=c.style;
  const idA=id?' id="'+id+'" class="mascot"':'';
  const eyes=(x1,x2,y,r,pr,col)=>'<g class="eyes"><g class="open"><circle cx="'+x1+'" cy="'+y+'" r="'+r+'" fill="#fff"/><circle cx="'+x2+'" cy="'+y+'" r="'+r+'" fill="#fff"/><circle class="pupil" cx="'+x1+'" cy="'+y+'" r="'+pr+'" fill="'+col+'"/><circle class="pupil" cx="'+x2+'" cy="'+y+'" r="'+pr+'" fill="'+col+'"/></g><g class="happy"><path d="M'+(x1-r)+' '+(y+1)+' Q'+x1+' '+(y-r-1)+' '+(x1+r)+' '+(y+1)+'" stroke="'+col+'" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M'+(x2-r)+' '+(y+1)+' Q'+x2+' '+(y-r-1)+' '+(x2+r)+' '+(y+1)+'" stroke="'+col+'" stroke-width="1.8" fill="none" stroke-linecap="round"/></g></g>';
  let o='<svg'+idA+' viewBox="0 0 48 48" aria-hidden="true">';
  if(st==="bot"){
    o+='<rect x="3" y="5" width="42" height="40" rx="12" fill="#1d463f" stroke="#e3b04b" stroke-width="2"/><circle cx="24" cy="4" r="3" fill="#e5493d"/><line x1="24" y1="6" x2="24" y2="9" stroke="#e3b04b" stroke-width="2"/>'
      +eyes(16,32,21,5,2.3,"#1c1912").replace(/fill="#fff"/g,'fill="#f5ead0"').replace(/stroke="#1c1912"/g,'stroke="#f5ead0"')
      +'<circle cx="10" cy="29" r="2.5" fill="#e5493d" opacity=".55"/><circle cx="38" cy="29" r="2.5" fill="#e5493d" opacity=".55"/><ellipse class="mouth" cx="24" cy="34" rx="6" ry="3.2" fill="#e5493d"/></svg>';
    return o;
  }
  o+='<circle cx="24" cy="24" r="23" fill="#143530" stroke="#e3b04b" stroke-width="1.5"/>';
  if(st==="robo"){
    o+='<line x1="24" y1="4" x2="24" y2="10" stroke="#e3b04b" stroke-width="2"/><circle cx="24" cy="4" r="2.6" fill="#86d6b4"/><rect x="9" y="10" width="30" height="30" rx="7" fill="'+sk+'" stroke="#6d8296" stroke-width="1.5"/><rect x="5" y="20" width="4" height="9" rx="2" fill="#6d8296"/><rect x="39" y="20" width="4" height="9" rx="2" fill="#6d8296"/>'
      +eyes(18,30,22,4,2.2,"#0d2420")+'<rect class="mouth" x="16" y="31" width="16" height="4" rx="2" fill="#0d2420"/></svg>';return o;}
  if(st==="ghost"){
    o+='<path d="M10 40 V22 Q10 8 24 8 Q38 8 38 22 V40 L34 36 L30 40 L26 36 L22 40 L18 36 L14 40 Z" fill="'+sk+'"/>'+eyes(19,29,22,3.2,2,"#1c1912").replace(/fill="#fff"/g,'fill="#1c1912"')
      +'<circle cx="15" cy="28" r="2" fill="#e5493d" opacity=".4"/><circle cx="33" cy="28" r="2" fill="#e5493d" opacity=".4"/><ellipse class="mouth" cx="24" cy="31" rx="3" ry="2.2" fill="#1c1912"/></svg>';return o;}
  if(st==="long")o+='<path d="M9 26 Q8 8 24 8 Q40 8 39 26 L41 42 Q24 46 7 42 Z" fill="'+h+'"/>';
  if(st==="pigtails")o+='<circle cx="8" cy="22" r="6" fill="'+h+'"/><circle cx="40" cy="22" r="6" fill="'+h+'"/>';
  if(st==="bun")o+='<circle cx="24" cy="8" r="6" fill="'+h+'"/>';
  o+='<rect x="19" y="36" width="10" height="8" fill="'+sk+'"/><ellipse cx="24" cy="26" rx="13.5" ry="14.5" fill="'+sk+'"/>';
  if(st==="short"||st==="long"||st==="pigtails"||st==="bun")o+='<path d="M10.5 24 Q10 10 24 10 Q38 10 37.5 24 Q33 16 24 16.5 Q15 16 10.5 24 Z" fill="'+h+'"/>';
  if(st==="spiky")o+='<path d="M10 23 L11 12 L15 15 L17 8 L21 13 L24 6 L27 13 L31 8 L33 15 L37 12 L38 23 Q33 16 24 17 Q15 16 10 23 Z" fill="'+h+'"/>';
  if(st==="cap")o+='<path d="M10 20 Q11 9 24 9 Q37 9 38 20 Z" fill="#e5493d"/><path d="M24 19 L44 20 Q43 23 36 22 Z" fill="#b8352b"/><path d="M11 21 Q12 25 13 26 L13 21Z M37 21 L35 26 L35 21Z" fill="'+h+'"/>';
  if(st==="bald")o+='<ellipse cx="11" cy="24" rx="2.6" ry="4" fill="'+h+'"/><ellipse cx="37" cy="24" rx="2.6" ry="4" fill="'+h+'"/>';
  o+=eyes(19,29,25,3,1.7,"#1c1912");
  o+='<circle cx="15" cy="31" r="2" fill="#e5493d" opacity=".35"/><circle cx="33" cy="31" r="2" fill="#e5493d" opacity=".35"/>';
  if(c.acc==="beard"||c.acc==="beardw")o+='<path d="M11 28 Q12 41 24 42 Q36 41 37 28 Q32 35 24 35 Q16 35 11 28 Z" fill="'+(c.acc==="beardw"?"#ececec":h)+'"/>';
  o+='<ellipse class="mouth" cx="24" cy="34" rx="3.4" ry="1.8" fill="#b8352b"/>';
  if(c.acc==="glasses")o+='<g fill="none" stroke="#2b2b2b" stroke-width="1.2"><circle cx="19" cy="25" r="4.4"/><circle cx="29" cy="25" r="4.4"/><path d="M23.4 25 H24.6"/></g>';
  if(c.acc==="bow")o+='<path d="M30 10 L36 6 L36 14 Z M42 10 L36 6 L36 14 Z" fill="#e5493d"/><circle cx="36" cy="10" r="1.6" fill="#b8352b"/>';
  if(c.acc==="earrings")o+='<circle cx="10.5" cy="31" r="1.4" fill="#e3b04b"/><circle cx="37.5" cy="31" r="1.4" fill="#e3b04b"/>';
  return o+'</svg>';
}
function charTag(c){const t=CHAR_TAGS[uiLang()]||CHAR_TAGS.en;return t[c.tag]||CHAR_TAGS.en[c.tag]}
function renderMascot(){$("#mascotSlot").innerHTML=faceSVG(curChar(),"mascot")}
function renderChars(){
  const w=$("#chars");w.innerHTML="";
  CHARS.forEach(c=>{const b=document.createElement("div");b.className="char";b.setAttribute("role","button");b.tabIndex=0;b.setAttribute("aria-pressed",c.id===S.char);
    b.innerHTML=faceSVG(c);const n=document.createElement("b");n.textContent=c.name;const tg=document.createElement("span");tg.textContent=charTag(c);
    const pl=document.createElement("button");pl.type="button";pl.className="play";pl.textContent="▶";pl.setAttribute("aria-label","Hear "+c.name);
    pl.onclick=e=>{e.stopPropagation();speakAs(c,fill(HI_IM[replyLang()]||HI_IM.en,{n:c.name}))};
    const choose=()=>selectChar(c.id);b.onclick=choose;b.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose()}};
    b.append(n,tg,pl);w.append(b)});
}
function selectChar(id){
  S.char=id;store.set("char",id);renderChars();renderMascot();sfx("coin");
  const c=curChar();toast(fill(T("charNow"),{n:c.name}));
  speakAs(c,fill(HI_IM[replyLang()]||HI_IM.en,{n:c.name}));mascot("happy");
}
const FEM=/female|woman|samantha|victoria|karen|moira|tessa|fiona|zira|aria|jenny|susan|hazel|ava|allison|serena|linh|hoaimy|hoai|mai|lan|paulina|monica|mónica|helena|elvira|amelie|amélie|audrey|denise|marie|julie|ting|xiaoxiao|xiaoyi|huihui|yaoyao|sin-ji|sinji|hiugaai|hiumaan|tracy|kyoko|nanami|sora|yuna|heami|anna|alice|ellen|sara|zuzana|google.*(uk english female|us english)/i;
const MAL=/\bmale\b|daniel|alex\b|fred|david|mark|george|guy|ryan|nam\b|minh|jorge|diego|pablo|thomas|henri|paul|yunxi|yunyang|kangkang|wanlung|danny|otoya|keita|injoon|rishi|aaron|arthur|oliver|james|google uk english male/i;
let VOICES=[];
function loadVoices(){try{VOICES=speechSynthesis.getVoices()||[]}catch(e){VOICES=[]}renderVoiceSel()}
function voicesFor(l){return VOICES.filter(v=>v.lang&&v.lang.toLowerCase().replace("_","-").startsWith(l))}
function pickVoice(c,l){
  if(S.voiceName){const v=VOICES.find(v=>v.name===S.voiceName);if(v)return v}
  const list=voicesFor(l);if(!list.length)return null;
  const f=list.filter(v=>FEM.test(v.name)),m=list.filter(v=>MAL.test(v.name)&&!FEM.test(v.name));
  if(c.g==="f"&&f.length)return f[0];
  if(c.g==="m"&&m.length)return m[0];
  if(c.g==="m"&&list.length>1)return list.find(v=>!FEM.test(v.name))||list[0];
  return list[0];
}
function renderVoiceSel(){
  const sel=$("#voiceSel");if(!sel)return;sel.innerHTML="";
  const a=document.createElement("option");a.value="";a.textContent=T("autoVoice");sel.append(a);
  const l=replyLang();const list=voicesFor(l).length?voicesFor(l):VOICES;
  list.slice(0,60).forEach(v=>{const o=document.createElement("option");o.value=v.name;o.textContent=v.name+" ("+v.lang+")";sel.append(o)});
  sel.value=S.voiceName&&[...sel.options].some(o=>o.value===S.voiceName)?S.voiceName:"";
}
function speakAs(c,text,after){
  if(!("speechSynthesis" in window)){if(after)after();return}
  try{speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text.replace(/\*[^*]+\*/g,"").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,""));
    const m=MODES[S.mode]||{pitch:1,rate:1};
    u.pitch=Math.max(.1,Math.min(2,c.pitch*(1+(m.pitch-1)*.3)));u.rate=Math.max(.5,Math.min(1.6,c.rate*(1+(m.rate-1)*.5)));
    const l=replyLang();u.lang=(LANGS[l]&&LANGS[l].b)||"en-US";const v=pickVoice(c,l);if(v)u.voice=v;
    u.onstart=()=>{const el=$("#mascot");if(el){clearTimeout(mascotT);el.classList.remove("is-think","is-happy");el.classList.add("is-talk")}};
    u.onboundary=e=>{if(window.ST){ST.wb=performance.now();ST.wl=Math.max(2,e.charLength||4);ST.hasWB=true}};
    u.onend=u.onerror=()=>{const el=$("#mascot");if(el)el.classList.remove("is-talk");if(after)after()};
    speechSynthesis.speak(u);
  }catch(e){if(after)after()}
}
function setTalk(on){
  S.talk=on;$("#talkBtn").classList.toggle("talk-on",on);$("#talkSw").setAttribute("aria-checked",on);
  if(!on){try{rec&&rec.stop()}catch(e){}toast(T("talkOff"));return}
  if(!SR){toast(T("micOff"));}else toast(T("talkOn"));
  if(SR&&!(window.speechSynthesis&&speechSynthesis.speaking))listen();
}
function bedtimeStory(){
  const vi=replyLang()==="vi";
  const B=vi?{s1:["Ngày xửa ngày xưa, {h} sống trong một ngôi nhà nhỏ bên khu rừng màu kẹo ngọt.","Ngày xưa, ở một thị trấn có mây làm bằng kẹo bông, có {h}."],s2:["Mỗi tối, {h} đều mơ về {l}.","Điều {h} thích nhất trên đời là {l}."],s3:["Một tối nọ, một chú cú buồn ngủ gõ cửa sổ thì thầm: 'Mặt trăng mất ánh sáng rồi!'","Một đêm, một chú rồng tí hon bị nấc cụt nhờ {h} giúp đỡ."],s4:["Thế là {h} mang theo đèn pin, ba cái bánh quy và thật nhiều can đảm, rồi lên đường.","Cả hai rón rén bước qua cây cầu làm bằng ánh trăng, vừa đi vừa cười khúc khích."],s5:["Cuối cùng, chỉ một lời nói tử tế đã sửa được mọi thứ, và cả bầu trời lại lấp lánh.","Họ phát hiện bí quyết chính là tiếng cười, và tiếng nấc biến thành pháo hoa tí hon."],s6:["Rồi {h} chui vào chăn, mỉm cười và chìm vào giấc ngủ. Hết rồi. Chúc ngủ ngon. 🌙"],hero:"một chú cáo nhỏ dũng cảm",likes:["bánh xèo nóng hổi","sao băng","đôi tất êm ái"],q:"Bạn muốn nghe thêm một truyện nữa không?"}
   :{s1:["Once upon a time, {h} lived in a tiny house at the edge of a candy-colored forest.","Long ago, in a town where the clouds were made of cotton candy, there lived {h}."],s2:["Every night, {h} dreamed about {l}.","{h}'s favorite thing in the whole world was {l}."],s3:["One evening, a sleepy owl tapped on the window and whispered, 'The moon has lost its glow!'","One night, a tiny dragon with the hiccups asked {h} for help."],s4:["So {h} packed a flashlight, three cookies and a lot of courage, and off they went.","Together they tiptoed across a bridge made of moonbeams, giggling the whole way."],s5:["In the end, one kind word fixed everything, and the whole sky sparkled again.","They discovered the secret ingredient was laughter, and the hiccups turned into tiny fireworks."],s6:["Then {h} snuggled into bed, smiled, and drifted off to sleep. The end. Goodnight. 🌙"],hero:"a brave little fox",likes:["warm pancakes","shooting stars","fluffy socks"],q:"Want another story?"};
  const h=S.name||B.hero,l=S.likes.length?pick(S.likes):pick(B.likes);
  return ["s1","s2","s3","s4","s5","s6"].map(k=>fill(pick(B[k]),{h,l})).join(" ")+"\n\n"+B.q;
}

/* ================= mascot, sound, voice ================= */
let mascotT;
function mascot(state){const el=$("#mascot");el.classList.remove("is-happy","is-think","is-talk");if(state)el.classList.add("is-"+state);clearTimeout(mascotT);if(state!=="think")mascotT=setTimeout(()=>el.classList.remove("is-happy","is-talk"),state==="talk"?2600:1800)}
function talk(text){mascot("talk");clearTimeout(mascotT);mascotT=setTimeout(()=>mascot(null),Math.min(4000,600+text.length*25))}
let AC=null;
function sfx(type){
  if(!S.sound)return;
  try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();
    const seq={blip:[[660,.05]],blip2:[[880,.05],[1100,.05]],ding:[[1320,.09],[1760,.12]],coin:[[988,.06],[1319,.14]],buzz:[[160,.18]],drum:[[220,.05],[220,.05],[220,.05],[330,.1]],win:[[523,.09],[659,.09],[784,.09],[1047,.22]]}[type]||[[600,.05]];
    let t0=AC.currentTime;
    seq.forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type=type==="buzz"?"sawtooth":"square";o.frequency.value=f;g.gain.setValueAtTime(.045,t0);g.gain.exponentialRampToValueAtTime(.0001,t0+d);o.connect(g).connect(AC.destination);o.start(t0);o.stop(t0+d+.02);t0+=d*.9});
  }catch(e){}
}
function speak(text,force){
  if(!(S.voice||S.talk||force))return;
  speakAs(curChar(),text,()=>{if(S.talk&&!S.busy)setTimeout(listen,250)});
}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
let rec=null;
function listen(){
  if(!SR||rec)return;
  try{rec=new SR();const l=S.tutor?S.tutor.lang:(S.game&&S.game.id==="practice"?S.game.lang:replyLang());rec.lang=(LANGS[l]&&LANGS[l].b)||navigator.language||"en-US";rec.interimResults=false;
    rec.onresult=e=>{const t=e.results[0][0].transcript;if(t)send(t)};
    rec.onerror=e=>{if(e&&(e.error==="not-allowed"||e.error==="service-not-allowed"||e.error==="audio-capture")){toast(T("micOff"));if(S.talk)setTalk(false)}};
    rec.onend=()=>{rec=null;$("#micBtn").classList.remove("rec")};
    rec.start();$("#micBtn").classList.add("rec");
  }catch(e){rec=null;toast(T("micOff"))}
}
if(SR){$("#micBtn").hidden=false;$("#micBtn").onclick=()=>{if(rec){try{rec.stop()}catch(e){}return}listen()}}

/* ================= wishes & cards ================= */
const WISH_IDEAS={en:["I wish my homework did itself","I wish I could teleport to the beach","I wish my cat could talk","I wish for unlimited pizza","I wish I was brave enough to start my business"],vi:["Ước gì bài tập tự làm xong","Ước gì mình dịch chuyển tới biển được","Ước gì con mèo biết nói","Ước có trà sữa miễn phí cả đời","Ước mình đủ can đảm để khởi nghiệp"],es:["Deseo que mi tarea se haga sola","Deseo teletransportarme a la playa","Deseo pizza ilimitada"],fr:["Je souhaite que mes devoirs se fassent tout seuls","Je souhaite me téléporter à la plage","Je souhaite des croissants illimités"],zh:["我希望作业能自己写完","我希望能瞬移到海边","我希望奶茶永远免费"]};
function grantWish(w){
  w=w.trim();if(!w)return;
  if(S.lang==="auto"){const d=detectLang(w);if(d){S.cur=d;store.set("cur",d);applyUI()}}
  const p=P()&&P()!==PACKS.en?P():null;const s=(p||PACKS.en).s;
  const core=p?w.replace(p.s.re.wishStrip,"").replace(/[.!?。！？]+$/,""):w.replace(/^(i wish( for| that| to)?|wish( for)?)\s*/i,"").replace(/[.!?]+$/,"");
  const ans=(p?"*✨* ":"*POOF* ")+fill(s.grant,{w:cap(core||w),t:pick(s.twists)})+" "+pick(s.real);
  S.stats.wishes++;saveStats();sfx("win");mascot("happy");confetti();
  S.wishes.unshift({w,ans,d:today()});S.wishes=S.wishes.slice(0,20);store.set("wishes",S.wishes);
  renderWishes();makeCard(w,ans);speak(ans);
}
function wrapText(ctx,text,x,y,maxW,lh,maxLines){
  const cjk=/[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af\u0E00-\u0E7F]/.test(text);
  const tokens=cjk?Array.from(text):text.split(/\s+/);const sep=cjk?"":" ";let line="",lines=[];
  for(const w of tokens){const test=line?line+sep+w:w;if(ctx.measureText(test).width>maxW&&line){lines.push(line);line=w}else line=test}
  if(line)lines.push(line);lines=lines.slice(0,maxLines);lines.forEach((l,i)=>ctx.fillText(l,x,y+i*lh));return y+lines.length*lh;
}
async function makeCard(q,a){
  try{await document.fonts.ready}catch(e){}
  const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d");
  x.fillStyle="#0d2420";x.fillRect(0,0,1080,1350);
  x.strokeStyle="#e3b04b";x.lineWidth=10;x.strokeRect(50,50,980,1250);
  for(let i=0;i<32;i++){x.fillStyle=i%2?"#e5493d":"#e3b04b";x.beginPath();x.arc(80+i*30.3,50,7,0,7);x.fill();x.beginPath();x.arc(80+i*30.3,1300,7,0,7);x.fill()}
  x.fillStyle="#e3b04b";x.font="64px Bungee, Impact, sans-serif";x.textAlign="center";x.fillText("FUNHOUSE ORACLE",540,170);
  x.font="26px 'DM Mono', monospace";x.fillStyle="#a7bcb3";x.fillText(MODES[S.mode].em+"  "+modeName(S.mode).toUpperCase()+"  ·  "+today(),540,220);
  x.fillStyle="#f5ead0";x.fillRect(110,270,860,260);
  x.textAlign="left";x.font="24px 'DM Mono', monospace";x.fillStyle="#e5493d";x.fillText(T("youAsked"),150,320);
  x.fillStyle="#1c1912";x.font="bold 40px 'Atkinson Hyperlegible', sans-serif";wrapText(x,"“"+q+"”",150,380,780,52,3);
  x.font="24px 'DM Mono', monospace";x.fillStyle="#e3b04b";x.fillText(T("oracleSays"),150,610);
  x.fillStyle="#eef3ea";x.font="40px 'Atkinson Hyperlegible', sans-serif";wrapText(x,a.replace(/\n+/g," "),150,670,780,56,10);
  x.textAlign="center";x.fillStyle="#86d6b4";x.font="26px 'DM Mono', monospace";x.fillText("✦ funhouse oracle ✦",540,1240);
  const img=new Image();img.src=c.toDataURL("image/png");img.className="card-img";img.alt="Oracle card: "+q;
  const r=$("#wishResult");r.innerHTML="";
  const tk=document.createElement("div");tk.className="ticket";const h=document.createElement("div");h.className="t-head";h.textContent=T("oracleSays");const p=document.createElement("p");p.style.margin="8px 0 0";p.textContent=a;tk.append(h,p);
  const hint=document.createElement("p");hint.className="note";hint.textContent=T("cardHint");
  const cp=document.createElement("button");cp.className="btn ghost small";cp.type="button";cp.textContent=T("copyText");
  cp.onclick=()=>copy("🔮 "+q+"\n"+a+"\n— Funhouse Oracle");
  r.append(tk,document.createElement("br"),img,hint,cp);
}
function copy(text){try{navigator.clipboard.writeText(text).then(()=>toast(T("copied"))).catch(()=>toast(T("copyFail")))}catch(e){toast(T("copyFail"))}}

/* ================= renders ================= */
function itemEl(main,sub,btnTxt,onBtn,onClick){
  const d=document.createElement("div");d.className="item";const m=document.createElement("div");m.textContent=main;
  if(sub){const i=document.createElement("i");i.textContent=sub;m.append(i)}d.append(m);
  if(btnTxt){const b=document.createElement("button");b.type="button";b.textContent=btnTxt;b.onclick=e=>{e.stopPropagation();onBtn()};d.append(b)}
  if(onClick)d.onclick=onClick;return d;
}
function renderWishes(){const l=$("#wishList");l.innerHTML="";if(!S.wishes.length){l.innerHTML='<div class="note"></div>';l.firstChild.textContent=T("jarEmpty");return}
  S.wishes.slice(0,8).forEach(w=>l.append(itemEl(w.w,w.d,null,null,()=>makeCard(w.w,w.ans))))}
function renderFavs(){const l=$("#favList");l.innerHTML="";if(!S.favs.length){const n=document.createElement("div");n.className="note";n.textContent=T("favEmpty");l.append(n);return}
  S.favs.forEach((f,i)=>l.append(itemEl(f.m+" "+f.t,f.d,"📋",()=>copy(f.t))))}
function renderMem(){const l=$("#memList");l.innerHTML="";
  const facts=[];if(S.name)facts.push({t:"👤 "+S.name,k:"name"});S.likes.forEach((x,i)=>facts.push({t:"💛 "+x,k:i}));
  if(!facts.length){const n=document.createElement("div");n.className="note";n.textContent=T("memEmpty");l.append(n);return}
  facts.forEach(f=>l.append(itemEl(f.t,null,"✕",()=>{if(f.k==="name"){S.name="";store.set("name","");$("#nameInput").value=""}else{S.likes.splice(f.k,1);store.set("likes",S.likes)}renderMem()})))}
function touchStreak(){const t=today(),s=S.stats;if(s.last===t)return;const y=new Date(Date.now()-864e5).toISOString().slice(0,10);s.streak=s.last===y?s.streak+1:1;s.last=t}
const BADGES=[["First Giggle","😂",s=>s.laughs>=1],["Laugh Collector","🎪",s=>s.laughs>=10],["Chatterbox","💬",s=>s.msgs>=25],["Wish Maker","🪙",s=>s.wishes>=3],["Riddle Champ","🧩",s=>s.riddles>=5],["Gamer","🕹️",s=>s.games>=5],["Mind Read","🧠",s=>s.mind>=1],["Party Host","🎉",s=>s.party>=1],["Collector","⭐",s=>s.favs>=5],["Daily Solver","📅",s=>s.daily>=1],["3-Day Streak","🔥",s=>s.streak>=3],["7-Day Streak","🏆",s=>s.streak>=7]];
let badgeSeen=new Set(store.get("badges",[]));
function saveStats(){store.set("stats",S.stats);renderStats();
  BADGES.forEach(([n,e,f])=>{if(f(S.stats)&&!badgeSeen.has(n)){badgeSeen.add(n);store.set("badges",[...badgeSeen]);setTimeout(()=>{toast("🏅 "+T("badge")+": "+e+" "+n);confetti();sfx("win")},400)}})}
function renderStats(){
  const s=S.stats;$("#stats").innerHTML="";
  [[T("stL"),s.laughs],[T("stM"),s.msgs],[T("stW"),s.wishes],[T("stS"),s.streak]].forEach(([k,v])=>{const d=document.createElement("div");d.className="stat";const b=document.createElement("b");b.textContent=v;const sp=document.createElement("span");sp.textContent=k;d.append(b,sp);$("#stats").append(d)});
  $("#badges").innerHTML="";BADGES.forEach(([n,e,f])=>{const b=document.createElement("span");b.className="badge"+(f(s)?" got":"");b.textContent=e+" "+n;$("#badges").append(b)});
}
function renderDaily(){$("#dailyState").textContent=S.stats.dailyLast===today()?T("dailyDone"):T("dailyD")}
function renderGames(){
  const w=$("#games");w.innerHTML="";const pg=PU().games;
  GAMES.forEach(g=>{const [n,d]=(pg[g.id]||PACKS.en.games[g.id]);const b=document.createElement("button");b.type="button";b.className="game";
    const em=document.createElement("span");em.className="em";em.textContent=g.em;const bn=document.createElement("b");bn.textContent=n;const sd=document.createElement("span");sd.textContent=d;b.append(em,bn,sd);
    if(g.langs?!g.langs.includes(uiLang()):(g.en&&uiLang()!=="en")){const tg=document.createElement("span");tg.className="tag";tg.textContent="EN";b.append(tg)}
    b.onclick=()=>startGame(g.id);w.append(b)});
}
function renderModes(){
  const w=$("#modes");w.innerHTML="";
  Object.entries(MODES).forEach(([k,m])=>{const b=document.createElement("button");b.type="button";b.className="mode";b.setAttribute("aria-pressed",k===S.mode);
    const em=document.createElement("span");em.className="em";em.textContent=m.em;b.append(em,document.createTextNode(modeName(k)));
    b.onclick=()=>{if(S.mode===k)return;S.mode=k;store.set("mode",k);renderModes();sfx("coin");
      const s=SP();oracle(say(pick(s.modeSwitch)+" "+fill(s.modeNow,{m:modeName(k)}),pick(s.ice)))};w.append(b)});
  if(!S.custom){const a=document.createElement("button");a.type="button";a.className="mode add";a.textContent="＋ "+T("addChar");a.onclick=()=>{switchTab("me");$("#cName").focus()};w.append(a)}
  $("#modeLine").textContent=MODES[S.mode].em+" "+modeName(S.mode)+" · "+modeLine(S.mode);
}
function renderLangSel(){
  const sel=$("#langSel");sel.innerHTML="";
  Object.entries(LANGS).forEach(([k,v])=>{const o=document.createElement("option");o.value=k;o.textContent=(k==="auto"?"🌐 "+v.n:v.n)+(PACKS[k]?" ★":"");sel.append(o)});
  sel.value=S.lang;
}
function applyUI(){
  document.querySelectorAll("[data-i]").forEach(el=>{const v=T(el.dataset.i);if(v)el.textContent=v});
  document.querySelectorAll("[data-ip]").forEach(el=>{const v=T(el.dataset.ip);if(v)el.placeholder=v});
  document.documentElement.lang=uiLang();
  $("#langLabel").textContent=S.lang==="auto"?"Auto · "+S.cur.toUpperCase():S.lang.toUpperCase();
  renderModes();renderGames();renderStats();renderWishes();renderFavs();renderMem();renderDaily();renderChars();renderVoiceSel();
  if(!S.game&&!S.busy&&$("#chips").children.length)setChips();
}

/* ================= misc UI ================= */
let toastT;
function toast(t){let el=$(".toast");if(!el){el=document.createElement("div");el.className="toast";el.setAttribute("role","status");document.body.append(el)}el.textContent=t;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>el.hidden=true,2300)}
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=$("#confetti"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
  const cols=["#e3b04b","#e5493d","#86d6b4","#f5ead0"];
  const ps=Array.from({length:90},()=>({x:innerWidth/2,y:innerHeight/3,vx:(Math.random()-.5)*12,vy:Math.random()*-10-3,s:Math.random()*6+4,c:pick(cols),r:Math.random()*6}));
  let f=0;(function tick(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.r+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore()});if(++f<90)requestAnimationFrame(tick);else x.clearRect(0,0,c.width,c.height)})();
}
function switchTab(v){
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.v===v));
  ["chat","games","future","learn","wish","me"].forEach(n=>$("#view-"+n).hidden=n!==v);
  $("#composer").hidden=v!=="chat";
  if(v==="chat")setTimeout(scrollDown,0);else $("#stage").scrollTop=0;
}
function autoGrow(){const i=$("#input");i.style.height="auto";i.style.height=Math.min(i.scrollHeight,120)+"px"}

/* ================= wire up ================= */
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{switchTab(t.dataset.v);sfx("blip")});
$("#sendBtn").onclick=()=>send();
$("#input").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}});
$("#input").addEventListener("input",autoGrow);
$("#brainChip").onclick=()=>switchTab("me");
$("#langChip").onclick=()=>{switchTab("me");$("#langSel").focus()};
$("#dailyBtn").onclick=()=>startGame("daily");
$("#wishBtn").onclick=()=>grantWish($("#wishInput").value);
$("#wishRandom").onclick=()=>{const w=pick(WISH_IDEAS[uiLang()]||WISH_IDEAS.en);$("#wishInput").value=w;grantWish(w)};
$("#nameInput").value=S.name;
$("#nameInput").addEventListener("change",e=>{S.name=e.target.value.trim();store.set("name",S.name);renderMem();if(S.name)toast(fill(T("nameHi"),{n:S.name}))});
$("#langSel").onchange=e=>{S.lang=e.target.value;store.set("lang",S.lang);if(S.lang!=="auto"){S.cur=S.lang;store.set("cur",S.cur)}applyUI();sfx("coin")};
function renderSpice(){document.querySelectorAll("#spiceSeg button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.v===S.spice))}
document.querySelectorAll("#spiceSeg button").forEach(b=>b.onclick=()=>{S.spice=+b.dataset.v;store.set("spice",S.spice);renderSpice();sfx("blip")});
$("#voiceSw").setAttribute("aria-checked",S.voice);
$("#voiceSw").onclick=()=>{S.voice=!S.voice;store.set("voice",S.voice);$("#voiceSw").setAttribute("aria-checked",S.voice);if(S.voice)speak(say(pick(SP().happy),""),true)};
$("#soundSw").setAttribute("aria-checked",S.sound);
$("#soundSw").onclick=()=>{S.sound=!S.sound;store.set("sound",S.sound);$("#soundSw").setAttribute("aria-checked",S.sound);sfx("ding")};
const savedModel=store.get("model",null);if(savedModel)$("#modelSel").value=savedModel;
$("#loadBrain").onclick=loadBrain;
$("#useSpark").onclick=()=>{S.brainOn=false;setChip("spark","Spark");toast(T("sparkOn"))};
$("#resetBtn").onclick=()=>{chatEl.innerHTML="";S.history=[];S.game=null;S.awaiting=null;greet();switchTab("chat")};
$("#copyChat").onclick=()=>copy([...chatEl.querySelectorAll(".msg")].map(m=>(m.classList.contains("me")?"🙋 ":"🔮 ")+m.querySelector(".bubble").textContent).join("\n\n"));
$("#memClear").onclick=()=>{S.likes=[];store.set("likes",[]);renderMem()};
function loadCustomForm(){const c=S.custom||{};$("#cEmoji").value=c.em||"";$("#cName").value=c.name||"";$("#cDesc").value=c.desc||"";$("#cCatch").value=c.catch||""}
$("#cSave").onclick=()=>{const name=$("#cName").value.trim();if(!name){$("#cName").focus();return}
  S.custom={em:$("#cEmoji").value.trim()||"✨",name,desc:$("#cDesc").value.trim()||"A fun, kind character.",catch:$("#cCatch").value.trim()};
  store.set("custom",S.custom);applyCustom();S.mode="custom";store.set("mode","custom");renderModes();toast(T("charSaved"));sfx("win");switchTab("chat");
  oracle(say((S.custom.catch?S.custom.catch+" ":"")+fill(SP().modeNow,{m:name}),pick(SP().ice)))};
window.__fhoReady=1;
$("#cDel").onclick=()=>{S.custom=null;store.set("custom",null);applyCustom();if(S.mode==="custom"){S.mode="comic";store.set("mode","comic")}loadCustomForm();renderModes()};

function greet(){
  const s=SP();const n=S.name?", "+S.name:"";
  oracle(say(fill(s.welcome,{n}),s.moodQ),["😄","🙂","😐","😕","😫"].map(m=>({t:m,c:"mood:"+m})));
}
$("#mascotBtn").onclick=()=>{switchTab("me");$("#charPanel").scrollIntoView({block:"start"})};
$("#talkBtn").onclick=()=>setTalk(!S.talk);
$("#talkSw").onclick=()=>setTalk(!S.talk);
$("#voiceSel").onchange=e=>{S.voiceName=e.target.value;store.set("voiceName",S.voiceName);speakAs(curChar(),fill(HI_IM[replyLang()]||HI_IM.en,{n:curChar().name}))};
if("speechSynthesis" in window){loadVoices();try{speechSynthesis.addEventListener("voiceschanged",loadVoices)}catch(e){speechSynthesis.onvoiceschanged=loadVoices}}
/* init runs at the end of the extension script */
