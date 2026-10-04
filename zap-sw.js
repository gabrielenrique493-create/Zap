self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
self.addEventListener('notificationclick',e=>{e.notification.close();const d=e.notification.data||{};
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{const c=cs[0];
    if(c){c.postMessage({type:'open',...d});return c.focus()}
    return self.clients.openWindow('zap6.html#open='+encodeURIComponent(JSON.stringify(d)))}))});
