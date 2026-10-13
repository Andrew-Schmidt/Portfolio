(function(){
  const slug=location.pathname.split('/').filter(Boolean).slice(-1)[0];
  const p=(window.PORTFOLIO_PROJECTS||[]).find(item=>item.id===slug);
  if(!p)return;
  const $=s=>document.querySelector(s);
  const text=(el,val)=>{if(el&&typeof val==='string')el.textContent=val;};
  const title=$('.project-heading h1');
  if(title){const period=title.querySelector('.period');title.textContent=p.title;if(period){title.append(period);}}
  text($('.project-heading .intro'),p.summary);
  text($('.project-heading .project-labels span'),p.status);
  const heading=$('.project-heading .section-kicker'); if(heading)heading.textContent='/ '+p.type.toUpperCase();
  document.title=p.title+' | Andrew Schmidt';
  const crumb=$('.breadcrumb');if(crumb){ const tail=crumb.lastChild;if(tail&&tail.nodeType===Node.TEXT_NODE)tail.textContent=' / '+p.title; }
  const section=$('.project-columns > div');
  if(section){const h2s=[...section.querySelectorAll('h2')];for(const h of h2s){const t=h.textContent.toLowerCase();if(t.includes('why i built')||t.includes('problem')){let next=h.nextElementSibling;if(next&&next.tagName==='P')next.textContent=p.problem||'';}if(t.includes('my approach')||t.includes('how i built')){let next=h.nextElementSibling;if(next&&next.tagName==='P')next.textContent=p.work||'';}}}
  const sidebar=$('.project-sidebar'); if(sidebar){const tags=sidebar.querySelectorAll('li'); if(tags.length&&Array.isArray(p.skills)){tags.forEach((li,i)=>{if(p.skills[i])li.textContent=p.skills[i]});}}
})();