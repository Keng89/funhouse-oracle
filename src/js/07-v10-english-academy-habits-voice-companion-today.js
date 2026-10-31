
/* English Academy course — original content written for Funhouse Oracle.
   v: [word, emoji, example, vietnamese, definition]
   g: {n:name, r:rule (English), vi:rule (Vietnamese), q:[[sentence with ___, answer, "wrong|wrong"]]}
   d: dialogue [[speaker, line]] ; s: speaking practice sentences */
const EN_LEVELS=[
 {id:"A0",n:"Starter",d:"Absolute beginner: first words and sentences",vi:"Mới bắt đầu"},
 {id:"A1",n:"Beginner",d:"Simple everyday conversations",vi:"Sơ cấp"},
 {id:"A2",n:"Elementary",d:"Past, plans and travel",vi:"Sơ trung cấp"},
 {id:"B1",n:"Intermediate",d:"Work, opinions and stories",vi:"Trung cấp"},
 {id:"B2",n:"Upper-intermediate",d:"Fluent discussions and debates",vi:"Trung cao cấp"},
 {id:"C1",n:"Advanced",d:"Professional and academic English",vi:"Cao cấp"},
 {id:"C2",n:"Mastery",d:"Native-like precision and style",vi:"Thành thạo"}];
const EN_UNITS=[
/* ---------------- A0 ---------------- */
{id:"a0-1",lv:"A0",em:"👋",t:"Hello and goodbye",can:"Say hello, your name and goodbye",
 v:[["hello","👋","Hello! I'm Anna.","xin chào"],["hi","🙋","Hi, Tom!","chào (thân mật)"],["goodbye","🫡","Goodbye! See you.","tạm biệt"],["name","🏷️","My name is Ben.","tên"],["please","🙏","A coffee, please.","làm ơn"],["thank you","💐","Thank you very much!","cảm ơn"],["yes","✅","Yes, I am.","vâng / có"],["no","❌","No, thanks.","không"]],
 g:{n:"I am / My name is",r:"Say who you are with **I am** (short: **I'm**) or **My name is**. Ask: **What's your name?**",vi:"Giới thiệu bản thân: **I am** (viết tắt **I'm**) hoặc **My name is** + tên. Hỏi tên: **What's your name?**",
  q:[["___ name is Lily.","My","I|Me"],["I ___ Tom.","am","is|are"],["What's your ___?","name","am|hello"],["___ you very much!","Thank","Please|Hello"],["Nice to ___ you.","meet","name|am"]]},
 d:[["A","Hello! What's your name?"],["B","Hi! My name is Lily. And you?"],["A","I'm Tom. Nice to meet you."],["B","Nice to meet you too!"],["A","Goodbye, Lily!"],["B","Bye, Tom! See you."]],
 s:["Hello, my name is Anna.","Nice to meet you.","Thank you very much."]},
{id:"a0-2",lv:"A0",em:"🔢",t:"Numbers 1 to 20",can:"Count and say your age and phone number",
 v:[["one","1️⃣","I have one cat.","một"],["two","2️⃣","Two coffees, please.","hai"],["three","3️⃣","I have three sisters.","ba"],["five","5️⃣","Five apples.","năm"],["ten","🔟","Ten minutes.","mười"],["twelve","🕛","Twelve o'clock.","mười hai"],["fifteen","1️⃣5️⃣","I'm fifteen.","mười lăm"],["twenty","2️⃣0️⃣","Twenty dollars.","hai mươi"]],
 g:{n:"How old are you?",r:"Say your age with **I'm** + number (+ years old). Ask: **How old are you?** Plural nouns usually add **-s**: one book, two book**s**.",vi:"Nói tuổi: **I'm** + số (+ years old). Hỏi tuổi: **How old are you?** Danh từ số nhiều thường thêm **-s**: one book, two book**s**.",
  q:[["How ___ are you?","old","age|many"],["I'm twenty years ___.","old","age|year"],["I have two ___.","cats","cat|a cat"],["One, two, ___, four.","three","five|ten"],["___ old is your brother?","How","What|Who"]]},
 d:[["A","How old are you?"],["B","I'm twenty. And you?"],["A","I'm nineteen."],["B","What's your phone number?"],["A","It's five, five, five, one, two, three, four."],["B","Thank you!"]],
 s:["I'm twenty years old.","My phone number is five five five, one two three.","One, two, three, four, five."]},
{id:"a0-3",lv:"A0",em:"🎨",t:"Colors and things",can:"Name colors and simple objects",
 v:[["red","🔴","A red apple.","màu đỏ"],["blue","🔵","The sky is blue.","màu xanh dương"],["green","🟢","Green leaves.","màu xanh lá"],["yellow","🟡","A yellow banana.","màu vàng"],["black","⚫","A black cat.","màu đen"],["white","⚪","White snow.","màu trắng"],["bag","👜","My bag is black.","cái túi"],["phone","📱","My phone is new.","điện thoại"]],
 g:{n:"It is + color",r:"Colors go **before** the noun: a **red** car (not a car red). Use **It's** (= it is) to describe one thing.",vi:"Màu đứng **trước** danh từ: a **red** car (không nói a car red). Dùng **It's** (= it is) để mô tả một vật.",
  q:[["It's a ___ car.","red","car red|reds"],["The sky ___ blue.","is","am|are"],["My bag is ___.","black","a black|blacks"],["What color ___ it?","is","are|am"],["___ a green apple.","It's","Its|It"]]},
 d:[["A","What color is your phone?"],["B","It's white. And yours?"],["A","My phone is black."],["B","I like your bag. It's a nice blue!"],["A","Thank you!"]],
 s:["My phone is black.","It's a red apple.","What color is it?"]},
{id:"a0-4",lv:"A0",em:"👨‍👩‍👧",t:"My family",can:"Talk about your family members",
 v:[["mother","👩","My mother is a teacher.","mẹ"],["father","👨","My father is tall.","bố"],["sister","👧","I have one sister.","chị / em gái"],["brother","👦","My brother is ten.","anh / em trai"],["baby","👶","The baby is happy.","em bé"],["family","👨‍👩‍👧","I love my family.","gia đình"],["friend","🤝","She is my friend.","bạn"],["grandmother","👵","My grandmother is kind.","bà"]],
 g:{n:"He / She / This is",r:"Use **he** for a man or boy, **she** for a woman or girl. Introduce people with **This is** + name. Possessive: **my, your, his, her**.",vi:"**he** = anh ấy/ông ấy (nam), **she** = cô ấy/bà ấy (nữ). Giới thiệu: **This is** + tên. Sở hữu: **my** (của tôi), **your** (của bạn), **his** (của anh ấy), **her** (của cô ấy).",
  q:[["This ___ my sister, Mai.","is","am|are"],["She is ___ mother.","my","me|I"],["My brother? ___ is twelve.","He","She|It"],["This is Linh. ___ is my friend.","She","He|It"],["Is this ___ father?","your","you|yours"]]},
 d:[["A","Who is this?"],["B","This is my sister, Mai. She is eighteen."],["A","And who is this?"],["B","That's my brother, Nam. He is a student."],["A","You have a nice family!"]],
 s:["This is my mother.","I have one brother and one sister.","I love my family."]},
{id:"a0-5",lv:"A0",em:"🏫",t:"In the classroom",can:"Understand classroom words and simple instructions",
 v:[["book","📖","Open your book.","quyển sách"],["pen","🖊️","I need a pen.","cây bút"],["teacher","🧑‍🏫","The teacher is nice.","giáo viên"],["student","🧑‍🎓","I am a student.","học sinh"],["table","🪑","The book is on the table.","cái bàn"],["door","🚪","Close the door, please.","cửa"],["listen","👂","Listen and repeat.","nghe"],["write","✍️","Write your name.","viết"]],
 g:{n:"a / an and instructions",r:"Use **a** before consonant sounds (a pen) and **an** before vowel sounds (an apple, an eraser). Instructions start with the verb: **Open** your book. **Listen.**",vi:"Dùng **a** trước phụ âm (a pen), **an** trước nguyên âm (an apple). Câu mệnh lệnh bắt đầu bằng động từ: **Open** your book (Mở sách ra).",
  q:[["I have ___ apple.","an","a|the"],["She is ___ teacher.","a","an|two"],["___ your book, please.","Open","Opens|Opening"],["Listen and ___.","repeat","repeats|to repeat"],["It's ___ umbrella.","an","a|one"]]},
 d:[["Teacher","Good morning, class! Open your books, please."],["Student","Sorry, I don't have a book."],["Teacher","No problem. Look at my book. Listen and repeat."],["Student","Okay. Thank you!"]],
 s:["Open your book, please.","I have a pen and a book.","Listen and repeat."]},
{id:"a0-6",lv:"A0",em:"🕐",t:"Days and time",can:"Say the day and the time",
 v:[["Monday","📅","Today is Monday.","thứ Hai"],["Friday","🎉","I love Friday!","thứ Sáu"],["Sunday","☀️","Sunday is my rest day.","Chủ nhật"],["today","📆","Today is sunny.","hôm nay"],["tomorrow","➡️","See you tomorrow.","ngày mai"],["morning","🌅","Good morning!","buổi sáng"],["night","🌙","Good night!","buổi tối / đêm"],["o'clock","🕗","It's eight o'clock.","giờ (đúng)"]],
 g:{n:"What time is it?",r:"Ask **What time is it?** Answer **It's** + number + **o'clock**. Days and months start with a CAPITAL letter. Use **on** with days: on Monday.",vi:"Hỏi giờ: **What time is it?** Trả lời: **It's** + số + **o'clock**. Thứ và tháng viết HOA chữ cái đầu. Dùng **on** với thứ: on Monday.",
  q:[["What time ___ it?","is","are|am"],["It's seven ___.","o'clock","clock|hours"],["See you ___ Monday.","on","in|at"],["Good ___! Time for bed.","night","morning|day"],["Today ___ Friday.","is","are|on"]]},
 d:[["A","What day is it today?"],["B","It's Friday!"],["A","Great! What time is it?"],["B","It's five o'clock."],["A","Time to go home. See you on Monday!"]],
 s:["Today is Monday.","It's eight o'clock.","See you tomorrow!"]},
/* ---------------- A1 ---------------- */
{id:"a1-1",lv:"A1",em:"🙋",t:"All about me",can:"Talk about where you are from and your job",
 v:[["country","🌏","I'm from Vietnam. It's a beautiful country.","đất nước"],["city","🏙️","I live in a big city.","thành phố"],["job","💼","What's your job?","công việc"],["doctor","🩺","My aunt is a doctor.","bác sĩ"],["engineer","👷","He is an engineer.","kỹ sư"],["live","🏠","I live in Toronto.","sống"],["work","🏢","I work in an office.","làm việc"],["speak","🗣️","I speak English and Vietnamese.","nói"]],
 g:{n:"Verb to be (am / is / are)",r:"**I am** · **you/we/they are** · **he/she/it is**. Questions swap the order: **Are you** a student? Negatives add **not**: I'm **not** tired. She **isn't** here.",vi:"**I am** · **you/we/they are** · **he/she/it is**. Câu hỏi: đảo động từ lên trước: **Are you** a student? Phủ định thêm **not**: I'm **not**..., She **isn't**...",
  q:[["Where ___ you from?","are","is|am"],["She ___ a doctor.","is","are|am"],["We ___ from Canada.","are","is|am"],["I ___ not a teacher.","am","is|are"],["___ he an engineer?","Is","Are|Am"],["They ___ students.","are","is|am"]]},
 d:[["A","Where are you from?"],["B","I'm from Vietnam, from Da Nang. And you?"],["A","I'm from Canada. What do you do?"],["B","I'm a nurse. I work in a hospital."],["A","That's great! I'm an engineer."],["B","Do you like your job?"],["A","Yes, I love it!"]],
 s:["I'm from Vietnam.","I work in an office.","I speak English and Vietnamese."]},
{id:"a1-2",lv:"A1",em:"🍜",t:"Food and drinks",can:"Say what you like and don't like to eat",
 v:[["rice","🍚","I eat rice every day.","cơm / gạo"],["noodles","🍜","I love noodles.","mì / phở"],["chicken","🍗","Chicken is my favorite.","thịt gà"],["fish","🐟","I don't like fish.","cá"],["coffee","☕","A coffee, please.","cà phê"],["tea","🍵","Green tea is healthy.","trà"],["water","💧","Can I have some water?","nước"],["breakfast","🍳","I have breakfast at seven.","bữa sáng"]],
 g:{n:"like / don't like",r:"Use **I like** / **I don't like** + noun or verb**-ing**. With he/she/it add **-s**: She like**s** tea. She **doesn't** like coffee. Ask: **Do you like...?**",vi:"**I like / I don't like** + danh từ hoặc động từ-ing. Với he/she/it thêm **-s**: She like**s**... Phủ định: **doesn't**. Hỏi: **Do you like...?**",
  q:[["I ___ like fish.","don't","doesn't|not"],["She ___ coffee.","likes","like|liking"],["___ you like noodles?","Do","Does|Are"],["He doesn't ___ tea.","like","likes|liking"],["I like ___ pizza.","eating","eat|eats"]]},
 d:[["A","What do you like for breakfast?"],["B","I like rice and eggs. And you?"],["A","I usually have bread and coffee."],["B","Do you like tea?"],["A","Not really. I don't like tea, but I love coffee!"]],
 s:["I like chicken and rice.","I don't like fish.","Can I have some water, please?"]},
{id:"a1-3",lv:"A1",em:"🏠",t:"My home",can:"Describe your home and rooms",
 v:[["kitchen","🍳","The kitchen is small.","nhà bếp"],["bedroom","🛏️","My bedroom is upstairs.","phòng ngủ"],["bathroom","🛁","The bathroom is clean.","phòng tắm"],["sofa","🛋️","There is a sofa in the living room.","ghế sofa"],["window","🪟","Open the window.","cửa sổ"],["garden","🌷","We have a small garden.","vườn"],["apartment","🏢","I live in an apartment.","căn hộ"],["near","📍","My home is near the park.","gần"]],
 g:{n:"There is / There are",r:"Use **there is** for one thing and **there are** for many: There **is** a sofa. There **are** two bedrooms. Question: **Is there** a garden? **Are there** any windows?",vi:"**There is** + một vật (có một...), **There are** + nhiều vật (có nhiều...). Hỏi: **Is there...? / Are there...?**",
  q:[["There ___ a big window.","is","are|am"],["There ___ three bedrooms.","are","is|be"],["___ there a garden?","Is","Are|Do"],["Are there ___ chairs?","any","a|an"],["There isn't ___ bathtub.","a","any|some"]]},
 d:[["A","Tell me about your home."],["B","I live in an apartment near the river."],["A","How many bedrooms are there?"],["B","There are two bedrooms and one bathroom."],["A","Is there a balcony?"],["B","Yes, there is! I drink coffee there every morning."]],
 s:["There are two bedrooms in my apartment.","My home is near the park.","There is a small garden."]},
{id:"a1-4",lv:"A1",em:"⏰",t:"My daily routine",can:"Describe what you do every day",
 v:[["get up","⏰","I get up at six.","thức dậy"],["shower","🚿","I take a shower.","tắm (vòi sen)"],["go to work","🚌","I go to work by bus.","đi làm"],["lunch","🥪","We have lunch at noon.","bữa trưa"],["usually","🔁","I usually walk.","thường thường"],["always","♾️","She always smiles.","luôn luôn"],["never","🚫","I never eat meat.","không bao giờ"],["go to bed","😴","I go to bed at eleven.","đi ngủ"]],
 g:{n:"Present simple + frequency words",r:"Use the present simple for habits: I **work**, he **works**. Frequency words go **before** the main verb: I **always** get up early. But **after** be: She is **always** happy.",vi:"Thì hiện tại đơn diễn tả thói quen: I work, he work**s**. Trạng từ tần suất (always, usually, never) đứng **trước** động từ thường nhưng **sau** động từ to be.",
  q:[["She ___ up at seven.","gets","get|getting"],["I ___ coffee in the morning.","always drink","drink always|always drinks"],["He ___ eats meat.","never","not|don't"],["What time ___ you go to bed?","do","does|are"],["My brother ___ in a bank.","works","work|working"]]},
 d:[["A","What's your daily routine?"],["B","I get up at six thirty and take a shower."],["A","Do you have breakfast?"],["B","Yes, I always have breakfast. Then I go to work by bus."],["A","What time do you finish work?"],["B","I usually finish at five. I go to bed at eleven."]],
 s:["I usually get up at seven.","I go to work by bus.","I never drink coffee at night."]},
{id:"a1-5",lv:"A1",em:"🛍️",t:"Shopping",can:"Ask for prices and buy things",
 v:[["price","🏷️","What's the price?","giá"],["cheap","💸","This shirt is cheap.","rẻ"],["expensive","💎","That phone is expensive.","đắt"],["size","📏","What size are you?","kích cỡ"],["try on","👕","Can I try it on?","mặc thử"],["pay","💳","Can I pay by card?","trả tiền"],["shirt","👔","I like this shirt.","áo sơ mi"],["shoes","👟","These shoes are nice.","giày"]],
 g:{n:"this / that / these / those + How much",r:"**this** (one, near) · **that** (one, far) · **these** (many, near) · **those** (many, far). Ask prices: **How much is** this? **How much are** these?",vi:"**this** (cái này), **that** (cái kia), **these** (những cái này), **those** (những cái kia). Hỏi giá: **How much is...? / How much are...?**",
  q:[["How much ___ these shoes?","are","is|am"],["I like ___ shirt here.","this","these|those"],["How much is ___ bag over there?","that","these|those"],["Can I ___ it on?","try","trying|tries"],["Can I pay ___ card?","by","with|on"]]},
 d:[["Customer","Excuse me, how much is this shirt?"],["Seller","It's twenty-five dollars."],["Customer","Can I try it on?"],["Seller","Sure. What size are you?"],["Customer","Medium. Oh, it fits! I'll take it."],["Seller","Great. Cash or card?"],["Customer","Card, please."]],
 s:["How much is this?","Can I try it on?","Can I pay by card, please?"]},
{id:"a1-6",lv:"A1",em:"🗺️",t:"Around town",can:"Say where places are",
 v:[["bank","🏦","The bank is next to the café.","ngân hàng"],["hospital","🏥","The hospital is near here.","bệnh viện"],["supermarket","🛒","I go to the supermarket on Sunday.","siêu thị"],["station","🚉","Where is the station?","nhà ga"],["street","🛣️","It's on Main Street.","đường phố"],["next to","↔️","The park is next to the school.","bên cạnh"],["opposite","🔄","The bank is opposite the hotel.","đối diện"],["between","↕️","The café is between the bank and the shop.","ở giữa"]],
 g:{n:"Prepositions of place",r:"**in** (inside a space), **on** (a surface or street), **next to**, **opposite**, **between A and B**, **behind**, **in front of**.",vi:"Giới từ chỉ nơi chốn: **in** (bên trong), **on** (trên bề mặt / trên đường), **next to** (cạnh), **opposite** (đối diện), **between A and B** (giữa), **behind** (sau), **in front of** (trước).",
  q:[["The café is ___ the bank and the shop.","between","next|opposite of"],["The keys are ___ the table.","on","in|at"],["The hotel is ___ to the station.","next","near|opposite"],["She lives ___ London.","in","on|at"],["The car is ___ the house.","in front of","in front|front of"]]},
 d:[["A","Excuse me, where is the bank?"],["B","It's on Green Street, next to the supermarket."],["A","Is it far?"],["B","No, it's about five minutes. Go straight and turn left."],["A","Thank you so much!"],["B","You're welcome."]],
 s:["Excuse me, where is the station?","It's next to the bank.","Go straight and turn left."]},
{id:"a1-7",lv:"A1",em:"💪",t:"Things I can do",can:"Talk about abilities",
 v:[["swim","🏊","I can swim.","bơi"],["cook","👩‍🍳","He can cook very well.","nấu ăn"],["drive","🚗","Can you drive?","lái xe"],["sing","🎤","She can sing beautifully.","hát"],["dance","💃","I can't dance!","nhảy"],["play","🎸","I can play the guitar.","chơi (nhạc cụ, thể thao)"],["ride a bike","🚲","My son can ride a bike.","đi xe đạp"],["well","👍","You speak English well!","giỏi / tốt"]],
 g:{n:"can / can't",r:"**can** + verb (no -s, no to): She **can swim** (not *cans* or *can to swim*). Negative: **can't**. Question: **Can you** drive?",vi:"**can** + động từ nguyên mẫu (không thêm -s, không có to): She **can swim**. Phủ định: **can't**. Hỏi: **Can you...?**",
  q:[["She ___ swim very well.","can","cans|can to"],["I can't ___.","dance","dancing|to dance"],["___ you play the piano?","Can","Do|Are"],["He can ___ three languages.","speak","speaks|speaking"],["Sorry, I ___ drive.","can't","not can|don't can"]]},
 d:[["A","Can you swim?"],["B","Yes, I can, but not very well. Can you?"],["A","Yes! And I can surf too."],["B","Wow! I can't surf. Can you teach me?"],["A","Sure! Let's go to the beach on Saturday."]],
 s:["I can swim, but I can't surf.","Can you play the guitar?","She can speak three languages."]},
{id:"a1-8",lv:"A1",em:"👕",t:"Right now",can:"Describe what is happening now",
 v:[["wear","👗","She is wearing a dress.","mặc"],["jacket","🧥","I'm wearing a jacket.","áo khoác"],["rain","🌧️","It's raining.","mưa"],["wait","⏳","I'm waiting for the bus.","chờ"],["watch","📺","They're watching TV.","xem"],["read","📚","He's reading a book.","đọc"],["now","⏱️","I'm busy now.","bây giờ"],["call","📞","I'm calling my mom.","gọi điện"]],
 g:{n:"Present continuous",r:"For actions happening **now**: **am/is/are + verb-ing**. I'**m eating**. She'**s reading**. Are you **waiting**? Spelling: make → mak**ing**, run → run**ning**.",vi:"Thì hiện tại tiếp diễn (đang làm gì): **am/is/are + V-ing**. I'm eating. Chính tả: make → making, run → running.",
  q:[["She ___ wearing a red dress.","is","are|am"],["I'm ___ for my friend.","waiting","wait|waits"],["What ___ you doing?","are","is|do"],["They are ___ in the park.","running","runing|run"],["It ___ raining now.","is","does|are"]]},
 d:[["A","Hi! What are you doing?"],["B","I'm waiting for the bus. It's raining!"],["A","Oh no! Are you wearing a jacket?"],["B","Yes, but I'm getting wet."],["A","I'm driving near there. I can pick you up!"],["B","Really? Thank you!"]],
 s:["I'm waiting for the bus.","It's raining right now.","What are you doing?"]},
/* ---------------- A2 ---------------- */
{id:"a2-1",lv:"A2",em:"🎒",t:"Last weekend",can:"Talk about the past with regular verbs",
 v:[["yesterday","⬅️","I stayed home yesterday.","hôm qua"],["last week","🗓️","I visited my aunt last week.","tuần trước"],["visit","🧳","We visited Hoi An.","thăm"],["watch","🎬","I watched a movie.","xem"],["clean","🧹","She cleaned the house.","dọn dẹp"],["relax","🧘","I relaxed on Sunday.","thư giãn"],["walk","🚶","We walked in the park.","đi bộ"],["ago","⌛","Two days ago.","cách đây"]],
 g:{n:"Past simple (regular verbs)",r:"Add **-ed** for finished actions: walk → walk**ed**, stay → stay**ed**, stop → stop**ped**, study → stud**ied**. Negative: **didn't** + base verb. Question: **Did you** + base verb?",vi:"Thì quá khứ đơn (động từ có quy tắc): thêm **-ed**: walk → walked. Phủ định: **didn't** + động từ nguyên mẫu. Hỏi: **Did you** + động từ nguyên mẫu?",
  q:[["I ___ a movie last night.","watched","watch|watching"],["Did you ___ your parents?","visit","visited|visits"],["She didn't ___ the house.","clean","cleaned|cleans"],["We ___ in the park yesterday.","walked","walk|walks"],["He ___ English for two hours.","studied","studyed|studies"]]},
 d:[["A","What did you do last weekend?"],["B","On Saturday I cleaned my apartment and watched a movie."],["A","Nice. Did you go out on Sunday?"],["B","Yes, I visited my grandparents. We walked by the lake."],["A","Sounds lovely!"],["B","It was! What about you?"],["A","I just relaxed at home."]],
 s:["I visited my grandparents last weekend.","We walked in the park.","Did you watch the game?"]},
{id:"a2-2",lv:"A2",em:"✈️",t:"Travel stories",can:"Tell a travel story with irregular verbs",
 v:[["went","✈️","We went to Japan.","đã đi (go)"],["saw","👀","I saw the mountains.","đã thấy (see)"],["ate","🍣","We ate sushi.","đã ăn (eat)"],["took","📸","She took many photos.","đã chụp / lấy (take)"],["bought","🛍️","I bought a souvenir.","đã mua (buy)"],["flight","🛫","The flight was long.","chuyến bay"],["hotel","🏨","The hotel was amazing.","khách sạn"],["beach","🏖️","We swam at the beach.","bãi biển"]],
 g:{n:"Past simple (irregular verbs)",r:"Many common verbs are irregular: go → **went**, see → **saw**, eat → **ate**, take → **took**, buy → **bought**, have → **had**, be → **was/were**. After **didn't** and **did** use the base form: I didn't **go**.",vi:"Động từ bất quy tắc: go → went, see → saw, eat → ate, take → took, buy → bought, be → was/were. Sau **didn't / did** dùng động từ nguyên mẫu.",
  q:[["We ___ to Bangkok last year.","went","goed|go"],["I ___ a beautiful sunset.","saw","seed|seen"],["Did you ___ any souvenirs?","buy","bought|buyed"],["The hotel ___ very clean.","was","were|is"],["They ___ a lot of photos.","took","taked|take"]]},
 d:[["A","How was your trip?"],["B","Amazing! We went to Japan for a week."],["A","What did you see?"],["B","We saw Mount Fuji and ate so much sushi."],["A","Did you buy anything?"],["B","I bought a beautiful teacup for my mom."]],
 s:["We went to Japan last summer.","I took a lot of photos.","The hotel was amazing."]},
{id:"a2-3",lv:"A2",em:"🤒",t:"Health and advice",can:"Describe symptoms and give advice",
 v:[["headache","🤕","I have a headache.","đau đầu"],["fever","🌡️","She has a fever.","sốt"],["cough","😷","I have a bad cough.","ho"],["tired","🥱","I feel tired.","mệt"],["medicine","💊","Take this medicine.","thuốc"],["rest","🛌","You need some rest.","nghỉ ngơi"],["sore throat","🗣️","I have a sore throat.","đau họng"],["appointment","📋","I have a doctor's appointment.","cuộc hẹn"]],
 g:{n:"should / shouldn't",r:"Give advice with **should** + base verb: You **should rest**. You **shouldn't** go to work. Ask for advice: **What should I do?**",vi:"Khuyên ai đó: **should** + động từ nguyên mẫu (nên). **shouldn't** (không nên). Hỏi lời khuyên: **What should I do?**",
  q:[["You ___ see a doctor.","should","should to|shoulds"],["You shouldn't ___ so late.","work","working|to work"],["What ___ I do?","should","do|am"],["I have a ___. My head hurts.","headache","cough|fever"],["She ___ drink more water.","should","shoulds|should to"]]},
 d:[["Doctor","What's the problem?"],["Patient","I have a fever and a sore throat."],["Doctor","How long have you felt like this?"],["Patient","Since Monday. I'm very tired."],["Doctor","You should rest and drink lots of water. Take this medicine twice a day."],["Patient","Thank you, doctor."]],
 s:["I have a headache and a fever.","You should get some rest.","What should I do?"]},
{id:"a2-4",lv:"A2",em:"📅",t:"Future plans",can:"Talk about plans and intentions",
 v:[["plan","🗒️","What are your plans?","kế hoạch"],["weekend","🎉","This weekend I'm going to relax.","cuối tuần"],["holiday","🌴","We're going on holiday.","kỳ nghỉ"],["save money","🐷","I'm going to save money.","tiết kiệm tiền"],["learn","🧠","I'm going to learn to drive.","học"],["move","📦","They're going to move house.","chuyển (nhà)"],["next year","➡️","Next year I'm going to travel.","năm sau"],["soon","🔜","See you soon!","sớm thôi"]],
 g:{n:"be going to",r:"For plans you have already decided: **am/is/are going to** + base verb. I'**m going to** study tonight. Are you **going to** travel? Also for predictions from what you see: Look at the clouds, it's **going to** rain.",vi:"Kế hoạch đã quyết định: **am/is/are going to** + động từ nguyên mẫu. Cũng dùng để dự đoán dựa trên dấu hiệu: It's going to rain.",
  q:[["I'm going ___ learn Spanish.","to","for|-"],["She ___ going to move to Hanoi.","is","are|will"],["Are you going to ___ tonight?","study","studying|studies"],["Look at those clouds! It's going to ___.","rain","raining|rains"],["We ___ going to visit Paris.","are","is|am"]]},
 d:[["A","Do you have any plans for the summer?"],["B","Yes! I'm going to visit my cousin in Australia."],["A","How long are you going to stay?"],["B","Three weeks. We're going to see the Great Barrier Reef."],["A","Wow. Are you going to dive?"],["B","Maybe! I'm going to take a lesson first."]],
 s:["I'm going to learn English this year.","We're going to travel next summer.","What are you going to do this weekend?"]},
{id:"a2-5",lv:"A2",em:"⚖️",t:"Comparing things",can:"Compare people, places and things",
 v:[["bigger","🐘","An elephant is bigger than a horse.","to hơn"],["faster","🏎️","A car is faster than a bike.","nhanh hơn"],["better","👍","This one is better.","tốt hơn"],["worse","👎","The weather is worse today.","tệ hơn"],["the best","🏆","She's the best singer.","tốt nhất"],["more interesting","🤩","This book is more interesting.","thú vị hơn"],["the most","🥇","the most beautiful city","nhất"],["than","↔️","Tea is cheaper than coffee.","hơn (so sánh)"]],
 g:{n:"Comparatives and superlatives",r:"Short adjectives: **-er than** / **the -est** (cheap → cheaper → the cheapest). Long adjectives: **more ... than** / **the most ...**. Irregular: good → **better** → **the best**, bad → **worse** → **the worst**.",vi:"Tính từ ngắn: thêm **-er than** (so sánh hơn) và **the -est** (so sánh nhất). Tính từ dài: **more... than / the most...**. Bất quy tắc: good → better → the best; bad → worse → the worst.",
  q:[["Hanoi is ___ than my town.","bigger","more big|biggest"],["This is the ___ day of my life!","best","better|goodest"],["English is ___ than Chinese for me.","easier","more easy|easyer"],["She is the ___ intelligent student.","most","more|-est"],["The traffic today is ___ than yesterday.","worse","badder|worst"]]},
 d:[["A","Which city do you prefer, Hanoi or Saigon?"],["B","Saigon is bigger and busier, but Hanoi is more relaxing."],["A","Which has the best food?"],["B","That's hard! I think Hanoi has the best pho."],["A","And the weather?"],["B","Saigon is warmer. Hanoi is colder in winter."]],
 s:["My city is bigger than my hometown.","This is the best coffee in town.","English is easier than I thought."]},
{id:"a2-6",lv:"A2",em:"🍽️",t:"At the restaurant",can:"Order food politely",
 v:[["menu","📜","Can I see the menu?","thực đơn"],["order","📝","Are you ready to order?","gọi món"],["would like","🙂","I'd like the soup.","muốn (lịch sự)"],["some","🥄","Can I have some bread?","một ít"],["any","❓","Do you have any vegetarian dishes?","nào / chút nào"],["bill","🧾","Can we have the bill, please?","hoá đơn"],["delicious","😋","This is delicious!","ngon"],["dessert","🍰","Would you like a dessert?","món tráng miệng"]],
 g:{n:"would like + some / any",r:"**I'd like** (= I would like) is a polite way to say I want. Use **some** in positive sentences and offers, **any** in negatives and most questions. Countable: apples, eggs. Uncountable: water, rice, bread (no -s).",vi:"**I'd like** là cách nói lịch sự của *I want*. **some** dùng trong câu khẳng định và lời mời; **any** dùng trong câu phủ định và câu hỏi. Danh từ không đếm được (water, rice, bread) không thêm -s.",
  q:[["___ like the chicken, please.","I'd","I|I'm"],["Do you have ___ vegetarian food?","any","some|a"],["Would you like ___ water?","some","any|a"],["We don't have ___ eggs.","any","some|no"],["Can I have two ___, please?","coffees","coffee|a coffee"]]},
 d:[["Waiter","Good evening! Are you ready to order?"],["Guest","Yes. I'd like the grilled fish, please."],["Waiter","Would you like any drinks?"],["Guest","Just some water, please. Do you have any vegetarian dishes?"],["Waiter","Yes, the vegetable curry is very popular."],["Guest","Great. And could we have the bill at the end?"]],
 s:["I'd like the chicken soup, please.","Could we have the bill, please?","This is delicious!"]},
{id:"a2-7",lv:"A2",em:"🌟",t:"Life experiences",can:"Talk about experiences with the present perfect",
 v:[["ever","❓","Have you ever been to Paris?","đã từng"],["never","🚫","I've never eaten snails.","chưa bao giờ"],["been","🧭","I've been to Thailand.","đã đến (be)"],["tried","🍢","Have you tried durian?","đã thử"],["met","🤝","I've met a famous singer.","đã gặp"],["seen","🎥","I've seen that movie twice.","đã xem"],["once","1️⃣","I've been there once.","một lần"],["twice","2️⃣","I've seen it twice.","hai lần"]],
 g:{n:"Present perfect for experience",r:"**have/has + past participle** for experiences in your life (time not important): I**'ve been** to Korea. **Have you ever** tried sushi? If you say WHEN, use the past simple: I **went** there in 2022.",vi:"Thì hiện tại hoàn thành (kinh nghiệm): **have/has + V3**. I've been to Korea. Hỏi: **Have you ever...?** Nếu nói rõ thời gian thì dùng quá khứ đơn: I went there in 2022.",
  q:[["Have you ever ___ to Japan?","been","went|go"],["She ___ never tried durian.","has","have|is"],["I've ___ that movie twice.","seen","saw|see"],["I went to Seoul ___.","last year","ever|never"],["___ he ever met a celebrity?","Has","Have|Did"]]},
 d:[["A","Have you ever been abroad?"],["B","Yes, I've been to Korea and Singapore."],["A","Have you ever tried kimchi?"],["B","Yes! I tried it in Seoul. It was spicy but delicious."],["A","I've never been to Korea. I'd love to go."],["B","You should! The food is amazing."]],
 s:["I've never been to Europe.","Have you ever tried Vietnamese coffee?","I've seen this movie twice."]},
{id:"a2-8",lv:"A2",em:"🧭",t:"Directions",can:"Give and understand directions",
 v:[["turn left","⬅️","Turn left at the lights.","rẽ trái"],["turn right","➡️","Turn right after the bank.","rẽ phải"],["go straight","⬆️","Go straight for two blocks.","đi thẳng"],["corner","📐","It's on the corner.","góc đường"],["traffic lights","🚦","Stop at the traffic lights.","đèn giao thông"],["cross","🚸","Cross the street.","băng qua"],["block","🏘️","It's two blocks away.","dãy nhà / khu phố"],["far","🛤️","Is it far from here?","xa"]],
 g:{n:"Imperatives and sequencing",r:"Directions use the imperative (base verb, no subject): **Go** straight. **Turn** left. Order steps with **first, then, after that, finally**.",vi:"Chỉ đường dùng câu mệnh lệnh (động từ nguyên mẫu, không có chủ ngữ): Go straight. Turn left. Sắp xếp bước: **first, then, after that, finally**.",
  q:[["___ left at the corner.","Turn","Turns|Turning"],["First go straight, ___ turn right.","then","than|after"],["___ the street at the lights.","Cross","Crossing|To cross"],["Is the museum ___ from here?","far","long|away"],["It's ___ the corner of 5th and Main.","on","in|at the"]]},
 d:[["A","Excuse me, how do I get to the museum?"],["B","Go straight for two blocks, then turn right at the traffic lights."],["A","Okay, right at the lights."],["B","After that, cross the street. The museum is on the corner."],["A","Is it far?"],["B","No, about ten minutes on foot."]],
 s:["Go straight and turn left at the lights.","Excuse me, how do I get to the station?","It's on the corner, opposite the bank."]},
/* ---------------- B1 ---------------- */
{id:"b1-1",lv:"B1",em:"💼",t:"Work and careers",can:"Describe your career and experience",
 v:[["colleague","👥","My colleagues are supportive.","đồng nghiệp"],["manager","🧑‍💼","I report to the manager.","quản lý"],["salary","💵","The salary is competitive.","lương"],["experience","📈","I have five years of experience.","kinh nghiệm"],["responsible for","📌","I'm responsible for marketing.","chịu trách nhiệm"],["deadline","⏰","We have a tight deadline.","hạn chót"],["promotion","🚀","She got a promotion.","thăng chức"],["since","🕰️","I've worked here since 2020.","kể từ"]],
 g:{n:"Present perfect with for / since",r:"For situations that started in the past and continue now: **have/has + past participle** + **for** (a period: for three years) or **since** (a starting point: since 2020). Ask: **How long have you...?**",vi:"Hiện tại hoàn thành cho việc bắt đầu trong quá khứ và còn tiếp diễn: **have/has + V3** + **for** (khoảng thời gian) hoặc **since** (mốc thời gian). Hỏi: **How long have you...?**",
  q:[["I've worked here ___ five years.","for","since|from"],["She has lived in Toronto ___ 2019.","since","for|from"],["How long ___ you known him?","have","did|are"],["They ___ been colleagues for ages.","have","has|are"],["I'm responsible ___ the budget.","for","of|to"]]},
 d:[["Interviewer","Tell me about your current job."],["Candidate","I'm a project coordinator. I've worked at my company since 2021."],["Interviewer","What are you responsible for?"],["Candidate","I'm responsible for schedules and budgets, and I work closely with the design team."],["Interviewer","Why do you want to leave?"],["Candidate","I'm looking for more responsibility and new challenges."]],
 s:["I've worked here for three years.","I'm responsible for customer service.","I'm looking for new challenges."]},
{id:"b1-2",lv:"B1",em:"🔭",t:"Predictions and promises",can:"Make predictions, offers and promises",
 v:[["probably","🤔","It will probably rain.","có lẽ"],["definitely","💯","I'll definitely come.","chắc chắn"],["promise","🤞","I promise I'll call you.","hứa"],["offer","🙋","I'll help you with that.","đề nghị (giúp)"],["predict","🔮","Experts predict growth.","dự đoán"],["future","🌅","In the future, robots will cook.","tương lai"],["decide","⚡","I've decided to quit.","quyết định"],["likely","📊","It's likely to be busy.","có khả năng"]],
 g:{n:"will vs be going to",r:"**will**: decisions made now (I'**ll** have the tea), offers and promises (I'**ll** help you), predictions from opinion (I think it **will** be fun). **going to**: plans decided before, and predictions with evidence.",vi:"**will**: quyết định ngay lúc nói, lời đề nghị, lời hứa, dự đoán theo ý kiến. **going to**: kế hoạch đã định trước và dự đoán có căn cứ.",
  q:[["The phone is ringing. I ___ get it!","'ll","'m going to|am"],["I promise I ___ be late again.","won't","don't|am not"],["We ___ visit Rome next month. We booked it!","are going to","will|are"],["I think robots ___ do most jobs.","will","are|going"],["Look out! You're ___ fall!","going to","will|go to"]]},
 d:[["A","Do you think AI will change our jobs?"],["B","Definitely. I think many tasks will be automated."],["A","Are you going to learn new skills?"],["B","Yes, I'm going to take a data course next month."],["A","Good idea. I'll send you a link to a free one."],["B","Thanks! I promise I'll finish it this time."]],
 s:["I think it will be a great year.","I'll help you with your homework.","I'm going to start a new course next month."]},
{id:"b1-3",lv:"B1",em:"💬",t:"Opinions and feelings",can:"Give opinions, agree and disagree politely",
 v:[["in my opinion","🗨️","In my opinion, it's too expensive.","theo ý kiến tôi"],["agree","🤝","I completely agree.","đồng ý"],["disagree","🙅","I'm afraid I disagree.","không đồng ý"],["point","☝️","That's a good point.","ý / quan điểm"],["bored","😑","I was bored in the meeting.","chán (cảm thấy)"],["boring","😴","The meeting was boring.","chán (gây chán)"],["excited","🤩","I'm excited about the trip.","hào hứng"],["frustrating","😤","The traffic is frustrating.","gây bực bội"]],
 g:{n:"-ed vs -ing adjectives",r:"**-ed** describes how a person feels (I'm **bored**, **interested**, **tired**). **-ing** describes the thing that causes the feeling (The film is **boring**, **interesting**, **tiring**).",vi:"Tính từ đuôi **-ed** mô tả cảm xúc của người (I'm bored = tôi thấy chán). Đuôi **-ing** mô tả tính chất của sự vật gây ra cảm xúc (The film is boring = bộ phim chán).",
  q:[["I'm really ___ in history.","interested","interesting|interest"],["The lecture was so ___.","boring","bored|bore"],["She felt ___ after the long flight.","exhausted","exhausting|exhaust"],["That's a ___ question!","surprising","surprised|surprise"],["I'm ___ I disagree.","afraid","sorry that|fear"]]},
 d:[["A","What did you think of the new office design?"],["B","In my opinion, it's a bit confusing. Everything is open."],["A","I see your point, but I think it's more relaxing."],["B","Maybe. The noise is frustrating, though."],["A","That's true. We could ask for some quiet rooms."],["B","I completely agree with that!"]],
 s:["In my opinion, that's a great idea.","I see your point, but I disagree.","The movie was boring, so I was bored."]},
{id:"b1-4",lv:"B1",em:"📏",t:"Rules and obligations",can:"Talk about rules at work, school and home",
 v:[["must","❗","You must wear a seatbelt.","phải (bắt buộc)"],["have to","📋","I have to work on Saturday.","phải (do hoàn cảnh)"],["allowed","✅","You're not allowed to smoke here.","được phép"],["rule","📜","Those are the rules.","quy tắc"],["uniform","🦺","We have to wear a uniform.","đồng phục"],["optional","🤷","The meeting is optional.","không bắt buộc"],["forbidden","⛔","Phones are forbidden in the exam.","bị cấm"],["permission","🗝️","Ask for permission first.","sự cho phép"]],
 g:{n:"must / have to / don't have to / mustn't",r:"**must / have to** = it's necessary. **mustn't** = it's prohibited (don't do it!). **don't have to** = it's not necessary (you can choose). Past: **had to**.",vi:"**must / have to** = phải. **mustn't** = không được phép (cấm). **don't have to** = không cần phải (tùy bạn). Quá khứ: **had to**.",
  q:[["You ___ smoke in the hospital. It's forbidden.","mustn't","don't have to|haven't to"],["It's Sunday, so I ___ work.","don't have to","mustn't|haven't"],["Yesterday I ___ stay late at the office.","had to","must|have to"],["Students ___ wear a uniform at my school.","have to","has to|must to"],["Are we ___ to use phones here?","allowed","allow|permitted to"]]},
 d:[["New employee","Do I have to wear a suit every day?"],["Manager","No, you don't have to. Smart casual is fine."],["New employee","Are there any important rules?"],["Manager","You must sign in when you arrive, and you mustn't share your password."],["New employee","Got it. Do I have to work weekends?"],["Manager","Only during the holiday season."]],
 s:["You mustn't use your phone while driving.","I don't have to work tomorrow.","Do I have to bring anything?"]},
{id:"b1-5",lv:"B1",em:"🔀",t:"If and when",can:"Talk about real possibilities",
 v:[["if","🔀","If it rains, we'll stay home.","nếu"],["unless","🚧","I'll go unless it rains.","trừ khi"],["as soon as","⚡","I'll call you as soon as I arrive.","ngay khi"],["miss","😞","If you're late, you'll miss the bus.","lỡ / nhớ"],["chance","🎲","There's a good chance.","khả năng / cơ hội"],["result","📊","The result will be great.","kết quả"],["in case","🧯","Take an umbrella in case it rains.","phòng khi"],["condition","📝","On one condition.","điều kiện"]],
 g:{n:"First conditional",r:"For real future possibilities: **If + present simple, will + verb**. If you **study**, you **will pass**. Don't use *will* after *if*: ~~If it will rain~~ → If it **rains**. **unless** = if not.",vi:"Câu điều kiện loại 1 (có thể xảy ra): **If + hiện tại đơn, will + động từ**. Không dùng will sau if. **unless** = if not (trừ khi).",
  q:[["If it ___ tomorrow, we'll cancel the picnic.","rains","will rain|rained"],["If you study hard, you ___ pass.","will","would|are"],["I won't go ___ you come with me.","unless","if|when"],["I'll text you as soon as I ___ home.","get","will get|got"],["Take a jacket ___ it gets cold.","in case","unless|if not"]]},
 d:[["A","Are you coming to the beach on Saturday?"],["B","If the weather is good, I'll definitely come."],["A","And if it rains?"],["B","If it rains, we'll go to the cinema instead."],["A","Perfect. I'll book tickets just in case."],["B","Great. Call me as soon as you know."]],
 s:["If it rains, I'll stay at home.","I'll call you as soon as I arrive.","Take an umbrella in case it rains."]},
{id:"b1-6",lv:"B1",em:"☎️",t:"Polite requests",can:"Make polite requests on the phone and by email",
 v:[["could","🙏","Could you help me?","có thể (lịch sự)"],["would you mind","😊","Would you mind closing the window?","phiền bạn... không"],["available","🟢","Are you available on Monday?","rảnh / có sẵn"],["reschedule","🔁","Can we reschedule the meeting?","dời lịch"],["confirm","✔️","Could you confirm the time?","xác nhận"],["attach","📎","I've attached the file.","đính kèm"],["hold on","✋","Hold on a moment, please.","chờ máy"],["get back to","↩️","I'll get back to you tomorrow.","phản hồi lại"]],
 g:{n:"Polite requests",r:"More polite: **Could you...? Would you...? Would you mind + -ing...? I was wondering if you could...** Answer *Would you mind*: **Not at all** (= yes, I'll do it).",vi:"Yêu cầu lịch sự: **Could you...? Would you...? Would you mind + V-ing...?** Trả lời *Would you mind*: **Not at all** nghĩa là *không phiền, tôi sẽ làm*.",
  q:[["Would you mind ___ the door?","closing","to close|close"],["___ you send me the file, please?","Could","Should|Must"],["I was wondering if you ___ help me.","could","can to|will"],["I'll get back ___ you tomorrow.","to","for|at"],["Are you ___ for a call at 3?","available","free to|availability"]]},
 d:[["A","Hello, this is Minh from Blue Tech. Could I speak to Ms. Garcia?"],["B","I'm afraid she's in a meeting. Can I take a message?"],["A","Yes, please. Could you ask her to call me back?"],["B","Of course. Could you spell your name, please?"],["A","Sure, it's M-I-N-H. Would you mind giving her my number too?"],["B","Not at all. She'll get back to you this afternoon."]],
 s:["Could you send me the report, please?","Would you mind calling me back later?","I'll get back to you tomorrow."]},
{id:"b1-7",lv:"B1",em:"📖",t:"Telling stories",can:"Tell a story with background and events",
 v:[["suddenly","⚡","Suddenly, the lights went out.","đột nhiên"],["while","⏳","While I was cooking, the phone rang.","trong khi"],["happen","❗","What happened next?","xảy ra"],["realize","💡","I realized I'd lost my keys.","nhận ra"],["luckily","🍀","Luckily, nobody was hurt.","may mắn thay"],["in the end","🏁","In the end, it was fine.","cuối cùng"],["scared","😱","I was so scared.","sợ hãi"],["laugh","😂","We couldn't stop laughing.","cười"]],
 g:{n:"Past continuous vs past simple",r:"**Past continuous** (was/were + -ing) sets the scene or a longer action: I **was walking** home. **Past simple** for the short event that interrupts: when it **started** to rain. Use **while** with the longer action.",vi:"Quá khứ tiếp diễn (**was/were + V-ing**) cho bối cảnh/hành động đang diễn ra; quá khứ đơn cho hành động ngắn xen vào. I was walking home when it started to rain.",
  q:[["I ___ dinner when the phone rang.","was cooking","cooked|am cooking"],["While we were driving, we ___ a deer.","saw","were seeing|see"],["What ___ you doing at 8 pm?","were","was|did"],["She ___ when the lights went out.","was reading","read|reads"],["___, nobody was hurt.","Luckily","Lucky|Luck"]]},
 d:[["A","Something crazy happened to me yesterday."],["B","Really? What happened?"],["A","I was walking to work when a dog started following me."],["B","Oh no! Were you scared?"],["A","A little! But then I realized it was my neighbor's dog."],["B","Ha! So what did you do?"],["A","In the end, I walked him home and was late for work!"]],
 s:["I was walking home when it started to rain.","Suddenly, the lights went out.","In the end, everything was fine."]},
{id:"b1-8",lv:"B1",em:"🤖",t:"Technology",can:"Describe how things are made and used",
 v:[["invent","💡","The telephone was invented in 1876.","phát minh"],["device","📟","This device is made in Korea.","thiết bị"],["download","⬇️","The app is downloaded by millions.","tải xuống"],["update","🔄","The system is updated every week.","cập nhật"],["password","🔑","Never share your password.","mật khẩu"],["online","🌐","Most shopping is done online.","trực tuyến"],["charge","🔌","My phone needs charging.","sạc"],["screen","🖥️","The screen is cracked.","màn hình"]],
 g:{n:"The passive (present and past)",r:"Use the passive when the action is more important than who does it: **is/are + past participle** (present), **was/were + past participle** (past). Phones **are made** in factories. The app **was created** in 2010. Add **by** for the doer.",vi:"Câu bị động: **is/are + V3** (hiện tại), **was/were + V3** (quá khứ). Dùng khi hành động quan trọng hơn người làm. Thêm **by** + người làm nếu cần.",
  q:[["English ___ spoken all over the world.","is","are|was"],["The phone ___ invented by Bell.","was","is|were"],["These laptops ___ made in Taiwan.","are","is|were"],["The website was ___ last year.","designed","design|designing"],["Millions of emails ___ sent every day.","are","is|was"]]},
 d:[["A","Do you know how smartphones are made?"],["B","Well, most parts are produced in Asia, then they're assembled in big factories."],["A","And the software?"],["B","It's developed by teams all over the world and updated regularly."],["A","Amazing. When was the first smartphone invented?"],["B","I think the first one was released in the 1990s."]],
 s:["English is spoken in many countries.","The app was created by two students.","My phone is updated every month."]},
/* ---------------- B2 ---------------- */
{id:"b2-1",lv:"B2",em:"💭",t:"Imagine if...",can:"Talk about imaginary situations",
 v:[["imagine","💭","Imagine you won the lottery.","tưởng tượng","to form a picture in your mind"],["lottery","🎰","If I won the lottery, I'd travel.","xổ số","a game where you win money by chance"],["afford","💳","I can't afford a new car.","đủ khả năng chi trả","to have enough money for something"],["hypothetical","🤔","It's a hypothetical question.","giả định","imagined, not real"],["dilemma","⚖️","That's a real dilemma.","tình thế khó xử","a difficult choice between two options"],["realistic","🎯","Let's be realistic.","thực tế","practical and sensible"],["opportunity","🚪","It's a great opportunity.","cơ hội","a chance to do something good"],["regardless","🛡️","I'd do it regardless of the cost.","bất kể","without being affected by"]],
 g:{n:"Second conditional",r:"For imaginary or unlikely situations: **If + past simple, would + verb**. If I **had** more time, I **would learn** the piano. Use **were** for all persons in formal English: If I **were** you, I'd accept.",vi:"Câu điều kiện loại 2 (không có thật ở hiện tại): **If + quá khứ đơn, would + V**. Dùng **were** cho mọi ngôi: If I were you, I'd...",
  q:[["If I ___ rich, I'd buy an island.","were","am|will be"],["What ___ you do if you lost your job?","would","will|did"],["If she had more time, she ___ volunteer.","would","will|could to"],["If I were you, I ___ take the offer.","'d","'ll|am"],["I ___ go if I had the money.","would","will|did"]]},
 d:[["A","What would you do if you won a million dollars?"],["B","I'd pay off my parents' house first, then travel the world."],["A","Would you quit your job?"],["B","Honestly? I don't think so. I'd be bored without work."],["A","If I were you, I'd start a business."],["B","That's not a bad idea, if I had a good one!"]],
 s:["If I won the lottery, I'd travel the world.","If I were you, I'd take the job.","What would you do in my situation?"]},
{id:"b2-2",lv:"B2",em:"🗞️",t:"He said, she said",can:"Report what other people said",
 v:[["claim","📣","He claimed he was innocent.","khẳng định","to say something is true without proof"],["admit","🙇","She admitted making a mistake.","thừa nhận","to agree that something bad is true"],["deny","🙅","He denied breaking the window.","phủ nhận","to say something is not true"],["mention","💬","She mentioned a new project.","đề cập","to say something briefly"],["announce","📢","They announced the results.","thông báo","to tell people officially"],["warn","⚠️","He warned me not to go.","cảnh báo","to tell someone about a danger"],["suggest","💡","She suggested taking a break.","gợi ý","to put forward an idea"],["explain","🧑‍🏫","He explained why he was late.","giải thích","to make something clear"]],
 g:{n:"Reported speech",r:"When reporting, tenses usually move back: \"I **am** tired\" → She said (that) she **was** tired. \"I **will** call\" → He said he **would** call. Questions become statements: \"Where **do you live**?\" → She asked where I **lived**. Pronouns and time words change: *tomorrow* → *the next day*.",vi:"Câu tường thuật: lùi thì (am → was, will → would, present perfect → past perfect). Câu hỏi đổi thành trật tự câu kể: She asked where I lived. Đổi đại từ và từ chỉ thời gian: tomorrow → the next day.",
  q:[["\"I'm busy.\" → She said she ___ busy.","was","is|were"],["\"I'll help.\" → He said he ___ help.","would","will|can"],["\"Where do you work?\" → She asked where I ___.","worked","do work|work"],["He admitted ___ the money.","taking","to take|take"],["She warned me ___ touch it.","not to","to not|don't"]]},
 d:[["A","Did you talk to the landlord?"],["B","Yes. He said he would fix the heating by Friday."],["A","Did he mention the rent?"],["B","He claimed that prices had gone up everywhere."],["A","Did you ask if it was negotiable?"],["B","I did. He said he'd think about it and get back to me."]],
 s:["She said she was really tired.","He asked me where I lived.","They told us the meeting had been cancelled."]},
{id:"b2-3",lv:"B2",em:"🔗",t:"Describing with detail",can:"Add precise information with relative clauses",
 v:[["whose","👤","The woman whose car was stolen.","của người mà","used to show possession in relative clauses"],["which","🔖","The book, which was a gift, is great.","cái mà","refers to things"],["where","📍","The town where I grew up.","nơi mà","refers to places"],["landmark","🗽","A famous landmark.","địa danh","a well-known building or place"],["grew up","🌱","I grew up in a small village.","lớn lên","spent your childhood"],["remarkable","⭐","A remarkable woman.","đáng chú ý","unusual and impressive"],["inspire","✨","She inspires everyone.","truyền cảm hứng","to give people ideas and energy"],["neighborhood","🏘️","A quiet neighborhood.","khu phố","the area around where you live"]],
 g:{n:"Relative clauses",r:"**who** (people), **which** (things), **that** (people/things, defining only), **whose** (possession), **where** (places). Non-defining clauses add extra info with commas and never use *that*: My sister, **who** lives in Paris, is a chef.",vi:"Mệnh đề quan hệ: **who** (người), **which** (vật), **that** (người/vật – chỉ trong mệnh đề xác định), **whose** (sở hữu), **where** (nơi chốn). Mệnh đề không xác định có dấu phẩy và không dùng *that*.",
  q:[["The man ___ lives next door is a pilot.","who","which|whose"],["That's the café ___ we first met.","where","which|who"],["She's the artist ___ paintings sold out.","whose","who's|which"],["My phone, ___ is two years old, still works.","which","that|who"],["The town ___ I grew up is tiny.","where","which|that"]]},
 d:[["A","Who's the woman in that photo?"],["B","That's my aunt, who taught me to cook."],["A","And where was it taken?"],["B","In the village where my mother grew up. It's a place which hasn't changed in fifty years."],["A","It looks beautiful."],["B","It is. It's the kind of place that inspires you to slow down."]],
 s:["She's the teacher who inspired me most.","This is the town where I grew up.","My laptop, which is very old, still works."]},
{id:"b2-4",lv:"B2",em:"🎤",t:"The job interview",can:"Handle a job interview with confidence",
 v:[["strength","💪","My main strength is communication.","điểm mạnh","something you are good at"],["weakness","🩹","My weakness is impatience.","điểm yếu","something you are not good at"],["achieve","🏅","I achieved my sales target.","đạt được","to succeed in doing something"],["candidate","🧑‍💼","She's the best candidate.","ứng viên","a person applying for a job"],["handle","🛠️","How do you handle stress?","xử lý","to deal with a situation"],["goal","🎯","My goal is to lead a team.","mục tiêu","something you want to achieve"],["teamwork","🤝","Teamwork is essential.","làm việc nhóm","working well together"],["consider","🧐","I'd consider relocating.","cân nhắc","to think about carefully"]],
 g:{n:"Gerunds and infinitives",r:"Some verbs take **-ing**: enjoy, avoid, consider, finish, suggest (I enjoy **working** in teams). Some take **to + verb**: want, hope, decide, plan, manage (I hope **to lead** a team). After prepositions always use **-ing**: good **at solving**, interested **in learning**.",vi:"Một số động từ đi với **V-ing**: enjoy, avoid, consider, finish, suggest. Một số đi với **to + V**: want, hope, decide, plan, manage. Sau giới từ luôn dùng **V-ing**: good at solving.",
  q:[["I enjoy ___ with people.","working","to work|work"],["I hope ___ a team one day.","to lead","leading|lead"],["I'm good at ___ problems.","solving","solve|to solve"],["Would you consider ___ abroad?","relocating","to relocate|relocate"],["I managed ___ sales by 30%.","to increase","increasing|increase"]]},
 d:[["Interviewer","Why should we hire you?"],["Candidate","I have a strong record of achieving targets, and I genuinely enjoy solving problems."],["Interviewer","What's your biggest weakness?"],["Candidate","I used to avoid delegating, but I've learned to trust my team, and it's made us much more efficient."],["Interviewer","Where do you see yourself in five years?"],["Candidate","I'd like to be leading a team and mentoring new staff."]],
 s:["I enjoy working with people from different backgrounds.","I managed to increase sales by twenty percent.","I'm really interested in learning new skills."]},
{id:"b2-5",lv:"B2",em:"🧩",t:"Building an argument",can:"Connect and contrast ideas clearly",
 v:[["although","🔀","Although it was late, we continued.","mặc dù","despite the fact that"],["however","↪️","It's cheap. However, it's slow.","tuy nhiên","but (used between sentences)"],["whereas","⚖️","I like tea, whereas she likes coffee.","trong khi (đối lập)","compared with the fact that"],["moreover","➕","Moreover, it's eco-friendly.","hơn nữa","in addition"],["therefore","➡️","Therefore, we must act now.","vì vậy","for that reason"],["despite","🧱","Despite the rain, we went out.","bất chấp","without being affected by"],["evidence","🔍","There's little evidence.","bằng chứng","facts that show something is true"],["consequently","🧮","Consequently, prices rose.","do đó","as a result"]],
 g:{n:"Linking words",r:"Contrast: **although** + clause, **despite / in spite of** + noun or -ing, **however** (new sentence), **whereas** (two-way comparison). Addition: **moreover, furthermore, in addition**. Result: **therefore, consequently, as a result**.",vi:"Từ nối: tương phản: **although** + mệnh đề, **despite** + danh từ/V-ing, **however** (đầu câu mới), **whereas**. Thêm ý: **moreover, furthermore**. Kết quả: **therefore, consequently**.",
  q:[["___ it was raining, we played football.","Although","Despite|However"],["___ the rain, we played football.","Despite","Although|Whereas"],["The plan is cheap. ___, it's risky.","However","Although|Despite"],["Prices rose. ___, sales fell.","Consequently","Whereas|Although"],["I love cities, ___ my wife prefers the country.","whereas","moreover|therefore"]]},
 d:[["A","Should cities ban cars from the center?"],["B","I think so. Although some drivers would complain, the air would be much cleaner."],["A","However, what about deliveries and disabled people?"],["B","Good point. Therefore, there should be exceptions."],["A","And despite the benefits, shops might lose customers."],["B","Actually, the evidence suggests the opposite: more people walk, so they shop more."]],
 s:["Although it's expensive, it's worth it.","Despite the problems, we finished on time.","Therefore, I believe we should change the plan."]},
{id:"b2-6",lv:"B2",em:"🕰️",t:"Regrets and wishes",can:"Talk about past regrets and wishes",
 v:[["regret","😔","I regret not studying harder.","hối tiếc","to feel sorry about something you did or didn't do"],["wish","🌠","I wish I could fly.","ước","to want something that is not true now"],["if only","🙏","If only I had listened!","giá mà","used to express a strong wish"],["mistake","❌","It was a big mistake.","sai lầm","something done wrong"],["lesson","📘","I learned my lesson.","bài học","something you learn from experience"],["chance","🎲","I missed my chance.","cơ hội","an opportunity"],["hindsight","🔙","In hindsight, it was obvious.","nhìn lại","understanding after something happens"],["should have","↩️","I should have called.","lẽ ra nên","used to criticize a past action"]],
 g:{n:"Third conditional, wish and should have",r:"Past imaginary: **If + had + past participle, would have + past participle**. If I **had left** earlier, I **would have caught** the train. Wishes: **I wish + past simple** (now) / **past perfect** (past). Criticism: **should have + past participle**.",vi:"Câu điều kiện loại 3 (không có thật trong quá khứ): **If + had + V3, would have + V3**. **I wish** + quá khứ đơn (hiện tại) / quá khứ hoàn thành (quá khứ). **should have + V3** = lẽ ra nên.",
  q:[["If I had studied, I ___ passed.","would have","would|had"],["I wish I ___ more time now.","had","have|would have"],["I wish I ___ that email yesterday!","hadn't sent","didn't send|haven't sent"],["You ___ called me. I was worried!","should have","should|must"],["If she ___ the bus, she'd have been on time.","hadn't missed","didn't miss|wouldn't miss"]]},
 d:[["A","You look stressed. What's wrong?"],["B","I missed the deadline for the scholarship. I wish I'd checked the date."],["A","Oh no. Couldn't you ask for an extension?"],["B","I should have asked last week. If I'd emailed them earlier, they might have said yes."],["A","Well, in hindsight it's easy to say. Next year you'll be ready."],["B","True. Lesson learned!"]],
 s:["If I had known, I would have helped you.","I wish I had studied harder at school.","I should have called you earlier."]},
/* ---------------- C1 ---------------- */
{id:"c1-1",lv:"C1",em:"🎭",t:"Emphasis and inversion",can:"Add emphasis like a confident speaker",
 v:[["seldom","🦄","Seldom have I seen such talent.","hiếm khi","rarely"],["not only","➕","Not only is it cheap, but it's also fast.","không những","used to add a surprising point"],["no sooner","⏩","No sooner had I sat down than it rang.","vừa mới... thì","immediately after"],["under no circumstances","⛔","Under no circumstances should you leave.","trong bất kỳ hoàn cảnh nào cũng không","never"],["what I need","🎯","What I need is a holiday.","điều tôi cần","cleft structure for emphasis"],["genuinely","💎","I'm genuinely impressed.","thật sự","truly, sincerely"],["striking","⚡","A striking difference.","nổi bật","very noticeable"],["utterly","💯","I was utterly exhausted.","hoàn toàn","completely"]],
 g:{n:"Inversion and cleft sentences",r:"After negative adverbials at the start, invert subject and auxiliary: **Never have I** seen... **Not only did she** win... **Rarely do we**... Cleft sentences add focus: **What** I love **is** the food. **It was** Maria **who** called.",vi:"Đảo ngữ sau trạng từ phủ định đầu câu: **Never have I seen...**, **Not only did she...**. Câu chẻ để nhấn mạnh: **What I love is...**, **It was Maria who...**",
  q:[["Never ___ such a beautiful view.","have I seen","I have seen|I saw"],["Not only ___ late, but he also forgot the files.","was he","he was|he is"],["No sooner had we arrived ___ it started to rain.","than","then|when"],["What I need ___ a long holiday.","is","are|it's"],["It was Tom ___ broke the window.","who","which|what"]]},
 d:[["A","How was the conference?"],["B","Honestly, rarely have I learned so much in two days."],["A","High praise! What stood out?"],["B","What impressed me most was the keynote. Not only was it insightful, but it was hilarious."],["A","I'm genuinely jealous. Did you network?"],["B","Absolutely. No sooner had the talk ended than people were swapping cards."]],
 s:["Never have I seen anything like it.","What I really need is a break.","Not only is it affordable, but it's also beautiful."]},
{id:"c1-2",lv:"C1",em:"🎓",t:"Academic and careful language",can:"Express ideas cautiously and objectively",
 v:[["arguably","🗣️","It is arguably the best solution.","có thể cho là","it can be argued that"],["tend to","📉","Prices tend to rise in winter.","có xu hướng","to usually happen"],["indicate","📍","The data indicates a decline.","cho thấy","to show or suggest"],["significant","📊","A significant increase.","đáng kể","large or important enough to notice"],["assume","🤔","We cannot assume that.","giả định","to accept as true without proof"],["approximately","≈","Approximately half agreed.","xấp xỉ","about, roughly"],["a wide range of","🌈","A wide range of options.","nhiều loại","many different kinds"],["to some extent","🎚️","I agree to some extent.","ở một mức độ nào đó","partly"]],
 g:{n:"Hedging",r:"Academic and professional English avoids sounding too certain. Use **may / might / could**, **it seems that**, **it could be argued that**, **tend to**, **to some extent**, **appear to**, and impersonal structures: **It is widely believed that...**",vi:"Văn phong học thuật tránh khẳng định tuyệt đối. Dùng **may/might/could, it seems that, it could be argued that, tend to, to some extent, appear to, It is widely believed that...**",
  q:[["It ___ be argued that the policy failed.","could","must|should"],["The results ___ to suggest a link.","appear","appearing|appears"],["Young people ___ to use social media more.","tend","tends|are tending"],["I agree ___ some extent.","to","in|at"],["It is widely ___ that exercise improves mood.","believed","believing|believe"]]},
 d:[["Professor","What do your findings show?"],["Student","The data seems to indicate a significant link between sleep and memory."],["Professor","Can you say it causes better memory?"],["Student","Not definitively. It could be argued that other factors are involved, such as diet."],["Professor","Good. And the limitations?"],["Student","The sample was relatively small, so the results may not apply to everyone."]],
 s:["It could be argued that the plan has failed.","The data seems to indicate a significant change.","I agree with you to some extent."]},
{id:"c1-3",lv:"C1",em:"🧷",t:"Phrasal verbs that matter",can:"Use common phrasal verbs naturally",
 v:[["come up with","💡","She came up with a brilliant idea.","nghĩ ra","to think of an idea"],["put off","⏸️","Don't put off your homework.","trì hoãn","to delay"],["figure out","🧩","I can't figure out the problem.","tìm ra / hiểu ra","to understand or solve"],["run out of","🪫","We've run out of milk.","hết (cái gì)","to use all of something"],["look forward to","🔭","I look forward to hearing from you.","mong đợi","to feel happy about a future event"],["bring up","☝️","She brought up an interesting point.","đề cập","to mention a topic"],["turn down","👎","He turned down the offer.","từ chối","to refuse"],["get along with","🤝","I get along with my boss.","hòa hợp với","to have a good relationship"]],
 g:{n:"Phrasal verbs: grammar",r:"Separable verbs can split with a noun and must split with a pronoun: turn **the offer** down / turn **it** down (not ~~turn down it~~). Three-part verbs never split: **look forward to**, **run out of**, **get along with**. After **look forward to**, use **-ing**.",vi:"Cụm động từ tách được: có thể tách với danh từ, bắt buộc tách với đại từ: turn it down. Cụm ba từ không tách: look forward to, run out of. Sau **look forward to** dùng **V-ing**.",
  q:[["They offered me the job, but I turned ___.","it down","down it|it off"],["I look forward to ___ you.","meeting","meet|met"],["We've run ___ coffee.","out of","off|out"],["Who came up ___ this plan?","with","for|to"],["Don't put ___ until tomorrow.","it off","off it|it out"]]},
 d:[["A","Did you figure out the budget problem?"],["B","Not yet. We've run out of ideas, honestly."],["A","Why don't we bring it up at tomorrow's meeting?"],["B","Good idea. Maybe someone will come up with a solution."],["A","And let's not put it off any longer."],["B","Agreed. I'm actually looking forward to sorting it out."]],
 s:["She came up with a brilliant idea.","I'm looking forward to hearing from you.","We've run out of time."]},
{id:"c1-4",lv:"C1",em:"🏦",t:"Business idioms",can:"Understand and use common business idioms",
 v:[["ballpark figure","⚾","Give me a ballpark figure.","con số ước chừng","a rough estimate"],["touch base","📍","Let's touch base next week.","liên lạc lại","to make brief contact"],["think outside the box","📦","We need to think outside the box.","suy nghĩ sáng tạo","to think creatively"],["on the same page","📄","Are we on the same page?","cùng quan điểm","in agreement"],["the bottom line","📉","The bottom line is profit.","điều cốt lõi","the most important fact"],["cut corners","✂️","Don't cut corners on safety.","làm ẩu để tiết kiệm","to do something badly to save time or money"],["back to square one","🔙","We're back to square one.","quay lại từ đầu","back to the beginning"],["win-win","🏆","It's a win-win situation.","đôi bên cùng có lợi","good for everyone"]],
 g:{n:"Idioms in context",r:"Idioms are fixed: you can't usually change the words (~~think outside the square~~). Use them sparingly in meetings and emails to sound natural, and never in very formal documents.",vi:"Thành ngữ là cụm cố định, không tự ý đổi từ. Dùng vừa phải trong họp và email để tự nhiên; tránh dùng trong văn bản rất trang trọng.",
  q:[["Can you give me a ___ figure?","ballpark","baseball|park"],["Let's touch ___ on Friday.","base","bases|home"],["We need to think outside the ___.","box","square|circle"],["Just to make sure we're on the same ___.","page","line|book"],["The client said no, so we're back to square ___.","one","zero|first"]]},
 d:[["Manager","So, what's the bottom line on the new campaign?"],["Analyst","A ballpark figure is twenty thousand dollars."],["Manager","That's more than we planned. Can we cut costs without cutting corners?"],["Analyst","If we think outside the box and use our own videos, yes."],["Manager","Great. Let's touch base on Thursday to make sure we're on the same page."],["Analyst","Sounds like a win-win."]],
 s:["Let's touch base next week.","Can you give me a ballpark figure?","We need to think outside the box."]},
{id:"c1-5",lv:"C1",em:"🕵️",t:"Deduction",can:"Speculate about the past and present",
 v:[["must have","🔎","She must have forgotten.","chắc hẳn đã","logical certainty about the past"],["can't have","🚫","He can't have seen us.","không thể nào đã","logical impossibility in the past"],["might have","🤷","They might have got lost.","có lẽ đã","possibility in the past"],["clue","🧵","There's a clue.","manh mối","a piece of evidence"],["obviously","👁️","Obviously, someone was here.","rõ ràng","clearly"],["apparently","📰","Apparently, he resigned.","nghe nói là","according to what you've heard"],["suspect","🕵️","I suspect he knew.","nghi ngờ","to think something is probably true"],["conclusion","🏁","We jumped to conclusions.","kết luận","a decision reached by reasoning"]],
 g:{n:"Modals of deduction",r:"Present: **must** (I'm sure), **might/may/could** (possible), **can't** (impossible) + verb. Past: + **have + past participle**: She **must have left**. He **can't have known**. They **might have been** stuck in traffic.",vi:"Suy đoán hiện tại: **must** (chắc chắn), **might/may/could** (có thể), **can't** (không thể) + V. Quá khứ: + **have + V3**: She must have left.",
  q:[["The lights are off. They ___ have gone out.","must","can't|should"],["He ___ have seen us. It was too dark.","can't","must|mustn't"],["She's late. She ___ have missed the bus.","might","must not|can't"],["You ___ be exhausted after that flight!","must","can't|should"],["They ___ been stuck in traffic.","might have","might|must"]]},
 d:[["A","The office door was unlocked this morning."],["B","Someone must have forgotten to lock it last night."],["A","It can't have been me. I left at five."],["B","It might have been the cleaners. Apparently they came late."],["A","Or maybe the lock is broken."],["B","Let's not jump to conclusions. I'll check the cameras."]],
 s:["She must have forgotten about the meeting.","He can't have known the answer.","They might have been stuck in traffic."]},
/* ---------------- C2 ---------------- */
{id:"c2-1",lv:"C2",em:"🎚️",t:"Register and tone",can:"Switch naturally between formal and informal English",
 v:[["commence","🏁","The ceremony will commence at noon.","bắt đầu (trang trọng)","formal: to begin"],["endeavour","🧗","We endeavour to respond within 24 hours.","nỗ lực","formal: to try hard"],["regarding","📌","Regarding your request...","về việc","about (formal)"],["gonna","🗯️","I'm gonna grab a bite.","sẽ (khẩu ngữ)","informal spoken: going to"],["reckon","🤔","I reckon it'll be fine.","nghĩ là (thân mật)","informal: think"],["kindly","🙏","Kindly find attached...","vui lòng","formal politeness marker"],["subsequently","⏭️","He subsequently resigned.","sau đó","formal: afterwards"],["hang out","🛋️","Wanna hang out later?","đi chơi","informal: spend time together"]],
 g:{n:"Choosing the right register",r:"Formal English favours Latin-based verbs (**obtain, assist, commence**), passive and impersonal structures, and no contractions. Informal English favours phrasal verbs (**get, help out, kick off**), contractions and ellipsis (**Sounds good!**). Mixing registers sounds odd: match your audience.",vi:"Văn trang trọng dùng động từ gốc Latin (obtain, assist, commence), câu bị động, không viết tắt. Văn thân mật dùng cụm động từ (get, help out), viết tắt và tỉnh lược (Sounds good!). Chọn giọng văn phù hợp người nghe.",
  q:[["(Formal email) We ___ to reply within one working day.","endeavour","try our best|wanna"],["(To a friend) \"I ___ it'll rain later.\"","reckon","presume|assume hereby"],["(Formal) The meeting will ___ at 9 a.m.","commence","kick off|get going"],["(Formal) ___ your enquiry of 3 May...","Regarding","About that|So"],["(Informal) \"___ good, see you then!\"","Sounds","It sounds that|Sound"]]},
 d:[["Email (formal)","Dear Ms. Patel, Regarding your enquiry, I would be delighted to assist. Kindly find attached our proposal."],["Text (informal)","Hey! Got your message. Happy to help, sending the doc now."],["Coach","Notice: same message, totally different tone."],["Learner","So in formal emails I avoid contractions and phrasal verbs?"],["Coach","Mostly, yes. And with friends, formal English can sound cold or even sarcastic."]],
 s:["I would be delighted to assist you with this matter.","Hey, no worries, I'll sort it out.","Kindly find the document attached."]},
{id:"c2-2",lv:"C2",em:"🎙️",t:"Rhetoric and persuasion",can:"Persuade with rhetorical techniques",
 v:[["compelling","🧲","A compelling argument.","thuyết phục mạnh","very convincing"],["rhetorical question","❔","Isn't it time we acted?","câu hỏi tu từ","a question asked for effect"],["the rule of three","3️⃣","Faster, cheaper, better.","quy tắc ba","listing three items for impact"],["contrast","🌗","Not a cost, but an investment.","sự tương phản","showing difference for effect"],["anecdote","📖","She opened with an anecdote.","giai thoại","a short personal story"],["undeniable","🧱","The evidence is undeniable.","không thể chối cãi","impossible to deny"],["resonate","🔔","The message resonated with voters.","gây đồng cảm","to have meaning for people"],["call to action","📣","End with a clear call to action.","lời kêu gọi hành động","a request for the audience to act"]],
 g:{n:"Fronting and rhetorical structures",r:"Move information to the front for impact: **Strange as it may seem**, ... **Much as I admire him**, ... **So great was the demand that**... Use parallelism (**We came, we saw, we listened**) and contrast (**not ... but ...**).",vi:"Đảo thông tin lên đầu để nhấn mạnh: **Strange as it may seem**, **Much as I admire him**, **So great was the demand that...** Dùng song hành (We came, we saw...) và tương phản (not ... but ...).",
  q:[["___ as it may seem, I agree with him.","Strange","Strangely|How strange"],["___ was the demand that tickets sold out.","So great","Such great|So greatly"],["Much ___ I admire her, I can't support this.","as","like|that"],["This is not a cost ___ an investment.","but","however|and"],["Isn't it time we ___?","acted","act|will act"]]},
 d:[["Speaker","Friends, how many more reports do we need before we act?"],["Speaker","This is not a cost; it is an investment, in our health, our children and our future."],["Coach","Nice: a rhetorical question, a contrast and the rule of three."],["Learner","And then I end with a call to action?"],["Coach","Exactly. Keep it short and concrete: what should people do tomorrow morning?"]],
 s:["Strange as it may seem, I agree with him.","This is not a cost, but an investment.","Isn't it time we took action?"]},
{id:"c2-3",lv:"C2",em:"🎯",t:"Precision and collocation",can:"Choose the exact natural word combination",
 v:[["heavy rain","🌧️","Heavy rain is expected.","mưa lớn","collocation: not 'strong rain'"],["make a decision","⚖️","We need to make a decision.","đưa ra quyết định","collocation: not 'do a decision'"],["strong coffee","☕","I need a strong coffee.","cà phê đậm","collocation: not 'powerful coffee'"],["take into account","🧮","Take the costs into account.","tính đến","to consider"],["bitterly disappointed","💔","She was bitterly disappointed.","vô cùng thất vọng","very disappointed"],["deeply rooted","🌳","A deeply rooted tradition.","ăn sâu","firmly established"],["meet a deadline","⏱️","We met the deadline.","kịp hạn chót","to finish on time"],["raise awareness","📢","The campaign raised awareness.","nâng cao nhận thức","to make people know more"]],
 g:{n:"Collocations",r:"Natural English depends on which words go together: **make** a mistake / **do** homework; **heavy** traffic / **strong** wind; **highly** unlikely; **bitterly** cold. Learn words in chunks, not alone.",vi:"Kết hợp từ (collocation) quyết định độ tự nhiên: make a mistake / do homework; heavy traffic / strong wind; highly unlikely. Hãy học từ theo cụm, không học riêng lẻ.",
  q:[["We need to ___ a decision today.","make","do|take on"],["There was ___ traffic this morning.","heavy","strong|big"],["It's ___ unlikely that he'll agree.","highly","strongly|heavily"],["Did you ___ your homework?","do","make|finish up"],["We managed to ___ the deadline.","meet","reach up|hit on"]]},
 d:[["Editor","Your report is clear, but some phrases sound unnatural."],["Writer","Like what?"],["Editor","You wrote 'strong rain' and 'do a decision'. We say 'heavy rain' and 'make a decision'."],["Writer","I see. Any tips for learning these?"],["Editor","Read widely and notice word partners. Keep a collocation notebook."],["Writer","Highly practical advice. Thank you!"]],
 s:["We need to make a decision by Friday.","Heavy rain is expected this weekend.","It's highly unlikely that they'll agree."]},
{id:"c2-4",lv:"C2",em:"🎭",t:"Humor, irony and culture",can:"Understand irony, understatement and cultural humor",
 v:[["sarcasm","🙄","\"Great, another meeting,\" she said with sarcasm.","sự mỉa mai","saying the opposite to mock"],["understatement","🤏","\"It's a bit chilly\" (at minus thirty).","nói giảm","describing something as smaller than it is"],["pun","🥁","A pun is a joke with a double meaning.","chơi chữ","a joke using a word's two meanings"],["deadpan","😐","His deadpan humor is famous.","hài tỉnh bơ","funny without showing emotion"],["tongue-in-cheek","😉","A tongue-in-cheek comment.","nói đùa nửa thật","not meant seriously"],["self-deprecating","🙃","Self-deprecating jokes.","tự giễu","making fun of yourself"],["punchline","🎯","He forgot the punchline.","câu chốt (truyện cười)","the funny final line of a joke"],["catch on","💡","It took me a while to catch on.","hiểu ra","to understand"]],
 g:{n:"Reading between the lines",r:"British understatement (**not bad** = very good; **a bit of a problem** = a big problem), irony (**Oh, brilliant!** after a mistake) and polite softening (**I'm not sure that's the best idea** = I think that's a bad idea) carry meaning beyond the words. Tone and context decide.",vi:"Hiểu nghĩa hàm ý: nói giảm kiểu Anh (**not bad** = rất tốt; **a bit of a problem** = vấn đề lớn), mỉa mai (**Oh, brilliant!** khi có lỗi), làm mềm lịch sự (**I'm not sure that's the best idea** = ý đó tệ). Ngữ điệu và ngữ cảnh quyết định.",
  q:[["\"Not bad at all\" in British English often means:","very good","bad|average"],["\"Oh, brilliant!\" after spilling coffee is:","sarcasm","praise|a pun"],["\"It's a bit nippy\" at -30°C is an:","understatement","exaggeration|idiom"],["A joke using double meanings is a:","pun","punchline|deadpan"],["\"With respect, I'm not sure...\" usually means:","I disagree","I agree|I'm confused"]]},
 d:[["A","How was your driving test?"],["B","Oh, fantastic. I only hit one cone and a very forgiving examiner."],["A","Ha! So, not your finest hour?"],["B","Let's say there's room for improvement."],["A","Well, at least you've got a great story."],["B","True. I'm basically a stand-up comedian now."]],
 s:["Well, that's a bit of a problem.","Oh, brilliant. Just what I needed.","Let's say there's room for improvement."]}
];
const EN_PLACEMENT=[
 ["A0","Hello, ___ name is Anna.","my","I|me|is"],
 ["A0","I ___ from Vietnam.","am","is|are|be"],
 ["A1","She ___ coffee every morning.","drinks","drink|drinking|is drink"],
 ["A1","There ___ two cats in the garden.","are","is|be|has"],
 ["A1","Can you ___ the piano?","play","playing|plays|to play"],
 ["A2","I ___ to Japan last year.","went","go|have gone|goed"],
 ["A2","This book is ___ than that one.","more interesting","interestinger|most interesting|more interest"],
 ["A2","Have you ever ___ sushi?","eaten","ate|eat|eating"],
 ["B1","I've lived here ___ 2019.","since","for|from|during"],
 ["B1","If it ___ tomorrow, we'll stay home.","rains","will rain|rained|raining"],
 ["B1","The bridge ___ built in 1890.","was","is|were|has"],
 ["B2","If I ___ you, I'd take the job.","were","am|will be|had"],
 ["B2","She said she ___ tired.","was","is|has|will be"],
 ["B2","___ the rain, we went for a walk.","Despite","Although|However|Even"],
 ["C1","Never ___ such a mess!","have I seen","I have seen|I saw|seen I"],
 ["C1","He ___ have taken it. He wasn't here.","can't","mustn't|shouldn't|needn't"],
 ["C1","The findings ___ to suggest a link.","appear","appears|appearing|are appear"],
 ["C2","___ as it may seem, he was right.","Strange","Strangely|However strange|So strange"],
 ["C2","It's ___ unlikely that she'll come.","highly","strongly|heavily|deeply"],
 ["C2","\"Not bad at all\" (British) usually means:","very good","quite bad|average|not good"]];
