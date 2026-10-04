/* jyotish-plus.js — BS miti, पात्रो, कुण्डली मिलान, मुहूर्त, AD<->BS converter, कुण्डली मा BS miti */
(function(){
const $=id=>document.getElementById(id);
const BSD=[[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,31,32,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,31,29,30,30,29,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,31,32,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,31,29,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,31,32,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,30],[31,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,30,30,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[30,32,31,32,31,31,29,30,29,30,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,29,31],[31,31,32,31,31,31,30,29,30,29,30,30],[31,31,32,32,31,30,30,29,30,29,30,30],[31,32,31,32,31,30,30,30,29,29,30,31],[31,31,31,32,31,31,29,30,30,29,30,30],[31,31,32,31,31,31,30,29,30,29,30,30],[31,32,31,32,31,30,30,29,30,29,30,30]];
const BS0=Date.UTC(1943,3,14),BSM=['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मंसिर','पुष','माघ','फागुन','चैत'],WN=['आइतबार','सोमबार','मंगलबार','बुधबार','बिहीबार','शुक्रबार','शनिबार'],WS=['आइत','सोम','मंगल','बुध','बिहि','शुक्र','शनि'];
const NDG=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]),pad=n=>String(n).padStart(2,'0');
const bsLen=(y,m)=>BSD[y-2000][m-1],bsYear=y=>BSD[y-2000].reduce((a,b)=>a+b,0);
function bs2ad(y,m,d){let n=0;for(let i=2000;i<y;i++)n+=bsYear(i);for(let i=1;i<m;i++)n+=bsLen(y,i);n+=d-1;const t=new Date(BS0+n*864e5);return[t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate()]}
function ad2bs(y,mo,d){let n=Math.round((Date.UTC(y,mo-1,d)-BS0)/864e5);if(n<0)return null;let by=2000;while(by<2100){const L=bsYear(by);if(n<L)break;n-=L;by++}if(by>=2100)return null;let bm=0;while(n>=BSD[by-2000][bm]){n-=BSD[by-2000][bm];bm++}return[by,bm+1,n+1]}
const bsTxt=b=>b?NDG(b[2])+' '+BSM[b[1]-1]+' '+NDG(b[0]):'';
const adWd=(y,m,d)=>new Date(Date.UTC(y,m-1,d)).getUTCDay();
function parseD(t,cal){const s=String(t||'').trim().replace(/[०-९]/g,c=>'०१२३४५६७८९'.indexOf(c)),m=s.match(/^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/);if(!m)return null;let y=+m[1],mo=+m[2],d=+m[3];
 if(cal==='BS'){if(y<2000||y>2099||mo<1||mo>12||d<1||d>bsLen(y,mo))return null;return bs2ad(y,mo,d)}
 const dt=new Date(Date.UTC(y,mo-1,d));if(y<1900||dt.getUTCMonth()!==mo-1||dt.getUTCDate()!==d)return null;return[y,mo,d]}
const ENM=['January','February','March','April','May','June','July','August','September','October','November','December'],ENW=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const enD=(y,m,d)=>d+' '+ENM[m-1]+' '+y,enL=(y,m,d)=>ENW[adWd(y,m,d)]+', '+enD(y,m,d);
const todayAD=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kathmandu'}).format(new Date()).split('-').map(Number);
window.JP={ad2bs,bs2ad,bsTxt,parseD,enD,enL,adWd,todayAD};

/* ---- top bar: correct BS date ---- */
const nb=$('npd');
if(nb){const fix=()=>{const a=todayAD(),b=ad2bs(...a);if(!b)return;const t=NDG(b[2])+' '+BSM[b[1]-1]+' '+NDG(b[0])+', '+WN[adWd(...a)];if(nb.textContent!==t)nb.textContent=t};
 fix();new MutationObserver(fix).observe(nb,{childList:true,characterData:true,subtree:true})}

/* ---- ephemeris (sun, moon, mars, ascendant; Lahiri) ---- */
const R=Math.PI/180,nm=x=>((x%360)+360)%360,sn=x=>Math.sin(x*R),cs=x=>Math.cos(x*R);
const EL={sun:[0,0,0,0,282.9404,4.70935e-5,1,0.016709,-1.151e-9,356.0470,0.9856002585],moon:[125.1228,-0.0529538083,5.1454,0,318.0634,0.1643573223,60.2666,0.0549,0,115.3654,13.0649929509],ma:[49.5574,2.11081e-5,1.8497,-1.78e-8,286.5016,2.92961e-5,1.523688,0.093405,2.516e-9,18.6021,0.5240207766]};
function kep(M,e){let E=M+e/R*sn(M)*(1+e*cs(M));for(let k=0;k<7;k++)E-=(E-e/R*sn(E)-M)/(1-e*cs(E));return E}
function xyz(k,d){const q=EL[k],N=q[0]+q[1]*d,i=q[2]+q[3]*d,w=q[4]+q[5]*d,a=q[6],e=q[7]+q[8]*d,M=nm(q[9]+q[10]*d),E=kep(M,e),xv=a*(cs(E)-e),yv=a*Math.sqrt(1-e*e)*sn(E),v=Math.atan2(yv,xv)/R,r=Math.hypot(xv,yv),vw=v+w;
 return{x:r*(cs(N)*cs(vw)-sn(N)*sn(vw)*cs(i)),y:r*(sn(N)*cs(vw)+cs(N)*sn(vw)*cs(i)),M,w,N,v}}
function calc(y,mo,dd,hh,mi,tz,lat,lon){
 const ms=Date.UTC(y,mo-1,dd,hh,mi)-tz*36e5,jd=ms/864e5+2440587.5,d=jd-2451543.5,ay=23.85306+0.013969*(jd-2451545)/365.25;
 const s=xyz('sun',d),Ms=s.M,Ls=nm(s.M+s.w),L=[];L[0]=nm(s.v+s.w);
 const m=xyz('moon',d),Mm=m.M,Lm=nm(m.M+m.w+m.N),D=Lm-Ls,F=Lm-m.N;
 L[1]=nm(Math.atan2(m.y,m.x)/R-1.274*sn(Mm-2*D)+0.658*sn(2*D)-0.186*sn(Ms)-0.059*sn(2*Mm-2*D)-0.057*sn(Mm-2*D+Ms)+0.053*sn(Mm+2*D)+0.046*sn(2*D-Ms)+0.041*sn(Mm-Ms)-0.035*sn(D)-0.031*sn(Mm+Ms)-0.015*sn(2*F-2*D)+0.011*sn(Mm-4*D));
 const p=xyz('ma',d);L[2]=nm(Math.atan2(p.y+s.y,p.x+s.x)/R);
 const ramc=nm(280.46061837+360.98564736629*(jd-2451545)+lon),eps=23.4393-3.563e-7*d;
 const asc=nm(Math.atan2(cs(ramc),-(sn(ramc)*cs(eps)+Math.tan(lat*R)*sn(eps)))/R);
 return{sid:L.map(x=>nm(x-ay)),asc:nm(asc-ay)}}
const NSZ=360/27;
const NK=['अश्विनी','भरणी','कृत्तिका','रोहिणी','मृगशिरा','आर्द्रा','पुनर्वसु','पुष्य','आश्लेषा','मघा','पूर्वाफाल्गुनी','उत्तराफाल्गुनी','हस्त','चित्रा','स्वाती','विशाखा','अनुराधा','ज्येष्ठा','मूल','पूर्वाषाढा','उत्तराषाढा','श्रवण','धनिष्ठा','शतभिषा','पूर्वाभाद्रपद','उत्तराभाद्रपद','रेवती'];
const SG=['मेष','वृष','मिथुन','कर्कट','सिंह','कन्या','तुला','वृश्चिक','धनु','मकर','कुम्भ','मीन'];
const SL=[2,5,3,1,0,3,5,2,4,6,6,4];
const TN=['प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पञ्चमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी'],tn=t=>t===15?'पूर्णिमा':t===30?'औँसी':TN[(t-1)%15],pk=t=>t<=15?'शुक्ल':'कृष्ण';
const LM=['चैत्र','वैशाख','ज्येष्ठ','आषाढ','श्रावण','भाद्र','आश्विन','कार्तिक','मार्गशीर्ष','पौष','माघ','फाल्गुन'];
function panch(y,mo,d,hh){const r=calc(y,mo,d,hh,0,5.75,27.7172,85.3240),el=((r.sid[1]-r.sid[0])%360+360)%360,t=Math.floor(el/12)+1,nk=Math.floor(r.sid[1]/NSZ),q=new Date(Date.UTC(y,mo-1,d,hh,0)-5.75*36e5-el/12.1908*864e5),r2=calc(q.getUTCFullYear(),q.getUTCMonth()+1,q.getUTCDate(),q.getUTCHours(),q.getUTCMinutes(),0,0,0);
 return{t,nk,lm:(Math.floor(r2.sid[0]/30)+1)%12,sun:Math.floor(r.sid[0]/30),mo:Math.floor(r.sid[1]/30)}}

/* ---- inject CSS + UI ---- */
const st=document.createElement('style');st.textContent=`.ml-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2rem;max-width:900px;margin:0 auto}
.pt-h{display:flex;align-items:center;justify-content:center;gap:.7rem;margin-bottom:1rem;flex-wrap:wrap}.pt-h h3{font-family:Syne,sans-serif;font-size:1.4rem;min-width:170px;text-align:center}
.pt-h button{padding:.6rem 1rem;border-radius:100px;border:1px solid var(--bd);background:var(--card);color:var(--text);font:600 1rem 'Space Grotesk',sans-serif}
.pt-w,.pt-g{display:grid;grid-template-columns:repeat(7,1fr);gap:.35rem;max-width:760px;margin:0 auto}.pt-w{margin-bottom:.4rem}
.pt-w span{text-align:center;font:600 .75rem 'JetBrains Mono',monospace;color:var(--p);padding:.3rem 0}.pt-w span:first-child,.pt-w span:last-child{color:#f87171}
.pt-c{position:relative;aspect-ratio:1/1.05;border-radius:14px;border:1px solid var(--bd);background:var(--card);color:var(--text);font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.05rem;padding:.2rem;transition:.25s}
.pt-c b{font:700 1.1rem Syne,sans-serif}.pt-c em{position:absolute;top:4px;right:6px;font:600 .62rem 'JetBrains Mono',monospace;color:var(--dim);font-style:normal}.pt-c i{font-style:normal;font-size:.6rem;color:var(--dim);line-height:1.1;text-align:center}
.pt-c.sat b{color:#f87171}.pt-c.fs{border-color:var(--s)}.pt-c.fs::after{content:'';position:absolute;bottom:5px;width:6px;height:6px;border-radius:50%;background:var(--s)}
.pt-c.td{background:linear-gradient(135deg,var(--p),var(--s));color:#fff}.pt-c.td b,.pt-c.td i,.pt-c.td em{color:#fff}.pt-c.sel{outline:2px solid var(--a)}.pt-c:hover{border-color:var(--p)}
#pt-d{max-width:760px;margin:1rem auto 0}@media(max-width:600px){.pt-c b{font-size:.95rem}.pt-c i{font-size:.5rem}.pt-c em{font-size:.55rem;right:4px}.pt-h h3{min-width:120px;font-size:1.1rem}}`;document.head.appendChild(st);
const st2=document.createElement('style');st2.textContent=`#jt-f{justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}#jt-f::-webkit-scrollbar{display:none}#jt-f button{white-space:nowrap;flex:0 0 auto}#jt-f>button:first-child{margin-left:auto}#jt-f>button:last-child{margin-right:auto}@media(max-width:480px){#jt-f button{padding:.55rem .8rem;font-size:.78rem}}
.jsb{justify-content:center;margin:-.9rem 0 1.6rem!important}.jsb button{padding:.45rem .95rem!important;font-size:.78rem!important}
#pj{max-width:900px;margin:0 auto 1.8rem;padding:1.3rem 1.4rem;border-radius:24px;background:linear-gradient(135deg,rgba(139,92,246,.14),rgba(236,72,153,.09));border:1px solid var(--bd)}
#pj h3{font-family:Syne,sans-serif;font-size:1.05rem;margin-bottom:.15rem}#pj .pe{color:var(--dim);font-size:.82rem;margin-bottom:.9rem}
.pc{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.6rem}.pc div{padding:.65rem .8rem;border-radius:14px;background:var(--card);border:1px solid var(--bd);font-size:.85rem}.pc small{display:block;font:600 .64rem 'JetBrains Mono',monospace;color:var(--p);margin-bottom:.15rem}.pc b{font-size:.92rem}.pc .bad b{color:#f87171}.pc .good b{color:var(--l)}
#pj .pv{margin-top:.8rem;font-size:.88rem;color:var(--dim);line-height:1.7}
@media(max-width:600px){.pc{grid-template-columns:1fr 1fr}}`;document.head.appendChild(st2);

const jf=$('jt-f'),kl=$('jt-kl');
if(!jf||!kl)return;
jf.insertAdjacentHTML('afterend','<div class="crs-f jsb" id="jsb-kl" style="display:none"><button class="on" data-s="kl">🔮 जन्म कुण्डली</button><button data-s="ml">💞 कुण्डली मिलान</button></div><div class="crs-f jsb" id="jsb-pt" style="display:none"><button class="on" data-s="pt">📅 मासिक पात्रो</button><button data-s="mh">🕉️ शुभ मुहूर्त</button></div>');
jf.insertAdjacentHTML('beforebegin','<div id="pj"></div>');
kl.insertAdjacentHTML('afterend',`<div class="jt-p" id="jt-ml"><p class="rs-top">वर र वधूको जन्म विवरण भरेर अष्टकूट (३६ गुण) मिलान हेर्नुहोस्।</p><form id="ml-f"><div class="ml-g" id="ml-g"></div><button class="btn bp" type="submit" style="margin:1rem auto;display:block">💞 गुण मिलान हेर्नुहोस्</button></form><div class="kl-out" id="ml-out"></div></div>
<div class="jt-p" id="jt-pt"><div class="pt-h"><button type="button" id="pt-pv" aria-label="अघिल्लो महिना">‹</button><h3 id="pt-t"></h3><button type="button" id="pt-nx" aria-label="अर्को महिना">›</button><button type="button" id="pt-td">आज</button></div><div class="kl-no" id="pt-ad" style="text-align:center;margin:-.4rem 0 .8rem"></div><div class="pt-w" id="pt-w"></div><div class="pt-g" id="pt-g"></div><div class="tz-r" id="pt-d"></div><div class="kl-box" style="margin-top:1.2rem"><h3>🎉 यो महिनाका चाडपर्व र विशेष दिन</h3><ul class="kl-ul" id="pt-f"></ul></div><p class="kl-no">तिथि काठमाडौँको बिहान ६ बजे अनुसार हो। चाडपर्वका मिति खगोलीय गणनाबाट अनुमानित हुन् (१ दिनसम्म फरक पर्न सक्छ), आधिकारिक पात्रो र सरकारी बिदा सूची हेरेर पक्का गर्नुहोस्।</p></div>
<div class="jt-p" id="jt-mh"><p class="rs-top">विवाह, गृहप्रवेश आदिका लागि सामान्य शास्त्रीय नियम (तिथि, नक्षत्र, वार) अनुसार सम्भावित शुभ दिनहरू।</p><div class="kl-f"><div><label>कार्य</label><select id="mh-t"><option value="b">विवाह</option><option value="u">ब्रतबन्ध (उपनयन)</option><option value="g">गृहप्रवेश</option><option value="n">नामकरण / अन्नप्राशन</option><option value="v">नयाँ व्यापार / सवारी खरिद</option><option value="y">यात्रा आरम्भ</option></select></div><div><label>अवधि</label><select id="mh-p"><option value="30">अर्को ३० दिन</option><option value="90">अर्को ९० दिन</option><option value="180">अर्को १८० दिन</option></select></div><button class="btn bp wide" type="button" id="mh-go">🕉️ शुभ दिन खोज्नुहोस्</button></div><div class="kl-out" id="mh-out"></div></div>`);
const PN=['jt-rs','jt-kl','jt-ml','jt-pt','jt-mh'];
let TAB='rs';const CU={rs:'rs',kl:'kl',pt:'pt'};
function view(){PN.forEach(id=>{const p=$(id);if(p)p.classList.toggle('on',id==='jt-'+CU[TAB])});['kl','pt'].forEach(g=>{const s=$('jsb-'+g);if(s)s.style.display=TAB===g?'':'none'});if(CU[TAB]==='pt')renderPatro()}
jf.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;TAB=b.dataset.jt;view()});
['kl','pt'].forEach(g=>$('jsb-'+g).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;CU[g]=b.dataset.s;$('jsb-'+g).querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));view()}));

