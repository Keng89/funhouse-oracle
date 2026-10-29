
/* ================= v8: sound you can find, talking photos, voice games ================= */
const UI5={
 en:{hearMe:"🔊 Tap to hear me talk",voiceOffPill:"🔇 Voice is off. Tap to turn it on",micHint:"🎙️ Tap the mic to talk to me, or 🗣️ for hands-free conversation.",voiceOn:"Voice on",voiceOff:"Voice off",
  ph_title:"Talking photo",ph_new:"＋ Photo person",ph_pick:"Choose a clear, front-facing photo of a face.",ph_tapL:"Tap the eye on the LEFT side of the picture",ph_tapR:"Tap the eye on the RIGHT side of the picture",ph_tapM:"Tap the middle of the mouth",ph_name:"Name",ph_voice:"Voice",ph_save:"Save & talk",ph_redo:"Redo taps",ph_cancel:"Cancel",ph_saved:"Your photo can talk now!",ph_full:"Too many saved photos, so the oldest was replaced.",ph_note:"Only use photos you have the right to use. Please don't make real people say things they didn't say.",
  g_trivia:["Trivia Quiz","10 fun questions, pick A–D."],g_twister:["Tongue Twisters","Say it fast into the mic. I score you."],g_math:["Quick Math","10 sums against the clock."],g_chain:["Word Chain","Next word starts with my last letter."],
  tr_intro:"Trivia time! 10 questions. Tap a letter or say it.",tr_ok:"✅ Correct!",tr_bad:"❌ Nope, it was {a}.",tr_end:"Quiz over! You got {s} out of {n}.",
  tw_intro:"Tongue twister! Tap 🎙️ and say it as fast as you can, or type it:",tw_score:"Accuracy: {p}%. {r}",tw_next:"Next twister:",tw_r:["Smooth talker!","Your tongue survived!","Pretty tangled, try again!","Legendary speed!"],
  mt_intro:"Quick Math! 10 questions. Answer as fast as you can.",mt_q:"Question {i}: {q} = ?",mt_end:"Done! {s}/10 correct in {t} seconds.",
  wc_intro:"Word Chain! I say a word, you say a word starting with its LAST letter. No repeats!",wc_mine:"My word: {w}. Your word must start with “{l}”.",wc_bad:"That needs to start with “{l}”. Try again!",wc_used:"Already used! Pick another.",wc_win:"I'm out of words starting with “{l}”. You win! 🏆",
  next:"Next",again:"Play again"},
 vi:{hearMe:"🔊 Chạm để nghe mình nói",voiceOffPill:"🔇 Đang tắt giọng. Chạm để bật",micHint:"🎙️ Chạm micro để nói chuyện với mình, hoặc 🗣️ để nói chuyện rảnh tay.",voiceOn:"Đã bật giọng",voiceOff:"Đã tắt giọng",
  ph_title:"Ảnh biết nói",ph_new:"＋ Người từ ảnh",ph_pick:"Chọn một ảnh khuôn mặt rõ, nhìn thẳng.",ph_tapL:"Chạm vào mắt ở BÊN TRÁI bức ảnh",ph_tapR:"Chạm vào mắt ở BÊN PHẢI bức ảnh",ph_tapM:"Chạm vào giữa miệng",ph_name:"Tên",ph_voice:"Giọng",ph_save:"Lưu & nói chuyện",ph_redo:"Chạm lại",ph_cancel:"Huỷ",ph_saved:"Ảnh của bạn đã biết nói!",ph_full:"Quá nhiều ảnh đã lưu, ảnh cũ nhất đã được thay.",ph_note:"Chỉ dùng ảnh bạn có quyền sử dụng. Đừng khiến người thật nói những điều họ không nói.",
  g_trivia:["Đố vui kiến thức","10 câu hỏi vui, chọn A–D."],g_twister:["Câu nói lẹo lưỡi","Nói thật nhanh vào micro, mình chấm điểm."],g_math:["Tính nhanh","10 phép tính đua thời gian."],g_chain:["Nối từ","Từ tiếp theo bắt đầu bằng chữ cuối của mình (tiếng Anh)."],
  tr_intro:"Đố vui! 10 câu (tiếng Anh). Chạm chữ cái hoặc nói ra.",tr_ok:"✅ Đúng rồi!",tr_bad:"❌ Sai rồi, đáp án là {a}.",tr_end:"Hết giờ đố! Bạn đúng {s}/{n}.",
  tw_intro:"Câu lẹo lưỡi! Chạm 🎙️ và nói thật nhanh, hoặc gõ ra:",tw_score:"Độ chính xác: {p}%. {r}",tw_next:"Câu tiếp:",tw_r:["Nói mượt quá!","Lưỡi vẫn sống sót!","Hơi líu lưỡi, thử lại nha!","Tốc độ huyền thoại!"],
  mt_intro:"Tính nhanh! 10 câu. Trả lời càng nhanh càng tốt.",mt_q:"Câu {i}: {q} = ?",mt_end:"Xong! Đúng {s}/10 trong {t} giây.",
  wc_intro:"Nối từ (tiếng Anh)! Mình nói một từ, bạn nói từ bắt đầu bằng chữ CUỐI của nó. Không lặp lại!",wc_mine:"Từ của mình: {w}. Từ của bạn phải bắt đầu bằng “{l}”.",wc_bad:"Từ đó phải bắt đầu bằng “{l}”. Thử lại nhé!",wc_used:"Từ này dùng rồi! Chọn từ khác.",wc_win:"Mình hết từ bắt đầu bằng “{l}”. Bạn thắng! 🏆",
  next:"Tiếp",again:"Chơi lại"},
 yue:{hearMe:"🔊 撳一下聽我講嘢",voiceOffPill:"🔇 聲音閂咗，撳一下開",micHint:"🎙️ 撳咪同我傾，或者 🗣️ 免提傾偈。",voiceOn:"開咗聲",voiceOff:"閂咗聲",
  ph_title:"識講嘢嘅相",ph_new:"＋ 相片人物",ph_pick:"揀一張清楚、正面嘅樣相。",ph_tapL:"撳相片左邊嗰隻眼",ph_tapR:"撳相片右邊嗰隻眼",ph_tapM:"撳個口嘅中間",ph_name:"名",ph_voice:"聲線",ph_save:"儲存並傾偈",ph_redo:"重新撳",ph_cancel:"取消",ph_saved:"你張相識講嘢喇！",ph_full:"儲存太多相，最舊嗰張已經換咗。",ph_note:"淨係用你有權用嘅相。唔好令真人講佢冇講過嘅嘢。",
  g_trivia:["知識問答","10 條有趣問題，揀 A–D。"],g_twister:["繞口令","對住咪快快講，我幫你打分。"],g_math:["快速心算","10 條數鬥快。"],g_chain:["接龍","下個字由我最後個字母開始（英文）。"],
  next:"下一個",again:"再玩"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI5[k]);
const TT=k=>{const u=PU().ui[k]??PACKS.en.ui[k];return u};

/* ---------- 1. sound you can find ---------- */
if(store.get("voice",null)===null){S.voice=true;store.set("voice",true);$("#voiceSw").setAttribute("aria-checked",true)}
let audioUnlocked=false;
const pill=h("button",{type:"button",class:"sound-pill",id:"soundPill"});
$("#stageBox").append(pill);
function renderPill(){pill.textContent=S.voice?TT("hearMe"):TT("voiceOffPill");pill.hidden=S.voice&&audioUnlocked}
pill.onclick=e=>{e.stopPropagation();if(!S.voice){S.voice=true;store.set("voice",true);$("#voiceSw").setAttribute("aria-checked",true);renderVoiceBtn()}
  audioUnlocked=true;renderPill();const last=[...document.querySelectorAll(".msg.bot .bubble")].slice(-1)[0];speak(last?last.textContent:TT("hearMe"),true);sfx("ding")};
document.addEventListener("pointerdown",e=>{if(e.target===pill)return;if(!audioUnlocked){audioUnlocked=true;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();AC.resume()}catch(err){}renderPill()}},{capture:true});
const voiceBtn=h("button",{type:"button",id:"voiceBtn","aria-label":"Voice on or off",title:"Voice"});
document.querySelector(".stage-tools").insertBefore(voiceBtn,document.querySelector(".stage-tools").firstChild.nextSibling);
function renderVoiceBtn(){voiceBtn.textContent=S.voice?"🔊":"🔇";voiceBtn.classList.toggle("on",S.voice)}
voiceBtn.onclick=()=>{S.voice=!S.voice;store.set("voice",S.voice);$("#voiceSw").setAttribute("aria-checked",S.voice);if(!S.voice)try{speechSynthesis.cancel()}catch(e){}renderVoiceBtn();renderPill();toast(S.voice?"🔊 "+TT("voiceOn"):"🔇 "+TT("voiceOff"));if(S.voice)speak(say(pick(SP().happy),""),true)};
{const old=$("#voiceSw").onclick;$("#voiceSw").onclick=()=>{old&&old();renderVoiceBtn();renderPill()}}
renderVoiceBtn();renderPill();
if(!store.get("micHinted",false)){setTimeout(()=>{toast(TT("micHint"));store.set("micHinted",true);const m=$("#micBtn");if(m&&!m.hidden){m.classList.add("pulse");setTimeout(()=>m.classList.remove("pulse"),6000)}},5000)}
{const _al=applyUI;applyUI=function(){_al();renderPill()};}

