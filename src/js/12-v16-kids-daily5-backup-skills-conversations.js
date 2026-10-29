
/* ===== Offline conversation practice: branching scenarios (no AI needed) =====
 node: b = what the partner says ({name} etc. fill from answers), h = example answers the learner can use,
 n = [[regex, next node]], any = next node for any reasonable answer, get = [var, regex with one capture], end = true */
const CONVOS=[
{id:"meet",em:"👋",t:"Meeting someone new",lv:"A0",who:"Sam",g:"m",nodes:{
 start:{b:"Hi there! I'm Sam. What's your name?",h:["Hi Sam, I'm Anna.","My name is Tom.","Nice to meet you, I'm Linh."],get:["name","(?:i'm|i am|name is|call me|it's)\\s+([a-z]+)"],any:"from"},
 from:{b:"Nice to meet you, {name}! Where are you from?",h:["I'm from Vietnam.","I come from Brazil.","I'm from Canada, and you?"],get:["place","from\\s+([a-z ]+)"],any:"job"},
 job:{b:"Oh, cool! What do you do? Are you a student, or do you work?",h:["I'm a student.","I work in a bank.","I'm a nurse."],n:[["student|school|study|college|university","study"]],any:"work"},
 study:{b:"Great! What do you study?",h:["I study English.","I study business.","I'm in high school."],any:"hobby"},
 work:{b:"That sounds interesting. Do you like your job?",h:["Yes, I love it.","It's OK.","Not really, it's very busy."],any:"hobby"},
 hobby:{b:"What do you like to do in your free time?",h:["I like reading and music.","I play football.","I love cooking."],any:"bye"},
 bye:{b:"That's great, {name}! It was really nice talking to you. See you soon!",h:["Nice to meet you too. Bye!","See you!"],any:"end"},
 end:{b:"Bye, {name}! 👋",end:true}}},
{id:"cafe",em:"☕",t:"Ordering at a café",lv:"A1",who:"Barista",g:"f",nodes:{
 start:{b:"Hi! Welcome to Sunny Café. What can I get for you?",h:["Can I have a latte, please?","I'd like a hot chocolate.","A coffee, please."],n:[["latte|coffee|cappuccino|espresso|americano|mocha","size"],["tea|chocolate|juice|water|smoothie","size"]],re:"Sorry? We have coffee, tea, hot chocolate and juice. What would you like?"},
 size:{b:"Sure! What size? Small, medium or large?",h:["Medium, please.","A large one, please.","Small, thanks."],n:[["small|medium|large|big|regular","here"]],re:"We have small, medium or large. Which one?"},
 here:{b:"Is that for here or to go?",h:["For here, please.","To go, please."],n:[["here|stay|sit","food"],["go|take|away","food"]],re:"Sorry, for here or to go?"},
 food:{b:"Would you like something to eat? Our muffins are fresh today.",h:["Yes, a blueberry muffin, please.","No, thank you.","What do you have?"],n:[["what do you have|what kind|menu","menu"],["no|nothing|i'm fine|that's all|not","pay"],["yes|muffin|cake|cookie|croissant|sandwich|please","pay"]],re:"Would you like a muffin or a cookie? Or nothing to eat?"},
 menu:{b:"We have blueberry muffins, chocolate cookies and cheese croissants.",h:["A croissant, please.","A cookie, please.","No thanks."],any:"pay"},
 pay:{b:"Perfect. That's seven dollars fifty. Cash or card?",h:["Card, please.","Here you are. Cash.","Can I pay by phone?"],n:[["card|cash|phone|apple|google|here","thanks"]],re:"Cash or card?"},
 thanks:{b:"Thank you! Your order will be ready in two minutes. Have a nice day!",h:["Thank you, you too!","Thanks!"],any:"end"},
 end:{b:"Enjoy! ☕",end:true}}},
{id:"shop",em:"🛍️",t:"Buying clothes",lv:"A1",who:"Shop assistant",g:"f",nodes:{
 start:{b:"Hello! Can I help you?",h:["Yes, I'm looking for a jacket.","I'm just looking, thanks.","Do you have this in blue?"],n:[["just looking|only looking|no thanks","look"],["blue|red|black|white|green|colou?r","color"]],any:"what"},
 look:{b:"No problem! Let me know if you need anything. We have a sale on jackets today.",h:["Oh, how much are the jackets?","Thanks, I will."],n:[["how much|price|cost","price"]],any:"end2"},
 what:{b:"Of course. What size are you?",h:["I'm a medium.","Small, I think.","Large, please."],n:[["small|medium|large|xs|xl|\\bs\\b|\\bm\\b|\\bl\\b|size|\\d+","try"]],re:"Are you small, medium or large?"},
 color:{b:"Yes, we have it in blue and black. What size are you?",h:["Medium, please.","I'm a small."],any:"try"},
 try:{b:"Here you are. Would you like to try it on? The fitting room is over there.",h:["Yes, please.","Can I try it on?","No, it's OK."],any:"fit"},
 fit:{b:"How is it? Does it fit?",h:["It fits perfectly!","It's a bit too big.","It's too small."],n:[["big|small|tight|long|short|doesn't|not","other"]],any:"price"},
 other:{b:"No problem, let me get you another size. ... Here you go. Better?",h:["Yes, this one is perfect.","Much better, thanks."],any:"price"},
 price:{b:"Great! It's forty dollars, but today it's twenty percent off.",h:["Great, I'll take it.","That's a bit expensive. I'll think about it."],n:[["think|expensive|maybe|later|no","end2"]],any:"buy"},
 buy:{b:"Wonderful! You can pay at the counter. Would you like a bag?",h:["Yes, please.","No, thanks."],any:"end"},
 end2:{b:"No problem. Thanks for coming in!",h:["Thank you, bye!"],any:"end"},
 end:{b:"Have a lovely day! 🛍️",end:true}}},
{id:"dir",em:"🗺️",t:"Asking for directions",lv:"A2",who:"Local",g:"m",nodes:{
 start:{b:"You look a little lost. Can I help you?",h:["Yes, please. Where is the train station?","Excuse me, how do I get to the museum?","Is there a pharmacy near here?"],n:[["station|train","station"],["museum|gallery","museum"],["pharmacy|drugstore|chemist","pharm"]],re:"Sure, where do you want to go? The station, the museum or a pharmacy?"},
 station:{b:"The station? Go straight for two blocks, then turn left at the traffic lights. It's on your right.",h:["Is it far?","Can I walk there?","Thank you so much!"],n:[["far|walk|long|minutes","far"],["thank","bye"]],any:"far"},
 museum:{b:"The museum is next to the park. Take the number 5 bus, or walk about fifteen minutes that way.",h:["Where is the bus stop?","I'll walk. Thanks!"],n:[["bus|stop","bus"],["walk|thank","bye"]],any:"bye"},
 pharm:{b:"Yes, there's one just around the corner, opposite the bank.",h:["Is it open now?","Thank you!"],n:[["open|close|time","open"]],any:"bye"},
 far:{b:"Not really. It's about ten minutes on foot.",h:["Great, thank you!","Thanks for your help."],any:"bye"},
 bus:{b:"The bus stop is right there, in front of the bakery.",h:["Thanks a lot!"],any:"bye"},
 open:{b:"I think it's open until nine tonight.",h:["Perfect, thank you!"],any:"bye"},
 bye:{b:"You're welcome! Enjoy your day.",end:true}}},
{id:"hotel",em:"🏨",t:"Hotel check-in",lv:"A2",who:"Receptionist",g:"f",nodes:{
 start:{b:"Good evening, welcome to the Grand Hotel. Do you have a reservation?",h:["Yes, I have a reservation under Nguyen.","No, do you have any rooms available?"],n:[["^no|don't|do you have|available|any rooms","walkin"]],get:["name","(?:under|name is|for)\\s+([a-z]+)"],any:"pass"},
 walkin:{b:"Let me check... Yes, we have a double room for one hundred and twenty dollars a night. How many nights?",h:["Two nights, please.","Just one night."],any:"pass"},
 pass:{b:"Thank you. Can I see your passport or ID, please?",h:["Here you are.","Sure, here it is."],any:"break"},
 break:{b:"Perfect. Your room is on the fifth floor. Breakfast is from seven to ten. Do you have any questions?",h:["What time is check-out?","Is there Wi-Fi?","Where is the elevator?","No, thank you."],n:[["check.?out|leave","co"],["wi.?fi|internet|password","wifi"],["elevator|lift|stairs","lift"],["^no|that's all|nothing","end"]],any:"end"},
 co:{b:"Check-out is at eleven a.m. Anything else?",h:["Is there Wi-Fi?","No, that's all. Thanks!"],n:[["wi.?fi|internet","wifi"]],any:"end"},
 wifi:{b:"Yes, free Wi-Fi. The password is on your key card. Anything else?",h:["What time is check-out?","No, thank you."],n:[["check.?out","co"]],any:"end"},
 lift:{b:"The elevator is just behind you, on the left. Anything else?",h:["No, thank you."],any:"end"},
 end:{b:"Enjoy your stay! 🏨",end:true}}},
{id:"doc",em:"🩺",t:"At the doctor's",lv:"A2",who:"Doctor",g:"m",nodes:{
 start:{b:"Hello, come in and sit down. What seems to be the problem?",h:["I have a headache.","I have a sore throat and a cough.","My stomach hurts."],n:[["head","head"],["throat|cough|cold|flu|fever|sneez","cold"],["stomach|tummy|belly|sick|vomit","stom"]],any:"long"},
 head:{b:"I see. How long have you had the headache?",h:["For two days.","Since yesterday."],any:"head2"},
 head2:{b:"Do you sleep well, and do you drink enough water?",h:["Not really, I work late.","I don't drink much water."],any:"adv1"},
 adv1:{b:"OK. You should drink more water, rest, and take a break from screens. Take this medicine twice a day.",h:["Thank you, doctor.","How many days?"],n:[["how many|how long|days","days"]],any:"end"},
 cold:{b:"Do you have a fever?",h:["Yes, a little.","No, I don't."],any:"adv2"},
 adv2:{b:"It sounds like a cold. Drink warm drinks, get plenty of rest, and come back if it gets worse.",h:["Thank you very much.","Should I stay home?"],n:[["stay|home|work|school","home"]],any:"end"},
 home:{b:"Yes, stay home for a day or two so you don't make others sick.",h:["OK, thank you."],any:"end"},
 stom:{b:"When did it start, and what did you eat?",h:["Last night, after dinner.","This morning. I ate seafood."],any:"adv3"},
 adv3:{b:"Eat simple food like rice and bananas, drink water, and avoid coffee for a few days.",h:["Thank you, doctor."],any:"end"},
 long:{b:"I see. How long have you felt like this?",h:["About three days.","Since last week."],any:"adv2"},
 days:{b:"For five days. Come back if you don't feel better.",h:["OK, thank you."],any:"end"},
 end:{b:"Take care and get well soon! 🩺",end:true}}},
{id:"plans",em:"📅",t:"Making weekend plans",lv:"B1",who:"Alex",g:"m",nodes:{
 start:{b:"Hey! Are you free this weekend?",h:["Yes, I'm free on Saturday.","I'm busy on Saturday, but Sunday is fine.","Why, what's up?"],n:[["busy|can't|not free|working","sun"],["what's up|why","idea"]],any:"idea"},
 sun:{b:"No worries, Sunday works for me too.",h:["Great! What do you want to do?"],any:"idea"},
 idea:{b:"I was thinking we could see a movie or go hiking. What do you prefer?",h:["I'd rather go hiking.","A movie sounds fun.","How about both?"],n:[["hik|walk|outside|nature|mountain","hike"],["movie|film|cinema","movie"],["both","both"]],re:"Movie or hiking? Which sounds better to you?"},
 hike:{b:"Nice! The weather is supposed to be sunny. What time should we meet?",h:["How about nine in the morning?","Let's meet at ten."],any:"where"},
 movie:{b:"Cool! There's a new comedy at seven. Do you want to grab dinner before?",h:["Sure, that sounds great.","I'd rather eat after."],any:"where"},
 both:{b:"Ha, ambitious! Hiking in the morning, movie at night. What time should we meet?",h:["Let's meet at eight.","How about nine?"],any:"where"},
 where:{b:"Perfect. Should I pick you up, or should we meet there?",h:["Could you pick me up?","Let's meet there."],any:"confirm"},
 confirm:{b:"Sounds like a plan! I'll text you the details. Can't wait!",h:["Me too! See you then.","Great, see you!"],any:"end"},
 end:{b:"See you this weekend! 😄",end:true}}},
{id:"job",em:"💼",t:"Job interview",lv:"B1",who:"Interviewer",g:"f",nodes:{
 start:{b:"Thanks for coming in today. Could you tell me a little about yourself?",h:["Sure. I'm a marketing graduate with two years of experience.","I've worked in customer service for three years."],any:"why"},
 why:{b:"Why are you interested in this position?",h:["I'm passionate about helping customers.","I want to grow my career in a great company."],any:"str"},
 str:{b:"What would you say is your greatest strength?",h:["I'm a good communicator.","I'm very organized and reliable."],any:"weak"},
 weak:{b:"And what's one area you'd like to improve?",h:["Sometimes I take on too much, so I'm learning to delegate.","I'm working on my public speaking."],any:"hard"},
 hard:{b:"Can you tell me about a challenge you faced at work and how you handled it?",h:["Once, a customer was very upset. I listened, apologized and solved the problem.","We had a tight deadline, so I organized the team and we finished on time."],any:"q"},
 q:{b:"Great answer. Do you have any questions for me?",h:["What does a typical day look like?","When can I expect to hear back?","No, I think you covered everything."],n:[["typical|day|team","day"],["hear|when|next","next"]],any:"end"},
 day:{b:"You'd work with a team of five, mostly with clients. It's busy but fun.",h:["That sounds great. Thank you!"],any:"end"},
 next:{b:"We'll get back to you by the end of next week.",h:["Thank you for your time."],any:"end"},
 end:{b:"Thank you for coming. It was a pleasure to meet you! 💼",end:true}}}];