/* ---- Kundali: BS date input ---- */
const kd=$('kl-d'),kf=$('kl-f');
if(kd&&kf){kd.required=false;
 kd.parentNode.insertAdjacentHTML('beforebegin','<div><label>मितिको प्रकार</label><select id="kl-cal"><option value="AD">अंग्रेजी (AD)</option><option value="BS">विक्रम सम्वत् (BS)</option></select></div>');
 kd.insertAdjacentHTML('afterend','<input id="kl-bs" placeholder="जस्तै: 2055-01-29" style="display:none">');
 $('kl-cal').addEventListener('change',e=>{const bs=e.target.value==='BS';$('kl-bs').style.display=bs?'':'none';kd.style.display=bs?'none':''});
 kf.addEventListener('submit',e=>{const cal=$('kl-cal').value,a=parseD(cal==='BS'?$('kl-bs').value:kd.value,cal);
  if(!a){e.stopImmediatePropagation();e.preventDefault();$('kl-out').innerHTML='<div class="kl-box">कृपया सही जन्म मिति हाल्नुहोस्'+(cal==='BS'?' (वि.सं. 2000–2099, जस्तै 2055-01-29)':'')+'।</div>';return}
  kd.value=a[0]+'-'+pad(a[1])+'-'+pad(a[2])},true)}

/* ---- Patro ---- */
const TF={'10-29':'महाशिवरात्रि','11-15':'फागु पूर्णिमा (होली)','0-8':'चैते दशैँ','0-9':'राम नवमी','1-15':'बुद्ध जयन्ती','4-15':'जनै पूर्णिमा / रक्षाबन्धन','4-23':'कृष्ण जन्माष्टमी','5-3':'हरितालिका तीज','5-5':'ऋषि पञ्चमी','6-1':'घटस्थापना','6-7':'फूलपाती','6-8':'महाअष्टमी','6-9':'महानवमी','6-10':'विजया दशमी','6-15':'कोजाग्रत पूर्णिमा','6-28':'काग तिहार','6-29':'कुकुर तिहार','6-30':'लक्ष्मी पूजा (औँसी)','7-1':'गोवर्धन / म्हः पूजा','7-2':'भाइटीका','7-11':'हरिबोधिनी एकादशी','10-5':'बसन्त पञ्चमी'};
const FB={'1-1':'नयाँ वर्ष','1-11':'लोकतन्त्र दिवस','2-15':'गणतन्त्र दिवस','6-3':'संविधान दिवस','10-1':'माघे सङ्क्रान्ति','10-16':'शहीद दिवस','11-7':'प्रजातन्त्र दिवस'},FA={'5-1':'अन्तर्राष्ट्रिय श्रमिक दिवस','3-8':'अन्तर्राष्ट्रिय महिला दिवस'};
function day(a,b){const n=[],p6=panch(a[0],a[1],a[2],6),p12=panch(a[0],a[1],a[2],12),pe=panch(a[0],a[1],a[2],20);
 if(FB[b[1]+'-'+b[2]])n.push(FB[b[1]+'-'+b[2]]);if(FA[a[1]+'-'+a[2]])n.push(FA[a[1]+'-'+a[2]]);
 if(TF[p12.lm+'-'+p12.t])n.push(TF[p12.lm+'-'+p12.t]);if(pe.lm===6&&pe.t===30)n.push(TF['6-30']);
 if(p6.t%15===11)n.push('एकादशी');
 return{p:p6,n:[...new Set(n)],big:n.some(x=>x!=='एकादशी')}}
let Y,M;{const b=ad2bs(...todayAD());Y=b[0];M=b[1]}
$('pt-w').innerHTML=WS.map(w=>`<span>${w}</span>`).join('');
const cache={};let PD=[];
function renderPatro(){
 const n=bsLen(Y,M),f=bs2ad(Y,M,1),fw=adWd(...f),td=ad2bs(...todayAD()),fl=[];PD=[];
 $('pt-t').textContent=`${BSM[M-1]} ${NDG(Y)}`;{const l0=bs2ad(Y,M,n);$('pt-ad').textContent='English: '+ENM[f[1]-1]+' '+f[0]+(l0[1]!==f[1]?' – '+ENM[l0[1]-1]+' '+l0[0]:'');}
 let o='<span></span>'.repeat(fw);
 for(let d=1;d<=n;d++){const a=bs2ad(Y,M,d),key=Y+'-'+M+'-'+d,x=cache[key]||(cache[key]=day(a,[Y,M,d]));PD.push(x);
  const wd=(fw+d-1)%7,isT=td&&td[0]===Y&&td[1]===M&&td[2]===d;
  if(x.n.length)fl.push(`<li><b>${NDG(d)} ${BSM[M-1]}</b> (${WS[wd]}): ${x.n.join(', ')}</li>`);
  o+=`<button type="button" class="pt-c${wd===6?' sat':''}${isT?' td':''}${x.big?' fs':''}" data-d="${d}" title="${x.n.join(', ')}"><b>${NDG(d)}</b><em>${NDG(a[2])}</em><i>${tn(x.p.t)}</i></button>`}
 $('pt-g').innerHTML=o;$('pt-f').innerHTML=fl.join('')||'<li>यो महिनामा विशेष दिन फेला परेन।</li>';
 showDay(td&&td[0]===Y&&td[1]===M?td[2]:1)}
function showDay(d){const a=bs2ad(Y,M,d),x=PD[d-1],wd=adWd(...a);
 document.querySelectorAll('#pt-g .pt-c').forEach(c=>c.classList.toggle('sel',+c.dataset.d===d));
 $('pt-d').innerHTML=`<b>${NDG(d)} ${BSM[M-1]} ${NDG(Y)}, ${WN[wd]}</b> <span style="color:var(--dim)">(${enL(a[0],a[1],a[2])})</span><br>तिथि: <b>${pk(x.p.t)} ${tn(x.p.t)}</b> · नक्षत्र: <b>${NK[x.p.nk]}</b> · चान्द्र मास: <b>${LM[x.p.lm]}</b><br>🌅 सूर्योदय: <b>${fm(sunT(a[0],a[1],a[2]).rise)}</b> · 🌇 सूर्यास्त: <b>${fm(sunT(a[0],a[1],a[2]).set)}</b> · ⚠️ राहुकाल: <b>${fm(timesOf(...a).rk[0])}–${fm(timesOf(...a).rk[1])}</b>${x.n.length?`<br>🎉 ${x.n.join(', ')}`:''}`}
$('pt-g').addEventListener('click',e=>{const c=e.target.closest('.pt-c');if(c)showDay(+c.dataset.d)});
const go=k=>{M+=k;if(M>12){M=1;Y++}if(M<1){M=12;Y--}if(Y<2000)Y=2000;if(Y>2099)Y=2099;renderPatro()};
$('pt-pv').onclick=()=>go(-1);$('pt-nx').onclick=()=>go(1);$('pt-td').onclick=()=>{const b=ad2bs(...todayAD());Y=b[0];M=b[1];renderPatro()};