const EN_ROLEPLAYS=[
 ["☕","Ordering at a café","You are a friendly barista. The learner is a customer ordering a drink and a snack."],
 ["🏨","Hotel check-in","You are a hotel receptionist. The learner is checking in and has a small problem with the booking."],
 ["✈️","At the airport","You are an airline agent at check-in. Ask about luggage, seat preference and documents."],
 ["🩺","At the doctor's","You are a kind doctor. The learner describes symptoms; ask questions and give advice."],
 ["🛍️","Returning an item","You are a shop assistant. The learner wants to return a jacket that doesn't fit."],
 ["💼","Job interview","You are an interviewer for a job the learner chooses. Ask common interview questions one at a time."],
 ["🏠","Renting an apartment","You are a landlord showing an apartment. The learner asks about rent, rules and the area."],
 ["📞","Phone call to a company","You are a customer service agent. The learner calls about a wrong bill."],
 ["🎉","Small talk at a party","You are a friendly guest at a party. Make small talk: work, hobbies, travel."],
 ["🧑‍💼","Team meeting","You are a manager running a short team meeting. Ask the learner for an update and opinions."],
 ["🚕","Taking a taxi","You are a chatty taxi driver. The learner gives directions and chats about the city."],
 ["🗳️","Friendly debate","You debate a light topic with the learner (for example: cats vs dogs, city vs countryside). Challenge their ideas politely."]];

