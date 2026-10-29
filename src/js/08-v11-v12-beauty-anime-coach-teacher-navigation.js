
/* ================= v11: makeup, beauty light, more women ================= */
const UI14={
 en:{w_makeup:"Makeup",w_lips:"Lip colour",w_beauty:"Beauty light",w_skin:"Soft skin",mk_none:"None",mk_natural:"Natural",mk_nude:"Nude",mk_pink:"Pink pop",mk_glam:"Glam",mk_bold:"Bold red",mk_smoky:"Smoky",on:"On",off:"Off",lk_glam:"Glam night"},
 vi:{w_makeup:"Trang điểm",w_lips:"Màu son",w_beauty:"Ánh sáng đẹp",w_skin:"Da mịn",mk_none:"Không",mk_natural:"Tự nhiên",mk_nude:"Nude",mk_pink:"Hồng tươi",mk_glam:"Quyến rũ",mk_bold:"Đỏ nổi bật",mk_smoky:"Khói",on:"Bật",off:"Tắt",lk_glam:"Đêm lộng lẫy"},
 yue:{w_makeup:"化妝",w_lips:"唇色",w_beauty:"美顏燈光"}};
for(const k of ["en","vi","yue"])Object.assign(PACKS[k].ui,UI14[k]);
CAST3D.splice(CAST3D.findIndex(c=>c.g==="m"&&c.age!=="kid"),0,
 {id:"amelia",f:"Medical_Female_01",name:"Amelia",g:"f",age:"adult",pitch:1.05,rate:1},{id:"sofia",f:"Medical_Female_03",name:"Sofia",g:"f",age:"adult",pitch:1.05,rate:1},{id:"claire",f:"Pilot_Female_02",name:"Claire",g:"f",age:"adult",pitch:1.05,rate:1});
Object.assign(WDATA,{"Medical_Female_01":[0.599,0.082,"#c58865"],"Medical_Female_03":[0.303,0.2,"#d2977f"],"Pilot_Female_02":[0.316,0.3,"#986848"]});for(const f of ["Medical_Female_01","Medical_Female_03","Pilot_Female_02"])OUTFIT_OK.add(f);
const FACE={"Female_Adult_01":[0.4963,0.407,0.0321,0.0202,0.4277,0.2793,0.5703,0.2793],"Female_Adult_02":[0.4982,0.4065,0.03,0.0191,0.4238,0.2793,0.5703,0.2773],"Female_Adult_03":[0.5079,0.4177,0.03,0.022,0.4533,0.2793,0.5625,0.2793],"Female_Adult_04":[0.499,0.4049,0.03,0.0218,0.4277,0.2773,0.5664,0.2773],"Female_Adult_05":[0.495,0.4208,0.0398,0.022,0.4219,0.2773,0.5684,0.2754],"Female_Adult_06":[0.4997,0.414,0.03,0.022,0.4219,0.2773,0.5775,0.2773],"Female_Adult_07":[0.496,0.4059,0.0302,0.0191,0.4258,0.2793,0.5684,0.2793],"Female_Adult_08":[0.5015,0.4058,0.03,0.0216,0.4258,0.2754,0.5625,0.2754],"Female_Adult_09":[0.4992,0.4065,0.03,0.019,0.4297,0.2754,0.5625,0.2754],"Female_Adult_10":[0.5057,0.3977,0.05,0.022,0.4355,0.2773,0.5605,0.2793],"Female_Adult_11":[0.5,0.3923,0.0366,0.022,0.4297,0.2793,0.5664,0.2793],"Female_Adult_12":[0.499,0.4023,0.0333,0.0188,0.4219,0.248,0.5801,0.248],"Female_Adult_13":[0.4963,0.3915,0.05,0.022,0.4277,0.2773,0.5684,0.2773],"Female_Adult_14":[0.5015,0.4095,0.0339,0.022,0.4277,0.2773,0.5625,0.2773],"Female_Adult_15":[0.4978,0.407,0.0304,0.022,0.4258,0.2773,0.5703,0.2773],"Female_Adult_17":[0.4953,0.4042,0.0313,0.0212,0.4297,0.2773,0.5664,0.2773],"Female_Party_01":[0.5009,0.3959,0.05,0.022,0.4258,0.2773,0.5645,0.2773],"Female_Party_02":[0.4988,0.4115,0.03,0.0203,0.4316,0.2734,0.5645,0.2754],"Business_Female_01":[0.4973,0.4028,0.0319,0.022,0.4238,0.2793,0.5664,0.2812],"Business_Female_02":[0.499,0.4058,0.03,0.0206,0.4238,0.2754,0.5742,0.2754],"Business_Female_03":[0.5019,0.4074,0.0301,0.022,0.4374,0.2773,0.5664,0.2773],"Business_Female_04":[0.4983,0.4079,0.032,0.0191,0.4258,0.2793,0.5664,0.2773],"Chef_Female_01":[0.5093,0.4182,0.03,0.022,0.4561,0.2793,0.5625,0.2793],"Pilot_Female_01":[0.4992,0.4067,0.03,0.0193,0.4297,0.2734,0.5605,0.2734],"Pilot_Female_02":[0.4973,0.4028,0.0319,0.022,0.4238,0.2793,0.5664,0.2812],"Sports_Female_02":[0.499,0.4062,0.0326,0.0188,0.4316,0.2773,0.5605,0.2773],"Medical_Female_01":[0.5,0.3923,0.0366,0.022,0.4297,0.2793,0.5664,0.2793],"Medical_Female_02":[0.4983,0.4078,0.0322,0.0193,0.4238,0.2773,0.5703,0.2773],"Medical_Female_03":[0.4997,0.4065,0.03,0.019,0.4219,0.2793,0.5703,0.2773],"Female_Child_01":[0.4981,0.4031,0.0322,0.0155,0.4316,0.2812,0.5645,0.2812],"Female_Child_02":[0.5,0.405,0.045,0.017,0.4258,0.2793,0.5605,0.2773]};
const MAKEUP={none:null,natural:{lip:"#c46b6b",la:.38,blush:"#e89a9a",ba:.45,sh:"#b08a7a",sa:.22,li:.25},nude:{lip:"#b5776a",la:.5,blush:"#e3a08c",ba:.35,sh:"#a07860",sa:.35,li:.45},
 pink:{lip:"#e75480",la:.7,blush:"#ff9fb5",ba:.65,sh:"#d98fb0",sa:.42,li:.35},glam:{lip:"#a3122a",la:.78,blush:"#e07a8a",ba:.55,sh:"#6b4a3a",sa:.55,li:.85},
 bold:{lip:"#c8102e",la:.92,blush:"#e58b8b",ba:.35,sh:"#4a3434",sa:.42,li:1},smoky:{lip:"#9c5a5a",la:.55,blush:"#d9908a",ba:.35,sh:"#2b2b33",sa:.8,li:1}};
const LIPS=["#c8102e","#a3122a","#7b1e3a","#e75480","#ff7aa2","#c46b6b","#b5776a","#d4766e","#8e3b5f","#ff6f61"];
Object.assign(WDEF,{mk:"natural",lipc:"",beauty:true,skin:true});WOPTS.mk=["none","natural","nude","pink","glam","bold","smoky"];
LOOKS.garden.mk="natural";LOOKS.gala.mk="glam";LOOKS.office.mk="nude";LOOKS.summer.mk="pink";LOOKS.wedding.mk="natural";LOOKS.rock.mk="smoky";
LOOKS.glamnight={o:"gown",c:"#7b1e3a",p:"sequins",legs:"keep",hair:"orig",neck:"pendant",ear:"drops",ring:"solitaire",wrist:"bangle",head:"tiara",eyes:"none",metal:"gold",gem:"ruby",mk:"glam"};
UI6.en.lk_glamnight=UI14.en.lk_glam;PACKS.en.ui.lk_glamnight=UI14.en.lk_glam;PACKS.vi.ui.lk_glamnight=UI14.vi.lk_glam;
const HEAD_GLSL=`uniform vec2 uLipC,uLipR,uEyeL,uEyeR;uniform vec3 uLip,uBlush,uShadow;uniform float uLipA,uBlushA,uShadowA,uLiner,uMkOn;`;
function patchHead(mat,U){
  mat.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);
    sh.fragmentShader=sh.fragmentShader.replace("#include <common>","#include <common>\n"+HEAD_GLSL).replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
if(uMkOn>.5){vec2 fuv=vMapUv;float lum=dot(diffuseColor.rgb,vec3(.299,.587,.114));float es=max(.05,distance(uEyeL,uEyeR));
 vec2 ld=(fuv-uLipC)/uLipR;float lm=1.-smoothstep(.55,1.05,length(ld));float red=clamp((diffuseColor.r-diffuseColor.g)*3.2,0.,1.);lm*=smoothstep(.06,.3,red);
 diffuseColor.rgb=mix(diffuseColor.rgb,uLip*(.38+1.05*lum),lm*uLipA);
 vec2 c1=uEyeL+vec2(-.16*es,.62*es),c2=uEyeR+vec2(.16*es,.62*es);
 float b=max(1.-smoothstep(0.,.45*es,length((fuv-c1)*vec2(1.,1.3))),1.-smoothstep(0.,.45*es,length((fuv-c2)*vec2(1.,1.3))));
 diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*uBlush*1.25,b*uBlushA*.3);
 for(int i=0;i<2;i++){vec2 e=i==0?uEyeL:uEyeR;vec2 d=(fuv-(e+vec2(0.,-.13*es)))/vec2(.27*es,.1*es);float s=(1.-smoothstep(.35,1.,length(d)))*smoothstep(e.y-.03*es,e.y-.07*es,fuv.y);
  diffuseColor.rgb=mix(diffuseColor.rgb,mix(diffuseColor.rgb,uShadow*(.5+.8*lum),.7),s*uShadowA*.55);
  float ly=e.y-.07*es;float lx=abs(fuv.x-e.x)/(.27*es);float liner=(1.-smoothstep(.0012,.0032,abs(fuv.y-(ly+lx*lx*.025*es))))*(1.-smoothstep(.8,1.,lx));
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.08,.05,.05),liner*uLiner*.7);}
}
#endif`)};
  mat.customProgramCacheKey=()=>"fhoHead";mat.needsUpdate=true;
}
{const _wim=wInitModel;wInitModel=function(){_wim();const c=cur3d(),fc=FACE[c.f];W.headU=null;W.headMat=null;if(!fc||c.g!=="f")return;const THREE=E.T;
  W.headU={uMkOn:{value:0},uLipC:{value:new THREE.Vector2(fc[0],fc[1])},uLipR:{value:new THREE.Vector2(fc[2],fc[3])},uEyeL:{value:new THREE.Vector2(fc[4],fc[5])},uEyeR:{value:new THREE.Vector2(fc[6],fc[7])},
    uLip:{value:new THREE.Color()},uBlush:{value:new THREE.Color()},uShadow:{value:new THREE.Color()},uLipA:{value:0},uBlushA:{value:0},uShadowA:{value:0},uLiner:{value:0}};
  E.model.traverse(o=>{if(o.isSkinnedMesh&&/head/i.test(o.material.name||"")){patchHead(o.material,W.headU);W.headMat=o.material;W.headNS=o.material.normalScale?o.material.normalScale.x:.8;W.headR=o.material.roughness}})};}
{const _aw=applyWard;applyWard=function(){if(E.vrm)return;_aw();if(!E.model)return;const cfg=wcfg();
  if(W.headU){const m=MAKEUP[cfg.mk];W.headU.uMkOn.value=m?1:0;if(m){W.headU.uLip.value.set(cfg.lipc||m.lip);W.headU.uLipA.value=m.la;W.headU.uBlush.value.set(m.blush);W.headU.uBlushA.value=m.ba;W.headU.uShadow.value.set(m.sh);W.headU.uShadowA.value=m.sa;W.headU.uLiner.value=m.li}
    if(W.headMat){const soft=cfg.skin!==false;if(W.headMat.normalScale)W.headMat.normalScale.setScalar(soft?.32:W.headNS);W.headMat.roughness=soft?.62:W.headR}}
  beautyLight(cfg.beauty!==false)};}