/* ---------- 2. talking photo people ---------- */
const PH={list:store.get("photos",[]),cur:null,active:false,canvas:null,ctx:null,img:null,raf:0,zoom:"upper",bounceUntil:0,tmp:null,skin:null};
PH.list.forEach(p=>{p.photo=true});
function savePhotos(){try{localStorage.setItem("fho_photos",JSON.stringify(PH.list.map(({photo,...r})=>r)))}catch(e){if(PH.list.length>1){PH.list.shift();toast(TT("ph_full"));savePhotos()}}}
function phStart(p){
  PH.cur=p;PH.active=true;store.set("photoId",p.id);
  if(E.raf){cancelAnimationFrame(E.raf);E.raf=0}if(E.canvas)E.canvas.style.display="none";$("#stageChar").style.display="none";$("#stageBg").style.display="none";
  if(!PH.canvas){PH.canvas=h("canvas",{class:"s3d-canvas",id:"photoCanvas"});$("#stageBox").prepend(PH.canvas);PH.ctx=PH.canvas.getContext("2d");PH.tmp=document.createElement("canvas");
    PH.canvas.addEventListener("click",()=>{PH.bounceUntil=performance.now()+700;sfx("blip2")})}
  PH.canvas.style.display="";const img=new Image();img.onload=()=>{PH.img=img;phSkin();if(!PH.raf)PH.raf=requestAnimationFrame(phLoop)};img.src=p.img;
  $("#camBtn").hidden=false;$("#snapBtn").hidden=false;$("#stageName").textContent=p.name+" · "+MODES[S.mode].em+" "+modeName(S.mode);
  $("#mascotSlot").innerHTML='<img id="mascot" class="mascot" src="'+p.thumb+'" alt="" style="border-radius:50%;object-fit:cover;border:2px solid var(--brass)">';
}
function phStop(){PH.active=false;store.set("photoId","");if(PH.raf){cancelAnimationFrame(PH.raf);PH.raf=0}if(PH.canvas)PH.canvas.style.display="none"}
function phSkin(){const p=PH.cur,im=PH.img,c=document.createElement("canvas");c.width=im.width;c.height=im.height;const x=c.getContext("2d");x.drawImage(im,0,0);
  const D=Math.hypot((p.re[0]-p.le[0])*im.width,(p.re[1]-p.le[1])*im.height);
  const avg=(cx,cy,r)=>{try{const d=x.getImageData(Math.max(0,cx-r),Math.max(0,cy-r),r*2,r*2).data;let R=0,G=0,B=0,n=0;for(let i=0;i<d.length;i+=4){R+=d[i];G+=d[i+1];B+=d[i+2];n++}return `rgb(${R/n|0},${G/n|0},${B/n|0})`}catch(e){return "rgb(200,160,140)"}};
  PH.skin=[p.le,p.re].map(e=>avg(e[0]*im.width,e[1]*im.height-D*.2,Math.max(2,D*.05|0)));PH.D=D}
