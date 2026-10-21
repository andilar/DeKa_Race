// DK-Race – minimales JavaScript: Mobilmenü, Öffnungsstatus, Copyright-Jahr.

const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Öffnungszeiten an einer Stelle pflegen: [Tag 0=So … 6=Sa] -> Zeitfenster "HH:MM-HH:MM"
const HOURS = {
  1: ['10:00-12:30', '14:30-18:30'],
  2: ['10:00-12:30', '14:30-18:30'],
  3: ['10:00-12:30', '14:30-18:30'],
  4: ['10:00-12:30', '14:30-18:30'],
  5: ['10:00-12:30', '14:30-18:30'],
  6: ['12:00-14:00'],
};

const stateEl = document.querySelector('[data-open-state]');
if (stateEl) {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
  const minutes = now.getHours() * 60 + now.getMinutes();
  const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const slot = (HOURS[now.getDay()] || []).find((s) => {
    const [a, b] = s.split('-').map(toMin);
    return minutes >= a && minutes < b;
  });
  stateEl.textContent = slot ? `Jetzt geöffnet bis ${slot.split('-')[1]} Uhr` : 'Gerade geschlossen';
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
