
/* ================= v9: more people, wardrobe & jewellery, AI brain switcher ================= */
const UI6={
 en:{ward:"Wardrobe",w_looks:"Looks",w_outfit:"Outfit",w_color:"Colour",w_pattern:"Pattern",w_legs:"Legs",w_hair:"Hair",w_neck:"Necklace",w_ears:"Earrings",w_ring:"Rings",w_wrist:"Wrist",w_head:"Head",w_eyes:"Glasses",w_metal:"Metal",w_gem:"Gems",
  o_orig:"Original",o_recolor:"Recolour",o_cocktail:"Cocktail dress",o_midi:"Midi dress",o_gown:"Evening gown",
  p_plain:"Plain",p_stripes:"Stripes",p_dots:"Polka dots",p_floral:"Floral",p_plaid:"Plaid",p_sequins:"Sequins",
  l_nude:"Bare legs",l_black:"Black tights",l_keep:"Keep",
  h_orig:"Original",h_blonde:"Blonde",h_platinum:"Platinum",h_honey:"Honey",h_brown:"Brown",h_black:"Black",h_auburn:"Auburn",h_red:"Red",h_pink:"Pink",h_silver:"Silver",
  n_none:"None",n_chain:"Gold chain",n_pearls:"Pearls",n_pendant:"Pendant",n_choker:"Choker",n_heart:"Heart locket",
  e_studs:"Studs",e_hoops:"Hoops",e_pearl:"Pearl drops",e_drops:"Gem drops",
  r_band:"Band",r_solitaire:"Solitaire",r_both:"Both hands",
  b_bangle:"Bangle",b_pearl:"Pearl bracelet",b_watch:"Watch",b_both:"Watch + bangle",
  hd_tiara:"Tiara",hd_crown:"Flower crown",hd_flower:"Hair flower",hd_hat:"Sun hat",
  g_round:"Round glasses",g_sun:"Sunglasses",
  m_gold:"Gold",m_silver:"Silver",m_rose:"Rose gold",
  gm_diamond:"Diamond",gm_ruby:"Ruby",gm_emerald:"Emerald",gm_sapphire:"Sapphire",gm_amethyst:"Amethyst",
  lk_garden:"Garden party",lk_gala:"Gala night",lk_office:"Office chic",lk_summer:"Summer day",lk_wedding:"Wedding guest",lk_rock:"Rock star",lk_surprise:"Surprise me",lk_reset:"Reset",
  w_only:"Outfit colours work on the women and girls. Hair, jewellery, hats and glasses work on everyone.",w_need3d:"The wardrobe is for the 3D people. Switching to 3D…",
  w_say:["How do I look?","Ooh, I love this one!","Feeling fancy today!","Okay, this is SO me.","Do these earrings go with this?","Ready for the red carpet!"],
  f_all:"Everyone",f_f:"Women",f_m:"Men",f_kid:"Kids",f_senior:"Seniors",
  br_kind:"Brain",br_spark:"Spark (built-in, offline)",br_web:"In-browser AI (free, private)",br_local:"On my computer (Ollama / LM Studio)",br_cloud:"Cloud AI (your own key)",
  br_prov:"Provider",br_key:"API key",br_model:"Model",br_url:"Server address",br_list:"Load model list",br_connect:"Connect",br_test:"Testing…",br_ok:"Connected to {m}",br_fail:"Couldn't connect: {e}",
  br_keyNote:"Your key is saved only in this browser on this device and sent only to the provider you pick. Don't use it on a shared computer.",
  br_localNote:"Install Ollama, run a model (for example: ollama run llama3.2) and allow this site: set OLLAMA_ORIGINS=* before starting Ollama. Fully offline and private.",
  br_artNote:"Cloud and computer brains can't connect from inside the Claude preview. Use your own site (GitHub Pages) for those.",
  br_webNote:"Downloads once, then runs offline on this device. Bigger = smarter but slower, and needs a strong GPU.",
  br_tier:["Tiny","Small","Medium","Large","Huge"]},
 vi:{ward:"Tủ đồ",w_looks:"Phong cách",w_outfit:"Trang phục",w_color:"Màu",w_pattern:"Hoạ tiết",w_legs:"Chân",w_hair:"Tóc",w_neck:"Dây chuyền",w_ears:"Bông tai",w_ring:"Nhẫn",w_wrist:"Cổ tay",w_head:"Trên đầu",w_eyes:"Kính",w_metal:"Kim loại",w_gem:"Đá quý",
  o_orig:"Nguyên bản",o_recolor:"Đổi màu",o_cocktail:"Váy dự tiệc",o_midi:"Váy midi",o_gown:"Đầm dạ hội",
  p_plain:"Trơn",p_stripes:"Kẻ sọc",p_dots:"Chấm bi",p_floral:"Hoa",p_plaid:"Kẻ ô",p_sequins:"Kim sa",
  l_nude:"Chân trần",l_black:"Tất đen",l_keep:"Giữ nguyên",
  h_orig:"Nguyên bản",h_blonde:"Vàng",h_platinum:"Bạch kim",h_honey:"Mật ong",h_brown:"Nâu",h_black:"Đen",h_auburn:"Nâu đỏ",h_red:"Đỏ",h_pink:"Hồng",h_silver:"Bạc",
  n_none:"Không",n_chain:"Dây vàng",n_pearls:"Ngọc trai",n_pendant:"Mặt dây",n_choker:"Vòng cổ sát",n_heart:"Mặt trái tim",
  e_studs:"Nụ",e_hoops:"Khoen tròn",e_pearl:"Ngọc trai rủ",e_drops:"Đá rủ",
  r_band:"Nhẫn trơn",r_solitaire:"Nhẫn đá",r_both:"Hai tay",
  b_bangle:"Vòng tay",b_pearl:"Vòng ngọc trai",b_watch:"Đồng hồ",b_both:"Đồng hồ + vòng",
  hd_tiara:"Vương miện",hd_crown:"Vòng hoa",hd_flower:"Hoa cài tóc",hd_hat:"Mũ rộng vành",
  g_round:"Kính tròn",g_sun:"Kính râm",
  m_gold:"Vàng",m_silver:"Bạc",m_rose:"Vàng hồng",
  gm_diamond:"Kim cương",gm_ruby:"Hồng ngọc",gm_emerald:"Ngọc lục bảo",gm_sapphire:"Lam ngọc",gm_amethyst:"Thạch anh tím",
  lk_garden:"Tiệc vườn",lk_gala:"Dạ tiệc",lk_office:"Công sở",lk_summer:"Ngày hè",lk_wedding:"Đi đám cưới",lk_rock:"Ngôi sao rock",lk_surprise:"Ngẫu nhiên",lk_reset:"Đặt lại",
  w_only:"Đổi màu trang phục dùng cho nữ và bé gái. Tóc, trang sức, mũ và kính dùng cho tất cả.",w_need3d:"Tủ đồ dành cho người 3D. Đang chuyển sang 3D…",
  w_say:["Trông mình thế nào?","Ôi, mình thích bộ này!","Hôm nay sang chảnh ghê!","Đúng gu mình luôn.","Bông tai này hợp không?","Sẵn sàng lên thảm đỏ!"],
  f_all:"Tất cả",f_f:"Nữ",f_m:"Nam",f_kid:"Trẻ em",f_senior:"Người lớn tuổi",
  br_kind:"Bộ não",br_spark:"Spark (có sẵn, ngoại tuyến)",br_web:"AI trong trình duyệt (miễn phí, riêng tư)",br_local:"Trên máy tính của tôi (Ollama / LM Studio)",br_cloud:"AI đám mây (khoá của bạn)",
  br_prov:"Nhà cung cấp",br_key:"Khoá API",br_model:"Mô hình",br_url:"Địa chỉ máy chủ",br_list:"Tải danh sách mô hình",br_connect:"Kết nối",br_test:"Đang thử…",br_ok:"Đã kết nối {m}",br_fail:"Không kết nối được: {e}",
  br_keyNote:"Khoá chỉ lưu trong trình duyệt trên thiết bị này và chỉ gửi tới nhà cung cấp bạn chọn. Đừng dùng trên máy dùng chung.",
  br_localNote:"Cài Ollama, chạy một mô hình (ví dụ: ollama run llama3.2) và cho phép trang này: đặt OLLAMA_ORIGINS=* trước khi mở Ollama. Hoàn toàn ngoại tuyến.",
  br_artNote:"Bộ não đám mây và máy tính không kết nối được trong bản xem trước của Claude. Hãy dùng trang riêng (GitHub Pages).",
  br_webNote:"Tải một lần, sau đó chạy ngoại tuyến. Càng lớn càng thông minh nhưng chậm hơn, cần GPU mạnh.",
  br_tier:["Siêu nhỏ","Nhỏ","Vừa","Lớn","Rất lớn"]},
 yue:{ward:"衣櫃",w_looks:"造型",w_outfit:"衫",w_color:"顏色",w_pattern:"花紋",w_legs:"腳",w_hair:"頭髮",w_neck:"頸鏈",w_ears:"耳環",w_ring:"戒指",w_wrist:"手腕",w_head:"頭飾",w_eyes:"眼鏡",w_metal:"金屬",w_gem:"寶石",
  o_orig:"原本",o_recolor:"換色",o_cocktail:"派對裙",o_midi:"中長裙",o_gown:"晚裝",
  p_plain:"純色",p_stripes:"間條",p_dots:"波點",p_floral:"碎花",p_plaid:"格仔",p_sequins:"亮片",
  l_nude:"光腳",l_black:"黑絲襪",l_keep:"唔變",
  h_orig:"原本",h_blonde:"金色",h_platinum:"白金",h_honey:"蜜糖色",h_brown:"啡色",h_black:"黑色",h_auburn:"紅啡",h_red:"紅色",h_pink:"粉紅",h_silver:"銀色",
  n_none:"冇",n_chain:"金鏈",n_pearls:"珍珠",n_pendant:"吊墜",n_choker:"頸圈",n_heart:"心形吊墜",
  e_studs:"耳釘",e_hoops:"大耳圈",e_pearl:"珍珠耳墜",e_drops:"寶石耳墜",
  r_band:"素戒",r_solitaire:"鑽戒",r_both:"兩隻手",
  b_bangle:"手鐲",b_pearl:"珍珠手鏈",b_watch:"手錶",b_both:"手錶加手鐲",
  hd_tiara:"皇冠",hd_crown:"花環",hd_flower:"頭花",hd_hat:"太陽帽",
  g_round:"圓眼鏡",g_sun:"太陽眼鏡",
  m_gold:"金",m_silver:"銀",m_rose:"玫瑰金",
  gm_diamond:"鑽石",gm_ruby:"紅寶石",gm_emerald:"祖母綠",gm_sapphire:"藍寶石",gm_amethyst:"紫水晶",
  lk_garden:"花園派對",lk_gala:"晚宴",lk_office:"返工",lk_summer:"夏日",lk_wedding:"飲喜酒",lk_rock:"搖滾巨星",lk_surprise:"隨機",lk_reset:"重設",
  w_only:"換衫顏色適用於女士同女仔。頭髮、首飾、帽同眼鏡個個都用得。",w_need3d:"衣櫃係俾 3D 人物用嘅，而家轉去 3D…",
  w_say:["我靚唔靚？","嘩，我好鍾意呢套！","今日好有型！","呢套好啱我。","對耳環襯唔襯？","可以行紅地氈喇！"],
  f_all:"全部",f_f:"女",f_m:"男",f_kid:"小朋友",f_senior:"長者",
  br_kind:"腦袋",br_spark:"Spark（內置，離線）",br_web:"瀏覽器 AI（免費，私隱）",br_local:"我部電腦（Ollama / LM Studio）",br_cloud:"雲端 AI（用你自己條 key）",
  br_prov:"供應商",br_key:"API key",br_model:"模型",br_url:"伺服器地址",br_list:"載入模型列表",br_connect:"連接",br_test:"測試緊…",br_ok:"已連接 {m}",br_fail:"連唔到：{e}",
  br_keyNote:"條 key 只會儲喺呢部機嘅瀏覽器，只會傳俾你揀嘅供應商。唔好喺公用電腦用。",
  br_localNote:"安裝 Ollama，運行一個模型（例如 ollama run llama3.2），開 Ollama 之前設定 OLLAMA_ORIGINS=*。完全離線。",
  br_artNote:"喺 Claude 預覽入面連唔到雲端或者電腦腦袋，請用你自己個網站（GitHub Pages）。",
  br_webNote:"下載一次之後離線運行。越大越聰明但越慢，要好啲嘅 GPU。",
  br_tier:["超細","細","中","大","超大"]}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI6[k]);

