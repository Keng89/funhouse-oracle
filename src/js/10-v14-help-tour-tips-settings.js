
/* ================= v14: help center, guided tour, tips, settings menu ================= */
const UI18={
 en:{tMe:"Settings",hp_title:"Help & tips",hp_tour:"Take the tour",hp_tourD:"A 1-minute walk through everything, with your character.",hp_guides:"How-to guides",hp_settings:"Settings",hp_tip:"Tip of the day",hp_install:"Install as an app",hp_installD:"Add Funhouse Oracle to your home screen for one-tap access and offline use.",hp_more:"Another tip",hp_show:"Show me",
  tr_next:"Next",tr_back:"Back",tr_skip:"Skip tour",tr_done:"Let's go!",tr_of:"{i} of {n}",tSet:"Settings",
  set_title:"Settings",set_sub:"Tap a section to jump to it. Everything stays on this device.",set_ai:"AI brain",set_voice:"Voice",set_char:"Characters",set_avatar:"Avatar builder",set_lang:"Language & name",set_mem:"Memory",set_custom:"My own character",set_goal:"Goals & reminders",set_help:"Help & tour",
  hint_got:"Got it",hint_tour:"Show me around",
  hint_chat:"💬 This is your chat. Type or tap 🎙️ to talk. Use the shortcuts above to learn, talk, get coached or play.",hint_learn:"🎓 Learn anything here: pick a topic, take an English lesson, or practise another language.",hint_today:"☀️ Your daily helper: coach programs, mood, to-dos, focus timer and journal.",hint_games:"🎮 Play games with your character, read stories, see your fortune or make wishes.",hint_me:"⚙️ Settings: choose your AI brain, voice, characters, language and memory. Tap ❓ for help any time.",
  ai_noChrome:"Not available on this device"},
 vi:{hp_title:"Trợ giúp & mẹo",hp_tour:"Xem hướng dẫn",hp_tourD:"Đi một vòng 1 phút cùng nhân vật của bạn.",hp_guides:"Hướng dẫn",hp_settings:"Cài đặt",hp_tip:"Mẹo hôm nay",hp_install:"Cài như ứng dụng",hp_installD:"Thêm Funhouse Oracle vào màn hình chính để mở nhanh và dùng ngoại tuyến.",hp_more:"Mẹo khác",hp_show:"Chỉ cho tôi",
  tr_next:"Tiếp",tr_back:"Quay lại",tr_skip:"Bỏ qua",tr_done:"Bắt đầu thôi!",tr_of:"{i}/{n}",tSet:"Cài đặt",
  set_title:"Cài đặt",set_sub:"Chạm vào mục để chuyển tới. Mọi thứ lưu trên thiết bị này.",set_ai:"Bộ não AI",set_voice:"Giọng nói",set_char:"Nhân vật",set_avatar:"Tạo nhân vật",set_lang:"Ngôn ngữ & tên",set_mem:"Ký ức",set_custom:"Nhân vật của tôi",set_goal:"Mục tiêu & nhắc nhở",set_help:"Trợ giúp & hướng dẫn",
  hint_got:"Đã hiểu",hint_tour:"Hướng dẫn tôi",
  hint_chat:"💬 Đây là khung trò chuyện. Gõ hoặc chạm 🎙️ để nói. Dùng các phím tắt phía trên để học, tâm sự, được huấn luyện hoặc chơi.",hint_learn:"🎓 Học mọi thứ ở đây: chọn chủ đề, học tiếng Anh, hoặc luyện ngôn ngữ khác.",hint_today:"☀️ Trợ lý hằng ngày: chương trình huấn luyện, tâm trạng, việc cần làm, hẹn giờ tập trung và nhật ký.",hint_games:"🎮 Chơi cùng nhân vật, đọc truyện, xem vận may hoặc ước điều ước.",hint_me:"⚙️ Cài đặt: chọn bộ não AI, giọng nói, nhân vật, ngôn ngữ và ký ức. Chạm ❓ để được trợ giúp.",ai_noChrome:"Không có trên thiết bị này"}};