function beautyLight(on){const THREE=E.T;if(!E.scene)return;
  if(on&&!E.bl){E.bl=new THREE.Group();const key=new THREE.DirectionalLight(0xffe6dc,.55);key.position.set(.6,1.8,2.2);const rim=new THREE.DirectionalLight(0xdfe8ff,.9);rim.position.set(-1.2,2,-1.5);const fill=new THREE.PointLight(0xffd7e0,.6,4);fill.position.set(0,1.5,1.2);E.bl.add(key,rim,fill);E.scene.add(E.bl);E.blExp=E.renderer.toneMappingExposure;E.renderer.toneMappingExposure=(E.blExp||1.05)*1.06}
  if(!on&&E.bl){E.scene.remove(E.bl);E.bl=null;E.renderer.toneMappingExposure=E.blExp||1.05}}
/* wardrobe UI: makeup, lip colour, beauty light, soft skin */
{const _rw=renderWard;renderWard=function(){_rw();const d=$("#wardDrawer");if(!d||E.vrm)return;const cfg=wcfg();
  const chip=(txt,on,fn)=>h("button",{type:"button",class:"wchip"+(on?" on":""),"aria-pressed":on,onclick:fn},txt);
  const sec=(lab,...kids)=>{const s=h("div",{class:"ward-sec"},h("span",{class:"label"},lab));const row=h("div",{class:"ward-row"});kids.flat().forEach(x=>row.append(x));s.append(row);return s};
  const looks=d.querySelector(".ward-sec");const after=looks?looks.nextSibling:null;const frag=document.createDocumentFragment();
  if(W.headU){frag.append(sec("💄 "+TT("w_makeup"),WOPTS.mk.map(v=>chip(TT("mk_"+v),cfg.mk===v,()=>{wset({mk:v});renderWard()}))));
    frag.append(sec(TT("w_lips"),LIPS.map(c=>h("button",{type:"button",class:"wswatch"+(cfg.lipc===c?" on":""),"aria-label":c,style:"background:"+c,onclick:()=>{wset({lipc:c,mk:cfg.mk==="none"?"natural":cfg.mk});renderWard()}}))))}
  frag.append(sec("✨ "+TT("w_beauty"),chip(TT("on"),cfg.beauty!==false,()=>{wset({beauty:true});renderWard()}),chip(TT("off"),cfg.beauty===false,()=>{wset({beauty:false});renderWard()}),W.headU?chip("🫧 "+TT("w_skin"),cfg.skin!==false,()=>{wset({skin:cfg.skin===false});renderWard()}):[]));
  d.insertBefore(frag,after);}}

/* ================= v11: anime-style VRM characters (built-in + your own) ================= */
const UI13={
 en:{vr_anime:"Anime style",vr_add:"＋ Anime (.vrm)",vr_loading:"Loading {n}…",vr_fail:"Couldn't open that file. Is it a .vrm character?",vr_note:"Design your own anime character for free in VRoid Studio, export it as .vrm and add it here. Only upload characters you have the right to use.",vr_ward:"Outfits and jewellery work on the realistic people. Anime characters keep their own style.",vr_del:"Remove"},
 vi:{vr_anime:"Phong cách anime",vr_add:"＋ Anime (.vrm)",vr_loading:"Đang tải {n}…",vr_fail:"Không mở được tệp này. Đây có phải nhân vật .vrm không?",vr_note:"Tự thiết kế nhân vật anime miễn phí bằng VRoid Studio, xuất ra .vrm rồi thêm vào đây. Chỉ tải lên nhân vật bạn có quyền sử dụng.",vr_ward:"Trang phục và trang sức dùng cho người thật 3D. Nhân vật anime giữ phong cách riêng.",vr_del:"Xoá"}};
for(const k of ["en","vi"])Object.assign(PACKS[k].ui,UI13[k]);
const VRM_BUILTIN=[{id:"aiko",name:"Aiko",path:"vrm/aiko/",g:"f",age:"adult",thumb:"vrm/aiko.jpg"}];
/* IndexedDB for user .vrm files (too big for localStorage) */
const VDB={db:null,open(){if(this.db)return Promise.resolve(this.db);return new Promise((res,rej)=>{try{const r=indexedDB.open("fho",1);r.onupgradeneeded=()=>r.result.createObjectStore("vrm",{keyPath:"id"});r.onsuccess=()=>{this.db=r.result;res(this.db)};r.onerror=()=>rej(r.error)}catch(e){rej(e)}})},
  async all(){try{const db=await this.open();return await new Promise(r=>{const q=db.transaction("vrm").objectStore("vrm").getAll();q.onsuccess=()=>r(q.result||[]);q.onerror=()=>r([])})}catch(e){return []}},
  async put(o){const db=await this.open();return new Promise(r=>{const t=db.transaction("vrm","readwrite");t.objectStore("vrm").put(o);t.oncomplete=()=>r(true);t.onerror=()=>r(false)})},
  async del(id){const db=await this.open();return new Promise(r=>{const t=db.transaction("vrm","readwrite");t.objectStore("vrm").delete(id);t.oncomplete=()=>r(true)})}};
let VUSER=[];VDB.all().then(l=>{VUSER=l.map(x=>({id:x.id,name:x.name,thumb:x.thumb,g:"f",age:"adult",user:true}))});
async function loadVRMFrom(meta,buf,path){
  if(!E.ready){const ok=await init3d();if(!ok)return false}
  const THREE=E.T,my=++E.loadId;const ov=$("#s3dLoad");if(ov){ov.hidden=false;ov.textContent=fill(TT("vr_loading"),{n:meta.name})}
  try{const loader=new E.GLTFLoader();loader.register(p=>new window.FHO3D.VRMLoaderPlugin(p));
    const gltf=await loader.parseAsync(buf,path||"");if(my!==E.loadId)return false;const vrm=gltf.userData.vrm;if(!vrm)throw new Error("not a VRM");
    const U=window.FHO3D.VRMUtils;try{U.removeUnnecessaryVertices(gltf.scene)}catch(e){}try{U.combineSkeletons&&U.combineSkeletons(gltf.scene)}catch(e){}try{U.rotateVRM0(vrm)}catch(e){}
    clearWard();W.uni=null;W.fit=null;
    if(E.model){E.root.remove(E.model);E.model.traverse(o=>{if(o.isMesh){o.geometry.dispose();[].concat(o.material).forEach(m=>{for(const k in m)if(m[k]&&m[k].isTexture)m[k].dispose();m.dispose()})}})}
    if(E.vrm){try{U.deepDispose(E.vrm.scene)}catch(e){}}
    vrm.scene.traverse(o=>{o.frustumCulled=false});
    E.root.rotation.set(0,0,0);E.root.position.set(0,0,0);E.root.scale.set(1,1,1);E.root.add(vrm.scene);E.model=vrm.scene;E.vrm=vrm;E.vrmMeta=meta;
    E.root.updateMatrixWorld(true);vrm.update(0);const box=new THREE.Box3().setFromObject(vrm.scene);E.root.position.y-=box.min.y;E.root.position.x-=(box.min.x+box.max.x)/2;E.root.position.z-=(box.min.z+box.max.z)/2;E.root.userData.baseY=E.root.position.y;
    E.bones={head:vrm.humanoid.getRawBoneNode("head")};E.char="vrm:"+meta.id;store.set("vrmSel",meta.id);
    if(vrm.lookAt){vrm.lookAt.target=E.camera;vrm.lookAt.autoUpdate=true}
    E.vg=null;E.vblinkAt=0;E.queue=[];E.cur=null;frameCam(true);
    $("#stageName").textContent=meta.name+" · "+MODES[S.mode].em+" "+modeName(S.mode);
    if(meta.thumb)$("#mascotSlot").innerHTML='<img id="mascot" class="mascot" src="'+meta.thumb+'" alt="" style="border-radius:50%;object-fit:cover;border:2px solid var(--brass)">';
    if(ov)ov.hidden=true;if(!E.raf)E.raf=requestAnimationFrame(loop3);return true}
  catch(e){console.warn(e);if(ov)ov.hidden=true;toast(TT("vr_fail"));return false}}