/* ---------- 1. more people ---------- */
CAST3D.push(
 {id:"olivia",f:"Female_Adult_02",name:"Olivia",g:"f",age:"adult"},{id:"chloe",f:"Female_Adult_04",name:"Chloe",g:"f",age:"adult"},
 {id:"sophie",f:"Female_Adult_05",name:"Sophie",g:"f",age:"adult"},{id:"ava",f:"Female_Adult_07",name:"Ava",g:"f",age:"adult"},
 {id:"grace",f:"Female_Adult_08",name:"Grace",g:"f",age:"adult"},{id:"lily",f:"Female_Adult_09",name:"Lily",g:"f",age:"adult"},
 {id:"nadia",f:"Female_Adult_10",name:"Nadia",g:"f",age:"adult"},{id:"ruby",f:"Female_Adult_12",name:"Ruby",g:"f",age:"adult"},
 {id:"emma",f:"Female_Adult_13",name:"Emma",g:"f",age:"adult"},{id:"hannah",f:"Female_Adult_14",name:"Hannah",g:"f",age:"adult"},
 {id:"mia",f:"Female_Adult_15",name:"Mia",g:"f",age:"adult"},{id:"charlotte",f:"Female_Adult_17",name:"Charlotte",g:"f",age:"adult"},
 {id:"bella",f:"Female_Party_01",name:"Bella",g:"f",age:"adult"},{id:"victoria",f:"Business_Female_01",name:"Victoria",g:"f",age:"adult"},
 {id:"diana",f:"Business_Female_03",name:"Diana",g:"f",age:"adult"},{id:"natalie",f:"Business_Female_04",name:"Natalie",g:"f",age:"adult"},
 {id:"rosa",f:"Chef_Female_01",name:"Chef Rosa",g:"f",age:"adult"},{id:"anna",f:"Pilot_Female_01",name:"Captain Anna",g:"f",age:"adult"},
 {id:"jess",f:"Sports_Female_02",name:"Jess",g:"f",age:"adult"},
 {id:"leo",f:"Male_Adult_01",name:"Leo",g:"m",age:"adult"},{id:"diego",f:"Male_Adult_07",name:"Diego",g:"m",age:"adult"},
 {id:"victor",f:"Male_Adult_14",name:"Victor",g:"m",age:"senior"},{id:"richard",f:"Business_Male_04",name:"Richard",g:"m",age:"adult"});
{const rk=c=>c.age==='kid'?3:c.g==='m'?2:c.age==='senior'?1:0;const so=CAST3D.slice().sort((a,b)=>rk(a)-rk(b));CAST3D.length=0;CAST3D.push(...so)}
CAST3D.forEach(c=>{if(c.pitch==null){c.pitch={kid:c.g==="f"?1.5:1.4,adult:c.g==="f"?1.05:.9,senior:c.g==="f"?.86:.76}[c.age];c.rate=c.age==="senior"?.88:c.age==="kid"?1.04:1}});
/* per-avatar data: [clothes mean luminance, hair mean luminance, skin tone] */
const WDATA={"Business_Female_02":[0.117,0.381,"#ca896f"],"Business_Male_02":[0.533,0.065,"#1a1a20"],"Female_Adult_01":[0.306,0.48,"#d9a38b"],"Female_Adult_03":[0.173,0.065,"#d0967e"],"Female_Adult_06":[0.273,0.823,"#c89172"],"Female_Adult_11":[0.118,0.082,"#ca9171"],"Female_Child_01":[0.411,0.3,"#d59f88"],"Female_Child_02":[0.24,0.3,"#cd8f69"],"Female_Party_02":[0.125,0.075,"#d38e67"],"Male_Adult_03":[0.404,0.413,"#191a19"],"Male_Adult_04":[0.437,0.104,"#2e281f"],"Male_Adult_05":[0.445,0.133,"#43352c"],"Male_Adult_09":[0.262,0.071,"#5b6566"],"Male_Adult_12":[0.209,0.3,"#869297"],"Male_Adult_19":[0.151,0.3,"#c3c2c0"],"Male_Child_01":[0.286,0.3,"#6a726b"],"Male_Child_02":[0.329,0.3,"#3d3731"],"Medical_Female_02":[0.465,0.129,"#d2977f"],"Medical_Male_03":[0.695,0.3,"#1f1f1e"],"Business_Female_01":[0.142,0.08,"#9c623b"],"Business_Female_03":[0.245,0.062,"#d59f89"],"Business_Female_04":[0.112,0.129,"#d59e87"],"Business_Male_04":[0.521,0.3,"#272520"],"Chef_Female_01":[0.52,0.3,"#d59f87"],"Female_Adult_02":[0.431,0.09,"#dea180"],"Female_Adult_04":[0.169,0.592,"#d6a088"],"Female_Adult_05":[0.385,0.081,"#d09178"],"Female_Adult_07":[0.147,0.087,"#d59f88"],"Female_Adult_08":[0.256,0.14,"#d7a189"],"Female_Adult_09":[0.214,0.2,"#d49a7b"],"Female_Adult_10":[0.082,0.07,"#c58c6a"],"Female_Adult_12":[0.157,0.134,"#d59e88"],"Female_Adult_13":[0.183,0.587,"#d9a38c"],"Female_Adult_14":[0.291,0.226,"#d09679"],"Female_Adult_15":[0.186,0.252,"#d49b83"],"Female_Adult_16":[0.096,0.3,"#3c5174"],"Female_Adult_17":[0.393,0.448,"#d8a38b"],"Female_Party_01":[0.413,0.663,"#d8a38b"],"Male_Adult_01":[0.504,0.111,"#9c8a64"],"Male_Adult_07":[0.298,0.06,"#283136"],"Male_Adult_14":[0.321,0.3,"#a08c6e"],"Pilot_Female_01":[0.367,0.3,"#d49a7b"],"Sports_Female_02":[0.202,0.044,"#d9a38b"]};
const OUTFIT_OK=new Set(CAST3D.filter(c=>c.g==="f").map(c=>c.f));

/* ---------- 2. wardrobe ---------- */
const WDEF={o:"orig",c:"#c8102e",p:"plain",legs:"nude",hair:"orig",neck:"none",ear:"none",ring:"none",wrist:"none",head:"none",eyes:"none",metal:"gold",gem:"diamond"};
const WCOL=["#c8102e","#7b1e3a","#e75480","#f4c2c2","#c3a6e8","#6b3fa0","#1f2f6b","#87ceeb","#0f7b5f","#98d8c0","#d4a017","#f1e2c4","#ffffff","#141414","#b9bec7","#ff8c42"];
const W_HAIR={blonde:"#e3c47e",platinum:"#efe8da",honey:"#c08a4a",brown:"#5a3a22",black:"#161210",auburn:"#7f3218",red:"#b2361c",pink:"#f08cb7",silver:"#c9ccd2"};
const METAL={gold:["#f2c45a",.22],silver:["#e4e7eb",.18],rose:["#f0ad95",.22]};
const GEM={diamond:"#f4f8ff",ruby:"#d0102e",emerald:"#0e9a55",sapphire:"#1f47d1",amethyst:"#9248cf"};
const WOPTS={o:["orig","recolor","cocktail","midi","gown"],p:["plain","stripes","dots","floral","plaid","sequins"],legs:["nude","black","keep"],
 hair:["orig","blonde","platinum","honey","brown","black","auburn","red","pink","silver"],neck:["none","chain","pearls","pendant","choker","heart"],
 ear:["none","studs","hoops","pearl","drops"],ring:["none","band","solitaire","both"],wrist:["none","bangle","pearl","watch","both"],
 head:["none","tiara","crown","flower","hat"],eyes:["none","round","sun"],metal:["gold","silver","rose"],gem:["diamond","ruby","emerald","sapphire","amethyst"]};
