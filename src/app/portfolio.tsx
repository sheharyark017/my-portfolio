'use client';
import { useEffect, useRef, useState } from 'react';
import { projects, type Project, type ProjectImage } from './projects';

const email='sheharyark017@gmail.com';
const linkedin='https://www.linkedin.com/in/sheharyar-khan-a8b3b3222/';
type ExperienceEntry={year:string;company:string;role:string;date:string;detail:string;highlights?:string[]};
const experience:ExperienceEntry[]=[
 {year:'2025 — NOW',company:'Folium AI',role:'Senior Software Engineer',date:'July 2025 — Present',detail:'Lead frontend delivery for web and mobile products, turning product requirements into modular interfaces and maintainable application architecture.',highlights:['Own implementation across React, Next.js, TypeScript, and React Native, with a focus on performance and reusable patterns.','Guide complex authentication flows and secure data handling across web and mobile features.','Mentor developers, review code, plan technical work, and help set frontend standards and team-level engineering direction.']},
 {year:'2024 — 2025',company:'Cyber Evangelists',role:'Senior Software Engineer',date:'June 2024 — July 2025',detail:'Built high-traffic React applications designed to be discoverable, responsive, and consistent across browsers.',highlights:['Developed reusable components while improving SEO, responsive behavior, and cross-browser compatibility.','Implemented RTK Query patterns for REST APIs, caching, and asynchronous state, reducing redundant network requests by 40%.']},
 {year:'2022 — 2024',company:'Bitsclan IT Solutions',role:'Software Engineer',date:'November 2022 — May 2024',detail:'Built full-stack features with React and Node.js, connecting relational databases and REST APIs to responsive interfaces. Contributed to mobile-first product initiatives.'},
 {year:'2021 — 2022',company:'Inkhorn Solutions',role:'Front-End Developer',date:'February 2021 — October 2022',detail:'Built pixel-accurate, responsive components and integrated RESTful services across client applications.'}
];

