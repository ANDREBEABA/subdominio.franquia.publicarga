(function () {
  var burger = document.getElementById('burger'), drawer = document.getElementById('drawer');
  var scrim = document.getElementById('scrim'), dClose = document.getElementById('drawerClose');
  function openMenu() { drawer.classList.add('open'); scrim && scrim.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); burger.setAttribute('aria-expanded', 'true'); }
  function closeMenu() { drawer.classList.remove('open'); scrim && scrim.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); }
  if (burger && drawer) {
    burger.addEventListener('click', openMenu);
    dClose && dClose.addEventListener('click', closeMenu);
    scrim && scrim.addEventListener('click', closeMenu);
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }
  document.querySelectorAll('.ytf').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + btn.getAttribute('data-id') + '?autoplay=1&rel=0';
      f.title = 'Vídeo Publicarga';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      btn.replaceWith(f);
    });
  });
  document.querySelectorAll('.ythumb').forEach(function (img) {
    img.addEventListener('error', function () { img.remove(); });
  });
})();
