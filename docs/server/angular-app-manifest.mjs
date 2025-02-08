
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3880, hash: '9a174f184561076acce581f8668d99c090a1fb3a98408a188b901813c9a3edb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4176, hash: '471a1a433eb80748fb801c51333ec8d1397b333a03cb687bb4072482a9415d31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24451, hash: 'f38e178473891ee535b0aa5ce2ef981551c323e15bb9e904d401037dcf29e078', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YKOJ4FCS.css': {size: 260, hash: 'zws3NVOZQ/w', text: () => import('./assets-chunks/styles-YKOJ4FCS_css.mjs').then(m => m.default)}
  },
};