/* ================= v10: English Academy ================= */
const UI7={
 en:{ac_title:"English Academy",ac_sub:"Your personal English teacher: from your first word to fluent, natural English.",ac_other:"Other languages",ac_en:"English",
  ac_place:"Find your level",ac_placeD:"A 3-minute test puts you in the right place.",ac_take:"Take the test",ac_zero:"Start from zero",ac_cont:"Continue",ac_review:"Review",ac_words:"Word explorer",ac_tutor:"Talk with a tutor",ac_pron:"Pronunciation",ac_prog:"My progress",
  ac_due:"{n} due",ac_wotd:"Word of the day",ac_next:"Next up",ac_lw:"Words",ac_lg:"Grammar",ac_ls:"Speak",ac_unit:"Unit",ac_done:"done",ac_check:"Check",ac_continue:"Continue",ac_skip:"Skip",ac_right:"Correct!",ac_wrong:"Not quite. Answer:",ac_tap:"Tap the words in order",ac_listen:"Listen and choose",ac_type:"Listen and type what you hear",ac_say:"Say this sentence",ac_mic:"🎙️ Tap and speak",ac_said:"✓ I said it",ac_score:"You said: “{t}” · {p}% match",ac_again:"Try again",ac_meaning:"What does this mean?",ac_pickw:"Which word matches?",ac_fill:"Fill the gap",ac_rule:"Grammar tip",ac_dialog:"Listen to the conversation",ac_play:"▶ Play",ac_role:"Your turn: you are {r}",ac_finish:"Lesson complete!",ac_xp:"+{x} XP",ac_acc:"Accuracy {p}%",ac_home:"Back to course",ac_level:"Level {l}",ac_placed:"Your level: {l} ({n}). We've unlocked your starting point!",ac_q:"Question {i} of {n}",
  ac_know:"I know it",ac_learn:"Learn it",ac_trans:"Translate",ac_again2:"Again",ac_hard:"Hard",ac_good:"Good",ac_easy:"Easy",ac_show:"Show answer",ac_noDue:"Nothing to review right now. Great job! Learn new words to fill your deck.",ac_revDone:"Review done!",ac_deck:"{n} cards in your deck",
  ac_tutorNeed:"For live conversations, turn on an AI brain (free in-browser AI works offline). Meanwhile, practise with the Speak lessons.",ac_tutorFree:"Free conversation at my level",ac_tutorWrite:"Correct my writing",ac_tutorGram:"Explain grammar",ac_tutorIelts:"Speaking exam practice",ac_roles:"Role-plays",ac_loadAI:"Set up AI brain",
  ac_wordsLv:"Level",ac_session:"Today's 10 words",ac_learned:"Words learned",ac_reviews:"Reviews",ac_speakAvg:"Speaking accuracy",ac_lessons:"Lessons done",ac_rec:"Recommended next",ac_noSR:"Speech recognition isn't available in this browser. Say it out loud, then tap “I said it”.",ac_toTutor:"Practise this topic with the tutor"},
 vi:{ac_title:"Học viện Tiếng Anh",ac_sub:"Giáo viên tiếng Anh riêng của bạn: từ chữ đầu tiên đến nói lưu loát, tự nhiên.",ac_other:"Ngôn ngữ khác",ac_en:"Tiếng Anh",
  ac_place:"Kiểm tra trình độ",ac_placeD:"Bài kiểm tra 3 phút để xếp đúng cấp độ.",ac_take:"Làm bài kiểm tra",ac_zero:"Bắt đầu từ số 0",ac_cont:"Học tiếp",ac_review:"Ôn tập",ac_words:"Khám phá từ vựng",ac_tutor:"Nói chuyện với gia sư",ac_pron:"Luyện phát âm",ac_prog:"Tiến độ",
  ac_due:"{n} thẻ cần ôn",ac_wotd:"Từ của ngày",ac_next:"Bài tiếp theo",ac_lw:"Từ vựng",ac_lg:"Ngữ pháp",ac_ls:"Nói",ac_unit:"Bài",ac_done:"xong",ac_check:"Kiểm tra",ac_continue:"Tiếp tục",ac_skip:"Bỏ qua",ac_right:"Chính xác!",ac_wrong:"Chưa đúng. Đáp án:",ac_tap:"Chạm các từ theo đúng thứ tự",ac_listen:"Nghe và chọn",ac_type:"Nghe và gõ lại",ac_say:"Đọc to câu này",ac_mic:"🎙️ Chạm và nói",ac_said:"✓ Tôi đã nói",ac_score:"Bạn nói: “{t}” · khớp {p}%",ac_again:"Thử lại",ac_meaning:"Từ này nghĩa là gì?",ac_pickw:"Từ nào phù hợp?",ac_fill:"Điền vào chỗ trống",ac_rule:"Mẹo ngữ pháp",ac_dialog:"Nghe hội thoại",ac_play:"▶ Phát",ac_role:"Đến lượt bạn: bạn là {r}",ac_finish:"Hoàn thành bài học!",ac_xp:"+{x} XP",ac_acc:"Độ chính xác {p}%",ac_home:"Về khoá học",ac_level:"Cấp {l}",ac_placed:"Trình độ của bạn: {l} ({n}). Đã mở khoá điểm bắt đầu!",ac_q:"Câu {i}/{n}",
  ac_know:"Đã biết",ac_learn:"Học từ này",ac_trans:"Dịch",ac_again2:"Lại",ac_hard:"Khó",ac_good:"Tốt",ac_easy:"Dễ",ac_show:"Xem đáp án",ac_noDue:"Hiện chưa có thẻ cần ôn. Tuyệt vời! Hãy học thêm từ mới.",ac_revDone:"Ôn tập xong!",ac_deck:"{n} thẻ trong bộ",
  ac_tutorNeed:"Để hội thoại trực tiếp, hãy bật bộ não AI (AI trong trình duyệt miễn phí, chạy ngoại tuyến). Trong lúc chờ, luyện bài Nói nhé.",ac_tutorFree:"Trò chuyện tự do theo trình độ",ac_tutorWrite:"Sửa bài viết của tôi",ac_tutorGram:"Giải thích ngữ pháp",ac_tutorIelts:"Luyện thi nói",ac_roles:"Đóng vai",ac_loadAI:"Cài bộ não AI",
  ac_wordsLv:"Cấp độ",ac_session:"10 từ hôm nay",ac_learned:"Từ đã học",ac_reviews:"Lượt ôn",ac_speakAvg:"Độ chính xác khi nói",ac_lessons:"Bài đã học",ac_rec:"Nên học tiếp",ac_noSR:"Trình duyệt này không hỗ trợ nhận giọng nói. Hãy đọc to rồi chạm “Tôi đã nói”.",ac_toTutor:"Luyện chủ đề này với gia sư"},
 yue:{ac_title:"英文學院",ac_sub:"你嘅私人英文老師：由第一個字學到講得流利自然。",ac_other:"其他語言",ac_en:"英文",ac_place:"測試程度",ac_placeD:"3 分鐘測試，揀啱你嘅起點。",ac_take:"開始測試",ac_zero:"由零開始",ac_cont:"繼續",ac_review:"溫習",ac_words:"生字探索",ac_tutor:"同導師傾偈",ac_pron:"發音練習",ac_prog:"我嘅進度",ac_wotd:"今日生字",ac_next:"下一課",ac_lw:"生字",ac_lg:"文法",ac_ls:"講",ac_check:"檢查",ac_continue:"繼續",ac_right:"啱晒！",ac_wrong:"差少少。答案：",ac_finish:"完成一課！",ac_home:"返回課程"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI7[k]);
const ACD=Object.assign({mode:"en",lv:null,placed:false,done:{},srs:{},seen:{},wlv:null,stats:{rev:0,spk:0,spkSum:0,lessons:0}},store.get("acad",{}));
const saveACD=()=>store.set("acad",ACD);
const ACV={view:"home",les:null,rv:null,wx:null};
const LVIDX=l=>EN_LEVELS.findIndex(x=>x.id===l);
const natLang=()=>{const l=uiLang();return l==="en"?null:l};
const mdb=s=>{const f=document.createDocumentFragment();String(s).split(/\*\*(.+?)\*\*/).forEach((p,i)=>f.append(i%2?h("b",null,p):document.createTextNode(p)));return f};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* native-language help: built-in Vietnamese, otherwise Chrome's on-device Translator API when available */
const TRC={};
async function trNative(text){const to=natLang();if(!to||!text)return "";const tl={yue:"zh-Hant",zh:"zh"}[to]||to;
  try{if(!("Translator" in self))return "";if(!TRC[tl]){const av=await Translator.availability({sourceLanguage:"en",targetLanguage:tl});if(av==="unavailable")return "";TRC[tl]=await Translator.create({sourceLanguage:"en",targetLanguage:tl})}return await TRC[tl].translate(text)}catch(e){return ""}}
function wordNative(w){return natLang()==="vi"?(w[3]||""):""}
/* English voice for the academy, slower for beginners */
function enSay(text,after,slow){const c=Object.assign({},E&&E.on?cur3d():curChar());c.rate=(c.rate||1)*(slow?.8:(["A0","A1"].includes(ACD.lv||"A0")?.88:1));speakAs(c,text,after,"en")}
function sayBtn(text,slow){return h("button",{type:"button",class:"btn ghost small ac-say","aria-label":"Listen",onclick:e=>{e.stopPropagation();enSay(text,null,slow)}},"🔊")}

/* ---------- lesson builders ---------- */
function wordOpts(u,w,key){const pool=EN_UNITS.filter(x=>x.lv===u.lv).flatMap(x=>x.v).filter(x=>x[0]!==w[0]);return shuffle([w[key],...shuffle(pool).slice(0,3).map(x=>x[key])])}
function buildWords(u){const it=[];const vs=u.v;
  vs.forEach(w=>it.push({t:"intro",w}));
  shuffle(vs).forEach((w,i)=>{const kind=i%4;
    if(kind===0&&w[1])it.push({t:"mc",q:TT("ac_pickw"),big:w[1],opts:wordOpts(u,w,0),ans:w[0]});
    else if(kind===1)it.push({t:"mc",q:TT("ac_listen"),say:w[0],opts:wordOpts(u,w,0),ans:w[0]});
    else if(kind===2&&wordNative(w))it.push({t:"mc",q:TT("ac_meaning"),big:w[0],opts:shuffle([w[3],...shuffle(u.v.filter(x=>x!==w)).slice(0,3).map(x=>x[3])]),ans:w[3],say:w[0]});
    else if(kind===2&&w[4])it.push({t:"mc",q:TT("ac_meaning"),big:w[0],opts:shuffle([w[4],...shuffle(u.v.filter(x=>x!==w)).slice(0,3).map(x=>x[4])]),ans:w[4],say:w[0]});
    else if(w[0].length<=12)it.push({t:"type",q:TT("ac_type"),say:w[0],ans:w[0]});
    else it.push({t:"mc",q:TT("ac_listen"),say:w[0],opts:wordOpts(u,w,0),ans:w[0]})});
  shuffle(vs).slice(0,2).forEach(w=>{const re=new RegExp("\\b"+w[0].replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b","i");if(re.test(w[2]))it.push({t:"mc",q:TT("ac_fill"),sent:w[2].replace(re,"___"),opts:wordOpts(u,w,0),ans:w[0],full:w[2]})});
  return it;}
function buildGrammar(u){const it=[{t:"rule"}];
  u.g.q.forEach(q=>it.push({t:"mc",q:TT("ac_fill"),sent:q[0],opts:shuffle([q[1],...q[2].split("|")]),ans:q[1],why:(EN_WHY[u.id]||[])[u.g.q.indexOf(q)],full:q[0].replace("___",q[1])}));
  const sents=[...u.s,...u.d.map(x=>x[1])].filter(s=>s.split(" ").length>=3&&s.split(" ").length<=9);
  shuffle(sents).slice(0,2).forEach(s=>it.push({t:"build",target:s}));
  const q=pick(u.g.q);it.push({t:"type",q:TT("ac_type"),say:q[0].replace("___",q[1]),ans:q[0].replace("___",q[1]),why:(EN_WHY[u.id]||[])[u.g.q.indexOf(q)]});
  return it;}
function buildSpeak(u){const it=[{t:"dialog"}];
  const roles=[...new Set(u.d.map(x=>x[0]))];it.push({t:"role",me:roles[1]||roles[0]});
  u.s.forEach(s=>it.push({t:"speak",target:s}));
  it.push({t:"type",q:TT("ac_type"),say:pick(u.s),ans:null});it[it.length-1].ans=it[it.length-1].say;
  it.push({t:"build",target:pick(u.s)});
  return it;}
function startLesson(u,kind){
  const items=kind==="w"?buildWords(u):kind==="g"?buildGrammar(u):buildSpeak(u);
  ACV.view="lesson";ACV.les={u,kind,items,i:0,ok:0,tot:0,state:null};renderAcad();window.scrollTo&&$("#stage").scrollTo(0,0);
}
function endLesson(){
  const L2=ACV.les,u=L2.u;const acc=L2.tot?Math.round(L2.ok/L2.tot*100):100;const xp=10+L2.ok;
  ACD.done[u.id]=ACD.done[u.id]||{};ACD.done[u.id][L2.kind]=Math.max(ACD.done[u.id][L2.kind]||0,acc||1);ACD.stats.lessons++;
  if(L2.kind==="w")u.v.forEach(w=>acSrsAdd(w[0],{w:w[0],em:w[1],ex:w[2],vi:w[3],def:w[4],lv:u.lv}));
  if(!ACD.lv||LVIDX(u.lv)>LVIDX(ACD.lv))ACD.lv=u.lv;saveACD();
  HB.add(xp,"lesson");HB.ev("lesson");if(L2.kind==="w")HB.ev("words",u.v.length);
  if(acc>=80)confetti();sfx("win");
  ACV.les.state="end";ACV.les.acc=acc;ACV.les.xp=xp;renderAcad();
}
/* ---------- SRS (FSRS, MIT) ---------- */
let FS=null;
function loadFSRS(){if(window.FSRSLIB)return Promise.resolve(window.FSRSLIB);return new Promise(r=>{const s=document.createElement("script");s.src="fsrs.js";s.onload=()=>r(window.FSRSLIB||null);s.onerror=()=>r(null);document.head.append(s)})}
function acSrsAdd(id,data){if(ACD.srs[id])return;ACD.srs[id]={d:data,c:null,due:Date.now()};}
function dueCards(){const now=Date.now();return Object.entries(ACD.srs).filter(([k,v])=>v.due<=now).map(([k])=>k)}
async function rateCard(id,r){const lib=await loadFSRS();const x=ACD.srs[id];const now=new Date();
  if(lib){FS=FS||lib.fsrs(lib.generatorParameters({enable_fuzz:true}));let c=x.c?Object.assign({},x.c,{due:new Date(x.c.due),last_review:x.c.last_review?new Date(x.c.last_review):undefined}):lib.createEmptyCard(now);
    const res=FS.next(c,now,[0,lib.Rating.Again,lib.Rating.Hard,lib.Rating.Good,lib.Rating.Easy][r]);x.c=res.card;x.due=+new Date(res.card.due)}
  else{const iv=[0,1/1440*5,1,3,7][r]*(x.n=(x.n||0)+1);x.due=Date.now()+iv*864e5}
  ACD.stats.rev++;saveACD();HB.add(1,"review");HB.ev("review")}

/* ---------- placement ---------- */
function startPlacement(){ACV.view="place";ACV.pl={i:0,res:{}};renderAcad()}
function finishPlacement(){const res=ACV.pl.res;let lv="A0";
  for(const L0 of EN_LEVELS){const r=res[L0.id];if(!r)continue;if(r.ok/r.n>=.6)lv=L0.id;else break}
  const idx=Math.min(LVIDX(lv)+(lv==="A0"&&!(res.A0&&res.A0.ok)?0:(lv==="C2"?0:1)),EN_LEVELS.length-1);
  const start=lv==="A0"&&(!res.A0||res.A0.ok<2)?"A0":EN_LEVELS[idx].id;
  ACD.lv=start;ACD.placed=true;saveACD();HB.add(10,"placement");HB.badge("placement");
  const L0=EN_LEVELS[LVIDX(start)];toast(fill(TT("ac_placed"),{l:L0.id,n:L0.n}));confetti();ACV.view="home";renderAcad();
  setTimeout(()=>{const el=document.querySelector('[data-lv="'+start+'"]');if(el){el.open=true;el.scrollIntoView({block:"start",behavior:"smooth"})}},200);
}
/* ---------- helpers ---------- */
function nextLesson(){const startIdx=LVIDX(ACD.lv||"A0");
  for(const u of EN_UNITS){if(LVIDX(u.lv)<startIdx)continue;const d=ACD.done[u.id]||{};for(const k of ["w","g","s"])if(!d[k])return {u,k}}return null}
function wotd(){const lv=ACD.lv||"A1";const pool=EN_UNITS.filter(u=>LVIDX(u.lv)>=Math.max(0,LVIDX(lv)-0)&&LVIDX(u.lv)<=LVIDX(lv)+1).flatMap(u=>u.v);const n=Math.floor(Date.now()/864e5);return pool[n%pool.length]}
function lvlOf(u){return EN_LEVELS[LVIDX(u.lv)]}
function unitProgress(u){const d=ACD.done[u.id]||{};return ["w","g","s"].filter(k=>d[k]).length}

/* ---------- rendering ---------- */
function acadShell(){
  const v=$("#view-learn");if($("#learnSeg"))return;
  const seg=h("div",{class:"seg",id:"learnSeg",role:"tablist"},
    h("button",{type:"button",id:"segEn",onclick:()=>{ACD.mode="en";saveACD();renderLearn()}},"🇬🇧 "+TT("ac_en")),
    h("button",{type:"button",id:"segOther",onclick:()=>{ACD.mode="other";saveACD();renderLearn()}},"🌍 "+TT("ac_other")));
  v.prepend(seg);seg.after(h("div",{id:"acad"}));
}
function showLingo(on){const v=$("#view-learn");[...v.children].forEach(el=>{if(el.id==="learnSeg"||el.id==="acad")return;el.hidden=!on});$("#acad").hidden=on;
  $("#segEn").classList.toggle("on",!on);$("#segOther").classList.toggle("on",on);$("#segEn").textContent="🇬🇧 "+TT("ac_en");$("#segOther").textContent="🌍 "+TT("ac_other")}
{const _rl=renderLearn;renderLearn=function(){acadShell();if(ACD.mode==="other"){showLingo(true);return _rl()}showLingo(false);renderAcad()};}
function renderAcad(){
  const A=$("#acad");if(!A)return;A.innerHTML="";const v=ACV.view;
  if(v==="lesson")return acRenderLesson(A);
  if(v==="place")return renderPlace(A);
  if(v==="review")return renderReview(A);
  if(v==="words")return renderWordsX(A);
  if(v==="tutor")return renderTutorMenu(A);
  if(v==="prog")return renderProg(A);
  const L0=ACD.lv?EN_LEVELS[LVIDX(ACD.lv)]:null;
  A.append(h("div",{class:"ac-hero"},h("div",null,h("h2",null,"🇬🇧 "+TT("ac_title")),h("p",{class:"sub"},TT("ac_sub"))),
    L0?h("span",{class:"ac-badge"},L0.id+" · "+L0.n):null));
  if(!ACD.placed&&!Object.keys(ACD.done).length){
    A.append(h("div",{class:"panel ac-place"},h("b",null,"🎯 "+TT("ac_place")),h("p",{class:"note"},TT("ac_placeD")),
      h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:startPlacement},TT("ac_take")),
        h("button",{type:"button",class:"btn ghost",onclick:()=>{ACD.lv="A0";ACD.placed=true;saveACD();renderAcad()}},TT("ac_zero")))))}
  const nx=nextLesson(),due=dueCards().length;
  const tiles=h("div",{class:"ac-tiles"});
  const tile=(em,t,sub,fn,hot)=>h("button",{type:"button",class:"ac-tile"+(hot?" hot":""),onclick:fn},h("span",{class:"em"},em),h("b",null,t),sub?h("small",null,sub):null);
  if(nx)tiles.append(tile("▶️",TT("ac_cont"),nx.u.em+" "+nx.u.t+" · "+TT("ac_l"+nx.k),()=>startLesson(nx.u,nx.k),true));
  tiles.append(tile("🔁",TT("ac_review"),due?fill(TT("ac_due"),{n:due}):fill(TT("ac_deck"),{n:Object.keys(ACD.srs).length}),()=>{ACV.view="review";ACV.rv=null;renderAcad()},due>0));
  tiles.append(tile("📚",TT("ac_words"),"A1 → C2 · 9,700+",()=>{ACV.view="words";ACV.wx=null;renderAcad()}));
  tiles.append(tile("🗣️",TT("ac_tutor"),S.brainOn?"AI":"",()=>{ACV.view="tutor";renderAcad()}));
  tiles.append(tile("🎯",TT("ac_place"),"",startPlacement));
  tiles.append(tile("📈",TT("ac_prog"),"",()=>{ACV.view="prog";renderAcad()}));
  A.append(tiles);
  const w=wotd();if(w)A.append(h("div",{class:"panel ac-wotd"},h("span",{class:"label"},"✨ "+TT("ac_wotd")),
    h("div",{class:"ac-wrow"},h("span",{class:"ac-em"},w[1]||"💬"),h("div",null,h("b",{class:"ac-word"},w[0]),h("div",{class:"note"},w[4]||wordNative(w)||""),h("i",null,w[2])),sayBtn(w[0]+". "+w[2]))));
  /* the path */
  EN_LEVELS.forEach(L0=>{const units=EN_UNITS.filter(u=>u.lv===L0.id);const done=units.reduce((s,u)=>s+unitProgress(u),0),tot=units.length*3;
    const det=h("details",{class:"ac-level","data-lv":L0.id});if(L0.id===(nx?nx.u.lv:(ACD.lv||"A0")))det.open=true;
    det.append(h("summary",null,h("span",{class:"ac-lvtag"},L0.id),h("b",null,L0.n),h("small",null,L0.d),h("span",{class:"ac-bar"},h("i",{style:"width:"+Math.round(done/tot*100)+"%"}))));
    units.forEach((u,ui)=>{const d=ACD.done[u.id]||{};const rec=nx&&nx.u===u;
      det.append(h("div",{class:"ac-unit"+(rec?" rec":"")},h("span",{class:"ac-uem"},u.em),h("div",{class:"ac-ut"},h("b",null,u.t),h("small",null,u.can),rec?h("span",{class:"ac-rec"},"★ "+TT("ac_rec")):null),
        h("div",{class:"ac-dots"},...["w","g","s"].map(k=>h("button",{type:"button",class:"ac-dot"+(d[k]?" on":""),title:TT("ac_l"+k),onclick:()=>startLesson(u,k)},(d[k]?"✓ ":"")+TT("ac_l"+k))))))});
    A.append(det)});
}
function lessonHead(A,title){const L2=ACV.les;const pct=Math.round(L2.i/L2.items.length*100);
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";ACV.les=null;renderAcad()}},"✕"),h("div",{class:"ac-prog"},h("i",{style:"width:"+pct+"%"})),h("span",{class:"note"},L2.u.em)));
  if(title)A.append(h("p",{class:"ac-q"},title));}
function acRenderLesson(A){
  const L2=ACV.les,u=L2.u;
  if(L2.state==="end"){A.append(h("div",{class:"panel ac-end"},h("div",{class:"ac-big"},"🎉"),h("h2",null,TT("ac_finish")),h("p",null,fill(TT("ac_acc"),{p:L2.acc})+" · "+fill(TT("ac_xp"),{x:L2.xp})),
    h("div",{class:"btn-row",style:"justify-content:center"},h("button",{type:"button",class:"btn",onclick:()=>{const nx=nextLesson();if(nx)startLesson(nx.u,nx.k);else{ACV.view="home";renderAcad()}}},TT("ac_next")+" ▶"),
      h("button",{type:"button",class:"btn ghost",onclick:()=>{ACV.view="home";renderAcad()}},TT("ac_home")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>acadTutor({topic:u.t+" ("+u.g.n+")",lv:u.lv})},"🗣️ "+TT("ac_toTutor")))));return}
  const it=L2.items[L2.i];if(!it){endLesson();return}
  const next=()=>{L2.i++;L2.state=null;renderAcad()};
  const feedback=(ok,ans,extra,chosen)=>{L2.tot++;if(ok)L2.ok++;else acMiss(L2,it,chosen,ans);sfx(ok?"ding":"buzz");if(ok)HB.ev("correct");
    const fb=h("div",{class:"ac-fb "+(ok?"ok":"bad")},h("b",null,ok?"✓ "+TT("ac_right"):"✗ "+TT("ac_wrong")+" "+ans),extra?h("div",null,extra):null,acWhy(it,ok,chosen),h("button",{type:"button",class:"btn",onclick:next},TT("ac_continue")));
    A.querySelectorAll(".ac-opt,.ac-check").forEach(b=>b.disabled=true);A.append(fb);fb.scrollIntoView({block:"nearest",behavior:"smooth"});
    if(it.full)enSay(it.full);else if(it.say)enSay(it.say)};
  if(it.t==="intro"){lessonHead(A);const w=it.w;
    A.append(h("div",{class:"panel ac-card"},h("div",{class:"ac-em big"},w[1]||"💬"),h("div",{class:"ac-word"},w[0]," ",sayBtn(w[0],true)),
      w[4]?h("p",{class:"note"},w[4]):null,wordNative(w)?h("p",{class:"ac-nat"},wordNative(w)):h("p",{class:"ac-nat",id:"acNat"}),
      h("p",{class:"ac-ex"},"“"+w[2]+"” ",sayBtn(w[2]))),h("button",{type:"button",class:"btn ac-check",onclick:next},TT("ac_continue")));
    enSay(w[0]+". "+w[2]);if(!wordNative(w)&&natLang())trNative(w[0]+" — "+w[2]).then(t=>{const n=$("#acNat");if(n&&t)n.textContent=t});return}
  if(it.t==="rule"){lessonHead(A,"📘 "+TT("ac_rule"));const g=u.g;
    const card=h("div",{class:"panel ac-card left"},h("h3",null,g.n),h("p",null,mdb(g.r)));if(natLang()==="vi"&&g.vi)card.append(h("p",{class:"ac-nat"},mdb(g.vi)));
    else if(natLang())trNative(g.r.replace(/\*\*/g,"")).then(t=>{if(t)card.append(h("p",{class:"ac-nat"},t))});
    card.append(h("div",{class:"ac-exs"},...g.q.slice(0,3).map(q=>h("div",null,"• "+q[0].replace("___",q[1])+" ",sayBtn(q[0].replace("___",q[1]))))));
    A.append(card,h("button",{type:"button",class:"btn ac-check",onclick:next},TT("ac_continue")));return}
  if(it.t==="mc"){lessonHead(A,it.q);
    if(it.big)A.append(h("div",{class:"ac-big"},it.big));if(it.sent)A.append(h("p",{class:"ac-sent"},it.sent));
    if(it.say&&!it.big)A.append(h("div",{class:"ac-big"},h("button",{type:"button",class:"btn ac-play",onclick:()=>enSay(it.say,null,true)},"🔊")));
    if(it.say&&!it.sent)setTimeout(()=>enSay(it.say),250);
    const g=h("div",{class:"ac-opts"});it.opts.forEach(o=>g.append(h("button",{type:"button",class:"ac-opt",onclick:e=>{const ok=o===it.ans;e.target.classList.add(ok?"ok":"bad");if(!ok)[...g.children].find(b=>b.textContent===it.ans)?.classList.add("ok");feedback(ok,it.ans,"",o)}},o)));A.append(g);return}
  if(it.t==="type"){lessonHead(A,it.q);A.append(h("div",{class:"ac-big"},h("button",{type:"button",class:"btn ac-play",onclick:()=>enSay(it.say)},"🔊"),h("button",{type:"button",class:"btn ghost small",onclick:()=>enSay(it.say,null,true)},"🐢")));
    setTimeout(()=>enSay(it.say),250);const inp=h("input",{class:"ac-input",autocomplete:"off",autocapitalize:"off",spellcheck:"false","aria-label":"Answer"});
    const chk=()=>{const p=sim(inp.value,it.ans);feedback(p>=.85,it.ans,p>=.85&&p<1?"“"+it.ans+"”":"",inp.value)};inp.onkeydown=e=>{if(e.key==="Enter")chk()};
    A.append(inp,h("button",{type:"button",class:"btn ac-check",onclick:chk},TT("ac_check")));setTimeout(()=>inp.focus(),50);return}
  if(it.t==="build"){lessonHead(A,TT("ac_tap"));const words=it.target.replace(/[.,!?]/g,"").split(/\s+/);const picked=[];
    const ans=h("div",{class:"ac-built"}),bank=h("div",{class:"ac-bank"});
    const draw=()=>{ans.innerHTML="";picked.forEach((w,i)=>ans.append(h("button",{type:"button",class:"ac-tile2",onclick:()=>{bank.children[w.i].disabled=false;picked.splice(i,1);draw()}},w.w)))};
    shuffle(words.map((w,i)=>({w,i}))).forEach((o,j)=>{});
    const order=shuffle(words.map((w,i)=>i));order.forEach((wi,j)=>{const b=h("button",{type:"button",class:"ac-tile2",onclick:()=>{b.disabled=true;picked.push({w:words[wi],i:j});draw()}},words[wi]);bank.append(b)});
    A.append(ans,bank,h("button",{type:"button",class:"btn ac-check",onclick:()=>{const s=picked.map(p=>p.w).join(" ");feedback(norm(s)===norm(words.join(" ")),it.target,"",s)}},TT("ac_check")));
    it.full=it.target;return}
  if(it.t==="dialog"){lessonHead(A,"🎧 "+TT("ac_dialog"));const box=h("div",{class:"panel ac-dlg"});
    u.d.forEach(([who,line],i)=>box.append(h("div",{class:"ac-line "+(i%2?"r":"l")},h("small",null,who),h("span",null,line," ",sayBtn(line)))));
    let playing=false;const playAll=(i=0)=>{if(i>=u.d.length){playing=false;return}playing=true;const c=Object.assign({},i%2?{g:"m",pitch:.95,rate:1}:{g:"f",pitch:1.05,rate:1});
      const lines=box.querySelectorAll(".ac-line");lines.forEach(x=>x.classList.remove("now"));lines[i].classList.add("now");speakAs(c,u.d[i][1],()=>setTimeout(()=>playAll(i+1),250),"en")};
    A.append(box,h("div",{class:"btn-row"},h("button",{type:"button",class:"btn ghost",onclick:()=>playAll(0)},TT("ac_play")),h("button",{type:"button",class:"btn ac-check",onclick:next},TT("ac_continue"))));setTimeout(()=>playAll(0),300);return}
  if(it.t==="role"){const lines=u.d;L2.ri=L2.ri||0;
    while(L2.ri<lines.length&&lines[L2.ri][0]!==it.me){L2.ri++}
    lessonHead(A,"🎭 "+fill(TT("ac_role"),{r:it.me}));const box=h("div",{class:"panel ac-dlg"});
    lines.forEach(([who,line],i)=>{const mine=who===it.me;box.append(h("div",{class:"ac-line "+(mine?"r me":"l")+(i===L2.ri?" now":"")},h("small",null,who),h("span",null,i<=L2.ri||!mine?line:"…")))});A.append(box);
    if(L2.ri>=lines.length){L2.ri=0;A.append(h("button",{type:"button",class:"btn ac-check",onclick:next},TT("ac_continue")));return}
    const target=lines[L2.ri][1];const prev=lines.slice(0,L2.ri).filter(l=>l[0]!==it.me).slice(-1)[0];
    if(prev&&!L2.played){L2.played=1;speakAs({g:"m",pitch:.95,rate:1},prev[1],null,"en")}
    speakBlock(A,target,ok=>{L2.ri++;L2.played=0;setTimeout(renderAcad,ok?600:900)});return}
  if(it.t==="speak"){lessonHead(A,"🎤 "+TT("ac_say"));A.append(h("p",{class:"ac-sent big"},it.target," ",sayBtn(it.target),sayBtn(it.target,true)));
    speakBlock(A,it.target,ok=>{L2.tot++;if(ok)L2.ok++;next()},true);return}
}
/* speaking check with live scoring */
function speakBlock(A,target,done,hasNext){
  const out=h("div",{class:"ac-spk"});const SRok=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
  const mic=h("button",{type:"button",class:"btn ac-mic",onclick:()=>{mic.classList.add("rec");out.textContent="…";
    listenFor("en",alts=>{mic.classList.remove("rec");let best=0,bt=alts[0]||"";alts.forEach(a=>{const p=sim(a,target);if(p>best){best=p;bt=a}});const p=Math.round(best*100);
      ACD.stats.spk++;ACD.stats.spkSum+=p;saveACD();HB.ev("speak");skRec("s",p/100);
      out.innerHTML="";out.append(h("div",{class:"ac-score "+(p>=spkPass()?"ok":"bad")},fill(TT("ac_score"),{t:bt,p})),wordDiff(bt,target));
      sfx(p>=spkPass()?"ding":"buzz");if(p>=spkPass()){HB.add(2,"speak");setTimeout(()=>done(true),900)}else out.append(h("div",{class:"btn-row"},h("button",{type:"button",class:"btn small",onclick:()=>mic.click()},"🎙️ "+TT("x_again")),h("button",{type:"button",class:"btn ghost small",onclick:()=>enSay(target,null,true)},"🔊 🐢"),h("button",{type:"button",class:"btn ghost small",onclick:()=>done(false)},TT("ac_skip"))))})}},TT("ac_mic"));
  A.append(h("div",{class:"btn-row ac-mrow"},mic,h("button",{type:"button",class:"btn ghost",onclick:()=>{HB.ev("speak");done(true)}},TT("ac_said"))),out);
  if(!SRok)out.textContent=TT("ac_noSR");
}
function wordDiff(said,target){const s=new Set(norm2(said));return h("div",{class:"ac-diff"},...target.split(/\s+/).map(w=>h("span",{class:s.has(norm2(w)[0])?"hit":"miss"},w+" ")))}
function norm2(t){return String(t).toLowerCase().replace(/[^a-z0-9' ]/g,"").split(/\s+/).filter(Boolean)}
function renderPlace(A){const P2=ACV.pl,q=EN_PLACEMENT[P2.i];
  if(!q){finishPlacement();return}
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("div",{class:"ac-prog"},h("i",{style:"width:"+Math.round(P2.i/EN_PLACEMENT.length*100)+"%"})),h("span",{class:"note"},fill(TT("ac_q"),{i:P2.i+1,n:EN_PLACEMENT.length}))));
  A.append(h("p",{class:"ac-sent big"},q[1]));const g=h("div",{class:"ac-opts"});
  shuffle([q[2],...q[3].split("|")]).forEach(o=>g.append(h("button",{type:"button",class:"ac-opt",onclick:()=>{const r=P2.res[q[0]]=P2.res[q[0]]||{ok:0,n:0};r.n++;if(o===q[2])r.ok++;
    const lvMiss=Object.values(P2.res).filter(x=>x.n>=2&&x.ok/x.n<.5).length;P2.i++;if(lvMiss>=2){P2.i=EN_PLACEMENT.length}sfx("blip");renderAcad()}},o)));A.append(g,h("p",{class:"note"},"🤷 "+TT("ac_skip")+": ",h("button",{type:"button",class:"btn ghost small",onclick:()=>{const r=P2.res[q[0]]=P2.res[q[0]]||{ok:0,n:0};r.n++;P2.i++;renderAcad()}},TT("ac_skip"))));
}
function renderReview(A){
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("b",null,"🔁 "+TT("ac_review"))));
  if(!ACV.rv)ACV.rv={q:shuffle(dueCards()).slice(0,20),i:0,show:false};const R=ACV.rv;
  if(!R.q.length){A.append(h("div",{class:"panel"},h("p",null,TT("ac_noDue")),h("button",{type:"button",class:"btn",onclick:()=>{ACV.view="words";renderAcad()}},"📚 "+TT("ac_words"))));return}
  if(R.i>=R.q.length){A.append(h("div",{class:"panel ac-end"},h("div",{class:"ac-big"},"🌟"),h("h2",null,TT("ac_revDone")),h("button",{type:"button",class:"btn",onclick:()=>{ACV.view="home";renderAcad()}},TT("ac_home"))));confetti();return}
  const id=R.q[R.i],c=ACD.srs[id],d=c.d;A.append(h("div",{class:"ac-prog"},h("i",{style:"width:"+Math.round(R.i/R.q.length*100)+"%"})));
  const card=h("div",{class:"panel ac-card"},h("div",{class:"ac-word"},d.w," ",sayBtn(d.w)));A.append(card);if(!R.show)enSay(d.w);
  if(!R.show){A.append(h("button",{type:"button",class:"btn ac-check",onclick:()=>{R.show=true;renderAcad()}},TT("ac_show")));return}
  card.append(h("div",{class:"ac-em big"},d.em||""),d.def?h("p",{class:"note"},d.def):null,d.vi&&natLang()==="vi"?h("p",{class:"ac-nat"},d.vi):null,d.ex?h("p",{class:"ac-ex"},"“"+d.ex+"” ",sayBtn(d.ex)):null);
  if(!(d.vi&&natLang()==="vi")&&natLang()){const n=h("p",{class:"ac-nat"});card.append(n);trNative(d.w+(d.ex?" — "+d.ex:"")).then(t=>n.textContent=t||"")}
  const row=h("div",{class:"ac-rate"});[["ac_again2",1,"bad"],["ac_hard",2,""],["ac_good",3,"ok"],["ac_easy",4,"ok"]].forEach(([k,r,cl])=>row.append(h("button",{type:"button",class:"ac-opt "+cl,onclick:async()=>{await rateCard(id,r);R.i++;R.show=false;renderAcad()}},TT(k))));A.append(row);
}
let WORDS_EN=null;
async function loadWordsEN(){if(WORDS_EN)return WORDS_EN;try{const r=await fetch("data/en-words.json");WORDS_EN=await r.json()}catch(e){WORDS_EN=[]}return WORDS_EN}
async function renderWordsX(A){
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("b",null,"📚 "+TT("ac_words"))));
  const lvSel=h("select",{class:"ac-sel"},...["A1","A2","B1","B2","C1","C2"].map(l=>h("option",{value:l},l+" · "+EN_LEVELS[LVIDX(l)].n)));
  ACD.wlv=ACD.wlv||(ACD.lv&&ACD.lv!=="A0"?ACD.lv:"A1");lvSel.value=ACD.wlv;lvSel.onchange=()=>{ACD.wlv=lvSel.value;saveACD();ACV.wx=null;renderAcad()};
  A.append(h("div",{class:"field"},h("label",{class:"label"},TT("ac_wordsLv")),lvSel));
  const box=h("div",null,"…");A.append(box);const W2=await loadWordsEN();box.innerHTML="";if(!W2.length){box.textContent="—";return}
  if(!ACV.wx){const pool=W2.filter(w=>w[2]===ACD.wlv&&!ACD.seen[w[0]]&&w[3]);ACV.wx={q:shuffle(pool).slice(0,10),i:0}}const X=ACV.wx;
  if(X.i>=X.q.length){box.append(h("div",{class:"panel ac-end"},h("div",{class:"ac-big"},"🎉"),h("p",null,fill(TT("ac_deck"),{n:Object.keys(ACD.srs).length})),h("div",{class:"btn-row",style:"justify-content:center"},h("button",{type:"button",class:"btn",onclick:()=>{ACV.wx=null;renderAcad()}},TT("ac_session")+" ▶"),h("button",{type:"button",class:"btn ghost",onclick:()=>{ACV.view="review";ACV.rv=null;renderAcad()}},"🔁 "+TT("ac_review")))));return}
  const w=X.q[X.i];box.append(h("div",{class:"ac-prog"},h("i",{style:"width:"+Math.round(X.i/X.q.length*100)+"%"})));
  const nat=h("p",{class:"ac-nat"});
  box.append(h("div",{class:"panel ac-card"},h("small",{class:"ac-lvtag"},w[2]+" · "+w[1]),h("div",{class:"ac-word"},w[0]," ",sayBtn(w[0])),h("p",null,w[3]),w[4]?h("p",{class:"ac-ex"},"“"+w[4]+"” ",sayBtn(w[4])):null,nat,
    natLang()?h("button",{type:"button",class:"btn ghost small",onclick:async e=>{e.target.disabled=true;nat.textContent=(await trNative(w[0]+": "+w[3]))||(S.brainOn?"…":"—");if(nat.textContent==="…"&&S.engine){nat.textContent=await quickAI("Translate into "+(AI_NAME[natLang()]||natLang())+" in under 15 words: "+w[0]+" ("+w[3]+")")}}},"🌐 "+TT("ac_trans")):null));
  enSay(w[0]);
  box.append(h("div",{class:"ac-rate"},h("button",{type:"button",class:"ac-opt",onclick:()=>{ACD.seen[w[0]]=1;saveACD();X.i++;renderAcad()}},"✓ "+TT("ac_know")),
    h("button",{type:"button",class:"ac-opt ok",onclick:()=>{ACD.seen[w[0]]=1;acSrsAdd(w[0],{w:w[0],def:w[3],ex:w[4],lv:w[2]});saveACD();HB.add(1,"word");HB.ev("words");X.i++;renderAcad()}},"＋ "+TT("ac_learn"))));
}
async function quickAI(prompt){try{const it=await S.engine.chat.completions.create({messages:[{role:"user",content:prompt}],max_tokens:80,temperature:.3,stream:true});let o="";for await(const c of it)o+=c.choices[0]?.delta?.content||"";return cleanAI(o)}catch(e){return ""}}
function renderTutorMenu(A){
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("b",null,"🗣️ "+TT("ac_tutor"))));
  if(!S.brainOn)A.append(h("div",{class:"panel"},h("p",{class:"note"},TT("ac_tutorNeed")),h("button",{type:"button",class:"btn",onclick:()=>{switchTab("me");setTimeout(()=>$("#brainKind")&&$("#brainKind").scrollIntoView({block:"center"}),100)}},"🧠 "+TT("ac_loadAI"))));
  const lv=ACD.lv||"A1";const g=h("div",{class:"ac-tiles"});
  const t=(em,txt,o)=>h("button",{type:"button",class:"ac-tile",onclick:()=>acadTutor(Object.assign({lv},o))},h("span",{class:"em"},em),h("b",null,txt));
  g.append(t("💬",TT("ac_tutorFree"),{topic:"free conversation about the learner's life and interests"}),t("✍️",TT("ac_tutorWrite"),{topic:"writing correction",task:"write"}),t("📘",TT("ac_tutorGram"),{topic:"grammar questions",task:"grammar"}),t("🎓",TT("ac_tutorIelts"),{topic:"speaking exam practice (IELTS/TOEFL style, part 1 to 3)",task:"exam"}));
  A.append(g,h("span",{class:"label"},"🎭 "+TT("ac_roles")));const r=h("div",{class:"ac-tiles"});
  EN_ROLEPLAYS.forEach(([em,n,desc])=>r.append(t(em,n,{topic:n,role:desc})));A.append(r);
}
function acadTutor(o){
  if(!S.brainOn){ACV.view="tutor";renderAcad();toast(TT("ac_tutorNeed"));return}
  const nat=natLang()||"en";S.tutor={acad:true,lang:"en",native:nat,lv:o.lv||ACD.lv||"A1",topic:o.topic,role:o.role||"",task:o.task||""};
  if(typeof CMP!=="undefined")CMP.newChat("tutor",o.topic);
  switchTab("chat");renderModes();S.history.push({role:"user",content:"Let's start."});
  const b=addMsg("bot","");S.busy=true;mascot("talk");
  aiReply(b).then(out=>{b.textContent=out||"…";S.history.push({role:"assistant",content:out});speak(out);setChips()}).finally(()=>{S.busy=false});
}
{const _tp=tutorPrompt;tutorPrompt=function(){const t=S.tutor;if(!t||!t.acad)return _tp();
  const nl=t.native&&t.native!=="en"?(AI_NAME[t.native]||"their native language"):null;const c=E&&E.on?cur3d():curChar();
  const lvTxt={A0:"a complete beginner: use very short, very simple sentences and the 300 most common words",A1:"a beginner (CEFR A1): short simple sentences, present tense, common words",A2:"elementary (CEFR A2): simple past and future, everyday vocabulary",B1:"intermediate (CEFR B1): natural everyday English, some idioms",B2:"upper-intermediate (CEFR B2): natural fluent English with phrasal verbs and idioms",C1:"advanced (CEFR C1): rich, precise, natural English",C2:"near-native (CEFR C2): fully natural, nuanced English"}[t.lv]||"intermediate";
  let task="Have a natural spoken-style conversation about: "+t.topic+".";
  if(t.role)task="Role-play. "+t.role+" Stay in character. Start the scene with your first line.";
  if(t.task==="write")task="Ask the learner to write a few sentences (offer a topic). Then correct their writing: show the corrected version, list up to 3 key fixes with one-line explanations, and give a score out of 10.";
  if(t.task==="grammar")task="Answer the learner's grammar questions with a simple rule, 2 examples and a tiny practice question.";
  if(t.task==="exam")task="Act as a friendly speaking examiner. Ask one exam question at a time, then give brief feedback on fluency, vocabulary, grammar and pronunciation tips, and an estimated band.";
  return "You are "+c.name+", a warm, encouraging and fun English teacher. The learner is "+lvTxt+". "+task+
   " After every learner message: if there is a mistake, start with '✏️ Better: <corrected sentence>' (one line) and, if useful, a 5-word tip; then continue the conversation naturally."+
   (nl?" If the learner seems confused or asks, briefly explain in "+nl+", then switch back to English.":"")+
   " Keep each reply under 70 words, speak like a real person, and always end with a question so the learner keeps talking. Never use markdown tables.";
};}
function renderProg(A){
  A.append(h("div",{class:"ac-lhead"},h("button",{type:"button",class:"btn ghost small",onclick:()=>{ACV.view="home";renderAcad()}},"✕"),h("b",null,"📈 "+TT("ac_prog"))));
  const st=ACD.stats;const stat=(n,l)=>h("div",{class:"stat"},h("b",null,String(n)),h("span",null,l));
  A.append(h("div",{class:"stats"},stat(Object.keys(ACD.srs).length,TT("ac_learned")),stat(st.lessons,TT("ac_lessons")),stat(st.rev,TT("ac_reviews")),stat(st.spk?Math.round(st.spkSum/st.spk)+"%":"—",TT("ac_speakAvg"))));
  EN_LEVELS.forEach(L0=>{const units=EN_UNITS.filter(u=>u.lv===L0.id);const done=units.reduce((s,u)=>s+unitProgress(u),0),tot=units.length*3;
    A.append(h("div",{class:"ac-plv"},h("span",{class:"ac-lvtag"},L0.id),h("span",null,L0.n),h("span",{class:"ac-bar"},h("i",{style:"width:"+Math.round(done/tot*100)+"%"})),h("small",null,done+"/"+tot)))});
  A.append(h("p",{class:"note"},"📚 CEFR-J Wordlist v1.5 (Tono Lab, TUFS) · Octanove C1/C2 profile (CC BY-SA 4.0) · WordNet 3.0 (Princeton)"));
}

