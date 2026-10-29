
/* ================= EXTENSION: Cantonese, Future, Lingo Lab ================= */
function deepMerge(a,b){
  const o=Array.isArray(a)?a.slice():Object.assign({},a);
  for(const k in b){const bv=b[k],av=a?a[k]:undefined;
    o[k]=(bv&&typeof bv==="object"&&!Array.isArray(bv)&&!(bv instanceof RegExp)&&av&&typeof av==="object"&&!Array.isArray(av)&&!(av instanceof RegExp))?deepMerge(av,bv):bv}
  return o;
}

/* ---------- Cantonese (粵語) ---------- */
PACKS.yue=deepMerge(PACKS.zh,{
 ui:{tagline:"投入問題 · 收穫開心",tChat:"傾偈",tGames:"遊戲",tWish:"許願",tMe:"我",ph:"問嘢、許願，或者打個招呼…",send:"發送",
  gTitle:"街機遊戲",gSub:"揀一個，神諭會喺傾偈度陪你玩。完全離線都用得。",daily:"每日謎題",dailyD:"每日一條新謎題，keep住連勝。",dailyDone:"今日搞掂咗 ✓ 聽日再嚟。",
  wTitle:"許願投幣口",wSub:"投入一個願望。神燈精靈會幫你實現（附送轉折），仲會印張卡畀你。",wLabel:"你嘅願望",wPh:"我希望啲功課自己做完…",grant:"實現我嘅願望",surprise:"嚇我一跳",jar:"願望樽",jarEmpty:"實現咗嘅願望會喺度出現。",
  mTitle:"設定同統計",mSub:"所有嘢只會儲喺呢個瀏覽器。",langL:"語言",langN:"自動識別你打緊嘅語言。英文、越南文、西班牙文、法文、普通話同粵語有完整離線回覆。載入 AI 大腦就可以用任何語言傾。",
  nameL:"神諭應該點叫你？",nameP:"名或者花名",spice:"搞笑程度",sp0:"溫和",sp1:"搞笑",sp2:"癲",spN:"癲都係乾淨嘅，只係古怪啲。",
  voice:"讀出回覆",voiceN:"每個模式有自己把聲，用你嘅語言。",sound:"街機音效",soundN:"叮、嗶同細細聲嘅號角。",
  custom:"整你自己嘅角色",cEmoji:"表情",cName:"名",cDesc:"性格",cCatch:"口頭禪",cSave:"儲存角色",cDel:"刪除",cNote:"你嘅角色會喺模式欄出現。載入 AI 大腦之後會完全扮演。",
  brain:"AI 大腦",brainN:"Spark 係內置離線大腦：即刻用、唔使下載、任何手機都得。載入真正 AI 模型，就可以用任何語言自由傾。",model:"模型",load:"載入 AI 大腦",spark:"用 Spark",
  bNoGpu:"呢個瀏覽器冇 WebGPU，行唔到 AI 大腦。Spark 照用。",bErr:"呢版下載唔到 AI 大腦。Claude 預覽會封鎖外部下載。放上你自己個網站（Netlify、GitHub Pages、Vercel）就用得。",
  bReady:"AI 大腦準備好",bLoading:"載入緊…",mem:"神諭記得嘅嘢",memEmpty:"講「我鍾意…」，神諭就會記住。",memClear:"全部忘記",
  favs:"收藏嘅回覆",favEmpty:"撳回覆上面嘅 ⭐ 收藏喺度。",stats:"你嘅開心統計",badges:"徽章",copy:"複製對話",clear:"清除對話",
  stL:"笑聲",stM:"訊息",stW:"願望",stS:"連續日數",friend:"朋友",copied:"複製咗",copyFail:"複製唔到，請自己揀文字。",cardHint:"長按或者右鍵撳張卡就可以儲存分享。",copyText:"複製文字",
  oracleSays:"神諭話",youAsked:"你問",laughLog:"笑聲已記錄！",saved:"已收藏",badge:"解鎖徽章",micOff:"呢度用唔到咪。放上你自己個網站就用得。",
  addChar:"新增",remove:"移除",sparkOn:"用緊離線大腦 Spark",charSaved:"角色儲存咗",nameHi:"你好，{n}！",
  chars:"識講嘢嘅角色",charsN:"揀邊個同你傾。每個都有自己個樣同把聲。撳 ▶ 試聽。",sysVoice:"裝置語音",sysVoiceN:"自動揀配合角色同語言嘅聲。聲音嚟自你部手機或者電腦。",autoVoice:"自動（配合角色）",talkMode:"免提傾偈模式",talkModeN:"角色講完之後會聽你答，好似打電話咁。",talkOn:"開咗免提傾偈。",talkOff:"閂咗免提傾偈",charNow:"而家同你傾：{n}"},
 modes:{comic:["棟篤笑","食字、笑位、唔怕醜。"],genie:["神燈精靈","實現願望，一定有轉折。"],fortune:["算命師","搞笑預言，幸運數字。"],prof:["嚴厲教授","一本正經，意外好笑。"],free:["自由傾","友善嘅傾偈朋友。"],pirate:["海盜","啊哈！咩都係寶藏。"],cat:["嬲嬲貓","乜都唔在乎，暗中好錫你。"],hype:["打氣教練","全力撐你！"],kids:["小朋友","溫暖、簡單、閃閃下。"],bard:["吟遊詩人","戲劇感爆燈。"]},
 games:{mind:["讀心術","諗一樣嘢，我嚟估。"],riddle:["謎語衝刺","經典謎語，每條3次機會。"],emoji:["表情估句子","睇表情估短句。"],wyr:["你寧願","荒謬嘅二揀一。"],story:["故事接龍","一齊寫個搞笑故事。"],hotcold:["冷熱估數","估1到100嘅數字。"],rate:["萬物評分","幫你嘅藉口或者主意打分。"],truth:["真心話大冒險","安全、搞笑。"],party:["派對模式","傳手機，2人以上計分。"],decide:["幫我揀","我嚟戲劇性咁揀。"],eight:["魔法8號波","是非題，宇宙答案。"],cookie:["幸運曲奇","擘開一塊。"],ice:["問我問題","我問你有趣嘅問題。"],joke:["笑話機","無窮無盡嘅爛gag。"],bedtime:["瞓前故事","你嘅角色講個溫馨故事。"]},
 chips:{bedtime:"瞓前故事",joke:"講個笑話",wish:"許個願",fortune:"幫我睇相",compliment:"讚下我",roast:"串下我（輕手啲）",pep:"同我打下氣",ask:"問我啲嘢",game:"玩遊戲",yes:"係",no:"唔係",stop:"停",hint:"提示",skip:"跳過",a:"選項A",b:"選項B",truth:"真心話",dare:"大冒險",done:"搞掂 ✅ +1",scores:"比分",another:"再嚟一個",vent:"我想呻下"},
 s:{greet:["你好{n}！歡迎嚟到唯一一個零食係想像、笑話係真嘅檔口。","哈囉{n}！神諭瞓醒咗，仲飲多咗杯咖啡。"],greetQ:"講吓，你今日點呀？由1分到奶茶分打個分。",
  jokes:["點解骷髏骨唔打交？因為佢哋冇膽。","數學書點解咁唔開心？因為佢有太多問題。","我叫部電腦休息下，佢話好呀，然後就瞓咗。","番茄點解面紅？因為佢見到沙律醬。","點解魚唔識講嘢？因為佢成日口含水。","點解企鵝唔怕凍？因為佢成日著住禮服，好有型。"],
  jokeQ:["幫呢個笑話打個分啦，1到10，手下留情。","再嚟一個，定係你講一個畀我聽？"],
  grant:"批准！{w}，{t}。",twists:["但淨係星期二有效","但每次實現附近都會有人吹口哨","但會有隻好有禮貌嘅白鴿跟你一個禮拜","但你每次都要大嗌「噹噹！」","但佢會裝喺一個大到離譜嘅箱度送嚟","但你啲襪以後都唔會成對","仲送埋：你下個菠蘿包會完美無瑕"],
  real:["講真：第一步細過你諗嘅。","講真：你離佢近過你感覺嘅。","講真：每日行細細步，好過「總有一日」嘅大計。"],wishQ:"今個禮拜你可以行邊細細一步？",
  comfort:["送你一（1）個緊急虛擬攬攬，唔設退換。","衰嘅日子好似剪壞頭髮：煩、暫時，之後仲係好故仔。","你做得好過你以為。"],comfortQ:"想聽笑話、打下氣，定係淨係想呻下？我聽緊。",
  happy:["好有活力！我用緊二進制跳勝利舞。","好消息！彩帶炮：已發射。"],happyQ:"係咩令佢咁正？",
  thanks:["唔使客氣！貼士隨意，讚就照收。"],thanksQ:"嗰個聰明嘅腦仲有咩嘢諗緊？",
  fortunes:["你好快會收到意外嘅零食，請收貨。","好嘢喺路上，其中有啲係奶茶。","你下個好主意會喺沖涼嗰陣出現。","今個禮拜你會搵返以為唔見咗嘅嘢，可能係你嘅幹勁。"],fortuneQ:"你信運氣，定係自己創造運氣？",
  compliments:["你有種星期六朝早唔使較鬧鐘嘅能量。","你個笑容應該可以令 Wi-Fi 強啲。","你係嗰種狗仔一見就信嘅人。"],
  roasts:["你撳 snooze 撳到個鬧鐘申請退休。","你開十次雪櫃，希望入面自己生出新嘢食。我明嘅。","你打「哈哈哈」嗰陣面都冇郁過。"],
  pep:["你已經捱過晒100%最差嘅日子，完美紀錄。","唔使完美，淨係要開始。我信你。","深呼吸。你得嘅。然後獎自己一份零食。"],afterQ:"再嚟一個？",
  answers:["梗係啦。星星、月亮同我部多士爐都同意。","嗯，我話唔係，但個 vibe 話係。","係，但你要一路哼歌一路做。","食完零食再問過。","答案係42，係條問題問錯咗。","好明顯，嗰個係扮嘢嘅薯仔。"],
  why:["因為宇宙已經冇第二個橋。","科學家一致認為：40%地心吸力，60% vibe。","因為1987年有隻松鼠批准咗，冇人覆查。"],
  follow:["到你喇：今日最開心係咩事？","我好奇，你點解會諗到呢樣？","快問快答：貓定狗？","講啲令我笑嘅嘢啦。","如果可以瞬間轉移10分鐘，你會去邊？"],
  ice:["如果你係一種零食，你會係乜？","今個禮拜有咩小事令你笑咗？","如果動物識講嘢，邊隻最冇禮貌？","你嘅超級英雄名係乜？","你最冇用嘅才藝係乜？","邊樣嘢食你可以日日食一世？"],
  react:["呢個答案幫你贏咗7分想像分。","大膽，估唔到，我尊重。","我寫咗入《優秀答案之書》。","唔係天才就係混亂，可能兩樣都係。"],
  eight:["肯定，肯定到有啲可疑。","飲啖水再問過。","我嘅消息來源話唔係，佢哋係白鴿。","係，加雙份芝士。"],
  nameSet:"好高興識到你，{n}！我會記住㗎。",likeAck:"記低咗：你鍾意{x}。品味一流！",likeQ:"你講過你鍾意{x}，同我講多啲？",
  welcome:"歡迎嚟到 Funhouse{n}！問我乜都得、許個願，或者揀個遊戲。",moodQ:"首先：你今日點呀？",
  moods:{"😄":["你發緊光！keep住。","同我講今日最正嘅部分！"],"🙂":["唔錯嘅一日，加份零食就完美。","點先會變10分？"],"😐":["麻麻地嘅一日，等我整返好佢。","好啲未？就算一啲啲都好？"],"😕":["唔係最好嘅一日，冇問題㗎。","想聽笑話、玩遊戲，定係打下氣？"],"😫":["哎呀，辛苦晒。送你一個超大虛擬攬攬。","想呻下，定係想我講啲傻嘢幫你分下心？"]},
  modeSwitch:["模式轉咗！","解鎖新性格。"],modeNow:"我而家係{m}。",lucky:" 今日幸運數字：",grade:["今題得分：B+，因為夠熱情。","得分：A-（太開心扣分）。","得分：C，落堂嚟搵我。"],ventOk:"我聽緊，全部講出嚟啦。唔批評，淨係點頭。",
  open:{comic:["好好好。","準備好未？"],genie:["*噗！*","*一嚿閃閃煙*"],fortune:["水晶球轉緊…","靈魂喺度細細聲講…"],prof:["記錄在案：","留心聽。"],free:["",""],pirate:["啊哈！","喲嗬！"],cat:["*打喊露*","唉。"],hype:["衝呀！","冠軍！"],kids:["嘩！","耶！"],bard:["聽住！","天呀！"]},
  close:{pirate:["喲嗬嗬。","*鸚鵡尖叫*"],cat:["咪嘈我瞓覺。","*將你個杯推落枱*"],hype:["你一定得！"],kids:["🌈","⭐"],bard:["*深深鞠躬*"]},
  re:{hi:/^(你好|哈囉|hello|早晨|喂|嗨)/i,joke:/(笑話|搞笑|好笑|gag)/i,wish:/(希望|願望|我想要|許願|但願)/,wishStrip:/^.*?(我希望|希望|我想要|許願|但願|願望係)/,
   sad:/(唔開心|傷心|攰|壓力|焦慮|孤獨|喊|嬲|悶|難過)/,happy:/(開心|高興|好正|太好|興奮)/,thanks:/(多謝|唔該|謝謝)/,fortune:/(算命|運氣|命運|星座|睇相)/,
   name:/(?:我叫|叫我|我個名係)\s*([^\s，。！？,.!?]{1,10})/,like:/我(?:好|超|最)?(?:鍾意|愛)([^。！？，,.!?]{1,20})/,q:/(\?|？|嗎|咩|乜|點解|點樣|邊個|邊度|幾時|係唔係)/,why:/點解/,comp:/讚/,roast:/(串|窒)/,pep:/(打氣|鼓勵|加油)/}},
 g:{over:"遊戲完！好好玩。",playOther:"想玩第二樣，定係傾下偈？",stopped:"好，遊戲停咗。開心唔退款。",wyrIntro:"你寧願！",wyrNext:"下一條！",wyrQ:"你寧願{a}，定係{b}？",wyrPick:"你揀{c}？{r} {p}%嘅想像玩家同意你。",wyrReact:["大膽嘅選擇。","混亂，但我尊重。","我都會咁揀，應該啦。"],
  wyr:[["頭髮變成意粉","流嘅汗係楓糖漿"],["一世好似海盜咁講嘢","講乜都要唱出嚟"],["同一隻馬咁大嘅鴨打交","同100隻鴨咁大嘅馬打交"],["識同動物講嘢","識講所有語言"],["住樹屋","住潛水艇"],["打乞嗤噴出閃粉","打嗝吐出泡泡"]],
  tdIntro:"真心話定大冒險？揀好啲。",truthP:"真心話：",dareP:"大冒險：",truths:["你偷偷鍾意嘅最古怪食物配搭係乜？","你識唱晒嘅最尷尬嘅歌係邊首？","你而家仲有咩傻傻哋嘅驚？"],dares:["閉埋眼打下一個訊息。","將你今日講成電影預告片。","大聲讚身邊最近嗰樣嘢。","寫一首兩句關於襪嘅詩。"],
  eightIntro:"搖下魔法8號波！問我一條是非題。",askAgain:"再問一條！",cookie:"*咔嚓* 🥠 ",cookieMore:"再嚟一塊曲奇？",iceIntro:"訪問時間！我問你答。",iceNext:"好，下一條：",iceEnd:"訪問完咗，你以零食滿分合格。",
  decIntro:"幫我揀！打低啲選項，用逗號或者「定」分開。例如：火鍋，燒烤，壽司",decNeed:"最少畀兩個選項我，例如：瞓覺定食零食",decPick:"問過3隻貓同1粒水晶球之後……答案係：{x}！",decWhy:["佢個 vibe 最好。","其他選項自己知輸咗。"],decAgain:"仲要揀啲乜？",
  partyIntro:"派對模式！打2個或以上玩家名，用逗號分開。",partyNeed:"最少要2個名，例如：阿明，阿詩，阿仔",partyStart:"歡迎{p}！做完任務撳「搞掂」攞一分，或者跳過。",partyTurn:"🎉 到{p}！{task}",
  partyTasks:["真心話：{truth}","大冒險：{dare}","你寧願{a}，定係{b}？講下點解！","答：{ice}","模仿在場某個人（友善啲）。","講個笑話，有人笑就得分。"],partyScores:"比分：{s}",partyWin:"🏆 贏家：{w}！派對完咗，傳奇們。",
  hcIntro:"我諗緊一個1到100嘅數字。",hcAsk:"你估？",hcNum:"淨係打數字唔該。",hcHeat:["🔥 熱到辣手！","♨️ 好熱！","🌤️ 暖暖哋。","❄️ 凍。","🧊 凍到僵，企鵝都嚟埋。"],hcHi:"大啲。",hcLo:"細啲。",hcWin:"啱喇！就係{n}。你用咗{t}次！",
  dailyIntro:"📅 每日謎題（英文）！解開佢keep住連勝。",dailyWin:"每日謎題解咗！連勝：{s}日。",dailyDone:"今日嗰條已經解咗，聽日有新嘅！",ynOnly:"淨係答係或者唔係唔該。"}
});
CHAR_TAGS.yue={boy:"男仔",girl:"女仔",teenBoy:"少年",teenGirl:"少女",man:"男士",woman:"女士",grandpa:"爺爺",grandma:"嫲嫲",robot:"機械人",ghost:"友善小鬼"};
HI_IM.yue="你好！我係{n}。同我傾下偈啦？";
WISH_IDEAS.yue=["我希望啲功課自己做完","我希望可以瞬間轉移去海灘","我希望奶茶永遠免費"];

