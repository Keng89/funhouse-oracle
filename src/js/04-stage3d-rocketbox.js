
/* ================= 3D STAGE: realistic people (Microsoft Rocketbox, MIT) + real panoramas (Poly Haven, CC0) ================= */
const CAST3D=[
 {id:"sarah",f:"Female_Adult_01",name:"Sarah",g:"f",age:"adult"},{id:"mei",f:"Female_Adult_03",name:"Mei",g:"f",age:"adult"},
 {id:"isabella",f:"Female_Adult_11",name:"Isabella",g:"f",age:"adult"},{id:"zara",f:"Female_Party_02",name:"Zara",g:"f",age:"adult"},
 {id:"fatima",f:"Female_Adult_06",name:"Fatima",g:"f",age:"adult"},{id:"elena",f:"Medical_Female_02",name:"Dr. Elena",g:"f",age:"adult"},
 {id:"margaret",f:"Business_Female_02",name:"Margaret",g:"f",age:"senior"},
 {id:"marcus",f:"Male_Adult_04",name:"Marcus",g:"m",age:"adult"},{id:"kai",f:"Male_Adult_09",name:"Kai",g:"m",age:"adult"},
 {id:"jamal",f:"Male_Adult_12",name:"Jamal",g:"m",age:"adult"},{id:"omar",f:"Male_Adult_19",name:"Omar",g:"m",age:"adult"},
 {id:"hiro",f:"Business_Male_02",name:"Hiro",g:"m",age:"adult"},{id:"drsam",f:"Medical_Male_03",name:"Dr. Sam",g:"m",age:"senior"},
 {id:"george",f:"Male_Adult_03",name:"George",g:"m",age:"senior"},{id:"frank",f:"Male_Adult_05",name:"Frank",g:"m",age:"senior"},
 {id:"emily",f:"Female_Child_01",name:"Emily",g:"f",age:"kid"},{id:"amira",f:"Female_Child_02",name:"Amira",g:"f",age:"kid"},
 {id:"noah",f:"Male_Child_01",name:"Noah",g:"m",age:"kid"},{id:"kofi",f:"Male_Child_02",name:"Kofi",g:"m",age:"kid"}
];
CAST3D.forEach(c=>{c.pitch={kid:c.g==="f"?1.5:1.4,adult:c.g==="f"?1.05:.9,senior:c.g==="f"?.86:.76}[c.age];c.rate=c.age==="senior"?.88:c.age==="kid"?1.04:1;c.tag=c.age==="kid"?(c.g==="f"?"girl":"boy"):c.age==="senior"?(c.g==="f"?"grandma":"grandpa"):(c.g==="f"?"woman":"man")});
const BG3D=[{id:"home",rot:0},{id:"studio",rot:0},{id:"berlin",rot:1.2},{id:"bridge",rot:0},{id:"park",rot:0},{id:"forest",rot:0},{id:"mountain",rot:0},{id:"dawn",rot:0},{id:"venice",rot:0},{id:"savanna",rot:0},{id:"warehouse",rot:0},{id:"manor",rot:0}];
const UI4={
 en:{s3d:"3D",s3dOn:"3D realistic mode",s3dOff:"2D cartoon mode",s3dLoad:"Loading 3D person…",s3dFail:"3D couldn't start.",cam:"Camera",snap:"Photo",snapHint:"Long-press or right-click to save the photo.",close:"Close",
  b3_home:"Living room",b3_studio:"Photo studio",b3_berlin:"City square",b3_bridge:"City bridge",b3_park:"Park",b3_forest:"Forest",b3_mountain:"Mountains",b3_dawn:"Dawn field",b3_venice:"Sunset",b3_savanna:"Night sky",b3_warehouse:"Warehouse",b3_manor:"Old manor",b3_photo:"My photo",b3_pano:"My 360° photo",b3_auto:"Auto (time of day)",callOn:"Video call mode",callOff:"Chat view",
  cam_face:"Close-up",retry:"Try again",use2d:"Use cartoon stage",cam_upper:"Upper body",cam_full:"Full body",realCast:"Realistic people"},
 vi:{s3d:"3D",s3dOn:"Chế độ 3D chân thật",s3dOff:"Chế độ hoạt hình 2D",s3dLoad:"Đang tải người 3D…",s3dFail:"Chưa chạy được 3D.",cam:"Máy quay",snap:"Chụp ảnh",snapHint:"Nhấn giữ hoặc chuột phải để lưu ảnh.",close:"Đóng",
  b3_home:"Phòng khách",b3_studio:"Studio chụp ảnh",b3_berlin:"Quảng trường",b3_bridge:"Cây cầu thành phố",b3_park:"Công viên",b3_forest:"Rừng",b3_mountain:"Núi",b3_dawn:"Cánh đồng bình minh",b3_venice:"Hoàng hôn",b3_savanna:"Bầu trời đêm",b3_warehouse:"Nhà kho",b3_manor:"Biệt thự cổ",b3_photo:"Ảnh của tôi",b3_pano:"Ảnh 360° của tôi",b3_auto:"Tự động (theo giờ)",callOn:"Chế độ gọi video",callOff:"Xem chat",
  cam_face:"Cận mặt",retry:"Thử lại",use2d:"Dùng sân khấu hoạt hình",cam_upper:"Nửa người",cam_full:"Toàn thân",realCast:"Người thật 3D"},
 yue:{s3d:"3D",s3dOn:"3D 真實模式",s3dOff:"2D 卡通模式",s3dLoad:"載入緊 3D 人物…",s3dFail:"3D 開唔到。",cam:"鏡頭",snap:"影相",snapHint:"長按或者右鍵就可以儲存相片。",close:"關閉",
  b3_home:"客廳",b3_studio:"影樓",b3_berlin:"城市廣場",b3_bridge:"城市大橋",b3_park:"公園",b3_forest:"森林",b3_mountain:"山",b3_dawn:"黎明田野",b3_venice:"日落",b3_savanna:"夜空",b3_warehouse:"貨倉",b3_manor:"古老大宅",b3_photo:"我嘅相",b3_pano:"我嘅 360° 相",b3_auto:"自動（跟時間）",callOn:"視像通話模式",callOff:"睇對話",
  cam_face:"特寫",retry:"再試",use2d:"用卡通舞台",cam_upper:"半身",cam_full:"全身",realCast:"真人 3D"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI4[k]);

const E={on:false,ready:false,loading:false,T:null,renderer:null,scene:null,camera:null,root:null,model:null,bones:{},rest:new Map(),sL:1,P:null,queue:[],cur:null,last:0,cam:store.get("cam3d","upper"),
  char:store.get("char3d","sarah"),bg:store.get("bg3d","home"),mouth:0,mT:0,mt:0,blinkAt:0,blinkEnd:0,sacc:[0,0],saccAt:0,raf:0,canvas:null,tex:{},loadId:0};
S.stage3d=store.get("stage3d",null);
const cur3d=()=>CAST3D.find(c=>c.id===E.char)||CAST3D[0];
function rest3(){return {lU:[.16,-1,.04],lF:[.06,-1,.22],rU:[.16,-1,.04],rF:[.06,-1,.22],hp:0,hy:0,hr:0,sp:0,sr:0,by:0,brow:0,smile:.15,lookUp:0}}
const v=(x,y,z)=>[x,y,z];
const G3={
 wave:()=>[{p:{rU:v(.95,.32,.08),rF:v(.12,1,.12),brow:.6,smile:.7,hr:.06},t:350},{p:{rF:v(.55,.85,.12)},t:220},{p:{rF:v(-.15,1,.12)},t:220},{p:{rF:v(.55,.85,.12)},t:220},{p:{rF:v(-.15,1,.12)},t:220},{p:rest3(),t:450}],
 explain:()=>{const r=Math.random,side=r()<.5?"l":"r",o={};o[side+"U"]=v(.22+r()*.1,-.85,.42+r()*.1);o[side+"F"]=v(.15+r()*.25,.02+r()*.2,1);const o2={};o2[side+"F"]=v(.35*r(),.25*r(),1);
   return [{p:Object.assign({hr:(r()-.5)*.08,brow:.25},o),t:420},{p:o2,t:420},{p:{lU:v(.16,-1,.04),lF:v(.06,-1,.22),rU:v(.16,-1,.04),rF:v(.06,-1,.22),hr:0},t:480}]},
 cheer:()=>[{p:{lU:v(.55,.85,.05),lF:v(.2,1,0),rU:v(.55,.85,.05),rF:v(.2,1,0),by:.02,brow:1,smile:1},t:320},{p:{by:0},t:220},{p:{by:.02},t:220},{p:{by:0},t:220},{p:rest3(),t:500}],
 think:()=>[{p:{rU:v(.12,-.72,.62),rF:v(-.5,.82,.35),hp:-.08,hr:-.08,brow:.8,smile:0,lookUp:1},t:500}],
 shrug:()=>[{p:{lU:v(.38,-.86,.32),lF:v(.85,.08,.55),rU:v(.38,-.86,.32),rF:v(.85,.08,.55),hr:.12,brow:1,smile:.3},t:380},{p:{},t:650},{p:rest3(),t:450}],
 laugh:()=>{const a=[{p:{lU:v(.3,-.9,.35),lF:v(-.75,-.25,.6),rU:v(.3,-.9,.35),rF:v(-.75,-.25,.6),hp:-.12,smile:1,brow:.5},t:300}];for(let i=0;i<5;i++)a.push({p:{hr:i%2?-.07:.05,by:i%2?.006:0},t:150});a.push({p:rest3(),t:450});return a},
 heart:()=>[{p:{lU:v(.25,-.85,.45),lF:v(-.85,.25,.5),rU:v(.25,-.85,.45),rF:v(-.85,.25,.5),hr:.1,smile:1,brow:.3},t:420},{p:{hr:-.05},t:500},{p:{hr:.08},t:500},{p:rest3(),t:450}],
 bow:()=>[{p:{sp:.32,hp:.22,rU:v(.25,-.85,.45),rF:v(-.85,.25,.5)},t:520},{p:{},t:500},{p:rest3(),t:520}],
 nod:()=>[{p:{hp:.16,brow:.3},t:200},{p:{hp:-.02},t:200},{p:{hp:.16},t:200},{p:{hp:0},t:220}],
 listen:()=>[{p:{rU:v(.75,.12,.15),rF:v(-.35,.95,-.05),hr:.14,brow:.5},t:450}],
 dance:()=>{const a=[];for(let i=0;i<6;i++)a.push(i%2?{p:{sr:.09,lU:v(.6,-.75,.2),lF:v(.6,.3,.6),rU:v(.55,.85,.05),rF:v(.2,1,0),hr:.08,smile:1},t:330}:{p:{sr:-.09,lU:v(.55,.85,.05),lF:v(.2,1,0),rU:v(.6,-.75,.2),rF:v(.6,.3,.6),hr:-.08,smile:1},t:330});a.push({p:rest3(),t:450});return a},
 mystic:()=>[{p:{lU:v(.25,-.6,.8),lF:v(.12,-.05,1),rU:v(.25,-.6,.8),rF:v(.12,-.05,1),brow:.8,hp:.06},t:450},{p:{lF:v(-.1,.05,1),rF:v(-.1,.05,1)},t:500},{p:{lF:v(.2,-.1,1),rF:v(.2,-.1,1)},t:500},{p:rest3(),t:450}]
};
E.P=rest3();

/* ----- engine ----- */
async function init3d(){
  if(E.ready)return true;if(E.loading)return false;E.loading=true;
  const box=$("#stageBox");let ov=$("#s3dLoad");if(!ov){ov=h("div",{id:"s3dLoad",class:"s3d-load"});box.append(ov)}ov.hidden=false;ov.textContent=T("s3dLoad");
  try{
    E.step="engine";if(!window.FHO3D)await new Promise((ok,bad)=>{const sc=document.createElement("script");sc.src="three-3d.js?v=17";sc.onload=ok;sc.onerror=()=>bad(new Error("three-3d.js did not load"));document.head.append(sc)});
    const THREE=window.FHO3D.THREE;E.T=THREE;E.GLTFLoader=window.FHO3D.GLTFLoader;
    E.step="webgl";{const t=document.createElement("canvas");if(!(t.getContext("webgl2")||t.getContext("webgl")))throw new Error("WebGL is turned off on this device");}
    const cv=document.createElement("canvas");cv.className="s3d-canvas";box.prepend(cv);E.canvas=cv;
    cv.addEventListener("click",()=>{const g=pick(["wave","laugh","cheer","dance","heart","nod"]);play(g);if(g==="laugh"||g==="heart"||g==="cheer"){ST.face=g==="laugh"?"laugh":"happy";ST.faceUntil=performance.now()+1800}sfx("blip2")});
    const r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:false,preserveDrawingBuffer:false});
    r.setPixelRatio(Math.min(innerWidth<700?1.6:2,window.devicePixelRatio||1));r.outputColorSpace=THREE.SRGBColorSpace;r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.05;
    E.renderer=r;E.scene=new THREE.Scene();E.camera=new THREE.PerspectiveCamera(28,1,.05,200);
    const key=new THREE.DirectionalLight(0xfff2e0,1.1);key.position.set(1.2,2.4,2.2);E.scene.add(key);
    const fill=new THREE.HemisphereLight(0xdfefff,0x3a2a20,.35);E.scene.add(fill);
    E.root=new THREE.Group();E.scene.add(E.root);
    new ResizeObserver(()=>resize3d()).observe(box);resize3d();
    E.step="background";await setBg3d(E.bg);E.step="person";await loadChar3d(E.char);
    E.ready=true;ov.hidden=true;return true;
  }catch(err){console.warn(err);E.err=(E.step||"")+": "+(err&&err.message||err);
    ov.hidden=false;ov.innerHTML="";ov.append(h("div",{style:"text-align:center;padding:12px;max-width:90%"},h("div",null,T("s3dFail")),h("div",{style:"opacity:.7;font-size:11px;margin:6px 0 10px;overflow-wrap:anywhere"},E.err),
      h("div",{class:"btn-row",style:"justify-content:center"},h("button",{type:"button",class:"btn small",onclick:()=>{ov.hidden=true;E.failed=false;init3d().then(ok=>{if(ok&&!E.raf)E.raf=requestAnimationFrame(loop3)})}},"↻ "+T("retry")),
        h("button",{type:"button",class:"btn ghost small",onclick:()=>{ov.hidden=true;S.stage3d=false;store.set("stage3d",false);apply3dMode()}},T("use2d")))));
    if(E.renderer){try{E.renderer.dispose()}catch(e){}E.renderer=null;E.canvas&&E.canvas.remove();E.canvas=null}
    return false}
  finally{E.loading=false}
}
function toGLB(json,bin){const enc=new TextEncoder();let j=enc.encode(JSON.stringify(json));const jp=(4-j.length%4)%4,bp=(4-bin.length%4)%4;
  const total=12+8+j.length+jp+8+bin.length+bp;const buf=new ArrayBuffer(total),dv=new DataView(buf),u8=new Uint8Array(buf);
  dv.setUint32(0,0x46546C67,true);dv.setUint32(4,2,true);dv.setUint32(8,total,true);dv.setUint32(12,j.length+jp,true);dv.setUint32(16,0x4E4F534A,true);u8.set(j,20);for(let i=0;i<jp;i++)u8[20+j.length+i]=32;
  let o=20+j.length+jp;dv.setUint32(o,bin.length+bp,true);dv.setUint32(o+4,0x004E4942,true);u8.set(bin,o+8);return buf}