function Arrow({diagonal=false}:{diagonal?:boolean}){return <span aria-hidden="true" className="arrow">{diagonal?'↗':'↗'}</span>}
function SystemSculpture(){
 const ref=useRef<HTMLDivElement>(null); const [mode,setMode]=useState(0);
 return <div className={`sculpture mode-${mode}`} ref={ref} onPointerMove={e=>{if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--rx',`${(e.clientY-r.top-r.height/2)/30}deg`);e.currentTarget.style.setProperty('--ry',`${(e.clientX-r.left-r.width/2)/25}deg`);}} onPointerLeave={()=>{ref.current?.style.setProperty('--rx','0deg');ref.current?.style.setProperty('--ry','0deg');}}>
  <div className="sculpture-grid"/><span className="art-coord top">FIG. 01 — A CONNECTED SYSTEM</span>
  <svg viewBox="0 0 600 590" className="system-svg" role="img" aria-label="Animated abstract sculpture of interconnected web, mobile, and backend systems">
   <defs><linearGradient id="metal" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ecedff"/><stop offset=".27" stopColor="var(--sculpture-main)"/><stop offset=".58" stopColor="#505bb1"/><stop offset=".78" stopColor="#ccd4ff"/><stop offset="1" stopColor="#7f8acd"/></linearGradient><linearGradient id="edge"><stop stopColor="#5d68a0"/><stop offset=".5" stopColor="#e0e4ff"/><stop offset="1" stopColor="#727cab"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="16"/></filter></defs>
   <ellipse cx="310" cy="482" rx="175" ry="25" fill="#000" opacity=".35" filter="url(#shadow)"/>
   <g className="orbit-lines" fill="none" stroke="#6d756e" strokeWidth=".65"><ellipse cx="300" cy="290" rx="255" ry="204" transform="rotate(-30 300 290)"/><ellipse cx="300" cy="290" rx="263" ry="165" transform="rotate(40 300 290)"/><path d="M30 290H570M300 52V525" strokeDasharray="3 9"/></g>
   <g className="sculpture-core">
    <g transform="translate(300 280) rotate(-27)">
     {[0,1,2,3,4,5,6,7,8].map(i=><g key={i} transform={`translate(${i*6-24} ${i*9-36})`}><rect x="-148" y="-137" width="296" height="274" rx="83" fill="none" stroke="#101425" strokeWidth="41"/><rect x="-148" y="-140" width="296" height="274" rx="83" fill="none" stroke="url(#metal)" strokeWidth="33"/><rect x="-148" y="-143" width="296" height="274" rx="83" fill="none" stroke="url(#edge)" strokeWidth="1.2" opacity=".8"/></g>)}
    </g>
    <path d="M221 290l47-49 75 47-45 46Z" fill="#eaff91"/><path d="m221 290 77 44v19l-77-44Z" fill="#829e46"/><path d="m298 334 45-46v19l-45 46Z" fill="#b3c875"/>
   </g>
   <g className="satellite"><circle cx="504" cy="201" r="13" fill="#fcb399"/><circle cx="499" cy="196" r="4" fill="#ffdbc8"/></g>
   <g fill="#b4bcb3" fontFamily="monospace" fontSize="10"><text x="34" y="242">WEB</text><text x="461" y="417">MOBILE</text><text x="378" y="79">SYSTEMS</text></g>
   <g fill="#e8ff8e"><circle cx="80" cy="360" r="4"/><circle cx="443" cy="111" r="3"/></g>
  </svg>
  <div className="art-bottom"><span className="art-coord">IDEA → INTERFACE → IMPACT</span><button onClick={()=>setMode((mode+1)%3)} className="remix" aria-label="Change sculpture color">↻ <span>Remix</span></button></div>
 </div>
}

function ProjectArt({id}:{id:string}){return <div className={`project-art art-${id}`} aria-hidden="true">
 <span className="visual-label">{id==='billwell'?'CONNECTED CARE':id==='hr'?'PEOPLE, CONNECTED':id==='attack'?'SIGNAL / NOISE':id==='seedfunds'?'OPPORTUNITY, CONNECTED':id==='foster'?'A NETWORK OF SUPPORT':'FINANCIAL CONFIDENCE'}</span>
 {id==='billwell'?<div className="billwell-art"><div className="medical-cross"><i/><i/></div><div className="signal-ring r1"/><div className="signal-ring r2"/><div className="signal-ring r3"/><span className="small-plus">+</span></div>:id==='hr'?<div className="org-art"><svg viewBox="0 0 400 240"><path d="M200 50V115M75 175V115H325V175M200 115V175" fill="none" stroke="currentColor" strokeWidth="2"/>{[[200,50],[75,175],[200,175],[325,175]].map(([x,y],i)=><g key={x+'-'+y}><rect x={x-34} y={y-28} width="68" height="56" rx="18" fill={i===0?'#535dad':'#e1e1fa'}/><circle cx={x} cy={y-7} r="8" fill={i===0?'#dbe0ff':'#7377b3'}/><path d={`M${x-14} ${y+16} Q${x-14} ${y+2} ${x} ${y+2} Q${x+14} ${y+2} ${x+14} ${y+16}`} fill={i===0?'#dbe0ff':'#7377b3'}/></g>)}</svg></div>:id==='attack'?<div className="radar"><i/><i/><i/><div className="radar-sweep"/><span className="radar-point p1"/><span className="radar-point p2"/><span className="radar-point p3"/><div className="radar-core"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 5 52 13v16c0 13-8 23-20 30C20 52 12 42 12 29V13L32 5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><rect x="23" y="29" width="18" height="15" rx="3" fill="currentColor"/><path d="M27 29v-5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="3"/></svg></div></div>:<div className="growth-art"><div className="growth-leaf l1"/><div className="growth-leaf l2"/><div className="growth-leaf l3"/><div className="growth-stem"/><div className="growth-seed"/></div>}
 <span className="visual-caption">{id==='billwell'?'WEB ↔ IOS ↔ ANDROID':id==='hr'?'STRUCTURE WITHOUT FRICTION':id==='attack'?'VERIFY → SCAN → UNDERSTAND':id==='seedfunds'?'LEARN. CONNECT. THRIVE.':id==='foster'?'YOUTH ↔ CAREGIVERS ↔ COMMUNITY':'LEARN → REFLECT → GROW'}</span>
 </div>}


function ProjectGallery({project,onOpen}:{project:Project;onOpen:(screen:ProjectImage)=>void}){
 return <section className="project-gallery" aria-label={`${project.name} screen gallery`}>
  <div className="gallery-heading"><h3>Inside the product</h3><span>{String(project.images.length).padStart(2,'0')} SCREENS</span></div>
  <div className="gallery-grid">{project.images.map((screen,index)=><figure className="gallery-item" key={screen.src}>
   <button type="button" className="gallery-image-link" onClick={()=>onOpen(screen)} aria-label={`Open full-size ${screen.title} image`}>
    <img src={screen.src} alt={`${project.name}: ${screen.caption}`} loading={index===0?'eager':'lazy'}/><span>View full size ↗</span>
   </button><figcaption><strong>{screen.title}</strong><p>{screen.caption}</p></figcaption>
  </figure>)}</div>
 </section>;
}

export default function Portfolio(){
 const [menu,setMenu]=useState(false);const [active,setActive]=useState('');const [paused,setPaused]=useState(false);const [copied,setCopied]=useState(false);const [copyFailed,setCopyFailed]=useState(false);const [selected,setSelected]=useState<typeof projects[number]|null>(null);const [lightbox,setLightbox]=useState<ProjectImage|null>(null);const dialog=useRef<HTMLDialogElement>(null);const lightboxDialog=useRef<HTMLDialogElement>(null);const [progress,setProgress]=useState(0);
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');setPaused(media.matches);const change=()=>setPaused(media.matches);media.addEventListener('change',change);
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('section[id]').forEach(el=>navObserver.observe(el));
  let frame=0;const scroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max>0?scrollY/max:0);});};window.addEventListener('scroll',scroll,{passive:true});scroll();
  return()=>{observer.disconnect();navObserver.disconnect();window.removeEventListener('scroll',scroll);media.removeEventListener('change',change);cancelAnimationFrame(frame);};
 },[]);
 useEffect(()=>{document.documentElement.dataset.motion=paused?'paused':'running';},[paused]);
 useEffect(()=>{if(selected){dialog.current?.showModal();const original=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=original;};}else dialog.current?.close();},[selected]);
 useEffect(()=>{if(lightbox){lightboxDialog.current?.showModal();return()=>{lightboxDialog.current?.close();};}else lightboxDialog.current?.close();},[lightbox]);
 useEffect(()=>{if(!copied)return;const t=setTimeout(()=>setCopied(false),2500);return()=>clearTimeout(t);},[copied]);
 async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);setCopyFailed(false);}catch{setCopyFailed(true);}}
 const navigation=[['skills','Skills'],['work','Work'],['experience','Experience'],['about','About']];
 return <>
  <a href="#main" className="skip">Skip to content</a><div className="scroll-progress" style={{transform:`scaleX(${progress})`}}/>
  <header className="header"><a href="#" className="brand" aria-label="Sheharyar Khan home"><span className="brand-mark">s<span>k</span><i/></span><span>Sheharyar Khan<span className="brand-sub">ENGINEER & BUILDER</span></span></a>
   <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id,label])=><a key={id} className={active===id?'active':''} href={`#${id}`}>{label}</a>)}</nav>
   <a className="nav-contact" href="#contact">Let’s talk <Arrow/></a><button className="menu-toggle" aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu?'Close −':'Menu +'}</button>
   {menu&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...navigation,['contact','Contact']].map(([id,label])=><a href={`#${id}`} key={id} onClick={()=>setMenu(false)}>{label}<Arrow/></a>)}</nav>}
  </header>
  <main id="main">
   <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> BASED IN LAHORE. BUILDING EVERYWHERE.</p><h1 id="hero-title">Serious code.<br/>Thoughtful<br/><span className="serif-word">experiences.</span><span className="heading-dot">✳</span></h1><p className="hero-description">I’m Sheharyar — a senior software engineer building with React, Next.js, React Native, and TypeScript. From thoughtful interfaces to the systems behind them.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <Arrow/></a><a className="text-link" href="/Sheharyar-Khan-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div>
    <div className="hero-facts"><div><strong>5+</strong><span>YEARS BUILDING</span></div><div><strong>Web <span className="serif">&</span> mobile</strong><span>ONE CONNECTED EXPERIENCE</span></div></div></div>
    <SystemSculpture/>
    <div className="hero-baseline"><span>GOOD ENGINEERING SHOULD FEEL EFFORTLESS.</span><a href="#work">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a></div>
   </section>
   <section id="skills" className="skills-section section-wrap" aria-labelledby="skills-title">
    <div className="section-heading reveal"><div><p className="eyebrow">01 / ENGINEERING TOOLKIT</p><h2 id="skills-title">Strong across the stack.<br/><span className="serif">Thoughtful at every layer.</span></h2></div><p>The tools I use to take a product from its first interface to a reliable production system.</p></div>
    <div className="skills-grid">{[
     {name:'Frontend engineering',symbol:'⌘',main:['React','Next.js','TypeScript'],other:['Next.js Server Actions','Next.js backend','RTK Query','JavaScript','Tailwind CSS','shadcn/ui','Radix UI','Framer Motion','SSR / ISR'],tone:'lavender'},
     {name:'Cross-platform mobile',symbol:'↔',main:['React Native','Expo'],other:['Tamagui','gluestack-ui','Expo Router','NativeWind','Reanimated','React Navigation','iOS & Android'],tone:'peach'},
     {name:'Backend & data',symbol:'⌁',main:['Node.js','PostgreSQL','Redis'],other:['Express','MongoDB','Prisma','Supabase','REST APIs','GraphQL'],tone:'lime'},
     {name:'Security & delivery',symbol:'↗',main:['AWS Cognito','CI/CD'],other:['AWS SDK','GitHub Actions','Vercel','AWS Amplify','Cypress','JWT / MFA','Code reviews'],tone:'blue'}
    ].map((group,i)=><article className={`skill-card skill-${group.tone} reveal`} key={group.name}><div className="skill-card-heading"><span className="skill-symbol" aria-hidden="true">{group.symbol}</span><span>0{i+1}</span></div><h3>{group.name}</h3><div className="skill-primary">{group.main.map(skill=><span key={skill}>{skill}</span>)}</div><div className="skill-secondary">{group.other.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</div>
   </section>
   <section id="work" className="work section-wrap">
    <div className="section-heading reveal"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Real problems.<br/><span className="serif">Considered solutions.</span></h2></div><p>From healthcare to cybersecurity.<br/>A few things I’ve helped bring to life.</p></div>
    <div className="project-grid">{projects.map(p=><article className={`project-card ${p.color} reveal`} key={p.id}><ProjectArt id={p.id}/><div className="project-copy"><div className="project-meta"><span>{p.number} / {p.kind}</span></div><h3>{p.name}</h3><span className="access-badge"><span aria-hidden="true">⌑</span> {p.access}</span><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button type="button" className="read-story" onClick={()=>setSelected(p)} aria-label={`Explore ${p.name} project details`}>Explore the project <Arrow/></button></div><div className="project-resources">{p.website&&<a href={p.website} target="_blank" rel="noopener noreferrer">Live link <Arrow/></a>}</div></article>)}</div>
   </section>
   <section className="principles section-wrap"><p className="eyebrow reveal">THE WAY I BUILD</p><div className="principle-grid"><h2 className="reveal">The details matter.<br/><span className="serif">So does the system.</span></h2><div className="principle-list">{[['01','Interfaces with intent','Reusable, responsive, accessible interfaces. Built around the people using them.'],['02','Strong foundations','Modular architecture, secure authentication, thoughtful state management, and reliable APIs.'],['03','Better, together','Clear technical decisions, constructive code reviews, and shared engineering standards.']].map(([n,t,d])=><div className="principle reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>
   <section id="experience" className="experience section-wrap"><div className="section-heading reveal"><div><p className="eyebrow">03 / THE JOURNEY</p><h2>Always building.<br/><span className="serif">Always moving forward.</span></h2></div><a className="text-link" href="/Sheharyar-Khan-CV.pdf" download>Full résumé <span aria-hidden="true">↓</span></a></div><div className="experience-list">{experience.map((e,i)=><details className="experience-row reveal" key={e.company} open={i===0}><summary><span className="exp-year">{e.year}</span><div><h3>{e.company}</h3><p>{e.role}</p></div><span className="exp-plus" aria-hidden="true">+</span></summary><div className="experience-detail"><p className="eyebrow">{e.date}</p><p>{e.detail}</p>{e.highlights&&<ul>{e.highlights.map(highlight=><li key={highlight}>{highlight}</li>)}</ul>}</div></details>)}</div></section>
   <section id="about" className="about section-wrap"><div className="about-intro"><div className="about-emblem reveal" aria-hidden="true"><span>ENGINEER.</span><span>COLLABORATOR.</span><span className="serif">Always curious.</span><svg viewBox="0 0 250 220"><path d="M125 20v180M35 110h180M62 47l126 126M62 173 188 47" stroke="currentColor" strokeWidth="35"/></svg><small>LAHORE, PAKISTAN ↗</small></div><div className="about-text reveal"><p className="eyebrow">04 / A LITTLE ABOUT ME</p><h2>I connect the dots.<br/><span className="serif">Then build what’s next.</span></h2><p>I’m a full-stack engineer with 5+ years of experience building products with React, Next.js, React Native, and Expo. My work connects thoughtful interfaces with the services and systems behind them.</p><p>At Folium AI, I lead frontend development, mentor developers, and help shape engineering decisions. I enjoy the space where product thinking meets technical detail.</p><div className="education"><span className="eyebrow">LEARNING NEVER STOPS</span><p><strong>BS Computer Science</strong><br/>Virtual University of Pakistan · Ongoing</p><p><strong>Full Stack Development & Soft Skills Fellowship</strong><br/>Jadu · Five-month program</p><details><summary>Additional professional development <span>+</span></summary><p>React.js — Maximilian Schwarzmüller<br/>JavaScript — Jonas Schmedtmann<br/>SQL & Database Design — Colt Steele<br/>Front-End Web Development — Dr. Angela Yu<br/><small>Courses completed through Udemy</small></p></details></div></div></div>
   </section>
   <section id="contact" className="contact section-wrap"><div className="contact-top reveal"><p className="eyebrow">05 / YOUR NEXT GOOD IDEA STARTS HERE</p><span className="contact-star" aria-hidden="true">✳</span></div><h2 className="reveal">Let’s build<br/>something <span className="serif">that matters.</span></h2><div className="contact-bottom reveal"><p>Have a product in mind, a team to grow,<br/>or an interesting problem? Let’s talk.</p><div className="contact-links"><a href={`mailto:${email}`} className="email-link">{email} <Arrow/></a><div><button className="copy-email" onClick={copyEmail}>{copied?'Email copied ✓':'Copy email ⧉'}</button><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><span role="status" className="copy-status">{copied?'Copied to clipboard.':copyFailed?'Copy this address: '+email:''}</span></div></div></div></section>
  </main>
  <footer><a className="footer-name" href="#">Sheharyar Khan<span>© {new Date().getFullYear()}</span></a><span>THOUGHTFULLY BUILT. ALWAYS EVOLVING.</span><button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'▷ Enable motion':'Ⅱ Pause motion'}</button><a href="#" className="back-top" aria-label="Back to top">↑</a></footer>
  <dialog ref={dialog} aria-labelledby="project-title" className="project-dialog" onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}}>{selected&&<div className="dialog-inner"><button className="dialog-close" autoFocus onClick={()=>setSelected(null)} aria-label="Close project details">✕</button><p className="eyebrow">{selected.number} / {selected.kind}</p><h2 id="project-title">{selected.name}</h2><p className="dialog-lead serif">{selected.title}</p>
   <div className="project-access"><span className="access-badge">⌑ {selected.access}</span><p>Access is provided by invitation. The portal requires an authorized account.</p></div>
   <div className="dialog-resources">{selected.website&&<a href={selected.website} target="_blank" rel="noopener noreferrer">Live link <Arrow/></a>}</div>
   {selected.images.length>0&&<ProjectGallery key={selected.id} project={selected} onOpen={setLightbox}/>}
   <div className="case-study-copy"><div><h3>The challenge</h3><p>{selected.challenge}</p><h3>The toolkit</h3><p className="dialog-stack">{selected.stack}</p></div><div><h3>My contribution</h3><ul>{selected.contributions.map(c=><li key={c}>{c}</li>)}</ul></div></div>
   <a href={`mailto:${email}?subject=${encodeURIComponent('Let’s talk about '+selected.name)}`} className="button primary">Talk about this project <Arrow/></a></div>}</dialog>
  <dialog ref={lightboxDialog} className="lightbox-dialog" aria-labelledby="lightbox-title" onCancel={()=>setLightbox(null)} onClose={()=>setLightbox(null)} onClick={e=>{if(e.target===e.currentTarget)setLightbox(null);}}>
   {lightbox&&<><button type="button" className="lightbox-close" autoFocus onClick={()=>setLightbox(null)} aria-label="Close image viewer">✕</button><figure className="lightbox-frame"><img src={lightbox.src} alt={lightbox.caption}/><figcaption><strong id="lightbox-title">{lightbox.title}</strong><span>Click outside or press Esc to close</span></figcaption></figure></>}
  </dialog>
 </>;
}
