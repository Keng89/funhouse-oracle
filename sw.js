// Funhouse Oracle offline cache: code is network-first (always fresh after updates), media is cache-first
const V='fho-v14';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const fresh=(r,key)=>fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(key||r,cp))}return res}).catch(()=>caches.match(key||r,{ignoreSearch:true}));
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const url=new URL(r.url);
  if(r.mode==='navigate'){e.respondWith(fresh(r,'index.html'));return}
  if(url.origin===location.origin&&/\.(js|webmanifest|css)$/.test(url.pathname)){e.respondWith(fresh(r));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})));
});
