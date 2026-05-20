export function ogSvg({
  title,
  subtitle,
  typeLabel,
  typeColor,
}: {
  title: string;
  subtitle?: string;
  typeLabel?: string;
  typeColor?: string;
}) {
  const bg = '#2a2a26';
  const ink = '#f0f0ec';
  const muted = 'rgba(240,240,236,0.4)';
  const rule = 'rgba(240,240,236,0.12)';
  const font = 'Arial, Helvetica, sans-serif'; // predictable metrics in librsvg

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Conservative wrap: ~26 chars per line at 52px, max 2 lines
  const titleLines = wrapText(title, 26).map(esc);

  // Subtitle: single line, max 72 chars
  const subtitleText = subtitle
    ? esc(subtitle.length > 72 ? subtitle.slice(0, 71) + '…' : subtitle)
    : '';

  const typeLabelUpper = typeLabel ? esc(typeLabel.toUpperCase()) : '';
  // Badge: fixed padding, estimate ~11px per char at font-size 13 with letter-spacing 1.5
  const badgeTextWidth = typeLabel ? typeLabel.length * 11 + 32 : 0;

  // Layout
  const headerBottom = 160;
  const contentTop = typeLabel ? 260 : 230;
  const lineHeight = 72;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${bg}"/>

  <!-- logo tachadura -->
  <g transform="translate(80, 60)">
    <rect x="1" y="1" width="52" height="52" stroke="${ink}" stroke-width="2" fill="none"/>
    <line x1="11" y1="19" x2="43" y2="19" stroke="${ink}" stroke-width="2.5" stroke-linecap="square"/>
    <line x1="11" y1="27" x2="43" y2="27" stroke="${ink}" stroke-width="2.5" stroke-linecap="square"/>
    <line x1="11" y1="35" x2="43" y2="35" stroke="${ink}" stroke-width="2.5" stroke-linecap="square"/>
    <line x1="9" y1="45" x2="45" y2="9" stroke="${ink}" stroke-width="3" stroke-linecap="square"/>
  </g>

  <!-- wordmark -->
  <text x="152" y="98" font-family="${font}" font-size="32" font-weight="700" fill="${ink}" letter-spacing="5">BOLETÍN</text>
  <text x="152" y="122" font-family="${font}" font-size="13" fill="${muted}">gob.co.nz</text>

  <!-- regla header -->
  <line x1="80" y1="${headerBottom}" x2="1120" y2="${headerBottom}" stroke="${rule}" stroke-width="1"/>

  ${typeLabel ? `
  <!-- type badge -->
  <rect x="80" y="185" width="${badgeTextWidth}" height="28" stroke="${typeColor ?? ink}" stroke-width="1.5" fill="none"/>
  <text x="96" y="204" font-family="${font}" font-size="13" font-weight="700" letter-spacing="1.5" fill="${typeColor ?? ink}">${typeLabelUpper}</text>
  ` : ''}

  <!-- title lines -->
  ${titleLines.map((line, i) => `
  <text x="80" y="${contentTop + i * lineHeight}" font-family="${font}" font-size="52" font-weight="700" fill="${ink}">${line}</text>
  `).join('')}

  ${subtitleText ? `
  <!-- subtitle -->
  <text x="80" y="${contentTop + titleLines.length * lineHeight + 36}" font-family="${font}" font-size="20" fill="${muted}">${subtitleText}</text>
  ` : ''}

  <!-- regla footer -->
  <line x1="80" y1="570" x2="1120" y2="570" stroke="${rule}" stroke-width="1"/>
  <text x="80" y="600" font-family="${font}" font-size="14" fill="${muted}">Correcciones documentadas a la industria tecnológica</text>
</svg>`;
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars) {
      if (current) lines.push(current);
      current = word.length > maxChars ? word.slice(0, maxChars - 1) + '…' : word;
    } else {
      current = candidate;
    }
    if (lines.length === 1 && current.length > maxChars) {
      current = current.slice(0, maxChars - 1) + '…';
      break;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 2);
}
