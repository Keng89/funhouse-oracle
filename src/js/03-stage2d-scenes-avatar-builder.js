
/* ================= EXTENSION 2: live talking stage, scenes, avatar builder ================= */
const SKINS=["#ffe3cc","#f6cfaa","#eab98f","#d9a27a","#c68a5d","#a86d45","#8d5a3b","#6b4329","#4a2f1f"];
const HAIRC=["#15100d","#3a2418","#6b3e1f","#a2412a","#e0a43a","#f1d58a","#dcdcdc","#9aa0a6","#c03a7a","#3b6fd1","#7b4bd1","#2f8a5b"];
const OUTC=["#3b82c4","#e5493d","#2f8a5b","#e3b04b","#7b4bd1","#e98bb0","#1f2933","#f2efe6","#f08a3c","#16a3a3","#8b5a2b","#c03a7a"];
const HAIRS=["short","long","bun","pigtails","ponytail","spiky","curly","buzz","bald","cap","hijab"];
const OUTFITS=["tshirt","hoodie","sweater","dress","suit","aodai","labcoat","cardigan"];
const ACCS=["glasses","sunglasses","beard","mustache","earrings","bow","headphones","freckles"];
const AGES=["toddler","kid","teen","adult","senior"];
const BUILDS=["slim","avg","broad"];

