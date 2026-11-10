const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.textContent='☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const list = document.getElementById('publicationList');
const count = document.getElementById('pubCount');
let activeFilter = 'all';
function renderPublications(){
  const items = publications.filter(p => activeFilter === 'all' || p.type === activeFilter)
    .sort((a,b) => b.year-a.year);
  count.textContent = `${items.length} ENTRIES`;
  list.innerHTML = items.map((p,i) => {
    const label = p.type === 'journal' ? 'JOURNAL ARTICLE' : p.type === 'conference' ? 'CONFERENCE PAPER' : 'BOOK CHAPTER';
    const doi = p.doi ? `https://doi.org/${p.doi}` : '';
    return `<article class="publication">
      <div class="pub-number">${String(i+1).padStart(2,'0')}</div>
      <div><div class="pub-type">${label} · ${p.year}</div><h3>${p.title}</h3><p>${p.authors}. ${p.venue}.</p></div>
      ${doi ? `<a class="pub-link" href="${doi}" target="_blank" rel="noopener">DOI ↗</a>` : `<span class="pub-link">DETAILS IN CV</span>`}
    </article>`;
  }).join('');
}
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); activeFilter = btn.dataset.filter; renderPublications();
}));
renderPublications();

// Update these profile URLs in site-config.js after checking the correct public profile addresses.
if (window.siteConfig) {
  document.querySelectorAll('[data-config-link]').forEach(a => {
    const key = a.dataset.configLink;
    const url = window.siteConfig[key];
    if (url && url !== '#') { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.addEventListener('click', e => { e.preventDefault(); alert('Add your public '+key+' profile URL in site-config.js before publishing.'); }); }
  });
}
