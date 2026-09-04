(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 610" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Lotus and the client work through Discover, Design, Build, Validate, and Launch. Each of the first four stages ends at a Client Approves decision gate. Yes moves the project forward. No follows a routed revision path back to the Lotus work for that stage.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="team-label lotus" x="28" y="120">LOTUS TEAM</text>
    <text class="team-label client" x="28" y="280">CLIENT TEAM</text>
    <text class="gate-note" x="28" y="421">APPROVAL GATES</text>

    <!-- Revision routes are intentionally drawn first so cards sit above them. -->
    <g class="revision-layer">
      <path class="return-path" d="M368 458V520Q368 534 354 534H240Q226 534 226 520V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="242" y="555">NO — REFINE REQUIREMENTS / SCOPE</text>

      <path class="return-path" d="M623 458V512Q623 526 609 526H495Q481 526 481 512V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="502" y="547">NO — REVISE DESIGN</text>

      <path class="return-path" d="M878 458V504Q878 518 864 518H750Q736 518 736 504V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="758" y="539">NO — REFINE BUILD</text>

      <path class="return-path" d="M1133 458V496Q1133 510 1119 510H1005Q991 510 991 496V183" marker-end="url(#af-gold)"/>
      <text class="return-label" x="1014" y="531">NO — FIX + RETEST</text>
    </g>

    <!-- YES routes: approval is the only path forward. -->
    <g class="forward-layer">
      <path class="main-path" d="M368 382V139H405" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="378" y="371">YES</text>
      <path class="main-path" d="M623 382V139H660" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="633" y="371">YES</text>
      <path class="main-path" d="M878 382V139H915" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="888" y="371">YES</text>
      <path class="main-path" d="M1133 382V139H1170" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="1143" y="371">YES</text>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="150" y="70">01</text><text class="stage-name" x="186" y="70">DISCOVER</text>
      <rect class="lotus-card" x="150" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="168" y="128">Understand</text><text class="card-sub" x="168" y="151">requirements + goals</text>
      <rect class="client-card" x="150" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="168" y="288">Align</text><text class="card-sub" x="168" y="311">scope + roadmap</text>
      <path class="client-path" d="M330 299H368V382"/>
      <polygon class="decision" points="368,382 404,420 368,458 332,420"/>
      <text class="decision-text" x="368" y="416">CLIENT</text><text class="decision-text" x="368" y="429">APPROVES?</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="405" y="70">02</text><text class="stage-name" x="441" y="70">DESIGN</text>
      <rect class="lotus-card" x="405" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="423" y="128">Design</text><text class="card-sub" x="423" y="151">solution + architecture</text>
      <rect class="client-card" x="405" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="423" y="288">Review</text><text class="card-sub" x="423" y="311">mockups + workflow</text>
      <path class="client-path" d="M585 299H623V382"/>
      <polygon class="decision" points="623,382 659,420 623,458 587,420"/>
      <text class="decision-text" x="623" y="416">CLIENT</text><text class="decision-text" x="623" y="429">APPROVES?</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="660" y="70">03</text><text class="stage-name" x="696" y="70">BUILD</text>
      <rect class="lotus-card" x="660" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="678" y="128">Build</text><text class="card-sub" x="678" y="151">code + internal QA</text>
      <rect class="client-card" x="660" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="678" y="288">Review</text><text class="card-sub" x="678" y="311">working progress</text>
      <path class="client-path" d="M840 299H878V382"/>
      <polygon class="decision" points="878,382 914,420 878,458 842,420"/>
      <text class="decision-text" x="878" y="416">CLIENT</text><text class="decision-text" x="878" y="429">APPROVES?</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="915" y="70">04</text><text class="stage-name" x="951" y="70">VALIDATE</text>
      <rect class="lotus-card" x="915" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="933" y="128">Refine</text><text class="card-sub" x="933" y="151">fix + retest</text>
      <rect class="client-card" x="915" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="933" y="288">Test</text><text class="card-sub" x="933" y="311">validate real workflow</text>
      <path class="client-path" d="M1095 299H1133V382"/>
      <polygon class="decision" points="1133,382 1169,420 1133,458 1097,420"/>
      <text class="decision-text" x="1133" y="416">CLIENT</text><text class="decision-text" x="1133" y="429">APPROVES?</text>
    </g>

    <!-- Stage 5: launch follows final approval -->
    <g>
      <text class="stage-num" x="1170" y="70">05</text><text class="stage-name" x="1206" y="70">LAUNCH</text>
      <rect class="lotus-card" x="1170" y="95" width="160" height="88" rx="18"/>
      <text class="card-title" x="1188" y="128">Deploy</text><text class="card-sub" x="1188" y="151">train + support</text>
      <rect class="client-card" x="1170" y="255" width="160" height="88" rx="18"/>
      <text class="card-title client" x="1188" y="288">Adopt</text><text class="card-sub" x="1188" y="311">measure + improve</text>
    </g>

    <text class="gate-note emphasis" x="150" y="585">FORWARD PROGRESS IS EARNED — YES MOVES FORWARD. NO RETURNS THE WORK FOR REVISION.</text>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