/* ================= v16: backup, Daily 5, welcome back, skills, can-do, weekly report, beginner support,
   offline conversations, kids profiles with parent PIN, editable memories, text size ================= */
const UI20={
 en:{bk_title:"Back up & restore",bk_sub:"Your chats, memories, lessons and progress live only on this device. Save a backup file so you never lose them, for example when you change phones.",bk_save:"💾 Save backup file",bk_share:"📤 Send backup to myself",bk_load:"📂 Restore from a file",bk_last:"Last backup: {d}",bk_never:"never",bk_done:"Backup saved ✓",bk_ok:"Restored! Reloading…",bk_bad:"That file isn't a Funhouse Oracle backup.",bk_confirm:"Restore this backup? It replaces everything on this device.",bk_note:"Photos and anime characters you uploaded are not included. Keep the original files.",bk_remind:"💾 It's been a while. Save a backup so you never lose your progress.",
  d5_title:"Daily 5",d5_sub:"5 minutes: review, new words, grammar, listening and speaking.",d5_go:"⚡ Start Daily 5",d5_done:"✅ Done today ({p}%)",d5_again:"Do it again",
  wb_title:"Welcome back{n}! 💛",wb_sub:"Your progress is safe. Here's a quick 3-minute catch-up to warm up.",wb_go:"⚡ Start catch-up",wb_chat:"Just chat",wb_days:"It's been {d} days.",
  sk_title:"My skills",sk_s:"Speaking",sk_l:"Listening",sk_r:"Reading & grammar",sk_w:"Writing",sk_none:"Not tested yet",sk_ans:"{n} answers",sk_note:"Your level in each skill comes from your last 40 answers.",
  cd_title:"What I can do",cd_sub:"{n} of {t} can-do goals",cd_new:"🎉 New skill unlocked: I can {c}!",
  wk_title:"This week",wk_ans:"answers",wk_acc:"correct",wk_les:"lessons",wk_words:"new words",wk_spk:"speaking",wk_min:"minutes",wk_days:"days active",wk_share:"📤 Share my week",wk_vs:"vs last week",wk_card:"My English week",
  bg_label:"🐣 Beginner support",bg_auto:"Auto",bg_on:"On",bg_off:"Off",bg_d:"Slower audio, easier speaking scores, more time to answer, and hints in your language.",bg_show:"👀 Show words",
  cv_title:"Conversation practice",cv_sub:"Real conversations that work offline. Speak, type, or tap an example.",cv_hint:"Ideas you can say:",cv_say:"🎙️ Speak",cv_type:"Type your answer…",cv_send:"Send",cv_again:"Sorry, I didn't catch that.",cv_nat:"💡 A natural way to say it:",cv_done:"Conversation complete!",cv_turns:"You spoke {n} times · {u} in your own words",cv_restart:"🔁 Try again",cv_more:"More conversations",
  x_again:"Try again",
  kd_title:"Kids profiles",kd_sub:"Give each child their own safe space: stories, character games and English for kids. Only a grown-up with the PIN can leave kids mode.",kd_pin:"Create a parent PIN (4 digits)",kd_pin2:"Type it again",kd_pinBad:"The PINs don't match. Use 4 digits.",kd_add:"➕ Add a child",kd_name:"Child's name",kd_age:"Age",kd_lim:"Daily time limit",kd_nolim:"No limit",kd_min:"{n} min",kd_save:"Save",kd_start:"▶ Start kids mode",kd_del:"Delete",kd_today:"Today: {m} min · {s} stories · {l} lessons",kd_changePin:"Change PIN",kd_enter:"Enter parent PIN",kd_wrong:"Wrong PIN",kd_forgot:"Forgot PIN?",kd_gate:"Grown-ups only: what is {a} × {b}?",kd_exit:"🔒 Grown-ups",kd_hi:"Hi {n}!",kd_left:"{n} min left",kd_stories:"Stories",kd_bed:"Bedtime story",kd_make:"Make a story",kd_talk:"Talk with me",kd_en:"Learn English",kd_d5:"Daily 5",kd_home:"🏠 Home",kd_up:"Time's up for today, {n}!",kd_upSub:"You did great! Come back tomorrow for more stories and games.",kd_more:"🔒 Grown-up: 15 more minutes",kd_leave:"🔒 Grown-up: exit kids mode",kd_none:"No children added yet.",kd_privacy:"Kids mode works offline. Chats in kids mode aren't saved and nothing is remembered about your child.",
  mm_add:"Add something to remember…",mm_pin:"Pin (never forget)",mm_edit:"Edit",mm_pinned:"📌 Pinned",
  tx_title:"Text size",tx_d:"Make everything bigger and easier to read.",set_backup:"Backup",set_kids:"Kids profiles",set_text:"Text size"},
 vi:{bk_title:"Sao lưu & khôi phục",bk_sub:"Trò chuyện, ký ức, bài học và tiến độ chỉ lưu trên thiết bị này. Hãy lưu tệp sao lưu để không bao giờ mất, ví dụ khi đổi điện thoại.",bk_save:"💾 Lưu tệp sao lưu",bk_share:"📤 Gửi bản sao lưu cho tôi",bk_load:"📂 Khôi phục từ tệp",bk_last:"Sao lưu gần nhất: {d}",bk_never:"chưa có",bk_done:"Đã lưu bản sao lưu ✓",bk_ok:"Đã khôi phục! Đang tải lại…",bk_bad:"Tệp này không phải bản sao lưu của Funhouse Oracle.",bk_confirm:"Khôi phục bản sao lưu này? Mọi dữ liệu trên thiết bị sẽ được thay thế.",bk_note:"Ảnh và nhân vật anime bạn tải lên không nằm trong bản sao lưu.",bk_remind:"💾 Đã lâu rồi. Hãy sao lưu để không mất tiến độ.",
  d5_title:"5 phút mỗi ngày",d5_sub:"5 phút: ôn tập, từ mới, ngữ pháp, nghe và nói.",d5_go:"⚡ Bắt đầu",d5_done:"✅ Đã xong hôm nay ({p}%)",d5_again:"Làm lại",
  wb_title:"Chào mừng trở lại{n}! 💛",wb_sub:"Tiến độ của bạn vẫn còn nguyên. Khởi động nhẹ 3 phút nhé.",wb_go:"⚡ Bắt đầu",wb_chat:"Chỉ trò chuyện",wb_days:"Đã {d} ngày rồi.",
  sk_title:"Kỹ năng của tôi",sk_s:"Nói",sk_l:"Nghe",sk_r:"Đọc & ngữ pháp",sk_w:"Viết",sk_none:"Chưa kiểm tra",sk_ans:"{n} câu",sk_note:"Trình độ mỗi kỹ năng dựa trên 40 câu trả lời gần nhất.",
  cd_title:"Tôi có thể làm",cd_sub:"{n}/{t} mục tiêu",cd_new:"🎉 Kỹ năng mới: Tôi có thể {c}!",
  wk_title:"Tuần này",wk_ans:"câu trả lời",wk_acc:"đúng",wk_les:"bài học",wk_words:"từ mới",wk_spk:"lần nói",wk_min:"phút",wk_days:"ngày học",wk_share:"📤 Chia sẻ tuần của tôi",wk_vs:"so với tuần trước",wk_card:"Tuần học tiếng Anh",
  bg_label:"🐣 Hỗ trợ người mới",bg_auto:"Tự động",bg_on:"Bật",bg_off:"Tắt",bg_d:"Âm thanh chậm hơn, chấm điểm nói dễ hơn, nhiều thời gian trả lời hơn và gợi ý bằng ngôn ngữ của bạn.",bg_show:"👀 Hiện chữ",
  cv_title:"Luyện hội thoại",cv_sub:"Hội thoại thật, chạy ngoại tuyến. Nói, gõ hoặc chạm vào câu mẫu.",cv_hint:"Bạn có thể nói:",cv_say:"🎙️ Nói",cv_type:"Gõ câu trả lời…",cv_send:"Gửi",cv_again:"Xin lỗi, mình chưa nghe rõ.",cv_nat:"💡 Cách nói tự nhiên:",cv_done:"Hoàn thành hội thoại!",cv_turns:"Bạn đã nói {n} lần · {u} lần bằng lời của mình",cv_restart:"🔁 Làm lại",cv_more:"Hội thoại khác",
  x_again:"Thử lại",
  kd_title:"Hồ sơ trẻ em",kd_sub:"Cho mỗi bé một không gian an toàn: truyện, trò chơi và tiếng Anh cho bé. Chỉ người lớn có mã PIN mới thoát được chế độ trẻ em.",kd_pin:"Tạo mã PIN phụ huynh (4 số)",kd_pin2:"Nhập lại",kd_pinBad:"Mã PIN không khớp. Dùng 4 chữ số.",kd_add:"➕ Thêm bé",kd_name:"Tên bé",kd_age:"Tuổi",kd_lim:"Giới hạn mỗi ngày",kd_nolim:"Không giới hạn",kd_min:"{n} phút",kd_save:"Lưu",kd_start:"▶ Vào chế độ trẻ em",kd_del:"Xóa",kd_today:"Hôm nay: {m} phút · {s} truyện · {l} bài",kd_changePin:"Đổi mã PIN",kd_enter:"Nhập mã PIN phụ huynh",kd_wrong:"Sai mã PIN",kd_forgot:"Quên mã PIN?",kd_gate:"Dành cho người lớn: {a} × {b} = ?",kd_exit:"🔒 Người lớn",kd_hi:"Chào {n}!",kd_left:"Còn {n} phút",kd_stories:"Truyện",kd_bed:"Truyện ngủ ngon",kd_make:"Tự tạo truyện",kd_talk:"Nói chuyện",kd_en:"Học tiếng Anh",kd_d5:"5 phút",kd_home:"🏠 Trang chủ",kd_up:"Hết giờ hôm nay rồi, {n}!",kd_upSub:"Bé giỏi lắm! Mai quay lại đọc truyện và chơi tiếp nhé.",kd_more:"🔒 Người lớn: thêm 15 phút",kd_leave:"🔒 Người lớn: thoát chế độ trẻ em",kd_none:"Chưa có bé nào.",kd_privacy:"Chế độ trẻ em chạy ngoại tuyến. Trò chuyện không được lưu và không ghi nhớ gì về bé.",
  mm_add:"Thêm điều cần nhớ…",mm_pin:"Ghim (không bao giờ quên)",mm_edit:"Sửa",mm_pinned:"📌 Đã ghim",
  tx_title:"Cỡ chữ",tx_d:"Phóng to mọi thứ cho dễ đọc.",set_backup:"Sao lưu",set_kids:"Trẻ em",set_text:"Cỡ chữ"}};
