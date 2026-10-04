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
const todayAD=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kathmandu'}).format(new Date()).split('-').map(Number);

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
 return{t,nk,lm:(Math.floor(r2.sid[0]/30)+1)%12,sun:Math.floor(r.sid[0]/30)}}

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

const jf=$('jt-f'),kl=$('jt-kl');
if(!jf||!kl)return;
jf.insertAdjacentHTML('beforeend','<button data-jt="ml" role="tab">💞 कुण्डली मिलान</button><button data-jt="pt" role="tab">📅 पात्रो</button><button data-jt="mh" role="tab">🕉️ मुहूर्त</button>');
kl.insertAdjacentHTML('afterend',`<div class="jt-p" id="jt-ml"><p class="rs-top">वर र वधूको जन्म विवरण भरेर अष्टकूट (३६ गुण) मिलान हेर्नुहोस्।</p><form id="ml-f"><div class="ml-g" id="ml-g"></div><button class="btn bp" type="submit" style="margin:1rem auto;display:block">💞 गुण मिलान हेर्नुहोस्</button></form><div class="kl-out" id="ml-out"></div></div>
<div class="jt-p" id="jt-pt"><div class="pt-h"><button type="button" id="pt-pv" aria-label="अघिल्लो महिना">‹</button><h3 id="pt-t"></h3><button type="button" id="pt-nx" aria-label="अर्को महिना">›</button><button type="button" id="pt-td">आज</button></div><div class="pt-w" id="pt-w"></div><div class="pt-g" id="pt-g"></div><div class="tz-r" id="pt-d"></div><div class="kl-box" style="margin-top:1.2rem"><h3>🎉 यो महिनाका चाडपर्व र विशेष दिन</h3><ul class="kl-ul" id="pt-f"></ul></div><p class="kl-no">तिथि काठमाडौँको बिहान ६ बजे अनुसार हो। चाडपर्वका मिति खगोलीय गणनाबाट अनुमानित हुन् (१ दिनसम्म फरक पर्न सक्छ), आधिकारिक पात्रो र सरकारी बिदा सूची हेरेर पक्का गर्नुहोस्।</p></div>
<div class="jt-p" id="jt-mh"><p class="rs-top">विवाह, गृहप्रवेश आदिका लागि सामान्य शास्त्रीय नियम (तिथि, नक्षत्र, वार) अनुसार सम्भावित शुभ दिनहरू।</p><div class="kl-f"><div><label>कार्य</label><select id="mh-t"><option value="b">विवाह</option><option value="u">ब्रतबन्ध (उपनयन)</option><option value="g">गृहप्रवेश</option><option value="n">नामकरण / अन्नप्राशन</option><option value="v">नयाँ व्यापार / सवारी खरिद</option><option value="y">यात्रा आरम्भ</option></select></div><div><label>अवधि</label><select id="mh-p"><option value="30">अर्को ३० दिन</option><option value="90">अर्को ९० दिन</option><option value="180">अर्को १८० दिन</option></select></div><button class="btn bp wide" type="button" id="mh-go">🕉️ शुभ दिन खोज्नुहोस्</button></div><div class="kl-out" id="mh-out"></div></div>`);
const PN=['jt-rs','jt-kl','jt-ml','jt-pt','jt-mh'];
jf.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;PN.forEach(id=>{const p=$(id);if(p)p.classList.toggle('on',id==='jt-'+b.dataset.jt)});if(b.dataset.jt==='pt')renderPatro()});

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
 $('pt-t').textContent=`${BSM[M-1]} ${NDG(Y)}`;
 let o='<span></span>'.repeat(fw);
 for(let d=1;d<=n;d++){const a=bs2ad(Y,M,d),key=Y+'-'+M+'-'+d,x=cache[key]||(cache[key]=day(a,[Y,M,d]));PD.push(x);
  const wd=(fw+d-1)%7,isT=td&&td[0]===Y&&td[1]===M&&td[2]===d;
  if(x.n.length)fl.push(`<li><b>${NDG(d)} ${BSM[M-1]}</b> (${WS[wd]}): ${x.n.join(', ')}</li>`);
  o+=`<button type="button" class="pt-c${wd===6?' sat':''}${isT?' td':''}${x.big?' fs':''}" data-d="${d}" title="${x.n.join(', ')}"><b>${NDG(d)}</b><em>${NDG(a[2])}</em><i>${tn(x.p.t)}</i></button>`}
 $('pt-g').innerHTML=o;$('pt-f').innerHTML=fl.join('')||'<li>यो महिनामा विशेष दिन फेला परेन।</li>';
 showDay(td&&td[0]===Y&&td[1]===M?td[2]:1)}