async function loadVRMBuiltin(v){const r=await fetch(v.path+"model.json");const js=await r.json();const b64=js.extras.fhoBin;delete js.extras.fhoBin;const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));return loadVRMFrom(v,toGLB(js,bin),v.path)}
async function loadVRMUser(id){const db=await VDB.open();const rec=await new Promise(r=>{const q=db.transaction("vrm").objectStore("vrm").get(id);q.onsuccess=()=>r(q.result);q.onerror=()=>r(null)});if(!rec)return false;return loadVRMFrom({id:rec.id,name:rec.name,thumb:rec.thumb,g:"f",age:"adult"},rec.buf,"")}
const vrmChar=()=>E.vrm&&E.vrmMeta?{id:E.vrmMeta.id,name:E.vrmMeta.name,g:E.vrmMeta.g||"f",age:"adult",pitch:1.12,rate:1.02}:null;
{const _lc2=loadChar3d;loadChar3d=async function(id){if(E.vrm){try{E.root.remove(E.vrm.scene);window.FHO3D.VRMUtils.deepDispose(E.vrm.scene)}catch(e){}E.model=null;E.vrm=null;E.vrmMeta=null;store.set("vrmSel","")}return _lc2(id)};}
{const _p3=play3;play3=function(name,keep){if(E.vrm){E.vg={n:name,start:performance.now()};return}return _p3(name,keep)};}
{const _wo=wardOpen;wardOpen=function(){if(E.vrm){toast(TT("vr_ward"));return}return _wo()};}
/* animation for VRM (normalized humanoid rig) */
function vrmLoop(ts){
  E.raf=requestAnimationFrame(loop3);if(!E.ready||!E.vrm||document.hidden)return;if(ts-E.last<28)return;const dt=Math.min(.1,(ts-E.last)/1000);E.last=ts;
  const THREE=E.T,vrm=E.vrm,hum=vrm.humanoid,n=k=>hum.getNormalizedBoneNode(k),em=vrm.expressionManager;
  const speaking=("speechSynthesis" in window&&speechSynthesis.speaking)||ts<ST.talkUntil;const face=ts<ST.faceUntil?ST.face:null;
  const t=ts/1000,br=Math.sin(t*1.6)*.025,sw=Math.sin(t*.45)*.04;
  const g=E.vg&&ts-E.vg.start<2200?E.vg:null;const gp=g?Math.min(1,(ts-g.start)/350)*Math.min(1,(2200-(ts-g.start))/400):0;const wv=Math.sin((ts-(g?g.start:0))/130);
  const set=(k,x,y,z)=>{const b=n(k);if(b)b.rotation.set(x,y,z)};
  let lU=[0,0,1.2],rU=[0,0,-1.2],lL=[0,0,.12],rL=[0,0,-.12],sp=[br,sw*.5,0],hd=[0,0,Math.sin(t*.7)*.03];
  if(speaking&&!g){rL=[0,-.6,-.9];rU=[0,.2,-1.0+Math.sin(t*2.2)*.08];lL=[0,.3,.4]}
  if(g){const k=g.n;
    if(k==="wave"){rU=[0,0,-1.2+2.4*gp];rL=[0,0,-.35*gp+wv*.35*gp]}
    else if(k==="cheer"||k==="dance"){rU=[0,0,-1.2+2.5*gp];lU=[0,0,1.2-2.5*gp];sp=[br,Math.sin(t*6)*.12*gp,0]}
    else if(k==="nod"){hd=[Math.sin((ts-g.start)/160)*.2*gp,0,0]}
    else if(k==="bow"){sp=[.4*gp,0,0];hd=[.2*gp,0,0]}
    else if(k==="think"){rU=[0,.6*gp,-1.2+.5*gp];rL=[0,-2.2*gp,0];hd=[-.08*gp,0,.12*gp]}
    else if(k==="shrug"){lU=[0,0,1.2-.3*gp];rU=[0,0,-1.2+.3*gp];lL=[0,1.2*gp,.2];rL=[0,-1.2*gp,-.2];hd=[0,0,.15*gp]}
    else if(k==="heart"){lU=[0,-.5*gp,1.2-.8*gp];rU=[0,.5*gp,-1.2+.8*gp];lL=[0,1.6*gp,0];rL=[0,-1.6*gp,0]}
    else if(k==="laugh"){sp=[br-.1*gp,0,0];hd=[-.15*gp,0,0]}
    else if(k==="listen"||k==="mystic"){hd=[0,0,.18*gp]}}
  for(const v of [lU,rU,lL,rL])v[2]=-v[2];
  set("leftUpperArm",...lU);set("rightUpperArm",...rU);set("leftLowerArm",...lL);set("rightLowerArm",...rL);set("spine",...sp);set("chest",br*.6,0,0);set("neck",hd[0]*.4,hd[1]*.4,hd[2]*.4);set("head",hd[0]*.6,hd[1]*.6+sw*.3,hd[2]*.6);
  if(em){if(ts>E.vblinkAt&&!E.vblinkEnd)E.vblinkEnd=ts+150;let bl=0;if(E.vblinkEnd){if(ts<E.vblinkEnd)bl=1;else{E.vblinkEnd=0;E.vblinkAt=ts+1800+Math.random()*3400}}
    const m=speaking?mouthTarget(ts,true):0;E.vm=(E.vm||0)+(m-(E.vm||0))*.45;
    const happy=face==="happy"||face==="laugh"||(g&&["cheer","laugh","heart","wave","dance"].includes(g.n));
    em.setValue("happy",happy?.75:speaking?.12:.08);em.setValue("sad",face==="sad"?.7:0);em.setValue("surprised",face==="surprised"?.7:0);
    em.setValue("blink",happy?0:bl);em.setValue("aa",E.vm*.85);em.setValue("oh",speaking&&Math.sin(ts/90)>.6?E.vm*.3:0)}
  vrm.update(dt);
  E.root.position.y=E.root.userData.baseY;
  if(E.camTgt){const a=Math.sin(ts/5200)*.06,tg=E.camTgt,d=E.camDist;const want=new THREE.Vector3(tg.x+Math.sin(a)*d,tg.y+.03+Math.sin(ts/4300)*.012,tg.z+Math.cos(a)*d);E.camera.position.lerp(want,Math.min(1,dt*2.5));E.camera.lookAt(tg)}
  E.renderer.render(E.scene,E.camera);
}
{const _l4=loop3;loop3=function(ts){if(E.vrm)return vrmLoop(ts);return _l4(ts)};}
/* sheet: anime row */
const vrmFile=h("input",{type:"file",accept:".vrm,model/gltf-binary",hidden:true});document.body.append(vrmFile);
vrmFile.onchange=async()=>{const f=vrmFile.files[0];if(!f)return;const buf=await f.arrayBuffer();const id="u"+Date.now().toString(36);const name=f.name.replace(/\.vrm$/i,"").slice(0,20)||"Anime";
  const ok=await loadVRMFrom({id,name,g:"f",age:"adult"},buf.slice(0),"");if(!ok)return;
  setTimeout(async()=>{let thumb="";try{E.renderer.render(E.scene,E.camera);const c=document.createElement("canvas");c.width=c.height=112;const sc=E.canvas;const s=Math.min(sc.width,sc.height)*.55;c.getContext("2d").drawImage(sc,(sc.width-s)/2,sc.height*.08,s,s,0,0,112,112);thumb=c.toDataURL("image/jpeg",.8)}catch(e){}
    await VDB.put({id,name,buf,thumb});VUSER.push({id,name,thumb,g:"f",age:"adult",user:true});E.vrmMeta.thumb=thumb;renderSheet()},1200);toast("✓ "+name)};
{const _rs4=renderSheet;renderSheet=function(){_rs4();if(!(E.on&&sheetMode==="chars"))return;const sh=$("#stageSheet");
  const items=[...VRM_BUILTIN,...VUSER].map(v=>{const it=h("button",{type:"button",class:"sheet-item","data-ph":"1","aria-pressed":E.char==="vrm:"+v.id,onclick:async()=>{if(typeof PH!=="undefined"&&PH.active)phStop();const ok=v.user?await loadVRMUser(v.id):await loadVRMBuiltin(v);if(ok){renderSheet();play3("wave");speakAs(vrmChar()||cur3d(),fill(HI_IM[replyLang()]||HI_IM.en,{n:v.name}))}}},
      v.thumb?h("img",{src:v.thumb,alt:"",style:"width:51px;height:51px;border-radius:50%;object-fit:cover"}):h("span",{class:"em"},"🌸"),h("span",null,"🌸 "+v.name));
    if(v.user)it.append(h("span",{class:"del",role:"button","aria-label":TT("vr_del"),onclick:async e=>{e.stopPropagation();await VDB.del(v.id);VUSER=VUSER.filter(x=>x!==v);renderSheet()}},"✕"));return it});
  const add=h("button",{type:"button",class:"sheet-item","data-ph":"1",title:TT("vr_note"),onclick:()=>{toast(TT("vr_note"));vrmFile.value="";vrmFile.click()}},h("span",{class:"em"},"🌸"),h("span",null,TT("vr_add")));
  const anchor=sh.querySelector(".sheet-item:not([data-ph])");items.forEach(it=>sh.insertBefore(it,anchor));sh.insertBefore(add,anchor);
  sh.querySelectorAll(".sheet-item:not([data-ph])").forEach(el=>{if(E.vrm&&el.getAttribute("aria-pressed")==="true")el.setAttribute("aria-pressed","false")});}}
/* restore the last anime character on start */
setTimeout(()=>{const id=store.get("vrmSel","");if(!id||!S.stage3d)return;const tryLoad=()=>{if(!E.ready||!E.model){setTimeout(tryLoad,800);return}const b=VRM_BUILTIN.find(v=>v.id===id);if(b)loadVRMBuiltin(b);else loadVRMUser(id)};tryLoad()},1500);

