/* tools-more.js — अङ्क→शब्द, BS उमेर, टाइपिङ टेस्ट, पासवर्ड, विनिमय दर / सुन-चाँदी */
(function(){
const host=document.getElementById('tools');if(!host)return;
const $=id=>document.getElementById(id),ND=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]);
const EN=s=>String(s).replace(/[०-९]/g,c=>'०१२३४५६७८९'.indexOf(c));
const st=document.createElement('style');
st.textContent='.tm-g textarea,.tm-g input[type=text],.tm-g select{width:100%;padding:.8rem 1rem;border-radius:14px;border:1px solid var(--bd);background:var(--card);color:var(--text);font:inherit}.tm-g textarea{min-height:90px;resize:vertical}.tm-b{margin:.6rem .4rem 0 0;padding:.6rem 1.1rem;border-radius:100px;border:1px solid var(--bd);background:linear-gradient(135deg,var(--p),var(--s));color:#fff;font:600 .85rem inherit;font-family:inherit;cursor:pointer}.tm-b.o{background:none;color:var(--text)}.tm-g .tz-r{word-break:break-word}.tm-g canvas,.tm-g img{max-width:100%;border-radius:12px}.tm-ty{font-size:1.05rem;line-height:2;padding:.8rem;border-radius:14px;background:var(--card);border:1px solid var(--bd)}.tm-ty .ok{color:#4d7c0f}.tm-ty .bad{color:#ef4444;text-decoration:underline}';
document.head.appendChild(st);
const sec=document.createElement('section');sec.id='tools2';sec.className='cs';
sec.innerHTML=`<div class="ct"><div class="sh fu"><div class="st">More Tools</div><h2>नेपाली <span class="grad">अनलाइन टूल्स</span></h2></div><div class="tz-g tm-g">
<div class="tz-c"><h3>🔢 अङ्क → नेपाली शब्द</h3><label>रकम</label><input type="text" id="nw-i" inputmode="decimal" placeholder="1250075.50"><div class="tz-r" id="nw-o">रकम हालेपछि शब्दमा देखिन्छ।</div></div>
<div class="tz-c"><h3>🎂 वि.सं. उमेर क्याल्कुलेटर</h3><label>जन्म मिति (वि.सं.)</label><input type="text" id="ba-i" placeholder="2055-01-29"><div class="tz-r" id="ba-o">मिति हालेपछि उमेर देखिन्छ।</div></div>
<div class="tz-c wide"><h3>⌨️ टाइपिङ स्पिड टेस्ट (६० सेकेन्ड)</h3><select id="ty-l"><option value="e">English</option><option value="n">नेपाली (Unicode)</option></select><div class="tm-ty" id="ty-t" style="margin-top:.8rem"></div><textarea id="ty-i" placeholder="यहाँ टाइप गर्न सुरु गर्नुहोस्…" style="margin-top:.6rem;min-height:70px"></textarea><button class="tm-b" id="ty-n">नयाँ टेस्ट</button><div class="tz-r" id="ty-o">टाइप गर्न थालेपछि समय सुरु हुन्छ।</div></div>
<div class="tz-c"><h3>🔐 पासवर्ड जेनेरेटर</h3><label>लम्बाइ: <span id="pw-n">16</span></label><input type="range" id="pw-l" min="8" max="64" value="16"><label><input type="checkbox" id="pw-s" checked> चिन्ह (!@#)</label><button class="tm-b" id="pw-b">बनाउनुहोस्</button><button class="tm-b o" id="pw-c">कपी</button><div class="tz-r" id="pw-o"></div></div>
<div class="tz-c wide"><h3>💱 विनिमय दर (NRB) ‑ र सुन/चाँदी क्याल्कुलेटर</h3><div id="fx-o" class="tz-r">दर लोड गर्दै…</div><label>रकम</label><input type="text" id="fx-a" value="100"><select id="fx-c" style="margin-top:.5rem"></select><div class="tz-r" id="fx-r"></div>
<label style="margin-top:1.4rem">सुन/चाँदी: आजको प्रति तोला भाउ (रु) — आफैले हाल्नुहोस्</label><input type="text" id="gd-p" placeholder="जस्तै 150000"><label>तौल (तोला)</label><input type="text" id="gd-w" value="1"><div class="tz-r" id="gd-o">भाउ हालेपछि मूल्य देखिन्छ (१ तोला = ११.६६४ ग्राम)।</div></div>
</div></div>`;
host.insertAdjacentElement('afterend',sec);
/* ---------- अङ्क → शब्द ---------- */
const W='शून्य,एक,दुई,तीन,चार,पाँच,छ,सात,आठ,नौ,दश,एघार,बाह्र,तेह्र,चौध,पन्ध्र,सोह्र,सत्र,अठार,उन्नाइस,बीस,एक्काइस,बाइस,तेइस,चौबीस,पच्चीस,छब्बीस,सत्ताइस,अठ्ठाइस,उनन्तीस,तीस,एकतीस,बत्तीस,तेत्तीस,चौँतीस,पैँतीस,छत्तीस,सैँतीस,अठतीस,उनन्चालीस,चालीस,एकचालीस,बयालीस,त्रिचालीस,चौवालीस,पैँतालीस,छयालीस,सतचालीस,अठचालीस,उनन्चास,पचास,एकाउन्न,बाउन्न,त्रिपन्न,चौवन्न,पचपन्न,छपन्न,सन्ताउन्न,अन्ठाउन्न,उनान्साठी,साठी,एकसट्ठी,बैसट्ठी,त्रिसट्ठी,चौसट्ठी,पैँसट्ठी,छयसट्ठी,सतसट्ठी,अठसट्ठी,उनन्सत्तरी,सत्तरी,एकहत्तर,बहत्तर,त्रिहत्तर,चौहत्तर,पचहत्तर,छयहत्तर,सतहत्तर,अठहत्तर,उनासी,असी,एकासी,बयासी,त्रियासी,चौरासी,पचासी,छयासी,सतासी,अठासी,उनान्नब्बे,नब्बे,एकान्नब्बे,बयान्नब्बे,त्रियान्नब्बे,चौरान्नब्बे,पन्चानब्बे,छयान्नब्बे,सन्तान्नब्बे,अन्ठान्नब्बे,उनान्सय'.split(',');
function words(n){if(n===0)return W[0];const u=[['खर्ब',1e11],['अर्ब',1e9],['करोड',1e7],['लाख',1e5],['हजार',1e3],['सय',100]];let o=[];
 for(const[nm,v]of u){const q=Math.floor(n/v);if(q>0){o.push(words(q)+' '+nm);n-=q*v}}if(n>0)o.push(W[n]);return o.join(' ')}
