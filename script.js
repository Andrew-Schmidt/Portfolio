const projects = window.PORTFOLIO_PROJECTS;
const grid = document.getElementById('projectGrid');
const symbols={rf:'~dB',catalog:'▤',video:'▶',packets:'⇄',dashcam:'◉',speed:'↗',lora:'⌁',midi:'♫'};
const escapeHTML = v => String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function projectVisual(p){
  if(p.image) return `<div class="project-visual"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.alt||('Screenshot of '+p.title))}" loading="lazy"></div>`;
  return `<div class="project-visual"><div class="v-decoration"></div><div class="v-mark" aria-hidden="true">${escapeHTML(symbols[p.visual]||'⌘')}</div><span class="visual-tag">PROJECT ILLUSTRATION · ADD SCREENSHOT</span></div>`;
}
function render(filter='All'){
 const filtered=projects.filter(p=>filter==='All'||p.type===filter);
 document.getElementById('resultCount').textContent=`SHOWING ${String(filtered.length).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
 grid.innerHTML=filtered.map(p=>`<article class="project-card">${projectVisual(p)}<div class="card-content"><div class="card-meta"><span>${escapeHTML(p.type.toUpperCase())}</span><span class="status">${escapeHTML(p.status)}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><a class="view-btn" href="projects/${encodeURIComponent(p.id)}/">View project details ↗</a></div></article>`).join('');
}
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;document.querySelectorAll('.filter').forEach(el=>{el.classList.toggle('active',el===b);el.setAttribute('aria-pressed',String(el===b))});render(b.dataset.filter)});
document.getElementById('year').textContent=new Date().getFullYear();
render();
