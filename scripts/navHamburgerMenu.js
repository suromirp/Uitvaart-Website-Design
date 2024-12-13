document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const topBar = document.querySelector('.top-bar');
  const topBarDivider = document.querySelector('.top-bar-divider');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
    topBar.classList.toggle('hidden');
    topBarDivider.classList.toggle('hidden');
  });
});