$('nw-i').oninput=e=>{const v=EN(e.target.value).replace(/,/g,'').trim(),o=$('nw-o');if(!v)return o.textContent='रकम हालेपछि शब्दमा देखिन्छ।';
 const x=parseFloat(v);if(!isFinite(x)||x<0||x>=1e13)return o.textContent='कृपया ० देखि १० खर्ब भित्रको सङ्ख्या हाल्नुहोस्।';
 const r=Math.floor(x),p=Math.round((x-r)*100);o.innerHTML=`<b>रु ${ND(r.toLocaleString('en-IN'))}</b><br>${words(r)} रुपैयाँ${p?' '+words(p)+' पैसा':''} मात्र`};
/* ---------- BS उमेर ---------- */
$('ba-i').oninput=e=>{const o=$('ba-o'),J=window.JP,a=J&&J.parseD?J.parseD(e.target.value,'BS'):null;if(!a)return o.textContent='सही वि.सं. मिति हाल्नुहोस् (जस्तै 2055-01-29, वर्ष २०००–२०९९)।';
 const n=new Date(),b=new Date(Date.UTC(a[0],a[1]-1,a[2])),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()));if(b>t)return o.textContent='जन्म मिति भविष्यमा छ।';
 let y=t.getUTCFullYear()-b.getUTCFullYear(),m=t.getUTCMonth()-b.getUTCMonth(),d=t.getUTCDate()-b.getUTCDate();if(d<0){m--;d+=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),0)).getUTCDate()}if(m<0){y--;m+=12}
 o.innerHTML=`<b>${ND(y)} वर्ष ${ND(m)} महिना ${ND(d)} दिन</b><br>अङ्ग्रेजी मिति: ${a.join('-')} · जम्मा दिन: ${ND(Math.floor((t-b)/864e5))}`};
