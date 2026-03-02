(function () {
  var NAV_LINKS = [
    { label: 'Me', href: '/me/' },
    { label: 'Experiments', href: '/experiments/' },
  ];

  var style = document.createElement('style');
  style.textContent = [
    '.site-nav {',
    '  position: fixed;',
    '  left: 2.5rem;',
    '  top: 4rem;',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 0.2rem;',
    '  z-index: 10;',
    '}',
    '.site-nav a {',
    '  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;',
    '  font-size: 12px;',
    '  font-weight: 400;',
    '  color: #999;',
    '  text-decoration: none;',
    '  line-height: 1.6;',
    '  transition: color 0.15s;',
    '}',
    '.site-nav a:hover { color: #444; }',
    '.site-nav a[aria-current="page"] {',
    '  color: #111;',
    '}',
    '.site-nav a[aria-current="page"]::before {',
    '  content: "●";',
    '  font-family: "JetBrains Mono", monospace;',
    '  font-size: 8px;',
    '  margin-right: 0.4em;',
    '  vertical-align: middle;',
    '  position: relative;',
    '  top: -1px;',
    '}',
    '@media (max-width: 680px) {',
    '  .site-nav {',
    '    position: static;',
    '    flex-direction: row;',
    '    gap: 1.25rem;',
    '    padding: 0.4rem 2rem 0;',
    '  }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  var path = window.location.pathname;
  var nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Site navigation');

  NAV_LINKS.forEach(function (link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (path === link.href || path.startsWith(link.href)) {
      a.setAttribute('aria-current', 'page');
    }
    nav.appendChild(a);
  });

  // Append directly to body so display:contents on site-header can't interfere
  document.body.appendChild(nav);
})();