/* ---------- shared helpers ---------- */
function hashStr(s){let h=1779033703^s.length;for(let i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return h>>>0}
function rng(seed){let a=seed>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const rpick=(r,a)=>a[Math.floor(r()*a.length)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CL=()=>{const l=replyLang();return l==="vi"?"vi":(l==="yue"||l==="zh")?"yue":"en"}; // content language for Future

/* ---------- UI strings for Future + Learn ---------- */
const UI2={
en:{tFuture:"Future",tLearn:"Learn",fTitle:"Crystal Ball",fSub:"Ask about your future. The Oracle gazes, predicts, and tells you what to do next.",fTopic:"Topic",fWhen:"When",fQL:"Your question (optional)",fQP:"Will my business take off?",fGo:"Gaze into the future",
 fGazing:"The ball is swirling…",fRead:"🔊 Read aloud",fCard:"🎴 Make a card",fAsk:"💬 Ask more in chat",hTitle:"Daily horoscope",hSign:"Your sign",hYear:"Birth year (optional)",hGo:"Read my stars",
 dTitle:"Destiny cards",dGo:"Draw 3 cards",dPast:"Past",dNow:"Present",dFut:"Future",yTitle:"Message from future you",yGo:"Receive message",
 cTitle:"Time capsule",cP:"Write a message or prediction for your future self…",cOpen:"Opens in",c1w:"1 week",c1m:"1 month",c6m:"6 months",c1y:"1 year",cSave:"Seal capsule",cLocked:"🔒 Opens in {d} days",cOpened:"📬 Opened! Written {d}:",cEmpty:"No capsules yet. Seal one for future you.",cSaved:"Capsule sealed",cNew:"📬 A time capsule just opened! Check the Future tab.",
 fDisc:"Just for fun. The future isn't written yet: you hold the pen.",
 lTitle:"Lingo Lab",lSub:"Learn any language from zero to fluent: lessons, listening, speaking practice, flashcards and an AI tutor.",lTarget:"I want to learn",
 lNoteOff:"★ Offline lessons from Zero to A1 with audio, speaking and flashcards. A2 to C2 use the AI tutor.",lNoteAI:"This language has no offline lessons yet. Load the AI brain and the tutor teaches every level, Zero to C2.",
 lXP:"XP",lWords:"Words",lStreak:"Streak",lDue:"To review",lReview:"🃏 Review cards",lPractice:"💬 Chat practice",lTutor:"🎓 AI tutor",lBook:"📖 Phrasebook",lBack:"← Back",
 lListen:"🔊 Listen",lSlow:"🐢 Slow",lSay:"🎙️ Say it",lNext:"Next →",lStartQuiz:"Start quiz",lQuizQ:"What does this mean?",lQuizL:"Which one did you hear?",lResult:"{s}/{n} correct · +{x} XP",lPass:"Lesson passed! ⭐",lRetry:"Get 6/8 to pass. Try again!",
 lReveal:"Show answer",lAgain:"Again",lGood:"Good",lEasy:"Easy",lNoDue:"All caught up! Here are some extra cards.",lNoCards:"Finish a lesson first to get review cards.",lScore:"Pronunciation: {p}%",lHeard:"I heard: {t}",
 lNeedAI:"This level uses the AI tutor. Load the AI brain in the Me tab (works when the page is hosted on your own site).",lLoadAI:"Load AI brain",lOffline:"Practice offline instead",lUnits:"lessons",lTopicsN:"AI tutor topics",
 lHowSay:"How do you say “{m}” in {l}?",lCorrect:"✅ Correct! {t}",lAlmost:"Almost! It's: {t}",lPracticeEnd:"Practice done: {s}/{n}. Great work!",lPracticeIntro:"Chat practice in {l}: I give you a phrase, you answer by typing or speaking. Accents are optional.",
 lTutorOn:"🎓 Tutor: {l} · {lv} · {tp}",lTutorEnd:"End lesson",lTutorOff:"Lesson ended. Great job today!",lHint:"Hint",lFree:"Free conversation",lSoundsN:"How {l} sounds and is written",lPhrases:"{n} phrases",lWordsLearned:"words learned",
 lv_zero:"Zero",lvd_zero:"Sounds, writing and first words",lv_A1:"A1",lvd_A1:"Beginner: survive simple situations",lv_A2:"A2",lvd_A2:"Elementary: everyday conversations",lv_B1:"B1",lvd_B1:"Intermediate: tell stories, give opinions",lv_B2:"B2",lvd_B2:"Upper intermediate: debate and understand natives",lv_C1:"C1",lvd_C1:"Advanced: nuance, humor, presentations",lv_C2:"C2",lvd_C2:"Fluent: like a native speaker"},
vi:{tFuture:"Tương lai",tLearn:"Học",fTitle:"Quả cầu pha lê",fSub:"Hỏi về tương lai của bạn. Oracle nhìn vào quả cầu, dự đoán, và gợi ý bạn nên làm gì tiếp.",fTopic:"Chủ đề",fWhen:"Khi nào",fQL:"Câu hỏi của bạn (không bắt buộc)",fQP:"Việc kinh doanh của tôi có thành công không?",fGo:"Nhìn vào tương lai",
 fGazing:"Quả cầu đang xoay…",fRead:"🔊 Đọc to",fCard:"🎴 Tạo thẻ",fAsk:"💬 Hỏi thêm trong chat",hTitle:"Tử vi hằng ngày",hSign:"Cung hoàng đạo",hYear:"Năm sinh (không bắt buộc)",hGo:"Xem sao của tôi",
 dTitle:"Lá bài định mệnh",dGo:"Rút 3 lá",dPast:"Quá khứ",dNow:"Hiện tại",dFut:"Tương lai",yTitle:"Lời nhắn từ bạn trong tương lai",yGo:"Nhận lời nhắn",
 cTitle:"Hộp thời gian",cP:"Viết một lời nhắn hoặc dự đoán cho bạn trong tương lai…",cOpen:"Mở sau",c1w:"1 tuần",c1m:"1 tháng",c6m:"6 tháng",c1y:"1 năm",cSave:"Niêm phong",cLocked:"🔒 Mở sau {d} ngày",cOpened:"📬 Đã mở! Viết ngày {d}:",cEmpty:"Chưa có hộp nào. Niêm phong một hộp cho bạn tương lai nhé.",cSaved:"Đã niêm phong",cNew:"📬 Một hộp thời gian vừa mở! Xem ở tab Tương lai.",
 fDisc:"Chỉ để vui thôi. Tương lai chưa được viết: bạn mới là người cầm bút.",
 lTitle:"Lingo Lab",lSub:"Học mọi ngôn ngữ từ con số 0 đến thành thạo: bài học, nghe, luyện nói, thẻ ghi nhớ và gia sư AI.",lTarget:"Tôi muốn học",
 lNoteOff:"★ Bài học offline từ Zero đến A1 có âm thanh, luyện nói và thẻ ghi nhớ. A2 đến C2 dùng gia sư AI.",lNoteAI:"Ngôn ngữ này chưa có bài học offline. Tải bộ não AI và gia sư sẽ dạy mọi cấp độ, từ Zero đến C2.",
 lXP:"XP",lWords:"Từ",lStreak:"Chuỗi",lDue:"Cần ôn",lReview:"🃏 Ôn thẻ",lPractice:"💬 Luyện chat",lTutor:"🎓 Gia sư AI",lBook:"📖 Sổ tay câu",lBack:"← Quay lại",
 lListen:"🔊 Nghe",lSlow:"🐢 Chậm",lSay:"🎙️ Nói thử",lNext:"Tiếp →",lStartQuiz:"Làm bài kiểm tra",lQuizQ:"Câu này nghĩa là gì?",lQuizL:"Bạn vừa nghe câu nào?",lResult:"Đúng {s}/{n} · +{x} XP",lPass:"Qua bài! ⭐",lRetry:"Cần 6/8 để qua. Thử lại nhé!",
 lReveal:"Xem đáp án",lAgain:"Chưa nhớ",lGood:"Nhớ",lEasy:"Dễ",lNoDue:"Đã ôn hết! Đây là vài thẻ thêm.",lNoCards:"Hãy học xong một bài để có thẻ ôn.",lScore:"Phát âm: {p}%",lHeard:"Mình nghe được: {t}",
 lNeedAI:"Cấp độ này dùng gia sư AI. Tải bộ não AI ở tab Cài đặt (chạy được khi trang nằm trên web của bạn).",lLoadAI:"Tải bộ não AI",lOffline:"Luyện offline thay thế",lUnits:"bài học",lTopicsN:"Chủ đề với gia sư AI",
 lHowSay:"“{m}” nói bằng {l} thế nào?",lCorrect:"✅ Đúng rồi! {t}",lAlmost:"Gần đúng! Câu đúng là: {t}",lPracticeEnd:"Xong buổi luyện: {s}/{n}. Giỏi lắm!",lPracticeIntro:"Luyện chat {l}: mình đưa một câu, bạn trả lời bằng cách gõ hoặc nói. Không cần gõ dấu.",
 lTutorOn:"🎓 Gia sư: {l} · {lv} · {tp}",lTutorEnd:"Kết thúc bài",lTutorOff:"Đã kết thúc bài. Hôm nay bạn giỏi lắm!",lHint:"Gợi ý",lFree:"Nói chuyện tự do",lSoundsN:"{l} phát âm và viết thế nào",lPhrases:"{n} câu",lWordsLearned:"từ đã học",
 lv_zero:"Zero",lvd_zero:"Âm, chữ viết và những từ đầu tiên",lv_A1:"A1",lvd_A1:"Sơ cấp: xoay xở tình huống đơn giản",lv_A2:"A2",lvd_A2:"Cơ bản: hội thoại hằng ngày",lv_B1:"B1",lvd_B1:"Trung cấp: kể chuyện, nêu ý kiến",lv_B2:"B2",lvd_B2:"Trung cao cấp: tranh luận, hiểu người bản xứ",lv_C1:"C1",lvd_C1:"Cao cấp: sắc thái, hài hước, thuyết trình",lv_C2:"C2",lvd_C2:"Thành thạo: như người bản xứ"},
yue:{tFuture:"未來",tLearn:"學嘢",fTitle:"水晶球",fSub:"問下你嘅未來。神諭望住水晶球，幫你預測，再話你知下一步做乜。",fTopic:"主題",fWhen:"幾時",fQL:"你嘅問題（可以唔填）",fQP:"我盤生意會唔會成功？",fGo:"望入未來",
 fGazing:"水晶球轉緊…",fRead:"🔊 讀出嚟",fCard:"🎴 整張卡",fAsk:"💬 喺傾偈度問多啲",hTitle:"每日星座",hSign:"你嘅星座",hYear:"出世年份（可以唔填）",hGo:"睇下我啲星",
 dTitle:"命運卡",dGo:"抽3張卡",dPast:"過去",dNow:"現在",dFut:"未來",yTitle:"未來嘅你寄嚟嘅訊息",yGo:"收訊息",
 cTitle:"時間囊",cP:"寫低一句說話或者預言，畀未來嘅自己…",cOpen:"幾耐之後開",c1w:"1個禮拜",c1m:"1個月",c6m:"6個月",c1y:"1年",cSave:"封印時間囊",cLocked:"🔒 {d}日後開",cOpened:"📬 開咗！寫於 {d}：",cEmpty:"未有時間囊。封一個畀未來嘅你啦。",cSaved:"封印咗",cNew:"📬 有個時間囊啱啱開咗！去「未來」睇下。",
 fDisc:"純粹娛樂。未來未寫好：枝筆喺你手。",
 lTitle:"Lingo Lab",lSub:"由零開始學任何語言，學到流利：課堂、聽、講、記憶卡同 AI 導師。",lTarget:"我想學",
 lNoteOff:"★ 離線課程由 Zero 到 A1，有讀音、講嘢練習同記憶卡。A2 到 C2 用 AI 導師。",lNoteAI:"呢種語言未有離線課程。載入 AI 大腦，導師就可以教晒所有程度。",
 lXP:"XP",lWords:"字詞",lStreak:"連續",lDue:"要溫",lReview:"🃏 溫記憶卡",lPractice:"💬 傾偈練習",lTutor:"🎓 AI 導師",lBook:"📖 短句簿",lBack:"← 返回",
 lListen:"🔊 聽",lSlow:"🐢 慢啲",lSay:"🎙️ 講一次",lNext:"下一個 →",lStartQuiz:"開始測驗",lQuizQ:"呢句咩意思？",lQuizL:"你聽到邊句？",lResult:"啱 {s}/{n} · +{x} XP",lPass:"過咗關！⭐",lRetry:"要 6/8 先過關，再試多次！",
 lReveal:"睇答案",lAgain:"未記得",lGood:"記得",lEasy:"好易",lNoDue:"溫晒喇！呢度有多幾張。",lNoCards:"先完成一課先有卡溫。",lScore:"發音：{p}%",lHeard:"我聽到：{t}",
 lNeedAI:"呢個程度用 AI 導師。喺「我」度載入 AI 大腦（放上你自己網站先用得）。",lLoadAI:"載入 AI 大腦",lOffline:"改為離線練習",lUnits:"課",lTopicsN:"AI 導師主題",
 lHowSay:"「{m}」用{l}點講？",lCorrect:"✅ 啱晒！{t}",lAlmost:"差少少！應該係：{t}",lPracticeEnd:"練習完：{s}/{n}。好叻！",lPracticeIntro:"{l}傾偈練習：我出一句，你打字或者講出嚟答。",
 lTutorOn:"🎓 導師：{l} · {lv} · {tp}",lTutorEnd:"結束課堂",lTutorOff:"課堂完咗，今日你好叻！",lHint:"提示",lFree:"自由對話",lSoundsN:"{l}點讀、點寫",lPhrases:"{n} 句",lWordsLearned:"學咗嘅字詞",
 lv_zero:"Zero",lvd_zero:"讀音、文字同第一批字詞",lv_A1:"A1",lvd_A1:"初級：應付簡單情況",lv_A2:"A2",lvd_A2:"基礎：日常對話",lv_B1:"B1",lvd_B1:"中級：講故事、講意見",lv_B2:"B2",lvd_B2:"中高級：辯論、聽得明本地人",lv_C1:"C1",lvd_C1:"高級：語氣、幽默、演講",lv_C2:"C2",lvd_C2:"流利：好似母語咁"},
zh:{tFuture:"未来",tLearn:"学习",fTitle:"水晶球",fSub:"问问你的未来。神谕凝视水晶球，为你预测，并告诉你下一步做什么。",fTopic:"主题",fWhen:"时间",fGo:"望向未来",fGazing:"水晶球在旋转…",hTitle:"每日星座",dTitle:"命运卡",dGo:"抽3张卡",dPast:"过去",dNow:"现在",dFut:"未来",yTitle:"来自未来的你的信息",yGo:"接收信息",cTitle:"时间胶囊",cSave:"封存胶囊",fDisc:"纯属娱乐。未来还没写好：笔在你手里。",
 lTitle:"Lingo Lab",lSub:"从零开始学任何语言直到流利：课程、听力、口语练习、记忆卡和 AI 导师。",lTarget:"我想学",lReview:"🃏 复习卡片",lPractice:"💬 聊天练习",lTutor:"🎓 AI 导师",lBook:"📖 短句本",lBack:"← 返回",lListen:"🔊 听",lSlow:"🐢 慢速",lSay:"🎙️ 跟读",lNext:"下一个 →",lStartQuiz:"开始测验",lQuizQ:"这句是什么意思？",lQuizL:"你听到的是哪句？"}
};
for(const k of ["en","vi","yue","zh"])Object.assign(PACKS[k].ui,UI2[k]);
Object.assign(PACKS.es.ui,{tFuture:"Futuro",tLearn:"Aprender"});Object.assign(PACKS.fr.ui,{tFuture:"Avenir",tLearn:"Apprendre"});

/* ---------- Future content ---------- */
const COLORS=[["#e3b04b",{en:"Golden",vi:"Vàng kim",yue:"金色"}],["#e5493d",{en:"Cherry red",vi:"Đỏ anh đào",yue:"櫻桃紅"}],["#86d6b4",{en:"Mint",vi:"Xanh bạc hà",yue:"薄荷綠"}],["#3b82c4",{en:"Ocean blue",vi:"Xanh biển",yue:"海洋藍"}],["#a78bdb",{en:"Lavender",vi:"Tím oải hương",yue:"薰衣草紫"}],["#f08a3c",{en:"Sunset orange",vi:"Cam hoàng hôn",yue:"日落橙"}],["#2f8a5b",{en:"Forest green",vi:"Xanh rừng",yue:"森林綠"}],["#f2efe6",{en:"Pearl white",vi:"Trắng ngọc trai",yue:"珍珠白"}],["#e98bb0",{en:"Peach pink",vi:"Hồng đào",yue:"蜜桃粉"}]];
const FUT={
en:{topics:{love:"💘 Love",money:"💰 Money",career:"💼 Work & study",friends:"🫂 Friends",travel:"✈️ Travel",luck:"🍀 Luck",any:"✨ Anything"},
 times:{tomorrow:"Tomorrow",week:"This week",month:"This month",year:"This year",decade:"In 10 years"},
 when:{tomorrow:"By tomorrow evening",week:"Before this week ends",month:"Within this month",year:"Before the year is over",decade:"Ten years from now"},
 heads:{love:["a surprise conversation warms your heart","someone is quietly admiring your laugh","a kind message lands at the perfect moment","a small brave step leads to a big smile"],
  money:["a small win shows up where you least expect it","one smart choice makes your future wallet very happy","a forgotten coin, gift card or refund finds its way back to you","an idea you almost ignored turns into extra money"],
  career:["a skill you practiced quietly suddenly pays off","someone important notices your effort","an idea in the shower becomes your next big move","you finish something you've been putting off, and it feels amazing"],
  friends:["an old friend pops back into your life","a group chat becomes legendary","you laugh until your stomach hurts with someone","you meet someone who feels like an old friend instantly"],
  travel:["a new place is calling your name","your next trip includes one magical wrong turn","a short trip gives you a big idea","you taste a dish you'll talk about for years"],
  luck:["the universe rolls the dice in your favor","green lights follow you around","lucky coincidences stack up like pancakes","you're in the right place at exactly the right time"]},
 decade:["you're teaching someone the thing you're learning right now","you laugh about today's worries over a really good meal","you're the person friends call for advice","you live somewhere with a view you love","you're famous in at least one group chat","you look back and say: that was the year everything started"],
 scenes:["I see you laughing at a table full of food while someone toasts your name.","I see a sunrise, a warm drink, and a plan that finally works.","I see a door opening… and a cat strolling in like it owns the place.","I see you saying 'I told you so' (kindly) to your past self.","I see confetti. I'm not sure why. But it's definitely for you.","I see a phone buzzing with good news while you're eating noodles."],
 dos:["Say yes to one small adventure.","Text the person you've been thinking about.","Write your idea down before it escapes.","Drink water. The future likes hydrated people.","Start the thing, even if it's only 5 minutes.","Tell someone what you're planning. Saying it makes it real."],
 avoids:["Avoid arguing with pigeons.","Beware of suspiciously soft socks.","Don't trust a sandwich that looks too perfect.","Don't let the cat make financial decisions.","Avoid saying 'I'll do it tomorrow' more than twice."],
 items:["a blue pen","a lucky spoon","a song from 2009","a houseplant","a mysterious receipt","a warm hoodie","a mango","an old photo"],
 days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
 L:{head:"Prophecy",odds:"Chance",color:"Lucky color",num:"Lucky number",day:"Lucky day",item:"Lucky item",see:"The ball shows",do:"Do this",avoid:"Avoid this"},
 close:["Remember: the future isn't written. You hold the pen. ✍️","The stars suggest. You decide. ✨","Prophecy delivered. Snacks recommended. 🍪"],
 qAbout:"About “{q}”: ",signs:["♈ Aries","♉ Taurus","♊ Gemini","♋ Cancer","♌ Leo","♍ Virgo","♎ Libra","♏ Scorpio","♐ Sagittarius","♑ Capricorn","♒ Aquarius","♓ Pisces"],
 animals:["🐀 Rat","🐂 Ox","🐅 Tiger","🐇 Rabbit","🐉 Dragon","🐍 Snake","🐎 Horse","🐐 Goat","🐒 Monkey","🐓 Rooster","🐕 Dog","🐖 Pig"],
 hL:{love:"Love",money:"Money",energy:"Energy",luck:"Luck",animal:"Chinese zodiac",today:"Today for {s}"},
 hMsg:["Your charm is turned up to 11 today. Use it for good.","A slow start, then a strong finish. Save energy for the afternoon.","Someone needs your advice today. Your words matter more than you think.","Great day to clean one small corner of your life. It clears your mind too.","Your creativity is sparkling. Make something, even something silly.","Patience pays today. The thing you're waiting for is closer than it looks.","Say what you really think, kindly. People will respect it."],
 cards:[["🍪","The Snack","Comfort, small rewards, treat yourself"],["🚀","The Rocket","Sudden progress, big leaps"],["🐈","The Cat","Independence, curiosity, do it your way"],["🌉","The Bridge","Connection, a new path opens"],["🏮","The Lantern","Hope, clarity in a dark moment"],["☂️","The Umbrella","Protection, someone has your back"],["🗝️","The Key","An answer, a door unlocks"],["🧭","The Compass","Direction, trust your gut"],["🌱","The Seed","New beginnings, patience"],["🪞","The Mirror","Self-reflection, be honest with yourself"],["🪁","The Kite","Freedom, let go a little"],["🐉","The Dragon","Courage, power, bold moves"],["🍵","The Teacup","Rest, slow down, calm"],["🗼","The Lighthouse","Guidance, a mentor appears"],["👑","The Crown","Confidence, leadership"],["🌙","The Moonbeam","Dreams, intuition"],["🗺️","The Map","Planning, the route is clear"],["🔔","The Bell","News is coming"],["🌊","The Wave","Change, go with the flow"],["⛰️","The Mountain","Hard work pays off"],["✨","The Spark","Inspiration, a brilliant idea"],["🌻","The Garden","Growth, friendships bloom"]],
 cardSum:"Your story: {a} → {b} → {c}. The cards say the next chapter is in your hands.",
 fy:{open:["Hey, it's you from {y}. Yes, really.","Greetings from {y}! The future has better snacks.","Hi! Future {n} here, writing from {y}."],
  mid:["That thing you're nervous about? You handled it. Better than you think.","Keep going with what you started. Future you is very grateful.","You were right to be kind, even when it was hard.","The small steps added up. Seriously, they did."],
  tip:["Drink more water and call your family.","Take more photos of ordinary days. They become the best ones.","Learn that language. You'll use it more than you expect.","Save a little, laugh a lot."],
  fun:["Also: you still can't fold a fitted sheet. Nobody can.","P.S. pineapple on pizza is still being debated.","P.S. you finally found the TV remote. It was in the fridge."],sign:"Love, future {n} 💌"}},
vi:{topics:{love:"💘 Tình yêu",money:"💰 Tiền bạc",career:"💼 Công việc & học tập",friends:"🫂 Bạn bè",travel:"✈️ Du lịch",luck:"🍀 May mắn",any:"✨ Mọi thứ"},
 times:{tomorrow:"Ngày mai",week:"Tuần này",month:"Tháng này",year:"Năm nay",decade:"10 năm nữa"},
 when:{tomorrow:"Trước tối mai",week:"Trước khi tuần này kết thúc",month:"Trong tháng này",year:"Trước khi hết năm",decade:"Mười năm nữa"},
 heads:{love:["một cuộc trò chuyện bất ngờ làm ấm lòng bạn","có người đang thầm ngưỡng mộ nụ cười của bạn","một tin nhắn dễ thương đến đúng lúc","một bước can đảm nhỏ mang đến nụ cười lớn"],
  money:["một món lời nhỏ xuất hiện ở nơi bạn không ngờ","một quyết định khôn ngoan làm ví tương lai của bạn rất vui","một khoản tiền bị quên tự tìm đường quay về","một ý tưởng suýt bị bỏ qua biến thành thu nhập thêm"],
  career:["một kỹ năng bạn âm thầm luyện bỗng phát huy tác dụng","người quan trọng nhận ra nỗ lực của bạn","ý tưởng nảy ra lúc tắm trở thành bước tiến lớn tiếp theo","bạn hoàn thành việc trì hoãn bấy lâu, và cảm giác thật tuyệt"],
  friends:["một người bạn cũ quay lại cuộc đời bạn","một nhóm chat trở thành huyền thoại","bạn cười đau bụng cùng ai đó","bạn gặp một người mà cảm giác như quen từ lâu"],
  travel:["một nơi mới đang gọi tên bạn","chuyến đi tới có một lần lạc đường kỳ diệu","một chuyến đi ngắn mang lại ý tưởng lớn","bạn nếm một món ăn sẽ nhắc mãi nhiều năm sau"],
  luck:["vũ trụ đang tung xúc xắc theo hướng có lợi cho bạn","đèn xanh theo bạn khắp nơi","những trùng hợp may mắn chồng lên nhau như bánh kếp","bạn ở đúng nơi vào đúng lúc"]},
 decade:["bạn đang dạy người khác điều bạn đang học bây giờ","bạn cười về những lo lắng hôm nay bên một bữa ăn thật ngon","bạn là người mà bạn bè tìm đến để xin lời khuyên","bạn sống ở nơi có khung cảnh bạn yêu thích","bạn nổi tiếng trong ít nhất một nhóm chat","bạn nhìn lại và nói: đó là năm mọi thứ bắt đầu"],
 scenes:["Mình thấy bạn cười bên bàn đầy đồ ăn, có người nâng ly gọi tên bạn.","Mình thấy bình minh, một ly nước ấm, và một kế hoạch cuối cùng cũng thành công.","Mình thấy một cánh cửa mở ra… và một con mèo bước vào như chủ nhà.","Mình thấy bạn nói 'thấy chưa' (nhẹ nhàng thôi) với chính mình ngày trước.","Mình thấy pháo giấy. Không rõ vì sao. Nhưng chắc chắn là dành cho bạn.","Mình thấy điện thoại rung báo tin vui khi bạn đang ăn phở."],
 dos:["Nói 'có' với một chuyến phiêu lưu nhỏ.","Nhắn tin cho người bạn đang nghĩ tới.","Ghi lại ý tưởng trước khi nó bay mất.","Uống nước. Tương lai thích người đủ nước.","Bắt đầu đi, dù chỉ 5 phút.","Kể cho ai đó kế hoạch của bạn. Nói ra là nó thành thật."],
 avoids:["Tránh cãi nhau với bồ câu.","Cẩn thận với đôi tất mềm một cách đáng ngờ.","Đừng tin ổ bánh mì trông quá hoàn hảo.","Đừng để con mèo quyết định chuyện tiền bạc.","Tránh nói 'mai làm' quá hai lần."],
 items:["một cây bút xanh","một chiếc muỗng may mắn","một bài hát năm 2009","một chậu cây","một tờ hoá đơn bí ẩn","một chiếc áo hoodie ấm","một quả xoài","một tấm ảnh cũ"],
 days:["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ Nhật"],
 L:{head:"Lời tiên tri",odds:"Khả năng",color:"Màu may mắn",num:"Số may mắn",day:"Ngày may mắn",item:"Vật may mắn",see:"Quả cầu cho thấy",do:"Nên làm",avoid:"Nên tránh"},
 close:["Nhớ nhé: tương lai chưa được viết. Bạn cầm bút. ✍️","Các vì sao gợi ý. Bạn quyết định. ✨","Đã giao lời tiên tri. Khuyến nghị ăn vặt. 🍪"],
 qAbout:"Về “{q}”: ",signs:["♈ Bạch Dương","♉ Kim Ngưu","♊ Song Tử","♋ Cự Giải","♌ Sư Tử","♍ Xử Nữ","♎ Thiên Bình","♏ Bọ Cạp","♐ Nhân Mã","♑ Ma Kết","♒ Bảo Bình","♓ Song Ngư"],
 animals:["🐀 Tý","🐂 Sửu","🐅 Dần","🐈 Mão (Mèo)","🐉 Thìn","🐍 Tỵ","🐎 Ngọ","🐐 Mùi","🐒 Thân","🐓 Dậu","🐕 Tuất","🐖 Hợi"],
 hL:{love:"Tình cảm",money:"Tài lộc",energy:"Năng lượng",luck:"May mắn",animal:"Con giáp",today:"Hôm nay của {s}"},
 hMsg:["Hôm nay sức hút của bạn lên mức 11. Hãy dùng nó cho điều tốt.","Khởi đầu chậm, kết thúc mạnh. Giữ sức cho buổi chiều.","Có người cần lời khuyên của bạn. Lời bạn nói quan trọng hơn bạn nghĩ.","Ngày đẹp để dọn một góc nhỏ trong đời. Đầu óc cũng nhẹ theo.","Sự sáng tạo của bạn đang lấp lánh. Làm gì đó đi, dù ngớ ngẩn cũng được.","Kiên nhẫn sẽ được đền đáp. Điều bạn chờ gần hơn bạn tưởng.","Hãy nói thật lòng, nhẹ nhàng. Mọi người sẽ tôn trọng."],
 cards:[["🍪","Chiếc Bánh","An ủi, phần thưởng nhỏ, tự thưởng cho mình"],["🚀","Tên Lửa","Tiến bộ bất ngờ, bước nhảy lớn"],["🐈","Con Mèo","Độc lập, tò mò, làm theo cách của bạn"],["🌉","Cây Cầu","Kết nối, con đường mới mở ra"],["🏮","Đèn Lồng","Hy vọng, sáng tỏ lúc tối tăm"],["☂️","Chiếc Ô","Che chở, có người ủng hộ bạn"],["🗝️","Chìa Khoá","Câu trả lời, cánh cửa mở ra"],["🧭","La Bàn","Phương hướng, tin vào trực giác"],["🌱","Hạt Mầm","Khởi đầu mới, kiên nhẫn"],["🪞","Tấm Gương","Tự nhìn lại, thành thật với bản thân"],["🪁","Cánh Diều","Tự do, buông bớt một chút"],["🐉","Con Rồng","Dũng cảm, sức mạnh, hành động táo bạo"],["🍵","Tách Trà","Nghỉ ngơi, chậm lại, bình yên"],["🗼","Ngọn Hải Đăng","Dẫn đường, quý nhân xuất hiện"],["👑","Vương Miện","Tự tin, dẫn dắt"],["🌙","Ánh Trăng","Ước mơ, trực giác"],["🗺️","Tấm Bản Đồ","Kế hoạch, đường đi rõ ràng"],["🔔","Chiếc Chuông","Sắp có tin tức"],["🌊","Con Sóng","Thay đổi, thuận theo dòng chảy"],["⛰️","Ngọn Núi","Chăm chỉ sẽ được đền đáp"],["✨","Tia Lửa","Cảm hứng, ý tưởng sáng chói"],["🌻","Khu Vườn","Phát triển, tình bạn nở hoa"]],
 cardSum:"Câu chuyện của bạn: {a} → {b} → {c}. Các lá bài nói chương tiếp theo nằm trong tay bạn.",
 fy:{open:["Chào, là bạn từ năm {y} đây. Thật đấy.","Gửi lời chào từ năm {y}! Tương lai có đồ ăn vặt ngon hơn.","Chào! {n} của tương lai đây, viết từ năm {y}."],
  mid:["Chuyện bạn đang lo ấy? Bạn đã xử lý được. Tốt hơn bạn nghĩ.","Cứ tiếp tục việc bạn đã bắt đầu. Bạn tương lai rất biết ơn.","Bạn đã đúng khi chọn tử tế, kể cả lúc khó.","Những bước nhỏ đã cộng dồn lại. Thật đấy."],
  tip:["Uống nhiều nước hơn và gọi điện cho gia đình.","Chụp thêm ảnh những ngày bình thường. Chúng sẽ thành kỷ niệm đẹp nhất.","Học ngôn ngữ đó đi. Bạn sẽ dùng nhiều hơn bạn nghĩ.","Tiết kiệm một chút, cười thật nhiều."],
  fun:["À: bạn vẫn chưa gấp được ga trải giường bo chun. Không ai gấp được.","T.B. tranh cãi dứa trên pizza vẫn chưa kết thúc.","T.B. bạn đã tìm thấy cái điều khiển TV. Nó nằm trong tủ lạnh."],sign:"Thương, {n} của tương lai 💌"}},
yue:{topics:{love:"💘 愛情",money:"💰 錢財",career:"💼 工作同學業",friends:"🫂 朋友",travel:"✈️ 旅行",luck:"🍀 運氣",any:"✨ 乜都得"},
 times:{tomorrow:"聽日",week:"今個禮拜",month:"今個月",year:"今年",decade:"十年後"},
 when:{tomorrow:"聽日夜晚之前",week:"今個禮拜完之前",month:"今個月之內",year:"今年完之前",decade:"十年之後"},
 heads:{love:["一段意外嘅對話會暖住你個心","有人靜靜欣賞緊你個笑容","一個貼心訊息喺啱啱好嘅時間出現","一小步嘅勇氣換嚟一個大笑容"],
  money:["一個細細嘅收穫喺你估唔到嘅地方出現","一個精明決定會令未來嘅銀包好開心","一筆唔記得咗嘅錢會自己返嚟","一個差啲忽略咗嘅主意會變成額外收入"],
  career:["你靜靜練嘅技能突然有回報","有重要嘅人留意到你嘅努力","沖涼時諗到嘅主意會變成你下一步大計","你終於搞掂拖咗好耐嘅嘢，感覺超正"],
  friends:["一個老朋友會重新出現","一個群組會變成傳奇","你會同人笑到肚痛","你會遇到一個一見如故嘅人"],
  travel:["一個新地方喺度叫緊你","你下次旅行會有一次神奇嘅蕩失路","一次短途旅行會帶畀你大靈感","你會試到一道講足幾年嘅菜"],
  luck:["宇宙擲骰仔擲到你嗰邊","綠燈一路跟住你","好運嘅巧合疊到好似班戟咁高","你會喺啱嘅時間出現喺啱嘅地方"]},
 decade:["你教緊人你而家學緊嘅嘢","你一邊食好嘢一邊笑返今日啲煩惱","你係朋友搵意見嘅第一個人","你住喺一個有你鍾意景色嘅地方","你喺最少一個群組度好出名","你回望話：嗰年係一切嘅開始"],
 scenes:["我見到你喺一枱好嘢食面前笑緊，有人為你舉杯。","我見到日出、一杯暖嘢，同一個終於成功嘅計劃。","我見到一度門打開……一隻貓好似業主咁行入嚟。","我見到你好溫柔咁同以前嘅自己講：「我都話咗啦。」","我見到彩紙，唔知點解，但肯定係畀你嘅。","我見到你食緊雲吞麵嗰陣，電話響起好消息。"],
 dos:["對一個細細嘅冒險講「好」。","傳個訊息畀你掛住緊嘅人。","趁個主意未飛走，即刻寫低佢。","飲多啲水。未來鍾意水分充足嘅人。","開始做，就算淨係5分鐘。","同人講你嘅計劃，講出口就會成真。"],
 avoids:["唔好同白鴿嗌交。","小心啲軟到可疑嘅襪。","唔好信一份靚到太完美嘅三文治。","唔好畀隻貓做理財決定。","唔好講多過兩次「聽日先做」。"],
 items:["一枝藍筆","一隻幸運匙羹","一首2009年嘅歌","一盆植物","一張神秘收據","一件暖笠笠嘅衛衣","一個芒果","一張舊相"],
 days:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
 L:{head:"預言",odds:"機會",color:"幸運色",num:"幸運數字",day:"幸運日",item:"幸運物",see:"水晶球顯示",do:"要做",avoid:"要避"},
 close:["記住：未來未寫好，枝筆喺你手。✍️","星星畀建議，你自己決定。✨","預言送到，建議食零食。🍪"],
 qAbout:"關於「{q}」：",signs:["♈ 白羊座","♉ 金牛座","♊ 雙子座","♋ 巨蟹座","♌ 獅子座","♍ 處女座","♎ 天秤座","♏ 天蠍座","♐ 射手座","♑ 山羊座","♒ 水瓶座","♓ 雙魚座"],
 animals:["🐀 鼠","🐂 牛","🐅 虎","🐇 兔","🐉 龍","🐍 蛇","🐎 馬","🐐 羊","🐒 猴","🐓 雞","🐕 狗","🐖 豬"],
 hL:{love:"愛情",money:"財運",energy:"精力",luck:"運氣",animal:"生肖",today:"{s}今日運程"},
 hMsg:["今日你嘅魅力開到最盡，用嚟做好事啦。","慢慢開始，強勢收尾。留返啲力畀下晝。","今日有人需要你嘅意見，你講嘅嘢重要過你諗。","好日子去執一個細細嘅角落，個腦都會清啲。","你嘅創意閃閃發光，整啲嘢出嚟，傻啲都得。","耐心會有回報，你等緊嘅嘢近過你諗。","溫柔咁講出真心話，大家會尊重你。"],
 cards:[["🍪","零食","安慰、小獎勵、對自己好啲"],["🚀","火箭","突然進步、大躍進"],["🐈","貓","獨立、好奇、用你自己嘅方法"],["🌉","橋","連繫、新路打開"],["🏮","燈籠","希望、黑暗中見光"],["☂️","遮","保護、有人撐你"],["🗝️","鎖匙","答案、門打開"],["🧭","指南針","方向、相信直覺"],["🌱","種子","新開始、耐心"],["🪞","鏡","反思、對自己誠實"],["🪁","風箏","自由、放鬆少少"],["🐉","龍","勇氣、力量、大膽行動"],["🍵","茶杯","休息、慢落嚟、平靜"],["🗼","燈塔","指引、貴人出現"],["👑","皇冠","自信、領導"],["🌙","月光","夢想、直覺"],["🗺️","地圖","計劃、路線清晰"],["🔔","鐘","有消息嚟緊"],["🌊","浪","改變、順其自然"],["⛰️","山","努力會有回報"],["✨","火花","靈感、好主意"],["🌻","花園","成長、友誼開花"]],
 cardSum:"你嘅故事：{a} → {b} → {c}。張卡話下一章喺你手。",
 fy:{open:["你好，我係{y}年嘅你，真㗎。","{y}年問候你！未來啲零食好食啲。","哈囉！未來嘅{n}，喺{y}年寫畀你。"],
  mid:["你而家擔心緊嗰件事？你搞得掂，好過你諗。","繼續做你開始咗嘅嘢，未來嘅你好感激。","你揀咗做個好人係啱嘅，就算難都係。","啲細細步加埋一齊，真係有用。"],
  tip:["飲多啲水，打多啲電話返屋企。","影多啲平凡日子嘅相，佢哋會變成最好嘅回憶。","去學嗰種語言啦，你會用得多過你諗。","儲少少錢，笑多多。"],
  fun:["仲有：你都仲係摺唔到床笠，冇人摺到。","P.S. 菠蘿薄餅之爭仲未完。","P.S. 你終於搵返個電視遙控，喺雪櫃度。"],sign:"愛你嘅，未來嘅{n} 💌"}}
};

/* ---------- Lingo Lab data: 56 core phrases × 10 languages (text|romanization) ---------- */
const LDATA={
en:"Hello;Goodbye;Thank you;Sorry;Yes;No;Please;How are you?;I'm fine;Nice to meet you;My name is…;What's your name?;I'm from…;I speak a little;I don't understand;Please speak slowly;one;two;three;four;five;six;seven;eight;nine;ten;water;coffee;rice;I'd like…;How much is it?;Delicious!;The bill, please;mother;father;friend;child;teacher;today;tomorrow;yesterday;now;morning;night;Where is…?;toilet;left;right;straight ahead;train station;happy;tired;hungry;I love you;I like it;beautiful",
vi:"Xin chào;Tạm biệt;Cảm ơn;Xin lỗi;Vâng;Không;Làm ơn;Bạn khỏe không?;Tôi khỏe;Rất vui được gặp bạn;Tên tôi là…;Bạn tên là gì?;Tôi đến từ…;Tôi nói được một chút;Tôi không hiểu;Làm ơn nói chậm thôi;một;hai;ba;bốn;năm;sáu;bảy;tám;chín;mười;nước;cà phê;cơm;Cho tôi…;Bao nhiêu tiền?;Ngon quá!;Tính tiền giùm;mẹ;bố;bạn;con;giáo viên;hôm nay;ngày mai;hôm qua;bây giờ;buổi sáng;buổi tối;… ở đâu?;nhà vệ sinh;bên trái;bên phải;đi thẳng;ga tàu;vui;mệt;đói;Anh yêu em;Tôi thích nó;đẹp",
es:"Hola;Adiós;Gracias;Lo siento;Sí;No;Por favor;¿Cómo estás?;Estoy bien;Mucho gusto;Me llamo…;¿Cómo te llamas?;Soy de…;Hablo un poco;No entiendo;Más despacio, por favor;uno;dos;tres;cuatro;cinco;seis;siete;ocho;nueve;diez;agua;café;arroz;Quisiera…;¿Cuánto cuesta?;¡Delicioso!;La cuenta, por favor;madre;padre;amigo;niño;profesor;hoy;mañana;ayer;ahora;la mañana;la noche;¿Dónde está…?;baño;izquierda;derecha;todo recto;estación de tren;feliz;cansado;tengo hambre;Te quiero;Me gusta;bonito",
fr:"Bonjour;Au revoir;Merci;Pardon;Oui;Non;S'il vous plaît;Comment ça va ?;Ça va bien;Enchanté;Je m'appelle…;Comment tu t'appelles ?;Je viens de…;Je parle un peu;Je ne comprends pas;Plus lentement, s'il vous plaît;un;deux;trois;quatre;cinq;six;sept;huit;neuf;dix;eau;café;riz;Je voudrais…;C'est combien ?;Délicieux !;L'addition, s'il vous plaît;mère;père;ami;enfant;professeur;aujourd'hui;demain;hier;maintenant;matin;nuit;Où est… ?;toilettes;gauche;droite;tout droit;gare;heureux;fatigué;j'ai faim;Je t'aime;Ça me plaît;beau",
de:"Hallo;Tschüss;Danke;Entschuldigung;Ja;Nein;Bitte;Wie geht's?;Mir geht's gut;Freut mich;Ich heiße…;Wie heißt du?;Ich komme aus…;Ich spreche ein bisschen;Ich verstehe nicht;Bitte langsamer;eins;zwei;drei;vier;fünf;sechs;sieben;acht;neun;zehn;Wasser;Kaffee;Reis;Ich hätte gern…;Was kostet das?;Lecker!;Die Rechnung, bitte;Mutter;Vater;Freund;Kind;Lehrer;heute;morgen;gestern;jetzt;der Morgen;die Nacht;Wo ist…?;Toilette;links;rechts;geradeaus;Bahnhof;glücklich;müde;Ich habe Hunger;Ich liebe dich;Das gefällt mir;schön",
pt:"Olá;Tchau;Obrigado;Desculpe;Sim;Não;Por favor;Como vai?;Estou bem;Prazer;Meu nome é…;Qual é o seu nome?;Sou de…;Falo um pouco;Não entendo;Mais devagar, por favor;um;dois;três;quatro;cinco;seis;sete;oito;nove;dez;água;café;arroz;Eu queria…;Quanto custa?;Delicioso!;A conta, por favor;mãe;pai;amigo;criança;professor;hoje;amanhã;ontem;agora;manhã;noite;Onde fica…?;banheiro;esquerda;direita;em frente;estação de trem;feliz;cansado;estou com fome;Eu te amo;Eu gosto;bonito",
zh:"你好|nǐ hǎo;再见|zàijiàn;谢谢|xièxie;对不起|duìbuqǐ;是|shì;不是|bú shì;请|qǐng;你好吗？|nǐ hǎo ma?;我很好|wǒ hěn hǎo;很高兴认识你|hěn gāoxìng rènshi nǐ;我叫…|wǒ jiào…;你叫什么名字？|nǐ jiào shénme míngzi?;我来自…|wǒ láizì…;我会说一点儿|wǒ huì shuō yìdiǎnr;我听不懂|wǒ tīng bu dǒng;请说慢一点|qǐng shuō màn yìdiǎn;一|yī;二|èr;三|sān;四|sì;五|wǔ;六|liù;七|qī;八|bā;九|jiǔ;十|shí;水|shuǐ;咖啡|kāfēi;米饭|mǐfàn;我想要…|wǒ xiǎng yào…;多少钱？|duōshao qián?;好吃！|hǎochī!;买单|mǎidān;妈妈|māma;爸爸|bàba;朋友|péngyou;孩子|háizi;老师|lǎoshī;今天|jīntiān;明天|míngtiān;昨天|zuótiān;现在|xiànzài;早上|zǎoshang;晚上|wǎnshang;…在哪里？|… zài nǎlǐ?;洗手间|xǐshǒujiān;左边|zuǒbian;右边|yòubian;一直走|yìzhí zǒu;火车站|huǒchēzhàn;开心|kāixīn;累|lèi;饿|è;我爱你|wǒ ài nǐ;我喜欢|wǒ xǐhuan;漂亮|piàoliang",
yue:"你好|nei5 hou2;拜拜|baai1 baai3;多謝|do1 ze6;對唔住|deoi3 m4 zyu6;係|hai6;唔係|m4 hai6;唔該|m4 goi1;你好嗎？|nei5 hou2 maa3?;我好好|ngo5 hou2 hou2;好高興識到你|hou2 gou1 hing3 sik1 dou2 nei5;我叫…|ngo5 giu3…;你叫咩名？|nei5 giu3 me1 meng2?;我嚟自…|ngo5 lai4 zi6…;我識講少少|ngo5 sik1 gong2 siu2 siu2;我唔明|ngo5 m4 ming4;唔該講慢啲|m4 goi1 gong2 maan6 di1;一|jat1;二|ji6;三|saam1;四|sei3;五|ng5;六|luk6;七|cat1;八|baat3;九|gau2;十|sap6;水|seoi2;咖啡|gaa3 fe1;飯|faan6;我想要…|ngo5 soeng2 jiu3…;幾多錢？|gei2 do1 cin2?;好好食！|hou2 hou2 sik6!;唔該埋單|m4 goi1 maai4 daan1;媽媽|maa4 maa1;爸爸|baa4 baa1;朋友|pang4 jau5;細路|sai3 lou6;老師|lou5 si1;今日|gam1 jat6;聽日|ting1 jat6;尋日|cam4 jat6;而家|ji4 gaa1;朝早|ziu1 zou2;夜晚|je6 maan5;…喺邊度？|… hai2 bin1 dou6?;洗手間|sai2 sau2 gaan1;左邊|zo2 bin1;右邊|jau6 bin1;一直行|jat1 zik6 haang4;火車站|fo2 ce1 zaam6;開心|hoi1 sam1;攰|gui6;肚餓|tou5 ngo6;我愛你|ngo5 oi3 nei5;我鍾意|ngo5 zung1 ji3;靚|leng3",
ja:"こんにちは|konnichiwa;さようなら|sayōnara;ありがとう|arigatō;ごめんなさい|gomen nasai;はい|hai;いいえ|iie;お願いします|onegaishimasu;お元気ですか？|o-genki desu ka?;元気です|genki desu;はじめまして|hajimemashite;私の名前は…です|watashi no namae wa … desu;お名前は？|o-namae wa?;…から来ました|… kara kimashita;少し話せます|sukoshi hanasemasu;わかりません|wakarimasen;ゆっくり話してください|yukkuri hanashite kudasai;一|ichi;二|ni;三|san;四|yon;五|go;六|roku;七|nana;八|hachi;九|kyū;十|jū;水|mizu;コーヒー|kōhī;ご飯|gohan;…をください|… o kudasai;いくらですか？|ikura desu ka?;おいしい！|oishii!;お会計お願いします|o-kaikei onegaishimasu;母|haha;父|chichi;友達|tomodachi;子ども|kodomo;先生|sensei;今日|kyō;明日|ashita;昨日|kinō;今|ima;朝|asa;夜|yoru;…はどこですか？|… wa doko desu ka?;トイレ|toire;左|hidari;右|migi;まっすぐ|massugu;駅|eki;うれしい|ureshii;疲れた|tsukareta;お腹がすいた|onaka ga suita;愛してる|aishiteru;好きです|suki desu;きれい|kirei",
ko:"안녕하세요|annyeonghaseyo;안녕히 가세요|annyeonghi gaseyo;감사합니다|gamsahamnida;죄송합니다|joesonghamnida;네|ne;아니요|aniyo;주세요|juseyo;잘 지내세요?|jal jinaeseyo?;잘 지내요|jal jinaeyo;만나서 반가워요|mannaseo bangawoyo;제 이름은 …예요|je ireumeun …yeyo;이름이 뭐예요?|ireumi mwoyeyo?;저는 …에서 왔어요|jeoneun …eseo wasseoyo;조금 할 수 있어요|jogeum hal su isseoyo;이해 못 해요|ihae mot haeyo;천천히 말해 주세요|cheoncheonhi malhae juseyo;하나|hana;둘|dul;셋|set;넷|net;다섯|daseot;여섯|yeoseot;일곱|ilgop;여덟|yeodeol;아홉|ahop;열|yeol;물|mul;커피|keopi;밥|bap;…주세요|… juseyo;얼마예요?|eolmayeyo?;맛있어요!|masisseoyo!;계산해 주세요|gyesanhae juseyo;어머니|eomeoni;아버지|abeoji;친구|chingu;아이|ai;선생님|seonsaengnim;오늘|oneul;내일|naeil;어제|eoje;지금|jigeum;아침|achim;밤|bam;…어디예요?|… eodiyeyo?;화장실|hwajangsil;왼쪽|oenjjok;오른쪽|oreunjjok;직진|jikjin;기차역|gichayeok;행복해요|haengbokhaeyo;피곤해요|pigonhaeyo;배고파요|baegopayo;사랑해요|saranghaeyo;좋아요|joayo;예뻐요|yeppeoyo"
};
const LPH={};for(const [k,v] of Object.entries(LDATA))LPH[k]=v.split(";").map(x=>{const [t,r]=x.split("|");return {t:t.trim(),r:(r||"").trim()}});
const LUNITS=[{id:"greet",lv:"zero",a:0,b:10,em:"👋"},{id:"me",lv:"A1",a:10,b:16,em:"🙋"},{id:"num",lv:"A1",a:16,b:26,em:"🔢"},{id:"food",lv:"A1",a:26,b:33,em:"🍜"},{id:"people",lv:"A1",a:33,b:38,em:"👨‍👩‍👧"},{id:"time",lv:"A1",a:38,b:44,em:"⏰"},{id:"go",lv:"A1",a:44,b:50,em:"🧭"},{id:"feel",lv:"A1",a:50,b:56,em:"💛"}];
const UNAME={en:{greet:"Greetings",me:"About me",num:"Numbers 1–10",food:"Food & café",people:"Family & people",time:"Time & days",go:"Getting around",feel:"Feelings",sounds:"Sounds & writing"},
 vi:{greet:"Chào hỏi",me:"Giới thiệu bản thân",num:"Số đếm 1–10",food:"Ăn uống",people:"Gia đình & mọi người",time:"Thời gian",go:"Đi lại, hỏi đường",feel:"Cảm xúc",sounds:"Phát âm & chữ viết"},
 yue:{greet:"打招呼",me:"自我介紹",num:"數字 1–10",food:"飲食",people:"家人同朋友",time:"時間",go:"問路",feel:"感受",sounds:"讀音同文字"},
 zh:{greet:"打招呼",me:"自我介绍",num:"数字 1–10",food:"饮食",people:"家人和朋友",time:"时间",go:"问路",feel:"感受",sounds:"发音和文字"}};
const LTOPICS={
 en:{A2:["Shopping","Directions & transport","Daily routine","My last weekend","At a restaurant","At the doctor"],B1:["Telling a story","Plans for the future","Giving opinions","Work & study","Travel problems","Hobbies"],B2:["Debate a topic","News & current events","Idioms & slang","Job interview","Negotiating a price","Culture & traditions"],C1:["Persuasive speaking","Humor & wordplay","Formal vs informal","Abstract ideas","Giving a presentation"],C2:["Native-speed chat","Literature & poetry","Regional accents & dialects","Professional writing","Fluency challenge"]},
 vi:{A2:["Mua sắm","Hỏi đường & đi lại","Sinh hoạt hằng ngày","Cuối tuần vừa rồi","Ở nhà hàng","Đi khám bệnh"],B1:["Kể một câu chuyện","Kế hoạch tương lai","Nêu ý kiến","Công việc & học tập","Sự cố khi du lịch","Sở thích"],B2:["Tranh luận một chủ đề","Tin tức thời sự","Thành ngữ & tiếng lóng","Phỏng vấn xin việc","Mặc cả giá","Văn hoá & truyền thống"],C1:["Nói thuyết phục","Hài hước & chơi chữ","Trang trọng và thân mật","Ý tưởng trừu tượng","Thuyết trình"],C2:["Nói chuyện tốc độ người bản xứ","Văn học & thơ ca","Giọng địa phương","Viết chuyên nghiệp","Thử thách lưu loát"]},
 yue:{A2:["買嘢","問路同交通","日常生活","上個週末","喺餐廳","睇醫生"],B1:["講故事","未來計劃","講意見","工作同讀書","旅行出事","興趣"],B2:["辯論","新聞時事","俗語同潮語","見工","講價","文化同傳統"],C1:["說服人","幽默同食字","正式同口語","抽象概念","做簡報"],C2:["本地人語速傾偈","文學同詩","口音同方言","專業寫作","流利挑戰"]}};
const SOUNDS={
 en:{en:"English has 26 letters, but spelling and sound often don't match, so listen and repeat a lot. Stress changes words: PHOtograph vs phoTOgrapher. 'th' is made with your tongue between your teeth.",
  vi:"Vietnamese uses the Latin alphabet plus accents. It has 6 tones: ma (ghost), má (mother), mà (but), mả (tomb), mã (horse), mạ (rice seedling). The accent mark tells you the tone, so learn tones from day one. đ sounds like English d; d sounds like z (north) or y (south).",
  es:"Spanish is spelled almost exactly how it sounds. 5 pure vowels: a e i o u. ñ sounds like 'ny', j is a throaty h, and rr is rolled. Stress falls on the next-to-last syllable unless there's an accent mark.",
  fr:"French has many silent letters at word ends and nasal vowels (an, on, in). Words link together: les amis sounds like 'lay-zah-mee'. The r comes from the back of the throat.",
  de:"German is mostly spelled how it sounds. ä, ö, ü change the vowel, ß = 'ss', w sounds like v and ch is a soft throaty sound. Every noun is capitalized and has a gender: der, die or das.",
  pt:"Brazilian Portuguese has nasal vowels (ão, ã, õ) and open/closed e and o. 'lh' sounds like 'ly', 'nh' like 'ny', and an r at the start of a word sounds like an h.",
  zh:"Mandarin uses Chinese characters; pinyin shows the sound. 4 tones plus a neutral one: mā (mother), má (hemp), mǎ (horse), mà (scold). The same syllable with a different tone is a different word, so copy the tones carefully.",
  yue:"Cantonese uses Traditional characters; jyutping shows the sound, and the number after each syllable is the tone (1–6). si1 poem, si2 history, si3 try, si4 time, si5 market, si6 matter. Spoken Cantonese has its own words: 係 (is), 唔 (not), 嘅 (of), 咗 (done).",
  ja:"Japanese uses 3 scripts: hiragana (sounds), katakana (foreign words) and kanji (meanings). Start with the 46 hiragana. Only 5 vowels (a i u e o), and every syllable is said evenly. Long vowels (ō, ū) matter.",
  ko:"Korean uses Hangul, a logical alphabet you can learn in a day: 14 consonants + 10 vowels combine into syllable blocks, like ㅎ+ㅏ+ㄴ = 한. Some consonants come in plain, aspirated and tense versions (ㄱ ㅋ ㄲ)."},
 vi:{en:"Tiếng Anh có 26 chữ cái nhưng cách viết và cách đọc thường khác nhau, nên hãy nghe và nhắc lại thật nhiều. Trọng âm làm đổi nghĩa: PHOtograph và phoTOgrapher. Âm 'th' đặt lưỡi giữa hai hàm răng.",
  vi:"Tiếng Việt dùng chữ Latinh có dấu và 6 thanh: ma, má, mà, mả, mã, mạ. Dấu cho biết thanh điệu.",
  es:"Tiếng Tây Ban Nha đọc gần như đúng như viết. 5 nguyên âm rõ ràng: a e i o u. ñ đọc như 'nh', j là âm h trong cổ họng, rr là âm r rung.",
  fr:"Tiếng Pháp có nhiều chữ câm ở cuối từ và nguyên âm mũi (an, on, in). Các từ được nối âm: les amis đọc như 'lê-da-mi'. Âm r phát ra từ cuống họng.",
  de:"Tiếng Đức phần lớn đọc như viết. ä, ö, ü đổi nguyên âm, ß = 'ss', w đọc như v. Mọi danh từ viết hoa và có giống: der, die, das.",
  pt:"Tiếng Bồ Đào Nha (Brazil) có nguyên âm mũi (ão, ã, õ). 'lh' đọc như 'li', 'nh' như 'nh' tiếng Việt, r ở đầu từ đọc như h.",
  zh:"Tiếng Trung phổ thông dùng chữ Hán; pinyin ghi cách đọc. Có 4 thanh và 1 thanh nhẹ: mā (mẹ), má (gai), mǎ (ngựa), mà (mắng). Khác thanh là khác nghĩa, giống tiếng Việt.",
  yue:"Tiếng Quảng Đông dùng chữ Hán phồn thể; jyutping ghi cách đọc, con số sau mỗi âm là thanh điệu (1–6). Văn nói có từ riêng: 係 (là), 唔 (không), 嘅 (của), 咗 (rồi).",
  ja:"Tiếng Nhật dùng 3 bộ chữ: hiragana (âm), katakana (từ ngoại lai) và kanji (chữ Hán). Hãy bắt đầu với 46 chữ hiragana. Chỉ có 5 nguyên âm a i u e o, đọc đều từng âm.",
  ko:"Tiếng Hàn dùng chữ Hangul, học trong một ngày là đọc được: 14 phụ âm + 10 nguyên âm ghép thành khối âm tiết, ví dụ ㅎ+ㅏ+ㄴ = 한."}};
const ROMAN_NAME={zh:"pinyin",yue:"jyutping",ja:"romaji",ko:"romanization"};

/* ---------- small DOM helper ---------- */
function h(tag,attrs,...kids){const e=document.createElement(tag);if(attrs)for(const [k,v] of Object.entries(attrs)){if(k==="class")e.className=v;else if(k==="text")e.textContent=v;else if(k.startsWith("on"))e[k]=v;else if(v!=null&&v!==false)e.setAttribute(k,v)}
  kids.flat().forEach(c=>{if(c==null||c===false)return;e.append(c.nodeType?c:document.createTextNode(c))});return e}
const addDays=n=>new Date(Date.now()+n*864e5).toISOString().slice(0,10);

/* ================= FUTURE ================= */
const FL=()=>FUT[CL()];
let fTopic=store.get("fTopic","any"),fTime=store.get("fTime","week");
S.caps=store.get("caps",[]);S.stats.gaze=S.stats.gaze||0;
function chipGroup(el,obj,cur,onPick){el.innerHTML="";Object.entries(obj).forEach(([k,v])=>el.append(h("button",{type:"button",class:"chip","aria-pressed":k===cur,onclick:()=>{onPick(k);sfx("blip")}},v)))}
function renderFuture(){
  const F=FL();
  chipGroup($("#fTopics"),F.topics,fTopic,k=>{fTopic=k;store.set("fTopic",k);renderFuture()});
  chipGroup($("#fTimes"),F.times,fTime,k=>{fTime=k;store.set("fTime",k);renderFuture()});
  const hs=$("#hSign"),cur=store.get("hSign",0);hs.innerHTML="";F.signs.forEach((s,i)=>hs.append(h("option",{value:i},s)));hs.value=cur;
  $("#hYear").value=store.get("hYear","");
  const cw=$("#capWhen");const v=cw.value||"30";cw.innerHTML="";[[7,"c1w"],[30,"c1m"],[182,"c6m"],[365,"c1y"]].forEach(([d,k])=>cw.append(h("option",{value:d},T(k))));cw.value=v;
  if(!$("#tcards").children.length)renderTCards();
  renderCaps();
}
function forecast(topic,time,q){
  const lang=CL(),F=FUT[lang];const r=rng(hashStr([today(),topic,time,(q||"").toLowerCase().trim(),S.name].join("|")));
  const tp=topic==="any"?rpick(r,Object.keys(F.heads)):topic;const sep=lang==="yue"?"，":", ";
  const core=time==="decade"?F.when.decade+sep+rpick(r,F.decade):F.when[time]+sep+rpick(r,F.heads[tp]);
  const col=rpick(r,COLORS);
  return {head:(q?fill(F.qAbout,{q}):"")+core+(lang==="yue"?"。":"."),odds:55+Math.floor(r()*44),color:[col[0],col[1][lang]||col[1].en],num:1+Math.floor(r()*99),day:rpick(r,F.days),item:rpick(r,F.items),scene:rpick(r,F.scenes),do:rpick(r,F.dos),avoid:rpick(r,F.avoids),close:rpick(r,F.close)};
}
function forecastText(f){const L=FL().L;return "🔮 "+f.head+"\n"+L.odds+": "+f.odds+"%\n"+L.see+": "+f.scene+"\n"+L.do+": "+f.do+"\n"+L.avoid+": "+f.avoid+"\n"+L.color+": "+f.color[1]+" · "+L.num+": "+f.num+" · "+L.day+": "+f.day+"\n\n"+f.close}
function readingEl(f){
  const L=FL().L;
  return h("div",{class:"reading"},
    h("div",{class:"rh"},f.head),
    h("div",null,h("div",{class:"rl"},h("span",null,L.odds),h("span",null,f.odds+"%")),h("div",{class:"meter",style:"margin-top:4px"},h("i",{style:"width:"+f.odds+"%"}))),
    h("p",null,"🔭 "+f.scene),
    h("div",{class:"rl"},h("span",null,L.do),h("span",null,f.do),h("span",null,L.avoid),h("span",null,f.avoid),
      h("span",null,L.color),h("span",null,h("i",{class:"swatch",style:"background:"+f.color[0]}),f.color[1]),
      h("span",null,L.num),h("span",null,String(f.num)),h("span",null,L.day),h("span",null,f.day),h("span",null,L.item),h("span",null,f.item)),
    h("p",{style:"font-style:italic"},f.close));
}
function gaze(){
  const q=$("#fQ").value.trim();const orb=$("#orb"),out=$("#fOut");
  orb.classList.add("gazing");$("#orbText").textContent="…";out.innerHTML="";out.append(h("p",{class:"note",style:"text-align:center"},T("fGazing")));
  sfx("drum");mascot("think");$("#fGo").disabled=true;
  setTimeout(()=>{
    const f=forecast(fTopic,fTime,q);orb.classList.remove("gazing");$("#orbText").textContent=f.odds+"%";$("#fGo").disabled=false;
    S.stats.gaze++;saveStats();sfx("win");mascot("happy");confetti();
    const txt=forecastText(f);out.innerHTML="";
    out.append(readingEl(f),h("div",{class:"btn-row",style:"margin-top:10px"},
      h("button",{type:"button",class:"btn ghost small",onclick:()=>speakAs(curChar(),txt)},T("fRead")),
      h("button",{type:"button",class:"btn ghost small",onclick:()=>{switchTab("wish");makeCard(q||FL().topics[fTopic]+" · "+FL().times[fTime],f.head+" "+f.do)}},T("fCard")),
      h("button",{type:"button",class:"btn ghost small",onclick:()=>{switchTab("chat");oracle(say(txt,""),[{t:CH("predict"),c:"predict"},{t:CH("fortune"),c:"fortune"}])}},T("fAsk"))));
    speak(f.head);
  },1500);
}
function horoscope(){
  const F=FL(),i=+$("#hSign").value,y=parseInt($("#hYear").value,10);store.set("hSign",i);store.set("hYear",isNaN(y)?"":y);
  const r=rng(hashStr(today()+"|h|"+i+"|"+CL()));const st=()=>{const n=1+Math.floor(r()*5);return "★".repeat(n)+"☆".repeat(5-n)};
  const col=rpick(r,COLORS),L=F.hL,LL=F.L;
  const rows=[[L.love,st()],[L.money,st()],[L.energy,st()],[L.luck,st()]];
  const rl=h("div",{class:"rl"});rows.forEach(([a,b])=>rl.append(h("span",null,a),h("span",{class:"stars"},b)));
  if(!isNaN(y)&&y>1900&&y<2100)rl.append(h("span",null,L.animal),h("span",null,F.animals[((y-4)%12+12)%12]));
  rl.append(h("span",null,LL.color),h("span",null,h("i",{class:"swatch",style:"background:"+col[0]}),col[1][CL()]||col[1].en),h("span",null,LL.num),h("span",null,String(1+Math.floor(r()*99))));
  const msg=rpick(r,F.hMsg);
  $("#hOut").innerHTML="";$("#hOut").append(h("div",{class:"reading"},h("div",{class:"rh"},fill(L.today,{s:F.signs[i]})),rl,h("p",null,msg),
    h("div",{class:"btn-row"},h("button",{type:"button",class:"btn ghost small",style:"color:var(--ink);border-color:#c9b78f",onclick:()=>speakAs(curChar(),fill(L.today,{s:F.signs[i]})+". "+msg)},T("fRead")))));
  sfx("ding");
}
function renderTCards(){
  const w=$("#tcards");w.innerHTML="";
  [T("dPast"),T("dNow"),T("dFut")].forEach(p=>{const c=h("button",{type:"button",class:"tcard","aria-label":p},h("div",{class:"in"},h("div",{class:"f"},"🔮"),h("div",{class:"b"})),h("span",{class:"tpos"},p));c.onclick=()=>drawCards();w.append(c)});
}
function drawCards(){
  const F=FL();const deck=F.cards.slice();const picks=[];for(let i=0;i<3;i++)picks.push(deck.splice(Math.floor(Math.random()*deck.length),1)[0]);
  const cards=[...$("#tcards").children];cards.forEach(c=>c.classList.remove("flip"));sfx("coin");
  setTimeout(()=>cards.forEach((c,i)=>{const b=c.querySelector(".b");b.innerHTML="";b.append(h("span",{class:"ce"},picks[i][0]),h("b",null,picks[i][1]),h("small",null,picks[i][2]));
    setTimeout(()=>{c.classList.add("flip");sfx("blip2")},i*450)}),250);
  setTimeout(()=>{const s=fill(F.cardSum,{a:picks[0][1],b:picks[1][1],c:picks[2][1]});$("#dOut").textContent=s;speak(s);mascot("happy")},1700);
}
function futureYou(){
  const F=FL().fy;const y=new Date().getFullYear()+10;const n=userName();
  const txt=fill(pick(F.open),{y,n})+" "+pick(F.mid)+" "+pick(F.tip)+" "+pick(F.fun)+"\n— "+fill(F.sign,{n});
  $("#yOut").innerHTML="";$("#yOut").append(h("div",{class:"ticket"},h("div",{class:"t-head"},"✉️ "+y),h("p",{style:"margin:8px 0 0;white-space:pre-wrap"},txt)),
    h("div",{class:"btn-row",style:"margin-top:8px"},h("button",{type:"button",class:"btn ghost small",onclick:()=>speakAs(curChar(),txt)},T("fRead")),h("button",{type:"button",class:"btn ghost small",onclick:()=>copy(txt)},T("copyText"))));
  sfx("win");speak(txt);
}
function renderCaps(){
  const l=$("#capList");l.innerHTML="";
  if(!S.caps.length){l.append(h("div",{class:"note"},T("cEmpty")));return}
  const now=today();
  S.caps.slice().sort((a,b)=>a.o<b.o?-1:1).forEach(c=>{
    if(c.o>now){const d=Math.ceil((new Date(c.o)-new Date(now))/864e5);l.append(itemEl(fill(T("cLocked"),{d}),c.c,"✕",()=>{S.caps=S.caps.filter(x=>x!==c);store.set("caps",S.caps);renderCaps()}))}
    else l.append(itemEl(fill(T("cOpened"),{d:c.c})+"\n"+c.t,null,"✕",()=>{S.caps=S.caps.filter(x=>x!==c);store.set("caps",S.caps);renderCaps()}));
  });
}
function sealCap(){const t=$("#capText").value.trim();if(!t){$("#capText").focus();return}
  S.caps.push({t,c:today(),o:addDays(+$("#capWhen").value),seen:false});store.set("caps",S.caps);$("#capText").value="";renderCaps();toast(T("cSaved"));sfx("coin")}
function checkCaps(){const now=today();let n=0;S.caps.forEach(c=>{if(c.o<=now&&!c.seen){c.seen=true;n++}});if(n){store.set("caps",S.caps);setTimeout(()=>{toast(T("cNew"));confetti();sfx("win")},1200)}}

/* chat: predictions */
const PRED_RE=/(predict|forecast|my future|future|tương lai|dự đoán|tiên tri|未來|未来|預測|预测|預言|futuro|avenir|prédis|predice)/i;
function chatForecast(raw){
  const t=raw.toLowerCase();
  const topic=/(love|crush|date|tình|yêu|người yêu|愛|爱|拍拖|amor|amour)/i.test(t)?"love":/(money|rich|tiền|giàu|錢|钱|發財|dinero|argent)/i.test(t)?"money":/(job|work|career|study|exam|business|việc|học|thi|kinh doanh|工作|讀書|生意|考試|trabajo|travail)/i.test(t)?"career":/(travel|trip|du lịch|旅行|viaje|voyage)/i.test(t)?"travel":/(friend|bạn bè|朋友|amigo|ami)/i.test(t)?"friends":"any";
  const time=/(10 years|ten years|10 năm|mười năm|十年|10 años|10 ans)/i.test(t)?"decade":/(tomorrow|ngày mai|聽日|明天|mañana|demain)/i.test(t)?"tomorrow":/(month|tháng|月|mes|mois)/i.test(t)?"month":/(year|năm nay|今年|año|année)/i.test(t)?"year":"week";
  S.stats.gaze++;saveStats();
  return forecastText(forecast(topic,time,raw.slice(0,60)));
}
Object.assign(PACKS.en.chips,{predict:"Predict my future"});Object.assign(PACKS.vi.chips,{predict:"Dự đoán tương lai"});Object.assign(PACKS.yue.chips,{predict:"預測我嘅未來"});
Object.assign(PACKS.zh.chips,{predict:"预测我的未来"});Object.assign(PACKS.es.chips,{predict:"Predice mi futuro"});Object.assign(PACKS.fr.chips,{predict:"Prédis mon avenir"});

/* ================= LINGO LAB ================= */
const L=Object.assign({t:null,xp:0,streak:0,last:"",pass:{},srs:{}},store.get("learn",{}));
if(!L.t)L.t=(uiLang()==="en")?"es":"en";
const saveL=()=>store.set("learn",L);
const lname=l=>LANGS[l]?LANGS[l].n:l;
const hasOff=l=>!!LPH[l];
const lbcp=l=>(LANGS[l]&&LANGS[l].b)||"en-US";
const ukey=()=>{const u=uiLang();return u==="vi"?"vi":(u==="yue"||u==="zh")?u:"en"};
function meaningOf(i){let u=uiLang();if(!LPH[u]||u===L.t)u=(L.t==="en"?(uiLang()==="vi"?"vi":"es"):"en");if(u===L.t)u="vi";return LPH[u][i].t}
function unitName(id){const k=ukey();return (UNAME[k]||UNAME.en)[id]||UNAME.en[id]}
function topicsFor(lv){const k=ukey()==="zh"?"yue":ukey();return (LTOPICS[k]||LTOPICS.en)[lv]||LTOPICS.en[lv]}
function addXP(n){L.xp+=n;const t=today();if(L.last!==t){L.streak=(L.last===addDays(-1))?L.streak+1:1;L.last=t}S.stats.lxp=L.xp;saveL();saveStats()}
function srsMap(){return (L.srs[L.t]=L.srs[L.t]||{})}
function srsAdd(i){const m=srsMap();if(!m[i])m[i]={b:1,d:addDays(1)};saveL()}
function srsDue(){const m=srsMap(),t=today();return Object.keys(m).filter(k=>m[k].d<=t).map(Number)}
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/…/g,"").replace(/[^\p{L}\p{N}]/gu,"")}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,i)=>i);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function sim(ans,target){const a=norm(ans),b=norm(target);if(!a||!b)return 0;if(String(target).includes("…")&&a.includes(b))return 1;return 1-lev(a,b)/Math.max(a.length,b.length)}
function scoreAns(ans,item){return Math.max(sim(ans,item.t),item.r?sim(ans,item.r):0,item.r?sim(ans.replace(/\d/g,""),item.r.replace(/\d/g,"")):0)}
function speakIn(text,lang,rate){
  if(!("speechSynthesis" in window))return;
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text.replace(/…/g," "));u.lang=lbcp(lang);u.rate=rate||.9;
    const c=curChar();u.pitch=Math.max(.5,Math.min(1.6,c.pitch));
    const list=voicesFor(lang);if(list.length){const f=list.filter(v=>FEM.test(v.name)),m=list.filter(v=>MAL.test(v.name)&&!FEM.test(v.name));u.voice=(c.g==="f"&&f[0])||(c.g==="m"&&m[0])||list[0]}
    u.onstart=()=>{const el=$("#mascot");if(el)el.classList.add("is-talk")};u.onend=u.onerror=()=>{const el=$("#mascot");if(el)el.classList.remove("is-talk")};
    speechSynthesis.speak(u)}catch(e){}
}
function listenFor(lang,cb){
  if(!SR){toast(T("micOff"));return}
  try{const r=new SR();r.lang=lbcp(lang);r.interimResults=false;r.maxAlternatives=3;
    r.onresult=e=>{const alts=[...e.results[0]].map(a=>a.transcript);cb(alts)};
    r.onerror=()=>toast(T("micOff"));r.start();sfx("blip")}catch(e){toast(T("micOff"))}
}
let lesson=null;
function renderLearn(){
  const sel=$("#lTarget");sel.innerHTML="";
  Object.entries(LANGS).forEach(([k,v])=>{if(k!=="auto")sel.append(h("option",{value:k},v.n+(hasOff(k)?" ★":"")))});sel.value=L.t;
  $("#lNote").textContent=hasOff(L.t)?T("lNoteOff"):T("lNoteAI");
  const st=$("#lStats");st.innerHTML="";
  [[T("lXP"),L.xp],[T("lWords"),Object.keys(srsMap()).length],[T("lStreak"),L.streak],[T("lDue"),srsDue().length]].forEach(([k,v])=>st.append(h("div",{class:"stat"},h("b",null,String(v)),h("span",null,k))));
  const tools=$("#lTools");tools.innerHTML="";
  if(hasOff(L.t)){
    tools.append(h("button",{type:"button",class:"btn ghost small",onclick:startReview},T("lReview")+(srsDue().length?" ("+srsDue().length+")":"")),
      h("button",{type:"button",class:"btn ghost small",onclick:startPractice},T("lPractice")),
      h("button",{type:"button",class:"btn ghost small",onclick:phrasebook},T("lBook")));
  }
  tools.append(h("button",{type:"button",class:"btn ghost small",onclick:()=>startTutor(levelGuess(),T("lFree"))},T("lTutor")));
  if(lesson)return renderLesson();
  renderPath();
}
function levelGuess(){if(!hasOff(L.t))return "A1";const all=LUNITS.every(u=>L.pass[L.t+":"+u.id]);return all?"A2":"A1"}
function renderPath(){
  const m=$("#learnMain");m.innerHTML="";
  ["zero","A1","A2","B1","B2","C1","C2"].forEach(lv=>{
    m.append(h("div",{class:"lvl"},h("span",{class:"lt"},T("lv_"+lv)),h("div",null,h("b",null,T("lvd_"+lv)))));
    const g=h("div",{class:"units"});
    if((lv==="zero"||lv==="A1")&&hasOff(L.t)){
      if(lv==="zero")g.append(h("button",{type:"button",class:"unit",onclick:soundsCard},h("b",null,"🔤 "+unitName("sounds")),h("span",null,fill(T("lSoundsN"),{l:lname(L.t)}))));
      LUNITS.filter(u=>u.lv===lv).forEach(u=>{const p=L.pass[L.t+":"+u.id];
        g.append(h("button",{type:"button",class:"unit"+(p?" done":""),onclick:()=>openUnit(u)},h("b",null,u.em+" "+unitName(u.id)),h("span",null,fill(T("lPhrases"),{n:u.b-u.a})+(p?"  "+"⭐".repeat(p):""))))});
    } else {
      const tps=(lv==="zero"||lv==="A1")?LUNITS.filter(u=>u.lv===lv).map(u=>unitName(u.id)):topicsFor(lv);
      if(lv==="zero")tps.unshift(unitName("sounds"));
      tps.forEach(tp=>g.append(h("button",{type:"button",class:"unit ai",onclick:()=>startTutor(lv,tp)},h("b",null,"🎓 "+tp),h("span",null,T("lTutor").replace(/^\S+\s/,"")))));
    }
    m.append(g);
  });
}
function backBtn(){return h("button",{type:"button",class:"btn ghost small",onclick:()=>{lesson=null;renderLearn()}},T("lBack"))}
function soundsCard(){
  const m=$("#learnMain");m.innerHTML="";const k=uiLang()==="vi"?"vi":"en";
  const items=LPH[L.t].slice(0,6);
  m.append(h("div",{class:"lcard"},h("b",{style:"font-size:18px"},"🔤 "+fill(T("lSoundsN"),{l:lname(L.t)})),h("div",{class:"notes"},SOUNDS[k][L.t]),
    h("div",{class:"list"},items.map((x,i)=>h("div",{class:"pb-row"},h("div",null,x.t,x.r?h("small",null,x.r):null,h("small",null,meaningOf(i))),h("button",{type:"button",class:"btn ghost small",onclick:()=>speakIn(x.t,L.t)},"🔊")))),
    h("div",{class:"btn-row"},backBtn(),h("button",{type:"button",class:"btn",onclick:()=>openUnit(LUNITS[0])},"👋 "+unitName("greet")))));
  $("#stage").scrollTop=$("#learnMain").offsetTop-10;
}
function openUnit(u){lesson={u,i:0,phase:"learn"};renderLesson();$("#stage").scrollTop=$("#learnMain").offsetTop-10}
function renderLesson(){
  const m=$("#learnMain");m.innerHTML="";const u=lesson.u;const n=u.b-u.a;
  if(lesson.phase==="learn"){
    const idx=u.a+lesson.i,x=LPH[L.t][idx];
    const dots=h("div",{class:"lprog"});for(let k=0;k<n;k++)dots.append(h("i",{class:k<=lesson.i?"on":""}));
    const scoreLine=h("div",{class:"note",id:"lScoreLine"});
    m.append(h("div",{class:"lcard"},h("div",{class:"label"},u.em+" "+unitName(u.id)),dots,
      h("div",{class:"big",lang:lbcp(L.t)},x.t),x.r?h("div",{class:"rom"},x.r):null,h("div",{class:"mean"},meaningOf(idx)),
      h("div",{class:"btn-row"},h("button",{type:"button",class:"btn ghost small",onclick:()=>speakIn(x.t,L.t,.9)},T("lListen")),h("button",{type:"button",class:"btn ghost small",onclick:()=>speakIn(x.t,L.t,.55)},T("lSlow")),
        h("button",{type:"button",class:"btn ghost small",onclick:()=>listenFor(L.t,alts=>{const best=Math.max(...alts.map(a=>scoreAns(a,x)));const p=Math.round(best*100);
          scoreLine.textContent=fill(T("lScore"),{p})+" "+(p>=85?"🌟":p>=65?"👍":"🔁")+" · "+fill(T("lHeard"),{t:alts[0]});if(p>=65){addXP(3);sfx("ding")}else sfx("buzz")})},T("lSay"))),
      scoreLine,
      h("div",{class:"btn-row"},backBtn(),lesson.i<n-1?h("button",{type:"button",class:"btn",onclick:()=>{lesson.i++;renderLesson()}},T("lNext")):h("button",{type:"button",class:"btn",onclick:()=>{lesson.phase="quiz";buildQuiz();renderLesson()}},T("lStartQuiz")))));
    speakIn(x.t,L.t,.9);
  } else if(lesson.phase==="quiz"){
    const q=lesson.qs[lesson.qi];const x=LPH[L.t][q.i];
    const dots=h("div",{class:"lprog"});lesson.qs.forEach((_,k)=>dots.append(h("i",{class:k<=lesson.qi?"on":""})));
    const opts=h("div",{class:"opts"});
    q.opts.forEach(o=>{const b=h("button",{type:"button",class:"opt"},q.type==="m"?meaningOf(o):LPH[L.t][o].t);
      b.onclick=()=>{if(lesson.locked)return;lesson.locked=true;const ok=o===q.i;b.classList.add(ok?"ok":"bad");
        if(!ok)[...opts.children].forEach((c,k)=>{if(q.opts[k]===q.i)c.classList.add("ok")});
        if(ok){lesson.score++;addXP(10);srsAdd(q.i);sfx("ding")}else sfx("buzz");
        setTimeout(()=>{lesson.locked=false;lesson.qi++;if(lesson.qi>=lesson.qs.length)lesson.phase="result";renderLesson()},ok?650:1300)};opts.append(b)});
    m.append(h("div",{class:"lcard"},h("div",{class:"label"},u.em+" "+unitName(u.id)),dots,h("b",null,q.type==="m"?T("lQuizQ"):T("lQuizL")),
      q.type==="m"?h("div",null,h("div",{class:"big"},x.t),x.r?h("div",{class:"rom"},x.r):null):h("button",{type:"button",class:"btn",onclick:()=>speakIn(x.t,L.t)},T("lListen")),
      opts,h("div",{class:"btn-row"},backBtn())));
    if(q.type==="l")speakIn(x.t,L.t);
  } else {
    const s=lesson.score,n2=lesson.qs.length,pass=s>=6;
    if(pass){const stars=s===8?3:s===7?2:1;const key=L.t+":"+u.id;L.pass[key]=Math.max(L.pass[key]||0,stars);saveL();confetti();sfx("win");mascot("happy")}
    const next=LUNITS[LUNITS.indexOf(u)+1];
    m.append(h("div",{class:"lcard"},h("div",{class:"big"},pass?"🎉":"💪"),h("b",null,fill(T("lResult"),{s,n:n2,x:s*10})),h("div",{class:"mean"},pass?T("lPass"):T("lRetry")),
      h("div",{class:"btn-row"},backBtn(),h("button",{type:"button",class:"btn ghost small",onclick:()=>openUnit(u)},"🔁"),pass&&next?h("button",{type:"button",class:"btn",onclick:()=>openUnit(next)},next.em+" "+unitName(next.id)):null)));
    speak(pass?T("lPass"):T("lRetry"));
  }
}
function buildQuiz(){
  const u=lesson.u;const ids=[];for(let i=u.a;i<u.b;i++)ids.push(i);
  const qs=[];while(qs.length<8){const pool=ids.slice().sort(()=>Math.random()-.5);for(const i of pool){if(qs.length>=8)break;
    const others=[];while(others.length<3){const o=Math.floor(Math.random()*LPH[L.t].length);if(o!==i&&!others.includes(o)&&LPH[L.t][o].t!==LPH[L.t][i].t)others.push(o)}
    qs.push({i,type:qs.length%2?"l":"m",opts:[i,...others].sort(()=>Math.random()-.5)})}}
  lesson.qs=qs;lesson.qi=0;lesson.score=0;
}
function startReview(){
  let due=srsDue(),note="";const m=srsMap();const all=Object.keys(m).map(Number);
  if(!all.length){$("#learnMain").innerHTML="";$("#learnMain").append(h("div",{class:"lcard"},h("div",null,T("lNoCards")),h("div",{class:"btn-row"},backBtn(),h("button",{type:"button",class:"btn",onclick:()=>openUnit(LUNITS[0])},"👋 "+unitName("greet")))));return}
  if(!due.length){due=all.sort(()=>Math.random()-.5).slice(0,8);note=T("lNoDue")}
  lesson={phase:"review",cards:due.slice(0,15),i:0,note};reviewCard();
}
function reviewCard(){
  const m=$("#learnMain");m.innerHTML="";const lsn=lesson;
  if(lsn.i>=lsn.cards.length){lesson=null;toast("✓ +XP");renderLearn();return}
  const i=lsn.cards[lsn.i],x=LPH[L.t][i];const back=h("div",{hidden:true},x.r?h("div",{class:"rom"},x.r):null,h("div",{class:"mean"},meaningOf(i)));
  const grade=d=>{const s=srsMap()[i]||{b:1};s.b=d===0?1:Math.min(5,s.b+d);s.d=addDays([0,1,2,4,8,16][s.b]);srsMap()[i]=s;saveL();addXP(d?4:1);lsn.i++;reviewCard()};
  const btns=h("div",{class:"btn-row",hidden:true},h("button",{type:"button",class:"btn ghost small",onclick:()=>grade(0)},T("lAgain")),h("button",{type:"button",class:"btn ghost small",onclick:()=>grade(1)},T("lGood")),h("button",{type:"button",class:"btn small",onclick:()=>grade(2)},T("lEasy")));
  const reveal=h("button",{type:"button",class:"btn",onclick:()=>{back.hidden=false;btns.hidden=false;reveal.hidden=true;speakIn(x.t,L.t)}},T("lReveal"));
  m.append(h("div",{class:"lcard"},lsn.note?h("div",{class:"note"},lsn.note):null,h("div",{class:"label"},"🃏 "+(lsn.i+1)+" / "+lsn.cards.length),h("div",{class:"big"},x.t),back,
    h("div",{class:"btn-row"},h("button",{type:"button",class:"btn ghost small",onclick:()=>speakIn(x.t,L.t)},T("lListen")),reveal),btns,h("div",{class:"btn-row"},backBtn())));
}
function phrasebook(){
  lesson=null;const m=$("#learnMain");m.innerHTML="";
  const list=h("div",{class:"list"});
  LUNITS.forEach(u=>{list.append(h("div",{class:"label",style:"margin-top:8px"},u.em+" "+unitName(u.id)));
    for(let i=u.a;i<u.b;i++){const x=LPH[L.t][i];list.append(h("div",{class:"pb-row"},h("div",null,x.t,x.r?h("small",null,x.r):null,h("small",null,meaningOf(i))),h("button",{type:"button",class:"btn ghost small",onclick:()=>speakIn(x.t,L.t)},"🔊")))}});
  m.append(h("div",{class:"btn-row",style:"margin:12px 0"},backBtn()),list);
}
/* chat practice (offline) */
function startPractice(){
  if(!hasOff(L.t)){startTutor(levelGuess(),T("lFree"));return}
  const learned=Object.keys(srsMap()).map(Number);const pool=(learned.length>=6?learned:Array.from({length:16},(_,i)=>i)).sort(()=>Math.random()-.5).slice(0,8);
  S.awaiting=null;S.game={id:"practice",lang:L.t,items:pool,i:0,s:0};switchTab("chat");
  oracle(say(fill(T("lPracticeIntro"),{l:lname(L.t)}),""),[]);setTimeout(practiceAsk,500);
}
function practiceChips(){return [{t:T("lHint"),c:"g:hint"},{t:T("lListen"),c:"g:listen"},C("skip"),STOPC()]}
function practiceAsk(){const g=S.game;if(!g||g.id!=="practice")return;const i=g.items[g.i];oracle(say(fill(T("lHowSay"),{m:meaningOf(i),l:lname(g.lang)}),""),practiceChips())}
function practiceInput(t,tok){
  const g=S.game,i=g.items[g.i],x=LPH[g.lang][i];const low=(tok||t).toLowerCase().trim();
  if(tok==="stop"||STOPRE.test(low)){S.game=null;oracle(say(fill(T("lPracticeEnd"),{s:g.s,n:g.i}),""),defaultChips());return true}
  if(tok==="hint"){oracle(say("💡 "+Array.from(x.t).slice(0,Math.max(2,Math.ceil(Array.from(x.t).length/3))).join("")+"…"+(x.r?" ("+x.r.split(" ")[0]+"…)":""),""),practiceChips());return true}
  if(tok==="listen"){speakIn(x.t,g.lang);return true}
  let ok=false;
  if(tok!=="skip"){ok=scoreAns(t,x)>=.72}
  const full=x.t+(x.r?" ("+x.r+")":"");
  if(ok){g.s++;addXP(5);srsAdd(i);sfx("ding");mascot("happy")}else sfx("buzz");
  addMsg("bot",ok?fill(T("lCorrect"),{t:full}):fill(T("lAlmost"),{t:full}));speakIn(x.t,g.lang);
  g.i++;
  if(g.i>=g.items.length){S.game=null;if(g.s>=6){confetti();sfx("win")}setTimeout(()=>oracle(say(fill(T("lPracticeEnd"),{s:g.s,n:g.items.length}),""),defaultChips()),1200)}
  else setTimeout(practiceAsk,1200);
  return true;
}
/* AI tutor */
function startTutor(lv,topic){
  switchTab("chat");
  if(!(S.brainOn&&S.engine)){
    S.tutor=null;
    oracle(say(T("lNeedAI"),""),[{t:T("lLoadAI"),c:"loadAI"},...(hasOff(L.t)?[{t:T("lOffline"),c:"practice"}]:[])]);return;
  }
  S.tutor={lang:L.t,native:(replyLang()===L.t?"en":replyLang()),lv,topic};renderModes();
  S.history.push({role:"user",content:"Start today's lesson now."});
  const b=addMsg("bot","");S.busy=true;mascot("talk");
  aiReply(b).then(out=>{b.textContent=out;S.history.push({role:"assistant",content:out});speak(out);setChips()}).catch(()=>{b.textContent=T("bErr")}).finally(()=>{S.busy=false});
}
function tutorPrompt(){
  const t=S.tutor,tl=AI_NAME[t.lang]||lname(t.lang),nl=AI_NAME[t.native]||"English",c=curChar();
  const rom=ROMAN_NAME[t.lang]?" Always write "+ROMAN_NAME[t.lang]+" in brackets after every "+tl+" phrase.":"";
  const ratio={zero:"Explain almost everything in "+nl+".",A1:"Explain mostly in "+nl+".",A2:"Explain mostly in "+nl+", with short "+tl+" examples.",B1:"Use about half "+tl+" and half "+nl+".",B2:"Use mostly "+tl+"; use "+nl+" only for tricky points.",C1:"Speak in "+tl+" only, with rich vocabulary and idioms.",C2:"Speak in "+tl+" only, at natural native speed, with slang and cultural references."}[t.lv]||"";
  return "You are "+c.name+", a warm, funny and very patient language tutor. You are teaching "+tl+" to a learner whose native language is "+nl+". The learner's level is CEFR "+t.lv+" and today's topic is: "+t.topic+". "+ratio+rom+
   " Method: teach 3 to 5 useful phrases at a time, each with a translation in "+nl+", then a tiny example dialogue, then give the learner one small task (reply, translate, or answer a question). When the learner answers, correct mistakes kindly: show the corrected sentence and one short tip, then praise what was right. Keep every message short (under 120 words), add a little humor, and always end with a question or task for the learner. Never switch topics unless the learner asks.";
}

