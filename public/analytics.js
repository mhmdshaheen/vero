(() => {
  if(window.veroAnalytics || !/^\/(?:products\/[a-z0-9-]{1,100})?$/.test(location.pathname))return;
  let visitorId=crypto.randomUUID(),sessionId=crypto.randomUUID();
  try{const saved=localStorage.getItem('vero-visitor');if(saved&&/^[a-f0-9-]{36}$/i.test(saved))visitorId=saved;else localStorage.setItem('vero-visitor',visitorId);}catch{}
  const session=()=>{try{const saved=JSON.parse(localStorage.getItem('vero-visit')||'null');if(saved&&Date.now()-saved.at<30*60*1000&&/^[a-f0-9-]{36}$/i.test(saved.id)){sessionId=saved.id;source=saved.source||source;}else sessionId=crypto.randomUUID();localStorage.setItem('vero-visit',JSON.stringify({id:sessionId,at:Date.now(),source}));}catch{}return {visitorId,sessionId};};
  let source='direct';try{const url=new URL(document.referrer);if(url.host!==location.host)source=url.hostname;}catch{}
  let viewed=false;
  const track=(event,detail={})=>{if(document.visibilityState==='prerender')return;const body=JSON.stringify({id:crypto.randomUUID(),...session(),event,path:location.pathname,source,productId:detail.productId||'',category:detail.category||''});try{if(navigator.sendBeacon&&navigator.sendBeacon('/api/analytics/track',new Blob([body],{type:'application/json'})))return;fetch('/api/analytics/track',{method:'POST',headers:{'Content-Type':'application/json'},body,keepalive:true}).catch(()=>{});}catch{}};
  window.veroAnalytics={track,identity:session};
  const view=()=>{if(!viewed&&document.visibilityState==='visible'){viewed=true;track('page_view');}};
  view();document.addEventListener('visibilitychange',view);
  document.addEventListener('click',event=>{const link=event.target.closest?.('a[href]');if(!link)return;try{const url=new URL(link.href);if(url.hostname==='wa.me'||url.hostname==='api.whatsapp.com')track('whatsapp_click');}catch{}});
})();