for(const k of ["en","vi"])Object.assign(PACKS[k].ui,UI18[k]);
/* ---------- fix: hide Chrome AI where it can't work ---------- */
function noChromeAI(){const o=$('#brainKind option[value="chrome"]');if(!o||o.disabled)return;o.disabled=true;o.textContent=TT("br_chrome")+" · "+TT("ai_noChrome");
  const n=$("#pvChrome");if(n)n.remove();if($("#brainKind").value==="chrome"){$("#brainKind").value="spark";BC.kind="spark";saveBC();$("#brainKind").dispatchEvent(new Event("change"))}}
if(!hasChromeAI||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent))noChromeAI();
else{try{LanguageModel.availability({expectedInputs:[{type:"text",languages:["en"]}],expectedOutputs:[{type:"text",languages:["en"]}]}).then(a=>{if(a==="unavailable")noChromeAI()}).catch(noChromeAI)}catch(e){noChromeAI()}}
/* ---------- tips ---------- */
const TIPS={en:["Tap 🎙️ and just talk. Tap 🗣️ for a hands-free conversation.","Pick 🤝 Companion: it remembers your life and checks in on you later.","Learn anything: Learn → 🧠 Any topic, then choose Beginner, Intermediate or Advanced.","Turn on a free AI brain with one tap: tap the Spark chip at the top.","Tap 👗 on the stage to change outfits, makeup, hair colour and jewellery.","Tap 🧍 on the stage to switch between 50+ characters, including anime girls.","Upload any portrait with “＋ Photo person” and it will talk!","🌙 Sleep mode in Stories reads slowly and softly for bedtime.","Say “tell me a story about a dragon” in chat to get a new story.","Your daily goal ring 🔥 fills as you learn, chat and play. Keep your streak!","Today → Coach has 7-day programs for confidence, sleep, stress, money and more.","The Speaking coach measures your pace and filler words like “um”.","In English lessons, turn on 🎧 Hands-free and answer out loud.","Tap 🗂️ Chats to reopen any saved conversation.","Settings → Voice: download the natural AI voice for very human-sounding English.","Make your own character in Settings → My own character.","Everything stays private on your device. You can delete memories any time.","Add the app to your home screen to open it like a real app, even offline.","Tap 🖼️ on the stage to change the background, or use your own photo.","Try Play → 🎶 Dance beat and tap along with your character."],
 vi:["Chạm 🎙️ và nói thôi. Chạm 🗣️ để trò chuyện rảnh tay.","Chọn 🤝 Bạn đồng hành: nhớ cuộc sống của bạn và hỏi thăm sau.","Học mọi thứ: Học → 🧠 Mọi chủ đề, rồi chọn cấp độ.","Bật AI miễn phí chỉ một chạm: chạm vào nút Spark phía trên.","Chạm 👗 trên sân khấu để đổi trang phục, trang điểm, màu tóc và trang sức.","Chạm 🧍 để đổi giữa hơn 50 nhân vật, có cả cô gái anime.","Tải ảnh chân dung bằng “＋ Người từ ảnh” và ảnh sẽ biết nói!","🌙 Chế độ ngủ trong Truyện đọc chậm và nhẹ nhàng.","Gõ “kể chuyện về con rồng” để có truyện mới.","Vòng mục tiêu 🔥 đầy dần khi bạn học, trò chuyện và chơi.","Hôm nay → Huấn luyện có chương trình 7 ngày cho tự tin, giấc ngủ, căng thẳng, tiền bạc.","Mọi thứ được giữ riêng tư trên thiết bị của bạn.","Thêm app vào màn hình chính để mở như ứng dụng thật, kể cả ngoại tuyến."]};