function showDay(d){const a=bs2ad(Y,M,d),x=PD[d-1],wd=adWd(...a);
 document.querySelectorAll('#pt-g .pt-c').forEach(c=>c.classList.toggle('sel',+c.dataset.d===d));
 $('pt-d').innerHTML=`<b>${NDG(d)} ${BSM[M-1]} ${NDG(Y)}, ${WN[wd]}</b> <span style="color:var(--dim)">(${a[0]}-${pad(a[1])}-${pad(a[2])} AD)</span><br>तिथि: <b>${pk(x.p.t)} ${tn(x.p.t)}</b> · नक्षत्र: <b>${NK[x.p.nk]}</b> · चान्द्र मास: <b>${LM[x.p.lm]}</b>${x.n.length?`<br>🎉 ${x.n.join(', ')}`:''}`}
$('pt-g').addEventListener('click',e=>{const c=e.target.closest('.pt-c');if(c)showDay(+c.dataset.d)});
const go=k=>{M+=k;if(M>12){M=1;Y++}if(M<1){M=12;Y--}if(Y<2000)Y=2000;if(Y>2099)Y=2099;renderPatro()};
$('pt-pv').onclick=()=>go(-1);$('pt-nx').onclick=()=>go(1);$('pt-td').onclick=()=>{const b=ad2bs(...todayAD());Y=b[0];M=b[1];renderPatro()};

