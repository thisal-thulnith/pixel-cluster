/* ============================================================
   PIXEL CLUSTER — Unified Navbar Logic
   - Mobile menu toggle
   - Highlight active nav link based on current page
   - Smooth scroll behavior
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile toggle
  const toggle = document.querySelector('.pc-nav-toggle');
  const links = document.querySelector('.pc-nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark'); }
      });
    });
  }

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  document.querySelectorAll('.pc-nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop().toLowerCase();
    if (currentPage === linkPage || currentPage.includes(linkPage.replace('.html', ''))) {
      a.classList.add('active');
    }
  });
});
