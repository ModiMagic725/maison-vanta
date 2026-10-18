(function(){
const root=document.body.dataset.root||'';
const L=[['Menu','html/menu.html'],['Chef','html/chef.html'],['Experiences','html/experiences.html'],['Wine','html/wine.html'],['Story','html/story.html'],['Journal','html/journal.html'],['Reserve','html/reservations.html'],['Contact','html/contact.html']];
const nav=document.createElement('nav');nav.setAttribute('aria-label','Primary');
nav.innerHTML='<a class="logo" href="'+root+'index.html">MAISON VANTA</a><button class="burger" aria-expanded="false" aria-controls="nl">Menu</button><ul id="nl">'+L.map(l=>'<li><a href="'+root+l[1]+'">'+l[0]+'</a></li>').join('')+'</ul>';
document.body.prepend(nav);
const b=nav.querySelector('.burger'),u=nav.querySelector('ul');
b.onclick=()=>{const o=u.classList.toggle('open');b.setAttribute('aria-expanded',o)};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){u.classList.remove('open');b.setAttribute('aria-expanded',false)}});
if(document.querySelector('footer'))return;const f=document.createElement('footer');f.innerHTML='<span>MAISON VANTA — fictional sample restaurant. Demo contact: hello@maisonvanta.example</span><span>Frontend demo only.</span>';
document.body.append(f);
})();
addEventListener('error',e=>{const i=e.target;if(i&&i.tagName==='IMG'&&!i.dataset.f){i.dataset.f=1;i.removeAttribute('src');i.style.background='linear-gradient(135deg,#421F25,#A64B2A)';i.style.minHeight='220px'}},true);
document.addEventListener('click',e=>{const i=e.target.closest('img[data-zoom]');if(!i)return;let d=document.getElementById('lb');if(!d){d=document.createElement('dialog');d.id='lb';d.innerHTML='<img alt=""><button aria-label="Close">Close ✕</button>';d.style.cssText='border:0;background:#111110;padding:1rem;max-width:92vw';d.querySelector('img').style.cssText='max-height:80vh;max-width:100%';d.querySelector('button').style.cssText='display:block;margin:1rem auto 0;color:#F3EBDD;background:none;border:1px solid #B49A69;padding:.5rem 1rem;cursor:pointer';d.onclick=ev=>{if(ev.target!==d.querySelector('img'))d.close()};document.body.append(d)}d.querySelector('img').src=i.src;d.querySelector('img').alt=i.alt;d.showModal()});

document.addEventListener('keydown',e=>{const d=document.getElementById('lb');if(!d||!d.open||!/Arrow/.test(e.key))return;const all=[...document.querySelectorAll('img[data-zoom]')];let i=all.findIndex(x=>x.src===d.querySelector('img').src);i=(i+(e.key==='ArrowRight'?1:-1)+all.length)%all.length;d.querySelector('img').src=all[i].src;d.querySelector('img').alt=all[i].alt});