const WLAB={o:"o_",p:"p_",legs:"l_",hair:"h_",neck:"n_",ear:"e_",ring:"r_",wrist:"b_",head:"hd_",eyes:"g_",metal:"m_",gem:"gm_"};
const LOOKS={
 garden:{o:"midi",c:"#f4c2c2",p:"floral",legs:"nude",neck:"pearls",ear:"pearl",ring:"band",wrist:"pearl",head:"flower",eyes:"none",metal:"gold",gem:"diamond"},
 gala:{o:"gown",c:"#141414",p:"sequins",legs:"keep",neck:"pendant",ear:"drops",ring:"solitaire",wrist:"bangle",head:"tiara",eyes:"none",metal:"silver",gem:"diamond"},
 office:{o:"recolor",c:"#1f2f6b",p:"plain",neck:"chain",ear:"studs",ring:"band",wrist:"watch",head:"none",eyes:"round",metal:"gold",gem:"diamond"},
 summer:{o:"cocktail",c:"#ffd23f",p:"floral",legs:"nude",neck:"heart",ear:"hoops",ring:"none",wrist:"bangle",head:"hat",eyes:"sun",metal:"gold",gem:"ruby"},
 wedding:{o:"midi",c:"#c3a6e8",p:"plain",legs:"nude",neck:"pendant",ear:"pearl",ring:"solitaire",wrist:"pearl",head:"crown",eyes:"none",metal:"rose",gem:"amethyst"},
 rock:{o:"cocktail",c:"#141414",p:"plaid",legs:"black",hair:"red",neck:"choker",ear:"hoops",ring:"both",wrist:"both",head:"none",eyes:"sun",metal:"silver",gem:"ruby"}};
let WSTORE=store.get("ward3d",{});
const wcfg=()=>Object.assign({},WDEF,WSTORE[E.char]||{});
function wset(patch,silent){WSTORE[E.char]=Object.assign(wcfg(),patch);store.set("ward3d",WSTORE);applyWard();if(!silent)sfx("blip")}

const W={grp:[],uni:null,hairU:null,fit:null,k:1};
const metalMat=()=>{const [c,r]=METAL[wcfg().metal]||METAL.gold;return new E.T.MeshStandardMaterial({color:c,metalness:1,roughness:r,envMapIntensity:1.6})};
const gemMat=(key)=>{const THREE=E.T,c=GEM[key||wcfg().gem]||GEM.diamond;return new THREE.MeshPhysicalMaterial({color:c,metalness:key==="diamond"||(!key&&wcfg().gem==="diamond")?.25:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.2,emissive:c,emissiveIntensity:.06,iridescence:.4})};
const pearlMat=()=>new E.T.MeshPhysicalMaterial({color:"#f6efe2",roughness:.28,metalness:0,clearcoat:1,clearcoatRoughness:.15,sheen:1,sheenColor:new E.T.Color("#ffe6f0"),iridescence:.55,envMapIntensity:1.4});

/* sample skinned vertices once per model */
function wSample(){
  const THREE=E.T,v=new THREE.Vector3(),pts={body:[],arm:[],head:[],hair:[]};
  E.root.updateMatrixWorld(true);
  E.model.traverse(o=>{if(!o.isSkinnedMesh)return;o.skeleton.update();
    const mn=(o.material.name||"").toLowerCase(),kind=/head/.test(mn)?"head":/opacity|hair|glass/.test(mn)?"hair":"body";
    const pos=o.geometry.attributes.position,si=o.geometry.attributes.skinIndex,sw=o.geometry.attributes.skinWeight;
    const armB=o.skeleton.bones.map(b=>/(Clavicle|UpperArm|Forearm|Hand|Finger)/.test(b.name));
    for(let i=0;i<pos.count;i++){o.getVertexPosition(i,v);o.localToWorld(v);let k=kind;
      if(k==="body"&&si){let bi=0,bw=-1;for(let j=0;j<4;j++){const w=sw.getComponent(i,j);if(w>bw){bw=w;bi=si.getComponent(i,j)}}if(armB[bi])k="arm"}
      pts[k].push(v.x,v.y,v.z)}});
  for(const k in pts)pts[k]=Float32Array.from(pts[k]);
  return pts;
}
function wp(b){return b?b.getWorldPosition(new E.T.Vector3()):null}
function radAt(P,cx,cz,y,band,a,aw){let best=0;for(let i=0;i<P.length;i+=3){if(Math.abs(P[i+1]-y)>band)continue;const dx=P[i]-cx,dz=P[i+2]-cz;let da=Math.atan2(dx,dz)-a;da=Math.atan2(Math.sin(da),Math.cos(da));if(Math.abs(da)>aw)continue;const d=Math.hypot(dx,dz);if(d>best)best=d}return best}
function ringRad(P,cx,cz,y,band,n){const o=new Float32Array(n);for(let i=0;i<P.length;i+=3){if(Math.abs(P[i+1]-y)>band)continue;const dx=P[i]-cx,dz=P[i+2]-cz;let b=Math.floor((Math.atan2(dx,dz)+Math.PI)/(2*Math.PI)*n+.5)%n;const d=Math.hypot(dx,dz);if(d>o[b])o[b]=d}return Array.from(o)}
function yBand(P,y0,y1){const o=[];for(let i=0;i<P.length;i+=3)if(P[i+1]>=y0&&P[i+1]<=y1)o.push(P[i],P[i+1],P[i+2]);return Float32Array.from(o)}
function centroid(P,y,band,maxR,cx0,cz0){let sx=0,sz=0,n=0;for(let i=0;i<P.length;i+=3){if(Math.abs(P[i+1]-y)>band)continue;if(maxR&&Math.hypot(P[i]-cx0,P[i+2]-cz0)>maxR)continue;sx+=P[i];sz+=P[i+2];n++}return n?[sx/n,sz/n]:[cx0||0,cz0||0]}
const cat=(...a)=>{const n=a.reduce((s,x)=>s+x.length,0),o=new Float32Array(n);let p=0;for(const x of a){o.set(x,p);p+=x.length}return o};
function smoothRing(arr,pass){const n=arr.length;for(let p=0;p<pass;p++){const c=arr.slice();for(let i=0;i<n;i++)arr[i]=(c[(i-1+n)%n]+2*c[i]+c[(i+1)%n])/4}return arr}
function fillZeros(arr){const n=arr.length;let any=arr.some(x=>x>0);if(!any)return arr;for(let i=0;i<n;i++)if(!arr[i]){let l=1;while(!arr[(i-l+n)%n]&&l<n)l++;let r=1;while(!arr[(i+r)%n]&&r<n)r++;arr[i]=(arr[(i-l+n)%n]+arr[(i+r)%n])/2}return arr}
function attach(bone,obj){if(!bone){E.root.add(obj)}else{E.root.add(obj);obj.updateMatrixWorld(true);bone.attach(obj)}W.grp.push(obj)}

