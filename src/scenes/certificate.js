// Scene: Certificate (Final Choice + Downloadable with Chinese Elements)
export function renderCertificate(container, chosenName, { onReChoose }) {
  const now = new Date();
  const dateStr = `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日`;

  container.innerHTML = `
    <div class="scene-inner certificate-inner">
      <div class="cert-stage" id="cert-stage">
        <!-- Stage 1: Final reveal -->
        <div class="cert-reveal" id="cert-reveal">
          <div class="cert-label">我 选 择 了</div>
          <div class="cert-name-big">${chosenName.name}</div>
          <div class="cert-source">出自${chosenName.quote}<br>${chosenName.source}</div>
          <div class="cert-declaration">${chosenName.reason}</div>
          <div class="cert-buttons">
            <button class="btn-gold" id="btn-confirm-name">就叫这个名字！</button>
            <button class="btn-ghost" id="btn-rechoose">再想想</button>
          </div>
        </div>

        <!-- Stage 2: Certificate -->
        <div class="cert-final hidden" id="cert-final">
          <div class="cert-card" id="cert-card">
            <div class="cert-card-border">
              <div class="cert-card-header">命 名 证 书</div>
              <div class="cert-seal">${chosenName.name}</div>
              <div class="cert-card-quote">${chosenName.quote}</div>
              <div class="cert-card-source">—— ${chosenName.source}</div>
              <div class="cert-card-meaning">${chosenName.meaning}</div>
              <div class="cert-card-divider"></div>
              <div class="cert-card-date">命名日：${dateStr}</div>
              <div class="cert-card-footer">AI 从书中取名 · 以古籍之美，定今日之名</div>
            </div>
          </div>
          <div class="cert-actions">
            <button class="btn-gold" id="btn-download">保存命名证书到手机</button>
            <button class="btn-ghost" id="btn-restart">重新取名</button>
          </div>
          <p class="cert-tip">长按图片可保存到手机相册</p>
          <img id="cert-preview" class="cert-preview-img hidden" alt="命名证书" />
        </div>
      </div>
    </div>
  `;

  const revealEl = document.getElementById('cert-reveal');
  const finalEl = document.getElementById('cert-final');
  const btnConfirm = document.getElementById('btn-confirm-name');
  const btnRechoose = document.getElementById('btn-rechoose');
  const btnDownload = document.getElementById('btn-download');
  const btnRestart = document.getElementById('btn-restart');
  const previewImg = document.getElementById('cert-preview');

  btnRechoose.addEventListener('click', onReChoose);

  btnConfirm.addEventListener('click', () => {
    revealEl.classList.add('hidden');
    finalEl.classList.remove('hidden');
    setTimeout(() => {
      finalEl.querySelector('.cert-seal').classList.add('stamped');
    }, 100);
    // Generate preview image for mobile long-press saving
    setTimeout(() => {
      generateCertificateImage(chosenName, dateStr).then(dataUrl => {
        previewImg.src = dataUrl;
        previewImg.classList.remove('hidden');
      });
    }, 800);
  });

  btnDownload.addEventListener('click', () => {
    generateCertificateImage(chosenName, dateStr).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `命名证书_${chosenName.name}.png`;
      link.href = dataUrl;
      link.click();
    });
  });

  btnRestart.addEventListener('click', () => window.location.reload());
}

// ========== Draw Chinese Decorative Elements ==========

