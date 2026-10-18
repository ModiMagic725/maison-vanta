(function(){
const FALLBACK='linear-gradient(135deg,#26211E,#C45A35)';
document.querySelectorAll('img').forEach(i=>i.addEventListener('error',()=>{i.removeAttribute('src');i.style.background=FALLBACK;i.style.minHeight='200px'}));
if(!window.gsap){document.querySelectorAll('.line span').forEach(s=>s.style.transform='none');return}
gsap.registerPlugin(ScrollTrigger);
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(rm)return;
gsap.timeline({defaults:{ease:'power4.out'}})
 .from('.hero .bg img',{scale:1.3,duration:2.4},0)
 .from('.hero .label',{opacity:0,y:20,duration:.8},.4)
 .from('.line span',{yPercent:110,duration:1.2,stagger:.18},.6)
 .from('.hero p,.hero .btn',{opacity:0,y:24,stagger:.12,duration:.9},1.4)
 .from('.ember',{scale:0,duration:1.5},1.2);
gsap.to('.hero .bg img',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true}});
gsap.utils.toArray('.reveal').forEach(r=>{
 gsap.from(r,{clipPath:'inset(100% 0 0 0)',duration:1.4,ease:'power3.out',scrollTrigger:{trigger:r,start:'top 80%'}});
 gsap.to(r.querySelector('img'),{scale:1,duration:1.8,ease:'power3.out',scrollTrigger:{trigger:r,start:'top 80%'}});});
gsap.utils.toArray('.dish').forEach((d,i)=>gsap.from(d,{opacity:0,x:-30,delay:i*.05,scrollTrigger:{trigger:d,start:'top 90%'}}));
const rail=document.querySelector('.rail');
if(rail&&innerWidth>800){const dist=()=>rail.scrollWidth-innerWidth;
 gsap.to(rail,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'.railwrap',pin:true,scrub:1,end:()=>'+='+dist(),invalidateOnRefresh:true}});}
else if(rail){rail.parentElement.style.overflowX='auto'}
})();
