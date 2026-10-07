/* jyotish-more.js — थप चार्ट (D1/चन्द्र/D9/D10/D7/D3/D12), उत्तर/दक्षिण भारतीय शैली, थप योग */
(function(){
const $=id=>document.getElementById(id),ko=$('kl-out');if(!ko)return;
const ND=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]);
const PN=['सूर्य','चन्द्र','मंगल','बुध','गुरु','शुक्र','शनि','राहु','केतु'],PS=['सू','चं','मं','बु','गु','शु','श','रा','के'];
const SL=[2,5,3,1,0,3,5,2,4,6,6,4]; /* राशि स्वामी: मेष→मीन */
const OWN_={2:[0,7],3:[2,5],4:[8,11],5:[1,6],6:[9,10]},EXA={2:9,3:5,4:3,5:11,6:6};
const DV={
 d1:['लग्न (D1)',x=>Math.floor(x/30)],
 mo:['चन्द्र कुण्डली',null],
 d9:['नवांश (D9)',x=>Math.floor(x*9/30)%12],
 d10:['दशमांश (D10) — कर्म/पेशा',x=>{const s=Math.floor(x/30),p=Math.floor((x%30)/3);return(s+(s%2?p+8:p))%12}],
 d7:['सप्तांश (D7) — सन्तान',x=>{const s=Math.floor(x/30),p=Math.floor((x%30)*7/30);return(s+(s%2?p+6:p))%12}],
 d3:['द्रेष्काण (D3) — भाइबहिनी',x=>{const s=Math.floor(x/30),p=Math.floor((x%30)/10);return(s+p*4)%12}],
 d12:['द्वादशांश (D12) — परिवार',x=>{const s=Math.floor(x/30),p=Math.floor((x%30)/2.5);return(s+p)%12}]
};
function signs(r,k){
 if(k==='mo'){const m=Math.floor(r.sid[1]/30);return{as:m,sg:r.sid.map(x=>Math.floor(x/30))}}
 const f=DV[k][1];return{as:f(r.asc),sg:r.sid.map(f)}}
const gl=(sg,s)=>sg.map((v,i)=>v===s?PS[i]:null).filter(Boolean);
function north(as,sg){
 const C=[[150,62],[75,30],[32,72],[68,150],[32,228],[75,270],[150,238],[225,270],[268,228],[232,150],[268,72],[225,30]];
 let o='<svg class="kl-svg" viewBox="0 0 300 300"><rect class="ln" x="1" y="1" width="298" height="298"/><path class="ln" d="M1 1L299 299M299 1L1 299M150 1L299 150L150 299L1 150Z"/>';
 C.forEach((c,h)=>{const s=(as+h)%12,g=gl(sg,s);if(!h)g.unshift('ल');
  o+=`<text class="n" x="${c[0]}" y="${c[1]-8}">${ND(s+1)}</text>`;
  for(let j=0;j<g.length;j+=3)o+=`<text class="g" x="${c[0]}" y="${c[1]+7+j/3*14}">${g.slice(j,j+3).join(' ')}</text>`});
 return o+'</svg>'}
function south(as,sg){
 const P={11:[0,0],0:[1,0],1:[2,0],2:[3,0],3:[3,1],4:[3,2],5:[3,3],6:[2,3],7:[1,3],8:[0,3],9:[0,2],10:[0,1]};
 let o='<svg class="kl-svg" viewBox="0 0 300 300"><rect class="ln" x="1" y="1" width="298" height="298"/><path class="ln" d="M75 1V299M150 1V75M150 225V299M225 1V299M1 75H299M1 150H75M225 150H299M1 225H299"/>';
 for(let s=0;s<12;s++){const[cx,cy]=P[s],x=cx*75+37.5,y=cy*75,g=gl(sg,s);if(s===as)g.unshift('ल');
  if(s===as)o+=`<path class="ln" d="M${cx*75+1} ${y+14}L${cx*75+14} ${y+1}" />`;
  o+=`<text class="n" x="${x}" y="${y+14}">${ND(s+1)}</text>`;
  for(let j=0;j<g.length;j+=2)o+=`<text class="g" x="${x}" y="${y+34+j/2*14}">${g.slice(j,j+2).join(' ')}</text>`}
 return o+'</svg>'}
