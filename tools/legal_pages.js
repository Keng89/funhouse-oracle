// Generates the public legal web pages (legal/*.html) from the LEGAL texts inside the app source.
// Usage (from repo root): node tools/legal_pages.js
const fs=require('fs');const all=fs.readFileSync(process.argv[2]||"src/js/13-v17-legal-safety.js","utf8");const src=all.slice(all.indexOf("const LEGAL_V"),all.indexOf("/* ================= v17"));eval(src.replace(/const (LEGAL\w*)=/g,'global.$1='));
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const inline=t=>esc(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g,'<a href="$2" rel="noopener">$1</a>');
function md(b){let o="",ul=false;for(const line of b.trim().split("\n")){const l=line.trim();if(!l){if(ul){o+="</ul>";ul=false}continue}
 if(l.startsWith("## ")){if(ul){o+="</ul>";ul=false}o+="<h2>"+inline(l.slice(3))+"</h2>";continue}
 if(l.startsWith("- ")){if(!ul){o+="<ul>";ul=true}o+="<li>"+inline(l.slice(2))+"</li>";continue}
 if(ul){o+="</ul>";ul=false}o+="<p>"+inline(l)+"</p>"}if(ul)o+="</ul>";return o}
const css=`:root{--bg:#100c22;--card:#1b1638;--text:#f6f2ff;--muted:#b9b2db;--acc:#ff9ecf;--link:#9fd6ff;--line:rgba(255,255,255,.12)}
@media (prefers-color-scheme:light){:root:not([data-theme="dark"]){--bg:#f7f4ff;--card:#fff;--text:#1d1530;--muted:#5b5378;--acc:#b0307a;--link:#2457c5;--line:rgba(0,0,0,.1)}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:16px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:760px;margin:0 auto;padding:24px 16px 60px}header{display:flex;align-items:center;gap:10px;margin-bottom:8px}header a{color:var(--text);text-decoration:none;font-weight:800}
nav{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 22px}nav a{border:1px solid var(--line);border-radius:999px;padding:6px 12px;color:var(--text);text-decoration:none;font-size:14px;background:var(--card)}nav a[aria-current]{border-color:var(--acc);color:var(--acc);font-weight:700}
h1{font-size:30px;line-height:1.2;margin:8px 0 4px}h2{font-size:19px;margin:26px 0 6px;color:var(--acc)}a{color:var(--link)}.upd{color:var(--muted);font-size:14px}ul{padding-left:22px}li{margin:4px 0}
footer{margin-top:40px;color:var(--muted);font-size:13px;border-top:1px solid var(--line);padding-top:14px}`;
const nav=cur=>"<nav>"+LEGAL.map(p=>`<a href="${p.id}.html"${p.id===cur?' aria-current="page"':""}>${p.em} ${esc(p.t)}</a>`).join("")+"</nav>";
const page=(title,cur,body)=>`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · Funhouse Oracle</title><meta name="description" content="${esc(title)} for Funhouse Oracle"><style>${css}</style></head>
<body><main><header><span style="font-size:28px">🎪</span><a href="../index.html">Funhouse Oracle</a></header>${nav(cur)}${body}
<footer>Last updated ${LEGAL_DATE} · Contact: <a href="mailto:${LEGAL_CONTACT}">${LEGAL_CONTACT}</a> · © 2026 Pai Keng Kuan</footer></main></body></html>`;
const out=process.argv[3]||"legal";fs.mkdirSync(out,{recursive:true});
for(const p of LEGAL)fs.writeFileSync(out+"/"+p.id+".html",page(p.t,p.id,`<h1>${p.em} ${esc(p.t)}</h1><p class="upd">Last updated ${LEGAL_DATE}</p>`+md(p.body)));
fs.writeFileSync(out+"/index.html",page("Legal & privacy","",`<h1>⚖️ Legal & privacy</h1><p>Plain-language policies for Funhouse Oracle.</p><ul>`+LEGAL.map(p=>`<li><a href="${p.id}.html">${p.em} ${esc(p.t)}</a></li>`).join("")+"</ul>"));
console.log("ok",LEGAL.length);