/* ---- आजको पञ्चाङ्ग (सूर्योदय, राहुकाल, अभिजित, दिशाशूल) ---- */
function sunT(y,m,d){const P=Math.PI/180,N=Math.floor((Date.UTC(y,m-1,d)-Date.UTC(y,0,0))/864e5),g=2*Math.PI/365*(N-1),
 eq=229.18*(0.000075+0.001868*Math.cos(g)-0.032077*Math.sin(g)-0.014615*Math.cos(2*g)-0.040849*Math.sin(2*g)),
 dc=0.006918-0.399912*Math.cos(g)+0.070257*Math.sin(g)-0.006758*Math.cos(2*g)+0.000907*Math.sin(2*g)-0.002697*Math.cos(3*g)+0.00148*Math.sin(3*g),la=27.7172*P,
 ha=Math.acos((Math.sin(-0.833*P)-Math.sin(la)*Math.sin(dc))/(Math.cos(la)*Math.cos(dc)))/P,noon=720+(5.75*60-85.324*4)-eq;return{rise:noon-ha*4,set:noon+ha*4}}
const fm=x=>{x=Math.round(x);const h=Math.floor(x/60)%24,m=x%60,hh=h%12||12;return NDG(hh)+':'+NDG(pad(m))+' '+(h<12?'बिहान':h<16?'दिउँसो':h<19?'साँझ':'राति')};
const RKA=[8,2,7,5,6,4,3],DSH=['पश्चिम','पूर्व','उत्तर','उत्तर','दक्षिण','पश्चिम','पूर्व'],RN=['मेष','वृष','मिथुन','कर्कट','सिंह','कन्या','तुला','वृश्चिक','धनु','मकर','कुम्भ','मीन'];
function timesOf(y,m,d){const s=sunT(y,m,d),wd=adWd(y,m,d),L=s.set-s.rise,rs=s.rise+(RKA[wd]-1)*L/8,ab=s.rise+L*7/15;return{s,rk:[rs,rs+L/8],ab:[ab,ab+L/15],ds:DSH[wd]}}
let PJK='';
function renderPJ(){const t=todayAD(),k=t.join('-');if(k===PJK)return;PJK=k;const b=ad2bs(...t),wd=adWd(...t),p=panch(t[0],t[1],t[2],6),x=day(t,b),T=timesOf(...t),box=$('pj');if(!box||!b)return;
 box.innerHTML=`<h3>📿 आजको पञ्चाङ्ग</h3><div class="pe">${NDG(b[2])} ${BSM[b[1]-1]} ${NDG(b[0])}, ${WN[wd]} &nbsp;•&nbsp; ${enL(...t)}</div>
 <div class="pc"><div><small>तिथि</small><b>${pk(p.t)} ${tn(p.t)}</b></div><div><small>नक्षत्र</small><b>${NK[p.nk]}</b></div><div><small>चन्द्र राशि</small><b>${RN[p.mo]}</b></div><div><small>सूर्य राशि</small><b>${RN[p.sun]}</b></div><div><small>चान्द्र मास</small><b>${LM[p.lm]}</b></div><div><small>🌅 सूर्योदय</small><b>${fm(T.s.rise)}</b></div><div><small>🌇 सूर्यास्त</small><b>${fm(T.s.set)}</b></div><div class="bad"><small>⚠️ राहुकाल</small><b>${fm(T.rk[0])} – ${fm(T.rk[1])}</b></div><div class="good"><small>✨ अभिजित मुहूर्त</small><b>${fm(T.ab[0])} – ${fm(T.ab[1])}</b></div><div class="bad"><small>🧭 दिशाशूल</small><b>${T.ds} दिशा</b></div></div>
 ${x.n.length?`<div class="pv">🎉 आज: <b>${x.n.join(', ')}</b></div>`:''}<div class="pv" style="font-size:.74rem">काठमाडौँ अनुसार अनुमानित समय। राहुकालमा नयाँ शुभ काम सुरु नगर्ने, र दिशाशूलको दिशामा यात्रा नगर्ने चलन छ।</div>`}
renderPJ();setInterval(renderPJ,60000);

