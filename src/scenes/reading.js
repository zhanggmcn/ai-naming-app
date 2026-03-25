// Scene: Reading Animation
import { wait } from '../utils/animations.js';

export function renderReading(container, selectedBooks, onComplete) {
  container.innerHTML = `
    <div class="scene-inner reading-inner">
      <h2 class="reading-book-title" id="r-title"></h2>
      <p class="reading-book-author" id="r-author"></p>
      <div class="reading-scroll">
        <div class="reading-text" id="r-text"></div>
      </div>
      <div class="reading-progress-bar">
        <div class="reading-progress-fill" id="r-progress"></div>
      </div>
      <p class="reading-status" id="r-status"></p>
      <div class="reading-found" id="r-found">
        <div class="reading-found-label">✦ 找到了！</div>
        <div class="reading-found-name" id="r-found-name"></div>
        <div class="reading-found-reason" id="r-found-reason"></div>
      </div>
      <div class="reading-book-counter" id="r-counter"></div>
    </div>
  `;

  const allCandidates = [];
  let bookIdx = 0;

  async function readNextBook() {
    if (bookIdx >= selectedBooks.length) {
      await wait(600);
      onComplete(allCandidates);
      return;
    }

    const book = selectedBooks[bookIdx];
    // Randomly pick one candidate to "discover" during reading
    const candidate = book.candidates[Math.floor(Math.random() * book.candidates.length)];

    const titleEl = document.getElementById('r-title');
    const authorEl = document.getElementById('r-author');
    const textEl = document.getElementById('r-text');
    const progressEl = document.getElementById('r-progress');
    const statusEl = document.getElementById('r-status');
    const foundEl = document.getElementById('r-found');
    const foundNameEl = document.getElementById('r-found-name');
    const foundReasonEl = document.getElementById('r-found-reason');
    const counterEl = document.getElementById('r-counter');

    // Reset
    titleEl.textContent = book.displayTitle;
    authorEl.textContent = `${book.author} · ${book.subtitle}`;
    textEl.innerHTML = '';
    progressEl.style.width = '0%';
    statusEl.innerHTML = '正在阅读<span class="ai-thinking"><span></span><span></span><span></span></span>';
    foundEl.classList.remove('visible');
    counterEl.textContent = `第 ${bookIdx + 1} / ${selectedBooks.length} 本`;

    await wait(500);

    // Type the excerpt
    const chars = candidate.excerpt.split('');
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === '\n') {
        textEl.innerHTML += '<br>';
      } else {
        textEl.innerHTML += chars[i];
      }
      progressEl.style.width = (i / chars.length * 90) + '%';
      const delay = '，。！？；：'.includes(chars[i]) ? 100 : 35;
      await wait(delay);
    }

    await wait(400);

    // Show highlighted version
    const highlightedText = candidate.excerpt.replace(
      candidate.highlight,
      `<span class="reading-highlight">${candidate.highlight}</span>`
    ).replace(/\n/g, '<br>');
    textEl.innerHTML = highlightedText;
    progressEl.style.width = '100%';
    statusEl.textContent = '找到了一个好名字！';

    await wait(600);

    // Show found name
    foundNameEl.textContent = candidate.name;
    foundReasonEl.textContent = candidate.reason;
    foundEl.classList.add('visible');

    // Store all 3 candidates for this book
    book.candidates.forEach(c => {
      allCandidates.push({ ...c, bookTitle: book.title, bookDisplayTitle: book.displayTitle });
    });

    await wait(2200);

    bookIdx++;
    readNextBook();
  }

  readNextBook();
}