for(const k of ["en","vi"])Object.assign(PACKS[k].ui,UI20[k]);
const dayK=(t)=>new Date(t||Date.now()).toISOString().slice(0,10);
ACD.sk=ACD.sk||{};ACD.log=ACD.log||{};ACD.daily=ACD.daily||{};ACD.beg=ACD.beg||"auto";ACD.cvd=ACD.cvd||{};
/* ================= activity log + skills ================= */
const logD=()=>{const d=dayK();return ACD.log[d]=ACD.log[d]||{n:0,c:0,l:0,w:0,s:0,m:0}};
function skillOf(it){if(it.t==="type"||it.t==="build")return "w";if(it.t==="speak"||it.t==="role")return "s";if(it.t==="mc"&&it.say&&!it.big&&!it.sent)return "l";return "r"}
function skRec(k,score,lv){const L=LVIDX(lv||(ACV.les&&ACV.les.u&&ACV.les.u.lv)||ACD.lv||"A1");const a=ACD.sk[k]=ACD.sk[k]||[];a.push([Math.max(0,L),+score]);if(a.length>40)a.splice(0,a.length-40);
  const g=logD();if(k==="s")g.s++;else{g.n++;if(score>=1)g.c++}saveACD()}
function skLevel(k){const a=ACD.sk[k]||[];if(a.length<3)return null;let best=-1;
  for(let L=EN_LEVELS.length-1;L>=0;L--){const sub=a.filter(x=>x[0]>=L);if(sub.length>=3&&sub.reduce((s,x)=>s+x[1],0)/sub.length>=.7){best=L;break}}
  const acc=Math.round(a.reduce((s,x)=>s+x[1],0)/a.length*100);const low=Math.min(...a.map(x=>x[0]));return {lv:best>=0?EN_LEVELS[best].id:EN_LEVELS[Math.max(0,low-1)].id,acc,n:a.length,building:best<0}}
