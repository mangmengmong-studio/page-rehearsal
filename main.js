'use strict';
const { t, message, renderQuote } = window.rehearsalI18n;
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
    message(status, 'released');
    clearInterval(timer);
  }
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const audio = document.getElementById('bgm-audio');
const soundButton = document.getElementById('sound-toggle');
const soundLabel = document.getElementById('sound-label');

function setSoundState(playing) {
  soundButton.setAttribute('aria-pressed', String(playing));
  message(soundLabel, playing ? 'music.pause' : 'music.play');
}

if (audio && soundButton && soundLabel) {
  soundButton.hidden = false;
  audio.volume = 0.35;
  setSoundState(false);
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
      message(soundLabel, 'music.retry');
    } finally {
      soundButton.disabled = false;
    }
  });
  audio.addEventListener('play', () => setSoundState(true));
  audio.addEventListener('pause', () => setSoundState(false));
  audio.addEventListener('error', () => {
    setSoundState(false);
    message(soundLabel, 'music.error');
    soundButton.disabled = true;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) audio.pause();
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function openPanel(panel) {
  panel.showModal();
  if (!reducedMotion.matches) panel.animate([
    { opacity: 0, transform: 'translateY(24px) rotate(-1deg) scale(.97)' },
    { opacity: 1, transform: 'translateY(0) rotate(0) scale(1)' }
  ], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' });
}
async function closePanel(panel) {
  if (!panel.open || panel.dataset.closing) return;
  panel.dataset.closing = 'true';
  panel.getAnimations().forEach(animation => animation.cancel());
  if (!reducedMotion.matches) {
    await panel.animate([
      { opacity: 1, transform: 'translateY(0) scale(1)' },
      { opacity: 0, transform: 'translateY(16px) scale(.98)' }
    ], { duration: 180, easing: 'ease-in' }).finished.catch(() => {});
  }
  panel.close();
  delete panel.dataset.closing;
}
document.querySelectorAll('dialog').forEach(panel => {
  panel.querySelector('.close-dialog').addEventListener('click', () => closePanel(panel));
  panel.addEventListener('cancel', event => {
    event.preventDefault();
    closePanel(panel);
  });
  panel.addEventListener('click', event => {
    if (event.target !== panel) return;
    const box = panel.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closePanel(panel);
  });
});
const galleryDialog = document.getElementById('gallery-dialog');
if (galleryDialog && typeof galleryDialog.showModal === 'function') {
  document.querySelectorAll('.film').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const picture = galleryDialog.querySelector('img');
      picture.src = link.href;
      picture.alt = link.querySelector('img').alt;
      galleryDialog.querySelector('p').textContent = link.dataset.caption;
      openPanel(galleryDialog);
    });
  });
}
document.querySelectorAll('[data-open]').forEach(link => {
  link.addEventListener('click', event => {
    const panel = document.getElementById(link.dataset.open);
    if (panel && typeof panel.showModal === 'function') {
      event.preventDefault();
      openPanel(panel);
    }
  });
});
const sceneSwitch = document.querySelector('.scene-switch');
const sceneStatus = document.getElementById('scene-status');
const scenes = {
  ella: { image: 'assets/ella-hero-cg.webp', name: 'Ella' },
  manda: { image: 'assets/manda-hero-cg.webp', name: 'Manda' }
};
if (sceneSwitch) {
  sceneSwitch.hidden = false;
  const buttons = [...sceneSwitch.querySelectorAll('[data-scene]')];
  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      if (button.getAttribute('aria-pressed') === 'true' || sceneSwitch.getAttribute('aria-busy') === 'true') return;
      const scene = scenes[button.dataset.scene];
      const picture = new Image();
      picture.src = scene.image;
      sceneSwitch.setAttribute('aria-busy', 'true');
      buttons.forEach(item => { item.disabled = true; });
      message(sceneStatus, 'scene.loading');
      const next = document.querySelector('.scenery-next');
      try {
        await picture.decode();
        next.style.backgroundImage = `url("${scene.image}")`;
        const quote = document.querySelector('.character-quote');
        if (!reducedMotion.matches) await quote.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, fill: 'forwards' }).finished;
        renderQuote(button.dataset.scene);
        quote.getAnimations().forEach(animation => animation.cancel());
        if (!reducedMotion.matches) {
          quote.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 500, easing: 'ease-out' });
          await next.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, easing: 'ease-in-out', fill: 'forwards' }).finished;
        }
        document.querySelector('.scenery:not(.scenery-next)').style.backgroundImage = `url("${scene.image}")`;
        next.getAnimations().forEach(animation => animation.cancel());
        document.querySelector('.hero').dataset.scene = button.dataset.scene;
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        message(sceneStatus, 'scene.ready', { name: scene.name });
      } catch {
        message(sceneStatus, 'scene.error');
      } finally {
        sceneSwitch.removeAttribute('aria-busy');
        buttons.forEach(item => { item.disabled = false; });
      }
    });
  });
}
