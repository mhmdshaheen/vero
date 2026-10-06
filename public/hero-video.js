(() => {
  const video = document.querySelector('.hero-video video');
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  function resume() {
    if (document.hidden || !video.paused) return;
    video.play().catch(() => {});
  }

  video.addEventListener('canplay', resume);
  window.addEventListener('pageshow', resume);
  document.addEventListener('visibilitychange', resume);
  resume();
})();