/* hook every answer: correct via HB.ev("correct"), wrong via acMiss */
{const _hb=HB.ev;HB.ev=function(k){_hb.apply(HB,arguments);if(k==="correct"&&ACV.les&&ACV.les.items){const it=ACV.les.items[ACV.les.i];if(it){skRec(skillOf(it),1,it.u&&it.u.lv);if(it.srsId)rateCard(it.srsId,3)}}};}
{const _am=acMiss;acMiss=function(L2,it,chosen,ans){_am(L2,it,chosen,ans);skRec(skillOf(it),0,it.u&&it.u.lv);if(it.srsId)rateCard(it.srsId,1)};}
{const _sa=acSrsAdd;acSrsAdd=function(id,data){if(!ACD.srs[id])logD().w++;_sa(id,data)};}
/* minutes: count a minute when the app is visible and touched recently */
let lastTouch=Date.now();["pointerdown","keydown"].forEach(e=>addEventListener(e,()=>lastTouch=Date.now(),{passive:true}));
setInterval(()=>{if(document.visibilityState!=="visible")return;if(Date.now()-lastTouch<120000){logD().m++;saveACD()}kidTick()},60000);
/* ================= beginner support ================= */
const begOn=()=>ACD.beg==="on"||(ACD.beg!=="off"&&LVIDX(ACD.lv||"A0")<=1)||kidsOn();
const spkPass=()=>begOn()?55:70;
{const _es=enSay;enSay=function(t,a,s){if(!s&&begOn()&&ACV.view==="lesson"){const c=Object.assign({},E&&E.on?cur3d():curChar());c.rate=(c.rate||1)*.78;return speakAs(c,t,a,"en")}return _es(t,a,s)};}
/* ================= Daily 5 ================= */
function daily5Items(){const nx=nextLesson();const u=nx?nx.u:(EN_UNITS.filter(x=>x.lv===(ACD.lv||"A0"))[0]||EN_UNITS[0]);
  const studied=EN_UNITS.filter(x=>x.lv===u.lv&&(ACD.done[x.id]||x===u));const items=[];
  shuffle(dueCards()).slice(0,2).forEach(id=>{const d=ACD.srs[id].d;const key=d.def?"def":(natLang()==="vi"&&d.vi?"vi":null);if(!key)return;
    const others=shuffle(Object.values(ACD.srs).map(x=>x.d).filter(x=>x.w!==d.w&&x[key])).slice(0,3).map(x=>x[key]);if(others.length<2)return;
    items.push({t:"mc",q:TT("ac_meaning"),big:d.w,say:d.w,opts:shuffle([d[key],...others]),ans:d[key],srsId:id,u})});
  const uu=pick(studied);const w=pick(uu.v);if(w[1])items.push({t:"mc",q:TT("ac_pickw"),big:w[1],opts:wordOpts(uu,w,0),ans:w[0],u:uu});
  const w2=pick(uu.v.filter(x=>x!==w));if(w2)items.push({t:"mc",q:TT("ac_listen"),say:w2[0],opts:wordOpts(uu,w2,0),ans:w2[0],u:uu});
  const gi=Math.floor(Math.random()*uu.g.q.length),q=uu.g.q[gi];items.push({t:"mc",q:TT("ac_fill"),sent:q[0],opts:shuffle([q[1],...q[2].split("|")]),ans:q[1],why:(EN_WHY[uu.id]||[])[gi],full:q[0].replace("___",q[1]),u:uu});
  const sents=uu.s.filter(s=>s.split(" ").length<=9);if(sents.length)items.push({t:"build",target:pick(sents),u:uu});
  items.push({t:"speak",target:pick(uu.s),u:uu});
  return {u,items:items.slice(0,7)}}
function startDaily(){switchTab("learn");if(ACD.mode!=="en"){ACD.mode="en";saveACD();renderLearn()}const {u,items}=daily5Items();
  const pu={id:"daily",lv:u.lv,em:"⚡",t:TT("d5_title"),can:"",v:u.v,g:{n:TT("d5_title"),q:[]},d:[],s:[]};
  ACV.view="lesson";ACV.les={u:pu,kind:"x",daily:true,items,i:0,ok:0,tot:0,state:null};renderAcad();$("#stage").scrollTo(0,0)}
function daily5Card(){const d=ACD.daily[dayK()];return h("div",{class:"panel d5-card"+(d!=null?" done":"")},h("div",{class:"d5-top"},h("span",{class:"d5-em"},"⚡"),h("div",null,h("b",null,TT("d5_title")),h("small",null,d!=null?fill(TT("d5_done"),{p:d}):TT("d5_sub")))),
  h("button",{type:"button",class:d!=null?"btn ghost":"btn",onclick:startDaily},d!=null?TT("d5_again"):TT("d5_go")))}
/* ================= lesson end: daily mark, can-do unlocks, lesson count ================= */
{const _el=endLesson;endLesson=function(){const L2=ACV.les;const u=L2.u;const before=EN_UNITS.includes(u)&&unitProgress(u)===3;
  _el();logD().l++;
  if(L2.daily){ACD.daily[dayK()]=L2.acc;const ks=Object.keys(ACD.daily).sort();if(ks.length>60)delete ACD.daily[ks[0]]}
  if(EN_UNITS.includes(u)&&!before&&unitProgress(u)===3){setTimeout(()=>{toast(fill(TT("cd_new"),{c:u.can.charAt(0).toLowerCase()+u.can.slice(1)}));confetti()},700)}
  if(kidsOn()){const k=kidUse();k.l++;saveKIDS()}saveACD()};}
/* beginner extras + try again on speaking */
{const _ar=acRenderLesson;acRenderLesson=function(A){_ar(A);const L2=ACV.les;if(!L2||L2.state==="end")return;const it=L2.items[L2.i];if(!it||!begOn())return;
  if(it.t==="mc"&&it.say&&!it.big&&!it.sent&&!A.querySelector(".ac-fb")){const p=h("p",{class:"note bg-show"},h("button",{type:"button",class:"btn ghost small",onclick:e=>{e.target.replaceWith(h("b",null,it.say))}},TT("bg_show")));A.querySelector(".ac-opts")?.before(p)}
  if(it.t==="speak"&&natLang()&&natLang()!=="en"){const n=h("p",{class:"ac-nat"});A.querySelector(".ac-sent")?.after(n);trNative(it.target).then(t=>{if(t)n.textContent=t})}};}
/* ================= welcome back ================= */
function welcomeBack(){if(kidsOn())return;const last=store.get("lastSeen",0);store.set("lastSeen",Date.now());if(!last||!store.get("onb2",false))return;const days=Math.floor((Date.now()-last)/864e5);if(days<3)return;
  setTimeout(()=>{if($("#tourOv")||$("#onbModal")||$("#consentModal"))return;const {b,close}=modal(fill(TT("wb_title"),{n:S.name?", "+S.name:""}));
    b.append(h("p",{class:"note"},fill(TT("wb_days"),{d:days})+" "+TT("wb_sub")),h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:()=>{close();startDaily()}},TT("wb_go")),h("button",{type:"button",class:"btn ghost",onclick:close},TT("wb_chat"))));
    if(S.voice)speak(fill(TT("wb_title"),{n:S.name?", "+S.name:""}).replace("💛","")+" "+TT("wb_sub"),true)},2500)}
/* ================= weekly report + share card ================= */
function weekStats(ago){const o={n:0,c:0,l:0,w:0,s:0,m:0,days:0,dots:[]};for(let i=6;i>=0;i--){const d=ACD.log[dayK(Date.now()-(i+ago*7)*864e5)];const act=!!(d&&(d.n||d.l||d.s||d.m>1));o.dots.push(act);if(!d)continue;if(act)o.days++;for(const k of ["n","c","l","w","s","m"])o[k]+=d[k]||0}return o}
function weekCard(){const a=weekStats(0),p=weekStats(1);const acc=a.n?Math.round(a.c/a.n*100):0;
  const cell=(v,lab,pv)=>h("div",{class:"wk-cell"},h("b",null,String(v)),h("small",null,lab),pv!=null&&(v||pv)?h("i",{class:v>=pv?"up":"down"},(v>=pv?"▲ ":"▼ ")+Math.abs(v-pv)):"");
  const box=h("div",{class:"panel wk-card"},h("span",{class:"label"},"📅 "+TT("wk_title")),
    h("div",{class:"wk-dots"},...a.dots.map((on,i)=>h("span",{class:on?"on":""},["S","M","T","W","T","F","S"][new Date(Date.now()-(6-i)*864e5).getDay()]))),
    h("div",{class:"wk-grid"},cell(a.l,TT("wk_les"),p.l),cell(a.n,TT("wk_ans"),p.n),cell(acc+"%",TT("wk_acc")),cell(a.w,TT("wk_words"),p.w),cell(a.s,TT("wk_spk"),p.s),cell(a.m,TT("wk_min"),p.m)),
    h("p",{class:"note"},"▲▼ "+TT("wk_vs")),h("button",{type:"button",class:"btn ghost",onclick:shareWeek},TT("wk_share")));return box}