/* ================= v11: Coach ================= */
const PROGRAMS=[
{id:"confidence",em:"💪",t:"Confidence boost",d:"Seven small daily steps to trust yourself more.",days:[
 ["Notice your inner voice","Confidence starts with how you talk to yourself. Most of us say things to ourselves we'd never say to a friend.","What is one harsh thing you often tell yourself? How would a kind friend say it instead?","Write the kind version on a sticky note or your phone lock screen."],
 ["Collect evidence","Your brain remembers failures more than wins. Confidence grows when you deliberately collect proof that you can do things.","List three things you handled well in the past year, big or small.","Start a 'wins' note and add one win tonight."],
 ["Body first","Posture and breathing change how confident you feel within minutes. Stand tall, relax your shoulders, breathe slowly.","When do you feel smallest during the day?","Before your next challenging moment, take three slow breaths and stand tall for 30 seconds."],
 ["Tiny brave act","Confidence is built by doing, not thinking. Small acts of courage add up fast.","What's one slightly uncomfortable thing you've been avoiding?","Do one 2-minute brave act today: send the message, ask the question, or speak first."],
 ["Handle mistakes","Confident people still make mistakes. They just treat them as information, not as proof they're not good enough.","What mistake are you still replaying in your head? What did it teach you?","Say out loud: 'That was a mistake, not a verdict.' Then name one lesson."],
 ["Your strengths","Knowing your strengths gives you something solid to stand on.","Which three words would people who love you use to describe you?","Ask one friend: 'What do you think I'm good at?'"],
 ["Keep going","You practised self-talk, evidence, posture, courage, mistakes and strengths. That's a toolkit you can use every day.","Which of this week's tools helped most?","Plan your next brave act for this week and put it in your calendar."]]},
{id:"stress",em:"🌿",t:"Stress less",d:"Calm your mind and body in one week.",days:[
 ["Name it to tame it","Simply naming what you feel ('I'm anxious about the deadline') calms the brain's alarm system.","What's stressing you most right now, in one sentence?","Three times today, pause and name your feeling in a few words."],
 ["Breathe 4-6","Longer exhales slow your heart rate. Breathe in for 4 counts, out for 6, for one minute.","When during the day does stress hit you hardest?","Set two reminders for a 1-minute 4-6 breathing break."],
 ["Control what you can","Stress grows when we focus on things we can't control. Split your worries into 'can control' and 'can't control'.","What's in your control about your biggest worry?","Take one small action on something you can control."],
 ["Move it out","Even 10 minutes of walking lowers stress hormones and clears your head.","How do you usually release tension?","Take a 10-minute walk today, ideally outside."],
 ["Worry window","Give worries a 15-minute appointment instead of letting them run all day.","What worries keep coming back?","Schedule a 15-minute worry window. Write worries down, then close the notebook."],
 ["Boundaries","Many stresses come from saying yes too often. A kind, clear no protects your energy.","Where do you need to say no or not now?","Practise one boundary sentence: 'I can't take that on this week, but I can help next week.'"],
 ["Your calm plan","You've built a toolkit: naming, breathing, control, movement, worry window and boundaries.","Which two tools will you keep using?","Write your personal 'calm plan' with your top two tools."]]},
{id:"habit",em:"🔁",t:"Build a habit",d:"Make one good habit stick, the easy way.",days:[
 ["Pick one habit","Trying to change everything at once fails. Choose ONE habit that would make the biggest difference.","Which single habit would improve your life most?","Write it as: 'I am someone who...' (for example: '...moves every day')."],
 ["Make it tiny","Start so small it feels silly: 2 push-ups, 1 page, 2 minutes. Consistency beats intensity.","What's the tiniest version of your habit?","Do the tiny version today."],
 ["Anchor it","Attach your habit to something you already do: 'After I pour my coffee, I will...'.","What daily routine could be your anchor?","Write your anchor sentence and do it."],
 ["Make it obvious","Put cues where you'll see them: shoes by the door, book on the pillow.","What would remind you automatically?","Set up one visual cue for tomorrow."],
 ["Make it satisfying","Habits stick when they feel rewarding right away. Tick a box, smile, celebrate.","How will you reward yourself instantly?","Track today with a tick and a tiny celebration."],
 ["Never miss twice","Missing one day is normal. Missing two starts a new habit of not doing it.","What usually makes you skip?","Make a plan for your hardest day: what's your minimum version?"],
 ["Level up","After a week, you can grow the habit a little, but only if it still feels easy.","How did this week feel?","Decide your next small step up, and keep the streak going."]]},
{id:"sleep",em:"😴",t:"Better sleep",d:"Sleep deeper and wake up fresher.",days:[
 ["Same wake time","A consistent wake-up time, even on weekends, is the strongest sleep signal for your body clock.","What time do you want to wake up every day?","Set one alarm for the same time all week."],
 ["Morning light","Bright light within an hour of waking sets your rhythm and helps you sleep at night.","How much daylight do you get in the morning?","Spend 10 minutes outside or by a window after waking."],
 ["Caffeine cut-off","Caffeine stays in your body for many hours. Stop it about 8 hours before bed.","When is your last coffee or tea usually?","Move your last caffeine earlier today."],
 ["Wind-down routine","Your brain needs a runway to land. 30 minutes of calm signals 'sleep is coming'.","What do you do in the last hour before bed?","Create a 3-step wind-down: dim lights, stretch, read."],
 ["Screens and thoughts","Phones keep your mind busy. Write tomorrow's to-do list to empty your head.","What keeps you awake: screens or thoughts?","Put your phone away 30 minutes before bed and write a short to-do list."],
 ["Bedroom reset","Cool, dark and quiet works best. Your bed is for sleep, not work.","What's one thing in your bedroom that disturbs sleep?","Fix one thing: cover a light, cool the room, or remove work stuff."],
 ["Your sleep plan","Consistency matters more than perfection.","Which change made the biggest difference?","Write your sleep plan with your three best changes."]]},
{id:"career",em:"🚀",t:"Career growth",d:"Get clear and take the next step at work.",days:[
 ["Where you are","Growth starts with an honest picture. What energises you at work, and what drains you?","What do you love and what do you dislike about your work?","List 3 energisers and 3 drainers."],
 ["Where you want to be","Picture yourself two years from now on a great workday. Be specific.","What are you doing, with whom, and how do you feel?","Write a short 'future me' paragraph."],
 ["Skills gap","Compare your future picture with today. Which skills or experiences are missing?","Which one skill would open the most doors?","Find one free resource to learn that skill."],
 ["Visibility","Good work isn't enough if no one knows about it. Share progress, not just problems.","Who should know more about your work?","Send one short update about a win to your manager or team."],
 ["Network","Most opportunities come through people. Reconnect with someone you admire.","Who could you learn from?","Send one friendly message to reconnect or ask a question."],
 ["Ask for it","Asking for feedback, a project or a raise feels scary, but people respect clear asks.","What do you need to ask for?","Write and practise your ask in two sentences."],
 ["90-day plan","Turn your vision into three concrete goals for the next 90 days.","What are your three 90-day goals?","Create a goal in the Goals tool and add the first steps."]]},
{id:"money",em:"💰",t:"Money reset",d:"Feel calmer and more in control of money.",days:[
 ["Money feelings","How we feel about money shapes our choices. No judgement, just notice.","What feeling comes up when you think about money?","Write one sentence about your money story from childhood."],
 ["Where it goes","Awareness beats willpower. Look at last month's spending without judging it.","What surprised you about your spending?","List your top 5 spending categories."],
 ["Small leaks","Subscriptions and small daily spends add up quietly.","Which small spend could you cut without missing it?","Cancel or pause one subscription or habit spend."],
 ["Pay yourself first","Save automatically on payday, even a small amount, before you spend.","What amount could you save without stress?","Set up an automatic transfer, even a tiny one."],
 ["Safety net","An emergency fund turns crises into inconveniences. Start with a first small target.","What would one month of essential costs be?","Choose your first emergency-fund target."],
 ["Debt plan","If you have debts, list them and attack one at a time while paying minimums on others.","Which debt bothers you most?","Write all debts with amounts and interest, and pick your focus debt."],
 ["Money goals","Money is a tool for the life you want.","What are you saving for that excites you?","Create a money goal in the Goals tool."]]},
{id:"relationships",em:"❤️",t:"Better relationships",d:"Deeper connection with the people who matter.",days:[
 ["Who matters","Relationships are the biggest predictor of happiness. Who are your important people?","Who are the five people who matter most to you?","Send one of them a message just to say you're thinking of them."],
 ["Really listen","Most of us listen to reply. Try listening to understand: no fixing, no advice, just curiosity.","When did you last feel truly heard?","In one conversation today, only ask questions and reflect back."],
 ["Appreciation","Specific thanks lands deeper than general thanks.","What do you appreciate about someone close but rarely say?","Tell them something specific you appreciate."],
 ["Repair","Every relationship has friction. What matters is repair: a sincere apology or check-in.","Is there a small tension you could repair?","Send a gentle repair message or start a calm conversation."],
 ["Ask for what you need","People can't read minds. Kind, clear requests prevent resentment.","What do you need more of from someone?","Use: 'I feel... when... Could we...?' once today."],
 ["Quality time","Undistracted time builds closeness. Phones away.","Who would you like more quality time with?","Plan 30 minutes of phone-free time with someone."],
 ["Your circle","Strong relationships need regular care.","Which habit from this week will you keep?","Set a weekly reminder to reach out to someone."]]},
{id:"speaking",em:"🎙️",t:"Speak with confidence",d:"Speak clearly in meetings, interviews and on stage.",days:[
 ["Your speaking voice","Most people speak too fast when nervous. A calm pace sounds confident.","When do you feel nervous speaking?","Use the Speaking coach for 1 minute on any topic and check your pace."],
 ["Pause power","Pauses feel long to you but sound confident to listeners. They replace 'um'.","Which filler words do you use most?","Do a 1-minute talk and replace fillers with short pauses."],
 ["Structure","Use 'Point, Reason, Example, Point' (PREP) to sound clear in any answer.","What's a question you often have to answer?","Answer it with PREP in the Speaking coach."],
 ["Stories","Stories make people remember you. Situation, challenge, action, result.","What's a short story that shows who you are?","Tell your story in under 90 seconds."],
 ["Body language","Open posture, eye contact and gestures support your words.","What does your body do when you're nervous?","Practise your story in front of a mirror or camera."],
 ["Handling questions","It's fine to pause and say 'Good question, let me think'.","Which question would you dread?","Practise answering it calmly with a pause first."],
 ["Show time","Confidence comes from practice, not from feeling ready.","Where will you use these skills next?","Speak up once this week: in a meeting, a class or a conversation."]]}];
const WHEEL=[["health","❤️","Health"],["career","💼","Career"],["money","💰","Money"],["love","💞","Love"],["family","👨‍👩‍👧","Family & friends"],["fun","🎉","Fun"],["growth","🌱","Growth"],["home","🏡","Home"]];
const WHEEL_PROG={health:"sleep",career:"career",money:"money",love:"relationships",family:"relationships",fun:"stress",growth:"confidence",home:"habit"};
const FILLERS=/\b(um+|uh+|erm*|ah+|like|you know|basically|actually|literally|i mean|kind of|sort of)\b/gi;
const SPEAK_TOPICS=["Introduce yourself in one minute.","What's the best advice you've ever received?","Describe your perfect weekend.","Tell me about a challenge you overcame.","Why should someone hire you?","What would you change about your city?","Explain your job to a 10-year-old.","What's a book, film or show you recommend, and why?","Describe a person who inspires you.","What's one skill everyone should learn?"];
const UI15={
 en:{co_title:"Coach",co_sub:"Small daily steps, real progress.",co_prog:"Programs",co_day:"Day {n} of 7",co_tip:"Today's idea",co_q:"Reflect",co_act:"Tiny action",co_save:"Save my answer",co_done:"✓ I did it",co_talk:"💬 Talk it through with my coach",co_start:"Start",co_cur:"Current program",co_finish:"Program complete! 🎉",co_next:"Come back tomorrow for Day {n}.",co_wheel:"Wheel of Life",co_wheelD:"Rate each area of your life from 1 to 10.",co_wheelSave:"Save my wheel",co_focus:"Your lowest area is {a}. Try the “{p}” program.",co_goals:"Goals",co_newGoal:"＋ New goal",co_g1:"What exactly do you want to achieve?",co_g2:"Why does it matter to you?",co_g3:"How will you measure success?",co_g4:"By when?",co_g5:"First 3 small steps (one per line)",co_gSave:"Create goal",co_speak:"Speaking coach",co_speakD:"Speak for about a minute. I'll measure your pace and filler words.",co_rec:"🎙️ Start speaking",co_stop:"■ Stop",co_type:"No microphone here? Type or paste what you said:",co_analyze:"Analyse",co_wpm:"{n} words/min",co_fill:"{n} filler words",co_var:"Word variety {n}%",co_score:"Score {n}/100",co_tips:"Tips",co_ai:"✨ AI feedback",co_week:"Weekly review",co_w1:"Wins this week",co_w2:"What was hard?",co_w3:"What did you learn?",co_w4:"Focus for next week",co_wSave:"Save review",co_mode:["Life Coach","Asks the right questions. Keeps you accountable."],co_tTalk:"Talk to my coach",co_new:"New topic",
  co_tipFast:"You're speaking fast. Aim for 130 to 160 words per minute and use pauses.",co_tipSlow:"A bit slow. Try a little more energy and shorter pauses.",co_tipGood:"Great pace!",co_tipFill:"Replace filler words with a short silent pause.",co_tipVar:"Try more varied words: synonyms make you sound more fluent.",co_tipShort:"Try to speak a little longer, about one minute."},
 vi:{co_title:"Huấn luyện",co_sub:"Bước nhỏ mỗi ngày, tiến bộ thật sự.",co_prog:"Chương trình",co_day:"Ngày {n}/7",co_tip:"Ý tưởng hôm nay",co_q:"Suy ngẫm",co_act:"Hành động nhỏ",co_save:"Lưu câu trả lời",co_done:"✓ Tôi đã làm",co_talk:"💬 Tâm sự với huấn luyện viên",co_start:"Bắt đầu",co_cur:"Chương trình hiện tại",co_finish:"Hoàn thành chương trình! 🎉",co_next:"Hẹn bạn ngày mai cho Ngày {n}.",co_wheel:"Bánh xe cuộc sống",co_wheelD:"Chấm điểm từng lĩnh vực cuộc sống từ 1 đến 10.",co_wheelSave:"Lưu bánh xe",co_focus:"Lĩnh vực thấp nhất của bạn là {a}. Thử chương trình “{p}”.",co_goals:"Mục tiêu",co_newGoal:"＋ Mục tiêu mới",co_g1:"Bạn muốn đạt được điều gì cụ thể?",co_g2:"Vì sao điều đó quan trọng với bạn?",co_g3:"Bạn đo lường thành công thế nào?",co_g4:"Hạn chót?",co_g5:"3 bước nhỏ đầu tiên (mỗi dòng một bước)",co_gSave:"Tạo mục tiêu",co_speak:"Huấn luyện nói",co_speakD:"Nói khoảng một phút. Mình sẽ đo tốc độ và từ đệm.",co_rec:"🎙️ Bắt đầu nói",co_stop:"■ Dừng",co_type:"Không có micro? Gõ hoặc dán nội dung bạn đã nói:",co_analyze:"Phân tích",co_wpm:"{n} từ/phút",co_fill:"{n} từ đệm",co_var:"Đa dạng từ {n}%",co_score:"Điểm {n}/100",co_tips:"Gợi ý",co_ai:"✨ Nhận xét bằng AI",co_week:"Tổng kết tuần",co_w1:"Thành công tuần này",co_w2:"Điều gì khó khăn?",co_w3:"Bạn học được gì?",co_w4:"Trọng tâm tuần tới",co_wSave:"Lưu tổng kết",co_mode:["Huấn luyện viên","Đặt câu hỏi đúng. Giúp bạn giữ cam kết."],co_tTalk:"Nói chuyện với huấn luyện viên",co_new:"Chủ đề mới",
  co_tipFast:"Bạn nói hơi nhanh. Hãy nhắm 130–160 từ/phút và dùng khoảng ngừng.",co_tipSlow:"Hơi chậm. Thêm chút năng lượng nhé.",co_tipGood:"Tốc độ tuyệt vời!",co_tipFill:"Thay từ đệm bằng một khoảng ngừng ngắn.",co_tipVar:"Dùng từ đa dạng hơn để nghe lưu loát hơn.",co_tipShort:"Hãy nói lâu hơn một chút, khoảng một phút."}};