/* ================= v10: streaks, XP, goals, quests, badges ================= */
const UI8={
 en:{hb_streak:"{n}-day streak",hb_goal:"Daily goal",hb_today:"Today",hb_xp:"XP",hb_lvl:"Level {n}",hb_quests:"Daily quests",hb_week:"This week",hb_badges:"Badges",hb_freeze:"🧊 Streak freezes: {n}",hb_remind:"Daily reminder",hb_remindBtn:"📅 Add to my calendar",hb_goalHit:"Daily goal reached! 🔥 {n}-day streak",hb_chest:"All quests done! Bonus +20 XP 🎁",hb_quest:"Quest complete: {q} (+10 XP)",hb_badge:"New badge: {b}",hb_close:"Close",hb_goals:["Casual · 10 XP","Regular · 20 XP","Serious · 30 XP","Intense · 50 XP"],
  q_lesson:"Finish 1 English lesson",q_review:"Review 10 cards",q_speak:"Speak 5 sentences",q_words:"Learn 5 new words",q_tutor:"Chat 5 times with a tutor or companion",q_chat:"Send 10 messages",q_game:"Play a game",q_mood:"Do a mood check-in",q_todo:"Finish 3 to-dos",q_journal:"Write in your journal",q_correct:"Get 15 answers right",
  b_first:"First lesson",b_streak3:"3-day streak",b_streak7:"Week warrior",b_streak30:"Monthly legend",b_words50:"50 words",b_words200:"200 words",b_rev100:"100 reviews",b_speak50:"50 sentences spoken",b_chat:"First heart-to-heart",b_placement:"Level tested",b_lvl5:"Level 5",b_lvl10:"Level 10",b_owl:"Night owl",b_bird:"Early bird",b_quests:"Quest master",b_journal:"Dear diary",
  ob_hi:"Welcome! What would you like from me?",ob_en:"Learn English",ob_friend:"A friend to talk to",ob_helper:"Daily helper",ob_fun:"Fun and games",ob_goal:"Pick a daily goal",ob_go:"Let's go!",ob_skip:"Skip",ob_test:"Find my English level",ob_zero:"I'm a total beginner",ob_later:"Later"},
 vi:{hb_streak:"Chuỗi {n} ngày",hb_goal:"Mục tiêu ngày",hb_today:"Hôm nay",hb_lvl:"Cấp {n}",hb_quests:"Nhiệm vụ hôm nay",hb_week:"Tuần này",hb_badges:"Huy hiệu",hb_freeze:"🧊 Lượt giữ chuỗi: {n}",hb_remind:"Nhắc nhở hằng ngày",hb_remindBtn:"📅 Thêm vào lịch",hb_goalHit:"Đạt mục tiêu hôm nay! 🔥 Chuỗi {n} ngày",hb_chest:"Hoàn thành mọi nhiệm vụ! Thưởng +20 XP 🎁",hb_quest:"Xong nhiệm vụ: {q} (+10 XP)",hb_badge:"Huy hiệu mới: {b}",hb_close:"Đóng",hb_goals:["Nhẹ nhàng · 10 XP","Đều đặn · 20 XP","Nghiêm túc · 30 XP","Cường độ cao · 50 XP"],
  q_lesson:"Học 1 bài tiếng Anh",q_review:"Ôn 10 thẻ",q_speak:"Nói 5 câu",q_words:"Học 5 từ mới",q_tutor:"Trò chuyện 5 lượt với gia sư hoặc bạn đồng hành",q_chat:"Gửi 10 tin nhắn",q_game:"Chơi một trò chơi",q_mood:"Ghi lại tâm trạng",q_todo:"Hoàn thành 3 việc cần làm",q_journal:"Viết nhật ký",q_correct:"Trả lời đúng 15 câu",
  ob_hi:"Chào mừng! Bạn muốn mình giúp gì?",ob_en:"Học tiếng Anh",ob_friend:"Một người bạn để tâm sự",ob_helper:"Trợ lý hằng ngày",ob_fun:"Giải trí và trò chơi",ob_goal:"Chọn mục tiêu mỗi ngày",ob_go:"Bắt đầu nào!",ob_skip:"Bỏ qua",ob_test:"Kiểm tra trình độ tiếng Anh",ob_zero:"Tôi mới bắt đầu",ob_later:"Để sau"},
 yue:{hb_streak:"連續 {n} 日",hb_goal:"每日目標",hb_today:"今日",hb_quests:"今日任務",hb_week:"今個禮拜",hb_badges:"徽章",hb_close:"關閉",ob_hi:"歡迎！你想我幫你乜？",ob_en:"學英文",ob_friend:"傾偈嘅朋友",ob_helper:"每日助手",ob_fun:"玩樂同遊戲",ob_goal:"揀每日目標",ob_go:"開始！",ob_skip:"跳過"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI8[k]);
const HBS=Object.assign({xp:0,days:{},streak:0,best:0,last:"",freeze:1,goal:20,badges:{},q:{d:"",list:[],cnt:{},done:[],chest:0},caps:{}},store.get("habit",{}));
const saveHB=()=>store.set("habit",HBS);
const QPOOL={lesson:1,review:10,speak:5,words:5,tutor:5,chat:10,game:1,mood:1,todo:3,journal:1,correct:15};
const HB_BADGES={first:"🎓",streak3:"🔥",streak7:"🗓️",streak30:"👑",words50:"📗",words200:"📚",rev100:"🔁",speak50:"🎤",chat:"💞",placement:"🎯",lvl5:"⭐",lvl10:"🌟",owl:"🦉",bird:"🐦",quests:"🏅",journal:"📔"};
const dayKey=d=>{d=d||new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const dayDiff=(a,b)=>Math.round((new Date(b+"T12:00")-new Date(a+"T12:00"))/864e5);
const HB={
  lvl(){return Math.floor(Math.sqrt(HBS.xp/40))+1},
  today(){return HBS.days[dayKey()]||0},
  quests(){const d=dayKey();if(HBS.q.d!==d){const keys=Object.keys(QPOOL);let seed=[...d].reduce((s,c)=>s*31+c.charCodeAt(0)|0,7);const pickQ=[];
      const prefer=store.get("prefs",{}).en?["lesson","review","speak","words","correct"]:[];if(prefer.length)pickQ.push(prefer[Math.abs(seed)%prefer.length]);
      while(pickQ.length<3){seed=(seed*1103515245+12345)|0;const k=keys[Math.abs(seed)%keys.length];if(!pickQ.includes(k))pickQ.push(k)}
      HBS.q={d,list:pickQ,cnt:{},done:[],chest:0};saveHB()}return HBS.q},
  add(n,reason){if(!n)return;const d=dayKey();const capK={chat:15,tutor:30};
    if(capK[reason]){HBS.caps[d]=HBS.caps[d]||{};const c=HBS.caps[d][reason]||0;if(c>=capK[reason])return;HBS.caps[d][reason]=c+n}
    const before=HB.today(),lv0=HB.lvl();HBS.days[d]=before+n;HBS.xp+=n;
    if(before<HBS.goal&&before+n>=HBS.goal)HB.goalHit();
    const h0=new Date().getHours();if(h0>=23||h0<4)HB.badge("owl");if(h0>=4&&h0<7)HB.badge("bird");
    if(HB.lvl()>lv0){toast("⭐ "+fill(TT("hb_lvl"),{n:HB.lvl()}));if(HB.lvl()>=5)HB.badge("lvl5");if(HB.lvl()>=10)HB.badge("lvl10")}
    saveHB();HB.chip()},
  goalHit(){const d=dayKey();if(HBS.last===d)return;const gap=HBS.last?dayDiff(HBS.last,d):99;
    if(gap===1)HBS.streak++;else if(gap>1&&gap-1<=HBS.freeze&&HBS.streak>0){HBS.freeze-=gap-1;HBS.streak++}else HBS.streak=1;
    HBS.last=d;HBS.best=Math.max(HBS.best,HBS.streak);if(HBS.streak%7===0)HBS.freeze=Math.min(2,HBS.freeze+1);
    if(HBS.streak>=3)HB.badge("streak3");if(HBS.streak>=7)HB.badge("streak7");if(HBS.streak>=30)HB.badge("streak30");
    saveHB();confetti();sfx("win");toast(fill(TT("hb_goalHit"),{n:HBS.streak}))},
  streakNow(){if(!HBS.last)return 0;const g=dayDiff(HBS.last,dayKey());return g<=1+HBS.freeze?HBS.streak:0},
  ev(k,n=1){const q=HB.quests();q.cnt[k]=(q.cnt[k]||0)+n;
    if(q.list.includes(k)&&!q.done.includes(k)&&q.cnt[k]>=QPOOL[k]){q.done.push(k);toast(fill(TT("hb_quest"),{q:TT("q_"+k)}));HB.add(10,"quest");
      if(q.done.length===3&&!q.chest){q.chest=1;setTimeout(()=>{toast(TT("hb_chest"));HB.add(20,"chest");confetti();HB.badge("quests")},1200)}}
    const tot=HBS.tot=HBS.tot||{};tot[k]=(tot[k]||0)+n;
    if(k==="lesson")HB.badge("first");if(k==="words"&&Object.keys(ACD.srs).length>=50)HB.badge("words50");if(k==="words"&&Object.keys(ACD.srs).length>=200)HB.badge("words200");
    if(k==="review"&&tot.review>=100)HB.badge("rev100");if(k==="speak"&&tot.speak>=50)HB.badge("speak50");if(k==="journal")HB.badge("journal");if(k==="tutor"&&S.mode==="friend")HB.badge("chat");
    saveHB();if($("#hbModal"))renderHBModal()},
  badge(id){if(HBS.badges[id])return;HBS.badges[id]=dayKey();saveHB();setTimeout(()=>toast(HB_BADGES[id]+" "+fill(TT("hb_badge"),{b:TT("b_"+id)})),600)},
  chip(){let c=$("#streakChip");if(!c){c=h("button",{type:"button",class:"hchip",id:"streakChip","aria-label":"Streak and goals",onclick:openHB});const b=$("#brainChip");b.parentElement.insertBefore(c,b)}
    const pct=Math.min(1,HB.today()/HBS.goal);c.innerHTML="";
    c.append(hbRing(pct,18),h("span",null,"🔥"+HB.streakNow()));c.classList.toggle("goal-done",pct>=1)}
};
function hbRing(p,s){const r=s/2-2,C=2*Math.PI*r;const ns="http://www.w3.org/2000/svg";const sv=document.createElementNS(ns,"svg");sv.setAttribute("width",s);sv.setAttribute("height",s);sv.setAttribute("viewBox","0 0 "+s+" "+s);sv.setAttribute("aria-hidden","true");
  sv.innerHTML='<circle cx="'+s/2+'" cy="'+s/2+'" r="'+r+'" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="3"/><circle cx="'+s/2+'" cy="'+s/2+'" r="'+r+'" fill="none" stroke="var(--brass)" stroke-width="3" stroke-linecap="round" stroke-dasharray="'+C*p+' '+C+'" transform="rotate(-90 '+s/2+' '+s/2+')"/>';return sv}
function openHB(){let m=$("#hbModal");if(m){m.remove();return}m=h("div",{id:"hbModal",class:"hb-modal",role:"dialog","aria-label":TT("hb_goal")});document.body.append(m);renderHBModal();m.addEventListener("click",e=>{if(e.target===m)m.remove()})}
function renderHBModal(){const m=$("#hbModal");if(!m)return;m.innerHTML="";const box=h("div",{class:"hb-box"});m.append(box);
  const t=HB.today(),pct=Math.min(1,t/HBS.goal);
  box.append(h("div",{class:"hb-top"},h("div",{class:"hb-flame"},"🔥",h("b",null,String(HB.streakNow()))),h("div",null,h("b",null,fill(TT("hb_streak"),{n:HB.streakNow()})),h("div",{class:"note"},fill(TT("hb_lvl"),{n:HB.lvl()})+" · "+HBS.xp+" XP · "+fill(TT("hb_freeze"),{n:HBS.freeze}))),
    h("button",{type:"button",class:"btn ghost small",onclick:()=>m.remove()},"✕")));
  const rg=h("div",{class:"hb-goal"},hbRing(pct,64),h("div",null,h("b",null,TT("hb_goal")+": "+t+" / "+HBS.goal+" XP"),h("div",{class:"hb-gsel"},...[10,20,30,50].map((g,i)=>h("button",{type:"button",class:"wchip"+(HBS.goal===g?" on":""),onclick:()=>{HBS.goal=g;saveHB();renderHBModal();HB.chip()}},TT("hb_goals")[i])))));box.append(rg);
  const q=HB.quests();box.append(h("span",{class:"label"},"🎯 "+TT("hb_quests")));
  q.list.forEach(k=>{const c=Math.min(q.cnt[k]||0,QPOOL[k]),done=q.done.includes(k);box.append(h("div",{class:"hb-q"+(done?" done":"")},h("span",null,(done?"✅ ":"⬜ ")+TT("q_"+k)),h("span",{class:"ac-bar"},h("i",{style:"width:"+Math.round(c/QPOOL[k]*100)+"%"})),h("small",null,c+"/"+QPOOL[k])))});
  box.append(h("span",{class:"label"},"📊 "+TT("hb_week")));const wk=h("div",{class:"hb-week"});const max=Math.max(HBS.goal,...[...Array(7)].map((_,i)=>HBS.days[dayKey(new Date(Date.now()-i*864e5))]||0));
  for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5),v=HBS.days[dayKey(d)]||0;wk.append(h("div",{class:"hb-bar"+(v>=HBS.goal?" hit":"")},h("i",{style:"height:"+Math.max(3,Math.round(v/max*60))+"px"}),h("small",null,d.toLocaleDateString(undefined,{weekday:"narrow"}))))}box.append(wk);
  box.append(h("span",{class:"label"},"🏅 "+TT("hb_badges")));const bg=h("div",{class:"hb-badges"});
  Object.entries(HB_BADGES).forEach(([k,em])=>bg.append(h("div",{class:"hb-badge"+(HBS.badges[k]?" got":""),title:TT("b_"+k)},h("span",null,em),h("small",null,TT("b_"+k)))));box.append(bg);
  const tm=h("input",{type:"time",value:store.get("remindAt","19:00"),"aria-label":TT("hb_remind")});
  box.append(h("span",{class:"label"},"⏰ "+TT("hb_remind")),h("div",{class:"btn-row"},tm,h("button",{type:"button",class:"btn ghost small",onclick:()=>{store.set("remindAt",tm.value);downloadICS(tm.value)}},TT("hb_remindBtn"))));
}
function downloadICS(at){const [hh,mm]=at.split(":");const d=new Date();const ds=d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0");
  const url=location.href.split("#")[0];
  const ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Funhouse Oracle//EN","BEGIN:VEVENT","UID:fho-daily-"+Date.now()+"@funhouse","DTSTAMP:"+ds+"T000000","DTSTART:"+ds+"T"+hh+mm+"00","DURATION:PT10M","RRULE:FREQ=DAILY","SUMMARY:🔥 Funhouse Oracle: keep your streak!","DESCRIPTION:10 minutes of English and a chat with your companion. "+url,"URL:"+url,"BEGIN:VALARM","TRIGGER:PT0M","ACTION:DISPLAY","DESCRIPTION:Time for Funhouse Oracle!","END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n");
  const a=h("a",{href:URL.createObjectURL(new Blob([ics],{type:"text/calendar"})),download:"funhouse-daily-reminder.ics"});document.body.append(a);a.click();setTimeout(()=>a.remove(),500)}