async function shareWeek(){const a=weekStats(0);const acc=a.n?Math.round(a.c/a.n*100):0;const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d");
  const g=x.createLinearGradient(0,0,1080,1350);g.addColorStop(0,"#2a1550");g.addColorStop(.6,"#1b1638");g.addColorStop(1,"#0f2a44");x.fillStyle=g;x.fillRect(0,0,1080,1350);
  const gr=x.createLinearGradient(0,0,1080,0);gr.addColorStop(0,"#ff8fc6");gr.addColorStop(.55,"#b48cff");gr.addColorStop(1,"#7cc8ff");
  x.fillStyle=gr;x.font="800 84px Outfit, system-ui, sans-serif";x.textAlign="center";x.fillText(TT("wk_card"),540,190);
  x.fillStyle="#fff";x.font="700 50px system-ui, sans-serif";x.fillText((S.name||"")+(ACD.lv?"  ·  "+ACD.lv:""),540,270);
  const cells=[[a.l,TT("wk_les")],[a.w,TT("wk_words")],[acc+"%",TT("wk_acc")],[a.s,TT("wk_spk")],[a.m,TT("wk_min")],[a.days+"/7",TT("wk_days")]];
  cells.forEach(([v,l],i)=>{const cx=220+(i%3)*320,cy=470+Math.floor(i/3)*330;x.fillStyle="rgba(255,255,255,.08)";x.beginPath();x.roundRect(cx-140,cy-120,280,260,40);x.fill();
    x.fillStyle="#fff";x.font="800 96px Outfit, system-ui";x.fillText(String(v),cx,cy+20);x.fillStyle="#cfc6f5";x.font="600 38px system-ui";x.fillText(l,cx,cy+90)});
  a.dots.forEach((on,i)=>{x.fillStyle=on?"#ff8fc6":"rgba(255,255,255,.15)";x.beginPath();x.arc(240+i*100,1130,32,0,7);x.fill()});
  x.fillStyle="#cfc6f5";x.font="600 40px system-ui";x.fillText("🎪 Funhouse Oracle",540,1270);
  const blob=await new Promise(r=>c.toBlob(r,"image/png"));const file=new File([blob],"my-english-week.png",{type:"image/png"});
  try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:TT("wk_card")});return}}catch(e){if(e&&e.name==="AbortError")return}
  const u=URL.createObjectURL(blob);const lk=h("a",{href:u,download:"my-english-week.png"});document.body.append(lk);lk.click();lk.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
/* ================= skills + can-do panels ================= */
function skillsPanel(){const p=h("div",{class:"panel sk-panel"},h("span",{class:"label"},"📊 "+TT("sk_title")));
  [["s","🗣️"],["l","👂"],["r","📖"],["w","✍️"]].forEach(([k,em])=>{const r=skLevel(k);
    p.append(h("div",{class:"sk-row"},h("span",{class:"sk-em"},em),h("div",{class:"sk-mid"},h("b",null,TT("sk_"+k)),h("span",{class:"ac-bar"},h("i",{style:"width:"+(r?r.acc:0)+"%"})),h("small",null,r?fill(TT("sk_ans"),{n:r.n})+" · "+r.acc+"%":TT("sk_none"))),h("span",{class:"ac-lvtag"+(r&&r.building?" dim":"")},r?r.lv:"–")))});
  p.append(h("p",{class:"note"},TT("sk_note")));return p}
function canDoPanel(){const all=EN_UNITS.filter(u=>u.can);const done=all.filter(u=>unitProgress(u)===3);const cur=ACD.lv||"A0";
  const det=h("details",{class:"panel cd-panel"},h("summary",null,h("span",{class:"label"},"✅ "+TT("cd_title")),h("small",null,fill(TT("cd_sub"),{n:done.length,t:all.length}))));
  EN_LEVELS.forEach(L0=>{const us=all.filter(u=>u.lv===L0.id);if(!us.length)return;if(LVIDX(L0.id)>LVIDX(cur)+1&&!us.some(u=>unitProgress(u)===3))return;
    det.append(h("div",{class:"cd-lv"},h("span",{class:"ac-lvtag sm"},L0.id)),...us.map(u=>{const ok=unitProgress(u)===3;return h("button",{type:"button",class:"cd-item"+(ok?" ok":""),onclick:()=>startLesson(u,["w","g","s"].find(k=>!(ACD.done[u.id]||{})[k])||"s")},(ok?"✅ ":"⬜ ")+"I can "+u.can.charAt(0).toLowerCase()+u.can.slice(1))}))});
  return det}
/* ================= offline conversations ================= */
const CV={};
function startConvo(id){const s=CONVOS.find(c=>c.id===id);Object.assign(CV,{s,node:"start",vars:{},log:[],turns:0,own:0,tries:0,done:false});ACV.view="convo";renderAcad();$("#stage").scrollTo(0,0);setTimeout(()=>cvBot(),300)}
const cvFill=t=>t.replace(/\{(\w+)\}/g,(m,k)=>CV.vars[k]||(k==="name"?(S.name||"friend"):"there"));
function cvVoice(){return CV.s.g==="m"?{g:"m",pitch:.95,rate:begOn()?.85:1}:{g:"f",pitch:1.05,rate:begOn()?.85:1}}
function cvBot(text){const n=CV.s.nodes[CV.node];const t=text||cvFill(n.b);CV.log.push(["b",t]);renderAcad();speakAs(cvVoice(),t,null,"en")}
function cvAnswer(raw){const said=String(raw||"").trim();if(!said)return;const n=CV.s.nodes[CV.node];CV.log.push(["u",said]);CV.turns++;
  const low=said.toLowerCase().replace(/[’]/g,"'");let next=null;
  if(n.get){const m=low.match(new RegExp(n.get[1]));if(m&&m[1])CV.vars[n.get[0]]=m[1].trim().replace(/\b\w/g,c=>c.toUpperCase()).split(" ").slice(0,3).join(" ");else if(n.get[0]==="name"&&said.split(/\s+/).length<=2)CV.vars.name=said.replace(/[^\p{L} ]/gu,"").replace(/\b\w/g,c=>c.toUpperCase())}
  for(const [re,to] of (n.n||[]))if(new RegExp(re).test(low)){next=to;break}
  if(!next&&n.any&&said.split(/\s+/).length>=1)next=n.any;
  const best=(n.h||[]).reduce((b,x)=>{const p=sim(said,x);return p>b[0]?[p,x]:b},[0,""]);
  if(best[0]<.9)CV.own++;
  skRec("s",next?1:.4,CV.s.lv);
  if(next&&best[1]&&!n.get&&said.split(/\s+/).length<=2&&best[1].split(/\s+/).length>said.split(/\s+/).length&&best[0]<.8)CV.log.push(["tip",best[1]]);
  if(!next){CV.tries++;cvBot(TT("cv_again")+" "+(n.re||"")+(n.h&&n.h[0]?" ("+n.h[0]+")":""));return}
  CV.node=next;CV.tries=0;const nn=CV.s.nodes[next];if(nn.end){CV.log.push(["b",cvFill(nn.b)]);speakAs(cvVoice(),cvFill(nn.b),null,"en");CV.done=true;ACD.cvd[CV.s.id]=(ACD.cvd[CV.s.id]||0)+1;logD().l++;HB.add(8,"lesson");HB.ev("lesson");saveACD();confetti();sfx("win");renderAcad();return}
  setTimeout(()=>cvBot(),400)}
function renderConvo(A){const s=CV.s;if(!s){ACV.view="home";return renderAcad()}
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{stopAudio&&stopAudio();ACV.view="cvlist";renderAcad()}},"✕"),h("b",null,s.em+" "+s.t),h("span",{class:"ac-lvtag sm"},s.lv)));
  const box=h("div",{class:"cv-chat"});CV.log.forEach(([w,t])=>{if(w==="tip")box.append(h("div",{class:"cv-tip"},TT("cv_nat")+" ",h("i",null,t)," ",sayBtn(t)));else box.append(h("div",{class:"cv-msg "+(w==="u"?"me":"them")},w==="u"?"":h("small",null,s.who),h("span",null,t," "),w==="b"?sayBtn(t,true):""))});A.append(box);
  if(CV.done){A.append(h("div",{class:"panel ac-end"},h("div",{class:"ac-big"},"🎉"),h("h2",null,TT("cv_done")),h("p",null,fill(TT("cv_turns"),{n:CV.turns,u:CV.own})),
    h("div",{class:"btn-row",style:"justify-content:center"},h("button",{type:"button",class:"btn",onclick:()=>startConvo(s.id)},TT("cv_restart")),h("button",{type:"button",class:"btn ghost",onclick:()=>{ACV.view="cvlist";renderAcad()}},TT("cv_more")))));setTimeout(()=>A.lastChild.scrollIntoView({block:"nearest",behavior:"smooth"}),50);return}
  const n=s.nodes[CV.node];
  if(n&&n.h&&CV.log.length){A.append(h("span",{class:"label"},"💡 "+TT("cv_hint")),h("div",{class:"cv-hints"},...n.h.map(x=>h("button",{type:"button",class:"chip",onclick:()=>{inp.value=x;inp.focus();enSay(x)}},x))))}
  const inp=h("input",{class:"ac-input",placeholder:TT("cv_type"),autocomplete:"off"});inp.onkeydown=e=>{if(e.key==="Enter")cvAnswer(inp.value)};
  const mic=h("button",{type:"button",class:"btn ac-mic",onclick:()=>{mic.classList.add("rec");listenFor("en",alts=>{mic.classList.remove("rec");const hs=n.h||[];let bt=alts[0]||"",bp=-1;alts.forEach(a=>{const p=Math.max(0,...hs.map(x=>sim(a,x)));if(p>bp){bp=p;bt=a}});cvAnswer(bt)})}},TT("cv_say"));
  A.append(h("div",{class:"cv-input"},mic,inp,h("button",{type:"button",class:"btn",onclick:()=>cvAnswer(inp.value)},TT("cv_send"))));
  setTimeout(()=>{box.lastChild&&box.lastChild.scrollIntoView({block:"nearest",behavior:"smooth"})},40)}