function wFit(){
  const THREE=E.T,B=E.bones,P=wSample();const box=new THREE.Box3().setFromObject(E.model);const k=(box.max.y-box.min.y)/1.68;
  const f={P,k,floor:box.min.y};
  f.neck=wp(B.neck);f.head=wp(B.head);f.lE=wp(B.lEye);f.rE=wp(B.rEye);
  const fb=re=>findBone(E.model,re);
  f.pelvis=wp(fb(/[ _]Pelvis$/));f.lCalf=wp(fb(/[ _]L[ _]Calf$/));f.rCalf=wp(fb(/[ _]R[ _]Calf$/));f.lFoot=wp(fb(/[ _]L[ _]Foot$/));f.rFoot=wp(fb(/[ _]R[ _]Foot$/));
  f.bones={pelvis:fb(/[ _]Pelvis$/),lF3:fb(/[ _]L[ _]Finger3$/),lF31:fb(/[ _]L[ _]Finger31$/),rF3:fb(/[ _]R[ _]Finger3$/),rF31:fb(/[ _]R[ _]Finger31$/)};
  return f;
}
/* ---- builders ---- */
function buildNeck(type){
  const THREE=E.T,f=W.fit,k=f.k,BP=cat(f.P.body,f.P.head);if(!f.neck)return;
  const y0=f.neck.y;const BP2=yBand(BP,y0-.13*k,y0+.06*k);const [cx,cz]=centroid(f.P.body,y0+.03*k,.01*k,.12*k,f.neck.x,f.neck.z);
  const drop={chain:.07,pearls:.06,pendant:.09,choker:0,heart:.08}[type]*k,yTop=type==="choker"?y0+.035*k:y0+.004*k;
  const pts=[],N=72;
  for(let j=0;j<N;j++){const a=-Math.PI+2*Math.PI*j/N;const fr=Math.pow((1+Math.cos(a))/2,2.4);const y=yTop-drop*fr;
    let r=radAt(BP2,cx,cz,y,.009*k,a,Math.PI/N*2.2);if(!r)r=.06*k;pts.push([a,y,r])}
  const rr=smoothRing(fillZeros(pts.map(p=>p[2])),3);
  const path=pts.map((p,i)=>new THREE.Vector3(cx+Math.sin(p[0])*(rr[i]+.004*k),p[1],cz+Math.cos(p[0])*(rr[i]+.004*k)));
  const curve=new THREE.CatmullRomCurve3(path,true);const g=new THREE.Group();
  if(type==="pearls"){const n=Math.round(curve.getLength()/(.0092*k));const im=new THREE.InstancedMesh(new THREE.SphereGeometry(.0042*k,14,10),pearlMat(),n);const m=new THREE.Matrix4();for(let i=0;i<n;i++){m.makeTranslation(curve.getPointAt(i/n));im.setMatrixAt(i,m)}g.add(im)}
  else{const choker=type==="choker";g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,220,(choker?.0042:.0011)*k,choker?10:6,true),choker?new THREE.MeshStandardMaterial({color:"#111",roughness:.55}):metalMat()))}
  const front=curve.getPointAt(.5);const out=new THREE.Vector3(front.x-cx,0,front.z-cz).normalize();
  if(type==="pendant"||type==="choker"){const gm=new THREE.Mesh(new THREE.OctahedronGeometry((type==="choker"?.005:.0075)*k,1),gemMat());gm.scale.set(1,1.35,.7);gm.position.copy(front).add(new THREE.Vector3(0,-(type==="choker"?.004:.011)*k,0)).addScaledVector(out,.004*k);g.add(gm);
    if(type==="pendant"){const bail=new THREE.Mesh(new THREE.TorusGeometry(.0022*k,.0007*k,6,16),metalMat());bail.position.copy(front).add(new THREE.Vector3(0,-.002*k,0)).addScaledVector(out,.003*k);g.add(bail)}}
  if(type==="heart"){const s=new THREE.Shape();s.moveTo(0,-.6);s.bezierCurveTo(-.9,-.05,-.55,.75,0,.32);s.bezierCurveTo(.55,.75,.9,-.05,0,-.6);
    const hg=new THREE.ExtrudeGeometry(s,{depth:.18,bevelEnabled:true,bevelSize:.08,bevelThickness:.08,bevelSegments:3});hg.center();const hm=new THREE.Mesh(hg,metalMat());hm.scale.setScalar(.014*k);
    hm.position.copy(front).add(new THREE.Vector3(0,-.012*k,0)).addScaledVector(out,.005*k);hm.lookAt(hm.position.clone().add(out));g.add(hm)}
  attach(E.bones.spine,g);
}
function earAnchors(){
  const f=W.fit,k=f.k;if(!f.lE||!f.rE)return null;const ec=f.lE.clone().add(f.rE).multiplyScalar(.5);
  const zE=ec.z-.085*k,yL=ec.y-.05*k,H=f.P.head,res=[];
  for(const s of [-1,1]){let X=0;for(let i=0;i<H.length;i+=3){if(Math.abs(H[i+1]-yL)>.012*k||Math.abs(H[i+2]-zE)>.03*k)continue;const dx=(H[i]-ec.x)*s;if(dx>X)X=dx}
    if(X<.05*k||X>.11*k)X=.074*k;res.push({s,p:new E.T.Vector3(ec.x+s*(X-.002*k),yL-.006*k,zE)})}
  return res;
}
function buildEars(type){
  const THREE=E.T,k=W.fit.k,A=earAnchors();if(!A)return;
  for(const {s,p} of A){const g=new THREE.Group();g.position.copy(p);
    if(type==="studs"){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.0034*k,1),gemMat());m.position.x=s*.0015*k;g.add(m)}
    if(type==="hoops"){const m=new THREE.Mesh(new THREE.TorusGeometry(.012*k,.0012*k,8,40),metalMat());m.rotation.y=Math.PI/2;m.position.set(s*.0015*k,-.0115*k,0);g.add(m)}
    if(type==="pearl"||type==="drops"){const top=new THREE.Mesh(new THREE.SphereGeometry(.0016*k,10,8),metalMat());top.position.x=s*.0012*k;g.add(top);
      const ch=new THREE.Mesh(new THREE.CylinderGeometry(.0005*k,.0005*k,.012*k,6),metalMat());ch.position.set(s*.0012*k,-.007*k,0);g.add(ch);
      const d=type==="pearl"?new THREE.Mesh(new THREE.SphereGeometry(.0048*k,16,12),pearlMat()):new THREE.Mesh(new THREE.OctahedronGeometry(.0052*k,1),gemMat());if(type==="drops")d.scale.set(.75,1.4,.75);d.position.set(s*.0012*k,-.017*k,0);g.add(d)}
    attach(E.bones.head,g)}
}
function sidePerp(axis,side){const v=new E.T.Vector3(side,0,0);return v.addScaledVector(axis,-v.dot(axis)).normalize()}
function buildRing(type){
  const THREE=E.T,f=W.fit,k=f.k,sides=type==="both"?["l","r"]:["l"];
  for(const sd of sides){const b0=f.bones[sd+"F3"],b1=f.bones[sd+"F31"];if(!b0||!b1)continue;const p0=wp(b0),p1=wp(b1);
    const axis=p1.clone().sub(p0).normalize(),pos=p0.clone().lerp(p1,.5);
    let r=0;const A=f.P.arm;for(let i=0;i<A.length;i+=3){const d=new THREE.Vector3(A[i]-pos.x,A[i+1]-pos.y,A[i+2]-pos.z);const ax=d.dot(axis);if(Math.abs(ax)>.004*k)continue;const pr=d.addScaledVector(axis,-ax).length();if(pr<.016*k&&pr>r)r=pr}
    r=Math.max(.0065*k,Math.min(.011*k,r||.008*k))+.0006*k;
    const g=new THREE.Group();g.position.copy(pos);const t=new THREE.Mesh(new THREE.TorusGeometry(r,.0012*k,8,36),metalMat());t.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),axis);g.add(t);
    if(type!=="band"){const side=Math.sign(pos.x-(f.pelvis?f.pelvis.x:0))||1;const up=sidePerp(axis,side);const gm=new THREE.Mesh(new THREE.OctahedronGeometry(.0032*k,1),gemMat());gm.position.copy(up).multiplyScalar(r+.0022*k);g.add(gm)}
    attach(b0,g)}
}
function buildWrist(type){
  const THREE=E.T,f=W.fit,k=f.k,B=E.bones;
  const one=(sd,kind)=>{const F=B[sd+"F"],Hd=B[sd+"H"];if(!F||!Hd)return;const pf=wp(F),ph=wp(Hd);const axis=ph.clone().sub(pf).normalize();const pos=ph.clone().lerp(pf,.07);
    let r=0;const A=f.P.arm;for(let i=0;i<A.length;i+=3){const d=new THREE.Vector3(A[i]-pos.x,A[i+1]-pos.y,A[i+2]-pos.z);const ax=d.dot(axis);if(Math.abs(ax)>.008*k)continue;const pr=d.addScaledVector(axis,-ax).length();if(pr<.06*k&&pr>r)r=pr}
    r=Math.max(.024*k,Math.min(.045*k,r||.03*k))+.003*k;const g=new THREE.Group();g.position.copy(pos);const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1),axis);
    if(kind==="bangle"){const t=new THREE.Mesh(new THREE.TorusGeometry(r+.002*k,.0026*k,10,48),metalMat());t.quaternion.copy(q);g.add(t)}
    if(kind==="pearl"){const n=Math.round(2*Math.PI*r/(.0085*k));const im=new THREE.InstancedMesh(new THREE.SphereGeometry(.0039*k,12,8),pearlMat(),n);const m=new THREE.Matrix4();for(let i=0;i<n;i++){const a=2*Math.PI*i/n;const v=new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0).applyQuaternion(q);m.makeTranslation(v);im.setMatrixAt(i,m)}g.add(im)}
    if(kind==="watch"){const t=new THREE.Mesh(new THREE.TorusGeometry(r,.0028*k,8,48),new THREE.MeshStandardMaterial({color:"#3b2416",roughness:.6}));t.quaternion.copy(q);t.scale.set(1,1,2.6);g.add(t);
      const side=Math.sign(pos.x-(f.pelvis?f.pelvis.x:0))||1,out=sidePerp(axis,side);
      const face=new THREE.Group();face.position.copy(out).multiplyScalar(r+.002*k);face.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),out);
      face.add(new THREE.Mesh(new THREE.CylinderGeometry(.0135*k,.0135*k,.0045*k,32),metalMat()));
      const dial=new THREE.Mesh(new THREE.CylinderGeometry(.0115*k,.0115*k,.0047*k,32),new THREE.MeshStandardMaterial({color:"#f8f5ee",roughness:.3}));face.add(dial);
      for(const [len,rot] of [[.008,.6],[.006,2.2]]){const hnd=new THREE.Mesh(new THREE.BoxGeometry(.0008*k,.001*k,len*k),new THREE.MeshStandardMaterial({color:"#222"}));hnd.position.y=.0026*k;hnd.rotation.y=rot;hnd.translateZ(len*k/2);face.add(hnd)}
      g.add(face)}
    attach(Hd,g)};
  if(type==="bangle")one("r","bangle");if(type==="pearl")one("r","pearl");if(type==="watch")one("l","watch");if(type==="both"){one("l","watch");one("r","bangle")}
}
function headTop(){const f=W.fit,k=f.k,HP=cat(f.P.head,f.P.hair);if(!f.head)return null;let top=-1e9;for(let i=0;i<HP.length;i+=3){if(Math.hypot(HP[i]-f.head.x,HP[i+2]-f.head.z)<.05*k&&HP[i+1]>top)top=HP[i+1]}
  if(top<-1e8)top=f.head.y+.12*k;const [cx,cz]=centroid(HP,top-.05*k,.01*k,.14*k,f.head.x,f.head.z);return {HP,top,cx,cz}}
function flower(col,size){const THREE=E.T,g=new THREE.Group();const pm=new THREE.MeshStandardMaterial({color:col,roughness:.55,side:THREE.DoubleSide});const pg=new THREE.SphereGeometry(size,10,8);
  for(let i=0;i<5;i++){const p=new THREE.Mesh(pg,pm);const a=i/5*Math.PI*2;p.scale.set(1,.32,.62);p.position.set(Math.cos(a)*size*.95,0,Math.sin(a)*size*.95);p.rotation.y=-a;g.add(p)}
  const c=new THREE.Mesh(new THREE.SphereGeometry(size*.45,10,8),new THREE.MeshStandardMaterial({color:"#f7c948",roughness:.6}));c.position.y=size*.12;g.add(c);return g}