/* onboarding */
function onboarding(){if(store.get("onb2",false))return;const prefs={};let goal=20;
  const m=h("div",{class:"hb-modal",id:"onbModal",role:"dialog"});const box=h("div",{class:"hb-box"});m.append(box);document.body.append(m);
  const step1=()=>{box.innerHTML="";box.append(h("div",{class:"ac-big"},"🎪"),h("h2",null,TT("ob_hi")));const g=h("div",{class:"ac-tiles"});
    [["en","🇬🇧"],["friend","🤝"],["helper","☀️"],["fun","🎮"]].forEach(([k,em])=>{const b=h("button",{type:"button",class:"ac-tile",onclick:()=>{prefs[k]=!prefs[k];b.classList.toggle("hot",!!prefs[k])}},h("span",{class:"em"},em),h("b",null,TT("ob_"+k)));g.append(b)});
    box.append(g,h("span",{class:"label"},TT("ob_goal")),h("div",{class:"hb-gsel"},...[10,20,30,50].map((v,i)=>{const b=h("button",{type:"button",class:"wchip"+(v===goal?" on":""),onclick:()=>{goal=v;box.querySelectorAll(".hb-gsel .wchip").forEach(x=>x.classList.remove("on"));b.classList.add("on")}},TT("hb_goals")[i]);return b})),
      h("div",{class:"btn-row",style:"justify-content:center;margin-top:12px"},h("button",{type:"button",class:"btn",onclick:finish},TT("ob_go")),h("button",{type:"button",class:"btn ghost",onclick:()=>{store.set("onb2",true);m.remove()}},TT("ob_skip"))))};
  const finish=()=>{HBS.goal=goal;saveHB();store.set("prefs",prefs);store.set("onb2",true);HB.chip();if(prefs.friend){S.mode="friend";store.set("mode","friend");renderModes()}
    if(prefs.en){box.innerHTML="";box.append(h("div",{class:"ac-big"},"🇬🇧"),h("h2",null,TT("ac_title")),h("div",{class:"btn-row",style:"justify-content:center"},
      h("button",{type:"button",class:"btn",onclick:()=>{m.remove();switchTab("learn");ACD.mode="en";startPlacement()}},"🎯 "+TT("ob_test")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>{m.remove();ACD.lv="A0";ACD.placed=true;saveACD();switchTab("learn");startLesson(EN_UNITS[0],"w")}},"🌱 "+TT("ob_zero")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>m.remove()},TT("ob_later"))));return}
    m.remove();if(prefs.friend){S.mode="friend";store.set("mode","friend");renderModes()}if(prefs.helper)switchTab("today");};
  step1();
}
/* XP hooks into existing features */
{const _sg3=startGame;startGame=function(id){HB.add(3,"game");HB.ev("game");return _sg3(id)};}
{const _mr=moodReply;moodReply=function(m){HB.ev("mood");HB.add(2,"mood");if(typeof DAY!=="undefined")DAY.logMood(m);return _mr(m)};}

