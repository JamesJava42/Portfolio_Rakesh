
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jamesjava42.github.io/Portfolio_Rakesh/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/contact"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/publications"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/hero"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/navbar"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/footer"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/experience"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio_Rakesh/education"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 717, hash: '4f160b015a8673166eaa7da2503a2bb9e9b05bfcc2a713c6e7c9e6d8872fc5c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '7b6a7709eda497c86dea2b7f3a19f7e52bfddc543fc31cd3f8ee8482a4de549c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8455, hash: 'c6b75d67f8c89f030bda06e43fb078b7109bbb46f83c2ad375ec861fd08463eb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'hero/index.html': {size: 7086, hash: 'ed6980632bc7647e68d5a7073c3b7994ac5d2ef8e37b3a48c8abf28d56e03dbb', text: () => import('./assets-chunks/hero_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7095, hash: '0fb752e5c4050caac4803f96ffedd7555bf8c9d05b0d7f7a8e2b310fd4d8f937', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8065, hash: '7fa52f1c3c0c0276ea81bae039d445f533d1fe8401f17dcadb7827bca230a91f', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 8414, hash: 'a634c1a2f8e4a31d2760b11aaca0cf4e33a988ec6f4c2bfb752a34bbb027d529', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 9353, hash: 'fe91adb82ba32b14a3708a0dbb7c6807db9067039e97a0ef9d8b62b1ec938a35', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 9163, hash: '45ec87f8feb1bd52aef02897ea022e572c3029f7f462b9efcd22b1e0f9004ef5', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'publications/index.html': {size: 8603, hash: 'a03b91fe7e23665ab39ad3e8794aef929b77b62ccc682f2bef65b0aba1a4f4f8', text: () => import('./assets-chunks/publications_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 10393, hash: 'a8b91428dcd7b5f17d8959be9095b8034f2832a66f05530bf002996b0e038428', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 6958, hash: '37c93d39030c06a190d4dc5d81876b3a40884921d6f4f8b4d8867f918d550b7f', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8863, hash: '6bc4e43721aa0ba9a96af7ad27e65769b6c33366f910a009edc89b5a0de5cd03', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-YCFSE4I5.css': {size: 707, hash: 'RX9gkQHCcEM', text: () => import('./assets-chunks/styles-YCFSE4I5_css.mjs').then(m => m.default)}
  },
};