/* strings */
const UI3={
en:{st_chars:"Characters",st_bgs:"Backgrounds",st_moves:"Moves",st_create:"Create",sc_living:"Living room",sc_arcade:"Arcade",sc_beach:"Beach sunset",sc_city:"Night city",sc_space:"Outer space",sc_forest:"Forest",sc_class:"Classroom",sc_cafe:"Café",sc_blossom:"Cherry blossoms",sc_lantern:"Lantern street",sc_snow:"Snowy mountains",sc_studio:"Studio",sc_photo:"My photo",
 mv_wave:"Wave",mv_dance:"Dance",mv_laugh:"Laugh",mv_cheer:"Cheer",mv_think:"Think",mv_shrug:"Shrug",mv_heart:"Heart",mv_bow:"Bow",mv_nod:"Nod",mv_listen:"Listen",mv_mystic:"Magic",
 bTitle:"Avatar builder",bN:"Design your own talking person: any age, any look.",bName:"Name",bVoice:"Voice",vF:"Female",vM:"Male",vN:"Neutral",bAge:"Age",ag_toddler:"Toddler",ag_kid:"Kid",ag_teen:"Teen",ag_adult:"Adult",ag_senior:"Senior",bBuild:"Build",bl_slim:"Slim",bl_avg:"Average",bl_broad:"Broad",bSkin:"Skin tone",bHair:"Hair",bHairC:"Hair color",bOutfit:"Outfit",bOutC:"Outfit color",bAcc:"Extras",bPitch:"Voice pitch",bSave:"Save & use",bRandom:"🎲 Random",bSaved:"Avatar saved",bNameP:"My avatar",
 h_short:"Short",h_long:"Long",h_bun:"Bun",h_pigtails:"Pigtails",h_ponytail:"Ponytail",h_spiky:"Spiky",h_curly:"Curly",h_buzz:"Buzz cut",h_bald:"Bald",h_cap:"Cap",h_hijab:"Headscarf",
 o_tshirt:"T-shirt",o_hoodie:"Hoodie",o_sweater:"Sweater",o_dress:"Dress",o_suit:"Suit",o_aodai:"Áo dài",o_labcoat:"Lab coat",o_cardigan:"Cardigan",
 a_glasses:"Glasses",a_sunglasses:"Sunglasses",a_beard:"Beard",a_mustache:"Mustache",a_earrings:"Earrings",a_bow:"Bow",a_headphones:"Headphones",a_freckles:"Freckles",photoBig:"That photo is too big to keep after a reload. It works for this visit."},
vi:{st_chars:"Nhân vật",st_bgs:"Phông nền",st_moves:"Cử chỉ",st_create:"Tạo mới",sc_living:"Phòng khách",sc_arcade:"Khu arcade",sc_beach:"Biển hoàng hôn",sc_city:"Thành phố đêm",sc_space:"Vũ trụ",sc_forest:"Rừng xanh",sc_class:"Lớp học",sc_cafe:"Quán cà phê",sc_blossom:"Hoa anh đào",sc_lantern:"Phố đèn lồng",sc_snow:"Núi tuyết",sc_studio:"Studio",sc_photo:"Ảnh của tôi",
 mv_wave:"Vẫy tay",mv_dance:"Nhảy",mv_laugh:"Cười",mv_cheer:"Reo hò",mv_think:"Suy nghĩ",mv_shrug:"Nhún vai",mv_heart:"Bắn tim",mv_bow:"Cúi chào",mv_nod:"Gật đầu",mv_listen:"Lắng nghe",mv_mystic:"Phép thuật",
 bTitle:"Tạo nhân vật",bN:"Tự thiết kế người nói chuyện với bạn: mọi lứa tuổi, mọi phong cách.",bName:"Tên",bVoice:"Giọng",vF:"Nữ",vM:"Nam",vN:"Trung tính",bAge:"Tuổi",ag_toddler:"Em bé",ag_kid:"Trẻ em",ag_teen:"Thiếu niên",ag_adult:"Người lớn",ag_senior:"Người già",bBuild:"Dáng người",bl_slim:"Mảnh",bl_avg:"Vừa",bl_broad:"To",bSkin:"Màu da",bHair:"Kiểu tóc",bHairC:"Màu tóc",bOutfit:"Trang phục",bOutC:"Màu áo",bAcc:"Phụ kiện",bPitch:"Cao độ giọng",bSave:"Lưu & dùng",bRandom:"🎲 Ngẫu nhiên",bSaved:"Đã lưu nhân vật",bNameP:"Nhân vật của tôi",
 h_short:"Ngắn",h_long:"Dài",h_bun:"Búi",h_pigtails:"Hai bím",h_ponytail:"Đuôi ngựa",h_spiky:"Dựng",h_curly:"Xoăn",h_buzz:"Húi cua",h_bald:"Hói",h_cap:"Mũ lưỡi trai",h_hijab:"Khăn trùm đầu",
 o_tshirt:"Áo thun",o_hoodie:"Áo hoodie",o_sweater:"Áo len",o_dress:"Váy",o_suit:"Vest",o_aodai:"Áo dài",o_labcoat:"Áo blouse",o_cardigan:"Áo khoác len",
 a_glasses:"Kính",a_sunglasses:"Kính râm",a_beard:"Râu quai nón",a_mustache:"Ria mép",a_earrings:"Bông tai",a_bow:"Nơ",a_headphones:"Tai nghe",a_freckles:"Tàn nhang",photoBig:"Ảnh quá lớn để lưu lại sau khi tải lại trang. Lần này vẫn dùng được."},
yue:{st_chars:"角色",st_bgs:"背景",st_moves:"動作",st_create:"新增",sc_living:"客廳",sc_arcade:"機舖",sc_beach:"日落海灘",sc_city:"夜景城市",sc_space:"太空",sc_forest:"森林",sc_class:"課室",sc_cafe:"咖啡店",sc_blossom:"櫻花",sc_lantern:"燈籠街",sc_snow:"雪山",sc_studio:"影樓",sc_photo:"我嘅相",
 mv_wave:"揮手",mv_dance:"跳舞",mv_laugh:"大笑",mv_cheer:"歡呼",mv_think:"諗嘢",mv_shrug:"聳膊頭",mv_heart:"比心",mv_bow:"鞠躬",mv_nod:"點頭",mv_listen:"聽",mv_mystic:"魔法",
 bTitle:"整你嘅角色",bN:"自己設計同你傾偈嘅人：任何年紀、任何樣。",bName:"名",bVoice:"聲線",vF:"女",vM:"男",vN:"中性",bAge:"年紀",ag_toddler:"BB",ag_kid:"小朋友",ag_teen:"少年",ag_adult:"大人",ag_senior:"長者",bBuild:"身形",bl_slim:"瘦",bl_avg:"中等",bl_broad:"壯",bSkin:"膚色",bHair:"髮型",bHairC:"髮色",bOutfit:"衫",bOutC:"衫嘅顏色",bAcc:"配件",bPitch:"聲調高低",bSave:"儲存並使用",bRandom:"🎲 隨機",bSaved:"角色儲存咗",bNameP:"我嘅角色",
 h_short:"短髮",h_long:"長髮",h_bun:"髻",h_pigtails:"孖辮",h_ponytail:"馬尾",h_spiky:"刺蝟頭",h_curly:"曲髮",h_buzz:"陸軍裝",h_bald:"光頭",h_cap:"鴨舌帽",h_hijab:"頭巾",
 o_tshirt:"T恤",o_hoodie:"連帽衫",o_sweater:"冷衫",o_dress:"裙",o_suit:"西裝",o_aodai:"奧黛",o_labcoat:"白袍",o_cardigan:"開胸冷衫",
 a_glasses:"眼鏡",a_sunglasses:"太陽眼鏡",a_beard:"鬍鬚",a_mustache:"八字鬚",a_earrings:"耳環",a_bow:"蝴蝶結",a_headphones:"耳筒",a_freckles:"雀斑",photoBig:"張相太大，重新載入後留唔住，今次照用得。"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI3[k]);
Object.assign(CHAR_TAGS.en,{toddler:"Toddler",custom:"Custom"});Object.assign(CHAR_TAGS.vi,{toddler:"Em bé",custom:"Tự tạo"});Object.assign(CHAR_TAGS.yue,{toddler:"BB",custom:"自訂"});
Object.assign(CHAR_TAGS.es,{toddler:"Bebé",custom:"Propio"});Object.assign(CHAR_TAGS.fr,{toddler:"Bambin",custom:"Perso"});Object.assign(CHAR_TAGS.zh,{toddler:"幼儿",custom:"自定义"});

/* body data for preset characters + new characters */
const BODY={oracle:{robot:"bot"},max:{age:"kid",outfit:"tshirt",oc:"#3b82c4"},lily:{age:"kid",outfit:"dress",oc:"#e98bb0"},bao:{age:"kid",outfit:"tshirt",oc:"#e5493d"},an:{age:"kid",outfit:"dress",oc:"#e3b04b"},
 leo:{age:"teen",outfit:"hoodie",oc:"#1f2933"},mia:{age:"teen",outfit:"hoodie",oc:"#7b4bd1"},emma:{outfit:"sweater",oc:"#16a3a3",build:"slim"},james:{outfit:"suit",oc:"#1f2933",build:"broad"},
 linh:{outfit:"aodai",oc:"#e5493d",build:"slim"},minh:{outfit:"tshirt",oc:"#2f8a5b"},sofia:{outfit:"dress",oc:"#f08a3c",build:"slim"},grandpa:{age:"senior",outfit:"cardigan",oc:"#8b5a2b"},
 grandma:{age:"senior",outfit:"cardigan",oc:"#c03a7a",build:"slim"},robo:{robot:"robo"},boo:{robot:"ghost"}};
CHARS.forEach(c=>{if(!c.body)c.body=BODY[c.id]||{}});
const NEWCHARS=[
 {id:"bean",name:"Bean",tag:"toddler",g:"n",pitch:1.9,rate:1,skin:"#f6cfaa",hair:"#e0a43a",style:"curly",body:{age:"toddler",outfit:"tshirt",oc:"#e3b04b"}},
 {id:"aisha",name:"Aisha",tag:"teenGirl",g:"f",pitch:1.25,rate:1.04,skin:"#c68a5d",hair:"#2f8a5b",style:"hijab",body:{age:"teen",outfit:"sweater",oc:"#f2efe6",build:"slim"}},
 {id:"dj",name:"DJ Zee",tag:"teenBoy",g:"m",pitch:1.12,rate:1.1,skin:"#8d5a3b",hair:"#7b4bd1",style:"spiky",acc:"headphones",body:{age:"teen",outfit:"hoodie",oc:"#c03a7a"}},
 {id:"amara",name:"Dr. Amara",tag:"woman",g:"f",pitch:1.02,rate:1,skin:"#6b4329",hair:"#15100d",style:"curly",acc:"earrings",body:{outfit:"labcoat",oc:"#16a3a3",build:"slim"}},
 {id:"kenji",name:"Kenji",tag:"man",g:"m",pitch:.92,rate:1.02,skin:"#eab98f",hair:"#15100d",style:"short",acc:"glasses",body:{outfit:"hoodie",oc:"#3b82c4"}},
 {id:"raul",name:"Raúl",tag:"man",g:"m",pitch:.85,rate:1.04,skin:"#c68a5d",hair:"#15100d",style:"cap",acc:"beard",body:{outfit:"tshirt",oc:"#e5493d",build:"broad"}},
 {id:"hana",name:"Hana",tag:"woman",g:"f",pitch:1.12,rate:1.02,skin:"#f6cfaa",hair:"#a2412a",style:"ponytail",acc:"freckles",body:{outfit:"dress",oc:"#2f8a5b",build:"slim"}},
 {id:"priya",name:"Nana Priya",tag:"grandma",g:"f",pitch:.86,rate:.88,skin:"#a86d45",hair:"#dcdcdc",style:"bun",acc:"glasses",body:{age:"senior",outfit:"cardigan",oc:"#7b4bd1",build:"slim"}},
 {id:"walt",name:"Uncle Walt",tag:"grandpa",g:"m",pitch:.72,rate:.86,skin:"#d9a27a",hair:"#9aa0a6",style:"buzz",acc:"mustache",body:{age:"senior",outfit:"sweater",oc:"#3b82c4",build:"broad"}}
];
CHARS.splice(CHARS.findIndex(c=>c.id==="robo"),0,...NEWCHARS);
S.myChars=store.get("myChars",[]);S.myChars.forEach(c=>CHARS.push(c));
if(!CHARS.find(c=>c.id===S.char))S.char="oracle";
const accsOf=c=>c.body&&c.body.accs?c.body.accs:(c.acc==="beardw"?["beard"]:c.acc?[c.acc]:[]);

/* small faces for new hair styles */
{const _f=faceSVG;faceSVG=function(c,id){const map={curly:"short",ponytail:"long",buzz:"short",hijab:"long"};const a=accsOf(c);
  const cc=Object.assign({},c,{style:map[c.style]||c.style,acc:a.includes("beard")?"beard":a.includes("glasses")?"glasses":a.includes("bow")?"bow":a.includes("earrings")?"earrings":c.acc});
  if(c.body&&c.body.robot==="robo")cc.style="robo";if(c.body&&c.body.robot==="ghost")cc.style="ghost";return _f(cc,id)};}

/* ---------- character renderer ---------- */
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;r=Math.max(0,Math.min(255,r+amt));g=Math.max(0,Math.min(255,g+amt));b=Math.max(0,Math.min(255,b+amt));return "#"+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1)}
const AGE_S={toddler:[.7,1.28],kid:[.83,1.16],teen:[.94,1.04],adult:[1,1],senior:[.98,1]};
function geom(c){const b=c.body||{};const bw={slim:[142,258],avg:[136,264],broad:[127,273]}[b.build||"avg"];return {sx1:bw[0],sx2:bw[1],pL:[bw[0]+8,232],pR:[bw[1]-8,232],age:b.age||"adult"}}
function hairBack(st,H){
  switch(st){
    case "long":return `<path d="M160 122 Q156 74 200 74 Q244 74 240 122 L246 214 Q200 230 154 214 Z" fill="${H}"/>`;
    case "ponytail":return `<path d="M232 108 Q262 112 258 150 Q256 190 244 210 Q238 172 230 140 Z" fill="${H}"/>`;
    case "pigtails":return `<ellipse cx="150" cy="150" rx="13" ry="24" fill="${H}"/><ellipse cx="250" cy="150" rx="13" ry="24" fill="${H}"/><circle cx="155" cy="124" r="5" fill="#e5493d"/><circle cx="245" cy="124" r="5" fill="#e5493d"/>`;
    case "bun":return `<circle cx="200" cy="78" r="17" fill="${H}"/>`;
    case "curly":{let o="";for(let i=0;i<14;i++){const a=Math.PI*(1.05+i*0.068)-0.2,x=200+Math.cos(a)*48,y=118+Math.sin(a)*50;o+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="17" fill="${H}"/>`}return o+`<ellipse cx="200" cy="112" rx="50" ry="46" fill="${H}"/>`;}
    case "hijab":return `<path d="M150 138 Q146 72 200 70 Q254 72 250 138 L262 226 Q200 244 138 226 Z" fill="${H}"/>`;
    default:return "";
  }
}
function hairFront(st,H,age){
  switch(st){
    case "short":case "ponytail":return `<path d="M162 118 Q160 80 200 80 Q240 80 238 118 Q228 96 200 99 Q172 96 162 118 Z" fill="${H}"/>`;
    case "long":case "pigtails":case "bun":return `<path d="M161 124 Q158 80 200 80 Q242 80 239 124 Q232 100 214 96 Q186 110 161 124 Z" fill="${H}"/>`;
    case "spiky":return `<path d="M161 116 L160 92 L171 98 L172 78 L184 90 L190 70 L200 86 L210 70 L216 90 L228 78 L229 98 L240 92 L239 116 Q226 100 200 101 Q174 100 161 116 Z" fill="${H}"/>`;
    case "curly":{let o="";for(let i=0;i<7;i++)o+=`<circle cx="${168+i*11}" cy="${90+Math.abs(i-3)*2}" r="10" fill="${H}"/>`;return o;}
    case "buzz":return `<path d="M163 112 Q163 82 200 82 Q237 82 237 112 Q226 98 200 98 Q174 98 163 112 Z" fill="${H}" opacity=".75"/>`;
    case "bald":return age==="senior"?`<ellipse cx="163" cy="118" rx="5" ry="10" fill="${H}"/><ellipse cx="237" cy="118" rx="5" ry="10" fill="${H}"/>`:"";
    case "cap":return `<path d="M161 110 Q162 76 200 76 Q238 76 239 110 Z" fill="${H}"/><path d="M200 104 L262 106 Q262 114 238 112 Z" fill="${shade(H,-30)}"/><circle cx="200" cy="77" r="3" fill="${shade(H,-30)}"/>`;
    case "hijab":return `<path d="M160 120 Q162 88 200 86 Q238 88 240 120 Q236 98 200 96 Q164 98 160 120 Z" fill="${shade(H,-18)}"/><path d="M160 120 Q158 160 176 178 L168 182 Q150 160 154 122 Z M240 120 Q242 160 224 178 L232 182 Q250 160 246 122 Z" fill="${H}"/>`;
    default:return "";
  }
}
function outfitSVG(c,g){
  const b=c.body||{},O=b.oc||"#3b82c4",o=b.outfit||"tshirt",{sx1,sx2}=g,D=shade(O,-28),sk=c.skin||"#f0c8a8";
  const torso=fill=>`<path d="M${sx1-10} 302 L${sx1-8} 252 Q${sx1-6} 224 ${sx1+20} 216 L188 208 L212 208 L${sx2-20} 216 Q${sx2+6} 224 ${sx2+8} 252 L${sx2+10} 302 Z" fill="${fill}"/>`;
  let s="";
  if(o==="hoodie")s+=`<ellipse cx="200" cy="214" rx="38" ry="15" fill="${D}"/>`;
  s+=`<rect x="188" y="164" width="24" height="52" rx="8" fill="${sk}"/><path d="M188 200 Q200 210 212 200 L212 214 L188 214 Z" fill="${shade(sk,-22)}" opacity=".5"/>`;
  if(o==="labcoat"){s+=torso("#f4f6f4")+`<path d="M186 210 L200 262 L214 210 Z" fill="${O}"/><path d="M186 210 L176 240 L200 300 M214 210 L224 240 L200 300" stroke="#cfd6d2" stroke-width="2" fill="none"/><rect x="${sx2-46}" y="252" width="20" height="16" rx="3" fill="none" stroke="#cfd6d2" stroke-width="2"/>`;}
  else if(o==="suit"){s+=torso(O)+`<path d="M187 209 L200 258 L213 209 Z" fill="#f4f6f4"/><path d="M200 218 L195 226 L200 262 L205 226 Z" fill="#e5493d"/><path d="M187 209 L178 246 L200 270 M213 209 L222 246 L200 270" stroke="${shade(O,30)}" stroke-width="2" fill="none"/>`;}
  else if(o==="cardigan"){s+=torso(O)+`<path d="M190 210 L200 300 L210 210 Z" fill="${shade(O,80)}"/><circle cx="196" cy="246" r="2.4" fill="${D}"/><circle cx="197" cy="266" r="2.4" fill="${D}"/><circle cx="198" cy="286" r="2.4" fill="${D}"/>`;}
  else if(o==="dress"){s+=torso(O)+`<path d="M178 212 Q200 238 222 212 Z" fill="${sk}"/><path d="M${sx1-9} 288 Q200 296 ${sx2+9} 288" stroke="${D}" stroke-width="3" fill="none"/>`;}
  else if(o==="aodai"){s+=torso(O)+`<rect x="186" y="198" width="28" height="16" rx="4" fill="${O}"/><path d="M212 214 Q236 228 246 262" stroke="${shade(O,50)}" stroke-width="2.5" fill="none"/><circle cx="222" cy="220" r="2" fill="#e3b04b"/><circle cx="234" cy="234" r="2" fill="#e3b04b"/><circle cx="242" cy="250" r="2" fill="#e3b04b"/>`;}
  else if(o==="sweater"){s+=torso(O)+`<rect x="${sx1-9}" y="258" width="${sx2-sx1+18}" height="9" fill="${shade(O,45)}"/><rect x="${sx1-9}" y="274" width="${sx2-sx1+18}" height="5" fill="${shade(O,45)}"/><path d="M184 210 Q200 224 216 210" stroke="${D}" stroke-width="5" fill="none"/>`;}
  else if(o==="hoodie"){s+=torso(O)+`<path d="M190 214 L190 246 M210 214 L210 246" stroke="#f4f6f4" stroke-width="2"/><path d="M168 280 L232 280 L226 302 L174 302 Z" fill="${D}"/>`;}
  else {s+=torso(O)+`<path d="M185 210 Q200 224 215 210" stroke="${D}" stroke-width="4" fill="none"/>`;}
  return s;
}
function sleeves(c){const o=(c.body||{}).outfit||"tshirt",O=(c.body||{}).oc||"#3b82c4",sk=c.skin||"#f0c8a8";
  if(o==="labcoat")return ["#f4f6f4","#f4f6f4"];
  if(o==="tshirt"||o==="dress")return [O,sk];return [O,shade(O,-10)];}
function armSVG(p,side,pv,up,fo,hand,w){const [x,y]=pv;
  return `<g id="${p}a${side}" transform="rotate(100 ${x} ${y})"><line x1="${x}" y1="${y}" x2="${x+52}" y2="${y}" stroke="${up}" stroke-width="${w[0]}" stroke-linecap="round"/><g id="${p}f${side}" transform="rotate(0 ${x+52} ${y})"><line x1="${x+52}" y1="${y}" x2="${x+98}" y2="${y}" stroke="${fo}" stroke-width="${w[1]}" stroke-linecap="round"/><circle cx="${x+102}" cy="${y}" r="10.5" fill="${hand}"/></g></g>`}
function faceParts(p,c,robot){
  const sk=c.skin||"#f0c8a8",dark=robot?"#0d2420":"#1c1912";
  const eye=(id,x)=>`<g transform="translate(${x} 126)"><g id="${p}e${id}"><ellipse rx="${robot?6:5}" ry="${robot?6:6}" fill="${robot?"#86d6b4":dark}"/>${robot?"":`<circle cx="1.7" cy="-2.1" r="1.8" fill="#fff"/>`}</g><path id="${p}h${id}" d="M-6 2 Q0 -6 6 2" stroke="${dark}" stroke-width="2.6" fill="none" stroke-linecap="round" style="display:none"/></g>`;
  let s=eye("L",184)+eye("R",216);
  if(!robot)s+=`<path id="${p}bL" d="M176 113 Q184 108 192 112" stroke="${shade(c.hair||"#333",-10)}" stroke-width="3" fill="none" stroke-linecap="round"/><path id="${p}bR" d="M208 112 Q216 108 224 113" stroke="${shade(c.hair||"#333",-10)}" stroke-width="3" fill="none" stroke-linecap="round"/>`+
    `<path d="M199 131 Q195 141 201 142" stroke="${shade(sk,-45)}" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="172" cy="144" r="6.5" fill="#e5493d" opacity=".22"/><circle cx="228" cy="144" r="6.5" fill="#e5493d" opacity=".22"/>`;
  return s;
}
function mouthParts(p,robot){
  const col=robot?"#0d2420":"#7a2a22";
  return `<path id="${p}ms" d="M188 152 Q200 161 212 152" stroke="${col}" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse id="${p}mo" cx="200" cy="156" rx="8" ry="3" fill="${col}" style="display:none"/><path id="${p}ml" d="M185 150 Q200 174 215 150 Z" fill="${col}" style="display:none"/>`;
}
function buildChar(c,p){
  const g=geom(c),b=c.body||{},[bs,hs]=AGE_S[g.age]||[1,1],sk=c.skin||"#f0c8a8",H=c.hair||"#333",acc=accsOf(c);
  const headT=`translate(200 182) scale(${hs}) translate(-200 -182)`;
  let s=`<g transform="translate(200 300) scale(${bs}) translate(-200 -300)"><g id="${p}sway">`;
  if(b.robot==="ghost"){
    s+=`<g id="${p}hb"></g><path d="M150 302 L150 150 Q150 80 200 80 Q250 80 250 150 L250 302 Z" fill="#f4f6f4" opacity=".95"/>`+armSVG(p,"L",[156,220],"#f4f6f4","#f4f6f4","#f4f6f4",[18,16])+armSVG(p,"R",[244,220],"#f4f6f4","#f4f6f4","#f4f6f4",[18,16]);
    s+=`<g id="${p}hd">`+faceParts(p,{skin:"#f4f6f4",hair:"#1c1912"},false).replace(/opacity=".22"/g,'opacity=".3"')+mouthParts(p,false)+`</g></g></g>`;return s;
  }
  if(b.robot){
    const M=b.robot==="bot"?"#1d463f":"#9fb4c7",E=b.robot==="bot"?"#e3b04b":"#6d8296";
    s+=`<g id="${p}hb"></g><rect x="188" y="168" width="24" height="44" fill="${E}"/><path d="M128 302 L130 246 Q132 220 160 214 L240 214 Q268 220 270 246 L272 302 Z" fill="${M}" stroke="${E}" stroke-width="3"/><circle cx="200" cy="250" r="12" fill="#86d6b4" class="glow"/>`;
    s+=armSVG(p,"L",[142,232],E,M,E,[20,18])+armSVG(p,"R",[258,232],E,M,E,[20,18]);
    s+=`<g id="${p}hd"><line x1="200" y1="78" x2="200" y2="62" stroke="${E}" stroke-width="3"/><circle cx="200" cy="58" r="6" fill="#e5493d" class="glow"/><rect x="158" y="78" width="84" height="94" rx="20" fill="${M}" stroke="${E}" stroke-width="3"/>`+faceParts(p,c,true)+mouthParts(p,true)+`</g></g></g>`;
    return s;
  }
  s+=`<g id="${p}hb" transform="${headT}">${hairBack(c.style,H)}</g>`;
  s+=outfitSVG(c,g);
  const [up,fo]=sleeves(c);
  s+=`<g id="${p}hd" transform="${headT}">`;
  if(c.style!=="hijab")s+=`<ellipse cx="162" cy="130" rx="7" ry="10" fill="${sk}"/><ellipse cx="238" cy="130" rx="7" ry="10" fill="${sk}"/>`;
  s+=`<ellipse cx="200" cy="126" rx="38" ry="44" fill="${sk}"/>`;
  if(g.age==="senior")s+=`<path d="M168 122 l-6 -2 M168 127 l-6 0 M232 122 l6 -2 M232 127 l6 0 M186 100 Q200 97 214 100" stroke="${shade(sk,-40)}" stroke-width="1.4" fill="none"/>`;
  if(acc.includes("freckles"))s+=`<g fill="${shade(sk,-55)}"><circle cx="178" cy="138" r="1.3"/><circle cx="184" cy="141" r="1.3"/><circle cx="173" cy="142" r="1.3"/><circle cx="222" cy="138" r="1.3"/><circle cx="216" cy="141" r="1.3"/><circle cx="227" cy="142" r="1.3"/></g>`;
  if(acc.includes("beard"))s+=`<path d="M163 134 Q165 180 200 184 Q235 180 237 134 Q232 162 200 164 Q168 162 163 134 Z" fill="${g.age==="senior"?"#ececec":H}"/>`;
  s+=faceParts(p,c,false);
  s+=mouthParts(p,false);
  if(acc.includes("mustache"))s+=`<path d="M185 148 Q193 142 200 146 Q207 142 215 148 Q207 151 200 149 Q193 151 185 148 Z" fill="${g.age==="senior"?"#d8d8d8":H}"/>`;
  s+=hairFront(c.style,H,g.age);
  if(acc.includes("glasses"))s+=`<g fill="none" stroke="#2b2b2b" stroke-width="2"><circle cx="184" cy="126" r="9.5"/><circle cx="216" cy="126" r="9.5"/><path d="M193.5 126 H206.5 M174.5 124 L164 120 M225.5 124 L236 120"/></g>`;
  if(acc.includes("sunglasses"))s+=`<g fill="#111" opacity=".92"><rect x="172" y="118" width="24" height="15" rx="6"/><rect x="204" y="118" width="24" height="15" rx="6"/><rect x="195" y="122" width="10" height="3"/></g>`;
  if(acc.includes("earrings"))s+=`<circle cx="162" cy="143" r="3.2" fill="#e3b04b"/><circle cx="238" cy="143" r="3.2" fill="#e3b04b"/>`;
  if(acc.includes("bow"))s+=`<path d="M214 84 L228 74 L228 94 Z M242 84 L228 74 L228 94 Z" fill="#e5493d"/><circle cx="228" cy="84" r="3.4" fill="#b8352b"/>`;
  if(acc.includes("headphones"))s+=`<path d="M158 128 Q156 70 200 70 Q244 70 242 128" stroke="#222" stroke-width="7" fill="none"/><rect x="150" y="116" width="14" height="26" rx="6" fill="#e5493d"/><rect x="236" y="116" width="14" height="26" rx="6" fill="#e5493d"/>`;
  s+=`</g>`;
  s+=armSVG(p,"L",g.pL,up,fo,sk,[22,18])+armSVG(p,"R",g.pR,up,fo,sk,[22,18]);
  return s+`</g></g>`;
}

/* ---------- scenes ---------- */
const SCENES=["living","arcade","beach","city","space","forest","class","cafe","blossom","lantern","snow","studio"];
function rnd(seed){return rng(hashStr("sc"+seed))}
function sceneSVG(id,p){
  const r=rnd(id);let s="";
  const grad=(gid,a,b)=>`<defs><linearGradient id="${p}${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>`;
  const falling=(n,col,shape)=>{let o="";for(let i=0;i<n;i++){const x=(r()*400).toFixed(0),d=(6+r()*7).toFixed(1),dl=(-r()*10).toFixed(1);o+=`<g class="fall" style="animation-duration:${d}s;animation-delay:${dl}s">${shape==="petal"?`<ellipse cx="${x}" cy="0" rx="4" ry="2.4" fill="${col}"/>`:`<circle cx="${x}" cy="0" r="${(1.5+r()*2).toFixed(1)}" fill="${col}"/>`}</g>`}return o};
  const stars=(n,h)=>{let o="";for(let i=0;i<n;i++)o+=`<circle class="tw" style="animation-delay:${(-r()*3).toFixed(1)}s" cx="${(r()*400).toFixed(0)}" cy="${(r()*h).toFixed(0)}" r="${(0.6+r()*1.4).toFixed(1)}" fill="#fff"/>`;return o};
  switch(id){
    case "living":s+=`<rect width="400" height="300" fill="#efd9bd"/><rect x="0" y="236" width="400" height="64" fill="#b9875a"/><rect x="34" y="34" width="120" height="104" rx="4" fill="#9fd3f0" stroke="#fff" stroke-width="6"/><g class="drift"><ellipse cx="80" cy="74" rx="22" ry="9" fill="#fff"/><ellipse cx="96" cy="68" rx="16" ry="9" fill="#fff"/></g><line x1="94" y1="34" x2="94" y2="138" stroke="#fff" stroke-width="4"/><path d="M24 30 Q40 90 30 150 L18 150 L18 30 Z M164 30 Q148 90 158 150 L170 150 L170 30 Z" fill="#c0504d"/><rect x="300" y="196" width="34" height="40" rx="4" fill="#a05a3a"/><path d="M317 196 Q296 160 312 140 Q318 170 317 196 Q330 150 350 148 Q332 170 317 196 Q344 176 356 186 Q330 190 317 196" fill="#2f8a5b"/><rect x="258" y="70" width="70" height="52" rx="3" fill="#fff8e8" stroke="#8b5a2b" stroke-width="5"/><path d="M270 110 L284 92 L294 104 L304 88 L318 110 Z" fill="#86d6b4"/><rect x="70" y="196" width="260" height="64" rx="22" fill="#7a4e8a"/>`;break;
    case "arcade":s+=`<rect width="400" height="300" fill="#0d2420"/><rect x="10" y="10" width="380" height="60" rx="14" fill="#143530" stroke="#e3b04b" stroke-width="3"/><text x="200" y="50" text-anchor="middle" font-family="Bungee,Impact,sans-serif" font-size="24" fill="#e3b04b">FUNHOUSE</text>`;for(let i=0;i<20;i++)s+=`<circle class="tw" style="animation-delay:${(i%2)*-1.2}s" cx="${20+i*19}" cy="10" r="4" fill="${i%2?"#e5493d":"#e3b04b"}"/>`;s+=`<rect x="0" y="250" width="400" height="50" fill="#1d463f"/><path d="M0 250 L400 250" stroke="#e3b04b" stroke-width="2"/><rect x="20" y="120" width="56" height="130" rx="8" fill="#e5493d"/><rect x="28" y="132" width="40" height="34" fill="#86d6b4" class="flick"/><rect x="324" y="120" width="56" height="130" rx="8" fill="#3b82c4"/><rect x="332" y="132" width="40" height="34" fill="#e3b04b" class="flick" style="animation-delay:-2s"/>`;break;
    case "beach":s+=grad("sky","#ff9a6b","#ffd8a6")+`<rect width="400" height="300" fill="url(#${p}sky)"/><circle cx="300" cy="182" r="44" fill="#ffd27a" class="glow"/><rect y="186" width="400" height="80" fill="#2e7bb8"/><g class="wavey"><path d="M0 206 Q20 200 40 206 T80 206 T120 206 T160 206 T200 206 T240 206 T280 206 T320 206 T360 206 T400 206 T440 206" stroke="#9ed2f0" stroke-width="3" fill="none"/><path d="M0 230 Q20 224 40 230 T80 230 T120 230 T160 230 T200 230 T240 230 T280 230 T320 230 T360 230 T400 230 T440 230" stroke="#9ed2f0" stroke-width="3" fill="none" opacity=".7"/></g><rect y="258" width="400" height="42" fill="#f2d29b"/><path d="M48 260 Q56 180 44 130" stroke="#7a4e2a" stroke-width="9" fill="none"/><path d="M44 130 Q10 120 0 140 Q24 128 44 132 Q30 100 50 92 Q46 116 46 130 Q70 104 92 112 Q64 118 46 132 Q80 128 96 148 Q66 134 44 132" fill="#2f8a5b"/>`;break;
    case "city":s+=grad("sky","#0b1230","#2b2a5e")+`<rect width="400" height="300" fill="url(#${p}sky)"/>${stars(30,120)}<circle cx="330" cy="50" r="18" fill="#f5ead0"/>`;{let x=0;while(x<400){const w=30+r()*40,hgt=90+r()*120;s+=`<rect x="${x.toFixed(0)}" y="${(300-hgt).toFixed(0)}" width="${w.toFixed(0)}" height="${hgt.toFixed(0)}" fill="${r()>.5?"#141a3a":"#1c2350"}"/>`;for(let wy=300-hgt+10;wy<290;wy+=16)for(let wx=x+6;wx<x+w-8;wx+=12)if(r()>.55)s+=`<rect x="${wx.toFixed(0)}" y="${wy.toFixed(0)}" width="6" height="8" fill="#ffd27a" ${r()>.8?'class="flick" style="animation-delay:-'+(r()*5).toFixed(1)+'s"':""}/>`;x+=w+2}}break;
    case "space":s+=`<defs><radialGradient id="${p}neb" cx=".3" cy=".4" r=".7"><stop offset="0" stop-color="#5b2a86"/><stop offset="1" stop-color="#0b0620"/></radialGradient></defs><rect width="400" height="300" fill="url(#${p}neb)"/>${stars(70,300)}<circle cx="322" cy="70" r="32" fill="#e5849b"/><ellipse cx="322" cy="70" rx="56" ry="11" fill="none" stroke="#f5ead0" stroke-width="3" opacity=".8"/><circle cx="60" cy="230" r="14" fill="#86d6b4" opacity=".8"/>`;break;
    case "forest":s+=grad("sky","#bfe3d0","#eef7e9")+`<rect width="400" height="300" fill="url(#${p}sky)"/><circle cx="330" cy="54" r="26" fill="#fff4c2" class="glow"/>`;for(let i=0;i<9;i++){const x=i*50-10+r()*20,hh=120+r()*60;s+=`<path d="M${x} 260 L${x+30} ${260-hh} L${x+60} 260 Z" fill="${i%2?"#2f6f4f":"#3f8a5f"}"/>`}for(let i=0;i<7;i++){const x=i*64+r()*20;s+=`<path d="M${x} 280 L${x+34} ${180-r()*30} L${x+68} 280 Z" fill="#245a40"/>`}s+=`<rect y="270" width="400" height="30" fill="#5c8a3a"/>`;break;
    case "class":s+=`<rect width="400" height="300" fill="#e9e1cf"/><rect x="38" y="28" width="324" height="142" rx="6" fill="#22493a" stroke="#8b5a2b" stroke-width="8"/><g fill="none" stroke="#f4f6f4" stroke-width="2" opacity=".9" font-family="Comic Sans MS,Atkinson Hyperlegible,sans-serif"><text x="60" y="70" font-size="22" fill="#f4f6f4" stroke="none">A B C</text><text x="60" y="110" font-size="20" fill="#f4f6f4" stroke="none">1 + 1 = 2</text><text x="250" y="70" font-size="20" fill="#f4f6f4" stroke="none">Hello!</text><text x="250" y="110" font-size="20" fill="#f4f6f4" stroke="none">Xin chào</text><path d="M60 140 Q90 120 120 140 T180 140"/></g><circle cx="200" cy="12" r="0" fill="none"/><rect y="250" width="400" height="50" fill="#c49a6c"/><circle cx="340" cy="210" r="0"/>`;break;
    case "cafe":s+=`<rect width="400" height="300" fill="#6b4433"/>`;for(let y=0;y<240;y+=16)for(let x=(y/16)%2?0:-18;x<400;x+=36)s+=`<rect x="${x}" y="${y}" width="34" height="14" fill="#7d5140" opacity=".6"/>`;s+=`<rect x="250" y="40" width="120" height="90" rx="6" fill="#1f2933" stroke="#c49a6c" stroke-width="5"/><text x="310" y="68" text-anchor="middle" font-size="14" fill="#f5ead0" font-family="DM Mono,monospace">MENU</text><text x="310" y="90" text-anchor="middle" font-size="11" fill="#f5ead0" font-family="DM Mono,monospace">coffee  3</text><text x="310" y="108" text-anchor="middle" font-size="11" fill="#f5ead0" font-family="DM Mono,monospace">tea  2</text>`;for(const x of [60,140]){s+=`<line x1="${x}" y1="0" x2="${x}" y2="50" stroke="#222" stroke-width="2"/><path d="M${x-16} 64 L${x} 46 L${x+16} 64 Z" fill="#1f2933"/><ellipse cx="${x}" cy="70" rx="22" ry="12" fill="#ffd27a" class="glow" opacity=".7"/>`}s+=`<rect y="244" width="400" height="56" fill="#3a2418"/>`;break;
    case "blossom":s+=grad("sky","#fde7ef","#fff6f0")+`<rect width="400" height="300" fill="url(#${p}sky)"/>`;for(const [x,y] of [[50,80],[340,70],[380,150],[10,170]]){s+=`<path d="M${x} 300 L${x+6} ${y+40}" stroke="#6b3e2a" stroke-width="10"/>`;for(let i=0;i<9;i++)s+=`<circle cx="${(x+(r()-.5)*90).toFixed(0)}" cy="${(y+(r()-.5)*60).toFixed(0)}" r="${(16+r()*14).toFixed(0)}" fill="${r()>.5?"#f6a8c1":"#f9c6d6"}"/>`}s+=`<rect y="270" width="400" height="30" fill="#cfe3b8"/>`+falling(22,"#f48fb1","petal");break;
    case "lantern":s+=grad("sky","#1c1838","#3a2c5a")+`<rect width="400" height="300" fill="url(#${p}sky)"/>${stars(18,90)}<rect y="150" width="400" height="150" fill="#d9a441"/><rect y="150" width="400" height="10" fill="#8b5a2b"/>`;for(let i=0;i<4;i++)s+=`<rect x="${20+i*100}" y="186" width="44" height="70" fill="#7a3b2a"/><rect x="${70+i*100}" y="176" width="22" height="22" fill="#2f6f4f"/>`;{const cols=["#e5493d","#e3b04b","#c03a7a","#f08a3c","#7b4bd1"];for(const yy of [40,90]){s+=`<path d="M0 ${yy} Q200 ${yy+30} 400 ${yy}" stroke="#222" stroke-width="1.5" fill="none"/>`;for(let i=0;i<9;i++){const x=20+i*46,y=yy+Math.sin((x/400)*Math.PI)*24+10;s+=`<line x1="${x}" y1="${y-14}" x2="${x}" y2="${y-8}" stroke="#222"/><ellipse class="glow" style="animation-delay:-${(r()*2).toFixed(1)}s" cx="${x}" cy="${y+4}" rx="11" ry="14" fill="${cols[i%5]}"/><rect x="${x-5}" y="${y-10}" width="10" height="4" fill="#e3b04b"/>`}}}break;
    case "snow":s+=grad("sky","#9fc2e6","#e8f1fa")+`<rect width="400" height="300" fill="url(#${p}sky)"/><path d="M-20 260 L90 90 L170 210 L250 70 L420 260 Z" fill="#e9eef5"/><path d="M90 90 L70 122 L92 116 L110 130 Z M250 70 L228 108 L250 98 L272 112 Z" fill="#fff"/><path d="M-20 300 L80 200 L180 300 Z M200 300 L320 180 L440 300 Z" fill="#2f6f4f"/><rect y="270" width="400" height="30" fill="#fff"/>`+falling(40,"#fff","dot");break;
    case "studio":s+=`<defs><radialGradient id="${p}st" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="#3e6d63"/><stop offset="1" stop-color="#0d2420"/></radialGradient></defs><rect width="400" height="300" fill="url(#${p}st)"/><ellipse cx="200" cy="300" rx="180" ry="30" fill="#000" opacity=".25"/>`;break;
    case "photo":s+=S.bgImg?`<image href="${S.bgImg}" width="400" height="300" preserveAspectRatio="xMidYMid slice"/>`:`<rect width="400" height="300" fill="#143530"/><text x="200" y="150" text-anchor="middle" font-size="40">📷</text>`;break;
  }
  return s;
}

/* ---------- animation engine ---------- */
const REST={lU:100,lL:95,rU:80,rL:85,hr:0,hy:0,by:0,br:0,lx:0,ly:0,brow:0};
const GEST={
  wave:()=>[{p:{rU:-38,rL:-75,hr:5,brow:.6},t:280},{p:{rL:-122},t:200},{p:{rL:-72},t:200},{p:{rL:-122},t:200},{p:{rL:-75},t:200},{p:{...REST},t:420}],
  explain:()=>{const v=()=>Math.random()*14-7;return Math.random()<.5?[{p:{rU:52+v(),rL:-12+v(),hr:-3,brow:.2},t:380},{p:{rU:62+v(),rL:12+v(),hr:2},t:380},{p:{rU:80,rL:85,hr:0},t:420}]:[{p:{lU:126+v(),lL:192+v(),hr:3,brow:.2},t:380},{p:{lU:118+v(),lL:168+v(),hr:-2},t:380},{p:{lU:100,lL:95,hr:0},t:420}]},
  cheer:()=>[{p:{lU:-128,lL:-100,rU:-52,rL:-80,by:-6,brow:1},t:280,face:"happy"},{p:{lU:-118,lL:-112,rU:-62,rL:-68,by:0},t:220,face:"happy"},{p:{lU:-128,lL:-100,rU:-52,rL:-80,by:-6},t:220,face:"happy"},{p:{lU:-118,lL:-112,rU:-62,rL:-68,by:0},t:220,face:"happy"},{p:{...REST},t:450}],
  think:()=>[{p:{rU:150,rL:-95,hr:-7,lx:1.5,ly:-2.5,brow:.8},t:450}],
  shrug:()=>[{p:{lU:140,lL:205,rU:40,rL:-25,by:-5,hr:7,brow:1},t:320},{p:{},t:650},{p:{...REST},t:400}],
  laugh:()=>{const a=[{p:{lU:75,lL:-8,rU:105,rL:188,hr:-8,hy:-3},t:240,face:"laugh"}];for(let i=0;i<5;i++)a.push({p:{hr:i%2?-9:4,by:i%2?-3:1},t:140,face:"laugh"});a.push({p:{...REST},t:420});return a},
  heart:()=>[{p:{lU:60,lL:-60,rU:120,rL:240,hr:8,brow:.4},t:380,face:"happy"},{p:{hr:-4},t:500,face:"happy"},{p:{hr:6},t:500,face:"happy"},{p:{...REST},t:420}],
  bow:()=>[{p:{rU:118,rL:-122,hy:12,hr:4,by:4},t:450},{p:{},t:500},{p:{...REST},t:450}],
  nod:()=>[{p:{hy:5,brow:.3},t:170},{p:{hy:-1},t:170},{p:{hy:5},t:170},{p:{hy:0},t:200}],
  listen:()=>[{p:{rU:-100,rL:-100,hr:8,lx:2,brow:.6},t:400}],
  dance:()=>{const a=[];for(let i=0;i<6;i++)a.push(i%2?{p:{br:5,lU:122,lL:162,rU:-60,rL:-92,hr:6,by:-3},t:300,face:"happy"}:{p:{br:-5,lU:-120,lL:-88,rU:58,rL:18,hr:-6,by:0},t:300,face:"happy"});a.push({p:{...REST},t:400});return a},
  mystic:()=>[{p:{lU:58,lL:-18,rU:122,rL:198,brow:.8,ly:1.5},t:400},{p:{lL:-30,rL:210},t:500},{p:{lL:-14,rL:194},t:500},{p:{...REST},t:420}]
};
const ST={P:{...REST},queue:[],cur:null,hold:null,talkUntil:0,mouth:0,mt:0,mTarget:0,blinkAt:0,blinkEnd:0,face:null,faceUntil:0,lookUntil:0,refs:{},running:false,last:0};
function stageRefs(){const q=id=>document.getElementById("s-"+id);ST.refs={sway:q("sway"),hd:q("hd"),hb:q("hb"),aL:q("aL"),fL:q("fL"),aR:q("aR"),fR:q("fR"),eL:q("eL"),eR:q("eR"),hL:q("hL"),hR:q("hR"),bL:q("bL"),bR:q("bR"),ms:q("ms"),mo:q("mo"),ml:q("ml")};ST.geo=geom(curChar())}
function play(name,keepQueue){if(!GEST[name])return;if(!keepQueue){ST.queue=[];ST.cur=null}ST.hold=(name==="think"||name==="listen")?name:null;ST.queue.push(...GEST[name]())}
function stageSay(text){
  const t=(text||"")+" ",u=(typeof lastUser==="string"?lastUser:"");
  let g=null;
  if(/(granted|correct|🎉|🏆|chấp thuận|đúng rồi|批准|啱晒|concedido|accordé|bravo|congrat|you win|winner|passed|qua bài)/i.test(t))g="cheer";
  else if(/(joke|đùa|笑話|笑话|chiste|blague|cười)/i.test(u))g="laugh";
  else if(/(hug|ôm|攬|拥抱|abrazo|câlin|💛|❤️|love you|yêu)/i.test(t))g="heart";
  else if(/^[^\n]{0,40}(hello|hi |hey|welcome|chào|xin chào|你好|哈囉|歡迎|hola|bonjour|salut)/i.test(t))g="wave";
  else if(/(🔮|crystal|prophecy|tiên tri|水晶球|預言|destiny)/i.test(t))g="mystic";
  else if(S.mode==="hype")g=pick(["cheer","dance"]);
  else if(S.mode==="cat")g=pick(["shrug","nod"]);
  else if(S.mode==="bard")g="bow";
  else if(S.mode==="prof")g="nod";
  else if(/^(why|what|how|tại sao|點解|为什么)/i.test(u)&&chance(.4))g="shrug";
  if(/(sorry|sad|oof|rough|tough|bad day|hug|xin lỗi|buồn|mệt|辛苦|唔開心|難過|lo siento|triste|désolé)/i.test(t)){ST.face="sad";ST.faceUntil=performance.now()+3500}
  else if(/(wow|whoa|no way|really\?|ồ|wowie|嘩|哇|vaya|ouah|plot twist)/i.test(t)){ST.face="surprised";ST.faceUntil=performance.now()+2200}
  ST.hold=null;if(g)play(g);
  if(!(S.voice||S.talk))ST.talkUntil=performance.now()+Math.max(1200,Math.min(9000,text.length*55));else ST.talkUntil=performance.now()+700;
  const cap=$("#caption");if(cap){cap.textContent=text.replace(/\n\n[\s\S]*$/,"");cap.hidden=!S.cc;cap.scrollTop=0}
}
function mouthTarget(ts,speaking){
  if(!speaking)return 0;
  if(ST.hasWB&&ts-ST.wb<ST.wl*75+120){const t=ts-ST.wb,syl=Math.max(1,Math.round(ST.wl/2.6)),per=Math.min(170,(ST.wl*70)/syl);return .25+.75*Math.abs(Math.sin(Math.PI*t/per))}
  if(ST.hasWB&&ts-ST.wb<900)return .05;
  if(ts>ST.mt){ST.mRand=Math.random()<.15?0:.25+Math.random()*.75;ST.mt=ts+90+Math.random()*70}return ST.mRand||0;
}
function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
function frame(ts){
  if(!ST.running)return;requestAnimationFrame(frame);
  if(ts-ST.last<30)return;ST.last=ts;
  const R=ST.refs;if(!R.hd)return;
  const speaking=("speechSynthesis" in window&&speechSynthesis.speaking)||ts<ST.talkUntil;
  if(ST.hold==="listen"&&!rec&&!ST.cur&&!ST.queue.length){ST.hold=null;ST.queue.push({p:{...REST},t:400})}
  if(!ST.cur&&ST.queue.length){const k=ST.queue.shift();ST.cur={from:{...ST.P},to:Object.assign({},ST.P,k.p),t:k.t,start:ts};if(k.face){ST.face=k.face;ST.faceUntil=ts+k.t+500}}
  if(ST.cur){const x=Math.min(1,(ts-ST.cur.start)/ST.cur.t),e=ease(x);for(const k in ST.P)ST.P[k]=ST.cur.from[k]+(ST.cur.to[k]-ST.cur.from[k])*e;if(x>=1)ST.cur=null}
  else if(speaking&&!ST.hold){ST.queue.push(...GEST.explain())}
  else if(!ST.hold){for(const k in ST.P)ST.P[k]+=(REST[k]-ST.P[k])*.06}
  const P=ST.P,g=ST.geo,br=Math.sin(ts/900)*1.3,sw=Math.sin(ts/2300)*1.6;
  let lx=P.lx,ly=P.ly;if(ts<ST.lookUntil){lx=.5;ly=2.6}
  R.sway.setAttribute("transform",`rotate(${P.br.toFixed(2)} 200 300) translate(0 ${(P.by+br).toFixed(2)})`);
  const hs=(AGE_S[g.age]||[1,1])[1],ht=`translate(0 ${(P.hy+br*.4).toFixed(2)}) rotate(${(P.hr+sw).toFixed(2)} 200 182) translate(200 182) scale(${hs}) translate(-200 -182)`;
  R.hd.setAttribute("transform",ht);if(R.hb)R.hb.setAttribute("transform",ht);
  const curC=curChar(),pv=curC.body&&curC.body.robot==="ghost"?[[156,220],[244,220]]:curC.body&&curC.body.robot?[[142,232],[258,232]]:[g.pL,g.pR];
  R.aL.setAttribute("transform",`rotate(${P.lU.toFixed(1)} ${pv[0][0]} ${pv[0][1]})`);R.fL.setAttribute("transform",`rotate(${(P.lL-P.lU).toFixed(1)} ${pv[0][0]+52} ${pv[0][1]})`);
  R.aR.setAttribute("transform",`rotate(${P.rU.toFixed(1)} ${pv[1][0]} ${pv[1][1]})`);R.fR.setAttribute("transform",`rotate(${(P.rL-P.rU).toFixed(1)} ${pv[1][0]+52} ${pv[1][1]})`);
  if(ts>ST.blinkAt&&!ST.blinkEnd){ST.blinkEnd=ts+130}
  let bl=1;if(ST.blinkEnd){if(ts<ST.blinkEnd)bl=.12;else{ST.blinkEnd=0;ST.blinkAt=ts+1800+Math.random()*3800}}
  const face=ts<ST.faceUntil?ST.face:null,happy=face==="happy"||face==="laugh";
  for(const [e,hh] of [[R.eL,R.hL],[R.eR,R.hR]]){if(!e)continue;e.setAttribute("transform",`translate(${lx.toFixed(2)} ${ly.toFixed(2)}) scale(1 ${bl})`);e.style.display=happy?"none":"";if(hh)hh.style.display=happy?"":"none"}
  if(R.bL){const by=-P.brow*4;R.bL.setAttribute("transform",`translate(0 ${by.toFixed(1)})`);R.bR.setAttribute("transform",`translate(0 ${by.toFixed(1)})`)}
  ST.mTarget=mouthTarget(ts,speaking);
  ST.mouth+=(ST.mTarget-ST.mouth)*.4;
  if(face==="laugh"){R.ml.style.display="";R.mo.style.display="none";R.ms.style.display="none"}
  else if(ST.mouth>.08){R.mo.style.display="";R.mo.setAttribute("ry",(2+ST.mouth*7.5).toFixed(2));R.mo.setAttribute("rx",(7+ST.mouth*2.5).toFixed(2));R.ms.style.display="none";R.ml.style.display="none"}
  else{R.ms.style.display="";R.mo.style.display="none";R.ml.style.display="none"}
  if(face==="sad")R.ms.setAttribute("d","M188 157 Q200 149 212 157");else R.ms.setAttribute("d","M188 152 Q200 161 212 152");
  if(face==="surprised"&&ST.mouth<.3){R.mo.style.display="";R.mo.setAttribute("ry","5");R.mo.setAttribute("rx","5");R.ms.style.display="none"}
}

/* ---------- stage UI ---------- */
S.stageOn=store.get("stageOn",true);S.bg=store.get("bg","living");S.cc=store.get("cc",true);S.stageSize=store.get("stageSize","m");
try{S.bgImg=localStorage.getItem("fho_bgImg")||""}catch(e){S.bgImg=""}
let sheetMode=null;
function renderStageChar(){$("#stageChar").innerHTML=buildChar(curChar(),"s-");stageRefs();$("#stageName").textContent=curChar().name+" · "+MODES[S.mode].em+" "+modeName(S.mode)}
function renderStageBg(){$("#stageBg").innerHTML=sceneSVG(S.bg,"bg-")}
function applyStageSize(){const b=$("#stageBox");b.classList.remove("sz-s","sz-l");if(S.stageSize!=="m")b.classList.add("sz-"+S.stageSize)}
function stageVisible(){return S.stageOn&&!$("#view-chat").hidden}
function updateStage(){
  const vis=stageVisible();$("#stageWrap").hidden=!vis;$("#stageBtn").hidden=S.stageOn;
  if(vis&&!ST.running){ST.running=true;requestAnimationFrame(frame)}else if(!vis)ST.running=false;
}
function renderSheet(){
  const sh=$("#stageSheet");document.querySelectorAll(".stage-tools [data-s]").forEach(b=>b.classList.toggle("on",b.dataset.s===sheetMode));
  if(!sheetMode){sh.hidden=true;return}sh.hidden=false;sh.innerHTML="";
  if(sheetMode==="chars"){
    CHARS.forEach(c=>{const it=h("button",{type:"button",class:"sheet-item","aria-pressed":c.id===S.char,title:c.name,onclick:()=>{selectChar(c.id);renderSheet()}});it.innerHTML=faceSVG(c).replace("<svg",'<svg style="width:46px;height:46px"');it.append(h("span",null,c.name));sh.append(it)});
    sh.append(h("button",{type:"button",class:"sheet-item",onclick:()=>{switchTab("me");$("#builderPanel").scrollIntoView({block:"start"})}},h("span",{class:"em"},"＋"),h("span",null,T("st_create"))));
  } else if(sheetMode==="bgs"){
    [...SCENES,"photo"].forEach(id=>{const it=h("button",{type:"button",class:"sheet-item","aria-pressed":id===S.bg,onclick:()=>{if(id==="photo"&&!S.bgImg){$("#bgFile").click();return}S.bg=id;store.set("bg",id);renderStageBg();renderSheet();sfx("blip")}});
      it.innerHTML=`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">${sceneSVG(id,"t"+id+"-")}</svg>`;it.append(h("span",null,T("sc_"+id)));sh.append(it)});
    sh.append(h("button",{type:"button",class:"sheet-item",onclick:()=>$("#bgFile").click()},h("span",{class:"em"},"📷"),h("span",null,"+ "+T("sc_photo"))));
  } else if(sheetMode==="moves"){
    [["wave","👋"],["dance","💃"],["laugh","😂"],["cheer","🙌"],["heart","🫶"],["think","🤔"],["shrug","🤷"],["bow","🙇"],["nod","🙂"],["listen","👂"],["mystic","🔮"]].forEach(([g,e])=>
      sh.append(h("button",{type:"button",class:"sheet-item",onclick:()=>{play(g);sfx("blip2");if(g==="think"||g==="listen")setTimeout(()=>{if(ST.hold===g){ST.hold=null;ST.queue.push({p:{...REST},t:400})}},2200)}},h("span",{class:"em"},e),h("span",null,T("mv_"+g)))));
  }
}
document.querySelectorAll(".stage-tools [data-s]").forEach(b=>b.onclick=()=>{sheetMode=sheetMode===b.dataset.s?null:b.dataset.s;renderSheet();sfx("blip")});
$("#ccBtn").onclick=()=>{S.cc=!S.cc;store.set("cc",S.cc);$("#ccBtn").classList.toggle("on",S.cc);const c=$("#caption");c.hidden=!S.cc||!c.textContent};
$("#sizeBtn").onclick=()=>{S.stageSize={s:"m",m:"l",l:"s"}[S.stageSize];store.set("stageSize",S.stageSize);applyStageSize();sfx("blip")};
$("#stageHide").onclick=()=>{S.stageOn=false;store.set("stageOn",false);updateStage()};
$("#stageBtn").onclick=()=>{S.stageOn=!S.stageOn;store.set("stageOn",S.stageOn);updateStage();if(S.stageOn)play("wave")};
$("#bgFile").onchange=e=>{const f=e.target.files[0];if(!f)return;
  const img=new Image(),url=URL.createObjectURL(f);img.onload=()=>{const cv=document.createElement("canvas"),k=Math.min(1,900/Math.max(img.width,img.height));cv.width=Math.round(img.width*k);cv.height=Math.round(img.height*k);
    const ctx=cv.getContext("2d");if(ctx){ctx.drawImage(img,0,0,cv.width,cv.height);S.bgImg=cv.toDataURL("image/jpeg",.82)}else S.bgImg=url;
    try{localStorage.setItem("fho_bgImg",S.bgImg)}catch(err){toast(T("photoBig"))}
    S.bg="photo";store.set("bg","photo");renderStageBg();renderSheet()};img.src=url;e.target.value=""};
$("#input").addEventListener("input",()=>{ST.lookUntil=performance.now()+1500});

/* ---------- hooks into the app ---------- */
{const _t=talk;talk=function(text){_t(text);stageSay(text)};}
{const _m=mascot;mascot=function(s){_m(s);if(s==="think"){play("think")}else if(s==="happy"&&!ST.cur&&!ST.queue.length){ST.face="happy";ST.faceUntil=performance.now()+1500}};}
{const _l=listen;listen=function(){_l();if(rec&&stageVisible())play("listen")};}
{const _sc=selectChar;selectChar=function(id){_sc(id);renderStageChar();play("wave")};}
{const _st2=switchTab;switchTab=function(v){_st2(v);updateStage()};}
{const _rm2=renderModes;renderModes=function(){_rm2();if($("#stageName")&&ST.refs.hd!==undefined)$("#stageName").textContent=curChar().name+" · "+MODES[S.mode].em+" "+modeName(S.mode)};}
{const _sa=speakAs;speakAs=function(c,text,after){_sa(c,text,after);if(stageVisible())ST.talkUntil=performance.now()+600};}
{const _au2=applyUI;applyUI=function(){_au2();if(!$("#stageSheet").hidden)renderSheet();renderBuilder()};}

/* renderChars with delete for custom avatars */
renderChars=function(){
  const w=$("#chars");w.innerHTML="";
  CHARS.forEach(c=>{const b=document.createElement("div");b.className="char";b.setAttribute("role","button");b.tabIndex=0;b.setAttribute("aria-pressed",c.id===S.char);
    b.innerHTML=faceSVG(c);b.append(h("b",null,c.name),h("span",null,charTag(c)));
    b.append(h("button",{type:"button",class:"play","aria-label":"Hear "+c.name,onclick:e=>{e.stopPropagation();speakAs(c,fill(HI_IM[replyLang()]||HI_IM.en,{n:c.name}))}},"▶"));
    if(c.custom)b.append(h("button",{type:"button",class:"play",style:"left:6px;right:auto","aria-label":"Delete "+c.name,onclick:e=>{e.stopPropagation();S.myChars=S.myChars.filter(x=>x.id!==c.id);store.set("myChars",S.myChars);CHARS.splice(CHARS.indexOf(c),1);if(S.char===c.id)selectChar("oracle");renderChars()}},"✕"));
    const choose=()=>selectChar(c.id);b.onclick=choose;b.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose()}};w.append(b)});
};

/* ---------- avatar builder ---------- */
let BLD=store.get("bld",null)||{name:"",g:"f",age:"adult",build:"avg",skin:SKINS[2],style:"long",hair:HAIRC[1],outfit:"sweater",oc:OUTC[9],accs:[],pitch:1.08};
function bChar(){return {id:"prev",name:BLD.name||T("bNameP"),g:BLD.g,skin:BLD.skin,hair:BLD.hair,style:BLD.style,pitch:BLD.pitch,rate:1,body:{age:BLD.age,build:BLD.build,outfit:BLD.outfit,oc:BLD.oc,accs:BLD.accs}}}
function defaultPitch(){return {toddler:1.85,kid:1.55,teen:1.2,adult:BLD.g==="m"?.9:BLD.g==="f"?1.08:1,senior:BLD.g==="m"?.72:.86}[BLD.age]}
function renderBuilder(){
  const ctl=$("#bCtl");if(!ctl)return;ctl.innerHTML="";
  const prev=()=>{$("#bPrev").innerHTML=buildChar(bChar(),"bp-");store.set("bld",BLD)};
  const seg=(key,opts,lbl,cls)=>{const s=h("div",{class:"seg"+(cls?" "+cls:"")});opts.forEach(([v,t])=>s.append(h("button",{type:"button","aria-pressed":BLD[key]===v,onclick:()=>{BLD[key]=v;if(key==="age"||key==="g")BLD.pitch=defaultPitch();renderBuilder()}},t)));return h("div",{class:"field"},h("span",{class:"label"},lbl),s)};
  const sw=(key,cols,lbl)=>{const s=h("div",{class:"sw"});cols.forEach(c=>s.append(h("button",{type:"button","aria-pressed":BLD[key]===c,"aria-label":c,style:"background:"+c,onclick:()=>{BLD[key]=c;renderBuilder()}})));return h("div",{class:"field"},h("span",{class:"label"},lbl),s)};
  const selF=(key,opts,pre,lbl)=>{const sel=h("select",{id:"b-"+key});opts.forEach(o=>sel.append(h("option",{value:o},T(pre+o))));sel.value=BLD[key];sel.onchange=()=>{BLD[key]=sel.value;prev()};return h("div",{class:"field"},h("label",{class:"label",for:"b-"+key},lbl),sel)};
  const nm=h("input",{id:"b-name",maxlength:"20",placeholder:T("bNameP"),value:BLD.name});nm.oninput=()=>{BLD.name=nm.value;store.set("bld",BLD)};
  const accs=h("div",{class:"chips tight"});ACCS.forEach(a=>accs.append(h("button",{type:"button",class:"chip","aria-pressed":BLD.accs.includes(a),onclick:()=>{BLD.accs=BLD.accs.includes(a)?BLD.accs.filter(x=>x!==a):[...BLD.accs,a];renderBuilder()}},T("a_"+a))));
  const pr=h("input",{type:"range",id:"b-pitch",min:"0.5",max:"2",step:"0.05",value:BLD.pitch});pr.oninput=()=>{BLD.pitch=+pr.value;store.set("bld",BLD)};pr.onchange=()=>speakAs(bChar(),fill(HI_IM[replyLang()]||HI_IM.en,{n:BLD.name||T("bNameP")}));
  ctl.append(h("div",{class:"field"},h("label",{class:"label",for:"b-name"},T("bName")),nm),
    seg("g",[["f",T("vF")],["m",T("vM")],["n",T("vN")]],T("bVoice")),
    seg("age",AGES.map(a=>[a,T("ag_"+a)]),T("bAge"),"s5"),
    seg("build",BUILDS.map(a=>[a,T("bl_"+a)]),T("bBuild")),
    sw("skin",SKINS,T("bSkin")),selF("style",HAIRS,"h_",T("bHair")),sw("hair",HAIRC,T("bHairC")),
    selF("outfit",OUTFITS,"o_",T("bOutfit")),sw("oc",OUTC,T("bOutC")),
    h("div",{class:"field"},h("span",{class:"label"},T("bAcc")),accs),
    h("div",{class:"field"},h("label",{class:"label",for:"b-pitch"},T("bPitch")),pr));
  prev();
}
$("#bRandom").onclick=()=>{BLD={name:BLD.name,g:pick(["f","m","n"]),age:pick(AGES),build:pick(BUILDS),skin:pick(SKINS),style:pick(HAIRS),hair:pick(HAIRC),outfit:pick(OUTFITS),oc:pick(OUTC),accs:ACCS.filter(()=>chance(.18)),pitch:1};BLD.pitch=defaultPitch();if(BLD.age==="senior"&&chance(.7))BLD.hair=pick(["#dcdcdc","#9aa0a6"]);renderBuilder();sfx("coin")};
$("#bSave").onclick=()=>{
  const c=bChar();c.id="my"+Date.now().toString(36);c.custom=true;
  c.tag=BLD.g==="n"?"custom":{toddler:"toddler",kid:BLD.g==="f"?"girl":"boy",teen:BLD.g==="f"?"teenGirl":"teenBoy",adult:BLD.g==="f"?"woman":"man",senior:BLD.g==="f"?"grandma":"grandpa"}[BLD.age];
  c.rate={toddler:1,kid:1.05,teen:1.06,adult:1,senior:.88}[BLD.age];
  S.myChars.push(c);store.set("myChars",S.myChars);CHARS.push(c);toast(T("bSaved"));sfx("win");confetti();
  selectChar(c.id);renderChars();switchTab("chat");if(!S.stageOn){S.stageOn=true;store.set("stageOn",true);updateStage()}
};

/* ---------- init ---------- */
$("#ccBtn").classList.toggle("on",S.cc);
applyStageSize();renderStageBg();renderStageChar();renderChars();renderBuilder();updateStage();
ST.blinkAt=performance.now()+1500;
setTimeout(()=>{if(stageVisible()){play("wave");const last=[...document.querySelectorAll(".msg.bot .bubble")].slice(-1)[0];if(last)stageSay(last.textContent)}},300);