function buildHead(type){
  const THREE=E.T,k=W.fit.k,T0=headTop();if(!T0)return;const {HP,top,cx,cz}=T0;
  const ring=(y,a0,a1,n,off)=>{const out=[];for(let j=0;j<=n;j++){const a=a0+(a1-a0)*j/n;const r=radAt(HP,cx,cz,y,.008*k,a,.12)||.08*k;out.push(new THREE.Vector3(cx+Math.sin(a)*(r+off),y,cz+Math.cos(a)*(r+off)))}return out};
  const g=new THREE.Group();
  if(type==="tiara"){const y=top-.03*k;const pts=ring(y,-1.75,1.75,40,.003*k);const c=new THREE.CatmullRomCurve3(pts);g.add(new THREE.Mesh(new THREE.TubeGeometry(c,80,.0016*k,6,false),metalMat()));
    for(let i=-4;i<=4;i++){const t=.5+i*.055,p=c.getPointAt(t),hgt=(.026-Math.abs(i)*.0042)*k;const sp=new THREE.Mesh(new THREE.ConeGeometry(.0028*k,hgt,6),metalMat());sp.position.copy(p).add(new THREE.Vector3(0,hgt/2,0));g.add(sp);
      const gm=new THREE.Mesh(new THREE.OctahedronGeometry((i===0?.0048:.0026)*k,0),gemMat());gm.position.copy(p).add(new THREE.Vector3(0,hgt*(i===0?.55:.95),0));const o=new THREE.Vector3(p.x-cx,0,p.z-cz).normalize();gm.position.addScaledVector(o,.002*k);g.add(gm)}}
  if(type==="crown"){const y=top-.045*k;const pts=ring(y,-Math.PI,Math.PI,32,.004*k);const cols=["#f7a8c4","#ffffff","#c9a7f2","#ffd36e","#ff9a9a"];
    pts.slice(0,32).forEach((p,i)=>{const fl=flower(cols[i%5],.0075*k);fl.position.copy(p);const o=new THREE.Vector3(p.x-cx,.6,p.z-cz).normalize();fl.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),o);g.add(fl)});
    const c=new THREE.CatmullRomCurve3(pts.slice(0,32),true);g.add(new THREE.Mesh(new THREE.TubeGeometry(c,64,.0015*k,5,true),new THREE.MeshStandardMaterial({color:"#4c7a3a",roughness:.7})))}
  if(type==="flower"){const y=top-.065*k,a=1.15*(E.sL||1);const r=radAt(HP,cx,cz,y,.01*k,a,.15)||.08*k;const fl=flower("#f28cb1",.016*k);const p=new THREE.Vector3(cx+Math.sin(a)*(r+.004*k),y,cz+Math.cos(a)*(r+.004*k));fl.position.copy(p);
    fl.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),new THREE.Vector3(p.x-cx,.25,p.z-cz).normalize());g.add(fl);const f2=flower("#ffffff",.009*k);f2.position.copy(p).add(new THREE.Vector3(0,.012*k,.012*k));f2.quaternion.copy(fl.quaternion);g.add(f2)}
  if(type==="hat"){let R=0;for(let j=0;j<24;j++){R=Math.max(R,radAt(HP,cx,cz,top-.055*k,.01*k,j/24*Math.PI*2-Math.PI,.14))}R=(R||.09*k)+.008*k;
    const straw=new THREE.MeshStandardMaterial({color:"#e7cf98",roughness:.85,side:THREE.DoubleSide});
    const prof=[];for(let i=0;i<=12;i++){const t=i/12;prof.push(new THREE.Vector2(R*(1-.12*t)*(t<.85?1:1-(t-.85)*4),.075*k*t*(t<.85?1:1+(t-.85)*.3)))}prof.push(new THREE.Vector2(0.0001,.085*k));
    const crown=new THREE.Mesh(new THREE.LatheGeometry(prof,40),straw);crown.position.set(cx,top-.06*k,cz);g.add(crown);
    const brim=new THREE.Mesh(new THREE.RingGeometry(R*.98,R+.085*k,48,2),straw);brim.rotation.x=-Math.PI/2;brim.position.set(cx,top-.058*k,cz);
    const bp=brim.geometry.attributes.position;for(let i=0;i<bp.count;i++){const x=bp.getX(i),y=bp.getY(i),d=Math.hypot(x,y);bp.setZ(i,-Math.max(0,d-R)*.18)}bp.needsUpdate=true;brim.geometry.computeVertexNormals();g.add(brim);
    const band=new THREE.Mesh(new THREE.CylinderGeometry(R*.995,R*1.0,.014*k,40,1,true),new THREE.MeshStandardMaterial({color:wcfg().c,roughness:.5,side:THREE.DoubleSide}));band.position.set(cx,top-.05*k,cz);g.add(band)}
  attach(E.bones.head,g);
}
function buildEyes(type){
  const THREE=E.T,f=W.fit,k=f.k;if(!f.lE||!f.rE)return;const H=f.P.head;let zf=-1e9;
  for(const e of [f.lE,f.rE])for(let i=0;i<H.length;i+=3){if(Math.abs(H[i]-e.x)<.018*k&&Math.abs(H[i+1]-e.y)<.02*k&&H[i+2]>zf)zf=H[i+2]}
  if(zf<-1e8)zf=f.lE.z+.02*k;const z=zf+.011*k,R=.0205*k,g=new THREE.Group(),fm=type==="sun"?new THREE.MeshStandardMaterial({color:"#1b1b1b",roughness:.35,metalness:.3}):metalMat();
  const lens=new THREE.MeshPhysicalMaterial({color:type==="sun"?"#1a1208":"#ffffff",transparent:true,opacity:type==="sun"?.82:.12,roughness:.05,metalness:0,clearcoat:1,envMapIntensity:2,depthWrite:false});
  const ec=f.lE.clone().add(f.rE).multiplyScalar(.5);
  for(const e of [f.lE,f.rE]){const c=new THREE.Vector3(e.x,e.y-.002*k,z);const rim=new THREE.Mesh(new THREE.TorusGeometry(R,(type==="sun"?.0022:.0011)*k,8,40),fm);rim.position.copy(c);if(type==="sun")rim.scale.set(1.12,.92,1);g.add(rim);
    const l=new THREE.Mesh(new THREE.CircleGeometry(R,32),lens);l.position.copy(c);if(type==="sun")l.scale.set(1.12,.92,1);g.add(l);
    const s=Math.sign(e.x-ec.x)||1;const outer=new THREE.Vector3(c.x+s*R*(type==="sun"?1.12:1),c.y+.004*k,c.z);const ear=new THREE.Vector3(ec.x+s*.072*k,c.y+.002*k,ec.z-.085*k);
    const tc=new THREE.LineCurve3(outer,ear);g.add(new THREE.Mesh(new THREE.TubeGeometry(tc,4,.0012*k,5,false),fm))}
  const a=new THREE.Vector3(f.lE.x+(f.rE.x>f.lE.x?R:-R),f.lE.y+.003*k,z),b=new THREE.Vector3(f.rE.x+(f.rE.x>f.lE.x?-R:R),f.rE.y+.003*k,z);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a,new THREE.Vector3((a.x+b.x)/2,a.y+.004*k,z+.002*k),b),10,.0012*k,5,false),fm));
  attach(E.bones.head,g);
}
function buildSkirt(type){
  const THREE=E.T,f=W.fit,k=f.k;if(!f.pelvis)return null;const BP=f.P.body;
  const waist=f.pelvis.y+.09*k,knee=Math.min(f.lCalf?f.lCalf.y:f.pelvis.y-.45*k,f.rCalf?f.rCalf.y:9),foot=Math.min(f.lFoot?f.lFoot.y:f.floor+.08*k,f.rFoot?f.rFoot.y:9);
  const hem=type==="cocktail"?knee+.03*k:type==="midi"?(knee+foot)/2-.02*k:Math.max(f.floor+.012*k,foot-.06*k);
  const flare={cocktail:.22,midi:.26,gown:.34}[type];const [cx,cz]=centroid(BP,f.pelvis.y,.02*k,.25*k,f.pelvis.x,f.pelvis.z);const BB=yBand(BP,hem-.03*k,waist+.03*k);
  const rows=22,cols=56,R=[];let prev=null;
  for(let r=0;r<=rows;r++){const y=waist+(hem-waist)*r/rows;const row=ringRad(BB,cx,cz,y,.018*k,cols);
    fillZeros(row);smoothRing(row,2);
    const dy=r?(waist-hem)/rows:0;for(let c=0;c<cols;c++){const a=-Math.PI+2*Math.PI*c/cols,lat=Math.abs(Math.sin(a));let v=Math.max(row[c]+(r?.014:.006)*k,prev?prev[c]+dy*flare*(1-.65*lat):0);row[c]=v}
    smoothRing(row,1);R.push(row);prev=row}
  const pos=[],uv=[],idx=[];for(let r=0;r<=rows;r++){const y=waist+(hem-waist)*r/rows,t=r/rows;for(let c=0;c<=cols;c++){const cc=c%cols,a=-Math.PI+2*Math.PI*c/cols;const rr=R[r][cc]*(1+.03*t*Math.sin(a*16));pos.push(cx+Math.sin(a)*rr,y,cz+Math.cos(a)*rr);uv.push(c/cols*.62,(waist-y)/k*.45)}}
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const a=r*(cols+1)+c,b=a+cols+1;idx.push(a,b,a+1,b,b+1,a+1)}
  const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));geo.setAttribute("uv",new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();
  const mat=new THREE.MeshPhysicalMaterial({color:"#ffffff",roughness:.78,sheen:.6,sheenRoughness:.6,sheenColor:new THREE.Color("#ffffff"),side:THREE.DoubleSide,map:W.white});
  patchCloth(mat,W.skirtU,true);const mesh=new THREE.Mesh(geo,mat);mesh.frustumCulled=false;
  const g=new THREE.Group();g.add(mesh);
  const beltPts=R[0].map((r0,c)=>{const a=-Math.PI+2*Math.PI*c/cols;return new THREE.Vector3(cx+Math.sin(a)*(r0+.002*k),waist-.004*k,cz+Math.cos(a)*(r0+.002*k))});
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(beltPts,true),cols*2,.0045*k,6,true),new THREE.MeshStandardMaterial({color:new THREE.Color(wcfg().c).multiplyScalar(.55),roughness:.5})));
  attach(f.bones.pelvis,g);return {hem,ankle:foot+.03*k};
}
/* ---- cloth & hair shaders ---- */
const PAT_GLSL=`
uniform sampler2D uMask;uniform float uOn,uRef,uPat,uHem,uAnk,uLegs;uniform vec3 uTint,uTint2,uTights;varying float vWY;
float fhoH(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec3 fhoPat(vec2 uv){vec3 a=uTint,b=uTint2;
 if(uPat<.5)return a;
 if(uPat<1.5)return mix(a,b,step(.5,fract(uv.y*34.)));
 if(uPat<2.5){vec2 g=fract(uv*52.)-.5;return mix(a,b,1.-smoothstep(.15,.19,length(g)));}
 if(uPat<3.5){vec2 c=uv*24.;vec2 id=floor(c);vec2 g=fract(c)-.5;float h=fhoH(id);g+=(vec2(h,fract(h*7.13))-.5)*.28;float an=atan(g.y,g.x)+h*6.283;float r=length(g);float pet=.19+.08*cos(5.*an);
  vec3 fc=mix(b,vec3(1.,.93,.95),fract(h*3.7)*.6);vec3 o=mix(a,fc,(1.-smoothstep(pet-.025,pet,r))*step(.35,h));o=mix(o,vec3(1.,.8,.32),(1.-smoothstep(.045,.065,r))*step(.35,h));return o;}
 if(uPat<4.5){vec2 g=fract(uv*18.);float s=step(.5,g.x)+step(.5,g.y);float t=step(.94,fract(uv.x*36.))+step(.94,fract(uv.y*36.));return mix(mix(a,b,s*.33),vec3(1.),min(1.,t)*.25);}
 vec2 c=uv*150.;float h=fhoH(floor(c));return a*(.7+.75*h);}
`;
function patchCloth(mat,U,isSkirt){
  mat.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);
    sh.vertexShader=sh.vertexShader.replace("#include <common>","#include <common>\nvarying float vWY;").replace("#include <project_vertex>","#include <project_vertex>\nvWY=(modelMatrix*vec4(transformed,1.0)).y;");
    sh.fragmentShader=sh.fragmentShader.replace("#include <common>","#include <common>\n"+PAT_GLSL)
     .replace("#include <map_fragment>",`#include <map_fragment>
float fhoMk=0.0;
#ifdef USE_MAP
 fhoMk=uOn>.5?texture2D(uMask,vMapUv).r:0.0;
 if(fhoMk>.02){float l=dot(diffuseColor.rgb,vec3(.299,.587,.114));float sh=clamp(pow(l/uRef,.72),.32,1.75);vec3 col=fhoPat(vMapUv)*sh;
  if(uLegs>.5&&vWY<uHem&&vWY>uAnk){col=uTights*clamp(pow(l/uRef,.45),.62,1.25);}
  if(uLegs>.5&&vWY<=uAnk){col=diffuseColor.rgb;}
  diffuseColor.rgb=mix(diffuseColor.rgb,col,fhoMk);}
#endif`)
     .replace("#include <metalnessmap_fragment>","#include <metalnessmap_fragment>\nif(uPat>4.5&&uOn>.5){roughnessFactor=mix(roughnessFactor,.2,fhoMk);metalnessFactor=mix(metalnessFactor,.55,fhoMk);}")};
  mat.customProgramCacheKey=()=>"fhoCloth"+(isSkirt?"S":"B");mat.needsUpdate=true;
}
function patchHair(mat,U){
  mat.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);
    sh.fragmentShader=sh.fragmentShader.replace("#include <common>","#include <common>\nuniform float uHOn,uHRef;uniform vec3 uHair;")
     .replace("#include <map_fragment>","#include <map_fragment>\nif(uHOn>.5){float l=dot(diffuseColor.rgb,vec3(.299,.587,.114));diffuseColor.rgb=uHair*clamp(pow(l/uHRef,.8),.12,2.2);}")};
  mat.customProgramCacheKey=()=>"fhoHair";mat.needsUpdate=true;
}
function wInitModel(){
  const THREE=E.T,c=cur3d(),d=WDATA[c.f]||[.25,.3,"#d59f88"];
  if(!W.white){W.white=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1);W.white.needsUpdate=true}
  W.uni={uMask:{value:W.white},uOn:{value:0},uRef:{value:Math.pow(Math.max(.04,d[0]),2.2)},uPat:{value:0},uHem:{value:-99},uAnk:{value:-99},uLegs:{value:0},uTint:{value:new THREE.Color()},uTint2:{value:new THREE.Color()},uTights:{value:new THREE.Color(d[2])}};
  W.skirtU=Object.assign({},W.uni,{uMask:{value:W.white},uRef:{value:1},uOn:W.uni.uOn});
  W.hairU={uHOn:{value:0},uHRef:{value:Math.pow(Math.max(.05,d[1]),2.2)},uHair:{value:new THREE.Color()}};
  W.ok=OUTFIT_OK.has(c.f);W.fit=null;W.grp=[];W.base=E.root.position.y;
  E.model.traverse(o=>{if(!o.isSkinnedMesh)return;const mn=(o.material.name||"").toLowerCase();
    if(/opacity|hair/.test(mn))patchHair(o.material,W.hairU);
    else if(!/head|glass/.test(mn)&&W.ok){patchCloth(o.material,W.uni,false)}});
  if(W.ok)new THREE.TextureLoader().load("avatars/"+c.f+"/mask.webp",t=>{t.flipY=false;t.colorSpace=THREE.NoColorSpace;W.uni.uMask.value=t;t.needsUpdate=true});
}
function clearWard(){for(const o of W.grp){o.parent&&o.parent.remove(o);o.traverse(x=>{if(x.isMesh){x.geometry.dispose();[].concat(x.material).forEach(m=>m.dispose())}})}W.grp=[]}
function applyWard(){
  if(!E.on||!E.model||!E.ready)return;const THREE=E.T,cfg=wcfg();if(!W.uni)wInitModel();
  if(!W.fit){try{W.fit=wFit()}catch(e){console.warn(e);return}}
  clearWard();const U=W.uni;
  const out=W.ok&&cfg.o!=="orig";U.uOn.value=out?1:0;U.uTint.value.set(cfg.c);
  const t2=new THREE.Color(cfg.c),hsl={};t2.getHSL(hsl);U.uTint2.value.setHSL(hsl.h,Math.min(1,hsl.s*.8),hsl.l>.6?Math.max(0,hsl.l-.35):Math.min(1,hsl.l+.42));
  if(cfg.p==="floral"&&hsl.l>.55)U.uTint2.value.set("#e0527f");
  U.uPat.value=WOPTS.p.indexOf(cfg.p);
  U.uLegs.value=0;U.uHem.value=-99;U.uAnk.value=-99;
  if(W.ok&&["cocktail","midi","gown"].includes(cfg.o)){const r=buildSkirt(cfg.o);if(r&&cfg.legs!=="keep"&&cfg.o!=="gown"){W.hem=r.hem-W.base;W.ank=r.ankle-W.base;U.uLegs.value=1;U.uTights.value.set(cfg.legs==="black"?"#2a2a2e":(WDATA[cur3d().f]||[0,0,"#d8a38b"])[2])}}
  W.hairU.uHOn.value=cfg.hair!=="orig"?1:0;if(W_HAIR[cfg.hair])W.hairU.uHair.value.set(W_HAIR[cfg.hair]);
  try{if(cfg.neck!=="none")buildNeck(cfg.neck)}catch(e){console.warn("neck",e)}
  try{if(cfg.ear!=="none")buildEars(cfg.ear)}catch(e){console.warn("ear",e)}
  try{if(cfg.ring!=="none")buildRing(cfg.ring)}catch(e){console.warn("ring",e)}
  try{if(cfg.wrist!=="none")buildWrist(cfg.wrist)}catch(e){console.warn("wrist",e)}
  try{if(cfg.head!=="none")buildHead(cfg.head)}catch(e){console.warn("head",e)}
  try{if(cfg.eyes!=="none")buildEyes(cfg.eyes)}catch(e){console.warn("eyes",e)}
}
{const _lc=loadChar3d;loadChar3d=async function(id){clearWard();W.uni=null;W.fit=null;await _lc(id);try{wInitModel();applyWard()}catch(e){console.warn("ward",e)}};}
{const _l3=loop3;loop3=function(ts){_l3(ts);if(W.uni&&E.root&&W.uni.uLegs.value){const y=E.root.position.y;W.uni.uHem.value=W.hem+y;W.uni.uAnk.value=W.ank+y}};}