for(const k of ["en","vi"]){Object.assign(PACKS[k].ui,UI15[k]);PACKS[k].modes.coach=UI15[k].co_mode}
PACKS.yue.modes.coach=["人生教練","問啱嘅問題，幫你堅持。"];
{const all=Object.entries(MODES);for(const [k] of all)delete MODES[k];for(const [k,v] of all){MODES[k]=v;if(k==="friend")MODES.coach={em:"🧭",pitch:.98,rate:.97,sys:"You are a supportive, insightful life coach.",open:["","","Good. ","Okay. "],wrap:t=>t}}renderModes();}
const CO=Object.assign({prog:null,ans:{},wheel:[],goals:[],speak:[],weekly:[]},store.get("coach",{}));
const saveCO=()=>store.set("coach",CO);
const progById=id=>PROGRAMS.find(p=>p.id===id);
function coachDay(){const P=CO.prog;if(!P)return null;const p=progById(P.id);if(!p)return null;return {p,day:P.day,unlocked:P.last!==dayKey()||P.day===0}}
/* ---------- AI + offline coach ---------- */
{const _sp3=sysPrompt;sysPrompt=function(){if(S.tutor||S.mode!=="coach")return _sp3();const c=E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar();const cd=coachDay();
  const goals=CO.goals.filter(g=>!g.done).slice(0,3).map(g=>"- "+g.t+(g.due?" (by "+g.due+")":"")).join("\n");const wl=CO.wheel[0];
  return "You are "+c.name+", a warm, sharp and practical life coach. Use the GROW model (Goal, Reality, Options, Will) naturally, without naming it. Ask ONE powerful open question at a time, reflect back what you hear, help the user find their own answers, and end each session with a concrete next step and a time. Hold them kindly accountable for previous commitments. "+
   "Keep replies to 2–4 short sentences, no lists unless asked. You are not a therapist or doctor; for mental-health crises, self-harm or danger, respond with care and point to local emergency services or a crisis line (988 in the US and Canada). "+langLine()+
   (cd?"\nThe user is on day "+(cd.day+1)+" of the program '"+cd.p.t+"'. Today's topic: "+cd.p.days[Math.min(cd.day,6)][0]+".":"")+(goals?"\nTheir active goals:\n"+goals:"")+(wl?"\nTheir latest Wheel of Life scores: "+WHEEL.map((w,i)=>w[2]+" "+wl.v[i]).join(", ")+".":"")+memBlock()};}
const COACHQ={en:{g:["What would you like to work on today?","If this went really well, what would it look like?","What do you want to be different a month from now?"],r:["Where are you with it right now, on a scale of 1 to 10?","What have you already tried?","What's getting in the way?"],o:["What are three ways you could approach this?","What would you advise a friend in your situation?","If you knew you couldn't fail, what would you do?"],w:["Which option will you take, and when exactly?","What's the very first small step?","On a scale of 1 to 10, how committed are you? What would make it a 10?"],
  close:["Great. I'll check in with you about it tomorrow. You've got this!","Love it. Small steps, big change. I'll ask you how it went."]},
 vi:{g:["Hôm nay bạn muốn tập trung vào điều gì?","Nếu mọi việc diễn ra thật tốt, nó sẽ trông như thế nào?"],r:["Hiện tại bạn đang ở mức nào, từ 1 đến 10?","Điều gì đang cản trở bạn?"],o:["Bạn có thể làm theo những cách nào?","Bạn sẽ khuyên một người bạn thế nào nếu họ ở vị trí của bạn?"],w:["Bạn sẽ chọn cách nào, và làm khi nào?","Bước nhỏ đầu tiên là gì?"],close:["Tuyệt. Ngày mai mình sẽ hỏi thăm nhé. Bạn làm được mà!"]}};
let CG=store.get("cg",{st:0,goal:""});
function coachReply(t){const vi=replyLang()==="vi";const Q=vi?COACHQ.vi:COACHQ.en;if(CRISIS.test(t))return TT("cm_crisis");extractMem(t);
  const st=CG.st||0;let out="";
  if(st===0){CG.goal=t.slice(0,80);out=(vi?"Mình hiểu. ":"Got it. ")+pick(Q.r);CG.st=1}
  else if(st===1){out=(vi?"Cảm ơn bạn đã chia sẻ thật lòng. ":"Thanks for being honest. ")+pick(Q.o);CG.st=2}
  else if(st===2){out=(vi?"Nhiều ý hay đấy. ":"Some good ideas there. ")+pick(Q.w);CG.st=3}
  else{const step=t.slice(0,80);addFollow((vi?"việc bạn cam kết: ":"your plan to ")+step.replace(/^(i'll|i will|i'm going to|i am going to)\s+/i,"").replace(/\bmy\b/gi,"your"),dayKey(new Date(Date.now()+864e5)));out=pick(Q.close);CG={st:0,goal:""};HB.add(5,"coach")}
  store.set("cg",CG);return out}
{const _spk2=sparkReply;sparkReply=function(raw){if(S.mode==="coach"&&!S.game&&!S.tutor)return coachReply(raw);return _spk2(raw)};}

/* ---------- UI (Today tab, top) ---------- */
function coachPanel(){const box=h("div",{class:"panel co-panel"});box.append(h("span",{class:"label"},"🧭 "+TT("co_title")),h("p",{class:"note"},TT("co_sub")));
  const cd=coachDay();
  if(cd&&cd.day<7){const d=cd.p.days[cd.day];box.append(h("div",{class:"co-cur"},h("b",null,cd.p.em+" "+cd.p.t+" · "+fill(TT("co_day"),{n:cd.day+1})),h("div",{class:"co-dtitle"},d[0]),
    cd.unlocked?h("button",{type:"button",class:"btn",onclick:()=>openProgDay()},TT("co_start")+" ▶"):h("p",{class:"note"},fill(TT("co_next"),{n:cd.day+1}))))}
  const tiles=h("div",{class:"ac-tiles"});const tile=(em,t,fn)=>h("button",{type:"button",class:"ac-tile",onclick:fn},h("span",{class:"em"},em),h("b",null,t));
  tiles.append(tile("📚",TT("co_prog"),openPrograms),tile("🎡",TT("co_wheel"),openWheel),tile("🎯",TT("co_goals"),openGoals),tile("🎙️",TT("co_speak"),openSpeak),tile("🗓️",TT("co_week"),openWeekly),
    tile("🧭",TT("co_tTalk"),()=>{S.mode="coach";store.set("mode","coach");renderModes();CG={st:0,goal:""};store.set("cg",CG);CMP.newChat("coach");switchTab("chat")}));
  box.append(tiles);
  const g=CO.goals.filter(x=>!x.done).slice(0,2);g.forEach(x=>{const pct=x.steps.length?Math.round(x.steps.filter(s=>s.done).length/x.steps.length*100):0;box.append(h("div",{class:"hb-q"},h("span",null,"🎯 "+x.t),h("span",{class:"ac-bar"},h("i",{style:"width:"+pct+"%"})),h("small",null,pct+"%")))});
  return box}
{const _rt=renderToday;renderToday=function(){_rt();const V=$("#view-today");const hero=V.querySelector(".ac-hero");V.insertBefore(coachPanel(),hero?hero.nextSibling:V.firstChild)};}
function modal(title){const m=h("div",{class:"hb-modal",role:"dialog","aria-label":title});const b=h("div",{class:"hb-box"});m.append(b);document.body.append(m);m.addEventListener("click",e=>{if(e.target===m)m.remove()});
  b.append(h("div",{class:"ward-head"},h("b",null,title),h("button",{type:"button",class:"btn ghost small",onclick:()=>m.remove()},"✕")));return {m,b,close:()=>{m.remove();if(!$("#view-today").hidden)renderToday()}}}
function openPrograms(){const {b,close}=modal("📚 "+TT("co_prog"));
  PROGRAMS.forEach(p=>{const cur=CO.prog&&CO.prog.id===p.id;b.append(h("div",{class:"co-prog"+(cur?" on":"")},h("span",{class:"ac-uem"},p.em),h("div",null,h("b",null,p.t),h("small",null,p.d+(cur?" · "+fill(TT("co_day"),{n:Math.min(7,CO.prog.day+1)}):""))),
    h("button",{type:"button",class:"btn small",onclick:()=>{if(!cur)CO.prog={id:p.id,day:0,start:dayKey(),last:""};saveCO();close();openProgDay()}},cur?"▶":TT("co_start"))))})}
function openProgDay(){const cd=coachDay();if(!cd)return openPrograms();if(cd.day>=7){toast(TT("co_finish"));return}const d=cd.p.days[cd.day];const {b,close}=modal(cd.p.em+" "+cd.p.t+" · "+fill(TT("co_day"),{n:cd.day+1}));
  const ta=h("textarea",{class:"ac-input",rows:"3"});ta.value=(CO.ans[cd.p.id]||{})[cd.day]||"";
  b.append(h("h2",{style:"text-align:left"},d[0]),h("span",{class:"label"},"💡 "+TT("co_tip")),h("p",null,d[1]," ",h("button",{type:"button",class:"btn ghost small",onclick:()=>speak(d[1],true)},"🔊")),
    h("span",{class:"label"},"🪞 "+TT("co_q")),h("p",null,h("b",null,d[2])),ta,
    h("span",{class:"label"},"⚡ "+TT("co_act")),h("p",null,d[3]),
    h("div",{class:"btn-row"},h("button",{type:"button",class:"btn",onclick:()=>{CO.ans[cd.p.id]=CO.ans[cd.p.id]||{};CO.ans[cd.p.id][cd.day]=ta.value.trim();CO.prog.day++;CO.prog.last=dayKey();saveCO();
        if(ta.value.trim()){DAYS.journal.unshift({d:dayKey(),t:"["+cd.p.t+"] "+d[2]+" → "+ta.value.trim(),m:""});saveDay();HB.ev("journal")}
        addFollow((replyLang()==="vi"?"hành động nhỏ: ":"your tiny action: ")+d[3].replace(/\.$/,"").toLowerCase(),dayKey(new Date(Date.now()+864e5)));HB.add(10,"coach");confetti();sfx("win");
        if(CO.prog.day>=7){toast(TT("co_finish"));HB.badge("quests")}close()}},TT("co_done")),
      h("button",{type:"button",class:"btn ghost",onclick:()=>{const txt=ta.value.trim();close();S.mode="coach";store.set("mode","coach");renderModes();CMP.newChat("coach");switchTab("chat");send((txt?txt+" ":"")+"("+cd.p.t+": "+d[0]+")")}},TT("co_talk"))));
  speak(d[0]+". "+d[1],true)}
