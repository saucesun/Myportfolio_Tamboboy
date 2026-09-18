document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function showSection(id) {
    sections.forEach(function (s) {
      s.classList.remove('active');
    });
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-target') === id);
    });
  }

  document.querySelectorAll('[data-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showSection(btn.getAttribute('data-target'));
    });
  });

  /* ===== NAVBAR DROPDOWN (JavaScript DOM Activity) ===== */
  // select the dropdown buttons and dropdown menus using DOM selectors
  const dropdownBtn1 = document.querySelector('#dropdownBtn1');
  const dropdownMenu1 = document.querySelector('#dropdownMenu1');
  const dropdownBtn2 = document.querySelector('#dropdownBtn2');
  const dropdownMenu2 = document.querySelector('#dropdownMenu2');
  const allDropdownMenus = document.querySelectorAll('.dropdown-menu');

  function closeAllDropdowns() {
    allDropdownMenus.forEach(function (menu) {
      menu.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-btn').forEach(function (btn) {
      btn.classList.remove('open');
    });
  }

  // click event for dropdown 1 (PROJECTS)
  if (dropdownBtn1 && dropdownMenu1) {
    dropdownBtn1.addEventListener('click', function (event) {
      event.stopPropagation();
      closeAllDropdowns();
      dropdownMenu1.classList.toggle('show');
      dropdownBtn1.classList.toggle('open');
    });
  }

  // click event for dropdown 2 (CONTACTS)
  if (dropdownBtn2 && dropdownMenu2) {
    dropdownBtn2.addEventListener('click', function (event) {
      event.stopPropagation();
      closeAllDropdowns();
      dropdownMenu2.classList.toggle('show');
      dropdownBtn2.classList.toggle('open');
    });
  }

  // Bonus 1: close the dropdown when clicking outside of it
  document.addEventListener('click', function () {
    closeAllDropdowns();
  });

  // Bonus 2: arrow indicator (done via .open class in CSS), and
  // close the dropdown after choosing an item that navigates to a section
  if (dropdownMenu1) {
    dropdownMenu1.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (link.getAttribute('data-target')) {
          event.preventDefault();
          showSection(link.getAttribute('data-target'));
          closeAllDropdowns();
        }
      });
    });
  }

  // typing effect for landing subtitle
  const typedEl = document.getElementById('landing-typed');
  const phrases = ['> Welcome to my personal website', '> Initializing portfolio...', '> Access granted // Welcome'];
  let pIdx = 0, cIdx = 0, deleting = false;
  function typeLoop() {
    if (!typedEl) return;
    const phrase = phrases[pIdx];
    if (!deleting) {
      typedEl.textContent = phrase.slice(0, cIdx + 1);
      cIdx++;
      if (cIdx === phrase.length) { deleting = true; setTimeout(typeLoop, 2200); return; }
    } else {
      typedEl.textContent = phrase.slice(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    }
    setTimeout(typeLoop, deleting ? 35 : 60);
  }
  typeLoop();

  // uptime counter on landing
  function pad(n) { return String(n).padStart(2, '0'); }
  let upSec = 0;
  setInterval(function () {
    upSec++;
    const h = pad(Math.floor(upSec / 3600)), m = pad(Math.floor((upSec % 3600) / 60)), s = pad(upSec % 60);
    const u = document.getElementById('uptime');
    if (u) u.textContent = h + ':' + m + ':' + s;
  }, 1000);

  // canvas particle network - technology feel
  const canvas = document.getElementById('tech-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize(); window.addEventListener('resize', resize);
    particles = Array.from({ length: 55 }, function () {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35
      };
    });
    function frame() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.45)';
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(6,182,212,' + (0.12 * (1 - d / 140)) + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    frame();
  }
});