const tipList=()=>TIPS[uiLang()]||TIPS.en;
const tipOfDay=()=>{const l=tipList();return l[Math.floor(Date.now()/864e5)%l.length]};
/* ---------- install prompt ---------- */
let INSTALL=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();INSTALL=e});
function installApp(){if(INSTALL){INSTALL.prompt();INSTALL=null;return}
  const ios=/iPhone|iPad/.test(navigator.userAgent);toast(ios?"Safari: tap Share ⬆️ → “Add to Home Screen”.":"Browser menu ⋮ → “Add to Home screen” / “Install app”.")}
/* ---------- guides ---------- */
const GUIDES=[["🎙️","Talk with your voice","Tap 🎙️ next to the message box and speak. Tap 🗣️ for hands-free: your character speaks, then listens for your answer automatically. If you hear nothing, tap 🔊 on the stage and check your phone's volume.",()=>{switchTab("chat");$("#talkBtn").scrollIntoView({block:"center"})}],
 ["🧠","Turn on a smarter free AI","Spark (the default) works offline instantly. For deep conversations and teaching any topic, tap the Spark chip at the top. On phones the fastest is a free Groq key; on computers you can download a free AI that runs offline.",()=>aiSetup()],
 ["🧍","Change your character","Tap 🧍 on the stage. Use 👥 to filter women, men, kids or seniors, 🌸 for anime girls, or ＋ Photo to make any portrait talk. Tap 3D to switch between realistic 3D and cartoon.",()=>{switchTab("chat");sheetMode="chars";renderSheet()}],
 ["👗","Outfits, makeup and jewellery","Tap 👗 on the stage (3D people). Try a Look like Garden party or Glam night, or choose outfit, colour, pattern, makeup, hair colour, necklace, earrings, rings, tiara, hat and glasses.",()=>{switchTab("chat");wardOpen()}],
 ["🎓","Learn anything","Learn → 🧠 Any topic: type what you want to learn or pick a topic, choose your level and start a voice class. Learn → 🇬🇧 English: placement test, lessons from beginner to fluent, flashcard review and an AI tutor.",()=>{switchTab("learn");ACD.mode="topics";saveACD();renderLearn()}],
 ["🤝","Your companion and memory","Choose 🤝 Companion. Tell it about your life, work and plans. It remembers, asks how things went and checks in on you. See or delete memories in Settings → Memory.",()=>{S.mode="friend";store.set("mode","friend");renderModes();switchTab("chat")}],
 ["🧭","Coaching and daily helper","Today has coach programs, Wheel of Life, goals, a speaking coach, mood check-in, to-dos with reminders, a focus timer and a journal.",()=>switchTab("today")],
 ["📚","Stories for kids","Play → 📚 Stories: 27 stories read aloud, sleep mode for bedtime, make your own story, or ask for any story.",()=>switchTab("stories")],
 ["🎮","Games","Play → Games: play Copy my moves, Rock Paper Scissors, Guess my feeling and Dance beat with your character, plus trivia, riddles, word games and more.",()=>switchTab("games")],
 ["🗂️","Saved chats","Every conversation saves automatically. Tap 🗂️ Chats to search, reopen, rename or delete them. Tap ＋ New chat to start fresh.",()=>{switchTab("chat");openChats()}],
 ["🔥","Streaks, goals and reminders","The ring at the top fills as you use the app. Tap it to set your daily goal, see quests and badges, or add a daily reminder to your calendar.",()=>openHB()],
 ["🔒","Privacy","Everything is saved only in this browser on this device: chats, memories, progress. Nothing is uploaded unless you connect your own cloud AI key.",null]];
