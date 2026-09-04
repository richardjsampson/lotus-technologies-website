(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 650" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Lotus and the client work through Discover, Design, Build, Validate, and Launch. At each major review gate the client approves before the project moves forward. A No decision follows a routed return path back to the work that needs revision.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="team-label lotus" x="26" y="120">LOTUS TEAM</text>
    <text class="team-label client" x="26" y="290">CLIENT TEAM</text>
    <text class="gate-note" x="26" y="443">APPROVAL GATES</text>

    <!-- Stage 1 -->
    <g transform="translate(145 0)">
      <text class="stage-num" x="0" y="70">01</text><text class="stage-name" x="36" y="70">DISCOVER</text>
      <rect class="lotus-card" x="0" y="95" width="185" height="88" rx="18"/>
      <text class="card-title" x="18" y="128">Understand</text><text class="card-sub" x="18" y="151">requirements + goals</text>
      <rect class="client-card" x="0" y="255" width="185" height="88" rx="18"/>
      <text class="card-title client" x="18" y="288">Align</text><text class="card-sub" x="18" y="311">scope + roadmap</text>
      <path class="handoff-path" d="M92 183V255"/>
      <path class="client-path" d="M185 299H212V390"/>
      <polygon class="decision" points="212,390 247,425 212,460 177,425"/>
      <text class="decision-text" x="212" y="421">CLIENT</text><text class="decision-text" x="212" y="433">APPROVES?</text>
      <text class="yes-label" x="250" y="414">YES</text>
      <path class="main-path" d="M247 425H270V139H315" marker-end="url(#af-blue)"/>
      <text class="no-label" x="175" y="474">NO</text>
      <path class="return-path" d="M177 425H125Q112 425 112 438V548Q112 562 126 562H68Q52 562 52 546V139Q52 125 66 125H0" marker-end="url(#af-gold)"/>
      <text class="return-label" x="66" y="584">REFINE REQUIREMENTS / SCOPE</text>
    </g>

    <!-- Stage 2 -->
    <g transform="translate(405 0)">
      <text class="stage-num" x="0" y="70">02</text><text class="stage-name" x="36" y="70">DESIGN</text>
      <rect class="lotus-card" x="0" y="95" width="185" height="88" rx="18"/>
      <text class="card-title" x="18" y="128">Design</text><text class="card-sub" x="18" y="151">solution + architecture</text>
      <rect class="client-card" x="0" y="255" width="185" height="88" rx="18"/>
      <text class="card-title client" x="18" y="288">Review</text><text class="card-sub" x="18" y="311">mockups + workflow</text>
      <path class="handoff-path" d="M92 183V255"/>
      <path class="client-path" d="M185 299H212V390"/>
      <polygon class="decision" points="212,390 247,425 212,460 177,425"/>
      <text class="decision-text" x="212" y="421">CLIENT</text><text class="decision-text" x="212" y="433">APPROVES?</text>
      <text class="yes-label" x="250" y="414">YES</text>
      <path class="main-path" d="M247 425H270V139H315" marker-end="url(#af-blue)"/>
      <text class="no-label" x="175" y="474">NO</text>
      <path class="return-path" d="M177 425H145Q132 425 132 438V520Q132 534 118 534H62Q48 534 48 520V205Q48 191 62 191H92V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="60" y="555">REVISE DESIGN</text>
    </g>

    <!-- Stage 3 -->
    <g transform="translate(665 0)">
      <text class="stage-num" x="0" y="70">03</text><text class="stage-name" x="36" y="70">BUILD</text>
      <rect class="lotus-card" x="0" y="95" width="185" height="88" rx="18"/>
      <text class="card-title" x="18" y="128">Build</text><text class="card-sub" x="18" y="151">code + internal QA</text>
      <rect class="client-card" x="0" y="255" width="185" height="88" rx="18"/>
      <text class="card-title client" x="18" y="288">Review</text><text class="card-sub" x="18" y="311">working progress</text>
      <path class="handoff-path" d="M92 183V255"/>
      <path class="client-path" d="M185 299H212V390"/>
      <polygon class="decision" points="212,390 247,425 212,460 177,425"/>
      <text class="decision-text" x="212" y="421">CLIENT</text><text class="decision-text" x="212" y="433">APPROVES?</text>
      <text class="yes-label" x="250" y="414">YES</text>
      <path class="main-path" d="M247 425H270V139H315" marker-end="url(#af-blue)"/>
      <text class="no-label" x="175" y="474">NO</text>
      <path class="return-path" d="M177 425H145Q132 425 132 438V500Q132 514 118 514H62Q48 514 48 500V205Q48 191 62 191H92V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="60" y="535">REFINE BUILD</text>
    </g>

    <!-- Stage 4 -->
    <g transform="translate(925 0)">
      <text class="stage-num" x="0" y="70">04</text><text class="stage-name" x="36" y="70">VALIDATE</text>
      <rect class="lotus-card" x="0" y="95" width="185" height="88" rx="18"/>
      <text class="card-title" x="18" y="128">Refine</text><text class="card-sub" x="18" y="151">fix + retest</text>
      <rect class="client-card" x="0" y="255" width="185" height="88" rx="18"/>
      <text class="card-title client" x="18" y="288">Test</text><text class="card-sub" x="18" y="311">validate real workflow</text>
      <path class="handoff-path" d="M92 183V255"/>
      <path class="client-path" d="M185 299H212V390"/>
      <polygon class="decision" points="212,390 247,425 212,460 177,425"/>
      <text class="decision-text" x="212" y="421">CLIENT</text><text class="decision-text" x="212" y="433">APPROVES?</text>
      <text class="yes-label" x="250" y="414">YES</text>
      <path class="main-path" d="M247 425H275V139H330" marker-end="url(#af-blue)"/>
      <text class="no-label" x="175" y="474">NO</text>
      <path class="return-path" d="M177 425H145Q132 425 132 438V480Q132 494 118 494H62Q48 494 48 480V205Q48 191 62 191H92V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="60" y="515">FIX + RETEST</text>
    </g>

    <!-- Launch -->
    <g transform="translate(1195 0)">
      <text class="stage-num" x="0" y="70">05</text><text class="stage-name" x="36" y="70">LAUNCH</text>
      <rect class="launch-card" x="0" y="95" width="140" height="248" rx="22"/>
      <circle class="launch-accent" cx="70" cy="145" r="8"/>
      <text class="card-title" x="20" y="190">Deploy</text><text class="card-sub" x="20" y="213">train + support</text>
      <path class="handoff-path" d="M70 228V270"/>
      <text class="card-title client" x="20" y="303">Adopt</text><text class="card-sub" x="20" y="326">measure + improve</text>
    </g>

    <text class="gate-note" x="145" y="625">FORWARD PROGRESS IS EARNED: EACH GATE MOVES FORWARD ONLY AFTER CLIENT APPROVAL.</text>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