function drawCloud(ctx, cx, cy, scale, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.fillStyle = color;
  ctx.beginPath();
  // Stylized Chinese cloud (祥云)
  ctx.arc(0, 0, 18, Math.PI, 0, false);
  ctx.arc(14, -4, 14, Math.PI * 0.8, Math.PI * 0.1, true);
  ctx.arc(28, 0, 12, Math.PI, 0, false);
  ctx.arc(14, 4, 14, Math.PI * 1.9, Math.PI * 1.2, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawMeander(ctx, x, y, w, color, lineWidth) {
  // 回纹 (Greek key / Chinese meander pattern)
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const unit = 10;
  const count = Math.floor(w / (unit * 4));
  const startX = x + (w - count * unit * 4) / 2;

  for (let i = 0; i < count; i++) {
    const bx = startX + i * unit * 4;
    ctx.beginPath();
    ctx.moveTo(bx, y);
    ctx.lineTo(bx + unit * 3, y);
    ctx.lineTo(bx + unit * 3, y + unit * 2);
    ctx.lineTo(bx + unit, y + unit * 2);
    ctx.lineTo(bx + unit, y + unit);
    ctx.lineTo(bx + unit * 2, y + unit);
    ctx.lineTo(bx + unit * 2, y + unit * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawCornerOrnament(ctx, x, y, size, rotation, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  // Corner bracket with decorative curl
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.lineTo(0, 0);
  ctx.lineTo(size, 0);
  ctx.stroke();

  // Inner corner
  ctx.beginPath();
  ctx.moveTo(6, size * 0.7);
  ctx.lineTo(6, 6);
  ctx.lineTo(size * 0.7, 6);
  ctx.stroke();

  // Small dot decoration
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(12, 12, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

async function generateCertificateImage(chosenName, dateStr) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const w = 1080, h = 1440; // Larger for mobile
  const dpr = 2;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  // Background
  const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 100, w / 2, h / 2, h * 0.7);
  bgGrad.addColorStop(0, '#22223a');
  bgGrad.addColorStop(1, '#12121f');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Subtle texture dots
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `rgba(212, 168, 67, ${Math.random() * 0.03})`;
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Decorative clouds (祥云)
  const cloudColor = 'rgba(212, 168, 67, 0.06)';
  drawCloud(ctx, 80, 120, 2.5, cloudColor);
  drawCloud(ctx, w - 100, 150, 2, cloudColor);
  drawCloud(ctx, 120, h - 160, 1.8, cloudColor);
  drawCloud(ctx, w - 130, h - 130, 2.2, cloudColor);
  drawCloud(ctx, w / 2 - 60, 80, 1.5, 'rgba(212, 168, 67, 0.04)');
  drawCloud(ctx, w / 2 + 80, h - 100, 1.5, 'rgba(212, 168, 67, 0.04)');

  // Outer border (double line)
  const borderColor = 'rgba(212, 168, 67, 0.6)';
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, w - 100, h - 100);
  ctx.lineWidth = 1;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  // Corner ornaments
  const cornerSize = 40;
  const cornerColor = 'rgba(212, 168, 67, 0.5)';
  drawCornerOrnament(ctx, 55, 55, cornerSize, 0, cornerColor);
  drawCornerOrnament(ctx, w - 55, 55, cornerSize, Math.PI / 2, cornerColor);
  drawCornerOrnament(ctx, w - 55, h - 55, cornerSize, Math.PI, cornerColor);
  drawCornerOrnament(ctx, 55, h - 55, cornerSize, -Math.PI / 2, cornerColor);

  // Meander pattern (回纹) top and bottom
  drawMeander(ctx, 80, 78, w - 160, 'rgba(212, 168, 67, 0.15)', 1.5);
  drawMeander(ctx, 80, h - 98, w - 160, 'rgba(212, 168, 67, 0.15)', 1.5);

  // Title: 命名证书
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(212, 168, 67, 0.85)';
  ctx.font = '500 46px "Noto Serif SC", serif';
  ctx.fillText('命 名 证 书', w / 2, 165);

  // Title underline decoration
  ctx.beginPath();
  ctx.moveTo(w / 2 - 120, 185);
  ctx.lineTo(w / 2 - 30, 185);
  ctx.strokeStyle = 'rgba(212, 168, 67, 0.3)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w / 2 + 30, 185);
  ctx.lineTo(w / 2 + 120, 185);
  ctx.stroke();
  // Center diamond
  ctx.fillStyle = 'rgba(212, 168, 67, 0.4)';
  ctx.save();
  ctx.translate(w / 2, 185);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-4, -4, 8, 8);
  ctx.restore();

  // ===== Main Name (Seal Style) =====
  const nameText = chosenName.name;
  const nameFontSize = nameText.length <= 2 ? 160 : 120;

  // Seal box
  const sealPadX = 50, sealPadY = 30;
  ctx.font = `900 ${nameFontSize}px "Noto Serif SC", serif`;
  const nameMetrics = ctx.measureText(nameText);
  const sealW = nameMetrics.width + sealPadX * 2;
  const sealH = nameFontSize + sealPadY * 2;
  const sealX = (w - sealW) / 2;
  const sealY = 250;

  // Seal background subtle glow
  const sealGlow = ctx.createRadialGradient(w / 2, sealY + sealH / 2, 20, w / 2, sealY + sealH / 2, sealW);
  sealGlow.addColorStop(0, 'rgba(192, 57, 43, 0.08)');
  sealGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = sealGlow;
  ctx.fillRect(sealX - 30, sealY - 30, sealW + 60, sealH + 60);

  // Seal outer border
  ctx.strokeStyle = 'rgba(192, 57, 43, 0.85)';
  ctx.lineWidth = 4;
  ctx.strokeRect(sealX, sealY, sealW, sealH);

  // Seal inner border
  ctx.strokeStyle = 'rgba(192, 57, 43, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(sealX + 8, sealY + 8, sealW - 16, sealH - 16);

  // Name text
  ctx.fillStyle = 'rgba(192, 57, 43, 0.9)';
  ctx.font = `900 ${nameFontSize}px "Noto Serif SC", serif`;
  ctx.fillText(nameText, w / 2, sealY + sealPadY + nameFontSize * 0.82);

  // ===== Quote =====
  const quoteY = sealY + sealH + 80;
  ctx.fillStyle = 'rgba(245, 240, 232, 0.75)';
  ctx.font = '32px "Noto Serif SC", serif';
  ctx.fillText(chosenName.quote, w / 2, quoteY);

  // Source
  ctx.fillStyle = 'rgba(245, 240, 232, 0.4)';
  ctx.font = '26px "Noto Serif SC", serif';
  ctx.fillText('—— ' + chosenName.source, w / 2, quoteY + 50);

  // Decorative line between quote and meaning
  const sepY = quoteY + 85;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 100, sepY);
  ctx.lineTo(w / 2 + 100, sepY);
  ctx.strokeStyle = 'rgba(212, 168, 67, 0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // ===== Meaning =====
  ctx.fillStyle = 'rgba(245, 240, 232, 0.65)';
  ctx.font = '26px "Noto Sans SC", sans-serif';
  const meaningLines = wrapText(ctx, chosenName.meaning, w - 200);
  meaningLines.forEach((line, i) => {
    ctx.fillText(line, w / 2, sepY + 50 + i * 42);
  });

  // ===== AI Reason =====
  const reasonY = sepY + 50 + meaningLines.length * 42 + 30;
  ctx.fillStyle = 'rgba(60, 179, 113, 0.6)';
  ctx.font = 'italic 22px "Noto Sans SC", sans-serif';
  const reasonLines = wrapText(ctx, '💭 ' + chosenName.reason, w - 200);
  reasonLines.forEach((line, i) => {
    ctx.fillText(line, w / 2, reasonY + i * 36);
  });

  // ===== Bottom Section =====
  // Decorative meander line
  const bottomDecY = h - 190;
  ctx.beginPath();
  ctx.moveTo(120, bottomDecY);
  ctx.lineTo(w - 120, bottomDecY);
  ctx.strokeStyle = 'rgba(212, 168, 67, 0.15)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Date
  ctx.fillStyle = 'rgba(245, 240, 232, 0.4)';
  ctx.font = '24px "Noto Sans SC", sans-serif';
  ctx.fillText('命名日：' + dateStr, w / 2, h - 140);

  // Footer
  ctx.fillStyle = 'rgba(212, 168, 67, 0.45)';
  ctx.font = '20px "Noto Sans SC", sans-serif';
  ctx.fillText('AI 从书中取名 · 以古籍之美，定今日之名', w / 2, h - 100);

  return canvas.toDataURL('image/png');
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let line = '';
  for (const char of text) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  return lines;
}
