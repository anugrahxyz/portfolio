
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/webportfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/webportfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3883, hash: 'a23080b1277048f34e86c4362e6f408420de94bc43349729457c353d86feda6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4179, hash: '0576315ee20c3a8089c58b2e5117af871883b3fc8a14b7ea48a4eb71a6bdf5d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24454, hash: 'c506aac8c57129e06ccb671eb67c8ed8b71b81030397793b4a1f221b196715a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YKOJ4FCS.css': {size: 260, hash: 'zws3NVOZQ/w', text: () => import('./assets-chunks/styles-YKOJ4FCS_css.mjs').then(m => m.default)}
  },
};