function phLoop(ts){
  PH.raf=requestAnimationFrame(phLoop);if(!PH.active||!PH.img||document.hidden)return;if(ts-(PH.last||0)<30)return;PH.last=ts;
  const cv=PH.canvas,box=$("#stageBox"),dpr=Math.min(2,devicePixelRatio||1),W=box.clientWidth*dpr|0,H=box.clientHeight*dpr|0;if(!W||!H)return;
  if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H}
  const x=PH.ctx,im=PH.img,p=PH.cur,iw=im.width,ih=im.height;
  const fx=(p.le[0]+p.re[0]+p.mo[0])/3*iw,fy=(p.le[1]+p.re[1]+p.mo[1])/3*ih;
  let s=Math.max(W/iw,H/ih);const want={face:.34,upper:.17,full:0}[PH.zoom];if(want&&PH.D*s<Math.min(W,H)*want)s=Math.min(W,H)*want/PH.D;
  const breathe=1+Math.sin(ts/1300)*.004,bounce=ts<PH.bounceUntil?Math.sin((PH.bounceUntil-ts)/700*Math.PI*3)*.012:0;s*=breathe;
  let ox=W/2-fx*s,oy=H*.42-fy*s;ox=Math.min(0,Math.max(W-iw*s,ox));oy=Math.min(0,Math.max(H-ih*s,oy));
  oy+=Math.sin(ts/1300)*H*.002-bounce*H;const rot=Math.sin(ts/2700)*.004;
  x.setTransform(1,0,0,1,0,0);x.fillStyle="#0d2420";x.fillRect(0,0,W,H);
  x.save();x.translate(fx*s+ox,fy*s+oy);x.rotate(rot);x.translate(-(fx*s+ox),-(fy*s+oy));
  x.drawImage(im,ox,oy,iw*s,ih*s);
  const map=(u,v)=>[u*iw*s+ox,v*ih*s+oy],M=map(p.mo[0],p.mo[1]),d=PH.D*s;
  // mouth
  const speaking=("speechSynthesis" in window&&speechSynthesis.speaking)||ts<ST.talkUntil;const face=ts<ST.faceUntil?ST.face:null;
  const target=speaking?mouthTarget(ts,true):face==="laugh"?.7:face==="surprised"?.35:0;PH.mouth=(PH.mouth||0)+(target-(PH.mouth||0))*.45;const o=PH.mouth;
  if(o>.03){
    const sx=p.mo[0]*iw-PH.D*.62,sy=p.mo[1]*ih+PH.D*.03,sw=PH.D*1.24,sh=PH.D*.8,t=PH.tmp,tw=Math.max(4,sw*s|0),th=Math.max(4,sh*s|0);
    if(t.width!==tw||t.height!==th){t.width=tw;t.height=th}const tx=t.getContext("2d");tx.globalCompositeOperation="source-over";tx.clearRect(0,0,tw,th);tx.drawImage(im,sx,sy,sw,sh,0,0,tw,th);
    tx.globalCompositeOperation="destination-in";const g=tx.createRadialGradient(tw/2,th*.25,Math.min(tw,th)*.15,tw/2,th*.35,Math.max(tw,th)*.6);g.addColorStop(0,"rgba(0,0,0,1)");g.addColorStop(.75,"rgba(0,0,0,.9)");g.addColorStop(1,"rgba(0,0,0,0)");tx.fillStyle=g;tx.fillRect(0,0,tw,th);
    const drop=o*d*.18,[dx,dy]=map(sx/iw,sy/ih);
    x.save();x.beginPath();x.ellipse(M[0],M[1]+drop*.45,d*.25,drop*.62+d*.02,0,0,Math.PI*2);x.fillStyle="rgba(38,12,12,.93)";x.filter="blur(1px)";x.fill();x.filter="none";
    if(o>.35){x.clip();x.beginPath();x.ellipse(M[0],M[1]-d*.005,d*.19,d*.03,0,0,Math.PI*2);x.fillStyle="rgba(235,228,214,.85)";x.fill()}x.restore();
    x.drawImage(t,dx,dy+drop,tw,th);
  }
  // blink
  if(ts>(PH.blinkAt||0)&&!PH.blinkEnd)PH.blinkEnd=ts+140;let b=0;if(PH.blinkEnd){if(ts<PH.blinkEnd)b=1;else{PH.blinkEnd=0;PH.blinkAt=ts+1800+Math.random()*3500}}
  if(b>0){[p.le,p.re].forEach((e,i)=>{const [ex,ey]=map(e[0],e[1]);x.save();x.beginPath();x.ellipse(ex,ey,d*.19,d*.1,0,0,Math.PI*2);x.clip();x.filter="blur(1.2px)";x.fillStyle=PH.skin?PH.skin[i]:"#c9a08a";x.fillRect(ex-d*.25,ey-d*.14,d*.5,d*.24*b);x.filter="none";
    x.strokeStyle="rgba(40,25,20,.7)";x.lineWidth=Math.max(1,d*.018);x.beginPath();x.moveTo(ex-d*.17,ey+d*.04);x.quadraticCurveTo(ex,ey+d*.08,ex+d*.17,ey+d*.04);x.stroke();x.restore()})}
  x.restore();
}
function phSnap(){if(!PH.active)return false;const url=PH.canvas.toDataURL("image/jpeg",.92);document.body.append(h("div",{class:"snap-ov"},h("img",{src:url,alt:""}),h("p",null,T("snapHint")),h("button",{type:"button",class:"btn",onclick:e=>e.target.closest(".snap-ov").remove()},T("close"))));return true}
{const cb=$("#camBtn"),old=cb.onclick;cb.onclick=()=>{if(PH.active){PH.zoom={upper:"face",face:"full",full:"upper"}[PH.zoom];toast("🎥 "+T("cam_"+PH.zoom));return}old&&old()};
 const sb=$("#snapBtn"),olds=sb.onclick;sb.onclick=()=>{if(phSnap())return;olds&&olds()};}
{const _a3=apply3dMode;apply3dMode=function(){if(PH.active)phStop();_a3();if(E.on&&E.model)$("#stageName").textContent=cur3d().name+" · "+MODES[S.mode].em+" "+modeName(S.mode)};}
{const _sa2=speakAs;speakAs=function(c,text,after){if(PH.active&&(c===curChar()||c===cur3d()))c={g:PH.cur.g,pitch:PH.cur.pitch,rate:1,name:PH.cur.name};_sa2(c,text,after)};}
{const _p2=play;play=function(n,k){_p2(n,k);if(PH.active&&/(cheer|wave|nod|dance|laugh)/.test(n))PH.bounceUntil=performance.now()+700};}
{const _us2=updateStage;updateStage=function(){_us2();if(PH.active&&!stageVisible()&&PH.raf){cancelAnimationFrame(PH.raf);PH.raf=0}else if(PH.active&&stageVisible()&&!PH.raf)PH.raf=requestAnimationFrame(phLoop)};}
{const _rs2=renderSheet;renderSheet=function(){_rs2();if(sheetMode!=="chars")return;const sh=$("#stageSheet");
  PH.list.forEach(p=>{const it=h("button",{type:"button",class:"sheet-item","data-ph":"1","aria-pressed":PH.active&&PH.cur&&PH.cur.id===p.id,onclick:()=>{phStart(p);renderSheet();speakAs({g:p.g,pitch:p.pitch,rate:1},fill(HI_IM[replyLang()]||HI_IM.en,{n:p.name}))}},h("img",{src:p.thumb,alt:"",style:"width:51px;height:51px;border-radius:50%;object-fit:cover"}),h("span",null,"📷 "+p.name));
    it.append(h("span",{class:"del",role:"button","aria-label":"Delete",onclick:e=>{e.stopPropagation();PH.list=PH.list.filter(x=>x!==p);savePhotos();if(PH.cur===p){phStop();apply3dMode()}renderSheet()}},"✕"));sh.prepend(it)});
  sh.prepend(h("button",{type:"button",class:"sheet-item","data-ph":"1",onclick:phSetup},h("span",{class:"em"},"📷"),h("span",null,TT("ph_new"))));
  [...sh.querySelectorAll(".sheet-item")].forEach(el=>{if(el.dataset.ph)return;if(PH.active&&el.getAttribute("aria-pressed")==="true")el.setAttribute("aria-pressed","false");
    el.addEventListener("click",()=>{if(PH.active){phStop();apply3dMode()}},{capture:true})});
}}
/* setup flow */
const phFile=h("input",{type:"file",accept:"image/*",hidden:true});document.body.append(phFile);
function phSetup(){phFile.value="";phFile.click()}
phFile.onchange=()=>{const f=phFile.files[0];if(!f)return;const url=URL.createObjectURL(f),im=new Image();im.onload=()=>{
  const k=Math.min(1,1100/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*k|0;c.height=im.height*k|0;c.getContext("2d").drawImage(im,0,0,c.width,c.height);
  phTapUI(c.toDataURL("image/jpeg",.86),c.width,c.height)};im.src=url};
function phTapUI(data,w,hh){
  const pts=[];const steps=["ph_tapL","ph_tapR","ph_tapM"];
  const ov=h("div",{class:"snap-ov ph-ov",role:"dialog","aria-label":TT("ph_title")});
  const msg=h("p",{style:"font-weight:700;font-size:16px"},TT(steps[0]));
  const wrap=h("div",{class:"ph-wrap"});const im=h("img",{src:data,alt:""});wrap.append(im);
  const nm=h("input",{id:"phName",maxlength:"20",placeholder:TT("ph_name"),style:"border:1.5px solid var(--line);background:var(--felt-2);border-radius:10px;padding:9px;color:var(--text)"});
  const vs=h("select",{id:"phVoice",style:"border:1.5px solid var(--line);background:var(--felt-2);border-radius:10px;padding:9px;color:var(--text)"},h("option",{value:"f"},T("vF")||"Female"),h("option",{value:"m"},T("vM")||"Male"),h("option",{value:"k"},(T("ag_kid")||"Kid")));
  const form=h("div",{class:"btn-row",style:"justify-content:center",hidden:true},nm,vs,
    h("button",{type:"button",class:"btn",onclick:()=>{const v=vs.value;const p={id:"ph"+Date.now().toString(36),name:nm.value.trim()||"Friend",img:data,le:pts[0],re:pts[1],mo:pts[2],g:v==="m"?"m":"f",pitch:v==="k"?1.5:v==="m"?.9:1.08,thumb:thumbOf(data,pts,w,hh),photo:true};
      if(p.le[0]>p.re[0]){const t=p.le;p.le=p.re;p.re=t}PH.list.push(p);if(PH.list.length>6)PH.list.shift();savePhotos();ov.remove();phStart(p);sheetMode=null;renderSheet();toast(TT("ph_saved"));confetti();sfx("win");speakAs({g:p.g,pitch:p.pitch,rate:1},fill(HI_IM[replyLang()]||HI_IM.en,{n:p.name}))}},TT("ph_save")),
    h("button",{type:"button",class:"btn ghost small",onclick:()=>{pts.length=0;wrap.querySelectorAll(".ph-dot").forEach(d=>d.remove());msg.textContent=TT(steps[0]);form.hidden=true}},TT("ph_redo")));
  im.addEventListener("click",e=>{if(pts.length>=3)return;const r=im.getBoundingClientRect();const u=(e.clientX-r.left)/r.width,v=(e.clientY-r.top)/r.height;pts.push([u,v]);
    wrap.append(h("span",{class:"ph-dot",style:`left:${u*100}%;top:${v*100}%`}));sfx("blip");if(pts.length<3)msg.textContent=TT(steps[pts.length]);else{msg.textContent="✓";form.hidden=false}});
  ov.append(msg,wrap,form,h("p",{class:"note",style:"color:#cfd8d4;max-width:420px"},TT("ph_note")),h("button",{type:"button",class:"btn ghost small",onclick:()=>ov.remove()},TT("ph_cancel")));document.body.append(ov);
}
function thumbOf(data,pts,w,hh){const im=new Image();im.src=data;const c=document.createElement("canvas");c.width=c.height=112;
  const cx=(pts[0][0]+pts[1][0]+pts[2][0])/3*w,cy=(pts[0][1]+pts[1][1]+pts[2][1])/3*hh,D=Math.hypot((pts[1][0]-pts[0][0])*w,(pts[1][1]-pts[0][1])*hh)*2.6;
  try{c.getContext("2d").drawImage(im,cx-D/2,cy-D/2,D,D,0,0,112,112);return c.toDataURL("image/jpeg",.8)}catch(e){return data}}
{const id=store.get("photoId","");const p=PH.list.find(x=>x.id===id);if(p)setTimeout(()=>phStart(p),400)}

/* ---------- 3. new voice games ---------- */
const TRIVIA=[["Which planet is known as the Red Planet?",["Venus","Mars","Jupiter","Saturn"],1],["How many legs does a spider have?",["6","8","10","12"],1],["What is the largest ocean on Earth?",["Atlantic","Indian","Arctic","Pacific"],3],["What gas do plants breathe in?",["Oxygen","Carbon dioxide","Helium","Nitrogen"],1],["How many continents are there?",["5","6","7","8"],2],["What is the fastest land animal?",["Cheetah","Lion","Horse","Ostrich"],0],["Which instrument has 88 keys?",["Guitar","Violin","Piano","Flute"],2],["What is H2O?",["Salt","Water","Sugar","Air"],1],["Which country has the Great Wall?",["Japan","China","India","Korea"],1],["How many days are in a leap year?",["364","365","366","367"],2],["What color do you get mixing blue and yellow?",["Purple","Orange","Green","Pink"],2],["Which animal is called the king of the jungle?",["Tiger","Lion","Elephant","Bear"],1],["What is the capital of Canada?",["Toronto","Vancouver","Ottawa","Montreal"],2],["Which is the biggest planet?",["Earth","Saturn","Jupiter","Neptune"],2],["How many hours are in a day?",["12","20","24","30"],2],["Which bird can't fly?",["Penguin","Eagle","Parrot","Sparrow"],0],["What do bees make?",["Milk","Honey","Silk","Wax only"],1],["What is frozen water called?",["Steam","Ice","Fog","Dew"],1],["Which shape has three sides?",["Square","Circle","Triangle","Hexagon"],2],["What is the closest star to Earth?",["Sirius","The Sun","Polaris","Vega"],1],["How many minutes are in an hour?",["50","60","70","100"],1],["Which fruit is famous for keeping doctors away?",["Banana","Apple","Grape","Mango"],1]];
const TWISTERS={en:["She sells seashells by the seashore","Red lorry, yellow lorry","Unique New York, unique New York","Peter Piper picked a peck of pickled peppers","How can a clam cram in a clean cream can","Six slippery snails slid slowly seaward","Fred fed Ted bread and Ted fed Fred bread","I scream, you scream, we all scream for ice cream"],
 vi:["Nồi đồng nấu ốc, nồi đất nấu ếch","Buổi trưa ăn bưởi chua","Chị Hai chạy xe bị hư","Lúa nếp là lúa nếp làng, lúa lên lớp lớp lòng nàng lâng lâng","Đêm đông đốt đèn đi đâu đấy"],
 yue:["四是四，十是十，十四是十四，四十是四十","黃葵花，紅葵花，黃葵花係紅葵花嘅花"]};
const WORDS="apple ant arm art boat bird book ball bread cake cat cloud corn desk dog door duck egg eagle ear earth fish frog flag fork goat game garden gift hat horse house honey ice island ink iron jam jar juice jelly kite key king kiwi lamp lion leaf lemon moon milk mouse map nest night nose nut orange owl oven ocean pen pig pizza plant queen quilt quiz rain rabbit rose rice sun snake star sock table tree tiger train umbrella unicorn uncle up van vase violin village water whale window wolf xylophone yak yarn yogurt yellow zebra zoo zero zipper elephant tomato onion yoyo year yard noodle needle robot river ruler tea teapot tent tulip dragon drum dolphin rocket lemonade egret envelope eraser oak olive otter onion tiger rain night tent tuna tooth thunder truck nail nurse nap salad sand soup spoon seal".split(" ");
const NEWG=[{id:"trivia",em:"🧠"},{id:"twister",em:"👅"},{id:"math",em:"➗"},{id:"chain",em:"🔗"}];
for(const k of ["en","vi","yue"])for(const g of NEWG)if(UI5[k]["g_"+g.id])PACKS[k].games[g.id]=UI5[k]["g_"+g.id];
GAMES.splice(1,0,...NEWG.map(g=>({id:g.id,em:g.em,langs:g.id==="twister"?["en","vi","yue"]:g.id==="math"?null:["en"]})));
GAMES.forEach(g=>{if(g.langs===null)delete g.langs});
const LET=["A","B","C","D"];
function trAsk(g){const q=g.qs[g.i];oracle(say(`${g.i+1}/10 · ${q[0]}\n`+q[1].map((o,i)=>LET[i]+") "+o).join("\n"),""),[...q[1].map((o,i)=>({t:LET[i]+") "+o,c:"g:opt"+i})),STOPC()])}
function twAsk(g){g.t=pick(g.pool.filter(x=>x!==g.t));oracle(say(g.first?TT("tw_intro"):TT("tw_next"),"🗣️ "+g.t),[{t:"🎙️",c:"g:mic"},C("skip"),STOPC()]);g.first=false}
function mtAsk(g){const a=1+Math.floor(Math.random()*12),b=1+Math.floor(Math.random()*12),op=pick(["+","−","×"]);g.ans=op==="+"?a+b:op==="−"?Math.max(a,b)-Math.min(a,b):a*b;
  const q=op==="−"?`${Math.max(a,b)} − ${Math.min(a,b)}`:`${a} ${op} ${b}`;oracle(say(fill(TT("mt_q"),{i:g.i+1,q}),""),[STOPC()])}
{const _sg=startGame;startGame=function(id){
  if(!NEWG.find(g=>g.id===id))return _sg(id);
  S.stats.games++;saveStats();switchTab("chat");sfx("coin");S.awaiting=null;
  if(id==="trivia"){const g={id,qs:TRIVIA.slice().sort(()=>Math.random()-.5).slice(0,10),i:0,s:0};S.game=g;oracle(say(TT("tr_intro"),""),[]);setTimeout(()=>trAsk(g),600)}
  if(id==="twister"){const l=TWISTERS[replyLang()]?replyLang():"en";const g={id,pool:TWISTERS[l],lang:l,first:true,n:0,tot:0};S.game=g;twAsk(g)}
  if(id==="math"){const g={id,i:0,s:0,t0:performance.now()};S.game=g;oracle(say(TT("mt_intro"),""),[]);setTimeout(()=>mtAsk(g),600)}
  if(id==="chain"){const w=pick(WORDS);const g={id,used:new Set([w]),last:w};S.game=g;oracle(say(TT("wc_intro"),fill(TT("wc_mine"),{w:w.toUpperCase(),l:w.slice(-1).toUpperCase()})),[STOPC()])}
};}
{const _gi2=gameInput;gameInput=function(t,tok){
  const g=S.game;if(!g||!NEWG.find(x=>x.id===g.id))return _gi2(t,tok);
  const low=(t||"").toLowerCase().trim();
  if(tok==="stop"||STOPRE.test(low)){endGame(G("stopped"));return true}
  if(g.id==="trivia"){const q=g.qs[g.i];let pickI=tok&&tok.startsWith("opt")?+tok.slice(3):LET.findIndex(L=>new RegExp("^\\(?"+L.toLowerCase()+"\\b").test(low));
    if(pickI<0)pickI=q[1].findIndex(o=>low.includes(o.toLowerCase()));if(pickI<0){oracle(say("A, B, C "+(PU()===PACKS.vi?"hay":"or")+" D?",""),[...q[1].map((o,i)=>({t:LET[i]+") "+o,c:"g:opt"+i})),STOPC()]);return true}
    const ok=pickI===q[2];if(ok){g.s++;sfx("ding");mascot("happy");play("cheer")}else{sfx("buzz");play("shrug")}
    addMsg("bot",ok?TT("tr_ok"):fill(TT("tr_bad"),{a:LET[q[2]]+") "+q[1][q[2]]}));g.i++;
    if(g.i>=g.qs.length){S.game=null;if(g.s>=7)confetti();setTimeout(()=>oracle(say(fill(TT("tr_end"),{s:g.s,n:g.qs.length}),""),[{t:TT("again"),c:"newgame:trivia"},C("stop")]),700)}else setTimeout(()=>trAsk(g),800);return true}
  if(g.id==="twister"){
    if(tok==="mic"){listenFor(g.lang,alts=>{send(alts[0])});return true}
    if(tok==="skip"){twAsk(g);return true}
    const p=Math.round(sim(t,g.t)*100);g.n++;g.tot+=p;const r=TT("tw_r");sfx(p>=80?"win":p>=55?"ding":"buzz");if(p>=80){confetti();play("cheer")}else if(p<55)play("laugh");
    oracle(say(fill(TT("tw_score"),{p,r:p>=90?r[3]:p>=75?r[0]:p>=55?r[1]:r[2]}),""),[{t:"🎙️",c:"g:mic"},{t:TT("next"),c:"g:skip"},STOPC()]);return true}
  if(g.id==="math"){const v=parseInt(low.replace(/[^\d-]/g,""),10);if(isNaN(v)){oracle(say(G("hcNum"),""),[STOPC()]);return true}
    const ok=v===g.ans;if(ok){g.s++;sfx("ding")}else{sfx("buzz");addMsg("bot","= "+g.ans)}g.i++;
    if(g.i>=10){S.game=null;const sec=Math.round((performance.now()-g.t0)/1000);if(g.s>=8){confetti();play("cheer")}oracle(say(fill(TT("mt_end"),{s:g.s,t:sec}),""),[{t:TT("again"),c:"newgame:math"},C("stop")])}else mtAsk(g);return true}
  if(g.id==="chain"){const w=low.replace(/[^a-z]/g,"");const need=g.last.slice(-1);
    if(!w||w.length<2){oracle(say(fill(TT("wc_bad"),{l:need.toUpperCase()}),""),[STOPC()]);return true}
    if(w[0]!==need){sfx("buzz");oracle(say(fill(TT("wc_bad"),{l:need.toUpperCase()}),""),[STOPC()]);return true}
    if(g.used.has(w)){oracle(say(TT("wc_used"),""),[STOPC()]);return true}
    g.used.add(w);const l=w.slice(-1);const mine=WORDS.filter(x=>x[0]===l&&!g.used.has(x));sfx("ding");
    if(!mine.length){S.game=null;confetti();play("cheer");oracle(say(fill(TT("wc_win"),{l:l.toUpperCase()}),""),[{t:TT("again"),c:"newgame:chain"},C("stop")]);return true}
    const m=pick(mine);g.used.add(m);g.last=m;oracle(say(fill(TT("wc_mine"),{w:m.toUpperCase(),l:m.slice(-1).toUpperCase()}),""),[STOPC()]);return true}
  return false;
};}
{const _cmd2=command;command=function(c,label){if(c.startsWith("newgame:")){startGame(c.slice(8));return}return _cmd2(c,label)};}
renderGames();

