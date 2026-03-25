// Scene: Book Library
import { categories, booksData } from '../books.js';
import { staggerIn } from '../utils/animations.js';

export function renderLibrary(container, onBooksSelected) {
  const selectedBooks = new Set();

  container.innerHTML = `
    <div class="scene-inner library-inner">
      <h2 class="scene-title gold">古 籍 书 库</h2>
      <p class="scene-subtitle">— 选择 3 至 6 本你感兴趣的书，AI 将从中为自己取名 —</p>
      <div class="selected-count" id="selected-count">已选 <span id="count-num">0</span> / 6 本</div>
      <div class="category-tabs" id="category-tabs"></div>
      <div class="book-grid" id="book-grid"></div>
      <button class="btn-gold btn-start-read" id="btn-start-read" disabled>
        开 始 阅 读
      </button>
    </div>
  `;

  const tabsEl = container.querySelector('#category-tabs');
  const gridEl = container.querySelector('#book-grid');
  const countEl = container.querySelector('#count-num');
  const btnEl = container.querySelector('#btn-start-read');

  // Render category tabs
  const allTab = document.createElement('button');
  allTab.className = 'cat-tab active';
  allTab.textContent = '全部';
  allTab.dataset.cat = 'all';
  tabsEl.appendChild(allTab);

  categories.forEach(cat => {
    const tab = document.createElement('button');
    tab.className = 'cat-tab';
    tab.textContent = `${cat.icon} ${cat.name}`;
    tab.dataset.cat = cat.id;
    tabsEl.appendChild(tab);
  });

  // Tab click handler
  tabsEl.addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    tabsEl.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderBooks(tab.dataset.cat);
  });

  function renderBooks(filter = 'all') {
    const books = filter === 'all' ? booksData : booksData.filter(b => b.category === filter);
    gridEl.innerHTML = '';

    books.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book-card' + (selectedBooks.has(book.id) ? ' selected' : '');
      div.dataset.id = book.id;

      const [c1, c2, c3] = book.color;
      div.innerHTML = `
        <div class="book-cover-wrap">
          <div class="book-cover" style="background: linear-gradient(135deg, ${c1}, ${c2}, ${c3})">
            <span>${book.displayTitle}</span>
          </div>
          <div class="book-check">✓</div>
        </div>
        <div class="book-info">
          <div class="book-title-label">${book.title}</div>
          <div class="book-meta">${book.author} · ${book.subtitle}</div>
        </div>
      `;

      div.addEventListener('click', () => toggleBook(book.id, div));
      gridEl.appendChild(div);
    });

    staggerIn(Array.from(gridEl.children), 80, 400);
  }

  function toggleBook(id, el) {
    if (selectedBooks.has(id)) {
      selectedBooks.delete(id);
      el.classList.remove('selected');
    } else if (selectedBooks.size < 6) {
      selectedBooks.add(id);
      el.classList.add('selected');
    } else {
      // Max 6, shake the counter
      countEl.parentElement.classList.add('shake');
      setTimeout(() => countEl.parentElement.classList.remove('shake'), 500);
      return;
    }

    countEl.textContent = selectedBooks.size;
    btnEl.disabled = selectedBooks.size < 3;

    if (selectedBooks.size >= 3) {
      btnEl.classList.add('visible');
    } else {
      btnEl.classList.remove('visible');
    }
  }

  btnEl.addEventListener('click', () => {
    const books = booksData.filter(b => selectedBooks.has(b.id));
    onBooksSelected(books);
  });

  renderBooks();
}
