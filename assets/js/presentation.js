var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;

Reveal.initialize({
  hash: true,
  slideNumber: false,
  progress: true,
  controls: true,
  center: false,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  margin: 0,
  width: window.innerWidth,
  height: window.innerHeight - headerH,
  minScale: 0.5,
  maxScale: 2.0,

  keyboard: {
    70: function() {
      const elem = document.documentElement;
      if (!document.fullscreenElement) {
        elem.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }
});

// Nom du module par index de slide (0-based)
var MODULE_LABELS = {
  2: 'SmartDocListes',
  3: 'SmartDocListes',
  4: 'SmartDocListes',
  5: 'SmartDocListes',
  6: 'SmartDocListes',
  7: 'SmartDocListes',
  8: 'SmartDocListes',
  9: 'SmartDocListes',
  10: 'SmartDocListes',
  11: 'RecurringEvent',
  12: 'RecurringEvent',
  13: 'RecurringEvent',
  14: 'RecurringEvent',
  15: 'RecurringEvent',
  16: 'RecurringEvent',
  17: 'RecurringEvent',
  18: 'RecurringEvent',
  19: 'RecurringEvent'
};

// Update header slide counter
function updateCounter() {
  var indices = Reveal.getIndices();
  var idx     = indices.h;
  var current = document.getElementById('current-slide');
  var total   = document.getElementById('total-slides');
  var module  = document.getElementById('current-module');
  if (current) current.textContent = idx + 1;
  if (total)   total.textContent   = Reveal.getTotalSlides();
  if (module)  module.textContent  = MODULE_LABELS[idx] || '';
}

// Reveal.js remplace height:100% (son propre CSS) par un px fixe via inline style.
// On le remet à 100% pour que .slide-layout { height:100% } fonctionne.
function fixSectionHeights() {
  document.querySelectorAll('.reveal .slides > section').forEach(function(s) {
    s.style.height = '100%';
  });
}

Reveal.on('ready',        updateCounter);
Reveal.on('ready',        fixSectionHeights);
Reveal.on('slidechanged', updateCounter);

// Auto-detect missing screenshots and show placeholders
document.querySelectorAll('.screenshot-placeholder img').forEach(function(img) {
  img.addEventListener('error', function() {
    this.parentElement.classList.add('no-img');
  });
  img.addEventListener('load', function() {
    this.parentElement.classList.remove('no-img');
    var pt = this.parentElement.querySelector('.placeholder-text');
    if (pt) pt.style.display = 'none';
  });
  if (!img.complete || img.naturalWidth === 0) {
    img.parentElement.classList.add('no-img');
  }
});
