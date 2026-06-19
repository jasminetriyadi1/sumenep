/* ═══════ PAGE OVERLAY HIDE ═══════ */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('pageOverlay').classList.add('hidden');
  }, 700);
});

/* ═══════ NAVBAR SCROLL ═══════ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ═══════ SEARCH TABS ═══════ */
let heroType = '';
document.querySelectorAll('.stab').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.stab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    heroType = b.dataset.type;
  });
});

/* ═══════ NAVIGATE WITH BLOW-UP TRANSITION ═══════ */
function navigateTo(url) {
  document.body.classList.add('leaving');
  // also show overlay blow-up
  const ov = document.getElementById('pageOverlay');
  ov.classList.remove('hidden');
  ov.style.transition = 'opacity .28s ease';
  ov.style.opacity = '0';
  setTimeout(() => { ov.style.opacity = '1'; }, 10);
  setTimeout(() => { window.location.href = url; }, 320);
}

function goToMap() {
  const kec = document.getElementById('hero-kec').value;
  const q = document.getElementById('hero-q').value.trim();
  const params = new URLSearchParams();
  if (heroType) params.set('type', heroType);
  if (kec) params.set('kec', kec);
  if (q) params.set('search', q);
  const qs = params.toString();
  navigateTo('peta.html' + (qs ? '?' + qs : ''));
}

document.getElementById('heroCari').addEventListener('click', goToMap);
document.getElementById('hero-q').addEventListener('keydown', e => { if (e.key === 'Enter') goToMap(); });
document.getElementById('heroLihatPeta').addEventListener('click', () => navigateTo('peta.html'));
document.getElementById('mapPreviewBtn').addEventListener('click', () => navigateTo('peta.html'));
document.getElementById('footerPeta').addEventListener('click', e => { e.preventDefault(); navigateTo('peta.html'); });
document.getElementById('footerDashboard').addEventListener('click', e => { e.preventDefault(); navigateTo('dashboard.html#statistik'); });

/* ═══════ LOGIN MODAL ═══════ */
function openModal() {
  document.getElementById('loginModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('loginModal').classList.remove('open');
  document.body.style.overflow = '';
}
// Add click handler for statistics button
const statsBtn = document.querySelector('[href="dashboard.html#statistik"]');
if (statsBtn) statsBtn.addEventListener('click', e => { e.preventDefault(); navigateTo('dashboard.html#statistik'); });

const aksesBnt = document.querySelector('[href="dashboard.html#aksesibilitas"]');
if (aksesBnt) aksesBnt.addEventListener('click', e => { e.preventDefault(); navigateTo('dashboard.html#aksesibilitas'); });

document.getElementById('openLogin').addEventListener('click', openModal);
document.getElementById('closeLogin').addEventListener('click', closeModal);
document.getElementById('loginModal').addEventListener('click', e => {
  if (e.target === document.getElementById('loginModal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { alert('Isi email dan kata sandi terlebih dahulu.'); return; }
  closeModal();
  navigateTo('dashboard.html');
});

document.getElementById('guestBtn').addEventListener('click', () => {
  closeModal();
  navigateTo('dashboard.html');
});

document.getElementById('toRegister').addEventListener('click', () => {
  alert('Fitur pendaftaran dalam pengembangan. Gunakan akun demo atau akses sebagai tamu.');
});

/* ═══════ SCROLL REVEAL ═══════ */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));