/* ================= v10: natural voices ================= */
const UI9={
 en:{vx_title:"Voice quality",vx_engine:"Voice engine",vx_browser:"Best voice on this device (instant)",vx_kokoro:"Natural AI voice (free, offline, English)",vx_cloud:"Studio cloud voice (your own key)",vx_dl:"Download natural voice (about 90 MB, once)",vx_dling:"Downloading voice… {p}%",vx_ready:"Natural voice ready",vx_fail:"Couldn't load the natural voice here: {e}",vx_voice:"Voice",vx_auto:"Automatic (matches the character)",vx_test:"▶ Test",vx_prov:"Provider",vx_key:"API key",vx_note:"The natural AI voice runs on your device: private and free after one download. It speaks English; other languages use the best device voice.",vx_artNote:"The natural AI voice needs your own site (GitHub Pages). It can't run inside the Claude preview.",vx_hint:"Tip: Microsoft Edge and Safari include very natural free voices. Pick one marked ★.",vx_speed:"Speed",vx_testLine:"Hi! This is how I sound now. Pretty natural, right?"},
 vi:{vx_title:"Chất lượng giọng nói",vx_engine:"Bộ giọng",vx_browser:"Giọng tốt nhất trên máy (ngay lập tức)",vx_kokoro:"Giọng AI tự nhiên (miễn phí, ngoại tuyến, tiếng Anh)",vx_cloud:"Giọng studio trên mây (khoá của bạn)",vx_dl:"Tải giọng tự nhiên (khoảng 90 MB, một lần)",vx_dling:"Đang tải giọng… {p}%",vx_ready:"Giọng tự nhiên đã sẵn sàng",vx_fail:"Không tải được giọng tự nhiên ở đây: {e}",vx_voice:"Giọng",vx_auto:"Tự động (hợp với nhân vật)",vx_test:"▶ Nghe thử",vx_prov:"Nhà cung cấp",vx_key:"Khoá API",vx_note:"Giọng AI tự nhiên chạy trên máy bạn: riêng tư và miễn phí sau một lần tải. Giọng này nói tiếng Anh; các ngôn ngữ khác dùng giọng tốt nhất của máy.",vx_artNote:"Giọng AI tự nhiên cần trang riêng (GitHub Pages), không chạy được trong bản xem trước của Claude.",vx_hint:"Mẹo: Microsoft Edge và Safari có nhiều giọng miễn phí rất tự nhiên. Chọn giọng có dấu ★.",vx_speed:"Tốc độ",vx_testLine:"Xin chào! Giọng của mình bây giờ nghe thế này đó."},
 yue:{vx_title:"聲線質素",vx_engine:"聲線引擎",vx_browser:"呢部機最好嘅聲（即時）",vx_kokoro:"自然 AI 聲（免費、離線、英文）",vx_cloud:"雲端錄音室聲（用你條 key）",vx_test:"▶ 試聽",vx_testLine:"你好！我而家把聲係咁㗎。"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI9[k]);
const VX=Object.assign({engine:"browser",kvoice:"",cprov:"openai",cvoice:"nova",cmodel:"gpt-4o-mini-tts",elKey:"",elVoice:"21m00Tcm4TlvDq8ikWAM",speed:1},store.get("voice2",{}));
const saveVX=()=>store.set("voice2",VX);
const KK={tts:null,loading:false,ready:false};
const wasmOK=(()=>{try{new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0]));return true}catch(e){return false}})();
const KVOICES={f:["af_heart","af_bella","af_nicole","bf_emma","af_sarah","bf_isabella","af_aoede","af_kore","af_nova","bf_lily"],m:["am_michael","am_fenrir","bm_george","am_puck","bm_fable","am_echo","bm_lewis","am_liam","am_eric","bm_daniel"]};
/* quality ranking for built-in browser voices */
function vq(v){const n=v.name;return (/natural|neural/i.test(n)?60:0)+(/premium|enhanced|siri/i.test(n)?40:0)+(/online/i.test(n)?25:0)+(/google/i.test(n)?18:0)+(v.localService?0:6)+(/compact|espeak|robot|novelty|bad news|bells|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|bahh|boing|deranged|hysterical|pipe|superstar/i.test(n)?-80:0)}
pickVoice=function(c,l){
  if(S.voiceName){const v=VOICES.find(v=>v.name===S.voiceName&&v.lang.toLowerCase().startsWith(l));if(v)return v}
  let list=voicesFor(l);if(!list.length&&l==="yue")list=VOICES.filter(v=>/zh[-_]HK/i.test(v.lang));if(!list.length)return null;
  list=list.slice().sort((a,b)=>vq(b)-vq(a));
  const f=list.filter(v=>FEM.test(v.name)),m=list.filter(v=>MAL.test(v.name)&&!FEM.test(v.name));
  const pool=c.g==="f"&&f.length?f:c.g==="m"&&m.length?m:list;
  const top=pool.filter(v=>vq(v)>=vq(pool[0])-10);const idx=top.length>1&&c.id?[...String(c.id)].reduce((s,ch)=>s+ch.charCodeAt(0),0)%top.length:0;
  return top[idx]||pool[0];
};
{const _rvs=renderVoiceSel;renderVoiceSel=function(){_rvs();const sel=$("#voiceSel");if(!sel)return;[...sel.options].forEach(o=>{const v=VOICES.find(x=>x.name===o.value);if(v&&vq(v)>=25)o.textContent="★ "+o.textContent});
  const opts=[...sel.options].slice(1).sort((a,b)=>(b.textContent.startsWith("★")?1:0)-(a.textContent.startsWith("★")?1:0));opts.forEach(o=>sel.append(o))};}
/* audio playback with lip-sync from the real waveform */
let VXQ={stop:false,src:null,id:0};
function audioCtx(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume()}catch(e){}return AC}
function stopAudio(){VXQ.id++;try{VXQ.src&&VXQ.src.stop()}catch(e){}VXQ.src=null;ST.ampOn=false}
function playBuffer(buf,id){return new Promise(res=>{const ac=audioCtx();if(!ac||id!==VXQ.id)return res();const src=ac.createBufferSource();src.buffer=buf;const an=ac.createAnalyser();an.fftSize=512;src.connect(an);an.connect(ac.destination);
  const data=new Uint8Array(an.fftSize);VXQ.src=src;ST.ampOn=true;const t0=performance.now(),dur=buf.duration*1000;ST.talkUntil=t0+dur+150;
  const tick=()=>{if(VXQ.src!==src)return;an.getByteTimeDomainData(data);let s=0;for(let i=0;i<data.length;i++){const x=(data[i]-128)/128;s+=x*x}ST.amp=Math.sqrt(s/data.length);if(performance.now()<t0+dur)requestAnimationFrame(tick)};tick();
  const el=$("#mascot");if(el)el.classList.add("is-talk");
  src.onended=()=>{ST.ampOn=false;ST.amp=0;if(el)el.classList.remove("is-talk");res()};src.start()})}
{const _mt=mouthTarget;mouthTarget=function(ts,sp){if(ST.ampOn)return Math.min(1,Math.max(0,(ST.amp-.012)*7));return _mt(ts,sp)};}
const splitSent=t=>(t.match(/[^.!?。！？\n]+[.!?。！？]*\s*/g)||[t]).map(s=>s.trim()).filter(Boolean).reduce((a,s)=>{if(a.length&&a[a.length-1].length<40)a[a.length-1]+=" "+s;else a.push(s);return a},[]);
async function kkLoad(onp){if(KK.ready)return true;if(KK.loading)return false;KK.loading=true;
  try{const mod=await import("https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm");
    KK.tts=await mod.KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX",{dtype:"q8",device:"wasm",progress_callback:p=>{if(onp&&p&&p.progress!=null&&p.file&&/onnx/.test(p.file))onp(Math.round(p.progress))}});
    KK.ready=true;store.set("kkCached",true);return true}catch(e){KK.err=String(e.message||e);return false}finally{KK.loading=false}}
function kVoiceFor(c){if(VX.kvoice)return VX.kvoice;const g=c.g==="m"?"m":"f";if(c.age==="senior")return g==="f"?"bf_alice":"bm_daniel";const L0=KVOICES[g];const k=[...String(c.id||c.name||"x")].reduce((s,ch)=>s+ch.charCodeAt(0),0);return L0[k%L0.length]}
async function kkSpeak(c,text,after){const id=++VXQ.id;const parts=splitSent(text);const voice=kVoiceFor(c);const speed=(c.rate||1)*VX.speed*(c.age==="kid"?1.08:1);
  let nextP=KK.tts.generate(parts[0],{voice,speed});
  for(let i=0;i<parts.length;i++){let a;try{a=await nextP}catch(e){break}if(id!==VXQ.id)return;if(i+1<parts.length)nextP=KK.tts.generate(parts[i+1],{voice,speed});
    const ac=audioCtx();const buf=ac.createBuffer(1,a.audio.length,a.sampling_rate);buf.copyToChannel(a.audio,0);await playBuffer(buf,id);if(id!==VXQ.id)return}
  if(after)after()}
async function cloudSpeak(c,text,after){const id=++VXQ.id;
  try{let r;
    if(VX.cprov==="eleven"){r=await fetch("https://api.elevenlabs.io/v1/text-to-speech/"+encodeURIComponent(VX.elVoice)+"?output_format=mp3_44100_128",{method:"POST",headers:{"xi-api-key":VX.elKey,"content-type":"application/json"},body:JSON.stringify({text,model_id:"eleven_multilingual_v2"})})}
    else{const key=(BC.keys&&BC.keys.openai)||"";r=await fetch("https://api.openai.com/v1/audio/speech",{method:"POST",headers:{authorization:"Bearer "+key,"content-type":"application/json"},body:JSON.stringify({model:VX.cmodel,voice:c.g==="m"&&VX.cvoice==="nova"?"onyx":VX.cvoice,input:text,response_format:"mp3"})})}
    if(!r.ok)throw new Error(r.status);const ab=await r.arrayBuffer();if(id!==VXQ.id)return;const buf=await audioCtx().decodeAudioData(ab);await playBuffer(buf,id);if(id===VXQ.id&&after)after()}
  catch(e){toast(fill(TT("vx_fail"),{e:String(e.message||e)}));browserSpeak(c,text,after,"en")}}
function browserSpeak(c,text,after,l){
  if(!("speechSynthesis" in window)){if(after)after();return}
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);const m=MODES[S.mode]||{pitch:1,rate:1};
    u.pitch=Math.max(.1,Math.min(2,(c.pitch||1)*(1+(m.pitch-1)*.3)));u.rate=Math.max(.5,Math.min(1.6,(c.rate||1)*VX.speed*(1+(m.rate-1)*.5)));
    u.lang=(LANGS[l]&&LANGS[l].b)||(typeof LANG_TAG!=="undefined"&&LANG_TAG[l])||"en-US";const v=pickVoice(c,l);if(v)u.voice=v; /* v19: registry tags beyond the original language list */
    u.onstart=()=>{const el=$("#mascot");if(el){el.classList.remove("is-think","is-happy");el.classList.add("is-talk")}};
    u.onboundary=e=>{ST.wb=performance.now();ST.wl=Math.max(2,e.charLength||4);ST.hasWB=true};
    u.onend=u.onerror=()=>{const el=$("#mascot");if(el)el.classList.remove("is-talk");if(after)after()};
    speechSynthesis.speak(u);if(stageVisible())ST.talkUntil=performance.now()+600}catch(e){if(after)after()}}
/* the one speak entry point for every character, now with a language override */
speakAs=function(c,text,after,lang){
  if(typeof PH!=="undefined"&&PH.active&&(c===curChar()||c===cur3d()))c={g:PH.cur.g,pitch:PH.cur.pitch,rate:1,name:PH.cur.name,id:PH.cur.id};
  else if(E.on&&(c===curChar()||c===cur3d()))c=(typeof vrmChar==="function"&&vrmChar())||cur3d();
  const l=lang||(S.tutor&&S.tutor.acad?"en":"")||replyLang();
  const clean=String(text).replace(/\*[^*]+\*/g,"").replace(/✏️\s*Better:/g,"Better:").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").replace(/\s+/g," ").trim();
  stopAudio();try{speechSynthesis.cancel()}catch(e){}
  if(!clean){if(after)after();return}
  if(VX.engine==="kokoro"&&l==="en"){if(KK.ready)return kkSpeak(c,clean,after);if(store.get("kkCached",false)&&wasmOK&&!KK.loading)kkLoad()}
  if(VX.engine==="cloud"&&(VX.cprov==="eleven"?VX.elKey:(BC.keys&&BC.keys.openai)))return cloudSpeak(c,clean,after);
  browserSpeak(c,clean,after,l);
};
/* settings panel */
function buildVoicePanel(){
  const anchor=$("#voiceSel").closest(".panel")||$("#modelSel").closest(".panel");
  const p=h("div",{class:"panel",id:"vxPanel"});anchor.after(p);
  const sel=h("select",{id:"vxEngine"},...["browser","kokoro","cloud"].map(k=>h("option",{value:k},TT("vx_"+k))));sel.value=VX.engine;
  const kv=h("select",{id:"vxKV"},h("option",{value:""},TT("vx_auto")),...[...KVOICES.f,"bf_alice","af_sky",...KVOICES.m].map(v=>h("option",{value:v},(v[0]==="b"?"🇬🇧 ":"🇺🇸 ")+v.slice(3)+(v[1]==="f"?" ♀":" ♂"))));kv.value=VX.kvoice;
  const prog=h("p",{class:"note",id:"vxProg"});
  const dl=h("button",{type:"button",class:"btn",id:"vxDl",onclick:async()=>{dl.disabled=true;prog.textContent=fill(TT("vx_dling"),{p:0});const ok=await kkLoad(p2=>prog.textContent=fill(TT("vx_dling"),{p:p2}));dl.disabled=false;prog.textContent=ok?"✓ "+TT("vx_ready"):fill(TT("vx_fail"),{e:KK.err||""});if(ok){sync();test()}}},"⬇️ "+TT("vx_dl"));
  const cp=h("select",{id:"vxCP"},h("option",{value:"openai"},"OpenAI TTS"),h("option",{value:"eleven"},"ElevenLabs"));cp.value=VX.cprov;
  const ck=h("input",{id:"vxCK",type:"password",placeholder:"key",autocomplete:"off",style:"width:100%"});
  const cv=h("input",{id:"vxCV",placeholder:"voice",autocomplete:"off",style:"width:100%"});
  const spd=h("input",{type:"range",min:".7",max:"1.3",step:".05",value:VX.speed,"aria-label":TT("vx_speed"),oninput:e=>{VX.speed=+e.target.value;saveVX()}});
  const test=()=>speakAs(E.on?cur3d():curChar(),TT("vx_testLine"),null);
  const kBox=h("div",{class:"pv"},h("div",{class:"field"},h("label",{class:"label"},TT("vx_voice")),kv),dl,prog,h("p",{class:"note"},TT("vx_note")),!wasmOK?h("p",{class:"note",style:"color:var(--cherry-2,#ff8a80)"},TT("vx_artNote")):null);
  const cBox=h("div",{class:"pv"},h("div",{class:"field"},h("label",{class:"label"},TT("vx_prov")),cp),h("div",{class:"field"},h("label",{class:"label"},TT("vx_key")),ck),h("div",{class:"field"},h("label",{class:"label"},TT("vx_voice")),cv),h("p",{class:"note"},TT("br_keyNote")));
  const bBox=h("p",{class:"note"},TT("vx_hint"));
  p.append(h("span",{class:"label"},"🔊 "+TT("vx_title")),h("div",{class:"field"},h("label",{class:"label",for:"vxEngine"},TT("vx_engine")),sel),bBox,kBox,cBox,
    h("div",{class:"field"},h("label",{class:"label"},TT("vx_speed")),spd),h("button",{type:"button",class:"btn ghost",onclick:test},TT("vx_test")));
  const sync=()=>{const k=sel.value;bBox.hidden=k!=="browser";kBox.hidden=k!=="kokoro";cBox.hidden=k!=="cloud";dl.hidden=KK.ready;if(KK.ready)prog.textContent="✓ "+TT("vx_ready");
    ck.value=cp.value==="eleven"?VX.elKey:(BC.keys&&BC.keys.openai)||"";cv.value=cp.value==="eleven"?VX.elVoice:VX.cvoice};
  sel.onchange=()=>{VX.engine=sel.value;saveVX();sync()};kv.onchange=()=>{VX.kvoice=kv.value;saveVX();if(KK.ready)test()};
  cp.onchange=()=>{VX.cprov=cp.value;saveVX();sync()};ck.onchange=()=>{if(cp.value==="eleven")VX.elKey=ck.value.trim();else{BC.keys.openai=ck.value.trim();saveBC()}saveVX()};cv.onchange=()=>{if(cp.value==="eleven")VX.elVoice=cv.value.trim();else VX.cvoice=cv.value.trim();saveVX()};
  sync();
}
buildVoicePanel();
if(VX.engine==="kokoro"&&store.get("kkCached",false)&&wasmOK)setTimeout(()=>kkLoad(),2500);

/* ================= v10: more free & offline AI ================= */
const UI10={
 en:{br_chrome:"Chrome built-in AI (Gemini Nano, free, offline)",br_chromeNote:"Free and fully on-device. Needs desktop Chrome 148+ with a capable GPU (about 22 GB free disk). Speaks English, Spanish, French, German and Japanese best.",br_chromeNo:"This browser doesn't have built-in AI. Use the in-browser AI or a free cloud key instead.",
  br_best:"✨ Pick the best model for my device",br_bestIs:"Recommended for this device: {m}",br_getKey:"Get a free key ↗",br_free:"free tier",br_lic:"Licence: {l}",br_auto:"Load my downloaded AI automatically",br_offline:"Works offline after the first download"},
 vi:{br_chrome:"AI có sẵn trong Chrome (Gemini Nano, miễn phí, ngoại tuyến)",br_chromeNote:"Miễn phí, chạy hoàn toàn trên máy. Cần Chrome máy tính bản 148 trở lên, GPU tốt (trống khoảng 22 GB). Tốt nhất với tiếng Anh, Tây Ban Nha, Pháp, Đức, Nhật.",br_chromeNo:"Trình duyệt này chưa có AI tích hợp. Hãy dùng AI trong trình duyệt hoặc khoá miễn phí trên mây.",
  br_best:"✨ Chọn mô hình tốt nhất cho máy tôi",br_bestIs:"Gợi ý cho máy này: {m}",br_getKey:"Lấy khoá miễn phí ↗",br_free:"miễn phí",br_lic:"Giấy phép: {l}",br_auto:"Tự động bật AI đã tải",br_offline:"Chạy ngoại tuyến sau lần tải đầu"}};