/* ---------- टाइपिङ ---------- */
const TX={e:['The quick brown fox jumps over the lazy dog while the sun sets behind the quiet hills of Nepal.','Computer skills open many doors today, so practise typing every day and your speed will grow.'],n:['नेपाल हिमाल, पहाड र तराईले सजिएको सुन्दर देश हो।','कम्प्युटर सिक्नाले आजको समयमा धेरै अवसर खोल्छ, त्यसैले हरेक दिन अभ्यास गर्नुहोस्।']};
let tS=0,tT=null,tTxt='';
function tNew(){const l=$('ty-l').value,a=TX[l];tTxt=a[Math.floor(Math.random()*a.length)];clearInterval(tT);tS=0;$('ty-i').value='';$('ty-i').disabled=false;$('ty-t').textContent=tTxt;$('ty-o').textContent='टाइप गर्न थालेपछि समय सुरु हुन्छ।'}
function tEnd(){clearInterval(tT);$('ty-i').disabled=true}
function tUp(){const v=$('ty-i').value;if(!tS){tS=Date.now();tT=setInterval(tUp,500)}
 let ok=0,h='';[...tTxt].forEach((c,i)=>{const x=v[i];h+=x===undefined?c:x===c?(ok++,`<span class="ok">${c}</span>`):`<span class="bad">${c}</span>`});$('ty-t').innerHTML=h;
 const s=(Date.now()-tS)/1000,left=Math.max(0,60-s),w=ok/5/Math.max(s/60,1/60);
 $('ty-o').innerHTML=`<b>${Math.round(w)} WPM</b> · शुद्धता ${v.length?ND(Math.round(ok/v.length*100)):'०'}% · बाँकी समय ${Math.ceil(left)}s`;if(left<=0||v.length>=tTxt.length){tEnd();$('ty-o').innerHTML+=' · <b>सकियो ✔</b>'}}
$('ty-l').onchange=$('ty-n').onclick=tNew;$('ty-i').oninput=tUp;tNew();
/* ---------- पासवर्ड ---------- */
$('pw-l').oninput=()=>$('pw-n').textContent=$('pw-l').value;
$('pw-b').onclick=()=>{const cs='abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'+($('pw-s').checked?'!@#$%^&*?':''),n=+$('pw-l').value,a=new Uint32Array(n);crypto.getRandomValues(a);$('pw-o').textContent=[...a].map(x=>cs[x%cs.length]).join('')};
$('pw-c').onclick=()=>navigator.clipboard&&navigator.clipboard.writeText($('pw-o').textContent);
/* ---------- विनिमय दर (NRB) ---------- */
let FX=[];const fxr=()=>{const a=parseFloat(EN($('fx-a').value)),c=FX[+$('fx-c').value];if(!c||isNaN(a))return;$('fx-r').innerHTML=`${a} ${c.iso3} = <b>रु ${(a*c.sell/c.unit).toFixed(2)}</b> (बिक्री दर) · खरिद दर: रु ${(a*c.buy/c.unit).toFixed(2)}`};
(async()=>{try{const f=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10),r=await fetch(`https://www.nrb.org.np/api/forex/v1/rates?page=1&per_page=1&from=${f(4)}&to=${f(0)}`),j=await r.json(),p=(j.data.payload||[]).slice(-1)[0];
 FX=p.rates.map(x=>({iso3:x.currency.iso3,unit:+x.currency.unit||1,buy:+x.buy,sell:+x.sell})).filter(x=>x.buy&&x.sell);if(!FX.length)throw 0;
 $('fx-c').innerHTML=FX.map((c,i)=>`<option value="${i}">${c.iso3}</option>`).join('');const u=FX.findIndex(c=>c.iso3==='USD');if(u>=0)$('fx-c').value=u;
 $('fx-o').innerHTML=`नेपाल राष्ट्र बैंकको दर · मिति ${p.date||''}`;$('fx-a').oninput=$('fx-c').onchange=fxr;fxr()}catch(e){$('fx-o').textContent='लाइभ दर लोड भएन (इन्टरनेट वा API समस्या)। सुन/चाँदी क्याल्कुलेटर तल प्रयोग गर्न सकिन्छ।'}})();
const gd=()=>{const p=parseFloat(EN($('gd-p').value)),w=parseFloat(EN($('gd-w').value));if(!p||!w)return;$('gd-o').innerHTML=`<b>रु ${ND((p*w).toLocaleString('en-IN'))}</b> · प्रति ग्राम रु ${ND((p/11.664).toFixed(0))} · प्रति १० ग्राम रु ${ND((p/11.664*10).toFixed(0))}`};
$('gd-p').oninput=$('gd-w').oninput=gd;
window.TM={words};
})();
