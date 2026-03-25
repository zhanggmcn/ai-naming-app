// Scene: Name Candidates Display
import { staggerIn } from '../utils/animations.js';

export function renderCandidates(container, candidates, onNameChosen) {
  const favorites = new Set();

  // Group candidates by book
  const bookGroups = {};
  candidates.forEach(c => {
    if (!bookGroups[c.bookTitle]) bookGroups[c.bookTitle] = [];
    bookGroups[c.bookTitle].push(c);
  });

  container.innerHTML = `
    <div class="scene-inner candidates-inner">
      <h2 class="scene-title gold">名 字 候 选</h2>
      <p class="scene-subtitle">— 点击 ♡ 收藏喜欢的名字，然后选出最终之名 —</p>
      <div class="candidates-list" id="candidates-list"></div>
      <div class="favorites-bar" id="favorites-bar">
        <div class="favorites-label">我收藏的名字：</div>
        <div class="favorites-chips" id="favorites-chips"></div>
      </div>
    </div>
  `;

  const listEl = document.getElementById('candidates-list');
  const barEl = document.getElementById('favorites-bar');
  const chipsEl = document.getElementById('favorites-chips');

  // Render by book groups
  Object.entries(bookGroups).forEach(([bookTitle, names]) => {
    const section = document.createElement('div');
    section.className = 'candidates-section';

    const header = document.createElement('div');
    header.className = 'candidates-section-title';
    header.innerHTML = `📖 ${bookTitle}`;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'candidates-grid';

    names.forEach(candidate => {
      const card = document.createElement('div');
      card.className = 'candidate-card';
      card.innerHTML = `
        <div class="candidate-header">
          <span class="candidate-name">${candidate.name}</span>
          <button class="candidate-fav" data-name="${candidate.name}" title="收藏">♡</button>
        </div>
        <div class="candidate-quote">${candidate.quote}<br><span class="candidate-source">—— ${candidate.source}</span></div>
        <div class="candidate-meaning">${candidate.meaning}</div>
        <div class="candidate-reason">💭 ${candidate.reason}</div>
      `;

      // Fav button
      const favBtn = card.querySelector('.candidate-fav');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(candidate, favBtn);
      });

      // Click card to directly choose
      card.addEventListener('click', () => {
        if (!favorites.has(candidate.name)) {
          toggleFavorite(candidate, favBtn);
        }
      });

      grid.appendChild(card);
    });

    section.appendChild(grid);
    listEl.appendChild(section);
  });

  staggerIn(Array.from(listEl.querySelectorAll('.candidate-card')), 100, 400);

  function toggleFavorite(candidate, btn) {
    if (favorites.has(candidate.name)) {
      favorites.delete(candidate.name);
      btn.textContent = '♡';
      btn.classList.remove('active');
    } else {
      favorites.add(candidate.name);
      btn.textContent = '♥';
      btn.classList.add('active');
    }
    updateFavoritesBar();
  }

  function updateFavoritesBar() {
    if (favorites.size > 0) {
      barEl.classList.add('visible');
    } else {
      barEl.classList.remove('visible');
      return;
    }

    chipsEl.innerHTML = '';
    favorites.forEach(name => {
      const candidate = candidates.find(c => c.name === name);
      const chip = document.createElement('button');
      chip.className = 'fav-chip';
      chip.innerHTML = `${name} <span class="fav-chip-source">${candidate.bookTitle}</span>`;
      chip.addEventListener('click', () => onNameChosen(candidate));
      chipsEl.appendChild(chip);
    });
  }
}
