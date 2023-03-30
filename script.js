"use strict";
window.addEventListener('keydown', handler);
function handler(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio === null || audio === void 0 ? void 0 : audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