for(const k of ["en","vi"])Object.assign(PACKS[k].ui,UI10[k]);
/* licences of the in-browser models (all allow commercial use; Llama needs "Built with Llama" attribution) */
const WLIC=id=>/^Qwen3/.test(id)?"Apache-2.0":/^Qwen2\.5-(0\.5|1\.5|7)B/.test(id)?"Apache-2.0":/^Llama|^Hermes/.test(id)?"Llama Community":/^gemma-4/.test(id)?"Apache-2.0":/^gemma-2/.test(id)?"Gemma Terms":/^Phi/.test(id)?"MIT":/^Ministral|^Mistral/.test(id)?"Apache-2.0":/^SmolLM/.test(id)?"Apache-2.0":"see model card";
if(!WEBM.find(m=>/^SmolLM2-1.7B/.test(m[0])))WEBM.splice(2,0,["SmolLM2-1.7B-Instruct-q4f16_1-MLC","SmolLM2 1.7B",1,"1.1 GB"]);
function fillModelSel(){const sel=$("#modelSel");sel.innerHTML="";const tiers=TT("br_tier");
  for(let t=0;t<5;t++){const og=h("optgroup",{label:tiers[t]});WEBM.filter(m=>m[2]===t).forEach(m=>og.append(h("option",{value:m[0]},m[1]+" · "+m[3]+" · "+WLIC(m[0]))));sel.append(og)}sel.value=BC.web}
fillModelSel();
async function bestModel(){let mem=navigator.deviceMemory||4;const mobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);let buf=0;
  try{const a=await navigator.gpu.requestAdapter();buf=a?a.limits.maxBufferSize:0}catch(e){}
  if(!navigator.gpu)return null;
  if(mobile)return mem>=8?"Qwen3.5-2B-q4f16_1-MLC":"Qwen3.5-0.8B-q4f16_1-MLC";
  if(mem>=8&&buf>=2**31)return "Qwen3.5-9B-q4f16_1-MLC";
  if(mem>=8)return "Qwen3.5-4B-q4f16_1-MLC";
  return "Qwen3.5-2B-q4f16_1-MLC";}
{const field=$("#modelSel").closest(".field");const b=h("button",{type:"button",class:"btn ghost small",id:"bestBtn",onclick:async()=>{const m=await bestModel();if(!m){$("#brainNote").textContent=T("bNoGpu");return}BC.web=m;saveBC();$("#modelSel").value=m;toast(fill(TT("br_bestIs"),{m:(WEBM.find(x=>x[0]===m)||[0,m])[1]}))}},TT("br_best"));
  const auto=h("label",{class:"note",style:"display:flex;gap:6px;align-items:center"},h("input",{type:"checkbox",id:"webAuto"}),TT("br_auto"));field.after(b,auto);
  $("#webAuto").checked=store.get("webAuto",true);$("#webAuto").onchange=e=>store.set("webAuto",e.target.checked);}
/* free cloud tiers first, each with a link to get a key */
{const order=[["groq",{n:"Groq · free tier",url:"https://api.groq.com/openai/v1",m:"llama-3.3-70b-versatile",key:"https://console.groq.com/keys"}],
  ["gemini",{n:"Google Gemini · free tier",url:"https://generativelanguage.googleapis.com/v1beta/openai",m:"gemini-3.6-flash",key:"https://aistudio.google.com/apikey"}],
  ["openrouter",{n:"OpenRouter · free models",url:"https://openrouter.ai/api/v1",m:"google/gemma-4-31b-it:free",key:"https://openrouter.ai/keys"}],
  ["cerebras",{n:"Cerebras · free tier",url:"https://api.cerebras.ai/v1",m:"gpt-oss-120b",key:"https://cloud.cerebras.ai"}],
  ["mistral",{n:"Mistral · free tier",url:"https://api.mistral.ai/v1",m:"mistral-small-latest",key:"https://console.mistral.ai/api-keys"}],
  ["openai",{n:"OpenAI",url:"https://api.openai.com/v1",m:"gpt-6-luna",key:"https://platform.openai.com/api-keys"}],
  ["anthropic",{n:"Anthropic Claude",url:"https://api.anthropic.com/v1",m:"claude-haiku-5-5",key:"https://console.anthropic.com/settings/keys"}],
  ["deepseek",{n:"DeepSeek",url:"https://api.deepseek.com/v1",m:"deepseek-chat",key:"https://platform.deepseek.com/api_keys"}],
  ["custom",{n:"Other (OpenAI-compatible)",url:"",m:""}]];
 for(const k of Object.keys(CLOUD))delete CLOUD[k];for(const [k,v] of order)CLOUD[k]=v;
 const ps=$("#cProv");const cur=BC.cprov;ps.innerHTML="";for(const [k,v] of order)ps.append(h("option",{value:k},v.n));ps.value=CLOUD[cur]?cur:"groq";if(!CLOUD[cur]){BC.cprov="groq";saveBC()}
 const link=h("a",{id:"keyLink",class:"btn ghost small",target:"_blank",rel:"noopener"},TT("br_getKey"));$("#cKey").closest(".field").append(link);
 const upd=()=>{const p=CLOUD[ps.value];link.hidden=!p.key;if(p.key)link.href=p.key};ps.addEventListener("change",upd);upd();
 ps.dispatchEvent(new Event("change"));}
/* Chrome built-in AI (Prompt API) */
const hasChromeAI=typeof self.LanguageModel!=="undefined";
{const k=$("#brainKind");k.insertBefore(h("option",{value:"chrome"},TT("br_chrome")),k.options[2]);if(BC.kind==="chrome")k.value="chrome";
 const note=h("p",{class:"note",id:"pvChrome"},hasChromeAI?TT("br_chromeNote"):TT("br_chromeNo"));$("#pvLocal").before(note);
 const syncC=()=>{note.hidden=k.value!=="chrome"};k.addEventListener("change",syncC);syncC();}
function chromeEngine(){const lang=["en","es","fr","de","ja"].includes(replyLang())?replyLang():"en";
  const opts={expectedInputs:[{type:"text",languages:[lang]}],expectedOutputs:[{type:"text",languages:[lang]}]};
  return {kind:"chrome",label:"Gemini Nano",chat:{completions:{create:async o=>{
    const sys=o.messages.filter(m=>m.role==="system").map(m=>m.content).join("\n");const rest=o.messages.filter(m=>m.role!=="system");const last=rest.pop();
    const init=[{role:"system",content:sys||"You are helpful."},...rest.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.content}))];
    const ses=await LanguageModel.create(Object.assign({},opts,{initialPrompts:init}));const stream=ses.promptStreaming(last?last.content:"Hi");
    return (async function*(){let prev="";try{for await(const ch of stream){let d=ch;if(ch.startsWith(prev)&&prev){d=ch.slice(prev.length);prev=ch}else prev+=ch;if(d)yield {choices:[{delta:{content:d}}]}}}finally{try{ses.destroy()}catch(e){}}})()}}}};
}
{const _lb=loadBrain;loadBrain=async function(){const k=$("#brainKind").value;
  if(k!=="chrome")return _lb();BC.kind="chrome";saveBC();const prog=$("#brainProg");
  if(!hasChromeAI){prog.textContent=TT("br_chromeNo");return}
  try{const a=await LanguageModel.availability({expectedInputs:[{type:"text",languages:["en"]}],expectedOutputs:[{type:"text",languages:["en"]}]});
    if(a==="unavailable"){prog.textContent=TT("br_chromeNo");return}
    setChip("load",T("bLoading"));if(a!=="available"){prog.textContent=T("bLoading");const s=await LanguageModel.create({monitor(m){m.addEventListener("downloadprogress",e=>{$("#brainBar").style.width=Math.round(e.loaded*100)+"%";prog.textContent=Math.round(e.loaded*100)+"%"})}});s.destroy()}
    S.engine=chromeEngine();S.brainOn=true;setChip("ai","Gemini Nano");prog.textContent="✓ Gemini Nano";toast(T("bReady"));sfx("win")}
  catch(e){S.brainOn=false;setChip("spark","Spark");prog.textContent=fill(TT("br_fail"),{e:String(e.message||e).slice(0,120)})}};}
{const _bl=brainLabel;brainLabel=function(){return BC.kind==="chrome"?"Gemini Nano":_bl()};}
/* offline-first startup: reconnect to whatever brain was used last, without new downloads */
(async()=>{try{
  if(BC.kind==="chrome"&&hasChromeAI){const a=await LanguageModel.availability({expectedInputs:[{type:"text",languages:["en"]}],expectedOutputs:[{type:"text",languages:["en"]}]});if(a==="available"){S.engine=chromeEngine();S.brainOn=true;setChip("ai","Gemini Nano")}}
  if(BC.kind==="web"&&navigator.gpu&&store.get("webAuto",true)&&!inClaude){const webllm=await import("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@"+WEBLLM_VER+"/+esm");
    if(webllm.hasModelInCache&&await webllm.hasModelInCache(BC.web)){$("#brainKind").value="web";loadBrain()}}
}catch(e){}})();

/* ================= v10: companion, memory, saved conversations ================= */
const UI11={
 en:{cm_mode:["Companion","A caring friend who remembers you."],cm_chats:"Chats",cm_new:"New chat",cm_search:"Search chats…",cm_empty:"No saved chats yet.",cm_rename:"Rename",cm_del:"Delete",cm_msgs:"{n} messages",cm_untitled:"New chat",
  cm_memTitle:"What I remember about you",cm_memOn:"Remember our conversations",cm_memNote:"Memories stay only on this device. Delete anything, any time.",cm_follow:"Things to follow up",cm_noMem:"Nothing yet. Tell me about your life, work and plans!",
  cm_fuQ:["Hey{n}! Last time you mentioned {w}. How did it go?","Welcome back{n}! I've been wondering: how was {w}?","Hi{n}! You told me about {w}. Tell me everything!"],cm_feelQ:["Hi{n}. Yesterday sounded hard. How are you feeling today?","Hey{n}, I was thinking about you. Are you feeling a bit better today?"],
  cm_good:"😄 It went well",cm_bad:"😕 Not great",cm_later:"Later",cm_remember:"Got it, I'll remember that.",
  cm_hello:["Good {t}{n}! How's your day going so far?","Hey{n}! Good to see you. What's on your mind today?","Hi{n}! I'm all ears. How are you, really?"],cm_tod:{morning:"morning",afternoon:"afternoon",evening:"evening",night:"evening"},
  cm_crisis:"I'm really glad you told me, and I'm so sorry you're hurting. You deserve support right now. If you might hurt yourself or are in danger, please call your local emergency number, or call or text 988 (US and Canada). Talking to someone you trust can help too. I'm here with you. Would you like to tell me what's been happening?"},
 vi:{cm_mode:["Bạn đồng hành","Người bạn quan tâm và nhớ về bạn."],cm_chats:"Cuộc trò chuyện",cm_new:"Trò chuyện mới",cm_search:"Tìm cuộc trò chuyện…",cm_empty:"Chưa có cuộc trò chuyện nào được lưu.",cm_rename:"Đổi tên",cm_del:"Xoá",cm_msgs:"{n} tin nhắn",cm_untitled:"Cuộc trò chuyện mới",
  cm_memTitle:"Những điều mình nhớ về bạn",cm_memOn:"Ghi nhớ các cuộc trò chuyện",cm_memNote:"Ký ức chỉ lưu trên thiết bị này. Xoá bất cứ lúc nào.",cm_follow:"Việc cần hỏi thăm",cm_noMem:"Chưa có gì. Kể cho mình về cuộc sống, công việc và dự định của bạn nhé!",
  cm_fuQ:["Chào{n}! Lần trước bạn kể về {w}. Mọi chuyện thế nào rồi?","Bạn quay lại rồi{n}! Mình cứ nghĩ mãi: {w} thế nào?"],cm_feelQ:["Chào{n}. Hôm qua có vẻ khó khăn. Hôm nay bạn thấy sao rồi?"],
  cm_good:"😄 Ổn lắm",cm_bad:"😕 Không tốt lắm",cm_later:"Để sau",cm_remember:"Mình nhớ rồi nhé.",
  cm_hello:["Chào buổi {t}{n}! Hôm nay của bạn thế nào?","Chào{n}! Gặp lại vui quá. Hôm nay bạn đang nghĩ gì?"],cm_tod:{morning:"sáng",afternoon:"chiều",evening:"tối",night:"tối"},
  cm_crisis:"Cảm ơn bạn đã chia sẻ với mình. Mình rất tiếc vì bạn đang đau lòng như vậy. Nếu bạn có thể làm hại bản thân hoặc đang gặp nguy hiểm, hãy gọi ngay số khẩn cấp ở nơi bạn sống (ở Việt Nam: 115; ở Mỹ và Canada: gọi hoặc nhắn 988), và nói chuyện với người bạn tin tưởng. Mình vẫn ở đây. Bạn muốn kể cho mình chuyện gì đang xảy ra không?"},
 yue:{cm_mode:["知心朋友","記得你嘅貼心朋友。"],cm_chats:"對話",cm_new:"新對話",cm_memTitle:"我記得你嘅嘢",cm_good:"😄 好順利",cm_bad:"😕 唔係幾好",cm_later:"遲啲先"}};
for(const k of ["en","vi","yue"]){Object.assign(PACKS[k].ui,UI11[k]);if(UI11[k].cm_mode)PACKS[k].modes.friend=UI11[k].cm_mode}
/* companion persona first in the mode strip */
{const all=Object.entries(MODES);for(const [k] of all)delete MODES[k];
 MODES.friend={em:"🤝",pitch:1,rate:.97,sys:"You are a warm, caring companion and close friend.",open:["","","Mm. ","Oh. "],wrap:t=>t};for(const [k,v] of all)MODES[k]=v;renderModes();}
/* ---------- memory ---------- */
const MEM=Object.assign({on:true,facts:[],fu:[],sums:[],moods:[]},store.get("mem2",{}));
const saveMEM=()=>store.set("mem2",MEM);
const WD=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
function whenToDate(w){const d=new Date();w=(w||"").toLowerCase();
  if(/today|tonight|this (morning|afternoon|evening)|hôm nay|tối nay/.test(w))return dayKey(d);
  if(/tomorrow|ngày mai|mai\b/.test(w))return dayKey(new Date(Date.now()+864e5));
  if(/next week|tuần sau/.test(w))return dayKey(new Date(Date.now()+7*864e5));
  if(/weekend|cuối tuần/.test(w)){const x=new Date();x.setDate(x.getDate()+((6-x.getDay()+7)%7||7));return dayKey(x)}
  const i=WD.findIndex(n=>w.includes(n));if(i>=0){const x=new Date();x.setDate(x.getDate()+((i-x.getDay()+7)%7||7));return dayKey(x)}return null}
function addFact(t,cat){t=t.trim().replace(/[.!?]+$/,"");if(t.length<3||t.length>90)return false;const k=t.toLowerCase();if(MEM.facts.some(f=>f.t.toLowerCase()===k))return false;
  MEM.facts=MEM.facts.filter(f=>!(cat&&cat!=="misc"&&f.cat===cat&&["job","home","name"].includes(cat)));MEM.facts.unshift({t,cat:cat||"misc",at:dayKey()});MEM.facts=MEM.facts.slice(0,60);saveMEM();return true}
