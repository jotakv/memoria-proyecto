const body = document.body;
const menuButton = document.querySelector('[data-menu-toggle]');
const menuTriggers = [...document.querySelectorAll('[data-menu-toggle]')];
const navigation = document.querySelector('[data-navigation]');
const navLinks = [...document.querySelectorAll('[data-nav-link]')];
const sections = [...document.querySelectorAll('[data-document-section]')];
const printButton = document.querySelector('[data-print]');
const progressBar = document.querySelector('[data-progress]');
const topButton = document.querySelector('[data-back-to-top]');

function setMenu(open) {
  body.classList.toggle('nav-open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  navigation?.setAttribute('aria-hidden', String(!open && window.innerWidth < 960));
}

navigation?.setAttribute('aria-hidden', String(window.innerWidth < 960));

menuTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const shouldOpen = trigger === menuButton && !body.classList.contains('nav-open');
    setMenu(shouldOpen);
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 960) {
    body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation?.setAttribute('aria-hidden', 'false');
  } else if (!body.classList.contains('nav-open')) {
    navigation?.setAttribute('aria-hidden', 'true');
  }
});

printButton?.addEventListener('click', () => window.print());
topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
  topButton?.classList.toggle('is-visible', window.scrollY > 720);
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const activeId = visible.target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-18% 0px -62% 0px', threshold: [0.1, 0.35, 0.65] },
  );

  sections.forEach((section) => observer.observe(section));
}
