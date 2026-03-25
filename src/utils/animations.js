// Animation utilities

export function typeText(element, text, { charDelay = 60, punctDelay = 180, lineDelay = 500, onDone } = {}) {
  let i = 0;
  const chars = text.split('');

  function type() {
    if (i >= chars.length) {
      if (onDone) onDone();
      return;
    }
    const ch = chars[i];
    if (ch === '\n') {
      element.innerHTML += '<br>';
    } else {
      // Remove cursor before inserting
      const cursor = element.querySelector('.type-cursor');
      if (cursor) cursor.remove();
      element.innerHTML += ch + '<span class="type-cursor"></span>';
    }
    i++;
    const delay = '，。！？；：'.includes(ch) ? punctDelay : ch === '\n' ? lineDelay : charDelay;
    setTimeout(type, delay);
  }

  type();
}

export function fadeIn(element, duration = 600) {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
  requestAnimationFrame(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
}

export function staggerIn(elements, delay = 200, duration = 500) {
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * delay);
  });
}

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