async function loadPano(id){const THREE=E.T;if(!E.tex[id]){const t=await new THREE.TextureLoader().loadAsync("bg/"+id+"-pano.jpg");t.mapping=THREE.EquirectangularReflectionMapping;t.colorSpace=THREE.SRGBColorSpace;E.tex[id]=t}return E.tex[id]}
function resize3d(){if(!E.renderer)return;const b=$("#stageBox");const w=b.clientWidth,h=b.clientHeight;if(!w||!h)return;E.renderer.setSize(w,h,false);E.camera.aspect=w/h;E.camera.updateProjectionMatrix();frameCam(true)}
async function setBg3d(id){
  const THREE=E.T;E.bg=id;store.set("bg3d",id);
  let tex;
  if(id==="auto"){const hr=new Date().getHours();E.bgAuto=true;id=hr<5?"savanna":hr<8?"dawn":hr<17?"park":hr<20?"venice":"savanna"}else E.bgAuto=false;
  if(id==="photo"||id==="pano"){
    if(!S.bgImg){$("#bgFile").click();return}
    tex=await new THREE.TextureLoader().loadAsync(S.bgImg);tex.colorSpace=THREE.SRGBColorSpace;
    if(id==="pano"){tex.mapping=THREE.EquirectangularReflectionMapping;E.scene.background=tex;E.scene.environment=tex;E.scene.backgroundBlurriness=0}
    else{E.scene.background=tex;E.scene.environment=await loadPano("home")}
  } else {
    tex=await loadPano(id);const b=BG3D.find(x=>x.id===id)||{rot:0};
    E.scene.background=tex;E.scene.environment=tex;E.scene.backgroundBlurriness=.035;E.scene.backgroundIntensity=1;E.scene.environmentIntensity=1.35;
    if(E.scene.backgroundRotation){E.scene.backgroundRotation.set(0,b.rot,0);E.scene.environmentRotation.set(0,b.rot,0)}
  }
}
function findBone(obj,re){let f=null;obj.traverse(o=>{if(!f&&o.isBone&&re.test(o.name))f=o});return f}
async function loadChar3d(id){
  const THREE=E.T;const c=CAST3D.find(x=>x.id===id)||CAST3D[0];E.char=c.id;store.set("char3d",c.id);const my=++E.loadId;
  const ov=$("#s3dLoad");if(ov&&E.ready){ov.hidden=false;ov.textContent=T("s3dLoad")+" "+c.name}
  const base="avatars/"+c.f+"/";const res=await fetch(base+"model.json");if(!res.ok)throw new Error("model "+res.status);
  const js=await res.json();const b64=js.extras&&js.extras.fhoBin;delete js.extras.fhoBin;
  const bin=Uint8Array.from(atob(b64),ch=>ch.charCodeAt(0));
  const gltf=await new E.GLTFLoader().parseAsync(toGLB(js,bin),base);if(my!==E.loadId)return;
  if(E.model){E.root.remove(E.model);E.model.traverse(o=>{if(o.isMesh){o.geometry.dispose();[].concat(o.material).forEach(m=>{for(const k in m)if(m[k]&&m[k].isTexture)m[k].dispose();m.dispose()})}})}
  const m=gltf.scene;m.traverse(o=>{if(o.isMesh){o.frustumCulled=false;[].concat(o.material).forEach(mm=>{mm.envMapIntensity=1;if(mm.map)mm.map.anisotropy=4})}});
  E.root.rotation.set(0,0,0);E.root.position.set(0,0,0);E.root.scale.set(1,1,1);E.root.add(m);E.model=m;
  E.root.updateMatrixWorld(true);
  let box=new THREE.Box3().setFromObject(m);let hgt=box.max.y-box.min.y;
  if(hgt>20){E.root.scale.setScalar(.01);E.root.updateMatrixWorld(true);box=new THREE.Box3().setFromObject(m);hgt=box.max.y-box.min.y}
  const B=E.bones={};const nm={head:/[ _]Head$/,neck:/[ _]Neck$/,spine:/[ _]Spine2$/,spine1:/[ _]Spine1$/,lU:/[ _]L[ _]UpperArm$/,lF:/[ _]L[ _]Forearm$/,lH:/[ _]L[ _]Hand$/,rU:/[ _]R[ _]UpperArm$/,rF:/[ _]R[ _]Forearm$/,rH:/[ _]R[ _]Hand$/,lEye:/[ _]LEye$/,rEye:/[ _]REye$/,jaw:/[ _]MJaw$/,lLidT:/[ _]LEyeBlinkTop$/,rLidT:/[ _]REyeBlinkTop$/,lLidB:/[ _]LEyeBlinkBottom$/,rLidB:/[ _]REyeBlinkBottom$/,lCorner:/[ _]LMouthCorner$/,rCorner:/[ _]RMouthCorner$/,lBrowI:/[ _]LInnerEyebrow$/,rBrowI:/[ _]RInnerEyebrow$/,lBrowO:/[ _]LOuterEyebrow$/,rBrowO:/[ _]ROuterEyebrow$/,mBrow:/[ _]MMiddleEyebrow$/,lCheek:/[ _]LCheek$/,rCheek:/[ _]RCheek$/,upLip:/[ _]MUpperLip$/,botLip:/[ _]MBottomLip$/};
  for(const k in nm)B[k]=findBone(m,nm[k]);
  // face the camera (+Z)
  const hp=new THREE.Vector3(),ep=new THREE.Vector3(),e2=new THREE.Vector3();
  if(B.head&&B.lEye&&B.rEye){B.head.getWorldPosition(hp);B.lEye.getWorldPosition(ep);B.rEye.getWorldPosition(e2);ep.add(e2).multiplyScalar(.5).sub(hp);ep.y=0;ep.normalize();E.root.rotation.y=Math.atan2(ep.x,ep.z)*-1}
  E.root.updateMatrixWorld(true);
  box=new THREE.Box3().setFromObject(m);E.root.position.y-=box.min.y;E.root.position.x-=(box.min.x+box.max.x)/2;E.root.position.z-=(box.min.z+box.max.z)/2;E.root.userData.baseY=E.root.position.y;E.root.updateMatrixWorld(true);
  // which side is the left arm (avatar space x sign)
  if(B.lU){const p=new THREE.Vector3();B.lU.getWorldPosition(p);E.sL=Math.sign(p.x)||1}
  E.rest=new Map();m.traverse(o=>{if(o.isBone)E.rest.set(o,{q:o.quaternion.clone(),p:o.position.clone()})});
  E.P=rest3();E.queue=[];E.cur=null;frameCam(true);
  if(ov)ov.hidden=true;$("#stageName").textContent=c.name+" · "+MODES[S.mode].em+" "+modeName(S.mode);
  if(E.on)$("#mascotSlot").innerHTML='<img id="mascot" class="mascot" src="avatars/'+c.f+'.jpg" alt="" style="border-radius:50%;object-fit:cover;border:2px solid var(--brass)">';
}
function frameCam(snap){
  const THREE=E.T;if(!THREE||!E.bones.head)return;
  const hp=new THREE.Vector3();E.bones.head.getWorldPosition(hp);
  let tgt,dist;
  if(E.cam==="face"){tgt=hp.clone().add(new THREE.Vector3(0,.06,0));dist=.8}
  else if(E.cam==="full"){tgt=new THREE.Vector3(0,hp.y*.55,0);dist=hp.y*2.1+.6}
  else{tgt=hp.clone().add(new THREE.Vector3(0,-.11,0));dist=1.5}
  const asp=E.camera.aspect||1.4;if(asp<1){dist*=Math.max(1,.78/asp);tgt=tgt.clone().add(new THREE.Vector3(0,-(1/asp-1)*.12*(E.cam==="full"?3:1),0))}
  E.camTgt=tgt;E.camDist=dist;if(snap){E.camera.position.set(tgt.x,tgt.y+.03,tgt.z+dist);E.camera.lookAt(tgt)}
}
const _q=()=>new E.T.Quaternion(),_v=()=>new E.T.Vector3();
function rotW(bone,axis,ang){if(!bone||!ang)return;const THREE=E.T;const q=new THREE.Quaternion().setFromAxisAngle(axis,ang);const bw=bone.getWorldQuaternion(_q());const pw=bone.parent.getWorldQuaternion(_q()).invert();bone.quaternion.copy(pw.multiply(q.multiply(bw)));bone.updateMatrixWorld(true)}
function aimW(bone,child,dir){if(!bone||!child)return;const a=bone.getWorldPosition(_v()),b=child.getWorldPosition(_v());const cur=b.sub(a).normalize();const q=new E.T.Quaternion().setFromUnitVectors(cur,dir);const bw=bone.getWorldQuaternion(_q());const pw=bone.parent.getWorldQuaternion(_q()).invert();bone.quaternion.copy(pw.multiply(q.multiply(bw)));bone.updateMatrixWorld(true)}
function moveW(bone,dw){if(!bone)return;const pq=bone.parent.getWorldQuaternion(_q()).invert();const ps=bone.parent.getWorldScale(_v());const d=dw.clone().applyQuaternion(pq);d.x/=ps.x;d.y/=ps.y;d.z/=ps.z;bone.position.add(d)}
function avDir(a,side){const THREE=E.T;const s=side==="l"?E.sL:-E.sL;const d=new THREE.Vector3(a[0]*s,a[1],a[2]).normalize();return d.applyQuaternion(E.root.quaternion)}
function lerpP(a,b,e){const o={};for(const k in a){const x=a[k],y=b[k];o[k]=Array.isArray(x)?[x[0]+(y[0]-x[0])*e,x[1]+(y[1]-x[1])*e,x[2]+(y[2]-x[2])*e]:x+(y-x)*e}return o}
function play3(name,keep){if(!G3[name])return;if(!keep){E.queue=[];E.cur=null}E.queue.push(...G3[name]())}
function loop3(ts){
  E.raf=requestAnimationFrame(loop3);if(!E.ready||!E.model||document.hidden)return;if(ts-E.last<28)return;const dt=Math.min(.1,(ts-E.last)/1000);E.last=ts;
  const THREE=E.T,B=E.bones;
  const speaking=("speechSynthesis" in window&&speechSynthesis.speaking)||ts<ST.talkUntil;
  // gesture queue
  if(!E.cur&&E.queue.length){const k=E.queue.shift();E.cur={from:E.P,to:Object.assign({},E.P,k.p),t:k.t,start:ts}}
  if(E.cur){const x=Math.min(1,(ts-E.cur.start)/E.cur.t);E.P=lerpP(E.cur.from,E.cur.to,ease(x));if(x>=1)E.cur=null}
  else if(speaking&&!ST.hold){E.queue.push(...G3.explain())}
  else if(!ST.hold){E.P=lerpP(E.P,rest3(),.05)}
  const P=E.P,face=ts<ST.faceUntil?ST.face:null;
  // reset to rest
  for(const [b,r] of E.rest){b.quaternion.copy(r.q);b.position.copy(r.p)}
  E.root.updateMatrixWorld(true);
  const X=new THREE.Vector3(1,0,0).applyQuaternion(E.root.quaternion),Y=new THREE.Vector3(0,1,0),Z=new THREE.Vector3(0,0,1).applyQuaternion(E.root.quaternion);
  const br=Math.sin(ts/1100)*.012,sw=Math.sin(ts/2600)*.025;
  rotW(B.spine1,Z,P.sr+sw*.4);rotW(B.spine1,X,P.sp*.5+br);rotW(B.spine,X,P.sp*.5);
  // head look at camera
  const hp=B.head.getWorldPosition(_v()),cam=E.camera.position;
  if(ts>E.saccAt){E.sacc=[(Math.random()-.5)*.05,(Math.random()-.5)*.03];E.saccAt=ts+700+Math.random()*2200}
  const toCam=cam.clone().sub(hp);const yaw=Math.atan2(toCam.x,toCam.z)-E.root.rotation.y,pitch=-Math.atan2(toCam.y,Math.hypot(toCam.x,toCam.z));
  const hy=Math.max(-.5,Math.min(.5,yaw*.6))+P.hy+sw,hpch=Math.max(-.3,Math.min(.3,pitch*.5))+P.hp-(P.lookUp*.05)+(face==="laugh"?-.1:0);
  rotW(B.neck,Y,hy*.4);rotW(B.neck,X,hpch*.4);rotW(B.head,Y,hy*.6);rotW(B.head,X,hpch*.6);rotW(B.head,Z,P.hr);
  // eyes
  const ey=E.sacc[0]+(ts<ST.lookUntil?0:0),ep=E.sacc[1]+(ts<ST.lookUntil?.18:0)-P.lookUp*.22;
  rotW(B.lEye,Y,ey);rotW(B.rEye,Y,ey);rotW(B.lEye,X,ep);rotW(B.rEye,X,ep);
  // arms
  aimW(B.lU,B.lF,avDir(P.lU,"l"));aimW(B.lF,B.lH,avDir(P.lF,"l"));aimW(B.rU,B.rF,avDir(P.rU,"r"));aimW(B.rF,B.rH,avDir(P.rF,"r"));
  // face: blink
  if(ts>E.blinkAt&&!E.blinkEnd)E.blinkEnd=ts+140;let bl=0;if(E.blinkEnd){if(ts<E.blinkEnd)bl=1;else{E.blinkEnd=0;E.blinkAt=ts+1800+Math.random()*3500}}
  const happy=face==="happy"||face==="laugh";if(happy)bl=Math.max(bl,.35);if(face==="sad")bl=Math.max(bl,.28);
  const lidD=(window.__lid||.0085)*bl;moveW(B.lLidT,new THREE.Vector3(0,-lidD,0));moveW(B.rLidT,new THREE.Vector3(0,-lidD,0));moveW(B.lLidB,new THREE.Vector3(0,lidD*.25,0));moveW(B.rLidB,new THREE.Vector3(0,lidD*.25,0));
  // mouth
  E.mT=speaking?mouthTarget(ts,true):face==="laugh"?.75:face==="surprised"?.35:0;if(ts>E.mt){E.mo=Math.random()<.3;E.mt=ts+140}
  E.mouth+=(E.mT-E.mouth)*.45;
  rotW(B.jaw,X,E.mouth*.2);
  const sad=face==="sad",sur=face==="surprised";const sm=sad?-.8:Math.max(P.smile,happy?1:0),u=.0055;
  const out=(side)=>new THREE.Vector3((side==="l"?E.sL:-E.sL),0,0).applyQuaternion(E.root.quaternion);
  const round=speaking&&E.mo?E.mouth:0;
  moveW(B.lCorner,out("l").multiplyScalar(u*(sm*.9-round*.9)).add(new THREE.Vector3(0,u*sm*.9,0)));moveW(B.rCorner,out("r").multiplyScalar(u*(sm*.9-round*.9)).add(new THREE.Vector3(0,u*sm*.9,0)));
  moveW(B.lCheek,new THREE.Vector3(0,u*sm*.6,0));moveW(B.rCheek,new THREE.Vector3(0,u*sm*.6,0));
  const bw=(sur?1.4:P.brow)*u*1.1,bi=sad?u*1.3:0;moveW(B.lBrowI,new THREE.Vector3(0,bw+bi,0));moveW(B.rBrowI,new THREE.Vector3(0,bw+bi,0));if(sur){moveW(B.lLidT,new THREE.Vector3(0,u*.35,0));moveW(B.rLidT,new THREE.Vector3(0,u*.35,0))}moveW(B.mBrow,new THREE.Vector3(0,bw*.8,0));moveW(B.lBrowO,new THREE.Vector3(0,bw*.6,0));moveW(B.rBrowO,new THREE.Vector3(0,bw*.6,0));
  E.root.position.y=(E.root.userData.baseY??(E.root.userData.baseY=E.root.position.y))+P.by;
  // camera drift
  if(E.camTgt){const a=Math.sin(ts/5200)*.06,t=E.camTgt,d=E.camDist;const want=new THREE.Vector3(t.x+Math.sin(a)*d,t.y+.03+Math.sin(ts/4300)*.012,t.z+Math.cos(a)*d);E.camera.position.lerp(want,Math.min(1,dt*2.5));E.camera.lookAt(t)}
  E.renderer.render(E.scene,E.camera);
}
function snap3d(){
  if(!E.ready)return;E.renderer.render(E.scene,E.camera);const url=E.canvas.toDataURL("image/jpeg",.92);sfx("coin");
  const ov=h("div",{class:"snap-ov",role:"dialog","aria-label":T("snap")},h("img",{src:url,alt:cur3d().name}),h("p",null,T("snapHint")),h("button",{type:"button",class:"btn",onclick:()=>ov.remove()},T("close")));document.body.append(ov);
}