/* ---- योग ---- */
function yogas(r){
 const sg=r.sid.map(x=>Math.floor(x/30)),as=Math.floor(r.asc/30),hs=sg.map(s=>(s-as+12)%12+1),out=[];
 const lordOf=h=>SL[(as+h-1)%12],add=(n,t)=>out.push([n,t]);
 const nmH={2:'रुचक (मंगल)',3:'भद्र (बुध)',4:'हंस (गुरु)',5:'मालव्य (शुक्र)',6:'शश (शनि)'};
 [2,3,4,5,6].forEach(p=>{if([1,4,7,10].includes(hs[p])&&(OWN_[p].includes(sg[p])||EXA[p]===sg[p]))add(`पञ्चमहापुरुष — ${nmH[p]} योग`,`${PN[p]} आफ्नै वा उच्च राशिमा केन्द्रमा छ। यसले व्यक्तित्व, नेतृत्व र प्रतिष्ठा दिने मानिन्छ।`)});
 const seen={};[4,7,10,1].forEach(k=>[5,9].forEach(t=>{const a=lordOf(k),b=lordOf(t);if(a!==b&&sg[a]===sg[b]&&!seen[a+'-'+b]){seen[a+'-'+b]=1;add('राजयोग',`केन्द्र (${ND(k)}) र त्रिकोण (${ND(t)}) भावका स्वामी ${PN[a]} र ${PN[b]} एकै राशिमा छन्। यो मान, पद र उन्नतिको योग मानिन्छ।`)}}));
 const l2=lordOf(2),l11=lordOf(11);if(l2!==l11&&(sg[l2]===sg[l11]||hs[l2]===11||hs[l11]===2))add('धन योग','दोस्रो (धन) र एघारौँ (लाभ) भावका स्वामीबीच सम्बन्ध छ। यसले आम्दानी र सञ्चयमा सहयोग दिने मानिन्छ।');
 if([6,8,12].some(h=>{const x=hs[lordOf(h)];return x!==h&&[6,8,12].includes(x)}))add('विपरीत राजयोग (सम्भावित)','६, ८ वा १२ औँ भावका स्वामी अर्को कठिन भावमा छन्। कठिनाइपछि अप्रत्याशित सफलता मिल्न सक्ने मानिन्छ।');
 const mS=sg[1],has=o=>[2,3,4,5,6].some(p=>sg[p]===(mS+o)%12);
 const a=has(1),b=has(11);
 if(a&&b)add('दुरुधरा योग','चन्द्रमाको अगाडि र पछाडि दुवै पट्टि ग्रह छन्। सुख-साधन र उदारता दिने मानिन्छ।');
 else if(a)add('सुनफा योग','चन्द्रबाट दोस्रो भावमा ग्रह छ। आफ्नै प्रयासले धन र नाम कमाउने मानिन्छ।');
 else if(b)add('अनफा योग','चन्द्रबाट बाह्रौँ भावमा ग्रह छ। स्वास्थ्य, सुन्दरता र सम्मान दिने मानिन्छ।');
 if(!a&&!b&&![2,3,4,5,6].some(p=>sg[p]===mS))add('केमद्रुम योग (सम्भावित)','चन्द्रमाको वरपर र साथमा ग्रह छैनन्। एक्लोपन वा आर्थिक उतारचढाव आउन सक्छ भन्ने मान्यता छ; अन्य शुभ योगले यसलाई कम गर्छ।');
 if([3,4,5].filter(p=>[6,7,8].includes((sg[p]-mS+12)%12+1)).length>=2)add('अधि योग','शुभ ग्रहहरू चन्द्रबाट ६, ७, ८ मा छन्। यसले नेतृत्व र विजयको योग दिने मानिन्छ।');
 if(sg[0]===sg[7]||sg[0]===sg[8]||hs[7]===9||hs[8]===9)add('पितृ दोष (सम्भावित)','सूर्य राहु/केतुसँग वा राहु/केतु नवौँ भावमा छन्। पितृ-तर्पण र बुबाको आशीर्वादले शान्ति मिल्ने मान्यता छ।');
 if([7,8].some(n=>sg[n]===sg[0]||sg[n]===sg[1]))add('ग्रहण दोष (सम्भावित)','सूर्य वा चन्द्र राहु/केतुसँग एकै राशिमा छन्। मनमा द्विविधा वा अवरोध आउन सक्ने मानिन्छ।');
 return out}
/* ---- UI ---- */
const box=(t,b)=>`<div class="kl-box"><h3>${t}</h3>${b}</div>`;
let mode='n';
function paint(){
 const L=window.JLAST;if(!L)return;const k=($('jm-k')||{}).value||'d1',{as,sg}=signs(L.r,k);
 $('jm-c').innerHTML=`<h4 style="text-align:center;margin:.4rem 0">${DV[k][0]}</h4>`+(mode==='n'?north:south)(as,sg)}
function inject(){
 const L=window.JLAST;if(!L||!ko.querySelector('.kl-sum')||$('jm-c'))return;
 const find=s=>[...ko.querySelectorAll('.kl-box')].find(b=>(b.querySelector('h3')||{}).textContent.includes(s));
 const cb=find('कुण्डली चार्ट'),yb=find('योग र दोष');
 if(cb)cb.insertAdjacentHTML('afterend',`<div class="kl-box"><h3>🔭 थप चार्ट (D1, चन्द्र, D9, D10, D7, D3, D12)</h3><div class="kl-f"><div><label>चार्ट</label><select id="jm-k">${Object.keys(DV).map(k=>`<option value="${k}">${DV[k][0]}</option>`).join('')}</select></div><div><label>शैली</label><select id="jm-m"><option value="n">उत्तर भारतीय</option><option value="s">दक्षिण भारतीय</option></select></div></div><div id="jm-c"></div><p class="kl-no" style="margin-top:.6rem">दक्षिण भारतीय शैलीमा राशि स्थिर हुन्छ (१ मेष माथि दोस्रो खाना), ल = लग्न।</p></div>`);
 const ys=yogas(L.r);
 if(yb)yb.insertAdjacentHTML('afterend',box('🌟 थप योग (स्वचालित पहिचान)',ys.length?`<ul class="kl-ul">${ys.map(y=>`<li><b class="kl-ok">✔ ${y[0]}:</b> ${y[1]}</li>`).join('')}</ul><p class="kl-no">यी सामान्य नियममा आधारित सङ्केत हुन्; पूर्ण फल अन्य ग्रह-बल हेरेर मात्र भन्न सकिन्छ।</p>`:'<p class="kl-no">थप कुनै विशेष योग भेटिएन।</p>'));
 if($('jm-c')){$('jm-k').onchange=paint;$('jm-m').onchange=e=>{mode=e.target.value;paint()};paint()}}
new MutationObserver(inject).observe(ko,{childList:true});
})();
