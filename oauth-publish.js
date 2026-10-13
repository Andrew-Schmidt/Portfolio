(()=>{'use strict';
 const base=(window.WORKER_API_BASE||'').replace(/\/$/,'');
 const $=x=>document.getElementById(x),status=$('authState');
 let ticket='';
 const fragment=new URLSearchParams(location.hash.replace(/^#/,''));
 if(fragment.has('session')){ticket=fragment.get('session')||'';history.replaceState(null,'',location.pathname+location.search)}
 function configured(){return /^https:\/\/[a-z0-9.-]+\.workers\.dev$/i.test(base)&&!base.includes('REPLACE-WITH')}
 async function api(path,options={}) {const res=await fetch(base+path,{...options,headers:{'Authorization':'Bearer '+ticket,'Content-Type':'application/json',...(options.headers||{})}});const body=await res.json().catch(()=>({error:'Invalid API response'}));if(!res.ok)throw Error(body.error||('HTTP '+res.status));return body}
 function buttons(ok){$('publishGithub').disabled=!ok;$('logoutGithub').disabled=!ok;$('loginGithub').disabled=ok}
 buttons(false);
 if(!configured()){status.textContent='Publishing is not configured yet. The file download editor still works.';return}
 $('loginGithub').onclick=()=>{location.assign(base+'/auth/start')};
 $('logoutGithub').onclick=async()=>{try{await api('/api/logout',{method:'POST'})}catch(_){}ticket='';buttons(false);status.textContent='Disconnected. Refresh to begin a new session.'};
 if(ticket){api('/api/me').then(v=>{buttons(true);status.textContent='Signed in as @'+v.login+'. Ready to publish to '+v.repository+'.'}).catch(e=>{ticket='';status.textContent='Session invalid or expired: '+e.message;buttons(false)})}
 $('publishGithub').onclick=async()=>{try{const files=window.__portfolioEditor.getFiles();if(!confirm('Publish '+files.length+' file(s) to Andrew-Schmidt/Portfolio on main?'))return; $('publishGithub').disabled=true;status.textContent='Publishing to GitHub…';const result=await api('/api/publish',{method:'POST',body:JSON.stringify({files})});status.textContent='Published commit '+result.commit.slice(0,12)+'. GitHub Pages will deploy shortly. Reload the editor after deployment to refresh published entries.';buttons(true)}catch(e){status.textContent='Publish failed: '+e.message;buttons(!!ticket)}};
})();