/* ----- UI integration ----- */
function apply3dMode(){
  const on=!!S.stage3d;E.on=on;
  $("#stageChar").style.display=on?"none":"";$("#stageBg").style.display=on?"none":"";
  if(E.canvas)E.canvas.style.display=on?"":"none";
  $("#btn3d").classList.toggle("on",on);$("#camBtn").hidden=!on;$("#snapBtn").hidden=!on;
  if(on){init3d().then(ok=>{if(ok&&!E.raf)E.raf=requestAnimationFrame(loop3)})}
  else{if(E.raf){cancelAnimationFrame(E.raf);E.raf=0}$("#stageName").textContent=curChar().name+" · "+MODES[S.mode].em+" "+modeName(S.mode);renderMascot()}
  if(!$("#stageSheet").hidden)renderSheet();
}
{const tools=document.querySelector(".stage-tools");
 tools.prepend(h("button",{type:"button",id:"btn3d","aria-label":"3D",title:"3D",onclick:()=>{S.stage3d=!S.stage3d;store.set("stage3d",S.stage3d);toast(S.stage3d?T("s3dOn"):T("s3dOff"));apply3dMode();sfx("coin")}},"3D"));
 const cam=h("button",{type:"button",id:"camBtn","aria-label":"Camera",title:"Camera",onclick:()=>{E.cam={upper:"face",face:"full",full:"upper"}[E.cam];store.set("cam3d",E.cam);frameCam(false);toast("🎥 "+T("cam_"+E.cam))}},"🎥");
 const sn=h("button",{type:"button",id:"snapBtn","aria-label":"Photo",title:"Photo",onclick:snap3d},"📸");
 tools.insertBefore(cam,$("#ccBtn"));tools.insertBefore(sn,$("#ccBtn"));}
{const _rs=renderSheet;renderSheet=function(){
  if(!E.on||!(sheetMode==="chars"||sheetMode==="bgs"))return _rs();
  const sh=$("#stageSheet");document.querySelectorAll(".stage-tools [data-s]").forEach(b=>b.classList.toggle("on",b.dataset.s===sheetMode));sh.hidden=false;sh.innerHTML="";
  if(sheetMode==="chars"){
    CAST3D.forEach(c=>{const it=h("button",{type:"button",class:"sheet-item","aria-pressed":c.id===E.char,onclick:async()=>{if(!E.ready)return;await loadChar3d(c.id);renderSheet();play3("wave");speakAs(c,fill(HI_IM[replyLang()]||HI_IM.en,{n:c.name}))}},h("img",{src:"avatars/"+c.f+".jpg",alt:"",style:"width:51px;height:51px;border-radius:50%;object-fit:cover"}),h("span",null,c.name));sh.append(it)});
  } else {
    sh.append(h("button",{type:"button",class:"sheet-item","aria-pressed":E.bg==="auto",onclick:async()=>{if(!E.ready)return;await setBg3d("auto");renderSheet();sfx("blip")}},h("span",{class:"em"},"🕒"),h("span",null,T("b3_auto"))));
    BG3D.forEach(b=>{const it=h("button",{type:"button",class:"sheet-item","aria-pressed":b.id===E.bg,onclick:async()=>{if(!E.ready)return;await setBg3d(b.id);renderSheet();sfx("blip")}},h("img",{src:"bg/"+b.id+".jpg",alt:"",style:"width:68px;height:51px;border-radius:8px;object-fit:cover"}),h("span",null,T("b3_"+b.id)));sh.append(it)});
    for(const id of ["photo","pano"])sh.append(h("button",{type:"button",class:"sheet-item","aria-pressed":E.bg===id,onclick:()=>{E.pendingBg=id;if(S.bgImg)setBg3d(id).then(renderSheet);else $("#bgFile").click()}},h("span",{class:"em"},id==="pano"?"🌐":"📷"),h("span",null,T("b3_"+id))));
  }};}
{const _p=play;play=function(name,keep){_p(name,keep);if(E.on)play3(name,keep)};}
{const _sa=speakAs;speakAs=function(c,text,after){if(E.on&&c===curChar())c=cur3d();_sa(c,text,after)};}
{const _us=updateStage;updateStage=function(){_us();if(E.on&&!stageVisible()&&E.raf){cancelAnimationFrame(E.raf);E.raf=0}else if(E.on&&stageVisible()&&E.ready&&!E.raf)E.raf=requestAnimationFrame(loop3)};}
{const _rm3=renderModes;renderModes=function(){_rm3();if(E.on&&E.ready)$("#stageName").textContent=cur3d().name+" · "+MODES[S.mode].em+" "+modeName(S.mode)};}
$("#bgFile").addEventListener("change",()=>{if(E.on&&E.pendingBg)setTimeout(()=>{if(S.bgImg)setBg3d(E.pendingBg).then(()=>{renderSheet()})},400)});