/* ---- Muhurta ---- */
const MR={b:{nk:[3,4,9,11,12,14,16,18,20,25,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:1},u:{nk:[0,3,4,7,11,12,13,16,20,21,22,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:1},g:{nk:[3,4,7,11,12,16,20,25,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:0},n:{nk:[0,3,4,6,7,11,12,16,20,21,22,26],tt:[2,3,5,6,7,10,11,12,13],wd:[1,3,4,5],ex:0,sh:0},v:{nk:[0,3,4,6,7,11,12,13,14,16,20,21,22,26],tt:[1,2,3,5,6,7,10,11,12,13],wd:[1,3,4,5],ex:0,sh:0},y:{nk:[0,3,4,6,7,12,14,16,21,22,26],tt:[2,3,5,7,10,11,13],wd:[1,3,4,5],ex:0,sh:0}};
$('mh-go').onclick=()=>{
 const Rl=MR[$('mh-t').value],N=+$('mh-p').value,t0=todayAD(),rows=[];
 for(let i=0;i<N&&rows.length<60;i++){const a=new Date(Date.UTC(t0[0],t0[1]-1,t0[2]+i)),ad=[a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate()],p=panch(...ad,6),tt=((p.t-1)%15)+1,wd=a.getUTCDay();
  if(!Rl.nk.includes(p.nk)||!Rl.tt.includes(tt)||!Rl.wd.includes(wd))continue;
  if(Rl.sh&&p.t>15&&tt>5)continue;
  if(Rl.ex){const ch=(p.lm===3&&p.t>=11)||[4,5,6].includes(p.lm)||(p.lm===7&&p.t<=11);if(ch||p.sun===8||p.sun===11)continue}
  rows.push(`<tr><td>${bsTxt(ad2bs(...ad))}</td><td>${enD(ad[0],ad[1],ad[2])}</td><td>${WN[wd]}</td><td>${pk(p.t)} ${tn(p.t)}</td><td>${NK[p.nk]}</td></tr>`)}
 $('mh-out').innerHTML=`<div class="kl-box"><h3>🕉️ सम्भावित शुभ दिन (${NDG(rows.length)})</h3>${rows.length?`<div class="kl-tw"><table class="kl-t"><tr><th>मिति (वि.सं.)</th><th>AD</th><th>वार</th><th>तिथि</th><th>नक्षत्र</th></tr>${rows.join('')}</table></div>`:'<p style="color:var(--dim)">यो अवधिमा सबै नियम मिल्ने दिन फेला परेन। अवधि बढाएर हेर्नुहोस्।</p>'}</div><p class="kl-no">नोट: यो सामान्य शास्त्रीय नियम (शुभ तिथि, नक्षत्र, वार; चातुर्मास र खरमास छोडेर) अनुसार सम्भावित दिनको सूची हो। लग्न, शुद्धि, कुण्डली मिलान र स्थानीय परम्परा मिलाएर अन्तिम मुहूर्त अनुभवी पण्डित/ज्योतिषीसँग पक्का गर्नुहोस्।</p>`};

/* ---- Kundali Milan ---- */
const VN=['शूद्र','वैश्य','क्षत्रिय','ब्राह्मण'],VG=['चतुष्पद','मानव','जलचर','वनचर','कीट'],GN=['देव','मनुष्य','राक्षस'],NDN=['आदि','मध्य','अन्त्य'],YN=['घोडा','हात्ती','भेडा','सर्प','कुकुर','बिरालो','मुसा','गाई','भैँसी','बाघ','मृग','बाँदर','न्याउरीमुसा','सिंह'],PN7=['सूर्य','चन्द्र','मंगल','बुध','गुरु','शुक्र','शनि'];
const T_VAR=[2,1,0,3,2,1,0,3,2,1,0,3],T_VAS=[0,0,1,2,3,1,1,4,1,0,1,2],T_GAN=[0,1,2,1,0,1,0,0,2,2,1,1,0,2,0,2,0,2,2,1,1,0,2,2,1,1,0],T_NAD=[0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2],T_YON=[0,1,2,3,3,4,5,2,5,6,6,7,8,9,8,9,10,10,4,11,12,11,13,0,13,7,1],YEN=[[7,9],[1,13],[0,8],[4,10],[3,12],[11,2],[5,6]];
const REL=[[2,2,2,1,2,0,0],[2,2,1,2,1,1,1],[2,2,2,0,2,1,1],[2,0,1,2,1,2,1],[2,2,2,0,2,0,1],[0,0,1,2,1,2,2],[0,0,0,2,1,2,2]];
const PLC=window.NPD||[['काठमाडौँ',27.7172,85.3240]];
$('ml-g').innerHTML=[['b','🤵 वर (केटा)'],['g','👰 वधू (केटी)']].map(([k,t])=>`<div class="tz-c"><h3>${t}</h3><label>नाम</label><input id="ml-${k}-n"><label>मितिको प्रकार</label><select id="ml-${k}-c"><option value="BS">विक्रम सम्वत् (BS)</option><option value="AD">अंग्रेजी (AD)</option></select><label>जन्म मिति (YYYY-MM-DD)</label><input id="ml-${k}-d" placeholder="2055-01-29"><label>जन्म समय</label><input type="time" id="ml-${k}-t"><label>जन्म स्थान</label><select id="ml-${k}-p">${PLC.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('')}</select></div>`).join('');
function person(k){const g=s=>$('ml-'+k+'-'+s).value,pd=parseD(g('d'),g('c'));if(!pd||!g('t'))return null;
 const [Hh,Mi]=g('t').split(':').map(Number),pl=PLC[+g('p')],r=calc(pd[0],pd[1],pd[2],Hh,Mi,pd[0]<1986?5.5:5.75,pl[1],pl[2]),as=Math.floor(r.asc/30),mh=(Math.floor(r.sid[2]/30)-as+12)%12+1;
 return{ad:enD(pd[0],pd[1],pd[2]),n:g('n').trim()||(k==='b'?'वर':'वधू'),ms:Math.floor(r.sid[1]/30),ni:Math.floor(r.sid[1]/NSZ),man:[1,2,4,7,8,12].includes(mh),bs:bsTxt(ad2bs(...pd))}}
function koota(b,g){
 const vb=T_VAR[b.ms],vg=T_VAR[g.ms],ab=T_VAS[b.ms],ag=T_VAS[g.ms],r1=(((b.ni-g.ni+27)%27)+1)%9,r2=(((g.ni-b.ni+27)%27)+1)%9,bd=x=>[3,5,7].includes(x);
 const yb=T_YON[b.ni],yg=T_YON[g.ni],lb=SL[b.ms],lg=SL[g.ms],gb=T_GAN[b.ni],gg=T_GAN[g.ni],dd=(b.ms-g.ms+12)%12,m1=REL[lb][lg],m2=REL[lg][lb];
 const mt=lb===lg?5:m1+m2===4?5:m1+m2===3?4:m1+m2===2?(m1===1?3:1):m1+m2===1?0.5:0;
 return[['वर्ण',1,vb>=vg?1:0,`वर: ${VN[vb]}, वधू: ${VN[vg]}`],['वश्य',2,ab===ag?2:(ab>=3||ag>=3)?0:1,`वर: ${VG[ab]}, वधू: ${VG[ag]}`],
 ['तारा',3,bd(r1)&&bd(r2)?0:(bd(r1)||bd(r2))?1.5:3,`वधूबाट वर: ${NDG(r1||9)}, वरबाट वधू: ${NDG(r2||9)}`],
 ['योनि',4,yb===yg?4:YEN.some(q=>(q[0]===yb&&q[1]===yg)||(q[1]===yb&&q[0]===yg))?0:2,`वर: ${YN[yb]}, वधू: ${YN[yg]}`],
 ['ग्रह मैत्री',5,mt,`राशि स्वामी — वर: ${PN7[lb]}, वधू: ${PN7[lg]}`],
 ['गण',6,gb===gg?6:(gg===0&&gb===1)?6:(gg===1&&gb===0)?5:(gg===0&&gb===2)?1:0,`वर: ${GN[gb]}, वधू: ${GN[gg]}`],
 ['भकूट',7,[1,11,4,8,5,7].includes(dd)?0:7,`वरको राशि वधूबाट ${NDG(dd+1)}औँ`],
 ['नाडी',8,T_NAD[b.ni]===T_NAD[g.ni]?0:8,`वर: ${NDN[T_NAD[b.ni]]}, वधू: ${NDN[T_NAD[g.ni]]}`]]}
const box=(t,b)=>`<div class="kl-box"><h3>${t}</h3>${b}</div>`;
$('ml-f').addEventListener('submit',e=>{
 e.preventDefault();const b=person('b'),g=person('g'),out=$('ml-out');
 if(!b||!g){out.innerHTML='<div class="kl-box">कृपया वर र वधू दुवैको सही जन्म मिति (जस्तै 2055-01-29) र समय हाल्नुहोस्।</div>';return}
 const K=koota(b,g),tot=K.reduce((a,x)=>a+x[2],0),vd=tot>=33?'उत्तम मिलान':tot>=25?'राम्रो मिलान':tot>=18?'मध्यम मिलान':'कमजोर मिलान (सामान्यतया नमिल्ने)';
 const mg=b.man&&g.man?'दुवै माङ्गलिक छन्, त्यसैले मंगल दोष सन्तुलित मानिन्छ।':!b.man&&!g.man?'दुवैमा मंगल दोष छैन।':`${b.man?b.n:g.n} माङ्गलिक छन् तर अर्कामा मंगल दोष छैन — विवाहअघि अनुभवी ज्योतिषीसँग परिहारबारे सोध्नुहोस्।`;
 const warn=[K[7][2]===0?'नाडी दोष: दुवैको नाडी एउटै छ। यसलाई गम्भीर मानिन्छ, परिहारबारे ज्योतिषीसँग सोध्नुहोस्।':'',K[6][2]===0?'भकूट दोष: दुवैको राशिको दूरी अशुभ (२/१२, ५/९ वा ६/८) छ।':'',K[5][2]===0?'गण दोष: दुवैको गण (स्वभाव) मेल खाँदैन।':''].filter(Boolean);
 out.innerHTML=`<h1 class="grad" style="text-align:center;font-family:Syne,sans-serif;font-size:1.5rem">कुण्डली मिलान</h1><p class="kl-no" style="margin-bottom:1rem">🤵 ${b.n} (${b.bs} / ${b.ad}) × 👰 ${g.n} (${g.bs} / ${g.ad})</p>
 ${box('💞 कुल गुण',`<p style="font-size:2rem;font-weight:800;text-align:center;font-family:Syne,sans-serif"><span class="grad">${NDG(tot)}</span> / ३६</p><p style="text-align:center;font-weight:700">${vd}</p>`)}
 ${box('🔢 अष्टकूट विवरण',`<div class="kl-tw"><table class="kl-t"><tr><th>कूट</th><th>पूर्णाङ्क</th><th>प्राप्त</th><th>विवरण</th></tr>${K.map(x=>`<tr><td>${x[0]}</td><td>${NDG(x[1])}</td><td>${NDG(x[2])}</td><td>${x[3]}</td></tr>`).join('')}</table></div>`)}
 ${box('👤 चन्द्र राशि / नक्षत्र',`<ul class="kl-ul"><li><b>${b.n}:</b> ${SG[b.ms]} राशि, ${NK[b.ni]} नक्षत्र</li><li><b>${g.n}:</b> ${SG[g.ms]} राशि, ${NK[g.ni]} नक्षत्र</li></ul>`)}
 ${box('⚖️ मंगल दोष र सावधानी',`<ul class="kl-ul"><li>${mg}</li>${warn.map(x=>`<li class="kl-bad">⚠ ${x}</li>`).join('')}</ul>`)}
 <p class="kl-no">नोट: यो चन्द्र राशि र नक्षत्रमा आधारित अष्टकूट मिलान हो। वश्य र योनिको अङ्क सरल तालिकाबाट निकालिएको छ, त्यसैले अरू सफ्टवेयरसँग केही अङ्क फरक पर्न सक्छ। विवाहजस्तो ठूलो निर्णयका लागि अनुभवी ज्योतिषीसँग परामर्श गर्नुहोस्।</p>`;
 out.scrollIntoView({behavior:'smooth',block:'start'})});

/* ---- Tools: AD <-> BS converter ---- */
const tg=document.querySelector('.tz-g');
if(tg){tg.insertAdjacentHTML('afterbegin','<div class="tz-c"><h3>📅 AD ↔ BS मिति परिवर्तक</h3><label>अंग्रेजी मिति (AD)</label><input type="date" id="cv-ad"><label>विक्रम सम्वत् (BS) — YYYY-MM-DD</label><input id="cv-bs" placeholder="2083-06-18"><div class="tz-r" id="cv-r">मिति राखेपछि परिवर्तित मिति यहाँ देखिन्छ।</div></div>');
 const show=(a,b)=>{$('cv-r').innerHTML=`AD: <b>${enD(a[0],a[1],a[2])}</b> (${a[0]}-${pad(a[1])}-${pad(a[2])})<br>वि.सं.: <b>${bsTxt(b)}</b><br>वार: <b>${WN[adWd(...a)]}</b>`};
 $('cv-ad').addEventListener('input',e=>{const a=parseD(e.target.value,'AD'),b=a&&ad2bs(...a);if(!b){$('cv-r').textContent='यो मिति (AD 1943–2043) सीमाभन्दा बाहिर छ।';return}$('cv-bs').value=b[0]+'-'+pad(b[1])+'-'+pad(b[2]);show(a,b)});
 $('cv-bs').addEventListener('input',e=>{const a=parseD(e.target.value,'BS');if(!a){$('cv-r').textContent='सही वि.सं. मिति लेख्नुहोस् (जस्तै 2083-06-18)।';return}$('cv-ad').value=a[0]+'-'+pad(a[1])+'-'+pad(a[2]);show(a,ad2bs(...a))})}
})();

/* ---- Latest LONG YouTube videos (no Shorts) ---- */
(function(){
 const vd=document.getElementById('vd');if(!vd)return;
 const CH='UCF6VruxnJF9d_7NLjwS2n6w';
 /* UULF + channel id = uploads playlist WITHOUT Shorts (latest long videos first) */
 vd.innerHTML='<div style="grid-column:1/-1;aspect-ratio:16/9;max-width:860px;width:100%;margin:0 auto;border-radius:20px;overflow:hidden;border:1px solid var(--bd)"><iframe style="width:100%;height:100%;border:0" src="https://www.youtube.com/embed/videoseries?list=UULF'+CH.slice(2)+'" title="Paban Subedi - latest videos" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><a class="btn bp ytm" href="https://www.youtube.com/@pabansubedi/videos" target="_blank" rel="noopener">All Videos on YouTube ▶</a>';
})();

/* =====================================================================
   PLUS 2: Language toggle, Blog, Tools sub-tabs (Preeti, Translate, QR, Image, SIP/FD)
   ===================================================================== */
(function(){
const $=id=>document.getElementById(id),Q=s=>document.querySelector(s),QA=s=>[...document.querySelectorAll(s)];
const ND=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]),esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
/* ---------- Blog / Tips ---------- */
const nav=Q('.links a[href="#services"]'),sv=$('services');
if(sv){
 const T=[['📱','सामाजिक सञ्जालमा नियमित रहनुहोस्','हप्तामा ३ वटा राम्रा पोस्ट, दिनमा १० वटा भन्दा बढी असरदार हुन्छ।','१) आफ्नो ग्राहक कुन प्लेटफर्ममा छन् त्यो छान्नुहोस्। २) हप्ताको कन्टेन्ट क्यालेन्डर बनाउनुहोस्। ३) कमेन्ट र इनबक्समा १ घण्टाभित्र जवाफ दिनुहोस्। ४) कुन पोस्टले राम्रो गर्यो हेरेर दोहोर्याउनुहोस्।'],
 ['📍','Google Business Profile बनाउनुहोस्','"नजिकको कम्प्युटर रिपेयर" खोज्दा तपाईंको पसल Maps मा देखिन्छ, त्यो पनि निःशुल्क।','नाम, ठेगाना, फोन, खुल्ने समय र फोटो सही राख्नुहोस्। ग्राहकलाई रिभ्यू दिन अनुरोध गर्नुहोस् र सबै रिभ्यूको जवाफ दिनुहोस्।'],
 ['💬','WhatsApp Business को प्रयोग','क्याटलग र क्विक रिप्लाइले ग्राहकसँग कुरा गर्न धेरै सजिलो बनाउँछ।','प्रोफाइल पूरा गर्नुहोस्, उत्पादन क्याटलगमा राख्नुहोस्, "नमस्ते" स्वागत सन्देश सेट गर्नुहोस्। अनुमति बिना बल्क सन्देश नपठाउनुहोस्।'],
 ['🎬','छोटो भिडियो (Reels / Shorts)','सुरुका ३ सेकेन्डमा ध्यान तान्न सके मात्र मानिसले भिडियो अन्त्यसम्म हेर्छन्।','एउटा भिडियोमा एउटै कुरा राख्नुहोस्। समस्या → समाधान → "सम्पर्क गर्नुहोस्" ढाँचा प्रयोग गर्नुहोस्। सबटाइटल राख्नुहोस्, राम्रो उज्यालो र सफा आवाज भए मोबाइल नै पुग्छ।'],
 ['🔍','SEO को सुरुआत','Google मा नाम आउनु निःशुल्क ग्राहक पाउने सबैभन्दा ठूलो बाटो हो।','ग्राहकले के खोज्छन् त्यो कीवर्ड सोच्नुहोस् र पेजको शीर्षक र विवरणमा राख्नुहोस्। सजिलो भाषा, छिटो लोड हुने र मोबाइलमा राम्रो देखिने पेज बनाउनुहोस्।'],
 ['📊','नतिजा नाप्नुहोस्','नाप्न नसकिने कुरा सुधार्न सकिँदैन। Google Analytics ले कहाँबाट मानिस आए देखाउँछ।','प्रत्येक अभियानको लिङ्कमा UTM राख्नुहोस्। हप्तामा एकपटक १५ मिनेट रिपोर्ट हेर्नुहोस् र जुन माध्यमले काम गर्यो त्यहीँ बढी समय दिनुहोस्।']];
 sv.insertAdjacentHTML('beforebegin',`<section id="blog"><div class="ct"><div class="sh"><div class="st">Tips</div><h2>Digital Marketing <span class="grad">Tips</span></h2></div><div class="sv">${T.map(t=>`<div class="svc"><div class="si">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p><details><summary style="cursor:pointer;color:var(--a);font-weight:600">पूरा पढ्नुहोस्</summary><p style="margin-top:.6rem">${t[3]}</p></details></div>`).join('')}</div></div></section>`);
 if(nav)nav.parentNode.insertAdjacentHTML('beforebegin','<li><a href="#blog">Blog</a></li>');
 const fl=Q('.fl a[href="#services"]');if(fl)fl.insertAdjacentHTML('beforebegin','<a href="#blog">Blog</a>');
 QA('a[href="#blog"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();scrollTo({top:$('blog').offsetTop-100,behavior:'smooth'})}))}

/* ---------- Language toggle (EN / नेपाली) ---------- */
const NV={'#home':['Home','गृहपृष्ठ'],'#experience':['Experience','अनुभव'],'#skills':['Skills','सिप'],'#courses':['Courses','कोर्स'],'#jyotish':['Jyotish','ज्योतिष'],'#blog':['Blog','ब्लग'],'#services':['Services','सेवा'],'#videos':['Videos','भिडियो'],'#tools':['Tools','टूल्स'],'#contact':['Contact','सम्पर्क']};
const HD={experience:['Organizations <span class="grad">I\'ve Served</span>','मैले सेवा गरेका <span class="grad">संस्था</span>'],skills:['My <span class="grad">Skills</span>','मेरा <span class="grad">सिप</span>'],courses:['Digital Marketing <span class="grad">Courses</span>','डिजिटल मार्केटिङ <span class="grad">कोर्स</span>'],blog:['Digital Marketing <span class="grad">Tips</span>','डिजिटल मार्केटिङ <span class="grad">सुझाव</span>'],services:['My <span class="grad">Services</span>','मेरा <span class="grad">सेवा</span>'],videos:['Watch My <span class="grad">Videos</span>','मेरा <span class="grad">भिडियो</span>'],tools:['Useful <span class="grad">Tools & FAQ</span>','उपयोगी <span class="grad">टूल्स र FAQ</span>'],contact:['Let\'s <span class="grad">Connect</span>','आऊँ <span class="grad">जोडिऔँ</span>']};
const MS=[['.badge','Available for opportunities','नयाँ अवसरका लागि उपलब्ध'],['.btns a[href="#contact"]','Get In Touch →','सम्पर्क गर्नुहोस् →'],['.btns a[href="#experience"]','View My Work','मेरो काम हेर्नुहोस्'],['.lead','Digital Marketer, IT Professional and Computer Instructor from Jhapa, Nepal, with 7+ years of experience in e-commerce, IT support and ICT education.','झापा, नेपालबाट डिजिटल मार्केटर, आइटी प्रोफेशनल र कम्प्युटर इन्स्ट्रक्टर। ई-कमर्स, आइटी सपोर्ट र ICT शिक्षामा ७+ वर्षको अनुभव।']];
let LG='en';try{LG=localStorage.getItem('lang')||'en'}catch(e){}
const lt=document.createElement('li');lt.innerHTML='<button class="tt" id="lg-b" aria-label="Language" style="font-size:.78rem;font-weight:700;width:auto;padding:0 .8rem;border-radius:100px">नेपाली</button>';
const tth=$('tt');if(tth&&tth.parentNode)tth.parentNode.parentNode.insertBefore(lt,tth.parentNode);
function setLang(l){LG=l;const i=l==='ne'?1:0;
 QA('.links a[href^="#"],.fl a[href^="#"]').forEach(a=>{const v=NV[a.getAttribute('href')];if(v)a.textContent=v[i]});
 Object.keys(HD).forEach(k=>{const h=Q('#'+k+' h2');if(h)h.innerHTML=HD[k][i]});
 MS.forEach(m=>{const e=Q(m[0]);if(!e)return;if(m[0]==='.badge'){const d=e.querySelector('.dot');e.textContent=m[i+1];if(d)e.prepend(d)}else e.textContent=m[i+1]});
 const b=$('lg-b');if(b)b.textContent=l==='ne'?'English':'नेपाली';
 document.documentElement.lang=l==='ne'?'ne':'en';try{localStorage.setItem('lang',l)}catch(e){}}
$('lg-b')&&($('lg-b').onclick=()=>setLang(LG==='ne'?'en':'ne'));
setTimeout(()=>{if(LG==='ne')setLang('ne')},2000);

/* ---------- Tools: sub-tabs + new tools ---------- */
const tg=Q('.tz-g');if(!tg)return;
const card=(g,h,b)=>`<div class="tz-c" data-g="${g}"><h3>${h}</h3>${b}</div>`;
const btn='class="btn bp" style="margin-top:.8rem;padding:.7rem 1.4rem"';
tg.insertAdjacentHTML('beforeend',
 card('np','🔤 Preeti ↔ Unicode','<label>टेक्स्ट</label><textarea id="pu-i" rows="4" placeholder="Preeti (g]kfn) वा Unicode (नेपाल) यहाँ राख्नुहोस्"></textarea><div style="display:flex;gap:.5rem;flex-wrap:wrap"><button type="button" id="pu-a" '+btn+'>Preeti → Unicode</button><button type="button" id="pu-b" '+btn+'>Unicode → Preeti</button></div><div class="tz-r" id="pu-o">नतिजा यहाँ देखिन्छ।</div><p style="font-size:.75rem;color:var(--dim);margin-top:.5rem">नोट: Unicode → Preeti अनुमानित हुन्छ, लामो कागजातमा जाँच गर्नुहोस्।</p>')+
 card('np','🌐 English → नेपाली','<label>English text</label><textarea id="tr-i" rows="4" placeholder="Hello, how are you?"></textarea><button type="button" id="tr-b" '+btn+'>अनुवाद गर्नुहोस्</button><div class="tz-r" id="tr-o">अनुवाद यहाँ देखिन्छ।</div><p style="font-size:.75rem;color:var(--dim);margin-top:.5rem">Google Translate को निःशुल्क सेवा प्रयोग हुन्छ, इन्टरनेट चाहिन्छ। महत्त्वपूर्ण कागजातमा आफैँ जाँच गर्नुहोस्।</p>')+
 card('qr','📱 QR Code जेनेरेटर','<label>प्रकार</label><select id="qr-t"><option value="t">Text / Link / WhatsApp</option><option value="f">Image / PDF (link बाट)</option></select><label id="qr-l">टेक्स्ट वा लिङ्क</label><textarea id="qr-i" rows="3" placeholder="https://pabansubedi.com.np"></textarea><p id="qr-n" style="display:none;font-size:.78rem;color:var(--dim);margin-top:.4rem">Image वा PDF को QR बनाउन पहिले त्यसलाई Google Drive / वेबसाइटमा अपलोड गरेर Share link यहाँ राख्नुहोस्। फाइल आफैँ QR भित्र अटाउँदैन।</p><button type="button" id="qr-b" '+btn+'>QR बनाउनुहोस्</button><div id="qr-o" style="margin:1rem auto 0;display:flex;justify-content:center;background:#fff;padding:12px;border-radius:12px;width:fit-content"></div><a id="qr-d" class="btn bo" style="display:none;margin-top:.8rem;padding:.6rem 1.2rem" download="qr.png">⬇ PNG डाउनलोड</a>')+
 card('im','🖼 Image Compressor','<label>फोटो छान्नुहोस्</label><input type="file" id="ic-f" accept="image/*"><label>गुणस्तर: <b id="ic-q">70</b>%</label><input type="range" id="ic-r" min="20" max="95" value="70"><label>अधिकतम चौडाइ</label><select id="ic-w"><option value="0">मूल साइज</option><option value="1920">1920 px</option><option value="1280" selected>1280 px</option><option value="800">800 px</option></select><button type="button" id="ic-b" '+btn+'>कम्प्रेस गर्नुहोस्</button><div class="tz-r" id="ic-o">फोटो छानेपछि नतिजा यहाँ देखिन्छ।</div><a id="ic-d" class="btn bo" style="display:none;margin-top:.8rem;padding:.6rem 1.2rem">⬇ डाउनलोड</a>')+
 card('fin','📈 SIP क्याल्कुलेटर','<label>मासिक लगानी (रु)</label><input type="number" id="sp-p" placeholder="5000" min="0"><label>अनुमानित वार्षिक प्रतिफल (%)</label><input type="number" id="sp-r" placeholder="12" min="0" step="0.1"><label>अवधि (वर्ष)</label><input type="number" id="sp-y" placeholder="10" min="0" step="0.5"><div class="tz-r" id="sp-o">विवरण भरेपछि नतिजा देखिन्छ।</div>')+
 card('fin','🏦 Fixed Deposit क्याल्कुलेटर','<label>जम्मा रकम (रु)</label><input type="number" id="fd-p" placeholder="100000" min="0"><label>वार्षिक ब्याज दर (%)</label><input type="number" id="fd-r" placeholder="9" min="0" step="0.1"><label>अवधि (वर्ष)</label><input type="number" id="fd-y" placeholder="3" min="0" step="0.5"><label>ब्याज थप्ने अवधि</label><select id="fd-n"><option value="4">त्रैमासिक</option><option value="12">मासिक</option><option value="1">वार्षिक</option></select><div class="tz-r" id="fd-o">विवरण भरेपछि नतिजा देखिन्छ।</div>'));
QA('.tz-g > .tz-c').forEach(c=>{if(c.dataset.g)return;c.dataset.g=c.querySelector('details')?'faq':'cal'});
tg.insertAdjacentHTML('beforebegin','<div class="crs-f" id="tz-f"><button class="on" data-t="cal">🧮 क्याल्कुलेटर</button><button data-t="fin">💰 SIP / FD</button><button data-t="np">🔤 नेपाली टूल्स</button><button data-t="qr">📱 QR</button><button data-t="im">🖼 Image</button><button data-t="faq">❓ FAQ</button></div>');
function tab(t){QA('#tz-f button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));QA('.tz-g > .tz-c').forEach(c=>c.style.display=c.dataset.g===t?'':'none')}
$('tz-f').addEventListener('click',e=>{const b=e.target.closest('button');if(b)tab(b.dataset.t)});tab('cal');

/* Preeti */
const PM={a:'ब',b:'द',c:'अ',d:'म',e:'भ',f:'ा',g:'न',h:'ज',i:'ष्',j:'व',k:'प',l:'ि',m:'फ',n:'ल',o:'य',p:'उ',q:'त्र',r:'च',s:'क',t:'त',u:'ग',v:'ख',w:'ध',x:'ह',y:'थ',z:'श',A:'ब्',B:'द्',C:'ऋ',D:'म्',E:'भ्',F:'ँ',G:'न्',H:'ज्',I:'क्ष्',J:'व्',K:'प्',L:'ी',M:'फ्',N:'ल्',O:'इ',P:'ए',Q:'त्त',R:'च्',S:'क्',T:'त्',U:'ग्',V:'ख्',W:'ध्',X:'ह्',Y:'थ्',Z:'श्','0':'ण्','1':'ज्ञ','2':'द्द','3':'घ','4':'द्ध','5':'छ','6':'ट','7':'ठ','8':'ड','9':'ढ','`':'ञ','~':'ञ्','!':'१','@':'२','#':'३','$':'४','%':'५','^':'६','&':'७','*':'८','(':'९',')':'०','-':'(','_':')','=':'.','+':'ं','[':'ृ','{':'र्',']':'े','}':'ै','\\':'्',';':'स',':':'स्',"'":'ु','"':'ू','<':'?','>':'श्र','/':'र','?':'रु','|':'्र','.':'।'};
function p2u(s){let o=[...s].map(c=>PM[c]!==undefined?PM[c]:c).join('');
 o=o.replace(/ाे/g,'ो').replace(/ाै/g,'ौ').replace(/(ि)((?:[क-ह]्)*[क-ह])/g,'$2$1').replace(/((?:[क-ह]्)*[क-ह][ािीुूृेैोौं]*)(र्)/g,'$2$1');return o}
const INV=Object.entries(PM).map(([k,v])=>[v,k]).sort((a,b)=>b[0].length-a[0].length),IM=new Map(INV.map(x=>[x[0],x[1]]));
const IR=new RegExp(INV.map(x=>x[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
function u2p(s){s=s.replace(/ो/g,'ाे').replace(/ौ/g,'ाै').replace(/((?:[क-ह]्)*[क-ह])ि/g,'ि$1');return s.replace(IR,m=>IM.get(m))}
$('pu-a').onclick=()=>{$('pu-o').textContent=p2u($('pu-i').value)||'—'};
$('pu-b').onclick=()=>{$('pu-o').textContent=u2p($('pu-i').value)||'—'};

/* Translate */
$('tr-b').onclick=async()=>{const t=$('tr-i').value.trim(),o=$('tr-o');if(!t)return;o.textContent='अनुवाद गर्दै...';
 try{const r=await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ne&dt=t&q='+encodeURIComponent(t)),j=await r.json();
  const x=(j[0]||[]).map(p=>p[0]).join('');if(!x)throw 0;o.textContent=x;return}catch(e){}
 try{const r=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(t)+'&langpair=en|ne'),j=await r.json();
  o.innerHTML=esc((j.responseData&&j.responseData.translatedText)||'अनुवाद भेटिएन।')+'<br><small style="color:var(--dim)">⚠ बैकअप सेवाको अनुवाद हो, भरपर्दो नहुन सक्छ। प्रयोग गर्नुअघि जाँच गर्नुहोस्।</small>'}
 catch(e){o.textContent='इन्टरनेट वा सेवामा समस्या भयो, फेरि प्रयास गर्नुहोस्।'}};

/* QR */
let qrL=null;function lq(cb){if(window.QRCode)return cb();if(qrL)return qrL.push(cb);qrL=[cb];const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';s.onload=()=>qrL.forEach(f=>f());document.head.appendChild(s)}
$('qr-t').onchange=e=>{const f=e.target.value==='f';$('qr-n').style.display=f?'block':'none';$('qr-l').textContent=f?'फाइलको Share link':'टेक्स्ट वा लिङ्क'};
$('qr-b').onclick=()=>{const v=$('qr-i').value.trim();if(!v)return;lq(()=>{const o=$('qr-o');o.innerHTML='';new QRCode(o,{text:v,width:240,height:240,correctLevel:QRCode.CorrectLevel.M});
 setTimeout(()=>{const c=o.querySelector('canvas'),d=$('qr-d');if(c){d.href=c.toDataURL('image/png');d.style.display='inline-block'}},300)})};

/* Image compressor */
$('ic-r').oninput=e=>$('ic-q').textContent=e.target.value;
$('ic-b').onclick=()=>{const f=$('ic-f').files[0],o=$('ic-o');if(!f){o.textContent='पहिले फोटो छान्नुहोस्।';return}
 const img=new Image();img.onload=()=>{let w=img.width,h=img.height,mw=+$('ic-w').value;if(mw&&w>mw){h=Math.round(h*mw/w);w=mw}
  const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(img,0,0,w,h);
  c.toBlob(b=>{const kb=n=>(n/1024).toFixed(1)+' KB',d=$('ic-d');d.href=URL.createObjectURL(b);d.download=f.name.replace(/\.[^.]+$/,'')+'-compressed.jpg';d.style.display='inline-block';
   o.innerHTML='मूल: <b>'+kb(f.size)+'</b><br>नयाँ: <b>'+kb(b.size)+'</b> ('+w+'×'+h+')<br>बचत: <b>'+Math.max(0,Math.round((1-b.size/f.size)*100))+'%</b>'},'image/jpeg',$('ic-r').value/100)};
 img.src=URL.createObjectURL(f)};

/* SIP / FD */
const fm=x=>ND(Math.round(x).toLocaleString('en-IN'));
function sip(){const P=+$('sp-p').value,r=+$('sp-r').value/1200,n=Math.round(+$('sp-y').value*12),o=$('sp-o');if(!P||!n||$('sp-r').value===''){o.textContent='विवरण भरेपछि नतिजा देखिन्छ।';return}
 const F=r?P*((Math.pow(1+r,n)-1)/r)*(1+r):P*n,I=P*n;o.innerHTML='कुल लगानी: <b>रु '+fm(I)+'</b><br>अनुमानित नाफा: <b>रु '+fm(F-I)+'</b><br>अन्तिम रकम: <b>रु '+fm(F)+'</b>'}
function fd(){const P=+$('fd-p').value,r=+$('fd-r').value/100,t=+$('fd-y').value,n=+$('fd-n').value,o=$('fd-o');if(!P||!t||$('fd-r').value===''){o.textContent='विवरण भरेपछि नतिजा देखिन्छ।';return}
 const A=P*Math.pow(1+r/n,n*t);o.innerHTML='जम्मा रकम: <b>रु '+fm(P)+'</b><br>कुल ब्याज: <b>रु '+fm(A-P)+'</b><br>परिपक्व रकम: <b>रु '+fm(A)+'</b>'}
['sp-p','sp-r','sp-y'].forEach(i=>$(i).addEventListener('input',sip));['fd-p','fd-r','fd-y','fd-n'].forEach(i=>$(i).addEventListener('input',fd));
})();

/* ---- Nav cleanup: kam use hune link "More" dropdown ma ---- */
(function(){
 const ul=document.getElementById('links');if(!ul)return;
 const st=document.createElement('style');st.textContent=`.mr{position:relative}.mr>button{background:none;border:0;color:var(--dim);font:500 .88rem 'Space Grotesk',sans-serif;padding:.5rem .9rem;border-radius:100px;transition:.3s}.mr>button:hover,.mr.open>button{color:var(--text);background:var(--card)}
.mr-m{display:none;position:absolute;top:calc(100% + 10px);right:0;min-width:170px;background:var(--bg2);border:1px solid var(--bd);border-radius:18px;padding:.5rem;list-style:none;box-shadow:0 20px 50px rgba(0,0,0,.45);z-index:5}.mr.open .mr-m{display:block}.mr-m a{display:block;white-space:nowrap}
#lg-b{padding:0 .7rem!important;height:38px}
@media(max-width:968px){.mr>button{display:none}.mr-m{display:block;position:static;background:none;border:0;box-shadow:none;padding:0;min-width:0}}`;document.head.appendChild(st);
 const mv=['#jyotish','#blog','#videos','#tools'].map(h=>{const a=ul.querySelector('a[href="'+h+'"]');return a&&a.parentNode}).filter(Boolean);
 if(!mv.length)return;
 const li=document.createElement('li');li.className='mr';li.innerHTML='<button type="button" aria-haspopup="true" aria-expanded="false">More ▾</button><ul class="mr-m"></ul>';
 mv[0].parentNode.insertBefore(li,mv[0]);
 const sub=li.querySelector('.mr-m');mv.forEach(x=>sub.appendChild(x));
 const bt=li.querySelector('button'),set=o=>{li.classList.toggle('open',o);bt.setAttribute('aria-expanded',o)};
 bt.addEventListener('click',e=>{e.stopPropagation();set(!li.classList.contains('open'))});
 document.addEventListener('click',e=>{if(!e.target.closest('.mr'))set(false)});
 sub.addEventListener('click',()=>set(false));
 addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
})();

/* ---- Mero Hisab app ---- */
(function(){
 const URL='https://script.google.com/macros/s/AKfycbx_2N9Sg71TA1JomN7MikaqXMFQSiW36a4aDmVy1Hpf20u6hV_TSj33-MkHzY9R3FE/exec';
 const sub=document.querySelector('.mr-m'),ul=document.getElementById('links');
 const li=document.createElement('li');li.innerHTML='<a href="'+URL+'" target="_blank" rel="noopener">📒 Mero Hisab ↗</a>';
 (sub||ul).appendChild(li);
 const tg=document.querySelector('.tz-g'),tf=document.getElementById('tz-f');
 if(tg&&tf){tf.insertAdjacentHTML('beforeend','<button data-t="app">📒 Mero Hisab</button>');
  tg.insertAdjacentHTML('beforeend','<div class="tz-c wide" data-g="app" style="display:none;text-align:center"><h3>📒 Mero Hisab</h3><p style="color:var(--dim);line-height:1.7;margin-bottom:1rem">मेरो हिसाब एप नयाँ ट्याबमा खोल्नुहोस्।</p><a class="btn bp" href="'+URL+'" target="_blank" rel="noopener">Mero Hisab खोल्नुहोस् ↗</a></div>')}
})();

/* =====================================================================
   PLUS 3: चौघडिया/होरा, गोचर, नाम बाट राशि, राशिफल शेयर, धेरै कुण्डली सेभ
   ===================================================================== */
(function(){
const $=id=>document.getElementById(id),JP=window.JP,NPD=window.NPD||[['काठमाडौँ',27.7172,85.3240]];
const jf=$('jt-f'),pm=$('jt-mh');if(!jf||!pm||!JP)return;
const ND=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]),pad=n=>String(n).padStart(2,'0'),box=(t,b)=>`<div class="kl-box"><h3>${t}</h3>${b}</div>`;
const SG=['मेष','वृष','मिथुन','कर्कट','सिंह','कन्या','तुला','वृश्चिक','धनु','मकर','कुम्भ','मीन'],WN=['आइतबार','सोमबार','मंगलबार','बुधबार','बिहीबार','शुक्रबार','शनिबार'],WS=['आइत','सोम','मंगल','बुध','बिहि','शुक्र','शनि'];
const NK=['अश्विनी','भरणी','कृत्तिका','रोहिणी','मृगशिरा','आर्द्रा','पुनर्वसु','पुष्य','आश्लेषा','मघा','पूर्वाफाल्गुनी','उत्तराफाल्गुनी','हस्त','चित्रा','स्वाती','विशाखा','अनुराधा','ज्येष्ठा','मूल','पूर्वाषाढा','उत्तराषाढा','श्रवण','धनिष्ठा','शतभिषा','पूर्वाभाद्रपद','उत्तराभाद्रपद','रेवती'];
const css=document.createElement('style');css.textContent='.pc .now{outline:2px solid var(--a)}.ksv li{display:flex;justify-content:space-between;align-items:center;gap:.6rem;flex-wrap:wrap}.ksv .b{display:flex;gap:.4rem}.ksv button,.nmr button{padding:.45rem .9rem;border-radius:100px;border:1px solid var(--bd);background:var(--card);color:var(--text);font:600 .78rem "Space Grotesk",sans-serif}.ksv button:hover,.nmr button:hover{border-color:var(--p)}';document.head.appendChild(css);

/* ---- ट्याब र प्यानल ---- */
jf.insertAdjacentHTML('beforeend','<button data-jt="cg" role="tab">🕐 चौघडिया / होरा</button><button data-jt="gc" role="tab">🪐 गोचर</button><button data-jt="nm" role="tab">🔤 नाम बाट राशि</button>');
const opts=NPD.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join(''),ktm=Math.max(0,NPD.findIndex(x=>x[0]==='काठमाडौँ'));
pm.insertAdjacentHTML('afterend',`<div class="jt-p" id="jt-cg"><p class="rs-top">आजको कुन समय शुभ र कुन अशुभ — सूर्योदय र सूर्यास्त (आफ्नो जिल्ला अनुसार) बाट निकालिएको चौघडिया र होरा।</p><div class="kl-f"><div><label>मिति (AD)</label><input type="date" id="cg-d"></div><div><label>जिल्ला</label><select id="cg-p">${opts}</select></div></div><div class="kl-out" id="cg-o"></div></div>
<div class="jt-p" id="jt-gc"><p class="rs-top">आफ्नो राशि छानेर आज वा यो हप्ता ग्रहको गोचर (हालको ग्रह स्थिति) ले कस्तो असर गर्छ हेर्नुहोस्। राशि थाहा छैन भने \"नाम बाट राशि\" ट्याब हेर्नुहोस्।</p><div class="kl-f"><div><label>तपाईंको राशि</label><select id="gc-r">${SG.map((s,i)=>`<option value="${i}">${s}</option>`).join('')}</select></div><div><label>अवधि</label><select id="gc-p"><option value="d">आज</option><option value="w">यो हप्ता (७ दिन)</option></select></div></div><div class="kl-out" id="gc-o"></div></div>
<div class="jt-p" id="jt-nm"><p class="rs-top">नामको पहिलो अक्षरबाट नाम राशि र नक्षत्र पत्ता लगाउनुहोस् (देवनागरी वा English मा लेख्न सकिन्छ)।</p><div class="kl-f"><div class="wide"><label>नाम</label><input id="nm-i" placeholder="जस्तै: पवन / Pawan"></div><button class="btn bp wide" type="button" id="nm-b">🔤 राशि खोज्नुहोस्</button></div><div class="kl-out nmr" id="nm-o"></div></div>`);
jf.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const t=b.dataset.jt;['cg','gc','nm'].forEach(k=>$('jt-'+k).classList.toggle('on',t===k));if(t==='cg')cgR();if(t==='gc'){if(!$('gc-r').dataset.u)myR();gcR()}});

/* ---- ७७ जिल्ला: कुण्डली र मिलानमा पूर्वनिर्धारित काठमाडौँ ---- */
['kl-p','ml-b-p','ml-g-p'].forEach(id=>{const s=$(id);if(s&&NPD.length>20)s.value=ktm});$('cg-p').value=ktm;

/* ---- चौघडिया र होरा ---- */
const CD=['उद्वेग','चर','लाभ','अमृत','काल','शुभ','रोग'],CN=['शुभ','अमृत','चर','रोग','काल','लाभ','उद्वेग'],CQ={'अमृत':2,'शुभ':2,'लाभ':2,'चर':1,'उद्वेग':0,'रोग':0,'काल':0},QL=['अशुभ','मध्यम','शुभ'],QC=['kl-bad','','kl-ok'];
const HS=['सूर्य','शुक्र','बुध','चन्द्र','शनि','गुरु','मंगल'],HST=[0,3,6,2,5,1,4],HQ=[1,2,2,2,0,2,0],HU=['सरकारी, मान-सम्मानका काम','विवाह, कला, खरिद-बिक्री','व्यापार, लेखपढ, शिक्षा','यात्रा, घरायसी काम, मनको शान्ति','मेहनत, मेसिनरी (नयाँ शुभ काम कमजोर)','धार्मिक, शिक्षा र शुभ काम','साहस, जग्गाजमिन (शान्त काम कमजोर)'];
const ft=x=>{x=Math.round(x);const h=Math.floor(x/60)%24,m=x%60;return ND(h%12||12)+':'+ND(pad(m))+' '+(h<4?'राति':h<12?'बिहान':h<16?'दिउँसो':h<19?'साँझ':'राति')};
function sunT(y,m,d,la,lo){const P=Math.PI/180,N=Math.floor((Date.UTC(y,m-1,d)-Date.UTC(y,0,0))/864e5),g=2*Math.PI/365*(N-1),eq=229.18*(0.000075+0.001868*Math.cos(g)-0.032077*Math.sin(g)-0.014615*Math.cos(2*g)-0.040849*Math.sin(2*g)),dc=0.006918-0.399912*Math.cos(g)+0.070257*Math.sin(g)-0.006758*Math.cos(2*g)+0.000907*Math.sin(2*g)-0.002697*Math.cos(3*g)+0.00148*Math.sin(3*g),L=la*P,ha=Math.acos((Math.sin(-0.833*P)-Math.sin(L)*Math.sin(dc))/(Math.cos(L)*Math.cos(dc)))/P,noon=720+(5.75*60-lo*4)-eq;return{rise:noon-ha*4,set:noon+ha*4}}
const t0=JP.todayAD();$('cg-d').value=t0[0]+'-'+pad(t0[1])+'-'+pad(t0[2]);
function cgR(){
 const v=$('cg-d').value.split('-').map(Number),o=$('cg-o');if(!v[0]){o.innerHTML='';return}
 const pl=NPD[+$('cg-p').value]||NPD[0],s=sunT(v[0],v[1],v[2],pl[1],pl[2]),nx=new Date(Date.UTC(v[0],v[1]-1,v[2]+1)),s2=sunT(nx.getUTCFullYear(),nx.getUTCMonth()+1,nx.getUTCDate(),pl[1],pl[2]),
 wd=JP.adWd(v[0],v[1],v[2]),end=s2.rise+1440,dl=(s.set-s.rise)/8,nl=(end-s.set)/8,hl=(s.set-s.rise)/12,nh=(end-s.set)/12,
 tn=JP.todayAD(),nw=new Date(Date.now()+5.75*36e5),now=(Date.UTC(tn[0],tn[1]-1,tn[2])-Date.UTC(v[0],v[1]-1,v[2]))/864e5*1440+nw.getUTCHours()*60+nw.getUTCMinutes(),
 cu=(a,b)=>now>=a&&now<b;
 let rows='',good=[],hc='';
 for(let k=0;k<16;k++){const dy=k<8,i=dy?k:k-8,nm=dy?CD[(wd*3+i)%7]:CN[(wd*2+i)%7],a=dy?s.rise+i*dl:s.set+i*nl,b=a+(dy?dl:nl),q=CQ[nm],c=cu(a,b);
  if(dy&&q===2)good.push(ft(a)+'–'+ft(b));
  rows+=`<tr${c?' class="cu"':''}><td>${dy?'☀️ दिन':'🌙 रात'}</td><td>${ft(a)} – ${ft(b)}${c?' ← अहिले':''}</td><td>${nm}</td><td class="${QC[q]}">${QL[q]}</td></tr>`}
 for(let k=0;k<24;k++){const dy=k<12,a=dy?s.rise+k*hl:s.set+(k-12)*nh,b=a+(dy?hl:nh),x=(HST[wd]+k)%7,c=cu(a,b);
  hc+=`<div class="${HQ[x]===2?'good':HQ[x]===0?'bad':''}${c?' now':''}"><small>${dy?'☀️':'🌙'} ${ft(a)} – ${ft(b)}${c?' ← अहिले':''}</small><b>${HS[x]} होरा</b><small style="color:var(--dim)">${HU[x]}</small></div>`}
 const b=JP.ad2bs(v[0],v[1],v[2]);
 o.innerHTML=box(`🕐 ${b?JP.bsTxt(b)+', ':''}${WN[wd]} — ${pl[0]}`,`<p class="kl-no" style="text-align:left;line-height:1.9">🌅 सूर्योदय <b>${ft(s.rise)}</b> · 🌇 सूर्यास्त <b>${ft(s.set)}</b><br>✨ दिनका शुभ चौघडिया: ${good.join(' · ')||'—'}</p>`)+
 box('⏱ चौघडिया (८ दिन + ८ रात)',`<div class="kl-tw"><table class="kl-t" style="min-width:420px"><tr><th>समय</th><th>अवधि</th><th>चौघडिया</th><th>फल</th></tr>${rows}</table></div>`)+
 box('🪐 होरा (२४ घण्टा)',`<div class="pc">${hc}</div>`)+
 '<p class="kl-no">अमृत, शुभ र लाभ शुभ; चर मध्यम (यात्राका लागि ठीक); उद्वेग, रोग र काल अशुभ मानिन्छन्। समय खगोलीय गणनाबाट अनुमानित हो (१–२ मिनेट फरक पर्न सक्छ)। विवाह जस्ता ठूला कामका लागि अनुभवी ज्योतिषीसँग सोध्नुहोस्।</p>'}
$('cg-d').addEventListener('change',cgR);$('cg-p').addEventListener('change',cgR);
setInterval(()=>{if($('jt-cg').classList.contains('on'))cgR()},60000);

/* ---- गोचर ---- */
const P9=['सूर्य','चन्द्र','मंगल','बुध','गुरु','शुक्र','शनि','राहु','केतु'],FV=[[3,6,10,11],[1,3,6,7,10,11],[3,6,11],[2,4,6,8,10,11],[2,5,7,9,11],[1,2,3,4,5,8,9,11,12],[3,6,11],[3,6,10,11],[3,6,11]],GT=['मान-सम्मान र स्वास्थ्य','मन र भावना','साहस र जग्गाजमिन','बुद्धि, बोली र व्यापार','ज्ञान, धन र सन्तान','प्रेम र सुख-सुविधा','काम र मेहनत','अचानक परिवर्तन','अलगाव र अन्तर्ज्ञान'];
const trn=ms=>{const d=new Date(ms),r=window.JPC(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),0,0,0);return r.sid.map(x=>Math.floor(x/30))};
const vd=n=>n>=6?['राम्रो','kl-ok']:n>=4?['मिश्रित','']:['सावधानी','kl-bad'];
function myR(){try{const v=localStorage.getItem('myRashi');if(v!==null&&SG[+v])$('gc-r').value=+v}catch(e){}}
function gcR(){
 const o=$('gc-o');if(!window.JPC){o.textContent='गणना लोड भएन, पेज रिफ्रेस गर्नुहोस्।';return}
 const r=+$('gc-r').value,hs=a=>a.map(s=>(s-r+12)%12+1),gd=h=>h.filter((x,i)=>FV[i].includes(x)).length,now=trn(Date.now()),h0=hs(now),n0=gd(h0),v0=vd(n0),t=JP.todayAD();
 let wk='';
 if($('gc-p').value==='w'){let rows='';for(let i=0;i<7;i++){const a=new Date(Date.UTC(t[0],t[1]-1,t[2]+i,6,30)),sg=trn(a.getTime()),h=hs(sg),n=gd(h),v=vd(n),b=JP.ad2bs(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate());
  rows+=`<tr><td>${b?JP.bsTxt(b):''} (${WS[a.getUTCDay()]})</td><td>${SG[sg[1]]} (${ND(h[1])}औँ)</td><td>${ND(n)}/९</td><td class="${v[1]}">${v[0]}</td></tr>`}
  wk=box('📆 यो हप्ताको दिनवार गोचर',`<div class="kl-tw"><table class="kl-t" style="min-width:380px"><tr><th>दिन</th><th>चन्द्र गोचर</th><th>शुभ ग्रह</th><th>समग्र</th></tr>${rows}</table></div><p class="kl-no" style="margin-top:.6rem">चन्द्रमा छिटो घुम्छ (करिब २.२५ दिनमा एक राशि), त्यसैले दिनअनुसार फल फेरिन्छ। गुरु, शनि जस्ता ढिला ग्रहको स्थिति हप्ताभर प्रायः उही रहन्छ।</p>`)}
 const rows=P9.map((p,i)=>{const ok=FV[i].includes(h0[i]);return `<tr><td>${p}</td><td>${SG[now[i]]}</td><td>${ND(h0[i])}</td><td class="${ok?'kl-ok':'kl-bad'}">${ok?'शुभ':'अशुभ'}</td><td>${GT[i]} ${ok?'मा सहयोगी':'मा सावधानी'}</td></tr>`}).join('');
 o.innerHTML=box(`🪐 ${SG[r]} राशिको आजको गोचर`,`<p style="text-align:center;font-size:1.3rem;font-weight:800;font-family:Syne,sans-serif"><span class="${v0[1]}">${v0[0]}</span> · शुभ ग्रह ${ND(n0)}/९</p><p class="kl-no">आज चन्द्रमा <b>${SG[now[1]]}</b> राशिमा छ (तपाईंको राशिबाट ${ND(h0[1])}औँ)।${[12,1,2].includes(h0[6])?'<br>⚠ शनि तपाईंको राशिबाट '+ND(h0[6])+' स्थानमा छ — साढेसाती चलिरहेको मानिन्छ, मेहनत र धैर्य बढी चाहिन्छ।':''}</p>`)+wk+
 box('🔭 ग्रह-ग्रहको स्थिति',`<div class="kl-tw"><table class="kl-t" style="min-width:480px"><tr><th>ग्रह</th><th>अहिले राशि</th><th>भाव (आफ्नो राशिबाट)</th><th>गोचर</th><th>असर</th></tr>${rows}</table></div>`)+
 '<p class="kl-no">यो गोचरको सामान्य शास्त्रीय नियम (चन्द्र राशिबाट ग्रहको भाव) अनुसार हो, वेध र जन्मकुण्डलीको दशा मिलाइएको छैन। मनोरञ्जन तथा सामान्य जानकारीका लागि मात्र हो।</p>'}
$('gc-r').addEventListener('change',e=>{e.target.dataset.u=1;gcR()});$('gc-p').addEventListener('change',gcR);

/* ---- नाम बाट राशि ---- */
const NA=[['चु','चे','चो','ला'],['ली','लू','ले','लो'],['अ','ई','उ','ए'],['ओ','वा','वी','वू'],['वे','वो','का','की'],['कू','घ','ङ','छ'],['के','को','हा','ही'],['हू','हे','हो','डा'],['डी','डू','डे','डो'],['मा','मी','मू','मे'],['मो','टा','टी','टू'],['टे','टो','पा','पी'],['पू','ष','ण','ठ'],['पे','पो','रा','री'],['रू','रे','रो','ता'],['ती','तू','ते','तो'],['ना','नी','नू','ने'],['नो','या','यी','यू'],['ये','यो','भा','भी'],['भू','धा','फा','ढा'],['भे','भो','जा','जी'],['खी','खू','खे','खो'],['गा','गी','गू','गे'],['गो','सा','सी','सू'],['से','सो','दा','दी'],['दू','थ','झ','ञ'],['दे','दो','चा','ची']];
const NZ=s=>s.replace(/ि/g,'ी').replace(/ु/g,'ू').replace(/ै/g,'े').replace(/ौ/g,'ो'),TB=[];NA.forEach((a,ni)=>a.forEach((l,p)=>TB.push([NZ(l),ni,p])));
const IV={'अ':'अ','आ':'अ','इ':'ई','ई':'ई','उ':'उ','ऊ':'उ','ए':'ए','ऐ':'ए','ओ':'ओ','औ':'ओ'};
function dev(s){const c=[...s],f=c[0];if(IV[f])return{c:[IV[f]]};if(!/[क-ह]/.test(f))return null;let i=1;while(c[i]==='्'&&/[क-ह]/.test(c[i+1]||''))i+=2;
 const m=/[ािीुूृेैोौ]/.test(c[i]||'')?c[i]:'ा',cs=[f];if(f==='श'||f==='ष')cs.push('स');return{c:cs.map(x=>NZ(x+m)),cons:cs}}
const CM={k:['क'],kh:['ख'],g:['ग'],gh:['घ'],ng:['ङ'],ch:['च'],chh:['छ'],c:['च'],j:['ज'],z:['ज'],jh:['झ'],t:['ट','त'],th:['ठ','थ'],d:['ड','द'],dh:['ढ','ध'],n:['न','ण'],p:['प'],ph:['फ'],f:['फ'],b:['ब'],bh:['भ'],m:['म'],y:['य'],r:['र'],l:['ल'],w:['व'],v:['व'],s:['स','श','ष'],sh:['श','ष','स'],h:['ह']},VI={a:'अ',aa:'अ',i:'ई',ee:'ई',u:'उ',oo:'उ',e:'ए',ai:'ए',o:'ओ',au:'ओ',ou:'ओ'},VM={a:'ा',aa:'ा',i:'ी',ee:'ी',u:'ू',oo:'ू',e:'े',ai:'े',o:'ो',au:'ो',ou:'ो'};
function rom(s){s=s.toLowerCase().replace(/[^a-z]/g,'');if(!s)return null;const vm=s.match(/^(aa|ai|au|ee|oo|ou|[aeiou])/);if(vm)return{c:[VI[vm[1]]]};
 const cm=s.match(/^(chh|ch|kh|gh|ng|jh|th|dh|ph|bh|sh|[kgjtdnpbmyrlwvshzcf])/);if(!cm||!CM[cm[1]])return null;const vv=s.slice(cm[1].length).match(/^(aa|ai|au|ee|oo|ou|[aeiou])/),m=vv?VM[vv[1]]:'ा';return{c:CM[cm[1]].map(x=>NZ(x+m)),cons:CM[cm[1]]}}
function nmGo(){const v=$('nm-i').value.trim(),o=$('nm-o');if(!v){o.innerHTML='';return}
 const q=/[\u0900-\u097F]/.test(v[0])?dev(v):rom(v);
 if(!q){o.innerHTML=box('🔤 नतिजा','<p style="color:var(--dim)">नामको पहिलो अक्षर चिन्न सकिएन। कृपया नाम देवनागरी वा English अक्षरमा लेख्नुहोस्।</p>');return}
 let m=TB.filter(x=>q.c.includes(x[0])),ap=0;if(!m.length&&q.cons){m=TB.filter(x=>q.cons.includes(x[0][0]));ap=1}
 if(!m.length){o.innerHTML=box('🔤 नतिजा','<p style="color:var(--dim)">यो अक्षरसँग मिल्ने नामाक्षर फेला परेन। कुण्डली ट्याबमा जन्म विवरणबाट राशि निकाल्नुहोस्।</p>');return}
 const li=m.map(x=>{const r=Math.floor((x[1]*4+x[2])/9);return `<li><b>${NA[x[1]][x[2]]}</b> → ${NK[x[1]]} नक्षत्र (पाद ${ND(x[2]+1)}) → <b>${SG[r]} राशि</b> <span class="b"><button type="button" data-r="${r}" data-a="rs">🌟 आजको राशिफल</button> <button type="button" data-r="${r}" data-a="gc">🪐 गोचर</button></span></li>`}).join('');
 o.innerHTML=box(`🔤 “${v}” को नाम राशि`,`${ap||m.length>1?'<p class="kl-no" style="text-align:left;margin-bottom:.6rem">'+(ap?'यो अक्षरको सही मात्रा तालिकामा नभेटिएकाले नजिकका सम्भावित नतिजा देखाइएको हो।':'English अक्षरबाट एकभन्दा बढी सम्भावना बन्छ। ठीक नतिजाका लागि देवनागरीमा नाम लेख्नुहोस्।')+'</p>':''}<ul class="kl-ul ksv">${li}</ul>`)+
 '<p class="kl-no">यो नामाक्षरमा आधारित नाम राशि हो। जन्मकुण्डली (चन्द्र राशि) बाट निस्किने राशि फरक पर्न सक्छ — जन्म समय थाहा भए कुण्डली ट्याब बढी भरपर्दो हुन्छ।</p>'}
$('nm-b').onclick=nmGo;$('nm-i').addEventListener('keydown',e=>{if(e.key==='Enter')nmGo()});
$('nm-o').addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const r=+b.dataset.r;
 if(b.dataset.a==='rs'){const c=document.querySelector('#rs-g [data-rs="'+r+'"]');if(c)c.click()}
 else{$('gc-r').value=r;$('gc-r').dataset.u=1;jf.querySelector('[data-jt="gc"]').click()}});

/* ---- राशिफल शेयर (WhatsApp / Facebook) ---- */
const mb=$('crs-mb');
if(mb){
 new MutationObserver(()=>{if(!mb.querySelector('[data-my]')||mb.querySelector('.shr'))return;const nv=mb.querySelector('.crs-nav');if(!nv)return;
  nv.insertAdjacentHTML('afterend','<div class="crs-nav shr" style="margin-top:.7rem"><button type="button" data-sh="wa" style="background:#25d366;border-color:#25d366;color:#fff">💬 WhatsApp मा शेयर</button><button type="button" data-sh="fb" style="background:#1877f2;border-color:#1877f2;color:#fff">📘 Facebook मा शेयर</button>'+(navigator.share?'<button type="button" data-sh="nt">📤 अन्य</button>':'')+'</div>')}).observe(mb,{childList:true});
 mb.addEventListener('click',e=>{const b=e.target.closest('[data-sh]');if(!b)return;
  const g=s=>{const x=mb.querySelector(s);return x?x.textContent.replace(/\s+/g,' ').trim():''},u=/^https?:/.test(location.href)?location.origin+location.pathname+'#jyotish':'https://pabansubedi.com.np/#jyotish',
  t='🌟 '+g('h3')+' — '+g('.crs-meta span').replace(/^📅\s*/,'')+'\n'+g('.crs-sum')+'\n'+g('.rs-ch')+'\n\n👉 आफ्नो राशिफल यहाँ हेर्नुहोस्: '+u,k=b.dataset.sh;
  if(k==='wa')window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener');
  else if(k==='fb')window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(u)+'&quote='+encodeURIComponent(t),'_blank','noopener');
  else if(navigator.share)navigator.share({text:t}).catch(()=>{})})}

