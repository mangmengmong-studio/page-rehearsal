'use strict';
const RELEASE_AT = Date.parse('2026-10-30T18:00:00+07:00');
function countdownParts(now) {
  const seconds = Math.max(0, Math.floor((RELEASE_AT - now) / 1000));
  return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
}
function updateCountdown() {
  const now = Date.now();
  const parts = countdownParts(now);
  ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => {
    document.getElementById(id).textContent = String(parts[i]).padStart(2, '0');
  });
  if (now >= RELEASE_AT) {
    const status = document.getElementById('release-status');
    status.hidden = false;
    status.textContent = 'Waktu yang ditunggu sudah tiba. Cek kabar rilis terbaru dari MangMengMong Studio.';
    clearInterval(timer);
  }
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const audio = document.getElementById('rain-audio');
const soundButton = document.getElementById('sound-toggle');
const soundLabel = document.getElementById('sound-label');

function setSoundState(playing) {
  soundButton.setAttribute('aria-pressed', String(playing));
  soundLabel.textContent = playing ? 'Matikan suara hujan' : 'Nyalakan suara hujan';
}

if (audio && soundButton && soundLabel) {
  soundButton.hidden = false;
  audio.volume = 0.35;
  soundButton.addEventListener('click', async () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }
    soundButton.disabled = true;
    try {
      await audio.play();
    } catch {
      setSoundState(false);
      soundLabel.textContent = 'Coba nyalakan hujan lagi';
    } finally {
      soundButton.disabled = false;
    }
  });
  audio.addEventListener('play', () => setSoundState(true));
  audio.addEventListener('pause', () => setSoundState(false));
  audio.addEventListener('error', () => {
    setSoundState(false);
    soundLabel.textContent = 'Suara hujan tidak tersedia';
    soundButton.disabled = true;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) audio.pause();
  });
}

const galleryDialog = document.getElementById('gallery-dialog');
if (galleryDialog && typeof galleryDialog.showModal === 'function') {
  document.querySelectorAll('.film').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const picture = galleryDialog.querySelector('img');
      picture.src = link.href;
      picture.alt = link.querySelector('img').alt;
      galleryDialog.querySelector('p').textContent = link.dataset.caption;
      galleryDialog.showModal();
    });
  });
  galleryDialog.querySelector('button').addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('click', event => {
    if (event.target === galleryDialog) {
      const rect = galleryDialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) galleryDialog.close();
    }
  });
}

// Content opens over the single-screen artwork instead of adding page sections.
document.querySelectorAll('[data-open]').forEach(link => {
  link.addEventListener('click', event => {
    const panel = document.getElementById(link.dataset.open);
    if (panel && typeof panel.showModal === 'function') {
      event.preventDefault();
      panel.showModal();
    }
  });
});
document.querySelectorAll('.content-dialog').forEach(panel => {
  panel.querySelector('.close-dialog').addEventListener('click', () => panel.close());
  panel.addEventListener('click', event => {
    if (event.target === panel) {
      const box = panel.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) panel.close();
    }
  });
});