function renderConvoList(A){A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("b",null,"💬 "+TT("cv_title"))),h("p",{class:"note"},TT("cv_sub")));
  const g=h("div",{class:"ac-tiles"});CONVOS.forEach(c=>{if(kidsOn()&&LVIDX(c.lv)>1)return;g.append(h("button",{type:"button",class:"ac-tile",onclick:()=>startConvo(c.id)},h("span",{class:"em"},c.em),h("b",null,c.t),h("small",null,c.lv+(ACD.cvd[c.id]?" · ✓ "+ACD.cvd[c.id]:""))))});A.append(g)}
/* ================= English home additions ================= */
{const _ra=renderAcad;renderAcad=function(){const A=$("#acad");if(A&&ACV.view==="convo"){A.innerHTML="";return renderConvo(A)}if(A&&ACV.view==="cvlist"){A.innerHTML="";return renderConvoList(A)}
  _ra();if(!A||ACV.view!=="home")return;const hero=A.querySelector(".ac-hero");
  const bg=h("button",{type:"button",class:"bg-chip"+(begOn()?" on":""),title:TT("bg_d"),onclick:()=>{ACD.beg={auto:"on",on:"off",off:"auto"}[ACD.beg];saveACD();toast(TT("bg_label")+": "+TT("bg_"+ACD.beg)+(ACD.beg!=="off"?" · "+TT("bg_d"):""));renderAcad()}},TT("bg_label")+": "+TT("bg_"+ACD.beg)+(ACD.beg==="auto"?(begOn()?" (✓)":" (–)"):""));
  if(hero){hero.after(bg);bg.after(daily5Card())}
  const tiles=A.querySelector(".ac-tiles");if(tiles){const t=h("button",{type:"button",class:"ac-tile hot",onclick:()=>{ACV.view="cvlist";renderAcad()}},h("span",{class:"em"},"💬"),h("b",null,TT("cv_title")),h("small",null,CONVOS.length+" · offline"));tiles.insertBefore(t,tiles.children[1]||null);
    if(kidsOn())[...tiles.children].forEach(b=>{const tx=b.textContent;if(tx.includes(TT("ac_tutor"))||tx.includes(TT("ac_place"))||tx.includes(TT("ac_prog")))b.remove()});
    tiles.after(skillsPanel(),canDoPanel(),weekCard())}};}
/* ================= Today tab ================= */
{const _rt=renderToday;renderToday=function(){_rt();const V=$("#view-today");const tip=V.querySelector(".hp-tipcard")||V.querySelector(".ac-hero");const d=daily5Card();if(tip)tip.after(d);else V.prepend(d);d.after(weekCard())};}
/* quick start chip */
{const _qs=quickStart;quickStart=function(){_qs();const q=$("#quickStart");if(q&&!q.querySelector(".qs-d5"))q.insertBefore(h("button",{type:"button",class:"qs-i qs-d5 hot",onclick:startDaily},h("span",{class:"em"},"⚡"),h("span",null,TT("d5_title"))),q.firstChild)};quickStart();}
/* ================= backup / restore ================= */
function backupData(){const data={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("fho_"))data[k]=localStorage.getItem(k)}return {app:"funhouse-oracle",v:16,at:new Date().toISOString(),data}}
async function saveBackup(share){const json=JSON.stringify(backupData());const name="funhouse-backup-"+dayK()+".json";const blob=new Blob([json],{type:"application/json"});
  store.set("lastBackup",Date.now());
  if(share){const f=new File([blob],name,{type:"application/json"});try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:name});toast(TT("bk_done"));return}}catch(e){if(e&&e.name==="AbortError")return}}
  const u=URL.createObjectURL(blob);const a=h("a",{href:u,download:name});document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),5000);toast(TT("bk_done"))}
function restoreFile(file){const r=new FileReader();r.onload=()=>{let j;try{j=JSON.parse(r.result)}catch(e){}
  if(!j||j.app!=="funhouse-oracle"||!j.data){toast(TT("bk_bad"));return}if(!confirm(TT("bk_confirm")))return;
  const keep=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("fho_"))keep.push(k)}keep.forEach(k=>localStorage.removeItem(k));
  Object.entries(j.data).forEach(([k,v])=>{if(k.startsWith("fho_"))try{localStorage.setItem(k,v)}catch(e){}});toast(TT("bk_ok"));setTimeout(()=>location.reload(),900)};r.readAsText(file)}
function openBackup(){const {b}=modal("💾 "+TT("bk_title"));const last=store.get("lastBackup",0);
  const fi=h("input",{type:"file",accept:".json,application/json",hidden:true,onchange:e=>{const f=e.target.files[0];if(f)restoreFile(f)}});
  b.append(h("p",{class:"note"},TT("bk_sub")),h("p",null,h("b",null,fill(TT("bk_last"),{d:last?new Date(last).toLocaleDateString():TT("bk_never")}))),
    h("button",{type:"button",class:"btn",style:"width:100%;margin:6px 0",onclick:()=>saveBackup(false)},TT("bk_save")),
    navigator.canShare?h("button",{type:"button",class:"btn ghost",style:"width:100%;margin:6px 0",onclick:()=>saveBackup(true)},TT("bk_share")):"",
    h("button",{type:"button",class:"btn ghost",style:"width:100%;margin:6px 0",onclick:()=>fi.click()},TT("bk_load")),fi,h("p",{class:"note"},"ℹ️ "+TT("bk_note")))}
/* gentle reminder every 2 weeks once there is real progress */
setTimeout(()=>{if(kidsOn())return;const last=store.get("lastBackup",0),nag=store.get("bkNag",0);const used=Object.keys(ACD.log).length>=3||MEM.facts.length>=3;
  if(used&&Date.now()-last>14*864e5&&Date.now()-nag>7*864e5){store.set("bkNag",Date.now());const t=h("div",{class:"tab-hint"},h("p",null,TT("bk_remind")),h("div",{class:"btn-row"},h("button",{type:"button",class:"btn small",onclick:()=>{t.remove();openBackup()}},TT("bk_save")),h("button",{type:"button",class:"btn ghost small",onclick:()=>t.remove()},"✕")));const q=$("#quickStart");if(q)q.after(t)}},9000);
/* ================= text size ================= */
const ZOOMS=[1,1.1,1.2,1.32];
function applyZoom(){const z=store.get("zoom",1);document.body.style.zoom=z===1?"":String(z)}applyZoom();
function openTextSize(){const {b}=modal("🔤 "+TT("tx_title"));b.append(h("p",{class:"note"},TT("tx_d")));const row=h("div",{class:"btn-row"});
  ZOOMS.forEach((z,i)=>row.append(h("button",{type:"button",class:"btn "+(store.get("zoom",1)===z?"":"ghost"),style:"font-size:"+(14+i*3)+"px",onclick:()=>{store.set("zoom",z);applyZoom();[...row.children].forEach((x,j)=>x.className="btn "+(j===i?"":"ghost"))}},"A")));b.append(row)}
/* ================= memories: add, edit, pin ================= */
const sortMem=()=>{MEM.facts.sort((a,b)=>(b.pin?1:0)-(a.pin?1:0))};
{const _af=addFact;addFact=function(t,cat){if(kidsOn())return false;const r=_af(t,cat);if(r){const pins=MEM.facts.filter(f=>f.pin);sortMem();saveMEM()}return r};}
{const _rm=renderMem;renderMem=function(){_rm();const l=$("#memList");if(!l)return;[...l.children].filter(el=>(el.textContent||"").startsWith("🧠 ")).forEach(el=>el.remove());
  const add=h("input",{class:"mm-add",placeholder:TT("mm_add"),maxlength:90});const addRow=h("div",{class:"mm-addrow"},add,h("button",{type:"button",class:"btn small",onclick:()=>{const v=add.value.trim();if(v.length<3)return;MEM.facts.unshift({t:v,cat:"me",at:dayKey(),pin:true});sortMem();saveMEM();renderMem()}},"＋"));
  add.onkeydown=e=>{if(e.key==="Enter")addRow.lastChild.click()};
  const box=h("div",{class:"mm-list"});sortMem();
  MEM.facts.forEach((f,i)=>{const row=h("div",{class:"mm-row"+(f.pin?" pin":"")});const txt=h("span",{class:"mm-t"},(f.pin?"📌 ":"🧠 ")+f.t);
    row.append(txt,h("button",{type:"button",class:"mm-b",title:TT("mm_pin"),"aria-label":TT("mm_pin"),onclick:()=>{f.pin=!f.pin;sortMem();saveMEM();renderMem()}},f.pin?"📍":"📌"),
      h("button",{type:"button",class:"mm-b",title:TT("mm_edit"),"aria-label":TT("mm_edit"),onclick:()=>{const inp=h("input",{class:"mm-add",value:f.t,maxlength:90});txt.replaceWith(inp);inp.focus();const done=()=>{const v=inp.value.trim();if(v.length>=3)f.t=v;saveMEM();renderMem()};inp.onkeydown=e=>{if(e.key==="Enter")done()};inp.onblur=done}},"✏️"),
      h("button",{type:"button",class:"mm-b","aria-label":"Delete",onclick:()=>{MEM.facts.splice(MEM.facts.indexOf(f),1);saveMEM();renderMem()}},"✕"));box.append(row)});
  l.prepend(addRow,box)};renderMem();}