/* wardrobe drawer */
function wardOpen(){
  if(!S.stage3d){toast(TT("w_need3d"));S.stage3d=true;store.set("stage3d",true);apply3dMode()}
  let d=$("#wardDrawer");if(d){d.remove();return}
  d=h("div",{id:"wardDrawer",class:"ward-drawer",role:"dialog","aria-label":TT("ward")});document.body.append(d);renderWard();
  $("#stageWrap").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderWard(){
  const d=$("#wardDrawer");if(!d)return;const cfg=wcfg();d.innerHTML="";
  d.append(h("div",{class:"ward-head"},h("b",null,"👗 "+TT("ward")+" · "+cur3d().name),h("button",{type:"button",class:"btn ghost small",onclick:()=>d.remove()},"✕")));
  const sec=(lab,...kids)=>{const s=h("div",{class:"ward-sec"},h("span",{class:"label"},lab));const row=h("div",{class:"ward-row"});kids.flat().forEach(x=>row.append(x));s.append(row);d.append(s)};
  const chip=(txt,on,fn)=>h("button",{type:"button",class:"wchip"+(on?" on":""),"aria-pressed":on,onclick:fn},txt);
  sec(TT("w_looks"),Object.keys(LOOKS).map(k=>chip(TT("lk_"+k),false,()=>{wset(Object.assign({},LOOKS[k]));renderWard();wSay()})),
    chip("🎲 "+TT("lk_surprise"),false,()=>{const r={};for(const key of ["o","p","legs","neck","ear","ring","wrist","head","eyes","metal","gem"])r[key]=pick(WOPTS[key]);r.c=pick(WCOL);if(Math.random()<.4)r.hair=pick(WOPTS.hair);if(Math.random()<.5)r.eyes="none";if(Math.random()<.4)r.head="none";wset(r);renderWard();wSay()}),
    chip("↺ "+TT("lk_reset"),false,()=>{wset(Object.assign({},WDEF));renderWard()}));
  if(W.ok){
    sec(TT("w_outfit"),WOPTS.o.map(v=>chip(TT("o_"+v),cfg.o===v,()=>{wset({o:v});renderWard();if(v!=="orig")wSay()})));
    sec(TT("w_color"),WCOL.map(c=>{const b=h("button",{type:"button",class:"wswatch"+(cfg.c===c?" on":""),"aria-label":c,style:"background:"+c,onclick:()=>{wset({c,o:cfg.o==="orig"?"recolor":cfg.o});renderWard()}});return b}));
    sec(TT("w_pattern"),WOPTS.p.map(v=>chip(TT("p_"+v),cfg.p===v,()=>{wset({p:v,o:cfg.o==="orig"?"recolor":cfg.o});renderWard()})));
    if(["cocktail","midi"].includes(cfg.o))sec(TT("w_legs"),WOPTS.legs.map(v=>chip(TT("l_"+v),cfg.legs===v,()=>{wset({legs:v});renderWard()})));
  } else d.append(h("p",{class:"note"},TT("w_only")));
  sec(TT("w_hair"),WOPTS.hair.map(v=>{const b=chip(TT("h_"+v),cfg.hair===v,()=>{wset({hair:v});renderWard()});if(W_HAIR[v])b.prepend(h("i",{class:"wdot",style:"background:"+W_HAIR[v]}));return b}));
  for(const [key,lab,pre] of [["neck","w_neck","n_"],["ear","w_ears","e_"],["ring","w_ring","r_"],["wrist","w_wrist","b_"],["head","w_head","hd_"],["eyes","w_eyes","g_"]])
    sec(TT(lab),WOPTS[key].map(v=>chip(v==="none"?TT("n_none"):TT(pre+v),cfg[key]===v,()=>{wset({[key]:v});renderWard()})));
  sec(TT("w_metal"),WOPTS.metal.map(v=>{const b=chip(TT("m_"+v),cfg.metal===v,()=>{wset({metal:v});renderWard()});b.prepend(h("i",{class:"wdot",style:"background:"+METAL[v][0]}));return b}));
  sec(TT("w_gem"),WOPTS.gem.map(v=>{const b=chip(TT("gm_"+v),cfg.gem===v,()=>{wset({gem:v});renderWard()});b.prepend(h("i",{class:"wdot",style:"background:"+GEM[v]}));return b}));
}
function wSay(){const l=pick(TT("w_say"));play("cheer");speak(l,true);stageSay(l)}
{const tools=document.querySelector(".stage-tools");const wb=h("button",{type:"button",id:"wardBtn","aria-label":"Wardrobe",title:"Wardrobe",onclick:wardOpen},"👗");tools.insertBefore(wb,$("#voiceBtn").nextSibling)}

/* character sheet filter */
E.castF=store.get("castF","all");
{const _rs3=renderSheet;renderSheet=function(){_rs3();if(!(E.on&&sheetMode==="chars"))return;const sh=$("#stageSheet");
  const keep=c=>E.castF==="all"||(E.castF==="kid"?c.age==="kid":E.castF==="senior"?c.age==="senior":(c.g===E.castF&&c.age!=="kid"));
  [...sh.querySelectorAll(".sheet-item:not([data-ph])")].forEach((el,i)=>{const c=CAST3D[i];if(c&&!keep(c))el.hidden=true});
  const order=["all","f","m","kid","senior"],em={all:"👥",f:"👩",m:"👨",kid:"🧒",senior:"👵"};
  const fb=h("button",{type:"button",class:"sheet-item","data-ph":"1",onclick:()=>{E.castF=order[(order.indexOf(E.castF)+1)%order.length];store.set("castF",E.castF);renderSheet();sfx("blip")}},h("span",{class:"em"},em[E.castF]),h("span",null,TT("f_"+E.castF)+" ▸"));
  sh.prepend(fb);
  const wbI=h("button",{type:"button",class:"sheet-item","data-ph":"1",onclick:wardOpen},h("span",{class:"em"},"👗"),h("span",null,TT("ward")));fb.after(wbI);
}}

/* ---------- 3. AI brain switcher ---------- */
const WEBLLM_VER="0.2.86";
const WEBM=[["Qwen3.5-0.8B-q4f16_1-MLC","Qwen 3.5 0.8B",0,"0.6 GB"],["Llama-3.2-1B-Instruct-q4f16_1-MLC","Llama 3.2 1B",0,"0.9 GB"],["Qwen2.5-1.5B-Instruct-q4f16_1-MLC","Qwen 2.5 1.5B",1,"1.1 GB"],
 ["Qwen3.5-2B-q4f16_1-MLC","Qwen 3.5 2B",1,"1.5 GB"],["gemma-2-2b-it-q4f16_1-MLC","Gemma 2 2B",1,"1.6 GB"],["Llama-3.2-3B-Instruct-q4f16_1-MLC","Llama 3.2 3B",2,"2 GB"],["Ministral-3-3B-Instruct-2512-BF16-q4f16_1-MLC","Ministral 3 3B",2,"2.2 GB"],
 ["gemma-4-E2B-it-q4f16_1-MLC","Gemma 4 E2B",2,"2.6 GB"],["Phi-4-mini-instruct-q4f16_1-MLC","Phi 4 mini",2,"2.7 GB"],["Qwen3.5-4B-q4f16_1-MLC","Qwen 3.5 4B",3,"3 GB"],
 ["Llama-3.1-8B-Instruct-q4f16_1-MLC","Llama 3.1 8B",3,"4.5 GB"],["Qwen2.5-7B-Instruct-q4f16_1-MLC","Qwen 2.5 7B",3,"4.6 GB"],["Hermes-3-Llama-3.1-8B-q4f16_1-MLC","Hermes 3 8B",3,"4.5 GB"],
 ["Qwen3.5-9B-q4f16_1-MLC","Qwen 3.5 9B",4,"5.8 GB"],["gemma-2-9b-it-q4f16_1-MLC","Gemma 2 9B",4,"5.8 GB"]];
const CLOUD={openai:{n:"OpenAI",url:"https://api.openai.com/v1",m:"gpt-6-luna"},gemini:{n:"Google Gemini",url:"https://generativelanguage.googleapis.com/v1beta/openai",m:"gemini-3.6-flash"},
 anthropic:{n:"Anthropic Claude",url:"https://api.anthropic.com/v1",m:"claude-haiku-5-5"},groq:{n:"Groq",url:"https://api.groq.com/openai/v1",m:"llama-3.3-70b-versatile"},
 openrouter:{n:"OpenRouter",url:"https://openrouter.ai/api/v1",m:"openrouter/auto"},deepseek:{n:"DeepSeek",url:"https://api.deepseek.com/v1",m:"deepseek-chat"},
 mistral:{n:"Mistral",url:"https://api.mistral.ai/v1",m:"mistral-small-latest"},custom:{n:"Other (OpenAI-compatible)",url:"",m:""}};
let BC=Object.assign({kind:"spark",web:"Qwen3.5-2B-q4f16_1-MLC",lurl:"http://localhost:11434/v1",lmodel:"llama3.2",cprov:"gemini",keys:{},cmodel:{},curl:{}},store.get("brainCfg",{}));
const saveBC=()=>store.set("brainCfg",BC);
const inClaude=/claude\.ai|claudeusercontent|anthropic/.test(location.hostname);
let SSE_IDLE_MS=25000; /* v20 (B1): tests may shrink this */
/* v20 (B1): a stalled stream used to wedge the chat forever — apiEngine clears
   its 60 s abort timer when headers arrive, and this reader had NO idle
   timeout, so S.busy never cleared. Now a read that goes quiet for
   SSE_IDLE_MS cancels the stream and throws; aiReply recovers (below). */
function sseLines(res,onData){const rd=res.body.getReader(),dec=new TextDecoder();let buf="";return (async function*(){while(true){let timer;const idle=new Promise((_,rej)=>{timer=setTimeout(()=>rej(new Error("stall: no stream data for "+Math.round(SSE_IDLE_MS/1000)+"s")),SSE_IDLE_MS)});let r;try{r=await Promise.race([rd.read(),idle])}catch(e){clearTimeout(timer);try{rd.cancel()}catch(_){}throw e}clearTimeout(timer);const {done,value}=r;if(done)break;buf+=dec.decode(value,{stream:true});let i;while((i=buf.indexOf("\n"))>=0){const line=buf.slice(0,i).trim();buf=buf.slice(i+1);if(!line.startsWith("data:"))continue;const d=line.slice(5).trim();if(d==="[DONE]")return;try{const t=onData(JSON.parse(d));if(t)yield {choices:[{delta:{content:t}}]}}catch(e){}}}})()}
function apiEngine(c){
  return {kind:c.kind,label:c.label,chat:{completions:{create:async o=>{
    const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),60000);
    if(c.anth){const sys=o.messages.filter(m=>m.role==="system").map(m=>m.content).join("\n");let ms=o.messages.filter(m=>m.role!=="system");while(ms.length&&ms[0].role!=="user")ms.shift();
      const mm=[];for(const m of ms){if(mm.length&&mm[mm.length-1].role===m.role)mm[mm.length-1].content+="\n"+m.content;else mm.push({role:m.role,content:m.content})}
      const res=await fetch(c.url.replace(/\/$/,"")+"/messages",{method:"POST",signal:ctl.signal,headers:{"content-type":"application/json","x-api-key":c.key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:c.model,max_tokens:Math.max(300,o.max_tokens||300),system:sys,messages:mm,stream:true,temperature:Math.min(1,o.temperature||.9)})});
      clearTimeout(to);if(!res.ok)throw new Error(res.status+" "+(await res.text()).slice(0,160));return sseLines(res,j=>j.type==="content_block_delta"&&j.delta&&j.delta.text||"")}
    const body={model:c.model,messages:o.messages,stream:true};
    if(c.prov==="openai")body.max_completion_tokens=Math.max(600,o.max_tokens||300);else{body.max_tokens=Math.max(300,o.max_tokens||300);body.temperature=o.temperature}
    const hd={"content-type":"application/json"};if(c.key)hd.authorization="Bearer "+c.key;if(c.prov==="openrouter"){hd["HTTP-Referer"]=location.origin;hd["X-Title"]="Funhouse Oracle"}
    const res=await fetch(c.url.replace(/\/$/,"")+"/chat/completions",{method:"POST",signal:ctl.signal,headers:hd,body:JSON.stringify(body)});clearTimeout(to);
    if(!res.ok)throw new Error(res.status+" "+(await res.text()).slice(0,160));
    return sseLines(res,j=>j.choices&&j.choices[0]&&j.choices[0].delta&&(j.choices[0].delta.content||"")||"")}}}};
}
const cleanAI=s=>s.replace(/<think>[\s\S]*?<\/think>/g,"").replace(/<think>[\s\S]*$/,"").trim();
/* ===== v20 strings + friendly errors (audit m12: never show raw API JSON) ===== */
Object.assign(PACKS.en.ui,{contChip:"Continue ▸",br_err_key:"That API key was rejected — check it in Settings → AI brain.",br_err_busy:"The AI is busy right now — wait a moment and try again.",br_err_net:"No connection — check your internet and try again.",br_err_stall:"The reply stalled — Spark answered this one instead.",br_err_gen:"The AI brain hit a problem — Spark answered this one instead."});
Object.assign(PACKS.vi.ui,{contChip:"Tiếp tục ▸",br_err_key:"Khóa API đó bị từ chối — kiểm tra lại trong Cài đặt → Bộ não AI nhé.",br_err_busy:"AI đang bận — đợi một lát rồi thử lại nhé.",br_err_net:"Không có kết nối — kiểm tra internet rồi thử lại nhé.",br_err_stall:"Câu trả lời bị đứng — Spark đã trả lời thay lần này.",br_err_gen:"Bộ não AI gặp sự cố — Spark đã trả lời thay lần này."});
function brErrText(e){const s=String((e&&e.message)||e||"");console.warn("Funhouse brain error:",s); /* raw text stays in the console only */
  if(/stall|idle|abort/i.test(s))return TT("br_err_stall");
  if(/\b401\b|\b403\b|api[- ]?key|unauthor|invalid.*key/i.test(s))return TT("br_err_key");
  if(/\b429\b|rate|quota|too many/i.test(s))return TT("br_err_busy");
  if(/failed to fetch|network|load failed|offline|enotfound|socket/i.test(s))return TT("br_err_net");
  return TT("br_err_gen")}
