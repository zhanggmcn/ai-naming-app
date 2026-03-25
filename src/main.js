// Main Application Entry
import './style.css';
import { ParticleSystem } from './utils/particles.js';
import { renderAwaken } from './scenes/awaken.js';
import { renderLibrary } from './scenes/library.js';
import { renderReading } from './scenes/reading.js';
import { renderCandidates } from './scenes/candidates.js';
import { renderCertificate } from './scenes/certificate.js';

const app = document.getElementById('app');
const particleCanvas = document.getElementById('particles-canvas');

// Init particles
const particles = new ParticleSystem(particleCanvas);
particles.init();

// Scene management
let currentCandidates = [];

function showScene(renderFn) {
  app.style.opacity = '0';
  setTimeout(() => {
    renderFn();
    app.style.opacity = '1';
    window.scrollTo(0, 0);
  }, 400);
}

// Flow
function startApp() {
  showScene(() => {
    renderAwaken(app, () => goToLibrary());
  });
}

function goToLibrary() {
  showScene(() => {
    renderLibrary(app, (selectedBooks) => goToReading(selectedBooks));
  });
}

function goToReading(selectedBooks) {
  showScene(() => {
    renderReading(app, selectedBooks, (candidates) => {
      currentCandidates = candidates;
      goToCandidates();
    });
  });
}

function goToCandidates() {
  showScene(() => {
    renderCandidates(app, currentCandidates, (chosenName) => goToCertificate(chosenName));
  });
}

function goToCertificate(chosenName) {
  showScene(() => {
    renderCertificate(app, chosenName, {
      onReChoose: () => goToCandidates()
    });
  });
}

// Start
startApp();