/* ================= KIDS PROFILES ================= */
const KIDS=Object.assign({list:[],pin:"",active:"",use:{},prev:null},store.get("kids",{}));const saveKIDS=()=>store.set("kids",KIDS);
const kidsOn=()=>!!KIDS.active;const curKid=()=>KIDS.list.find(k=>k.id===KIDS.active);
const pinHash=p=>{let x=5381;for(const c of "fho#"+p)x=((x<<5)+x+c.charCodeAt(0))>>>0;return x.toString(36)};
function kidUse(id){id=id||KIDS.active;const d=dayK();KIDS.use[id]=KIDS.use[id]||{};const u=KIDS.use[id];Object.keys(u).forEach(k=>{if(k<dayK(Date.now()-14*864e5))delete u[k]});return u[d]=u[d]||{m:0,s:0,l:0,extra:0}}
function askPin(title,ok){const {b,close}=modal("🔒 "+(title||TT("kd_enter")));const inp=h("input",{class:"ac-input pin-in",type:"password",inputmode:"numeric",maxlength:4,autocomplete:"off","aria-label":TT("kd_enter")});
  const msg=h("p",{class:"note"});const go=()=>{if(pinHash(inp.value)===KIDS.pin){close();ok()}else{msg.textContent="❌ "+TT("kd_wrong");inp.value="";sfx("buzz")}};inp.onkeydown=e=>{if(e.key==="Enter")go()};inp.oninput=()=>{if(inp.value.length===4)go()};
  b.append(inp,msg,h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:go},"OK"),h("button",{type:"button",class:"btn ghost small",onclick:()=>{close();parentGate(()=>setPin(ok))}},TT("kd_forgot"))));setTimeout(()=>inp.focus(),80)}
function parentGate(ok){const a=11+Math.floor(Math.random()*8),c=12+Math.floor(Math.random()*8);const {b,close}=modal("🧮");const inp=h("input",{class:"ac-input",inputmode:"numeric",maxlength:4});
  b.append(h("p",null,fill(TT("kd_gate"),{a,b:c})),inp,h("button",{type:"button",class:"btn",onclick:()=>{if(+inp.value===a*c){close();ok()}else{inp.value="";sfx("buzz")}}},"OK"))}
function setPin(after){const {b,close}=modal("🔐 "+TT("kd_pin"));const p1=h("input",{class:"ac-input pin-in",type:"password",inputmode:"numeric",maxlength:4,placeholder:"••••"}),p2=h("input",{class:"ac-input pin-in",type:"password",inputmode:"numeric",maxlength:4,placeholder:"••••"});const msg=h("p",{class:"note"});
  b.append(h("label",{class:"label"},TT("kd_pin")),p1,h("label",{class:"label"},TT("kd_pin2")),p2,msg,h("button",{type:"button",class:"btn",onclick:()=>{if(!/^\d{4}$/.test(p1.value)||p1.value!==p2.value){msg.textContent="❌ "+TT("kd_pinBad");return}KIDS.pin=pinHash(p1.value);saveKIDS();close();toast("🔐 ✓");after&&after()}},TT("kd_save")))}
const KEMO=["🦊","🐼","🦄","🐯","🐸","🐰","🐻","🐨","🐱","🐶","🦁","🐧"];
function editKid(k){const isNew=!k;k=k||{id:"k"+Date.now().toString(36),name:"",em:pick(KEMO),age:"6-8",lim:45};const {b,close}=modal((isNew?"➕ ":"✏️ ")+(k.name||TT("kd_add").replace("➕ ","")));
  const nm=h("input",{class:"ac-input",value:k.name,maxlength:20,placeholder:TT("kd_name")});const ems=h("div",{class:"kd-ems"});let em=k.em;
  KEMO.forEach(e=>{const bt=h("button",{type:"button",class:"kd-em"+(e===em?" on":""),onclick:()=>{em=e;[...ems.children].forEach(x=>x.classList.toggle("on",x===bt))}},e);ems.append(bt)});
  const age=h("select",{class:"ac-sel"},...["3-5","6-8","9-12"].map(a=>h("option",{value:a},a)));age.value=k.age;
  const lim=h("select",{class:"ac-sel"},...[15,30,45,60,90,0].map(m=>h("option",{value:m},m?fill(TT("kd_min"),{n:m}):TT("kd_nolim"))));lim.value=k.lim;
  b.append(h("label",{class:"label"},TT("kd_name")),nm,ems,h("label",{class:"label"},TT("kd_age")),age,h("label",{class:"label"},TT("kd_lim")),lim,
    h("button",{type:"button",class:"btn",style:"margin-top:12px",onclick:()=>{if(!nm.value.trim()){nm.focus();return}Object.assign(k,{name:nm.value.trim(),em,age:age.value,lim:+lim.value});if(isNew)KIDS.list.push(k);saveKIDS();close();openKids()}},TT("kd_save")))}
function openKids(){if(!KIDS.pin){setPin(openKids);return}document.querySelectorAll(".hb-modal").forEach(m=>{if(m.querySelector(".kd-list"))m.remove()});
  const {b,close}=modal("👨‍👩‍👧 "+TT("kd_title"));b.append(h("p",{class:"note"},TT("kd_sub")));const list=h("div",{class:"kd-list"});
  if(!KIDS.list.length)list.append(h("p",{class:"note"},TT("kd_none")));
  KIDS.list.forEach(k=>{const u=kidUse(k.id);list.append(h("div",{class:"kd-card"},h("span",{class:"kd-big"},k.em),h("div",{class:"kd-mid"},h("b",null,k.name),h("small",null,k.age+" · "+(k.lim?fill(TT("kd_min"),{n:k.lim}):TT("kd_nolim"))),h("small",null,fill(TT("kd_today"),{m:u.m,s:u.s,l:u.l}))),
    h("div",{class:"kd-btns"},h("button",{type:"button",class:"btn small",onclick:()=>{close();enterKid(k.id)}},TT("kd_start")),h("button",{type:"button",class:"btn ghost small",onclick:()=>{close();editKid(k)}},"✏️"),
      h("button",{type:"button",class:"btn ghost small","aria-label":TT("kd_del"),onclick:()=>{if(!confirm(TT("kd_del")+" "+k.name+"?"))return;KIDS.list=KIDS.list.filter(x=>x!==k);delete KIDS.use[k.id];localStorage.removeItem("fho_acad_kid_"+k.id);saveKIDS();close();openKids()}},"🗑️"))))});
  b.append(list,h("button",{type:"button",class:"btn",style:"width:100%;margin-top:8px",onclick:()=>{close();editKid(null)}},TT("kd_add")),h("p",{class:"note"},"🔒 "+TT("kd_privacy")),
    h("button",{type:"button",class:"btn ghost small",onclick:()=>askPin(null,()=>setPin())},"🔐 "+TT("kd_changePin")))}
const ACD_DEF=()=>({mode:"en",lv:"A0",placed:true,done:{},srs:{},seen:{},wlv:null,stats:{rev:0,spk:0,spkSum:0,lessons:0},mist:[],tests:{},sk:{},log:{},daily:{},beg:"on",cvd:{}});
function swapACD(to){Object.keys(ACD).forEach(k=>delete ACD[k]);Object.assign(ACD,ACD_DEF(),to||{});saveACD()}
function enterKid(id){const k=KIDS.list.find(x=>x.id===id);if(!k||KIDS.active)return;
  store.set("acad_parent",JSON.parse(JSON.stringify(ACD)));swapACD(store.get("acad_kid_"+id,null));
  KIDS.prev={mode:S.mode,brainOn:!!S.brainOn,convo:CMP.cur,name:S.name};KIDS.active=id;saveKIDS();
  CMP.cur="";$("#chat").innerHTML="";S.history=[];applyKids(true)}
function applyKids(fresh){const k=curKid();if(!k)return;document.body.classList.add("kids");S.mode="kids";renderModes();S.name=k.name;S.brainOn=false;
  ACV.view="home";ACV.les=null;buildKidsView();switchTab("kids");
  {const cap=$("#caption");if(cap){cap.textContent=fill(TT("kd_hi"),{n:k.name})+" "+(uiLang()==="vi"?"Hôm nay mình đọc truyện hay chơi trò chơi nhé?":"Do you want a story, a game, or to learn some English?");cap.hidden=false}}
  if(fresh&&S.voice)setTimeout(()=>speak(fill(TT("kd_hi"),{n:k.name})+" "+(uiLang()==="vi"?"Hôm nay mình đọc truyện hay chơi trò chơi nhé?":"Do you want a story, a game, or to learn some English?"),true),500);
  kidTick(true)}