function radar(vals,prev){const n=8,cx=110,cy=110,R=90,pt=(i,v)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*R*v/10,cy+Math.sin(a)*R*v/10]};
  const poly=v=>v.map((x,i)=>pt(i,x).join(",")).join(" ");let s='<svg viewBox="0 0 220 220" width="220" height="220" role="img" aria-label="Wheel of Life">';
  for(let r=2;r<=10;r+=2)s+='<polygon points="'+poly(Array(8).fill(r))+'" fill="none" stroke="rgba(255,255,255,.12)"/>';
  if(prev)s+='<polygon points="'+poly(prev)+'" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.35)" stroke-dasharray="3 3"/>';
  s+='<polygon points="'+poly(vals)+'" fill="rgba(227,176,75,.35)" stroke="#e3b04b" stroke-width="2"/>';
  WHEEL.forEach((w,i)=>{const [x,y]=pt(i,11.6);s+='<text x="'+x+'" y="'+y+'" font-size="15" text-anchor="middle" dominant-baseline="middle">'+w[1]+'</text>'});return s+'</svg>'}
function openWheel(){const {b,close}=modal("🎡 "+TT("co_wheel"));const last=CO.wheel[0];const vals=last?last.v.slice():Array(8).fill(5);
  const pic=h("div",{class:"co-radar"});const draw=()=>{pic.innerHTML=radar(vals,CO.wheel[1]&&CO.wheel[1].v)};draw();b.append(h("p",{class:"note"},TT("co_wheelD")),pic);
  WHEEL.forEach((w,i)=>{const out=h("b",null,String(vals[i]));const r=h("input",{type:"range",min:"1",max:"10",value:vals[i],"aria-label":w[2],oninput:e=>{vals[i]=+e.target.value;out.textContent=vals[i];draw()}});b.append(h("label",{class:"co-slider"},h("span",null,w[1]+" "+w[2]),r,out))});
  b.append(h("button",{type:"button",class:"btn",onclick:()=>{CO.wheel.unshift({d:dayKey(),v:vals.slice()});CO.wheel=CO.wheel.slice(0,24);saveCO();HB.add(5,"coach");const lo=vals.indexOf(Math.min(...vals));const p=progById(WHEEL_PROG[WHEEL[lo][0]]);
    toast(fill(TT("co_focus"),{a:WHEEL[lo][2],p:p.t}));close();if(!CO.prog||CO.prog.day>=7){openPrograms()}}},TT("co_wheelSave")))}
function openGoals(){const {b,close}=modal("🎯 "+TT("co_goals"));
  CO.goals.forEach(g=>{const pct=g.steps.length?Math.round(g.steps.filter(s=>s.done).length/g.steps.length*100):0;const card=h("div",{class:"panel co-goal"+(g.done?" done":"")},h("b",null,(g.done?"✅ ":"🎯 ")+g.t),h("small",{class:"note"},(g.why?"💛 "+g.why+" · ":"")+(g.metric?"📏 "+g.metric+" · ":"")+(g.due?"📅 "+g.due:"")),h("span",{class:"ac-bar"},h("i",{style:"width:"+pct+"%"})));
    g.steps.forEach(s=>card.append(h("div",{class:"dy-todo"+(s.done?" done":"")},h("button",{type:"button",class:"dy-chk",onclick:()=>{s.done=!s.done;if(s.done){HB.add(3,"goal");sfx("ding")}if(g.steps.every(x=>x.done)&&!g.done){g.done=true;confetti();HB.add(20,"goal")}saveCO();close();openGoals()}},s.done?"✓":""),h("span",null,s.t))));
    const add=h("input",{class:"ac-input",placeholder:"＋"});add.onkeydown=e=>{if(e.key==="Enter"&&add.value.trim()){g.steps.push({t:add.value.trim(),done:false});g.done=false;saveCO();close();openGoals()}};card.append(add,
      h("button",{type:"button",class:"btn ghost small",onclick:()=>{CO.goals=CO.goals.filter(x=>x!==g);saveCO();close();openGoals()}},"🗑️"));b.append(card)});
  const f=[h("input",{class:"ac-input",placeholder:TT("co_g1")}),h("input",{class:"ac-input",placeholder:TT("co_g2")}),h("input",{class:"ac-input",placeholder:TT("co_g3")}),h("input",{class:"ac-input",type:"date","aria-label":TT("co_g4")}),h("textarea",{class:"ac-input",rows:"3",placeholder:TT("co_g5")})];
  b.append(h("span",{class:"label"},TT("co_newGoal")),...f,h("button",{type:"button",class:"btn",onclick:()=>{if(!f[0].value.trim())return;CO.goals.unshift({id:Date.now(),t:f[0].value.trim(),why:f[1].value.trim(),metric:f[2].value.trim(),due:f[3].value,steps:f[4].value.split("\n").map(s=>s.trim()).filter(Boolean).map(t=>({t,done:false})),done:false});saveCO();HB.add(5,"goal");
    if(f[3].value)addFollow((replyLang()==="vi"?"mục tiêu: ":"your goal: ")+f[0].value.trim(),f[3].value);confetti();close();openGoals()}},TT("co_gSave")))}
