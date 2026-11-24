/* ═══════════════════════════════════════════════════════════
   data.js — Catálogo completo de productos
   90+1 Fútbol Retro & New
═══════════════════════════════════════════════════════════ */

/* ── SVG jerseys inline ───────────────────────────────────
   Cada función devuelve un string SVG que simula la camiseta
   renderizada con sombras, brillos y texturas CSS/SVG.
   Se usan como imágenes en el perchero y el modal.
─────────────────────────────────────────────────────────── */

const SVG = {

  /* ── RETRO ─────────────────────────────────────────────── */

  realmadrid1998: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rm98-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#e8e8e2"/>
        <stop offset="50%" stop-color="#f5f5f0"/>
        <stop offset="100%" stop-color="#dcdcd6"/>
      </linearGradient>
      <filter id="rm98-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".35"/></filter>
    </defs>
    <!-- Body -->
    <path filter="url(#rm98-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#rm98-body)" stroke="#ccc" stroke-width="0.5"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 90 Q35 80 25 70Z" fill="#ebebE5"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 90 Q165 80 175 70Z" fill="#ebebE5"/>
    <!-- Collar V -->
    <path d="M85 60 L100 80 L115 60" fill="none" stroke="#1a1a3e" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 60 Q70 50 100 48 Q130 50 145 60" fill="none" stroke="#c8a84b" stroke-width="5" stroke-linecap="round"/>
    <!-- Adidas stripes L -->
    <line x1="60" y1="66" x2="50" y2="118" stroke="#c8a84b" stroke-width="3.5"/>
    <line x1="68" y1="63" x2="58" y2="117" stroke="#c8a84b" stroke-width="3.5"/>
    <line x1="76" y1="61" x2="66" y2="116" stroke="#c8a84b" stroke-width="3.5"/>
    <!-- Adidas stripes R -->
    <line x1="140" y1="66" x2="150" y2="118" stroke="#c8a84b" stroke-width="3.5"/>
    <line x1="132" y1="63" x2="142" y2="117" stroke="#c8a84b" stroke-width="3.5"/>
    <line x1="124" y1="61" x2="134" y2="116" stroke="#c8a84b" stroke-width="3.5"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="#1a1a3e"/>
    <text x="78" y="94" text-anchor="middle" fill="#c8a84b" font-size="7.5" font-weight="bold" font-family="Arial">RM</text>
    <!-- Sponsor -->
    <rect x="60" y="128" width="80" height="24" rx="2" fill="#1a1a3e"/>
    <text x="100" y="144" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Georgia,serif" font-style="italic">Teka</text>
    <!-- Adidas wordmark -->
    <text x="122" y="88" text-anchor="middle" fill="#888" font-size="6.5" font-family="Arial">adidas</text>
    <!-- Light sheen -->
    <path d="M72 63 Q80 70 83 125 Q75 118 72 63Z" fill="white" opacity="0.12"/>
  </svg>`,

  argentina1994: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arg-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1a5eb5"/>
        <stop offset="50%" stop-color="#1e6acc"/>
        <stop offset="100%" stop-color="#163fa0"/>
      </linearGradient>
      <pattern id="arg-dia" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <polygon points="8,0 16,8 8,16 0,8" fill="rgba(0,0,80,.18)"/>
      </pattern>
      <filter id="arg-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".4"/></filter>
    </defs>
    <!-- Body -->
    <path filter="url(#arg-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#arg-body)"/>
    <!-- Diamond pattern left panel -->
    <path d="M55 60 Q70 55 90 55 L90 230 L55 230 Q45 230 45 220 L45 115 Q35 110 25 110 L25 70 Q40 60 55 60Z" fill="url(#arg-dia)" opacity="0.8"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 90 Q35 80 25 70Z" fill="#1a5eb5"/>
    <path d="M25 70 L15 110 Q30 105 45 115 L45 90 Q35 80 25 70Z" fill="url(#arg-dia)"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 90 Q165 80 175 70Z" fill="#1a5eb5"/>
    <!-- Collar -->
    <path d="M80 62 L80 72 Q90 68 100 68 Q110 68 120 72 L120 62 Q110 56 100 54 Q90 56 80 62Z" fill="#1a5eb5" stroke="#0d3a85" stroke-width="1"/>
    <!-- Collar button -->
    <circle cx="100" cy="66" r="3" fill="#0d3a85"/>
    <line x1="100" y1="69" x2="100" y2="80" stroke="#0d3a85" stroke-width="1.5"/>
    <!-- Adidas stripes L -->
    <line x1="27" y1="72" x2="22" y2="108" stroke="white" stroke-width="3.5" opacity="0.8"/>
    <line x1="34" y1="70" x2="29" y2="106" stroke="white" stroke-width="3.5" opacity="0.8"/>
    <line x1="41" y1="69" x2="36" y2="105" stroke="white" stroke-width="3.5" opacity="0.8"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="12" fill="white" opacity="0.95"/>
    <text x="78" y="94" text-anchor="middle" fill="#1a5eb5" font-size="7" font-weight="bold" font-family="Arial">AFA</text>
    <!-- Number -->
    <text x="100" y="175" text-anchor="middle" fill="rgba(255,255,255,.18)" font-size="58" font-family="Arial" font-weight="bold">10</text>
    <!-- Sponsor -->
    <text x="100" y="130" text-anchor="middle" fill="white" font-size="8.5" font-weight="bold" font-family="Arial" letter-spacing="2">adidas</text>
    <!-- Light sheen -->
    <path d="M110 60 Q118 70 118 130 Q110 125 110 60Z" fill="white" opacity="0.08"/>
  </svg>`,

  brasil2002: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bra-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f0c000"/>
        <stop offset="50%" stop-color="#f5c800"/>
        <stop offset="100%" stop-color="#e0b000"/>
      </linearGradient>
      <filter id="bra-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".35"/></filter>
    </defs>
    <path filter="url(#bra-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#bra-body)"/>
    <!-- Accent green panels -->
    <path d="M15 85 Q28 110 45 115 L45 160 Q28 155 15 150Z" fill="#00843d" opacity="0.7"/>
    <path d="M185 85 Q172 110 155 115 L155 160 Q172 155 185 150Z" fill="#00843d" opacity="0.7"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#f0c000"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#f0c000"/>
    <!-- Collar -->
    <path d="M80 60 L85 72 Q92 70 100 70 Q108 70 115 72 L120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#00843d"/>
    <!-- Nike swoosh -->
    <path d="M120 78 Q130 74 134 78 Q128 85 118 86 Z" fill="#00843d" opacity="0.7"/>
    <!-- Crest -->
    <ellipse cx="78" cy="90" rx="12" ry="13" fill="#00843d"/>
    <text x="78" y="94" text-anchor="middle" fill="#f5c800" font-size="6.5" font-weight="bold" font-family="Arial">CBF</text>
    <!-- Stars -->
    <text x="78" y="82" text-anchor="middle" fill="#f5c800" font-size="6">★★★★★</text>
    <!-- World Cup badge -->
    <rect x="122" y="82" width="16" height="10" rx="2" fill="#00843d" opacity="0.8"/>
    <text x="130" y="90" text-anchor="middle" fill="#f5c800" font-size="4.5" font-family="Arial">2002</text>
    <!-- Number -->
    <text x="100" y="172" text-anchor="middle" fill="rgba(0,100,50,.2)" font-size="56" font-family="Arial" font-weight="bold">9</text>
    <!-- Nike -->
    <text x="100" y="128" text-anchor="middle" fill="#00843d" font-size="7.5" font-weight="bold" font-family="Arial">BRASIL</text>
    <path d="M73 134 Q82 130 86 134 Q80 141 70 142Z" fill="#00843d" opacity="0.5"/>
  </svg>`,

  manutd2007: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mu-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#b80000"/>
        <stop offset="50%" stop-color="#cc0000"/>
        <stop offset="100%" stop-color="#a00000"/>
      </linearGradient>
      <filter id="mu-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".45"/></filter>
    </defs>
    <path filter="url(#mu-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#mu-body)"/>
    <!-- Subtle texture stripes -->
    <line x1="55" y1="60" x2="55" y2="230" stroke="rgba(0,0,0,.1)" stroke-width="1"/>
    <line x1="80" y1="60" x2="80" y2="230" stroke="rgba(0,0,0,.1)" stroke-width="1"/>
    <line x1="105" y1="60" x2="105" y2="230" stroke="rgba(0,0,0,.1)" stroke-width="1"/>
    <line x1="130" y1="60" x2="130" y2="230" stroke="rgba(0,0,0,.1)" stroke-width="1"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#c00000"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#c00000"/>
    <!-- V-Collar -->
    <path d="M86 60 L100 76 L114 60" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <!-- Collar trim -->
    <path d="M55 60 Q70 52 100 50 Q130 52 145 60" fill="none" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <!-- Sleeve bands -->
    <line x1="15" y1="98" x2="45" y2="108" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="185" y1="98" x2="155" y2="108" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="rgba(0,0,0,.6)"/>
    <text x="78" y="94" text-anchor="middle" fill="#f5c842" font-size="6.5" font-weight="bold" font-family="Arial">MUFC</text>
    <!-- UCL patch -->
    <circle cx="122" cy="82" r="8" fill="rgba(0,0,80,.5)"/>
    <text x="122" y="86" text-anchor="middle" fill="white" font-size="5" font-family="Arial">UCL</text>
    <!-- Sponsor AIG -->
    <rect x="58" y="118" width="84" height="32" rx="2" fill="white"/>
    <text x="100" y="130" text-anchor="middle" fill="#003087" font-size="8.5" font-weight="bold" font-family="Arial">AIG</text>
    <text x="100" y="142" text-anchor="middle" fill="#003087" font-size="6" font-family="Arial">FINAL MOSCOW 2008</text>
    <!-- Nike swoosh -->
    <path d="M118 72 Q130 68 134 72 Q128 78 118 79Z" fill="white" opacity="0.9"/>
    <!-- Sheen -->
    <path d="M110 62 Q118 70 118 150 Q110 145 110 62Z" fill="white" opacity="0.07"/>
  </svg>`,

  acmilan1996: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="acm-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".5"/></filter>
    </defs>
    <path filter="url(#acm-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="#111"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#111"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#111"/>
    <!-- V-collar red -->
    <path d="M82 60 L100 78 L118 60" fill="none" stroke="#cc0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 60 Q70 52 100 50 Q130 52 145 60" fill="none" stroke="#cc0000" stroke-width="4" stroke-linecap="round"/>
    <!-- Red stars -->
    <text x="100" y="58" text-anchor="middle" fill="#cc0000" font-size="8">★</text>
    <!-- Crest -->
    <circle cx="78" cy="90" r="12" fill="#cc0000"/>
    <text x="78" y="95" text-anchor="middle" fill="white" font-size="7" font-weight="bold" font-family="Arial">ACM</text>
    <!-- Sponsor OPEL -->
    <rect x="55" y="118" width="90" height="35" rx="2" fill="white"/>
    <text x="100" y="128" text-anchor="middle" fill="#888" font-size="6.5" font-family="Arial">OPEL</text>
    <text x="100" y="143" text-anchor="middle" fill="#222" font-size="14" font-weight="bold" font-family="Arial">OPEL</text>
    <!-- Lotto logo area -->
    <text x="122" y="88" text-anchor="middle" fill="#cc0000" font-size="6" font-family="Arial">lotto</text>
    <!-- Sheen -->
    <path d="M110 62 Q117 70 117 150 Q110 145 110 62Z" fill="white" opacity="0.05"/>
    <!-- Red sleeve cuff lines -->
    <line x1="17" y1="104" x2="44" y2="112" stroke="#cc0000" stroke-width="2.5" opacity="0.9"/>
    <line x1="183" y1="104" x2="156" y2="112" stroke="#cc0000" stroke-width="2.5" opacity="0.9"/>
  </svg>`,

  colombia2024: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="col-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#e8b800"/>
        <stop offset="50%" stop-color="#f5c800"/>
        <stop offset="100%" stop-color="#d4a800"/>
      </linearGradient>
      <pattern id="col-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <polygon points="10,2 18,6 18,14 10,18 2,14 2,6" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="0.8"/>
      </pattern>
      <filter id="col-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".3"/></filter>
    </defs>
    <path filter="url(#col-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#col-body)"/>
    <!-- Hex texture -->
    <path d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#col-hex)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#e8b800"/>
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="url(#col-hex)"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#e8b800"/>
    <!-- Collar blue -->
    <path d="M80 60 L82 70 Q90 67 100 67 Q110 67 118 70 L120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#003da5"/>
    <path d="M80 60 Q90 55 100 54 Q110 55 120 60" fill="none" stroke="#cc0001" stroke-width="2.5"/>
    <!-- Sleeve cuffs -->
    <line x1="15" y1="96" x2="45" y2="106" stroke="#003da5" stroke-width="4"/>
    <line x1="185" y1="96" x2="155" y2="106" stroke="#003da5" stroke-width="4"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="12" fill="white" opacity="0.9"/>
    <text x="78" y="94" text-anchor="middle" fill="#003da5" font-size="6.5" font-weight="bold" font-family="Arial">FCF</text>
    <!-- Number -->
    <text x="100" y="175" text-anchor="middle" fill="rgba(0,61,165,.2)" font-size="58" font-family="Arial" font-weight="bold">10</text>
    <!-- Umbro logo -->
    <text x="122" y="88" text-anchor="middle" fill="#003da5" font-size="6.5" font-family="Arial">umbro</text>
    <!-- Sheen -->
    <path d="M72 62 Q79 70 79 130 Q72 125 72 62Z" fill="white" opacity="0.15"/>
  </svg>`,

  /* ── MODERN ─────────────────────────────────────────────── */

  barcelona2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="barca-stripe" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#A50044"/>
        <stop offset="33%"  stop-color="#A50044"/>
        <stop offset="33%"  stop-color="#004D98"/>
        <stop offset="66%"  stop-color="#004D98"/>
        <stop offset="66%"  stop-color="#A50044"/>
        <stop offset="100%" stop-color="#A50044"/>
      </linearGradient>
      <pattern id="barca-v" x="0" y="0" width="34" height="1" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="17" height="1" fill="#A50044"/>
        <rect x="17" y="0" width="17" height="1" fill="#004D98"/>
      </pattern>
      <filter id="barca-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".45"/></filter>
    </defs>
    <path filter="url(#barca-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#barca-v)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="url(#barca-v)"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="url(#barca-v)"/>
    <!-- Collar -->
    <path d="M80 60 Q90 65 100 65 Q110 65 120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#004D98"/>
    <path d="M80 60 Q90 65 100 65 Q110 65 120 60" fill="none" stroke="#A50044" stroke-width="1.5"/>
    <!-- Nike swoosh -->
    <path d="M118 72 Q130 68 134 72 Q128 78 118 79Z" fill="#f5c842" opacity="0.9"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="white" opacity="0.95"/>
    <text x="78" y="95" text-anchor="middle" fill="#004D98" font-size="6.5" font-weight="bold" font-family="Arial">FCB</text>
    <!-- Spotify sponsor -->
    <circle cx="100" cy="148" r="22" fill="#f5c842"/>
    <text x="100" y="145" text-anchor="middle" fill="#003da5" font-size="7" font-family="Arial" font-weight="bold">spotify</text>
    <circle cx="100" cy="153" r="6" fill="#003da5"/>
    <line x1="96" y1="153" x2="104" y2="153" stroke="#f5c842" stroke-width="1.2"/>
    <line x1="97" y1="150" x2="103" y2="150" stroke="#f5c842" stroke-width="1.2"/>
    <line x1="97.5" y1="156" x2="102.5" y2="156" stroke="#f5c842" stroke-width="1.2"/>
    <!-- Sheen -->
    <path d="M110 62 Q117 70 117 150 Q110 145 110 62Z" fill="white" opacity="0.07"/>
  </svg>`,

  realmadrid2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rma-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#e8e8e2"/>
        <stop offset="50%" stop-color="#f5f5f0"/>
        <stop offset="100%" stop-color="#dcdcd6"/>
      </linearGradient>
      <filter id="rma-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".3"/></filter>
    </defs>
    <path filter="url(#rma-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#rma-body)"/>
    <!-- Green trim -->
    <path d="M55 60 Q70 52 100 50 Q130 52 145 60" fill="none" stroke="#0a6630" stroke-width="4"/>
    <line x1="15" y1="96" x2="45" y2="106" stroke="#0a6630" stroke-width="3.5"/>
    <line x1="185" y1="96" x2="155" y2="106" stroke="#0a6630" stroke-width="3.5"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#e8e8e2"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#e8e8e2"/>
    <!-- Collar -->
    <path d="M80 60 Q90 66 100 66 Q110 66 120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#0a3020"/>
    <!-- Adidas 3 stripes L -->
    <line x1="60" y1="66" x2="50" y2="118" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <line x1="68" y1="63" x2="58" y2="117" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <line x1="76" y1="61" x2="66" y2="116" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <!-- Adidas 3 stripes R -->
    <line x1="140" y1="66" x2="150" y2="118" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <line x1="132" y1="63" x2="142" y2="117" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <line x1="124" y1="61" x2="134" y2="116" stroke="#0a6630" stroke-width="3" opacity="0.6"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="#0a3020"/>
    <text x="78" y="94" text-anchor="middle" fill="#c8a84b" font-size="7" font-weight="bold" font-family="Arial">RM</text>
    <!-- Emirates sponsor -->
    <rect x="55" y="120" width="90" height="30" rx="2" fill="#0a6630"/>
    <text x="100" y="130" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="Arial">Emirates</text>
    <text x="100" y="142" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial">FLY BETTER</text>
    <text x="122" y="88" text-anchor="middle" fill="#0a6630" font-size="6" font-family="Arial">adidas</text>
    <path d="M72 63 Q79 70 79 130 Q72 125 72 63Z" fill="white" opacity="0.12"/>
  </svg>`,

  atletico2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="atl-stripe" x="0" y="0" width="16" height="1" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="8" height="1" fill="#cc0000"/>
        <rect x="8" y="0" width="8" height="1" fill="white"/>
      </pattern>
      <filter id="atl-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".35"/></filter>
    </defs>
    <path filter="url(#atl-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#atl-stripe)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#cc0000"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#cc0000"/>
    <!-- Collar -->
    <path d="M80 60 Q90 66 100 66 Q110 66 120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#003da5"/>
    <path d="M80 60 Q90 66 100 66 Q110 66 120 60" fill="none" stroke="#cc0000" stroke-width="2"/>
    <!-- Nike swoosh -->
    <path d="M118 72 Q130 68 134 72 Q128 78 118 79Z" fill="white" opacity="0.9"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="white" opacity="0.95"/>
    <text x="78" y="95" text-anchor="middle" fill="#cc0000" font-size="6" font-weight="bold" font-family="Arial">ATM</text>
    <!-- Sponsor Riyadh Air -->
    <rect x="52" y="118" width="96" height="30" rx="2" fill="#003da5"/>
    <text x="100" y="130" text-anchor="middle" fill="white" font-size="8" font-family="Arial" font-weight="bold">RIYADH AIR</text>
    <circle cx="66" cy="138" r="6" fill="white" opacity="0.8"/>
    <text x="100" y="142" text-anchor="middle" fill="rgba(255,255,255,.7)" font-size="6" font-family="Arial">R</text>
    <path d="M72 63 Q79 70 79 130 Q72 125 72 63Z" fill="white" opacity="0.08"/>
  </svg>`,

  arsenal2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ars-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#d00027"/>
        <stop offset="50%" stop-color="#ee0033"/>
        <stop offset="100%" stop-color="#b80022"/>
      </linearGradient>
      <filter id="ars-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".4"/></filter>
    </defs>
    <path filter="url(#ars-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#ars-body)"/>
    <!-- White sleeves -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="white"/>
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="white"/>
    <!-- Collar red-navy -->
    <path d="M80 60 L82 70 Q90 67 100 67 Q110 67 118 70 L120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#11144d"/>
    <path d="M80 60 Q90 55 100 54 Q110 55 120 60" fill="none" stroke="#f5c842" stroke-width="2"/>
    <!-- Adidas stripes L (white) -->
    <line x1="27" y1="72" x2="22" y2="108" stroke="white" stroke-width="3.5"/>
    <line x1="34" y1="70" x2="29" y2="106" stroke="white" stroke-width="3.5"/>
    <line x1="41" y1="69" x2="36" y2="105" stroke="white" stroke-width="3.5"/>
    <!-- Adidas stripes R (white) -->
    <line x1="173" y1="72" x2="178" y2="108" stroke="white" stroke-width="3.5"/>
    <line x1="166" y1="70" x2="171" y2="106" stroke="white" stroke-width="3.5"/>
    <line x1="159" y1="69" x2="164" y2="105" stroke="white" stroke-width="3.5"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="#11144d"/>
    <text x="78" y="95" text-anchor="middle" fill="white" font-size="6.5" font-weight="bold" font-family="Arial">AFC</text>
    <!-- Sponsor Emirates -->
    <rect x="52" y="118" width="96" height="30" rx="2" fill="white"/>
    <text x="100" y="128" text-anchor="middle" fill="#cc0033" font-size="8" font-weight="bold" font-family="Arial">Emirates</text>
    <text x="100" y="141" text-anchor="middle" fill="#cc0033" font-size="6.5" font-family="Arial">FLY BETTER</text>
    <!-- Adidas wordmark -->
    <text x="122" y="88" text-anchor="middle" fill="rgba(255,255,255,.5)" font-size="6.5" font-family="Arial">adidas</text>
    <path d="M110 62 Q117 70 117 150 Q110 145 110 62Z" fill="white" opacity="0.08"/>
  </svg>`,

  mancity2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="city-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#5ac0e8"/>
        <stop offset="50%" stop-color="#6acef5"/>
        <stop offset="100%" stop-color="#4ab0d8"/>
      </linearGradient>
      <filter id="city-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".3"/></filter>
    </defs>
    <path filter="url(#city-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#city-body)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#6acef5"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#6acef5"/>
    <!-- Collar -->
    <path d="M80 60 Q90 66 100 66 Q110 66 120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#ffffff" opacity="0.9"/>
    <!-- Puma logo area -->
    <text x="122" y="88" text-anchor="middle" fill="white" font-size="6.5" font-family="Arial" opacity="0.8">PUMA</text>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="white" opacity="0.95"/>
    <text x="78" y="95" text-anchor="middle" fill="#6acef5" font-size="6" font-weight="bold" font-family="Arial">MCFC</text>
    <!-- Sponsor Etihad -->
    <rect x="52" y="118" width="96" height="30" rx="2" fill="white"/>
    <text x="100" y="128" text-anchor="middle" fill="#003da5" font-size="8.5" font-weight="bold" font-family="Arial">ETIHAD</text>
    <text x="100" y="141" text-anchor="middle" fill="#003da5" font-size="6" font-family="Arial">AIRWAYS</text>
    <path d="M72 63 Q79 70 79 130 Q72 125 72 63Z" fill="white" opacity="0.15"/>
  </svg>`,

  manutd2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mu25-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#c00000"/>
        <stop offset="50%" stop-color="#d40000"/>
        <stop offset="100%" stop-color="#aa0000"/>
      </linearGradient>
      <filter id="mu25-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".45"/></filter>
    </defs>
    <path filter="url(#mu25-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#mu25-body)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#c00000"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#c00000"/>
    <!-- Collar V white -->
    <path d="M86 60 L100 76 L114 60" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M55 60 Q70 52 100 50 Q130 52 145 60" fill="none" stroke="white" stroke-width="2" opacity="0.4"/>
    <!-- Collar trim black/white -->
    <path d="M86 60 Q93 58 100 58 Q107 58 114 60" fill="none" stroke="#111" stroke-width="1.5"/>
    <!-- Adidas stripes L -->
    <line x1="27" y1="72" x2="22" y2="108" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <line x1="34" y1="70" x2="29" y2="106" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <line x1="41" y1="69" x2="36" y2="105" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <!-- Adidas stripes R -->
    <line x1="173" y1="72" x2="178" y2="108" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <line x1="166" y1="70" x2="171" y2="106" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <line x1="159" y1="69" x2="164" y2="105" stroke="white" stroke-width="3.5" opacity="0.9"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="#f5c842"/>
    <text x="78" y="95" text-anchor="middle" fill="#c00000" font-size="6.5" font-weight="bold" font-family="Arial">MUFC</text>
    <!-- Sponsor Snapdragon -->
    <rect x="52" y="118" width="96" height="30" rx="2" fill="white"/>
    <path d="M60 128 Q68 118 78 128 Q70 142 60 128Z" fill="#cc0000" opacity="0.8"/>
    <text x="104" y="137" text-anchor="middle" fill="#cc0000" font-size="8.5" font-weight="bold" font-family="Arial">Snapdragon</text>
    <text x="122" y="88" text-anchor="middle" fill="rgba(255,255,255,.4)" font-size="6.5" font-family="Arial">adidas</text>
    <path d="M110 62 Q117 70 117 150 Q110 145 110 62Z" fill="white" opacity="0.07"/>
  </svg>`,

  inter2425home: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="inter-stripe" x="0" y="0" width="20" height="1" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="10" height="1" fill="#003da5"/>
        <rect x="10" y="0" width="10" height="1" fill="#111"/>
      </pattern>
      <filter id="inter-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".5"/></filter>
    </defs>
    <path filter="url(#inter-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#inter-stripe)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="url(#inter-stripe)"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="url(#inter-stripe)"/>
    <!-- Collar -->
    <path d="M80 60 L82 72 Q90 69 100 69 Q110 69 118 72 L120 60 Q112 54 100 52 Q88 54 80 60Z" fill="#003da5"/>
    <!-- Collar button -->
    <circle cx="100" cy="66" r="3" fill="#111"/>
    <line x1="100" y1="69" x2="100" y2="80" stroke="#111" stroke-width="1.5"/>
    <!-- Nike swoosh -->
    <path d="M118 72 Q130 68 134 72 Q128 78 118 79Z" fill="#f5c842" opacity="0.9"/>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="#f5c842"/>
    <text x="78" y="95" text-anchor="middle" fill="#003da5" font-size="6.5" font-weight="bold" font-family="Arial">IM</text>
    <!-- Stars -->
    <text x="78" y="82" text-anchor="middle" fill="#003da5" font-size="6">★★</text>
    <!-- Sponsor Betsson -->
    <rect x="52" y="118" width="96" height="32" rx="2" fill="#f5c842"/>
    <text x="100" y="130" text-anchor="middle" fill="#003da5" font-size="8" font-weight="bold" font-family="Arial">betsson</text>
    <text x="100" y="143" text-anchor="middle" fill="#003da5" font-size="6" font-family="Arial">.sport</text>
    <path d="M110 62 Q117 70 117 150 Q110 145 110 62Z" fill="white" opacity="0.06"/>
  </svg>`,

  napoli2425: () => `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nap-body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#00a0dc"/>
        <stop offset="50%" stop-color="#00b4f0"/>
        <stop offset="100%" stop-color="#0090c8"/>
      </linearGradient>
      <filter id="nap-shadow"><feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity=".35"/></filter>
    </defs>
    <path filter="url(#nap-shadow)" d="M55 60 Q40 55 25 70 L15 110 Q30 105 45 115 L45 220 Q45 230 55 230 L145 230 Q155 230 155 220 L155 115 Q170 105 185 110 L175 70 Q160 55 145 60 Q130 50 100 48 Q70 50 55 60Z" fill="url(#nap-body)"/>
    <!-- Sleeve L -->
    <path d="M25 70 L15 110 Q30 105 45 115 L45 85 Q35 77 25 70Z" fill="#00a0dc"/>
    <!-- Sleeve R -->
    <path d="M175 70 L185 110 Q170 105 155 115 L155 85 Q165 77 175 70Z" fill="#00a0dc"/>
    <!-- Collar stand-up -->
    <path d="M78 58 L78 68 Q88 65 100 65 Q112 65 122 68 L122 58 Q112 52 100 50 Q88 52 78 58Z" fill="#00a0dc" stroke="#0070a0" stroke-width="1.5"/>
    <!-- Collar trim -->
    <path d="M78 58 Q88 54 100 52 Q112 54 122 58" fill="none" stroke="#003da5" stroke-width="2"/>
    <!-- EA7 logo -->
    <text x="122" y="88" text-anchor="middle" fill="white" font-size="7" font-weight="bold" font-family="Arial" opacity="0.8">EA7</text>
    <!-- Crest -->
    <circle cx="78" cy="90" r="13" fill="white" opacity="0.95"/>
    <text x="78" y="95" text-anchor="middle" fill="#00a0dc" font-size="6.5" font-weight="bold" font-family="Arial">SSC N</text>
    <!-- Sponsor MSC -->
    <rect x="52" y="116" width="96" height="32" rx="2" fill="white"/>
    <!-- MSC star logo -->
    <circle cx="62" cy="132" r="8" fill="#00a0dc" opacity="0.3"/>
    <text x="66" y="128" text-anchor="middle" fill="#00a0dc" font-size="7">★</text>
    <text x="96" y="137" text-anchor="middle" fill="#00a0dc" font-size="11" font-weight="bold" font-family="Arial" letter-spacing="1">MSC</text>
    <path d="M72 63 Q79 70 79 130 Q72 125 72 63Z" fill="white" opacity="0.15"/>
  </svg>`,

  /* ── BOOTS ──────────────────────────────────────────────── */

  mercurialVapor17: () => `
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mv17-upper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff5500"/>
        <stop offset="60%" stop-color="#ff3300"/>
        <stop offset="100%" stop-color="#cc2200"/>
      </linearGradient>
      <linearGradient id="mv17-lower" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2244cc"/>
        <stop offset="100%" stop-color="#1133aa"/>
      </linearGradient>
      <filter id="mv17-shadow"><feDropShadow dx="3" dy="5" stdDeviation="6" flood-opacity=".45"/></filter>
    </defs>
    <!-- Sole -->
    <path d="M20 130 Q60 150 160 148 Q220 146 260 138 L260 155 Q220 165 160 163 Q60 165 20 145Z" fill="#222"/>
    <!-- Cleats -->
    <circle cx="60" cy="155" r="5" fill="#444"/>
    <circle cx="90" cy="158" r="5" fill="#444"/>
    <circle cx="130" cy="160" r="4" fill="#444"/>
    <circle cx="170" cy="158" r="4" fill="#444"/>
    <circle cx="210" cy="154" r="4" fill="#444"/>
    <circle cx="245" cy="148" r="3.5" fill="#444"/>
    <circle cx="50" cy="148" r="4" fill="#444"/>
    <circle cx="75" cy="152" r="4" fill="#444"/>
    <!-- Upper body -->
    <path filter="url(#mv17-shadow)" d="M20 130 Q30 80 60 55 Q90 35 130 30 Q170 28 200 42 Q230 55 250 80 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="url(#mv17-upper)"/>
    <!-- Blue mid section -->
    <path d="M20 130 Q30 100 60 85 Q90 72 130 70 Q160 70 185 80 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="url(#mv17-lower)" opacity="0.7"/>
    <!-- Heel -->
    <path d="M20 130 Q15 110 18 90 Q22 70 35 60 Q50 45 60 55 Q40 70 30 100 Q25 115 20 130Z" fill="#cc2200"/>
    <!-- Nike swoosh -->
    <path d="M80 85 Q130 60 170 72 Q150 85 110 88 Q90 90 80 85Z" fill="rgba(255,255,255,.25)"/>
    <!-- Lace -->
    <path d="M100 35 Q130 32 160 35" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2"/>
    <line x1="105" y1="40" x2="155" y2="38" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
    <!-- Highlight -->
    <path d="M100 35 Q130 32 160 50 Q145 55 100 50 Q85 46 100 35Z" fill="rgba(255,255,255,.12)"/>
  </svg>`,

  mercurialVapor16: () => `
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mv16-upper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#aae0f8"/>
        <stop offset="60%" stop-color="#88c8f0"/>
        <stop offset="100%" stop-color="#66b0e0"/>
      </linearGradient>
      <linearGradient id="mv16-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#5588cc"/>
        <stop offset="100%" stop-color="#3366aa"/>
      </linearGradient>
      <filter id="mv16-shadow"><feDropShadow dx="3" dy="5" stdDeviation="6" flood-opacity=".35"/></filter>
    </defs>
    <!-- Sole -->
    <path d="M20 130 Q60 150 160 148 Q220 146 260 138 L260 155 Q220 165 160 163 Q60 165 20 145Z" fill="#fff" opacity="0.9"/>
    <!-- Cleats -->
    <circle cx="60" cy="155" r="5" fill="#aae0f8"/>
    <circle cx="90" cy="158" r="5" fill="#aae0f8"/>
    <circle cx="130" cy="160" r="4" fill="#aae0f8"/>
    <circle cx="170" cy="158" r="4" fill="#aae0f8"/>
    <circle cx="210" cy="154" r="4" fill="#aae0f8"/>
    <circle cx="245" cy="148" r="3.5" fill="#aae0f8"/>
    <!-- Upper -->
    <path filter="url(#mv16-shadow)" d="M20 130 Q30 80 60 55 Q90 35 130 30 Q170 28 200 42 Q230 55 250 80 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="url(#mv16-upper)"/>
    <!-- Blue accent stripe -->
    <path d="M60 55 Q90 35 130 30 Q170 28 200 42 L200 55 Q170 42 130 44 Q90 48 60 68Z" fill="url(#mv16-accent)" opacity="0.6"/>
    <!-- AIR text -->
    <text x="130" y="110" text-anchor="middle" fill="rgba(255,255,255,.2)" font-size="22" font-weight="bold" font-family="Arial">AIR</text>
    <!-- Nike swoosh -->
    <path d="M80 90 Q130 65 170 78 Q150 90 110 93 Q90 95 80 90Z" fill="rgba(255,255,255,.35)"/>
    <!-- Lace -->
    <path d="M100 35 Q130 32 160 35" fill="none" stroke="rgba(80,120,180,.5)" stroke-width="2"/>
    <line x1="105" y1="41" x2="155" y2="39" stroke="rgba(80,120,180,.3)" stroke-width="1.5"/>
    <!-- Highlight -->
    <path d="M100 35 Q130 32 160 50 Q145 55 100 50 Q85 46 100 35Z" fill="rgba(255,255,255,.18)"/>
  </svg>`,

  adidasF50: () => `
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="f50-upper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2288ee"/>
        <stop offset="60%" stop-color="#1166cc"/>
        <stop offset="100%" stop-color="#0044aa"/>
      </linearGradient>
      <filter id="f50-shadow"><feDropShadow dx="3" dy="5" stdDeviation="6" flood-opacity=".4"/></filter>
    </defs>
    <!-- Sole -->
    <path d="M20 130 Q60 150 160 148 Q220 146 260 138 L260 155 Q220 165 160 163 Q60 165 20 145Z" fill="#222"/>
    <!-- Cleats (teal) -->
    <circle cx="60" cy="155" r="5" fill="#00dd88"/>
    <circle cx="90" cy="158" r="5" fill="#00dd88"/>
    <circle cx="130" cy="160" r="4" fill="#00dd88"/>
    <circle cx="170" cy="158" r="4" fill="#00dd88"/>
    <circle cx="210" cy="154" r="4" fill="#00dd88"/>
    <circle cx="245" cy="148" r="3.5" fill="#00dd88"/>
    <circle cx="50" cy="148" r="4" fill="#00dd88"/>
    <!-- Upper -->
    <path filter="url(#f50-shadow)" d="M20 130 Q30 80 60 55 Q90 35 130 30 Q170 28 200 42 Q230 55 250 80 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="url(#f50-upper)"/>
    <!-- Teal accent bottom -->
    <path d="M20 130 Q30 110 60 100 Q100 90 140 92 Q180 94 220 108 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="#00dd88" opacity="0.3"/>
    <!-- Adidas 3 stripes -->
    <line x1="150" y1="45" x2="210" y2="85" stroke="rgba(255,255,255,.35)" stroke-width="8" stroke-linecap="round"/>
    <line x1="162" y1="42" x2="222" y2="82" stroke="rgba(255,255,255,.35)" stroke-width="8" stroke-linecap="round"/>
    <line x1="174" y1="40" x2="234" y2="80" stroke="rgba(255,255,255,.35)" stroke-width="8" stroke-linecap="round"/>
    <!-- F50 text -->
    <text x="90" y="100" text-anchor="middle" fill="rgba(255,255,255,.2)" font-size="26" font-weight="bold" font-family="Arial">F50</text>
    <!-- Lace -->
    <path d="M100 35 Q130 32 160 35" fill="none" stroke="rgba(0,220,136,.5)" stroke-width="2"/>
    <!-- Highlight -->
    <path d="M80 40 Q110 32 140 45 Q125 55 80 52 Q68 48 80 40Z" fill="rgba(255,255,255,.12)"/>
  </svg>`,

  tiempoRonaldinho: () => `
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tiempo-upper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0ede0"/>
        <stop offset="50%" stop-color="#e8e4d0"/>
        <stop offset="100%" stop-color="#d8d4c0"/>
      </linearGradient>
      <filter id="tiempo-shadow"><feDropShadow dx="3" dy="5" stdDeviation="6" flood-opacity=".3"/></filter>
    </defs>
    <!-- Sole -->
    <path d="M20 130 Q60 150 160 148 Q220 146 260 138 L260 155 Q220 165 160 163 Q60 165 20 145Z" fill="#222"/>
    <!-- Cleats -->
    <circle cx="60" cy="155" r="5" fill="#444"/>
    <circle cx="90" cy="158" r="5" fill="#444"/>
    <circle cx="130" cy="160" r="4" fill="#444"/>
    <circle cx="170" cy="158" r="4" fill="#444"/>
    <circle cx="210" cy="154" r="4" fill="#444"/>
    <circle cx="245" cy="148" r="3.5" fill="#444"/>
    <!-- Upper leather -->
    <path filter="url(#tiempo-shadow)" d="M20 130 Q30 80 60 55 Q90 35 130 30 Q170 28 200 42 Q230 55 250 80 L260 138 Q220 148 160 148 Q60 150 20 130Z" fill="url(#tiempo-upper)"/>
    <!-- Leather texture seam lines -->
    <path d="M60 80 Q90 65 130 62 Q165 62 195 72" fill="none" stroke="rgba(0,0,0,.1)" stroke-width="1.5"/>
    <path d="M50 100 Q80 88 130 86 Q165 86 200 95" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="1"/>
    <!-- Nike Tiempo swoosh (green) -->
    <path d="M80 90 Q130 65 170 78 Q150 90 110 93 Q90 95 80 90Z" fill="rgba(0,120,60,.3)"/>
    <!-- Green sole edge -->
    <path d="M20 130 Q60 150 160 148 Q220 146 260 138 L260 145 Q220 152 160 154 Q60 156 20 136Z" fill="#00843d" opacity="0.6"/>
    <!-- Lace -->
    <path d="M100 35 Q130 32 160 35" fill="none" stroke="rgba(0,0,0,.2)" stroke-width="2"/>
    <line x1="105" y1="40" x2="155" y2="38" stroke="rgba(0,0,0,.12)" stroke-width="1.5"/>
    <!-- Highlight -->
    <path d="M100 35 Q130 32 155 48 Q140 55 100 50 Q85 46 100 35Z" fill="rgba(255,255,255,.18)"/>
  </svg>`
};

/* ═══════════════════════════════════════════════════════════
   PRODUCTS CATALOG
═══════════════════════════════════════════════════════════ */
const PRODUCTS = {

  retro: [
    {
      id: 'retro-rm-1998',
      tab: 'retro',
      team: 'Real Madrid',
      year: '1997–98',
      name: 'Real Madrid Retro 1997-98',
      brand: 'Adidas',
      badge: 'Retro',
      price: 189900,
      priceLabel: '$189.900 COP',
      desc: 'La temporada del doblete histórico. Réplica oficial de la temporada 1997-98 en la que el Real Madrid conquistó la Champions League bajo las órdenes de Jupp Heynckes. Tejido 100% poliéster, escudo bordado y parche de Champions en el manga izquierdo.',
      meta: ['Adidas', '1997-98', 'Champions League', 'Retro Premium'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.realmadrid1998
    },
    {
      id: 'retro-arg-1994',
      tab: 'retro',
      team: 'Argentina',
      year: '1994',
      name: 'Argentina Away USA 94',
      brand: 'Adidas',
      badge: 'Retro',
      price: 174900,
      priceLabel: '$174.900 COP',
      desc: 'La recordada camiseta albiceleste alternante del Mundial USA 94. Diseño oscuro con rombos característicos, número 10 de Maradona y el escudo de la AFA bordado. Una pieza de colección que marcó historia.',
      meta: ['Adidas', 'USA 94', 'Mundial', 'Colección'],
      sizes: ['S', 'M', 'L', 'XL'],
      svg: SVG.argentina1994
    },
    {
      id: 'retro-bra-2002',
      tab: 'retro',
      team: 'Brasil',
      year: '2002',
      name: 'Brasil Copa del Mundo 2002',
      brand: 'Nike',
      badge: 'Retro',
      price: 184900,
      priceLabel: '$184.900 COP',
      desc: 'La quinta estrella. La camiseta que vistió a Ronaldo, Ronaldinho y Rivaldo en Corea/Japón 2002. Réplica con tejido Dri-FIT, insignia del Mundial y número 9 del Fenómeno. La selección más ganadora de la historia.',
      meta: ['Nike', 'Corea/Japón 2002', '5 Estrellas', 'Dri-FIT'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.brasil2002
    },
    {
      id: 'retro-mu-2007',
      tab: 'retro',
      team: 'Man United',
      year: '2007-08',
      name: 'Manchester United Final Moscú',
      brand: 'Nike',
      badge: 'Edición Especial',
      price: 219900,
      priceLabel: '$219.900 COP',
      desc: 'La edición especial de la Final de la UEFA Champions League 2007-08 en el Luzhniki de Moscú. Con el parche de la Final bordado y sponsor AIG. La noche en que Cristiano Ronaldo, Rooney y Scholes fueron inmortales.',
      meta: ['Nike', 'Final UCL 2008', 'Moscú', 'Edición Limitada'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      svg: SVG.manutd2007
    },
    {
      id: 'retro-acm-1996',
      tab: 'retro',
      team: 'AC Milan',
      year: '1996-97',
      name: 'AC Milan Away 1996-97',
      brand: 'Lotto',
      badge: 'Retro',
      price: 169900,
      priceLabel: '$169.900 COP',
      desc: 'El negro y rojo más icónico del Calcio. Sponsor OPEL en blanco sobre fondo negro total. La era de Maldini, Baresi y Boban bajo el mando de Sacchi. Tejido clásico de poliéster brillante, parche de Lotterie en el cuello.',
      meta: ['Lotto', '1996-97', 'Serie A', 'Calcio Retro'],
      sizes: ['S', 'M', 'L', 'XL'],
      svg: SVG.acmilan1996
    },
    {
      id: 'retro-col-2024',
      tab: 'retro',
      team: 'Colombia',
      year: '2024',
      name: 'Colombia Home 2024 — #10',
      brand: 'Umbro',
      badge: 'Selección',
      price: 199900,
      priceLabel: '$199.900 COP',
      desc: 'La tricolor en su versión 2024 con el dorsal 10 de James Rodríguez. Tejido ligero con hexágonos en relieve, cuello azul con detalle rojo y el escudo de la FCF. La camisa que llevó a Colombia a las semifinales de la Copa América.',
      meta: ['Umbro', 'Copa América 2024', 'James #10', 'Selección Colombia'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.colombia2024
    },
  ],

  modern: [
    {
      id: 'modern-barca-2425',
      tab: 'modern',
      team: 'Barcelona',
      year: '2024-25',
      name: 'FC Barcelona Home 2024-25',
      brand: 'Nike',
      badge: 'Temporada Actual',
      price: 329900,
      priceLabel: '$329.900 COP',
      desc: 'El Clásico en franjas. La camiseta local 2024-25 del FC Barcelona con el diseño vertical blaugrana y sponsor Spotify. Tecnología Dri-FIT ADV, tejido reciclado y escudo bordado. Para los que llevan el Barça en la sangre.',
      meta: ['Nike', '2024-25', 'La Liga', 'Dri-FIT ADV'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.barcelona2425home
    },
    {
      id: 'modern-rma-2425',
      tab: 'modern',
      team: 'Real Madrid',
      year: '2024-25',
      name: 'Real Madrid Home 2024-25',
      brand: 'Adidas',
      badge: 'Temporada Actual',
      price: 319900,
      priceLabel: '$319.900 COP',
      desc: 'El blanco eterno con acento verde de la temporada 2024-25. Tejido AEROREADY de Adidas, escudo bordado y sponsor Emirates. La camiseta de Vinicius, Bellingham y Mbappé en su primera temporada juntos.',
      meta: ['Adidas', '2024-25', 'La Liga', 'AEROREADY'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.realmadrid2425home
    },
    {
      id: 'modern-atm-2425',
      tab: 'modern',
      team: 'Atlético Madrid',
      year: '2024-25',
      name: 'Atlético de Madrid Home 2024-25',
      brand: 'Nike',
      badge: 'Temporada Actual',
      price: 309900,
      priceLabel: '$309.900 COP',
      desc: 'Las rayas rojas y blancas del Atleti para la temporada 2024-25. Sponsor Riyadh Air y sponsor técnico Nike. La camiseta del equipo de Simeone, Griezmann y Llorente.',
      meta: ['Nike', '2024-25', 'La Liga', 'Colchonero'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.atletico2425home
    },
    {
      id: 'modern-ars-2425',
      tab: 'modern',
      team: 'Arsenal',
      year: '2024-25',
      name: 'Arsenal Home 2024-25',
      brand: 'Adidas',
      badge: 'Temporada Actual',
      price: 299900,
      priceLabel: '$299.900 COP',
      desc: 'El rojo de los Gunners en su versión más limpia. Mangas blancas, cuello azul marino y sponsor Emirates. Adidas Original con las tres rayas en mangas. La camiseta de Saka, Martinelli y Rice en su lucha por la Premier League.',
      meta: ['Adidas', '2024-25', 'Premier League', 'Gunners'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.arsenal2425home
    },
    {
      id: 'modern-mci-2425',
      tab: 'modern',
      team: 'Manchester City',
      year: '2024-25',
      name: 'Manchester City Home 2024-25',
      brand: 'Puma',
      badge: 'Temporada Actual',
      price: 289900,
      priceLabel: '$289.900 COP',
      desc: 'El celeste Etihad de los Citizens en la temporada en la que intentan el quinto consecutive. Puma con tecnología Dry Cell, sponsor Etihad Airways y escudo bordado. Haaland, De Bruyne y compañía.',
      meta: ['Puma', '2024-25', 'Premier League', 'Citizens'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.mancity2425home
    },
    {
      id: 'modern-mnu-2425',
      tab: 'modern',
      team: 'Manchester United',
      year: '2024-25',
      name: 'Manchester United Home 2024-25',
      brand: 'Adidas',
      badge: 'Temporada Actual',
      price: 299900,
      priceLabel: '$299.900 COP',
      desc: 'El rojo del Teatro de los Sueños con Adidas en la temporada de la reconstrucción. Sponsor Snapdragon, escudo dorado y los tres Trefoil stripes en las mangas. La camiseta de la nueva era del Manchester United.',
      meta: ['Adidas', '2024-25', 'Premier League', 'Red Devils'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.manutd2425home
    },
    {
      id: 'modern-int-2425',
      tab: 'modern',
      team: 'Inter Milan',
      year: '2024-25',
      name: 'Inter Milan Home 2024-25',
      brand: 'Nike',
      badge: 'Temporada Actual',
      price: 309900,
      priceLabel: '$309.900 COP',
      desc: 'Las rayas verticales nerazzurri en su versión más moderna. Sponsor Betsson, collar tipo polo con botón y el escudo IM con dos estrellas. Lautaro Martínez, Barella y Calhanoglu en la camiseta del campeón de Italia.',
      meta: ['Nike', '2024-25', 'Serie A', 'Nerazzurri'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      svg: SVG.inter2425home
    },
    {
      id: 'modern-nap-2425',
      tab: 'modern',
      team: 'Napoli',
      year: '2024-25',
      name: 'SSC Napoli Home 2024-25',
      brand: 'EA7',
      badge: 'Temporada Actual',
      price: 279900,
      priceLabel: '$279.900 COP',
      desc: 'El azzurro partenopeo en la temporada del regreso. EA7 Emporio Armani como sponsor técnico y MSC como sponsor principal. La edición del centenario incluye detalles dorados en el escudo y cuello.',
      meta: ['EA7', '2024-25', 'Serie A', 'Azzurri Partenopei'],
      sizes: ['S', 'M', 'L', 'XL'],
      svg: SVG.napoli2425
    },
  ],

  boots: [
    {
      id: 'boot-mv17',
      tab: 'boots',
      name: 'Nike Mercurial Vapor 17 Elite FG',
      brand: 'Nike',
      badge: 'Nuevo',
      price: 589900,
      priceLabel: '$589.900 COP',
      desc: 'El guayo más rápido de Nike en su versión 2024. Upper Flyknit ultra-delgado, suela Carbon Fiber para máxima propulsión y tacos AG híbridos. Para canchas naturales e híbridas.',
      meta: ['Nike', 'FG/AG', 'Elite', 'Flyknit', 'Carbon Plate'],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      svg: SVG.mercurialVapor17
    },
    {
      id: 'boot-mv16',
      tab: 'boots',
      name: 'Nike Mercurial Vapor 16 Elite FG',
      brand: 'Nike',
      badge: 'Nuevo',
      price: 529900,
      priceLabel: '$529.900 COP',
      desc: 'El Vapor 16 en colorway Air Max. Upper sintético ultraligero con textura ACC (All Conditions Control), suela de fibra de carbono y sistema de amarre asimétrico. Velocidad pura.',
      meta: ['Nike', 'FG', 'Elite', 'ACC', 'Air Max Edition'],
      sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
      svg: SVG.mercurialVapor16
    },
    {
      id: 'boot-f50',
      tab: 'boots',
      name: 'Adidas F50+ Tubular Sparkfusion',
      brand: 'Adidas',
      badge: 'Nuevo',
      price: 549900,
      priceLabel: '$549.900 COP',
      desc: 'El regreso del legendario F50 con tecnología Tubular. Upper Primeknit con refuerzo lateral, mediasuela con amortiguación Boost y suela exterior con tacos AG especializados. Azul y verde lima para destacar en cada regate.',
      meta: ['Adidas', 'FG/AG', 'Primeknit', 'Tubular', 'Boost'],
      sizes: ['38', '39', '40', '41', '42', '43', '44'],
      svg: SVG.adidasF50
    },
    {
      id: 'boot-tiempo',
      tab: 'boots',
      name: 'Nike Tiempo Legend — Ronaldinho Elite',
      brand: 'Nike',
      badge: 'Edición Especial',
      price: 619900,
      priceLabel: '$619.900 COP',
      desc: 'Homenaje al mejor jugador del mundo 2004-2005. Upper de cuero Kangaroo auténtico con refuerzo ACC, suela Veer con tacos cónicos para giros de 360°. Colorway crema con detalles verde Ronaldinho.',
      meta: ['Nike', 'FG', 'Legend', 'Cuero Canguro', 'Ronaldinho'],
      sizes: ['39', '40', '41', '42', '43', '44'],
      svg: SVG.tiempoRonaldinho
    },
  ]
};

// Flatten all products to a lookup map
const ALL_PRODUCTS = {};
Object.values(PRODUCTS).flat().forEach(p => { ALL_PRODUCTS[p.id] = p; });

// Format price to COP string
function formatPrice(n) {
  return '$' + n.toLocaleString('es-CO') + ' COP';
}