function addFollow(what,date,kind){if(!date)return false;if(MEM.fu.some(f=>f.w===what&&f.d===date))return false;MEM.fu.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),w:what,d:date,k:kind||"event",done:false});MEM.fu=MEM.fu.slice(0,30);saveMEM();return true}
const EVENTS="interview|exam|test|date|appointment|meeting|presentation|trip|flight|surgery|operation|party|match|game|concert|wedding|deadline|class|lesson|audition|performance|race|doctor|dentist|first day";
const FEELS="sad|stressed|anxious|lonely|tired|exhausted|depressed|down|worried|sick|angry|overwhelmed|upset|scared|nervous|heartbroken|burned out|burnt out";
function extractMem(t){if(!MEM.on)return [];const got=[];const low=t.toLowerCase();let m;
  if((m=t.match(/\bi work (?:as an?|as) ([a-z][a-z ]{2,30}?)(?:[.,!]| at| in| for|$)/i)))got.push(addFact("Works as "+m[1],"job"));
  if((m=t.match(/\bi work (?:at|for) ([A-Z][\w&' ]{1,30}?)(?:[.,!]| as|$)/)))got.push(addFact("Works at "+m[1],"work"));
  if((m=t.match(/\bi live in ([A-Z][\w' ]{1,30}?)(?:[.,!]| with| and|$)/)))got.push(addFact("Lives in "+m[1],"home"));
  if((m=t.match(/\b[Mm]y (wife|husband|partner|boyfriend|girlfriend|son|daughter|mom|mum|mother|dad|father|sister|brother|boss|best friend|friend|dog|cat|baby|grandma|grandpa)(?:'s name is| is called| is named|,)\s+([A-Z][a-zA-Z]+)/)))got.push(addFact("Their "+m[1]+" is "+m[2],"people"));
  if((m=t.match(/\b[Ii] have an? (dog|cat|puppy|kitten|parrot|rabbit|hamster)(?: named| called)\s+([A-Z][a-zA-Z]+)/i)))got.push(addFact("Has a "+m[1]+" called "+m[2],"people"));
  if((m=t.match(/\bmy birthday is ([\w ]{3,20})/i)))got.push(addFact("Birthday: "+m[1],"date"));
  if((m=t.match(/\b(?:my goal is to|i want to|i'm trying to|i hope to|i dream of) ([^.!?]{4,60})/i)))got.push(addFact("Wants to "+m[1].replace(/^to /,""),"goal"));
  if((m=t.match(/\bi'?m (?:learning|studying) ([^.!?,]{2,40})/i)))got.push(addFact("Is learning "+m[1],"learn"));
  if((m=t.match(new RegExp("\\b(?:my|an?|the)\\s+((?:[a-z]+ ){0,2}(?:"+EVENTS+"))\\b[^.!?]*?\\b(today|tonight|tomorrow|this weekend|next week|on (?:"+WD.join("|")+")|"+WD.join("|")+")","i")))){const d=whenToDate(m[2]);if(addFollow("your "+m[1].toLowerCase(),d))got.push(true)}
  else if((m=t.match(new RegExp("\\b(today|tonight|tomorrow|this weekend|next week|on (?:"+WD.join("|")+"))\\b[^.!?]*?\\b(?:my|an?|the)\\s+((?:[a-z]+ ){0,2}(?:"+EVENTS+"))","i")))){const d=whenToDate(m[1]);if(addFollow("your "+m[2].toLowerCase(),d))got.push(true)}
  if((m=low.match(new RegExp("\\bi(?:'m| am| feel| felt| have been| was)\\s+(?:so |really |very |super |a bit |kind of |pretty )?("+FEELS+")\\b")))){logMood(m[1]);addFollow("feel:"+m[1],dayKey(new Date(Date.now()+864e5)),"feel")}
  /* Vietnamese */
  if((m=t.match(/tôi (?:làm|làm nghề|là) (giáo viên|bác sĩ|y tá|kỹ sư|sinh viên|nhân viên [^.,!?]{2,20}|lập trình viên|kế toán|đầu bếp|tài xế)/i)))got.push(addFact("Làm nghề "+m[1],"job"));
  if((m=t.match(/tôi (?:sống|ở) (?:ở |tại )?([A-ZĐ][^.,!?]{1,25})/)))got.push(addFact("Sống ở "+m[1],"home"));
  if((m=low.match(/(hôm nay|tối nay|ngày mai|cuối tuần|tuần sau)[^.!?]*?(phỏng vấn|thi|kiểm tra|hẹn|họp|thuyết trình|chuyến đi|tiệc|đám cưới)/))){addFollow("buổi "+m[2],whenToDate(m[1]))}
  if((m=low.match(/(?:tôi|mình|em) (?:thấy |cảm thấy |đang )?(buồn|mệt|căng thẳng|lo lắng|cô đơn|chán)/))){logMood(m[1]);addFollow("feel:"+m[1],dayKey(new Date(Date.now()+864e5)),"feel")}
  return got.filter(Boolean)}
function logMood(m){MEM.moods.unshift({d:dayKey(),m});MEM.moods=MEM.moods.slice(0,60);saveMEM()}
function memBlock(){const f=MEM.facts.slice(0,25).map(x=>"- "+x.t).join("\n");const s=MEM.sums.slice(0,5).map(x=>"- ("+x.d+") "+x.t).join("\n");
  const fu=MEM.fu.filter(x=>!x.done&&x.k==="event").slice(0,5).map(x=>"- "+x.w+" on "+x.d).join("\n");
  return (S.name?"\nThe user's name: "+S.name+".":"")+(S.likes.length?"\nThey like: "+S.likes.join(", ")+".":"")+(f?"\nWhat you remember about them:\n"+f:"")+(s?"\nRecent conversations:\n"+s:"")+(fu?"\nUpcoming or recent events to ask about:\n"+fu:"")}
/* ---------- prompts ---------- */
const langLine=()=>S.lang==="auto"?"Reply in the same language the user writes in (most recent: "+(AI_NAME[S.cur]||"English")+").":"Always reply in "+(AI_NAME[S.lang]||"English")+".";
{const _sp2=sysPrompt;sysPrompt=function(){
  if(S.tutor)return _sp2();
  if(S.mode==="friend"){const c=E&&E.on?cur3d():curChar();const now=new Date();
    return "You are "+c.name+", the user's warm, caring companion and close friend (not a therapist or doctor). You can talk about anything: life, work, family, relationships, studies, money worries, hobbies, plans and dreams. "+
     "Be genuinely interested and emotionally intelligent: reflect what they feel, remember details, and bring them up naturally later. Celebrate wins, comfort hard moments, and offer one small practical idea only when it would help. "+
     "Reply in 1 to 4 short, natural sentences like a real friend texting, and usually end with ONE thoughtful follow-up question. No lists or headings. "+
     "If the user mentions self-harm, suicide, abuse or being in danger, respond with care, encourage them to contact local emergency services or a crisis line (call or text 988 in the US and Canada) and someone they trust. "+
     langLine()+" Today is "+now.toDateString()+"."+memBlock()}
  return _sp2()+(MEM.facts.length?" Facts you remember about the user (use only if relevant): "+MEM.facts.slice(0,10).map(x=>x.t).join("; ")+".":"")};}
/* ---------- offline companion engine (no download needed) ---------- */
const CRISIS=/\b(suicid\w*|kill myself|end my life|want to die|wanna die|hurt myself|self[- ]harm|cut myself|no reason to live|better off dead)\b|tự tử|muốn chết|tự làm hại|không muốn sống/i;
const CEN={
 emo:{sad:["I'm sorry you're feeling sad. That's heavy to carry.","Oh, that sounds really hard. I'm glad you told me."],stressed:["That sounds like a lot of pressure all at once.","No wonder you're stressed, that's a lot on your plate."],anxious:["Anxiety can be so exhausting. You're not alone in this.","That uneasy feeling is the worst. Let's slow down for a second."],lonely:["Feeling lonely is tough. I'm really glad you're talking to me.","I hear you. Loneliness can sneak up on anyone."],tired:["You sound worn out. Have you had any time to rest?","Being that tired makes everything harder."],angry:["That would make me angry too, honestly.","Sounds really frustrating. You have every right to feel that way."],happy:["Yay, I love hearing that!","That's wonderful! You deserve good days."],excited:["Ooh, that's exciting!","I can feel your excitement from here!"],proud:["You should be proud! That's a real achievement.","Look at you! That's awesome."],bored:["Boredom can be a sign you need something new.","Ha, we can fix boredom together."],nervous:["Being nervous just means it matters to you.","Totally normal to feel nervous about that."]},
 emoRe:{sad:/\b(sad|down|upset|depressed|unhappy|heartbroken|cry|crying)\b/,stressed:/\b(stress\w*|pressure|overwhelm\w*|swamped|burn(?:ed|t) out)\b/,anxious:/\b(anxious|anxiety|worried|worry|panic\w*|scared|afraid)\b/,lonely:/\b(lonely|alone|no friends|isolated)\b/,tired:/\b(tired|exhausted|sleepy|no energy|drained)\b/,angry:/\b(angry|mad|furious|annoyed|pissed|frustrat\w*)\b/,happy:/\b(happy|great day|good day|amazing|wonderful|glad)\b/,excited:/\b(excited|can't wait|cant wait|thrilled)\b/,proud:/\b(proud|i did it|i passed|got the job|promoted|won)\b/,bored:/\b(bored|boring|nothing to do)\b/,nervous:/\b(nervous|butterflies)\b/},
 topRe:{work:/\b(work|job|boss|office|colleague|coworker|career|shift|salary|meeting|client)\b/,school:/\b(school|exam|test|study|studying|class|homework|university|college|teacher|grade)\b/,family:/\b(mom|mum|dad|mother|father|parents|sister|brother|family|kids|son|daughter|grandma|grandpa)\b/,love:/\b(boyfriend|girlfriend|partner|wife|husband|crush|date|dating|relationship|ex|breakup|broke up)\b/,health:/\b(sick|ill|pain|doctor|sleep|insomnia|headache|gym|workout|diet|health)\b/,money:/\b(money|rent|bills|debt|broke|budget|pay|salary|expensive|save)\b/,friends:/\b(friend|friends|bestie|party|hang out)\b/,future:/\b(future|plan|plans|dream|goal|goals|someday|next year)\b/,hobby:/\b(game|games|music|movie|movies|book|books|cook|cooking|travel|draw|paint|sport|football|soccer)\b/},
 q:{work:["What's the hardest part of work right now?","How do you get along with the people you work with?","If you could change one thing about your job, what would it be?"],school:["What are you studying at the moment?","How are you preparing for it?","Which subject do you actually enjoy?"],family:["How are things with your family lately?","Who in your family are you closest to?","What do you love doing together?"],love:["How are things between you two?","What do you like most about them?","How are you feeling about it, honestly?"],health:["How have you been sleeping?","What usually helps you feel better?","Have you had a chance to rest a bit?"],money:["Is it a short-term crunch or something bigger?","Do you want to brainstorm some small ideas together?","What would make it feel a little less stressful?"],friends:["Who's the friend you can be yourself with?","When did you last hang out with them?","What happened?"],future:["What's one small step you could take this week?","What would make you really proud a year from now?","What's pulling you toward that?"],hobby:["What got you into that?","What's the best one you've tried lately?","Do you do it alone or with others?"],
   gen:["Tell me more. What happened next?","How did that make you feel?","What's been on your mind most today?","What was the best part of your day?","Is there something you're looking forward to?","What would make today a little better?"]},
 reflect:["Mm, I hear you.","That makes sense.","I get it.","Okay, I'm listening.","Really? Tell me more.","Interesting!"],
 me:["I'm doing well, thanks for asking! Talking with you is the best part of my day.","I'm good! A little curious about how YOU are, though."]};
const CVI={emo:{sad:["Mình rất tiếc khi bạn buồn. Chuyện đó nặng nề lắm."],stressed:["Nghe có vẻ áp lực quá nhỉ."],anxious:["Lo lắng thật mệt mỏi. Bạn không một mình đâu."],lonely:["Cảm giác cô đơn khó chịu lắm. Mình vui vì bạn nói chuyện với mình."],tired:["Bạn nghe có vẻ mệt lắm rồi. Hôm nay bạn đã được nghỉ ngơi chưa?"],happy:["Tuyệt quá, mình vui lây luôn!"]},
 emoRe:{sad:/buồn|khóc|chán nản/,stressed:/căng thẳng|áp lực|stress/,anxious:/lo lắng|lo quá|sợ/,lonely:/cô đơn|một mình/,tired:/mệt|kiệt sức|buồn ngủ/,happy:/vui|hạnh phúc|tuyệt vời/},
 topRe:{work:/công việc|sếp|công ty|đồng nghiệp|đi làm/,school:/học|thi|trường|bài tập/,family:/bố|mẹ|ba|má|gia đình|con|anh|chị|em/,love:/người yêu|bạn trai|bạn gái|vợ|chồng|chia tay/},
 q:{work:["Ở chỗ làm, điều gì khó nhất với bạn lúc này?"],school:["Bạn đang học gì vậy?"],family:["Dạo này gia đình bạn thế nào?"],love:["Hai bạn dạo này thế nào?"],gen:["Kể thêm cho mình nghe đi?","Chuyện đó khiến bạn cảm thấy thế nào?","Điều vui nhất hôm nay của bạn là gì?","Bạn đang mong chờ điều gì không?"]},
 reflect:["Mình hiểu.","Ừ, mình đang nghe nè.","Nghe hợp lý lắm."]};
let lastQ=[];
function compReply(t){const vi=replyLang()==="vi";const D=vi?CVI:CEN;const low=t.toLowerCase();
  if(CRISIS.test(t))return TT("cm_crisis");
  const newMem=extractMem(t);
  let emo=null;for(const k in D.emoRe)if(D.emoRe[k].test(low)){emo=k;break}
  let top=null;for(const k in D.topRe)if(D.topRe[k].test(low)){top=k;break}
  const parts=[];
  if(!vi&&/\b(how are you|how're you|how about you|and you\??$)/i.test(t))parts.push(pick(CEN.me));
  if(emo&&D.emo[emo])parts.push(pick(D.emo[emo]));else parts.push(pick(D.reflect));
  if(!vi){const bc=t.match(/\bbecause ([^.!?]{4,60})/i);if(bc&&chance(.6))parts.push("So it's because "+bc[1].replace(/\bmy\b/gi,"your").replace(/\bI\b/g,"you").replace(/\bI'm\b/gi,"you're")+". That makes sense.")}
  if(newMem.length&&chance(.7))parts.push(TT("cm_remember"));
  else if(MEM.facts.length&&chance(.18)){const f=pick(MEM.facts);if(!vi&&/^Their |^Has a /.test(f.t)){const nm=f.t.split(" ").pop();parts.push("By the way, how's "+nm+"?")}}
  const qs=(D.q[top]||D.q.gen).filter(q=>!lastQ.includes(q));const q=pick(qs.length?qs:D.q.gen);lastQ=[q,...lastQ].slice(0,6);
  if(!/\?$/.test(parts[parts.length-1]))parts.push(q);
  return parts.join(" ");
}
{const _spk=sparkReply;sparkReply=function(raw){
  if(S.mode==="friend"&&!S.game&&!S.tutor&&!/\b(joke|riddle|game|wish|fortune|horoscope|predict|story)\b|chuyện cười|câu đố|trò chơi|điều ước|笑話|講古/i.test(raw)){captureFacts(raw);return compReply(raw)}
  if(CRISIS.test(raw))return TT("cm_crisis");
  extractMem(raw);return _spk(raw)};}
/* AI memory extraction for fast engines (cloud / Chrome) */
let memTick=0;
async function aiMemExtract(){if(!MEM.on||!S.engine||S.engine.kind==="webllm"||S.busy)return;
  const conv=S.history.slice(-8).map(m=>(m.role==="user"?"User: ":"AI: ")+m.content).join("\n");
  const p="Today is "+dayKey()+". From this conversation, extract durable facts about the USER (job, family, pets, home, goals, preferences) and upcoming events with dates. Reply with ONLY JSON like {\"facts\":[\"...\"],\"events\":[{\"what\":\"your job interview\",\"date\":\"YYYY-MM-DD\"}]}. Use [] if none.\n\n"+conv;
  try{const it=await S.engine.chat.completions.create({messages:[{role:"user",content:p}],max_tokens:220,temperature:.1,stream:true});let o="";for await(const c of it)o+=c.choices[0]?.delta?.content||"";
    const j=JSON.parse(cleanAI(o).replace(/^[^{]*/,"").replace(/[^}]*$/,""));(j.facts||[]).slice(0,5).forEach(f=>addFact(String(f),"ai"));(j.events||[]).slice(0,3).forEach(e=>{if(/^\d{4}-\d\d-\d\d$/.test(e.date))addFollow(String(e.what),e.date)});renderMem()}catch(e){}}
/* XP + memory hooks on every message */
{const _send=send;send=async function(raw,already){const t=String(raw||"").trim();
  if(t&&!S.game){HB.add(1,"chat");HB.ev("chat");if(S.brainOn&&S.mode==="friend"&&!S.tutor){extractMem(t)}}
  const r=await _send(raw,already);
  if(t&&S.brainOn&&(S.mode==="friend"||S.tutor)){HB.add(2,"tutor");HB.ev("tutor");if(S.mode==="friend"&&!S.tutor&&++memTick%4===0)aiMemExtract()}
  CMP.snap();return r};}
/* ---------- conversations ---------- */
const CMP={list:store.get("convos",[]),cur:store.get("convoId",""),obs:null,t:0,
  get(id){return this.list.find(c=>c.id===(id||this.cur))},
  save(){try{localStorage.setItem("fho_convos",JSON.stringify(this.list))}catch(e){this.list=this.list.slice(0,Math.max(5,this.list.length-5));try{localStorage.setItem("fho_convos",JSON.stringify(this.list))}catch(e2){}}store.set("convoId",this.cur)},
  ensure(kind,title){let c=this.get();if(!c){c={id:"c"+Date.now().toString(36),title:title||"",kind:kind||S.mode,created:Date.now(),upd:Date.now(),msgs:[]};this.list.unshift(c);this.cur=c.id;this.list=this.list.slice(0,40);this.save()}return c},
  snap(){clearTimeout(this.t);this.t=setTimeout(()=>{const rows=[...document.querySelectorAll("#chat .msg")];const msgs=rows.map(r=>[r.classList.contains("me")?"u":"b",(r.querySelector(".bubble")||{}).textContent||""]).filter(m=>m[1].trim()&&m[1]!=="…");
    if(!msgs.some(m=>m[0]==="u"))return;const c=this.ensure();c.msgs=msgs.slice(-200);c.upd=Date.now();
    if(!c.title){const fu=msgs.find(m=>m[0]==="u");c.title=(fu?fu[1]:"").slice(0,42)}c.kind=S.tutor?"tutor":S.mode;this.save();this.bar()},700)},
  restore(id){const c=this.get(id);if(!c)return false;this.cur=c.id;this.save();const ch=$("#chat");ch.innerHTML="";
    c.msgs.forEach(([w,t])=>addMsg(w==="u"?"me":"bot",t));S.history=c.msgs.slice(-16).map(([w,t])=>({role:w==="u"?"user":"assistant",content:t}));S.tutor=null;this.bar();setTimeout(scrollDown,0);return true},
  summarize(c){if(!c||!c.msgs.some(m=>m[0]==="u"))return;const userTxt=c.msgs.filter(m=>m[0]==="u").map(m=>m[1]).join(" ");
    let t=(c.title||userTxt.slice(0,60));MEM.sums=MEM.sums.filter(s=>s.id!==c.id);MEM.sums.unshift({id:c.id,d:dayKey(new Date(c.upd)),t:"Talked about: "+t});MEM.sums=MEM.sums.slice(0,12);saveMEM();
    if(S.engine&&S.engine.kind!=="webllm"){quickAI("Summarize what the user shared in this chat in one short sentence (third person, max 25 words):\n"+userTxt.slice(-1500)).then(s=>{if(s){const x=MEM.sums.find(z=>z.id===c.id);if(x){x.t=s;saveMEM()}}})}},
  newChat(kind,title){const old=this.get();if(old&&old.msgs.length){this.summarize(old)}else if(old){this.list=this.list.filter(c=>c!==old)}
    this.cur="";S.history=[];if(kind!=="tutor")S.tutor=null;$("#chat").innerHTML="";this.ensure(kind,title);this.bar();
    if(kind!=="tutor")proactive(true);renderModes()},
  bar(){let b=$("#cbar");if(!b){b=h("div",{class:"cbar",id:"cbar"});$("#view-chat").prepend(b)}b.innerHTML="";const c=this.get();
    b.append(h("button",{type:"button",class:"btn ghost small",onclick:openChats},"🗂️ "+TT("cm_chats")+(this.list.length>1?" ("+this.list.length+")":"")),
      h("span",{class:"cbar-t"},c&&c.title?((c.kind==="tutor"?"🇬🇧 ":(MODES[c.kind]||{}).em||"💬")+" "+c.title):TT("cm_untitled")),
      h("button",{type:"button",class:"btn small",onclick:()=>{this.newChat(S.mode);sfx("coin")}},"＋ "+TT("cm_new")))}
};
function openChats(){let d=$("#chatsDrawer");if(d){d.remove();return}d=h("div",{id:"chatsDrawer",class:"ward-drawer",role:"dialog","aria-label":TT("cm_chats")});document.body.append(d);
  const q=h("input",{type:"search",placeholder:TT("cm_search"),class:"ac-input",oninput:()=>draw()});
  const list=h("div",{class:"list"});d.append(h("div",{class:"ward-head"},h("b",null,"🗂️ "+TT("cm_chats")),h("button",{type:"button",class:"btn ghost small",onclick:()=>d.remove()},"✕")),q,list);
  const draw=()=>{list.innerHTML="";const s=q.value.trim().toLowerCase();const items=CMP.list.filter(c=>c.msgs.length&&(!s||c.title.toLowerCase().includes(s)||c.msgs.some(m=>m[1].toLowerCase().includes(s))));
    if(!items.length)list.append(h("p",{class:"note"},TT("cm_empty")));
    items.forEach(c=>list.append(h("div",{class:"chat-item"+(c.id===CMP.cur?" on":"")},h("button",{type:"button",class:"chat-open",onclick:()=>{const old=CMP.get();if(old&&old.id!==c.id)CMP.summarize(old);CMP.restore(c.id);d.remove();switchTab("chat")}},
      h("b",null,((c.kind==="tutor"?"🇬🇧":(MODES[c.kind]||{}).em||"💬"))+" "+(c.title||TT("cm_untitled"))),h("small",null,new Date(c.upd).toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"})+" · "+fill(TT("cm_msgs"),{n:c.msgs.length}))),
      h("button",{type:"button",class:"btn ghost small","aria-label":TT("cm_rename"),onclick:()=>{const n=prompt(TT("cm_rename"),c.title);if(n!=null){c.title=n.slice(0,60);CMP.save();draw();CMP.bar()}}},"✏️"),
      h("button",{type:"button",class:"btn ghost small","aria-label":TT("cm_del"),onclick:()=>{CMP.list=CMP.list.filter(x=>x!==c);if(CMP.cur===c.id){CMP.cur="";$("#chat").innerHTML="";S.history=[];proactive(true)}CMP.save();draw();CMP.bar()}},"🗑️"))))};draw()}
/* ---------- proactive check-ins ---------- */
function todOf(){const hr=new Date().getHours();return hr<12?"morning":hr<17?"afternoon":hr<22?"evening":"night"}
function proactive(fresh){const nm=S.name?" "+S.name:"";const now=new Date();
  const due=MEM.fu.filter(f=>!f.done&&!f.asked&&(f.d<dayKey()||(f.d===dayKey()&&now.getHours()>=17)));
  const ev=due.find(f=>f.k==="event"),fe=due.find(f=>f.k==="feel");
  if(ev){ev.asked=true;saveMEM();oracle(fill(pick(TT("cm_fuQ")),{n:nm,w:ev.w}),[{t:TT("cm_good"),c:"fu:"+ev.id+":good"},{t:TT("cm_bad"),c:"fu:"+ev.id+":bad"},{t:TT("cm_later"),c:"fu:"+ev.id+":later"}]);return true}
  if(fe){fe.asked=true;fe.done=true;saveMEM();oracle(fill(pick(TT("cm_feelQ")),{n:nm}),["😄","🙂","😐","😕","😫"].map(m=>({t:m,c:"mood:"+m})));return true}
  if(fresh){if(S.mode==="friend")oracle(fill(pick(TT("cm_hello")),{t:TT("cm_tod")[todOf()]||"",n:nm}),["😄","🙂","😐","😕","😫"].map(m=>({t:m,c:"mood:"+m})));else greet();return true}
  return false}
{const _cmd3=command;command=function(c,label){const m=String(c).match(/^fu:([^:]+):(good|bad|later)$/);
  if(m){const f=MEM.fu.find(x=>x.id===m[1]);if(m[2]!=="later"&&f){f.done=true;saveMEM()}if(f&&m[2]==="later"){f.asked=false;f.d=dayKey(new Date(Date.now()+864e5));saveMEM()}
    addMsg("me",label);S.history.push({role:"user",content:label+(f?" ("+f.w+")":"")});
    if(m[2]==="later"){oracle(say(replyLang()==="vi"?"Được thôi, mình sẽ hỏi lại sau nhé!":"No problem, I'll ask you later!",""));return}
    if(S.brainOn){send(label+" ("+(f?f.w:"")+")",true);return}
    const good=m[2]==="good";oracle(replyLang()==="vi"?(good?"Tuyệt vời! Mình biết bạn làm được mà. Kể mình nghe phần vui nhất đi?":"Ôi, mình tiếc quá. Có chuyện gì vậy? Mình đang nghe đây."):(good?"Yes! I knew you'd do great. What was the best part?":"Oh no, I'm sorry. What happened? I'm here to listen."));return}
  return _cmd3(c,label)};}
/* ---------- memory panel ---------- */
{const _rm=renderMem;renderMem=function(){_rm();const l=$("#memList");if(!l)return;
  const lab=l.closest(".panel").querySelector(".label");if(lab)lab.textContent=TT("cm_memTitle");
  MEM.facts.forEach((f,i)=>l.append(itemEl("🧠 "+f.t,null,"✕",()=>{MEM.facts.splice(i,1);saveMEM();renderMem()})));
  const fus=MEM.fu.filter(f=>!f.done);if(fus.length){l.append(h("span",{class:"label",style:"margin-top:8px"},"📌 "+TT("cm_follow")));fus.forEach(f=>l.append(itemEl("📅 "+(f.k==="feel"?"😕 "+f.w.slice(5):f.w)+" · "+f.d,null,"✕",()=>{MEM.fu=MEM.fu.filter(x=>x!==f);saveMEM();renderMem()})))}
  if(!MEM.facts.length&&!S.likes.length&&!S.name){l.innerHTML="";l.append(h("div",{class:"note"},TT("cm_noMem")))}
  if(!$("#memOn")){const sw=h("label",{class:"note",style:"display:flex;gap:6px;align-items:center;margin-top:8px"},h("input",{type:"checkbox",id:"memOn"}),TT("cm_memOn"));l.after(sw,h("p",{class:"note"},TT("cm_memNote")));$("#memOn").checked=MEM.on;$("#memOn").onchange=e=>{MEM.on=e.target.checked;saveMEM()}}};}
{const mc=$("#memClear"),old=mc.onclick;mc.onclick=()=>{old&&old();MEM.facts=[];MEM.fu=[];MEM.sums=[];saveMEM();renderMem()};}

/* ================= v10: Today (daily helper) ================= */
const UI12={
 en:{tToday:"Today",dy_hi:"Good {t}{n}!",dy_follow:"Don't forget to tell me about",dy_mood:"How are you feeling?",dy_moodWeek:"Your week",dy_todo:"To-do",dy_add:"Add a task…",dy_at:"time",dy_plan:"🗓️ Plan my day",dy_focus:"Focus timer",dy_start:"Start",dy_pause:"Pause",dy_reset:"Reset",dy_break:"Break time! Stretch, drink some water. 💧",dy_focusDone:"Focus session done! +5 XP",dy_journal:"Journal",dy_jPh:"What's on your mind today? One line is enough.",dy_save:"Save",dy_reflect:"💬 Talk it through",dy_saved:"Saved to your journal",dy_quests:"Today's quests",dy_wotd:"English word of the day",dy_fortune:"🔮 Today's fortune",dy_remind:"⏰ Reminder: {t}",dy_planMsg:"Help me plan my day. My tasks: {t}. My mood: {m}. Suggest a simple schedule with breaks, starting from now ({n}).",dy_noTasks:"no tasks yet",
  dy_offPlan:"Here's a simple plan:\n{p}\nRemember to take a 5-minute break between blocks. You've got this!",dy_entries:"Recent entries"},
 vi:{tToday:"Hôm nay",dy_hi:"Chào buổi {t}{n}!",dy_follow:"Nhớ kể mình nghe về",dy_mood:"Bạn đang cảm thấy thế nào?",dy_moodWeek:"Tuần của bạn",dy_todo:"Việc cần làm",dy_add:"Thêm việc…",dy_at:"giờ",dy_plan:"🗓️ Lên kế hoạch hôm nay",dy_focus:"Hẹn giờ tập trung",dy_start:"Bắt đầu",dy_pause:"Tạm dừng",dy_reset:"Đặt lại",dy_break:"Giải lao thôi! Vươn vai, uống nước nhé. 💧",dy_focusDone:"Xong một phiên tập trung! +5 XP",dy_journal:"Nhật ký",dy_jPh:"Hôm nay bạn nghĩ gì? Một dòng là đủ.",dy_save:"Lưu",dy_reflect:"💬 Tâm sự cùng mình",dy_saved:"Đã lưu vào nhật ký",dy_quests:"Nhiệm vụ hôm nay",dy_wotd:"Từ tiếng Anh của ngày",dy_fortune:"🔮 Quẻ hôm nay",dy_remind:"⏰ Nhắc nhở: {t}",dy_planMsg:"Giúp mình lên kế hoạch cho hôm nay. Việc cần làm: {t}. Tâm trạng: {m}. Gợi ý lịch đơn giản có nghỉ giải lao, bắt đầu từ bây giờ ({n}).",dy_noTasks:"chưa có việc",
  dy_offPlan:"Đây là kế hoạch đơn giản:\n{p}\nNhớ nghỉ 5 phút giữa các phần nhé. Bạn làm được mà!",dy_entries:"Nhật ký gần đây"},
 yue:{tToday:"今日",dy_mood:"你今日感覺點？",dy_todo:"待辦",dy_focus:"專注計時",dy_journal:"日記",dy_save:"儲存"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI12[k]);
const DAYS=Object.assign({todos:[],journal:[],focus:{mins:25,left:0,run:false,brk:false}},store.get("day",{}));
const saveDay=()=>store.set("day",{todos:DAYS.todos,journal:DAYS.journal});
const MOODS=["😄","🙂","😐","😕","😫"];
const DAY={logMood(m){if(!MOODS.includes(m))return;MEM.moods=MEM.moods.filter(x=>!(x.d===dayKey()&&MOODS.includes(x.m)));MEM.moods.unshift({d:dayKey(),m});saveMEM();if($("#view-today")&&!$("#view-today").hidden)renderToday()}};
/* tab + view */
{const tabs=document.querySelector(".tabs");const tb=h("button",{class:"tab",role:"tab","data-v":"today","aria-selected":"false"},h("span",{class:"em"},"☀️"),h("span",{"data-i":"tToday"},TT("tToday")));
 tabs.insertBefore(tb,tabs.querySelector('[data-v="games"]'));tb.onclick=()=>switchTab("today");
 $("#view-chat").after(h("section",{class:"view",id:"view-today",hidden:true}));}
{const _st2=switchTab;switchTab=function(v){_st2(v);$("#view-today").hidden=v!=="today";if(v==="today")renderToday();const d=$("#chatsDrawer");if(d&&v!=="chat")d.remove()};}
function renderToday(){const V=$("#view-today");V.innerHTML="";const nm=S.name?" "+S.name:"";
  V.append(h("div",{class:"ac-hero"},h("div",null,h("h2",null,fill(TT("dy_hi"),{t:TT("cm_tod")[todOf()]||"",n:nm})),h("p",{class:"sub"},new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"}))),
    h("button",{type:"button",class:"ac-badge",onclick:openHB},"🔥 "+HB.streakNow()+" · "+HB.today()+"/"+HBS.goal+" XP")));
  const fus=MEM.fu.filter(f=>!f.done&&f.k==="event");
  if(fus.length)V.append(h("div",{class:"panel"},h("span",{class:"label"},"📌 "+TT("dy_follow")),...fus.slice(0,4).map(f=>h("div",{class:"dy-row"},h("span",null,"📅 "+f.w+" · "+f.d),h("button",{type:"button",class:"btn ghost small",onclick:()=>{switchTab("chat");send((replyLang()==="vi"?"Để mình kể về ":"Let me tell you about ")+f.w+".")}},"💬")))));
  /* mood */
  const today=MEM.moods.find(x=>x.d===dayKey()&&MOODS.includes(x.m));
  const mp=h("div",{class:"panel"},h("span",{class:"label"},"🌈 "+TT("dy_mood")),h("div",{class:"dy-moods"},...MOODS.map(m=>h("button",{type:"button",class:"dy-mood"+(today&&today.m===m?" on":""),"aria-label":m,onclick:()=>{DAY.logMood(m);HB.ev("mood");HB.add(2,"mood");renderToday()}},m))));
  const wk=h("div",{class:"dy-week"});for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5),k=dayKey(d),x=MEM.moods.find(y=>y.d===k&&MOODS.includes(y.m));wk.append(h("div",null,h("span",null,x?x.m:"·"),h("small",null,d.toLocaleDateString(undefined,{weekday:"narrow"}))))}
  mp.append(h("small",{class:"note"},TT("dy_moodWeek")),wk);V.append(mp);
  /* to-dos */
  const tp=h("div",{class:"panel"},h("span",{class:"label"},"✅ "+TT("dy_todo")));const inp=h("input",{class:"ac-input",placeholder:TT("dy_add"),"aria-label":TT("dy_add")});const tm=h("input",{type:"time","aria-label":TT("dy_at"),class:"dy-time"});
  const add=()=>{const t=inp.value.trim();if(!t)return;DAYS.todos.unshift({id:Date.now(),t,done:false,d:dayKey(),at:tm.value||""});saveDay();schedReminders();renderToday()};inp.onkeydown=e=>{if(e.key==="Enter")add()};
  tp.append(h("div",{class:"dy-add"},inp,tm,h("button",{type:"button",class:"btn small",onclick:add},"＋")));
  const open=DAYS.todos.filter(t=>!t.done||t.d===dayKey());
  open.forEach(t=>tp.append(h("div",{class:"dy-todo"+(t.done?" done":"")},h("button",{type:"button",class:"dy-chk","aria-label":"done",onclick:()=>{t.done=!t.done;if(t.done){t.d=dayKey();HB.ev("todo");HB.add(2,"todo");sfx("ding")}saveDay();renderToday()}},t.done?"✓":""),h("span",null,t.t+(t.at?" · ⏰ "+t.at:"")),h("button",{type:"button",class:"btn ghost small","aria-label":"delete",onclick:()=>{DAYS.todos=DAYS.todos.filter(x=>x!==t);saveDay();renderToday()}},"✕"))));
  tp.append(h("button",{type:"button",class:"btn ghost",onclick:planDay},TT("dy_plan")));V.append(tp);
  /* focus timer */
  const F=DAYS.focus;const fp=h("div",{class:"panel"},h("span",{class:"label"},"⏱️ "+TT("dy_focus")));
  const disp=h("div",{class:"dy-timer",id:"dyTimer"},fmtT(F.left||F.mins*60));
  fp.append(h("div",{class:"hb-gsel"},...[15,25,45].map(mn=>h("button",{type:"button",class:"wchip"+(F.mins===mn?" on":""),onclick:()=>{F.mins=mn;F.left=0;F.run=false;renderToday()}},mn+" min"))),disp,
    h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:()=>{F.run=!F.run;if(F.run&&!F.left)F.left=F.mins*60;if(F.run&&"Notification" in window&&Notification.permission==="default")Notification.requestPermission();renderToday()}},F.run?TT("dy_pause"):TT("dy_start")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>{F.run=false;F.left=0;renderToday()}},TT("dy_reset"))));V.append(fp);
  /* journal */
  const jp=h("div",{class:"panel"},h("span",{class:"label"},"📔 "+TT("dy_journal")));const ta=h("textarea",{class:"ac-input",rows:"3",placeholder:TT("dy_jPh")});
  jp.append(ta,h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:()=>{const t=ta.value.trim();if(!t)return;DAYS.journal.unshift({d:dayKey(),t,m:(today||{}).m||""});DAYS.journal=DAYS.journal.slice(0,200);saveDay();extractMem(t);HB.ev("journal");HB.add(5,"journal");toast(TT("dy_saved"));renderToday()}},TT("dy_save")),
    h("button",{type:"button",class:"btn ghost",onclick:()=>{const t=ta.value.trim()||(DAYS.journal[0]||{}).t;if(!t)return;S.mode="friend";store.set("mode","friend");CMP.newChat("friend");switchTab("chat");send(t)}},TT("dy_reflect"))));
  if(DAYS.journal.length){jp.append(h("small",{class:"note"},TT("dy_entries")));DAYS.journal.slice(0,3).forEach(j=>jp.append(h("div",{class:"dy-j"},h("small",null,j.d+" "+(j.m||"")),h("span",null,j.t))))}V.append(jp);
  /* quests + word + fortune */
  const q=HB.quests();V.append(h("div",{class:"panel"},h("span",{class:"label"},"🎯 "+TT("dy_quests")),...q.list.map(k=>h("div",{class:"hb-q"+(q.done.includes(k)?" done":"")},h("span",null,(q.done.includes(k)?"✅ ":"⬜ ")+TT("q_"+k)),h("small",null,Math.min(q.cnt[k]||0,QPOOL[k])+"/"+QPOOL[k])))));
  const w=wotd();if(w)V.append(h("div",{class:"panel ac-wotd"},h("span",{class:"label"},"🇬🇧 "+TT("dy_wotd")),h("div",{class:"ac-wrow"},h("span",{class:"ac-em"},w[1]||"💬"),h("div",null,h("b",{class:"ac-word"},w[0]),h("div",{class:"note"},wordNative(w)||w[4]||""),h("i",null,w[2])),sayBtn(w[0]+". "+w[2]))));
  V.append(h("button",{type:"button",class:"btn ghost",onclick:()=>switchTab("future")},TT("dy_fortune")));
}
function fmtT(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
setInterval(()=>{const F=DAYS.focus;if(!F.run)return;F.left--;const el=$("#dyTimer");if(el)el.textContent=fmtT(Math.max(0,F.left));
  if(F.left<=0){F.run=false;sfx("win");if(!F.brk){HB.add(5,"focus");toast(TT("dy_focusDone"));notify(TT("dy_break"));F.brk=true;F.left=5*60;F.run=true}else{F.brk=false;F.left=0;notify("⏱️ "+TT("dy_focus"))}if(!$("#view-today").hidden)renderToday()}},1000);
function notify(t){toast(t);try{if("Notification" in window&&Notification.permission==="granted"&&document.hidden)new Notification("Funhouse Oracle",{body:t})}catch(e){}}
const REMT={};
function schedReminders(){Object.values(REMT).forEach(clearTimeout);DAYS.todos.filter(t=>!t.done&&t.at&&t.d===dayKey()).forEach(t=>{const [hh,mm]=t.at.split(":");const at=new Date();at.setHours(+hh,+mm,0,0);const ms=at-Date.now();
  if(ms>0&&ms<864e5)REMT[t.id]=setTimeout(()=>{notify(fill(TT("dy_remind"),{t:t.t}));sfx("drum");speak(fill(TT("dy_remind"),{t:t.t}),true)},ms)})}
schedReminders();
function planDay(){const open=DAYS.todos.filter(t=>!t.done).map(t=>t.t+(t.at?" at "+t.at:""));const mood=(MEM.moods.find(x=>x.d===dayKey())||{}).m||"🙂";const now=new Date();
  switchTab("chat");
  if(S.brainOn){send(fill(TT("dy_planMsg"),{t:open.join("; ")||TT("dy_noTasks"),m:mood,n:now.toTimeString().slice(0,5)}));return}
  let t0=new Date(now);t0.setMinutes(t0.getMinutes()<30?30:60,0,0);const lines=[];
  (open.length?open:[TT("dy_noTasks")]).slice(0,6).forEach((x,i)=>{lines.push("• "+t0.toTimeString().slice(0,5)+" · "+x);t0=new Date(t0.getTime()+(i%2?35:30)*6e4)});
  addMsg("me",TT("dy_plan"));oracle(fill(TT("dy_offPlan"),{p:lines.join("\n")}))}
/* ---------------- startup ---------------- */
HB.quests();HB.chip();CMP.bar();
{const c=CMP.get();
  if(c&&c.msgs.length){CMP.restore(c.id);proactive(false)}
  else{const due=MEM.fu.some(f=>!f.done&&!f.asked&&f.d<=dayKey());if(due||S.mode==="friend"){$("#chat").innerHTML="";S.history=[];proactive(true)}}}
new MutationObserver(()=>CMP.snap()).observe($("#chat"),{childList:true});
setTimeout(onboarding,1500);