function analyzeSpeech(text,secs){const words=(text.toLowerCase().match(/[a-z']+/g)||[]);const n=words.length;const wpm=secs>3?Math.round(n/(secs/60)):0;const fills=(text.match(FILLERS)||[]).length;const uniq=n?Math.round(new Set(words).size/n*100):0;
  let score=100;if(wpm&&(wpm<110||wpm>175))score-=Math.min(25,Math.abs(wpm-145)/2);score-=Math.min(30,fills*4);if(uniq<45)score-=10;if(n<60)score-=15;score=Math.max(5,Math.round(score));
  const tips=[];if(wpm>175)tips.push(TT("co_tipFast"));else if(wpm&&wpm<110)tips.push(TT("co_tipSlow"));else if(wpm)tips.push(TT("co_tipGood"));if(fills>2)tips.push(TT("co_tipFill"));if(uniq<45)tips.push(TT("co_tipVar"));if(n<60)tips.push(TT("co_tipShort"));
  return {n,wpm,fills,uniq,score,tips}}
function openSpeak(){const {b}=modal("🎙️ "+TT("co_speak"));let topic=pick(SPEAK_TOPICS);const tp=h("p",{class:"co-topic"},"🎲 "+topic);
  b.append(h("p",{class:"note"},TT("co_speakD")),tp,h("button",{type:"button",class:"btn ghost small",onclick:()=>{topic=pick(SPEAK_TOPICS);tp.textContent="🎲 "+topic}},"🎲 "+TT("co_new")));
  const timer=h("div",{class:"dy-timer"},"00:00"),out=h("div",{class:"co-out"}),live=h("p",{class:"note"});let t0=0,iv=0,rec=null,text="";
  const SRc=window.SpeechRecognition||window.webkitSpeechRecognition;
  const show=(txt,secs)=>{const r=analyzeSpeech(txt,secs);CO.speak.unshift({d:dayKey(),wpm:r.wpm,fill:r.fills,score:r.score});CO.speak=CO.speak.slice(0,40);saveCO();HB.ev("speak");HB.add(5,"coach");
    out.innerHTML="";out.append(h("div",{class:"stats"},...[[fill(TT("co_score"),{n:r.score}),"🏅"],[fill(TT("co_wpm"),{n:r.wpm||"—"}),"⏱️"],[fill(TT("co_fill"),{n:r.fills}),"🫢"],[fill(TT("co_var"),{n:r.uniq}),"🌈"]].map(([a,e])=>h("div",{class:"stat"},h("b",null,e),h("span",null,a)))),
      h("span",{class:"label"},TT("co_tips")),...r.tips.map(t=>h("p",null,"• "+t)),h("p",{class:"note"},"“"+txt.slice(0,400)+(txt.length>400?"…":"")+"”"));
    if(S.brainOn)out.append(h("button",{type:"button",class:"btn ghost",onclick:async e=>{e.target.disabled=true;const fb=await quickAI("You are a speaking coach. Topic: '"+topic+"'. The speaker said (speech-to-text): \""+txt.slice(0,1500)+"\". Give 3 short, kind, specific tips on structure, clarity and word choice, then one improved opening sentence. Under 90 words. "+langLine());out.append(h("p",null,fb||"—"))}},TT("co_ai")));
    if(r.score>=85)confetti()};
  const recBtn=h("button",{type:"button",class:"btn ac-mic",onclick:()=>{if(rec){rec.stop();return}if(!SRc){toast(T("micOff"));return}text="";rec=new SRc();rec.lang=(LANGS[replyLang()]&&LANGS[replyLang()].b)||"en-US";rec.continuous=true;rec.interimResults=true;
    rec.onresult=e=>{let fin="",int="";for(let i=0;i<e.results.length;i++){const r=e.results[i];if(r.isFinal)fin+=r[0].transcript+" ";else int+=r[0].transcript}text=fin;live.textContent=(fin+int).slice(-160)};
    rec.onend=()=>{clearInterval(iv);recBtn.textContent=TT("co_rec");recBtn.classList.remove("rec");const secs=(performance.now()-t0)/1000;rec=null;if(text.trim())show(text.trim(),secs)};
    rec.onerror=()=>{};t0=performance.now();iv=setInterval(()=>{timer.textContent=fmtT(Math.round((performance.now()-t0)/1000))},500);rec.start();recBtn.textContent=TT("co_stop");recBtn.classList.add("rec")}},TT("co_rec"));
  const ta=h("textarea",{class:"ac-input",rows:"3"});const secs=h("input",{type:"number",min:"10",max:"600",value:"60",class:"dy-time","aria-label":"seconds"});
  b.append(timer,h("div",{class:"btn-row",style:"justify-content:center"},recBtn),live,h("small",{class:"note"},TT("co_type")),ta,h("div",{class:"btn-row"},secs,h("span",{class:"note"},"s"),h("button",{type:"button",class:"btn ghost",onclick:()=>{if(ta.value.trim())show(ta.value.trim(),+secs.value||60)}},TT("co_analyze"))),out);
  if(CO.speak.length>1){const last=CO.speak.slice(0,8).reverse();b.append(h("div",{class:"hb-week"},...last.map(s=>h("div",{class:"hb-bar"+(s.score>=80?" hit":"")},h("i",{style:"height:"+Math.max(4,Math.round(s.score*.6))+"px"}),h("small",null,String(s.score))))))}}
function openWeekly(){const {b,close}=modal("🗓️ "+TT("co_week"));const f=["co_w1","co_w2","co_w3","co_w4"].map(k=>h("textarea",{class:"ac-input",rows:"2",placeholder:TT(k)}));
  f.forEach((x,i)=>b.append(h("span",{class:"label"},TT(["co_w1","co_w2","co_w3","co_w4"][i])),x));
  b.append(h("button",{type:"button",class:"btn",onclick:()=>{const r={d:dayKey(),w:f.map(x=>x.value.trim())};if(!r.w.some(Boolean))return;CO.weekly.unshift(r);CO.weekly=CO.weekly.slice(0,52);saveCO();HB.add(15,"coach");HB.ev("journal");
    if(r.w[3])addFact("Focus this week: "+r.w[3].slice(0,70),"goal");confetti();close()}},TT("co_wSave")));
  CO.weekly.slice(0,3).forEach(r=>b.append(h("div",{class:"dy-j"},h("small",null,r.d),h("span",null,"🏆 "+(r.w[0]||"—")+" · 🎯 "+(r.w[3]||"—")))))}
/* Sunday nudge for the weekly review */
setTimeout(()=>{if(new Date().getDay()===0&&(!CO.weekly[0]||CO.weekly[0].d!==dayKey())&&!store.get("wkNudge_"+dayKey(),false)){store.set("wkNudge_"+dayKey(),true);toast("🗓️ "+TT("co_week")+"?")}},6000);

/* ================= v12: Talk & Learn, anime girls, premium navigation ================= */
const UI16={
 en:{tl_title:"Talk & Learn",tl_sub:"Your personal teacher for anything: speak, listen and learn from beginner to advanced.",tl_any:"Any topic",tl_ask:"What do you want to learn today?",tl_askPh:"e.g. how the stock market works, guitar chords, Python…",tl_go:"Start class",tl_lv:["Beginner","Intermediate","Advanced"],tl_hf:"🎙️ Voice class (hands-free talk)",tl_needAI:"Teaching any topic needs an AI brain. Turn on a free one with one tap:",
  ai_title:"Turn on free AI",ai_device:"⚡ Free AI on this device",ai_deviceD:"Private, works offline after one download ({s}).",ai_chrome:"🌐 Chrome built-in AI",ai_chromeD:"Free, already on your computer (desktop Chrome).",ai_cloud:"🔑 Free cloud key (fastest on phones)",ai_cloudD:"Get a free key from Groq or Google in 1 minute.",ai_ready:"AI is on! Let's go.",ai_wait:"Downloading… you can keep using the app.",ai_noGpu:"This browser can't run AI on the device. Use the free cloud key option instead.",ai_preview:"Inside the Claude preview the AI download is blocked. Open your own site (keng89.github.io) to use it.",
  qs_learn:"Learn anything",qs_en:"English class",qs_talk:"Just talk",qs_coach:"Coach me",qs_play:"Play",tPlay:"Play",pl_games:"Games",pl_future:"Fortune",pl_wish:"Wishes",tm_mode:["Teacher","Teaches you anything, step by step."],
  ac_hf:"Hands-free",ac_hfOn:"Hands-free on: I'll talk you through it. Just answer out loud."},
 vi:{tl_title:"Nói & Học",tl_sub:"Giáo viên riêng cho mọi chủ đề: nói, nghe và học từ cơ bản đến nâng cao.",tl_any:"Mọi chủ đề",tl_ask:"Hôm nay bạn muốn học gì?",tl_askPh:"vd: thị trường chứng khoán, hợp âm guitar, Python…",tl_go:"Bắt đầu học",tl_lv:["Cơ bản","Trung cấp","Nâng cao"],tl_hf:"🎙️ Lớp học bằng giọng nói (rảnh tay)",tl_needAI:"Dạy mọi chủ đề cần bộ não AI. Bật miễn phí chỉ với một chạm:",
  ai_title:"Bật AI miễn phí",ai_device:"⚡ AI miễn phí trên máy này",ai_deviceD:"Riêng tư, chạy ngoại tuyến sau một lần tải ({s}).",ai_chrome:"🌐 AI có sẵn trong Chrome",ai_chromeD:"Miễn phí, có sẵn trên máy tính (Chrome máy tính).",ai_cloud:"🔑 Khoá miễn phí trên mây (nhanh nhất trên điện thoại)",ai_cloudD:"Lấy khoá miễn phí từ Groq hoặc Google trong 1 phút.",ai_ready:"AI đã bật! Bắt đầu nào.",ai_wait:"Đang tải… bạn vẫn dùng app bình thường.",ai_noGpu:"Trình duyệt này không chạy được AI trên máy. Hãy dùng khoá miễn phí trên mây.",ai_preview:"Trong bản xem trước của Claude không tải được AI. Hãy mở trang riêng (keng89.github.io).",
  qs_learn:"Học mọi thứ",qs_en:"Lớp tiếng Anh",qs_talk:"Tâm sự",qs_coach:"Huấn luyện",qs_play:"Giải trí",tPlay:"Giải trí",pl_games:"Trò chơi",pl_future:"Tương lai",pl_wish:"Điều ước",tm_mode:["Giáo viên","Dạy bạn mọi thứ, từng bước."],ac_hf:"Rảnh tay",ac_hfOn:"Đã bật rảnh tay: mình sẽ dẫn dắt, bạn chỉ cần trả lời to."},
 yue:{tl_title:"講嘢學嘢",tl_any:"任何題目",tl_go:"開始上堂",qs_learn:"學任何嘢",qs_en:"英文堂",qs_talk:"傾偈",qs_coach:"教練",qs_play:"玩",tPlay:"玩",tm_mode:["老師","一步步教你任何嘢。"]}};
for(const k of ["en","vi","yue"]){Object.assign(PACKS[k].ui,UI16[k]);if(UI16[k].tm_mode)PACKS[k].modes.teacher=UI16[k].tm_mode}
{const all=Object.entries(MODES);for(const [k] of all)delete MODES[k];for(const [k,v] of all){MODES[k]=v;if(k==="coach")MODES.teacher={em:"🎓",pitch:1,rate:.96,sys:"You are an inspiring teacher.",open:["","","",""],wrap:t=>t}}renderModes();}
/* ---------- 1. reliable loading after updates ---------- */
/* ---------- 2. anime girls (recoloured from Aiko) ---------- */
VRM_BUILTIN.length=0;
[["aiko","Aiko",null],["yuna","Yuna",{hair:"#ff9ccf",top:"#f6c6e0",bottom:"#ffffff",eyes:"#c45cc0"}],["mika","Mika",{hair:"#f7d77a",top:"#9fd3ff",bottom:"#24365c",eyes:"#3f8be0"}],
 ["sora","Sora",{hair:"#b8d8ff",top:"#ffffff",bottom:"#5b7fd6",eyes:"#2bb3c9"}],["rin","Rin",{hair:"#2a2430",top:"#d6283f",bottom:"#1c1c22",eyes:"#b3203a"}],
 ["hana","Hana",{hair:"#c4512e",top:"#7fcf8e",bottom:"#efe2c8",eyes:"#3e9c55"}],["luna","Luna",{hair:"#c7a6ff",top:"#7b55d6",bottom:"#1d1830",eyes:"#e0b23d"}],["nami","Nami",{hair:"#7fe0cf",top:"#fff1a8",bottom:"#2e8c86",eyes:"#1fa58f"}]]
 .forEach(([id,name,c])=>VRM_BUILTIN.push({id,name,path:"vrm/aiko/",g:"f",age:"adult",thumb:"vrm/"+id+".jpg",colors:c}));
function tintTex(tex,hex,gamma){try{const img=tex.image;const w=img.width,h0=img.height;const cv=document.createElement("canvas");cv.width=w;cv.height=h0;const x=cv.getContext("2d");x.drawImage(img,0,0);
  const d=x.getImageData(0,0,w,h0),p=d.data;let sum=0,n=0;for(let i=0;i<p.length;i+=16){if(p[i+3]>128){sum+=(p[i]*.299+p[i+1]*.587+p[i+2]*.114);n++}}const mean=Math.max(20,n?sum/n:128);
  const c=new E.T.Color(hex);const r=c.r*255,g=c.g*255,b=c.b*255;
  for(let i=0;i<p.length;i+=4){const l=(p[i]*.299+p[i+1]*.587+p[i+2]*.114)/mean;const k=Math.pow(Math.max(0,l),gamma||.85);p[i]=Math.min(255,r*k);p[i+1]=Math.min(255,g*k);p[i+2]=Math.min(255,b*k)}
  x.putImageData(d,0,0);const t=new E.T.CanvasTexture(cv);t.flipY=tex.flipY;t.colorSpace=tex.colorSpace;t.wrapS=tex.wrapS;t.wrapT=tex.wrapT;t.needsUpdate=true;return t}catch(e){return null}}
function vrmRecolor(vrm,c){if(!c)return;const done=new Map();vrm.scene.traverse(o=>{if(!o.isMesh)return;[].concat(o.material).forEach(m=>{const nm=m.name||"";let hex=null,g=.85;
  if(/HAIR/i.test(nm))hex=c.hair;else if(/Tops/i.test(nm))hex=c.top;else if(/Bottoms|Shoes/i.test(nm))hex=/Shoes/.test(nm)?c.bottom:c.bottom;else if(/EyeIris/i.test(nm)){hex=c.eyes;g=1}
  if(!hex||!m.map)return;const key=m.map.uuid+hex;let t=done.get(key);if(!t){t=tintTex(m.map,hex,g);done.set(key,t)}if(!t)return;m.map=t;if(m.shadeMultiplyTexture)m.shadeMultiplyTexture=t;m.needsUpdate=true})})}
{const _lvf=loadVRMFrom;loadVRMFrom=async function(meta,buf,path){const ok=await _lvf(meta,buf,path);if(ok&&E.vrm&&meta.colors)vrmRecolor(E.vrm,meta.colors);return ok};}
vrmFile.removeAttribute("accept");
/* ---------- 3. one-tap AI setup ---------- */
function aiSetup(onReady){if(S.brainOn){onReady&&onReady();return}
  const m=h("div",{class:"hb-modal",role:"dialog"});const b=h("div",{class:"hb-box"});m.append(b);document.body.append(m);m.onclick=e=>{if(e.target===m)m.remove()};
  const prog=h("p",{class:"note"});let poll=0;const finish=()=>{clearInterval(poll);if(S.brainOn){toast(TT("ai_ready"));m.remove();onReady&&onReady()}};
  const watch=()=>{poll=setInterval(()=>{const p=$("#brainProg");prog.textContent=(p&&p.textContent&&p.textContent!=="—"?p.textContent:TT("ai_wait"));if(S.brainOn)finish()},500)};
  b.append(h("div",{class:"ward-head"},h("b",null,"🧠 "+TT("ai_title")),h("button",{type:"button",class:"btn ghost small",onclick:()=>{clearInterval(poll);m.remove()}},"✕")));
  if(inClaude)b.append(h("p",{class:"note",style:"color:#ffb4c8"},TT("ai_preview")));
  const opt=(t,d,fn,dis)=>h("button",{type:"button",class:"ai-opt",disabled:!!dis,onclick:fn},h("b",null,t),h("small",null,d));
  bestModel().then(best=>{const mm=WEBM.find(x=>x[0]===best);
    b.append(opt(TT("ai_device"),best?fill(TT("ai_deviceD"),{s:(mm?mm[1]+", "+mm[3]:"")}):TT("ai_noGpu"),()=>{BC.kind="web";BC.web=best;saveBC();$("#brainKind").value="web";$("#modelSel").value=best;loadBrain();watch()},!best),
      hasChromeAI?opt(TT("ai_chrome"),TT("ai_chromeD"),()=>{$("#brainKind").value="chrome";loadBrain();watch()}):"",
      opt(TT("ai_cloud"),TT("ai_cloudD"),()=>{m.remove();BC.kind="cloud";BC.cprov="groq";saveBC();$("#brainKind").value="cloud";$("#brainKind").dispatchEvent(new Event("change"));$("#cProv").value="groq";$("#cProv").dispatchEvent(new Event("change"));switchTab("me");setTimeout(()=>{$("#cKey").scrollIntoView({block:"center"});$("#cKey").focus()},200)}),prog)});
}
/* ---------- 4. Talk & Learn: teacher for any topic ---------- */
const TOPICS=[["🗣️","Languages",["English conversation","Business English","Spanish","French","Mandarin Chinese","Japanese","Korean","Vietnamese"]],
 ["💰","Money",["Budgeting basics","Saving and emergency funds","Investing for beginners","Stocks and ETFs","Credit scores","Taxes basics (Canada and US)","Crypto explained","Real estate basics"]],
 ["🤖","Tech & AI",["How AI works","Using AI tools well","Python coding","Excel and spreadsheets","Building websites (HTML/CSS)","Cybersecurity and scams","Social media marketing"]],
 ["💼","Career & business",["Job interviews","Resume and LinkedIn","Starting a business","Marketing basics","Sales and negotiation","Public speaking","Leadership","Productivity"]],
 ["🔬","Science",["The human body","Space and planets","Climate and weather","Physics in daily life","Chemistry basics","Biology and evolution","Psychology basics"]],
 ["🏛️","History & world",["World history highlights","Ancient civilizations","World War II","Vietnamese history","Canadian history","US history","Cultures of the world"]],
 ["❤️","Health & life",["Nutrition","Fitness basics","Sleep science","Stress and mindfulness","First aid basics","Cooking basics","Parenting","Relationships and communication"]],
 ["🎨","Creative",["Music theory","Guitar basics","Drawing","Photography","Creative writing","Film and storytelling"]],
 ["➗","School & exams",["Math: arithmetic to algebra","Geometry","Statistics","Study skills","IELTS speaking","Homework help (kids)"]]];
let TL=Object.assign({lv:0,hf:true},store.get("tl",{}));const saveTL=()=>store.set("tl",TL);
function startClass(topic,lv){topic=String(topic||"").trim();if(!topic)return;
  aiSetup(()=>{S.tutor={teach:true,topic,lv:lv??TL.lv,lang:replyLang()};S.mode="teacher";store.set("mode","teacher");renderModes();
    CMP.newChat("tutor","🎓 "+topic);switchTab("chat");if(!S.stageOn)$("#stageBtn").click();
    if(TL.hf&&(window.SpeechRecognition||window.webkitSpeechRecognition)&&!S.talk)setTalk(true);
    S.history.push({role:"user",content:"Let's start."});const b2=addMsg("bot","");S.busy=true;mascot("talk");
    aiReply(b2).then(out=>{b2.textContent=out||"…";S.history.push({role:"assistant",content:out});speak(out,true);setChips()}).finally(()=>{S.busy=false})})}
{const _tp2=tutorPrompt;tutorPrompt=function(){const t=S.tutor;if(!t||!t.teach)return _tp2();const c=E&&E.on?((typeof vrmChar==="function"&&vrmChar())||cur3d()):curChar();const lv=["a complete beginner","an intermediate learner","an advanced learner"][t.lv||0];
  return "You are "+c.name+", a brilliant, warm and funny teacher. Your words are spoken aloud, so talk like a real person: no markdown, no lists, no emojis. Topic: "+t.topic+". The learner is "+lv+(S.name?", named "+S.name:"")+". "+
   "Teach in small spoken steps: explain ONE idea in 2 to 4 short sentences with a vivid real-life example or analogy, then ask ONE short question to check understanding or to let them try. When they answer, react naturally, praise what is right, gently correct what is wrong, then move to the next idea. Start by greeting them and asking what they already know or why they want to learn this. Every 5 steps, give a one-sentence recap. If they say 'quiz me', ask 3 questions one at a time. If they ask something off-topic, answer briefly and come back. "+langLine()+memBlock()};}
{const _sp4=sysPrompt;sysPrompt=function(){if(!S.tutor&&S.mode==="teacher")return "You are an inspiring, friendly teacher who can teach anything from beginner to advanced. Ask the learner what they want to learn today and their level, then teach in short spoken steps with examples and one question at a time. No markdown or lists. "+langLine()+memBlock();return _sp4()};}
{const _spk3=sparkReply;sparkReply=function(raw){if(S.mode==="teacher"&&!S.game&&!S.tutor){setTimeout(()=>{switchTab("learn");ACD.mode="topics";saveACD();renderLearn()},1600);return replyLang()==="vi"?"Mình có thể dạy bạn mọi chủ đề! Hãy chọn một chủ đề trong thư viện, mình sẽ bật AI miễn phí để giảng bài bằng giọng nói nhé.":"I can teach you anything! Pick a topic in the library and I'll switch on a free AI brain so I can teach you out loud, step by step."}return _spk3(raw)};}
function renderTopics(A){A.innerHTML="";const nm=S.name?", "+S.name:"";
  A.append(h("div",{class:"ac-hero"},h("div",null,h("h2",null,"🧠 "+TT("tl_title")),h("p",{class:"sub"},TT("tl_sub")))));
  const inp=h("input",{class:"ac-input",placeholder:TT("tl_askPh"),"aria-label":TT("tl_ask")});inp.onkeydown=e=>{if(e.key==="Enter")startClass(inp.value)};
  const lvRow=h("div",{class:"hb-gsel"},...TT("tl_lv").map((l,i)=>h("button",{type:"button",class:"wchip"+(TL.lv===i?" on":""),onclick:()=>{TL.lv=i;saveTL();renderTopics(A)}},l)));
  const hf=h("label",{class:"note",style:"display:flex;gap:8px;align-items:center;margin-top:8px"},h("input",{type:"checkbox",checked:TL.hf,onchange:e=>{TL.hf=e.target.checked;saveTL()}}),TT("tl_hf"));
  A.append(h("div",{class:"panel tl-ask"},h("b",null,TT("tl_ask")),inp,lvRow,hf,h("button",{type:"button",class:"btn ac-check",onclick:()=>startClass(inp.value)},"🎓 "+TT("tl_go"))));
  if(!S.brainOn)A.append(h("div",{class:"panel"},h("p",{class:"note"},TT("tl_needAI")),h("button",{type:"button",class:"btn",onclick:()=>aiSetup(()=>renderTopics(A))},"⚡ "+TT("ai_title"))));
  TOPICS.forEach(([em,cat,list])=>{A.append(h("span",{class:"label tl-cat"},em+" "+cat));A.append(h("div",{class:"tl-row"},...list.map(t=>h("button",{type:"button",class:"tl-topic",onclick:()=>startClass(t)},t))))})}
/* Learn tab: third segment */
{const _rl2=renderLearn;renderLearn=function(){_rl2();const seg=$("#learnSeg");if(seg&&!$("#segTopics")){seg.prepend(h("button",{type:"button",id:"segTopics",onclick:()=>{ACD.mode="topics";saveACD();renderLearn()}},"🧠 "+TT("tl_any")))}
  const st=$("#segTopics");if(st){st.textContent="🧠 "+TT("tl_any");st.classList.toggle("on",ACD.mode==="topics")}
  if(ACD.mode==="topics"){$("#segEn").classList.remove("on");$("#segOther").classList.remove("on");showLingo(false);$("#segEn").classList.remove("on");renderTopics($("#acad"))}};}
/* ---------- 5. hands-free English lessons ---------- */
ACD.hf=ACD.hf!==false;
{const _ra=renderAcad;renderAcad=function(){_ra();if(ACV.view!=="lesson"||!ACV.les)return;const A=$("#acad");const head=A.querySelector(".ac-lhead");
  if(head&&!head.querySelector(".hf-tg"))head.append(h("button",{type:"button",class:"btn ghost small hf-tg"+(ACD.hf?" on":""),title:TT("ac_hf"),onclick:()=>{ACD.hf=!ACD.hf;saveACD();if(ACD.hf)toast(TT("ac_hfOn"));renderAcad()}},(ACD.hf?"🎧 ":"🎧 ")+(ACD.hf?"ON":"OFF")));
  if(!ACD.hf)return;const L2=ACV.les,it=L2.items[L2.i];if(!it||L2.state)return;const key=L2.i+":"+it.t;if(L2.hfKey===key)return;L2.hfKey=key;
  const SRok=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
  if(it.t==="intro"){setTimeout(()=>enSay(it.w[0]+". "+it.w[2],()=>setTimeout(()=>{if(ACV.les===L2&&L2.i===+key.split(":")[0]){const b=A.querySelector(".ac-check");b&&b.click()}},700)),150)}
  else if(it.t==="mc"&&SRok){setTimeout(()=>listenFor("en",alts=>{if(ACV.les!==L2)return;let best=null,bs=0;it.opts.forEach(o=>alts.forEach(a=>{const s=sim(a,o);if(s>bs){bs=s;best=o}}));
      const btn=[...A.querySelectorAll(".ac-opt")].find(x=>x.textContent===best);if(btn&&bs>.55)btn.click()}),1800)}
  else if((it.t==="speak"||it.t==="role")&&SRok){setTimeout(()=>{const mic=A.querySelector(".ac-mic");if(mic&&ACV.les===L2)mic.click()},it.t==="role"?2200:1600)}};}
/* auto-continue after correct answers in hands-free mode */
new MutationObserver(()=>{if(!ACD.hf||ACV.view!=="lesson")return;const fb=document.querySelector("#acad .ac-fb");if(fb&&!fb.dataset.auto){fb.dataset.auto=1;setTimeout(()=>{const b=fb.querySelector(".btn:last-child");if(b&&document.body.contains(b))b.click()},fb.classList.contains("ok")?(begOn()?3200:2200):(begOn()?11000:8000))}}).observe(document.body,{childList:true,subtree:true});
/* ---------- 6. premium navigation: 5 tabs, Play hub, quick start ---------- */
{const tabs=document.querySelector(".tabs");const byV=v=>tabs.querySelector('[data-v="'+v+'"]');
 const play=h("button",{class:"tab",role:"tab","data-v":"play","aria-selected":"false"},h("span",{class:"em"},"🎮"),h("span",null,TT("tPlay")));play.onclick=()=>switchTab("games");
 ["games","future","wish"].forEach(v=>byV(v).hidden=true);
 [byV("chat"),byV("learn"),byV("today"),play,byV("me")].forEach(t=>tabs.append(t));["games","future","wish"].forEach(v=>tabs.append(byV(v)));
 const seg=v=>h("div",{class:"seg play-seg"},...[["games","🕹️","pl_games"],["future","🔮","pl_future"],["wish","🪙","pl_wish"]].map(([k,em,lab])=>h("button",{type:"button",class:k===v?"on":"",onclick:()=>switchTab(k)},em+" "+TT(lab))));
 ["games","future","wish"].forEach(v=>$("#view-"+v).prepend(seg(v)));}
{const _st3=switchTab;switchTab=function(v){_st3(v);const play=document.querySelector('.tabs [data-v="play"]');if(play)play.setAttribute("aria-selected",["games","future","wish"].includes(v));
  document.querySelectorAll(".play-seg").forEach(s=>[...s.children].forEach((b,i)=>b.classList.toggle("on",["games","future","wish"][i]===v)))};}
function quickStart(){let q=$("#quickStart");if(!q){q=h("div",{class:"qs",id:"quickStart"});$("#cbar").after(q)}q.innerHTML="";
  const it=(em,t,fn,cls)=>h("button",{type:"button",class:"qs-i"+(cls?" "+cls:""),onclick:fn},h("span",{class:"em"},em),h("span",null,t));
  q.append(it("🧠",TT("qs_learn"),()=>{switchTab("learn");ACD.mode="topics";saveACD();renderLearn()},"hot"),
    it("🇬🇧",TT("qs_en"),()=>{switchTab("learn");ACD.mode="en";saveACD();renderLearn()}),
    it("🤝",TT("qs_talk"),()=>{S.mode="friend";store.set("mode","friend");renderModes();CMP.newChat("friend")}),
    it("🧭",TT("qs_coach"),()=>switchTab("today")),
    it("🎮",TT("qs_play"),()=>switchTab("games")))}
{const _bar=CMP.bar.bind(CMP);CMP.bar=function(){_bar();quickStart()};}
quickStart();
/* tidy header */
{const tag=document.querySelector(".logo small");if(tag)tag.textContent=replyLang()==="vi"?"Bạn đồng hành AI · học · vui":"Your AI friend · teacher · coach";}