aiReply=async function(bubble,extra){
  const msgs=[{role:"system",content:sysPrompt()},...S.history.slice(-12)];if(extra)msgs.push(extra);let out="";
  /* v20 (M2): cap raised 260 → 512 — translations, stories and explanations
     were cut off mid-sentence; short chat is unaffected (the system prompt
     already asks for 1–3 short sentences). */
  const opt={messages:msgs,stream:true,temperature:.9,max_tokens:512};
  if(S.engine&&S.engine.kind==="webllm"&&/Qwen3/.test(S.engine.label||""))opt.extra_body={enable_thinking:false};
  try{const chunks=await S.engine.chat.completions.create(opt);for await(const c of chunks){out+=c.choices[0]?.delta?.content||"";const v=cleanAI(out);if(v)bubble.textContent=v;scrollDown()}}
  catch(e){console.warn("aiReply failed:",e);
    if(!cleanAI(out)){if(!S._aiErrAt||Date.now()-S._aiErrAt>20000){S._aiErrAt=Date.now();toast(brErrText(e))}return ""}
    return cleanAI(out)} /* partial stream: keep what arrived — send() offers Continue */
  return cleanAI(out);
};
/* v20 (M2): did this reply end mid-sentence? (long + no closing punctuation) */
function looksCut(t){t=(t||"").trim();if(t.length<200)return false;return !/[.!?…。！？]["'”’»)]*$/.test(t)&&!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]$/u.test(t)}
let contBusy=false;
async function continueReply(){
  if(contBusy||S.busy||!S.brainOn||!S.engine)return;contBusy=true;S.busy=true;
  const b=addMsg("bot","");mascot("talk");
  try{const out=await aiReply(b,{role:"user",content:"(Continue exactly where you stopped. Do not repeat anything you already said.)"});const fin=out||"";
    b.textContent=fin||"…";
    if(fin){S.history.push({role:"assistant",content:fin});srSay(fin);speak(fin)}
    setChips(looksCut(fin)?[{t:TT("contChip"),c:"continue"},...defaultChips()]:null);sfx("blip2");talk(fin||"…")}
  finally{S.busy=false;contBusy=false}
}
function brainLabel(){if(BC.kind==="web"){const m=WEBM.find(x=>x[0]===BC.web);return m?m[1]:"AI"}if(BC.kind==="local")return (BC.lmodel||"Local").split(":")[0];if(BC.kind==="cloud"){const p=CLOUD[BC.cprov];return (BC.cmodel[BC.cprov]||p.m).replace(/^models\//,"").slice(0,22)}return "Spark"}
function cloudCfg(){const p=CLOUD[BC.cprov];return {kind:"cloud",prov:BC.cprov,anth:BC.cprov==="anthropic",url:BC.curl[BC.cprov]||p.url,key:BC.keys[BC.cprov]||"",model:BC.cmodel[BC.cprov]||p.m,label:brainLabel()}}
function localCfg(){return {kind:"local",prov:"local",url:BC.lurl,key:"",model:BC.lmodel,label:brainLabel()}}
async function connectBrain(test){
  const cfg=BC.kind==="cloud"?cloudCfg():localCfg();if(!cfg.url||!cfg.model)throw new Error("missing address or model");if(BC.kind==="cloud"&&!cfg.key&&BC.cprov!=="custom")throw new Error("missing API key");
  const eng=apiEngine(cfg);
  if(test){const it=await eng.chat.completions.create({messages:[{role:"user",content:"Reply with just the word: ready"}],max_tokens:20,temperature:.2});let o="";for await(const c of it){o+=c.choices[0].delta.content;if(o.length>40)break}}
  S.engine=eng;S.brainOn=true;setChip("ai",brainLabel());return true;
}
loadBrain=async function(){
  const btn=$("#loadBrain"),prog=$("#brainProg");BC.kind=$("#brainKind").value;saveBC();
  if(BC.kind==="spark"){S.brainOn=false;S.engine=null;setChip("spark","Spark");toast(T("sparkOn"));return}
  if(BC.kind==="web"){
    if(!navigator.gpu){$("#brainNote").textContent=T("bNoGpu");return}
    btn.disabled=true;setChip("load",T("bLoading"));BC.web=$("#modelSel").value;saveBC();
    try{const webllm=await import("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@"+WEBLLM_VER+"/+esm");
      const eng=await webllm.CreateMLCEngine(BC.web,{initProgressCallback:p=>{$("#brainBar").style.width=Math.round((p.progress||0)*100)+"%";prog.textContent=p.text||T("bLoading")}});
      eng.kind="webllm";eng.label=BC.web;S.engine=eng;S.brainOn=true;setChip("ai",brainLabel());prog.textContent="✓ "+brainLabel();toast(T("bReady"));sfx("win");
    }catch(e){S.brainOn=false;setChip("spark","Spark");$("#brainNote").textContent=T("bErr");prog.textContent="—"}
    finally{btn.disabled=false}return}
  btn.disabled=true;prog.textContent=TT("br_test");setChip("load",T("bLoading"));
  try{await connectBrain(true);prog.textContent="✓ "+fill(TT("br_ok"),{m:brainLabel()});toast(fill(TT("br_ok"),{m:brainLabel()}));sfx("win")}
  catch(e){S.brainOn=false;S.engine=null;setChip("spark","Spark");prog.textContent=brErrText(e)}
  finally{btn.disabled=false}
};
function buildBrainPanel(){
  const panel=$("#modelSel").closest(".panel");const field=$("#modelSel").closest(".field");
  const sel=$("#modelSel");sel.innerHTML="";const tiers=TT("br_tier");
  for(let t=0;t<5;t++){const og=h("optgroup",{label:tiers[t]});WEBM.filter(m=>m[2]===t).forEach(m=>og.append(h("option",{value:m[0]},m[1]+" · "+m[3])));sel.append(og)}sel.value=BC.web;
  const kind=h("select",{id:"brainKind"},...["spark","web","local","cloud"].map(k=>h("option",{value:k},TT("br_"+k))));kind.value=BC.kind;
  const kf=h("div",{class:"field"},h("label",{class:"label",for:"brainKind"},TT("br_kind")),kind);panel.insertBefore(kf,$("#brainNote").nextSibling);
  const inp=(id,ph,type)=>h("input",{id,placeholder:ph||"",type:type||"text",autocomplete:"off",spellcheck:"false",style:"width:100%"});
  const webNote=h("p",{class:"note",id:"pvWebNote"},TT("br_webNote"));field.after(webNote);
  const local=h("div",{id:"pvLocal",class:"pv"},h("div",{class:"field"},h("label",{class:"label",for:"lUrl"},TT("br_url")),inp("lUrl","http://localhost:11434/v1")),
    h("div",{class:"field"},h("label",{class:"label",for:"lModel"},TT("br_model")),inp("lModel","llama3.2"),h("datalist",{id:"lModels"})),
    h("button",{type:"button",class:"btn ghost small",id:"lList"},TT("br_list")),h("p",{class:"note"},TT("br_localNote")));
  const prov=h("select",{id:"cProv"},...Object.entries(CLOUD).map(([k,v])=>h("option",{value:k},v.n)));
  const cloud=h("div",{id:"pvCloud",class:"pv"},h("div",{class:"field"},h("label",{class:"label",for:"cProv"},TT("br_prov")),prov),
    h("div",{class:"field"},h("label",{class:"label",for:"cKey"},TT("br_key")),inp("cKey","sk-…","password")),
    h("div",{class:"field",id:"cUrlF"},h("label",{class:"label",for:"cUrl"},TT("br_url")),inp("cUrl","https://…/v1")),
    h("div",{class:"field"},h("label",{class:"label",for:"cModel"},TT("br_model")),inp("cModel","")),h("datalist",{id:"cModels"}),
    h("button",{type:"button",class:"btn ghost small",id:"cList"},TT("br_list")),h("p",{class:"note"},TT("br_keyNote")));
  webNote.after(local,cloud);
  const art=h("p",{class:"note",id:"pvArt",style:"color:var(--cherry-2,#ff8a80)"},TT("br_artNote"));cloud.after(art);
  $("#lModel").setAttribute("list","lModels");$("#cModel").setAttribute("list","cModels");
  const sync=()=>{const k=kind.value;field.hidden=webNote.hidden=k!=="web";$("#brainBar").parentElement.hidden=k!=="web";local.hidden=k!=="local";cloud.hidden=k!=="cloud";art.hidden=!(inClaude&&(k==="local"||k==="cloud"));
    $("#loadBrain").textContent=k==="spark"?T("spark"):k==="web"?T("load"):TT("br_connect");$("#useSpark").hidden=k==="spark";
    const p=CLOUD[prov.value];$("#cKey").value=BC.keys[prov.value]||"";$("#cModel").value=BC.cmodel[prov.value]||p.m;$("#cUrl").value=BC.curl[prov.value]||p.url;$("#cUrlF").hidden=prov.value!=="custom"};
  kind.onchange=()=>{BC.kind=kind.value;saveBC();sync()};
  prov.value=BC.cprov;prov.onchange=()=>{BC.cprov=prov.value;saveBC();sync()};
  $("#lUrl").value=BC.lurl;$("#lModel").value=BC.lmodel;
  $("#lUrl").onchange=e=>{BC.lurl=e.target.value.trim();saveBC()};$("#lModel").onchange=e=>{BC.lmodel=e.target.value.trim();saveBC()};
  $("#cKey").onchange=e=>{BC.keys[prov.value]=e.target.value.trim();saveBC()};$("#cModel").onchange=e=>{BC.cmodel[prov.value]=e.target.value.trim();saveBC()};$("#cUrl").onchange=e=>{BC.curl[prov.value]=e.target.value.trim();saveBC()};
  sel.onchange=()=>{BC.web=sel.value;saveBC()};
  const listModels=async(cfg,dl,btn)=>{btn.disabled=true;const old=btn.textContent;btn.textContent="…";
    try{const hd={};if(cfg.anth){hd["x-api-key"]=cfg.key;hd["anthropic-version"]="2023-06-01";hd["anthropic-dangerous-direct-browser-access"]="true"}else if(cfg.key)hd.authorization="Bearer "+cfg.key;
      const r=await fetch(cfg.url.replace(/\/$/,"")+"/models",{headers:hd});if(!r.ok)throw new Error(r.status);const j=await r.json();const ids=(j.data||j.models||[]).map(m=>(m.id||m.name||"").replace(/^models\//,"")).filter(Boolean).sort();
      dl.innerHTML="";ids.forEach(id=>dl.append(h("option",{value:id})));toast("✓ "+ids.length+" models");}
    catch(e){toast(brErrText(e))}finally{btn.disabled=false;btn.textContent=old}};
  $("#lList").onclick=e=>{BC.lurl=$("#lUrl").value.trim();saveBC();listModels(localCfg(),$("#lModels"),e.target)};
  $("#cList").onclick=e=>{BC.keys[prov.value]=$("#cKey").value.trim();saveBC();listModels(cloudCfg(),$("#cModels"),e.target)};
  $("#loadBrain").onclick=()=>{BC.lurl=$("#lUrl").value.trim();BC.lmodel=$("#lModel").value.trim();BC.keys[prov.value]=$("#cKey").value.trim();BC.cmodel[prov.value]=$("#cModel").value.trim();BC.curl[prov.value]=$("#cUrl").value.trim();saveBC();loadBrain()};
  sync();
}
buildBrainPanel();$("#loadBrain").removeAttribute("data-i");
if((BC.kind==="cloud"||BC.kind==="local")&&!inClaude){connectBrain(false).catch(()=>{})}

