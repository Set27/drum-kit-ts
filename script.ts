window.addEventListener('keydown', handler);

function handler(e: KeyboardEvent): void {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLElement;
  audio.currentTime = 0;
  audio?.play();
  key.classList.add('playing');
}

function removeTransition(this: HTMLElement, e: TransitionEvent): void {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key')) as any;
keys.forEach((key: HTMLElement) => key.addEventListener('transitionend', removeTransition));