/* ---------- help center ---------- */
function openHelp(){const {b,close}=modal("❓ "+TT("hp_title"));
  b.append(h("button",{type:"button",class:"ai-opt hp-hero",onclick:()=>{close();startTour()}},h("b",null,"🧭 "+TT("hp_tour")),h("small",null,TT("hp_tourD"))));
  const tip=h("p",{class:"hp-tip"},"💡 "+tipOfDay());b.append(h("span",{class:"label hp-lab"},TT("hp_tip")),tip,h("div",null,h("button",{type:"button",class:"btn ghost small",onclick:()=>{tip.textContent="💡 "+pick(tipList())}},TT("hp_more"))));
  b.append(h("span",{class:"label hp-lab"},"📖 "+TT("hp_guides")));
  GUIDES.forEach(([em,t,d,fn])=>{const det=h("details",{class:"hp-guide"},h("summary",null,em+" "+t),h("p",null,d));if(fn)det.append(h("button",{type:"button",class:"btn small",onclick:()=>{close();fn()}},TT("hp_show")+" ▶"));b.append(det)});
  b.append(h("span",{class:"label hp-lab"},"⚙️ "+TT("hp_settings")),h("button",{type:"button",class:"btn ghost",onclick:()=>{close();switchTab("me")}},"⚙️ "+TT("set_title")+" ▶"));
  b.append(h("span",{class:"label hp-lab"},"📲 "+TT("hp_install")),h("p",{class:"note"},TT("hp_installD")),h("button",{type:"button",class:"btn ghost",onclick:installApp},"📲 "+TT("hp_install")))}
{const top=document.querySelector(".chips-top");const hb=h("button",{type:"button",class:"hchip help-chip",id:"helpChip","aria-label":TT("hp_title"),onclick:openHelp},"❓ "+(uiLang()==="vi"?"Trợ giúp":"Help"));top.append(hb);}
/* ---------- guided tour ---------- */
const TOUR=()=>{const vi=uiLang()==="vi";const nm=((E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar())||{}).name||"Oracle";return [
 [null,vi?"Chào bạn! Mình là "+nm+".":"Hi! I'm "+nm+".",vi?"Để mình dẫn bạn đi một vòng nhé, chỉ mất một phút.":"Let me show you around. It only takes a minute.","chat"],
 ["#stageBox",vi?"Đây là mình!":"This is me!",vi?"Mình nói chuyện, cử chỉ và phản ứng. Chạm vào mình để xem mình phản ứng.":"I talk, move and react. Tap me and see what happens!","chat"],
 [".stage-tools",vi?"Công cụ sân khấu":"Stage tools",vi?"🔊 giọng nói · 👗 tủ đồ · 🧍 đổi nhân vật · 🖼️ phông nền · 👋 động tác · 3D bật/tắt.":"🔊 voice · 👗 wardrobe · 🧍 change character · 🖼️ backgrounds · 👋 moves · 3D on/off.","chat"],
 ["#modes",vi?"Chọn tính cách":"Pick my personality",vi?"Bạn đồng hành nhớ về bạn, Huấn luyện viên giúp bạn tiến bộ, Giáo viên dạy mọi thứ, và nhiều nữa.":"Companion remembers you, Life Coach helps you grow, Teacher teaches anything, and more.","chat"],
 ["#quickStart",vi?"Phím tắt":"Shortcuts",vi?"Một chạm để học, tâm sự, được huấn luyện, nghe truyện hoặc chơi.":"One tap to learn, talk, get coached, hear a story or play.","chat"],
 [".composer",vi?"Nói hoặc gõ":"Talk or type",vi?"Gõ ở đây, hoặc chạm 🎙️ để nói. 🗣️ là chế độ rảnh tay.":"Type here, or tap 🎙️ to speak. 🗣️ starts a hands-free conversation.","chat"],
 ["#brainChip",vi?"Bộ não AI":"AI brain",vi?"Spark chạy ngoại tuyến. Chạm vào đây để bật AI thông minh hơn miễn phí.":"Spark works offline. Tap here to switch on a smarter free AI.","chat"],
 ["#streakChip",vi?"Chuỗi ngày & mục tiêu":"Streak & daily goal",vi?"Vòng tròn đầy dần khi bạn dùng app. Chạm để xem nhiệm vụ và huy hiệu.":"The ring fills as you use the app. Tap it for quests, badges and reminders.","chat"],
 ['.tabs [data-v="learn"]',vi?"Học":"Learn",vi?"Học mọi chủ đề, tiếng Anh từ cơ bản đến lưu loát, và các ngôn ngữ khác.":"Learn any topic, English from zero to fluent, and other languages.","chat"],
 ['.tabs [data-v="today"]',vi?"Hôm nay":"Today",vi?"Huấn luyện, tâm trạng, việc cần làm, hẹn giờ tập trung và nhật ký.":"Coaching, mood, to-dos, focus timer and journal.","chat"],
 ['.tabs [data-v="play"]',vi?"Giải trí":"Play",vi?"Trò chơi cùng nhân vật, truyện cho bé, vận may và điều ước.":"Games with your character, kids' stories, fortunes and wishes.","chat"],
 ['.tabs [data-v="me"]',vi?"Cài đặt":"Settings",vi?"Bộ não AI, giọng nói, nhân vật, ngôn ngữ và ký ức.":"AI brain, voice, characters, language and memory.","chat"],
 ["#helpChip",vi?"Cần giúp?":"Need help?",vi?"Chạm ❓ bất cứ lúc nào để xem hướng dẫn, mẹo và chuyến tham quan này.":"Tap ❓ any time for guides, tips and this tour again.","chat"]]};