{const pic=()=>'<img src="avatars/'+cur3d().f+'.jpg" alt="" style="width:34px;height:34px;border-radius:50%;object-fit:cover;display:block">';
 const _am=addMsg;addMsg=function(who,text){const b=_am(who,text);if(E.on&&E.ready&&who!=="me"){const av=b.closest(".msg")?.querySelector(".avatar");if(av){av.innerHTML=pic();av.title=cur3d().name}}return b};
 const _ty=typing;typing=function(){const r=_ty();if(E.on&&E.ready){const av=r.querySelector(".avatar");if(av)av.innerHTML=pic()}return r};}

/* video-call mode: big stage, captions, chat box stays */
S.call=store.get("call",false);
{const tools=document.querySelector(".stage-tools");tools.insertBefore(h("button",{type:"button",id:"callBtn","aria-label":"Video call mode",title:"Video call",onclick:()=>{S.call=!S.call;store.set("call",S.call);applyCall();toast(S.call?"📞 "+T("callOn"):"💬 "+T("callOff"));sfx("coin")}},"📞"),$("#ccBtn"));}
function applyCall(){const on=S.call&&S.stageOn&&!$("#view-chat").hidden;document.body.classList.toggle("call",on);$("#callBtn").classList.toggle("on",S.call);if(on){const c=$("#caption");c.hidden=!S.cc||!c.textContent}if(E.renderer)setTimeout(resize3d,60)}
{const _st4=switchTab;switchTab=function(v){_st4(v);applyCall()};}
applyCall();

/* offline app (works when hosted on your own site, e.g. GitHub Pages) */
if("serviceWorker" in navigator&&location.protocol==="https:"&&!/claude\.ai|claudeusercontent|anthropic/.test(location.hostname)){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})})}
/* default: 3D when WebGL is available and the user hasn't chosen */
if(S.stage3d===null){let gl=false;try{const c=document.createElement("canvas");gl=!!(c.getContext("webgl2")||c.getContext("webgl"))}catch(e){}S.stage3d=gl}
apply3dMode();