function exitKid(){askPin(null,()=>{const id=KIDS.active;store.set("acad_kid_"+id,JSON.parse(JSON.stringify(ACD)));swapACD(store.get("acad_parent",null));localStorage.removeItem("fho_acad_parent");
  const p=KIDS.prev||{};KIDS.active="";KIDS.prev=null;saveKIDS();document.body.classList.remove("kids");$("#kidLock")?.remove();$("#view-kids")?.remove();
  S.mode=p.mode||store.get("mode","friend");store.set("mode",S.mode);renderModes();S.name=p.name!=null?p.name:store.get("name","");S.brainOn=!!(p.brainOn&&S.engine);
  $("#chat").innerHTML="";if(p.convo&&CMP.restore(p.convo)){}else{CMP.cur=""}ACV.view="home";switchTab("chat");toast("👋")})}
function buildKidsView(){$("#view-kids")?.remove();const k=curKid();const V=h("section",{class:"view",id:"view-kids"});$("#stage").append(V);
  const left=h("span",{class:"kd-left",id:"kidLeft"});
  V.append(h("div",{class:"kd-hero"},h("span",{class:"kd-big"},k.em),h("div",null,h("h2",null,fill(TT("kd_hi"),{n:k.name})),left)));
  const tile=(em,t,fn,cls)=>h("button",{type:"button",class:"kd-tile "+(cls||""),onclick:fn},h("span",{class:"em"},em),h("b",null,t));
  const bed=()=>{const pool=STORIES.filter(s=>/bed|sleep|night|moon|dream/i.test((s.cat||"")+" "+s.t));STY.sleep=true;saveSTY();switchTab("stories");openReader(pick(pool.length?pool:STORIES))};
  V.append(h("div",{class:"kd-grid"},tile("📚",TT("kd_stories"),()=>switchTab("stories"),"a"),tile("🌙",TT("kd_bed"),bed,"b"),tile("✨",TT("kd_make"),()=>{switchTab("stories");openMaker()},"c"),
    tile("💬",TT("kd_talk"),()=>switchTab("chat"),"d"),tile("🇬🇧",TT("kd_en"),()=>{ACD.mode="en";saveACD();ACV.view="home";switchTab("learn")},"e"),tile("⚡",TT("kd_d5"),startDaily,"f")));
  const g=charGamesBox();g.id="cgBoxKid";V.append(g);
  V.append(h("button",{type:"button",class:"btn ghost kd-exit",onclick:exitKid},TT("kd_exit")));
  if(!$("#kidHome"))document.body.append(h("button",{type:"button",id:"kidHome",class:"kid-home",onclick:()=>{ACV.view="home";switchTab("kids")}},TT("kd_home")))}
function kidTick(noCount){if(!kidsOn())return;const k=curKid();if(!k){KIDS.active="";saveKIDS();return}S.brainOn=false;const u=kidUse();if(!noCount&&document.visibilityState==="visible")u.m++;saveKIDS();
  const lim=k.lim?k.lim+(u.extra||0):0;const left=lim?Math.max(0,lim-u.m):null;const el=$("#kidLeft");if(el)el.textContent=left!=null?"⏳ "+fill(TT("kd_left"),{n:left}):"";
  if(lim&&u.m>=lim&&!$("#kidLock")){stopAudio&&stopAudio();if(typeof closeReader==="function")try{closeReader()}catch(e){}
    const lock=h("div",{id:"kidLock",class:"kid-lock"},h("div",{class:"kid-lock-box"},h("div",{class:"kd-big"},"⏰"),h("h2",null,fill(TT("kd_up"),{n:k.name})),h("p",null,TT("kd_upSub")),
      h("p",{class:"note"},fill(TT("kd_today"),{m:u.m,s:u.s,l:u.l})),
      h("button",{type:"button",class:"btn",onclick:()=>askPin(null,()=>{u.extra=(u.extra||0)+15;saveKIDS();lock.remove();kidTick(true)})},TT("kd_more")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>{lock.remove();exitKid();setTimeout(()=>{if(kidsOn())kidTick(true)},400)}},TT("kd_leave"))));document.body.append(lock);if(S.voice)speak(fill(TT("kd_up"),{n:k.name})+" "+TT("kd_upSub"),true)}}
/* kids: route tabs, keep things safe */
const KID_VIEWS=["kids","chat","stories","learn"];
{const _st=switchTab;switchTab=function(v){if(kidsOn()&&!KID_VIEWS.includes(v))v="kids";
  if(v==="kids"){_st("chat");document.querySelectorAll("#stage > .view").forEach(s=>s.hidden=s.id!=="view-kids");if(!$("#view-kids"))buildKidsView();$("#view-kids").hidden=false;$("#composer").hidden=true;$("#stage").scrollTop=0;setTimeout(()=>{$("#stage").scrollTop=0},60);kidTick(true)}
  else{_st(v);const kv=$("#view-kids");if(kv)kv.hidden=true}
  const kh=$("#kidHome");if(kh)kh.hidden=!kidsOn()||v==="kids";if(kidsOn()&&v==="learn"){ACD.mode="en"}};}
{const _ro=openReader;openReader=function(s){if(kidsOn()){kidUse().s++;saveKIDS()}return _ro.apply(this,arguments)};}
{const _rs=requestStory;requestStory=function(q,age,len){if(kidsOn()){const sv=S.brainOn;S.brainOn=false;const r=_rs(q,age,len);S.brainOn=sv;return r}return _rs(q,age,len)};}
if(typeof extractMem==="function"){const _em=extractMem;extractMem=function(){if(kidsOn())return;return _em.apply(this,arguments)}}
if(typeof addFollow==="function"){const _fo=addFollow;addFollow=function(){if(kidsOn())return;return _fo.apply(this,arguments)}}
if(typeof proactive==="function"){const _pr=proactive;proactive=function(){if(kidsOn())return;return _pr.apply(this,arguments)}}
{const _sn=CMP.snap.bind(CMP);CMP.snap=function(){if(kidsOn())return;return _sn()};}
{const _rm2=renderModes;renderModes=function(){if(kidsOn())S.mode="kids";return _rm2.apply(this,arguments)};}
/* ================= settings, help, tour additions ================= */
{const grid=document.querySelector("#setIndex .set-grid");if(grid){const help=[...grid.children].pop();
  [["💾","set_backup",openBackup],["👨‍👩‍👧","set_kids",openKids],["🔤","set_text",openTextSize]].forEach(([em,k,fn])=>grid.insertBefore(h("button",{type:"button",class:"ac-tile",onclick:fn},h("span",{class:"em"},em),h("b",null,TT(k))),help))}}
GUIDES.splice(5,0,["⚡","Daily 5","Five minutes a day keeps your English moving: review cards, new words, a grammar question with an explanation, listening and speaking. Find it on the Chat shortcuts, Learn and Today.",startDaily],
 ["💬","Conversation practice (offline)","Learn → English → 💬 Conversation practice: order coffee, check in to a hotel, see a doctor, go to a job interview and more. Speak, type or tap an example. Works without internet or AI.",()=>{switchTab("learn");ACD.mode="en";saveACD();ACV.view="cvlist";renderLearn()}],
 ["📊","Skills, can-do goals and weekly report","Learn → English shows your level for speaking, listening, reading and writing, what you can do now, and this week's progress. Tap 📤 to share your week.",()=>{switchTab("learn");ACD.mode="en";saveACD();ACV.view="home";renderLearn()}],
 ["🐣","Beginner support","On the English page, turn on 🐣 Beginner support for slower audio, easier speaking scores, more time and hints in your language. It's automatic for beginners.",null]);
GUIDES.push(["👨‍👩‍👧","Kids profiles (parent PIN)","Settings → Kids profiles: create a parent PIN and add each child with a daily time limit. Kids mode shows only stories, character games and English for kids, works offline, saves nothing about your child, and needs the PIN to exit.",openKids],
 ["💾","Back up your progress","Settings → Backup: save a backup file of your chats, memories and progress, and restore it on a new phone.",openBackup],
 ["🔤","Bigger text","Settings → Text size makes everything easier to read.",openTextSize]);
TIPS.en.push("⚡ Do your Daily 5: five minutes a day is how people really learn.","💬 Try Conversation practice. It works offline, even without AI.","👨‍👩‍👧 Kids can have their own safe profile with a time limit. Settings → Kids profiles.","💾 Save a backup in Settings so you never lose your progress.","📌 In Settings → Memory, pin the things your companion should never forget.");
TIPS.vi.push("⚡ Làm bài 5 phút mỗi ngày: đó là cách học thật sự hiệu quả.","💬 Thử Luyện hội thoại: chạy ngoại tuyến, không cần AI.","👨‍👩‍👧 Bé có thể có hồ sơ riêng an toàn, giới hạn thời gian. Cài đặt → Trẻ em.","💾 Hãy sao lưu trong Cài đặt để không mất tiến độ.");
/* ================= start ================= */
if(kidsOn()&&curKid()){setTimeout(()=>applyKids(false),300)}else{if(KIDS.active){KIDS.active="";saveKIDS()}welcomeBack()}
setInterval(()=>{if(!kidsOn())store.set("lastSeen",Date.now())},300000);