let TR=null;
function startTour(){endTour();const steps=TOUR().filter(s=>!s[0]||document.querySelector(s[0]));TR={i:0,steps};switchTab("chat");$("#stage").scrollTop=0;
  const ov=h("div",{class:"tour",id:"tourOv"},h("div",{class:"tour-spot",id:"tourSpot"}),h("div",{class:"tour-tip",id:"tourTip",role:"dialog","aria-live":"polite"}));document.body.append(ov);drawTour()}
function endTour(){const o=$("#tourOv");if(o)o.remove();TR=null;store.set("toured",true);window.removeEventListener("resize",drawTour)}
function drawTour(){if(!TR)return;const [sel,title,text]=TR.steps[TR.i];const spot=$("#tourSpot"),tip=$("#tourTip");const el=sel&&document.querySelector(sel);
  if(el)el.scrollIntoView({block:"nearest"});
  setTimeout(()=>{if(!TR)return;const vw=innerWidth,vh=innerHeight;let r=el?el.getBoundingClientRect():null;
    if(r){const pad=6;spot.style.cssText="left:"+(r.left-pad)+"px;top:"+(r.top-pad)+"px;width:"+(r.width+pad*2)+"px;height:"+(r.height+pad*2)+"px;opacity:1"}else spot.style.cssText="left:50%;top:40%;width:0;height:0;opacity:1";
    tip.innerHTML="";const n=TR.steps.length;
    tip.append(h("div",{class:"tour-prog"},fill(TT("tr_of"),{i:TR.i+1,n})),h("b",null,title),h("p",null,text),
      h("div",{class:"tour-btns"},h("button",{type:"button",class:"btn ghost small",onclick:endTour},TT("tr_skip")),h("span",{style:"flex:1"}),
        TR.i?h("button",{type:"button",class:"btn ghost small",onclick:()=>{TR.i--;drawTour()}},TT("tr_back")):"",
        h("button",{type:"button",class:"btn small",onclick:()=>{if(TR.i>=n-1){endTour();confetti();HB.add(5,"tour")}else{TR.i++;drawTour()}}},TR.i>=n-1?TT("tr_done"):TT("tr_next")+" ▶")));
    const tw=Math.min(340,vw-32);tip.style.width=tw+"px";const th=tip.offsetHeight||160;
    let top,left;if(!r){top=vh/2-th/2;left=(vw-tw)/2}else{left=Math.max(16,Math.min(vw-tw-16,r.left+r.width/2-tw/2));top=r.bottom+14+th<vh-8?r.bottom+14:Math.max(8,r.top-th-14)}
    tip.style.left=left+"px";tip.style.top=top+"px";tip.classList.remove("in");void tip.offsetWidth;tip.classList.add("in")},el?260:30);
  if(S.voice)speak(title+". "+text,true)}