/* ---- Muhurta ---- */
const MR={b:{nk:[3,4,9,11,12,14,16,18,20,25,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:1},u:{nk:[0,3,4,7,11,12,13,16,20,21,22,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:1},g:{nk:[3,4,7,11,12,16,20,25,26],tt:[2,3,5,7,10,11,12,13],wd:[1,3,4,5],ex:1,sh:0},n:{nk:[0,3,4,6,7,11,12,16,20,21,22,26],tt:[2,3,5,6,7,10,11,12,13],wd:[1,3,4,5],ex:0,sh:0},v:{nk:[0,3,4,6,7,11,12,13,14,16,20,21,22,26],tt:[1,2,3,5,6,7,10,11,12,13],wd:[1,3,4,5],ex:0,sh:0},y:{nk:[0,3,4,6,7,12,14,16,21,22,26],tt:[2,3,5,7,10,11,13],wd:[1,3,4,5],ex:0,sh:0}};
$('mh-go').onclick=()=>{
 const Rl=MR[$('mh-t').value],N=+$('mh-p').value,t0=todayAD(),rows=[];
 for(let i=0;i<N&&rows.length<60;i++){const a=new Date(Date.UTC(t0[0],t0[1]-1,t0[2]+i)),ad=[a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate()],p=panch(...ad,6),tt=((p.t-1)%15)+1,wd=a.getUTCDay();
  if(!Rl.nk.includes(p.nk)||!Rl.tt.includes(tt)||!Rl.wd.includes(wd))continue;
  if(Rl.sh&&p.t>15&&tt>5)continue;
  if(Rl.ex){const ch=(p.lm===3&&p.t>=11)||[4,5,6].includes(p.lm)||(p.lm===7&&p.t<=11);if(ch||p.sun===8||p.sun===11)continue}
  rows.push(`<tr><td>${bsTxt(ad2bs(...ad))}</td><td>${ad[0]}-${pad(ad[1])}-${pad(ad[2])}</td><td>${WN[wd]}</td><td>${pk(p.t)} ${tn(p.t)}</td><td>${NK[p.nk]}</td></tr>`)}
 $('mh-out').innerHTML=`<div class="kl-box"><h3>🕉️ सम्भावित शुभ दिन (${NDG(rows.length)})</h3>${rows.length?`<div class="kl-tw"><table class="kl-t"><tr><th>मिति (वि.सं.)</th><th>AD</th><th>वार</th><th>तिथि</th><th>नक्षत्र</th></tr>${rows.join('')}</table></div>`:'<p style="color:var(--dim)">यो अवधिमा सबै नियम मिल्ने दिन फेला परेन। अवधि बढाएर हेर्नुहोस्।</p>'}</div><p class="kl-no">नोट: यो सामान्य शास्त्रीय नियम (शुभ तिथि, नक्षत्र, वार; चातुर्मास र खरमास छोडेर) अनुसार सम्भावित दिनको सूची हो। लग्न, शुद्धि, कुण्डली मिलान र स्थानीय परम्परा मिलाएर अन्तिम मुहूर्त अनुभवी पण्डित/ज्योतिषीसँग पक्का गर्नुहोस्।</p>`};

/* ---- Kundali Milan ---- */
const VN=['शूद्र','वैश्य','क्षत्रिय','ब्राह्मण'],VG=['चतुष्पद','मानव','जलचर','वनचर','कीट'],GN=['देव','मनुष्य','राक्षस'],NDN=['आदि','मध्य','अन्त्य'],YN=['घोडा','हात्ती','भेडा','सर्प','कुकुर','बिरालो','मुसा','गाई','भैँसी','बाघ','मृग','बाँदर','न्याउरीमुसा','सिंह'],PN7=['सूर्य','चन्द्र','मंगल','बुध','गुरु','शुक्र','शनि'];
const T_VAR=[2,1,0,3,2,1,0,3,2,1,0,3],T_VAS=[0,0,1,2,3,1,1,4,1,0,1,2],T_GAN=[0,1,2,1,0,1,0,0,2,2,1,1,0,2,0,2,0,2,2,1,1,0,2,2,1,1,0],T_NAD=[0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2],T_YON=[0,1,2,3,3,4,5,2,5,6,6,7,8,9,8,9,10,10,4,11,12,11,13,0,13,7,1],YEN=[[7,9],[1,13],[0,8],[4,10],[3,12],[11,2],[5,6]];
const REL=[[2,2,2,1,2,0,0],[2,2,1,2,1,1,1],[2,2,2,0,2,1,1],[2,0,1,2,1,2,1],[2,2,2,0,2,0,1],[0,0,1,2,1,2,2],[0,0,0,2,1,2,2]];
const PLC=[['काठमाडौँ',27.7172,85.3240],['पोखरा',28.2096,83.9856],['भद्रपुर / बिर्तामोड (झापा)',26.6469,87.9953],['दमक (झापा)',26.6602,87.7000],['विराटनगर',26.4525,87.2718],['धरान',26.8065,87.2846],['इटहरी',26.6637,87.2814],['इलाम',26.9100,87.9283],['जनकपुर',26.7288,85.9266],['वीरगञ्ज',27.0104,84.8770],['भरतपुर (चितवन)',27.6833,84.4333],['बुटवल',27.7006,83.4484],['नेपालगञ्ज',28.0500,81.6167],['धनगढी',28.6833,80.6000]];
$('ml-g').innerHTML=[['b','🤵 वर (केटा)'],['g','👰 वधू (केटी)']].map(([k,t])=>`<div class="tz-c"><h3>${t}</h3><label>नाम</label><input id="ml-${k}-n"><label>मितिको प्रकार</label><select id="ml-${k}-c"><option value="BS">विक्रम सम्वत् (BS)</option><option value="AD">अंग्रेजी (AD)</option></select><label>जन्म मिति (YYYY-MM-DD)</label><input id="ml-${k}-d" placeholder="2055-01-29"><label>जन्म समय</label><input type="time" id="ml-${k}-t"><label>जन्म स्थान</label><select id="ml-${k}-p">${PLC.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('')}</select></div>`).join('');
function person(k){const g=s=>$('ml-'+k+'-'+s).value,pd=parseD(g('d'),g('c'));if(!pd||!g('t'))return null;
 const [Hh,Mi]=g('t').split(':').map(Number),pl=PLC[+g('p')],r=calc(pd[0],pd[1],pd[2],Hh,Mi,pd[0]<1986?5.5:5.75,pl[1],pl[2]),as=Math.floor(r.asc/30),mh=(Math.floor(r.sid[2]/30)-as+12)%12+1;
 return{n:g('n').trim()||(k==='b'?'वर':'वधू'),ms:Math.floor(r.sid[1]/30),ni:Math.floor(r.sid[1]/NSZ),man:[1,2,4,7,8,12].includes(mh),bs:bsTxt(ad2bs(...pd))}}
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
 out.innerHTML=`<h1 class="grad" style="text-align:center;font-family:Syne,sans-serif;font-size:1.5rem">कुण्डली मिलान</h1><p class="kl-no" style="margin-bottom:1rem">🤵 ${b.n} (${b.bs}) × 👰 ${g.n} (${g.bs})</p>
 ${box('💞 कुल गुण',`<p style="font-size:2rem;font-weight:800;text-align:center;font-family:Syne,sans-serif"><span class="grad">${NDG(tot)}</span> / ३६</p><p style="text-align:center;font-weight:700">${vd}</p>`)}
 ${box('🔢 अष्टकूट विवरण',`<div class="kl-tw"><table class="kl-t"><tr><th>कूट</th><th>पूर्णाङ्क</th><th>प्राप्त</th><th>विवरण</th></tr>${K.map(x=>`<tr><td>${x[0]}</td><td>${NDG(x[1])}</td><td>${NDG(x[2])}</td><td>${x[3]}</td></tr>`).join('')}</table></div>`)}
 ${box('👤 चन्द्र राशि / नक्षत्र',`<ul class="kl-ul"><li><b>${b.n}:</b> ${SG[b.ms]} राशि, ${NK[b.ni]} नक्षत्र</li><li><b>${g.n}:</b> ${SG[g.ms]} राशि, ${NK[g.ni]} नक्षत्र</li></ul>`)}
 ${box('⚖️ मंगल दोष र सावधानी',`<ul class="kl-ul"><li>${mg}</li>${warn.map(x=>`<li class="kl-bad">⚠ ${x}</li>`).join('')}</ul>`)}
 <p class="kl-no">नोट: यो चन्द्र राशि र नक्षत्रमा आधारित अष्टकूट मिलान हो। वश्य र योनिको अङ्क सरल तालिकाबाट निकालिएको छ, त्यसैले अरू सफ्टवेयरसँग केही अङ्क फरक पर्न सक्छ। विवाहजस्तो ठूलो निर्णयका लागि अनुभवी ज्योतिषीसँग परामर्श गर्नुहोस्।</p>`;
 out.scrollIntoView({behavior:'smooth',block:'start'})});

/* ---- Tools: AD <-> BS converter ---- */
const tg=document.querySelector('.tz-g');
if(tg){tg.insertAdjacentHTML('afterbegin','<div class="tz-c"><h3>📅 AD ↔ BS मिति परिवर्तक</h3><label>अंग्रेजी मिति (AD)</label><input type="date" id="cv-ad"><label>विक्रम सम्वत् (BS) — YYYY-MM-DD</label><input id="cv-bs" placeholder="2083-06-18"><div class="tz-r" id="cv-r">मिति राखेपछि परिवर्तित मिति यहाँ देखिन्छ।</div></div>');
 const show=(a,b)=>{$('cv-r').innerHTML=`AD: <b>${a[0]}-${pad(a[1])}-${pad(a[2])}</b><br>वि.सं.: <b>${bsTxt(b)}</b><br>वार: <b>${WN[adWd(...a)]}</b>`};
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