/* ================= overrides of main-script functions ================= */
{const _sys=sysPrompt;sysPrompt=function(){return S.tutor?tutorPrompt():_sys()};}
{const _sr=sparkReply;sparkReply=function(raw){if(PRED_RE.test(raw))return say(chatForecast(raw),"");return _sr(raw)};}
{const _gi=gameInput;gameInput=function(t,tok){if(S.game&&S.game.id==="practice")return practiceInput(t,tok);return _gi(t,tok)};}
{const _dc=defaultChips;defaultChips=function(){if(S.tutor)return [{t:T("lTutorEnd"),c:"tutorEnd"}];const d=_dc();if(S.mode==="fortune"||S.mode==="genie")d.unshift({t:CH("predict"),c:"predict"});return d};}
{const _cmd=command;command=function(c,label){
  if(c==="tutorEnd"){S.tutor=null;renderModes();oracle(say(T("lTutorOff"),""));return}
  if(c==="loadAI"){switchTab("me");$("#loadBrain").scrollIntoView({block:"center"});loadBrain();return}
  if(c==="practice"){startPractice();return}
  if(c==="predict"){addMsg("me",label);oracle(say(chatForecast(label+" "+(FL().times[fTime]||"")),""),[{t:CH("another"),c:"predict2"},{t:CH("fortune"),c:"fortune"}]);return}
  if(c==="predict2"){addMsg("me",label);const keys=Object.keys(FL().heads);oracle(say(forecastText(forecast(pick(keys),pick(["tomorrow","week","month","year","decade"]),String(Math.random()))),""),[{t:CH("another"),c:"predict2"}]);return}
  return _cmd(c,label)};}
{const _rm=renderModes;renderModes=function(){_rm();if(S.tutor)$("#modeLine").textContent=fill(T("lTutorOn"),{l:lname(S.tutor.lang),lv:S.tutor.lv,tp:S.tutor.topic})};}
{const _st=switchTab;switchTab=function(v){_st(v);if(v==="learn")renderLearn();if(v==="future")renderFuture()};}
{const _au=applyUI;applyUI=function(){_au();if(!$("#view-future").hidden)renderFuture();if(!$("#view-learn").hidden)renderLearn()};}
BADGES.push(["Future Seer","🔮",s=>(s.gaze||0)>=1],["Polyglot","🎓",s=>(s.lxp||0)>=100],["Word Collector","📚",s=>(s.lxp||0)>=500]);

/* ================= wire up + init ================= */
$("#fGo").onclick=gaze;$("#hGo").onclick=horoscope;$("#dGo").onclick=drawCards;$("#yGo").onclick=futureYou;$("#capSave").onclick=sealCap;
$("#lTarget").onchange=e=>{L.t=e.target.value;saveL();lesson=null;renderLearn();sfx("coin")};
applyCustom();renderLangSel();renderSpice();loadCustomForm();renderMascot();applyUI();greet();checkCaps();