window.addEventListener("resize",()=>{if(TR)drawTour()});
/* ---------- settings menu on the Me tab ---------- */
{const l=document.querySelector('.tabs [data-v="me"] [data-i]');if(l)l.textContent=TT("tMe");}
{const V=$("#view-me");const panelOf=sel=>{const el=$(sel);return el?el.closest(".panel"):null};
 const items=[["🧠","set_ai",()=>panelOf("#modelSel")],["🔊","set_voice",()=>$("#vxPanel")],["🧍","set_char",()=>$("#charPanel")],["🎨","set_avatar",()=>$("#builderPanel")],["🌐","set_lang",()=>panelOf("#langSel")],["💭","set_mem",()=>panelOf("#memList")],["✍️","set_custom",()=>$("#customPanel")],["🔥","set_goal",null],["❓","set_help",null]];
 const box=h("div",{class:"set-index",id:"setIndex"},h("h2",null,"⚙️ "+TT("set_title")),h("p",{class:"sub"},TT("set_sub")));
 const grid=h("div",{class:"ac-tiles set-grid"});items.forEach(([em,k,get])=>grid.append(h("button",{type:"button",class:"ac-tile",onclick:()=>{if(k==="set_goal")return openHB();if(k==="set_help")return openHelp();const el=get&&get();if(el){el.scrollIntoView({behavior:"smooth",block:"start"});el.classList.remove("flash");void el.offsetWidth;el.classList.add("flash")}}},h("span",{class:"em"},em),h("b",null,TT(k)))));
 box.append(grid);const h2=V.querySelector("h2");if(h2){h2.hidden=true;const sub=h2.nextElementSibling;if(sub&&sub.classList.contains("sub"))sub.hidden=true}V.insertBefore(box,V.firstChild);
 const top=h("button",{type:"button",class:"set-top",onclick:()=>{$("#stage").scrollTo({top:0,behavior:"smooth"})},"aria-label":"Top"},"⬆️ "+TT("set_title"));V.append(top);}
/* ---------- first-visit hints for each tab ---------- */
const HINTS=store.get("hints",{});
function tabHint(v){if(TR)return;const key={chat:"chat",learn:"learn",today:"today",games:"games",stories:"games",future:"games",wish:"games",me:null}[v];if(!key||HINTS[key])return;const view=$("#view-"+(v==="stories"?"stories":v));if(!view||view.querySelector(".tab-hint"))return;
  const bar=h("div",{class:"tab-hint"},h("p",null,TT("hint_"+key)),h("div",{class:"btn-row"},h("button",{type:"button",class:"btn small",onclick:()=>{HINTS[key]=1;store.set("hints",HINTS);bar.remove()}},TT("hint_got")),
    key==="chat"?h("button",{type:"button",class:"btn ghost small",onclick:()=>{HINTS[key]=1;store.set("hints",HINTS);bar.remove();startTour()}},"🧭 "+TT("hint_tour")):""));
  const seg=view.querySelector(".play-seg");if(seg)seg.after(bar);else if(v==="chat"){const q=$("#quickStart");q?q.after(bar):view.prepend(bar)}else view.prepend(bar)}
{const _st5=switchTab;switchTab=function(v){_st5(v);setTimeout(()=>tabHint(v),60)};}
/* ---------- tip of the day on Today ---------- */
{const _rt2=renderToday;renderToday=function(){_rt2();const V=$("#view-today");const hero=V.querySelector(".ac-hero");const t=h("div",{class:"hp-tipcard"},h("span",null,"💡"),h("p",null,tipOfDay()),h("button",{type:"button",class:"btn ghost small",onclick:openHelp},"❓"));if(hero)hero.after(t);else V.prepend(t)};}
/* ---------- start the tour for newcomers (after onboarding closes) ---------- */
{let tries=0;const go=()=>{if(++tries>200)return;if($("#onbModal")||!store.get("onb2",false)&&tries<4){setTimeout(go,700);return}
  if(!store.get("toured",false))setTimeout(startTour,600);else tabHint("chat")};setTimeout(go,2200);}

