Reveal.initialize({
  hash: true,
  slideNumber: false,
  progress: true,
  controls: true,
  center: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  margin: 0,

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
  2: 'AdvancedDocumentLines',
  3: 'AdvancedDocumentLines',
  4: 'AdvancedDocumentLines',
  5: 'AdvancedDocumentLines',
  6: 'AdvancedDocumentLines',
  7: 'AdvancedDocumentLines',
  8: 'AdvancedDocumentLines',
  9: 'RemindMe',
  10: 'RemindMe',
  11: 'RemindMe',
  12: 'RemindMe',
  13: 'RemindMe',
  14: 'RemindMe',
  15: 'RemindMe',
  16: 'RemindMe',
  17: 'RemindMe'
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

Reveal.on('ready',        updateCounter);
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