/* ---- धेरै कुण्डली सेभ (यही ब्राउजरमा) ---- */
const kf=$('kl-f'),kd=$('kl-d'),ko=$('kl-out'),pv=document.querySelector('.kl-pv');
if(kf&&ko){
 const SK='jpKundali',ld=()=>{try{return JSON.parse(localStorage.getItem(SK)||'[]')}catch(e){return[]}},sv=a=>{try{localStorage.setItem(SK,JSON.stringify(a));return 1}catch(e){return 0}};
 if(pv)pv.textContent='🔒 तपाईंको विवरण यही ब्राउजरमा गणना हुन्छ र कतै पठाइँदैन। चाहनुभयो भने 💾 सेभ थिचेर परिवारका कुण्डली यही ब्राउजर (फोन/कम्प्युटर) मै राख्न सकिन्छ।';
 ko.insertAdjacentHTML('beforebegin','<div id="kl-sv" style="max-width:900px;margin:0 auto"></div>');
 let cur=null;
 kf.addEventListener('submit',()=>{if(kd.value&&$('kl-t').value)cur={n:$('kl-nm').value.trim(),d:kd.value,t:$('kl-t').value,p:$('kl-p').selectedOptions[0].textContent,la:$('kl-la').value,lo:$('kl-lo').value,tz:$('kl-tz').value}},true);
 function list(){const a=ld(),el=$('kl-sv');if(!a.length){el.innerHTML='';return}
  el.innerHTML=box('📂 सेभ गरिएका कुण्डली ('+ND(a.length)+')','<ul class="kl-ul ksv">'+a.map((k,i)=>`<li><span><b>${k.n||'नाम नराखिएको'}</b> · ${k.d} · ${ND(k.t)} · ${k.p}</span><span class="b"><button type="button" data-o="${i}">👁 खोल्नुहोस्</button><button type="button" data-x="${i}">🗑</button></span></li>`).join('')+'</ul>')}
 function open(i){const k=ld()[i];if(!k)return;$('kl-nm').value=k.n;const c=$('kl-cal');if(c){c.value='AD';c.dispatchEvent(new Event('change'))}kd.value=k.d;$('kl-t').value=k.t;
  const p=$('kl-p'),x=[...p.options].findIndex(o=>o.textContent===k.p);p.value=x<0?p.options.length-1:x;p.dispatchEvent(new Event('change'));$('kl-la').value=k.la;$('kl-lo').value=k.lo;$('kl-tz').value=k.tz;
  kf.requestSubmit?kf.requestSubmit():kf.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true}))}
 $('kl-sv').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.o!==undefined)open(+b.dataset.o);if(b.dataset.x!==undefined){const a=ld();a.splice(+b.dataset.x,1);sv(a);list()}});
 new MutationObserver(()=>{const bar=ko.querySelector('.kl-bar');if(!bar||bar.querySelector('#kl-svb'))return;
  bar.insertAdjacentHTML('afterbegin','<button type="button" id="kl-svb">💾 यो कुण्डली सेभ गर्नुहोस्</button>');
  $('kl-svb').onclick=e=>{if(!cur)return;const a=ld().filter(k=>!(k.n===cur.n&&k.d===cur.d&&k.t===cur.t&&k.p===cur.p));a.unshift(cur);if(a.length>30)a.length=30;e.target.textContent=sv(a)?'✅ सेभ भयो':'⚠ सेभ गर्न सकिएन';list()}}).observe(ko,{childList:true});
 list()}
})();
