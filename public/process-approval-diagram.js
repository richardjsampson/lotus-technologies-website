(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 560" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Lotus and the client work through Discover, Design, Build, Validate, and Launch. After each client review, an approval stop controls forward movement. Yes advances the project. No sends the work back for revision.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="team-label lotus" x="28" y="120">LOTUS TEAM</text>
    <text class="team-label client" x="28" y="300">CLIENT TEAM</text>

    <!-- NO routes are drawn first so they sit behind the cards and gates. -->
    <g class="revision-layer">
      <path class="return-path" d="M383 333V454Q383 470 367 470H238Q222 470 222 454V183" marker-end="url(#af-gold)"/>
      <text class="no-label" x="367" y="361">NO</text>
      <text class="return-label" x="244" y="493">REFINE REQUIREMENTS / SCOPE</text>

      <path class="return-path" d="M638 333V438Q638 454 622 454H493Q477 454 477 438V183" marker-end="url(#af-gold)"/>
      <text class="no-label" x="622" y="361">NO</text>
      <text class="return-label" x="507" y="477">REVISE DESIGN</text>

      <path class="return-path" d="M893 333V422Q893 438 877 438H748Q732 438 732 422V183" marker-end="url(#af-gold)"/>
      <text class="no-label" x="877" y="361">NO</text>
      <text class="return-label" x="761" y="461">REFINE BUILD</text>

      <path class="return-path" d="M1148 333V406Q1148 422 1132 422H1003Q987 422 987 406V183" marker-end="url(#af-gold)"/>
      <text class="no-label" x="1132" y="361">NO</text>
      <text class="return-label" x="1015" y="445">FIX + RETEST</text>
    </g>

    <!-- Forward paths: YES is the only route into the next Lotus stage. -->
    <g class="forward-layer">
      <path class="main-path" d="M425 299H447V139H472" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="432" y="288">YES</text>
      <path class="main-path" d="M680 299H702V139H727" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="687" y="288">YES</text>
      <path class="main-path" d="M935 299H957V139H982" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="942" y="288">YES</text>
      <path class="main-path" d="M1190 299H1212V139H1237" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="1197" y="288">YES</text>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="150" y="70">01</text><text class="stage-name" x="186" y="70">DISCOVER</text>
      <rect class="lotus-card" x="150" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="168" y="128">Understand</text><text class="card-sub" x="168" y="151">requirements + goals</text>
      <rect class="client-card" x="150" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="168" y="288">Align</text><text class="card-sub" x="168" y="311">scope + roadmap</text>
      <path class="client-path" d="M330 299H341"/>
      <polygon class="decision octagon" points="350,255 416,255 425,264 425,334 416,343 350,343 341,334 341,264"/>
      <text class="decision-text" x="383" y="294">CLIENT</text><text class="decision-text" x="383" y="310">APPROVES?</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="472" y="70">02</text><text class="stage-name" x="508" y="70">DESIGN</text>
      <rect class="lotus-card" x="472" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="490" y="128">Design</text><text class="card-sub" x="490" y="151">solution + architecture</text>
      <rect class="client-card" x="472" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="490" y="288">Review</text><text class="card-sub" x="490" y="311">mockups + workflow</text>
      <path class="client-path" d="M652 299H596" opacity="0"/>
      <polygon class="decision octagon" points="605,255 671,255 680,264 680,334 671,343 605,343 596,334 596,264"/>
      <path class="client-path" d="M652 299H596"/>
      <text class="decision-text" x="638" y="294">CLIENT</text><text class="decision-text" x="638" y="310">APPROVES?</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="727" y="70">03</text><text class="stage-name" x="763" y="70">BUILD</text>
      <rect class="lotus-card" x="727" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="745" y="128">Build</text><text class="card-sub" x="745" y="151">code + internal QA</text>
      <rect class="client-card" x="727" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="745" y="288">Review</text><text class="card-sub" x="745" y="311">working progress</text>
      <path class="client-path" d="M907 299H851"/>
      <polygon class="decision octagon" points="860,255 926,255 935,264 935,334 926,343 860,343 851,334 851,264"/>
      <text class="decision-text" x="893" y="294">CLIENT</text><text class="decision-text" x="893" y="310">APPROVES?</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="982" y="70">04</text><text class="stage-name" x="1018" y="70">VALIDATE</text>
      <rect class="lotus-card" x="982" y="95" width="180" height="88" rx="18"/>
      <text class="card-title" x="1000" y="128">Refine</text><text class="card-sub" x="1000" y="151">fix + retest</text>
      <rect class="client-card" x="982" y="255" width="180" height="88" rx="18"/>
      <text class="card-title client" x="1000" y="288">Test</text><text class="card-sub" x="1000" y="311">validate real workflow</text>
      <path class="client-path" d="M1162 299H1106"/>
      <polygon class="decision octagon" points="1115,255 1181,255 1190,264 1190,334 1181,343 1115,343 1106,334 1106,264"/>
      <text class="decision-text" x="1148" y="294">CLIENT</text><text class="decision-text" x="1148" y="310">APPROVES?</text>
    </g>

    <!-- Stage 5 -->
    <g>
      <text class="stage-num" x="1237" y="70">05</text><text class="stage-name" x="1273" y="70">LAUNCH</text>
      <rect class="lotus-card" x="1237" y="95" width="105" height="88" rx="18"/>
      <text class="card-title" x="1254" y="128">Deploy</text><text class="card-sub" x="1254" y="151">train + support</text>
      <rect class="client-card" x="1237" y="255" width="105" height="88" rx="18"/>
      <text class="card-title client" x="1254" y="288">Adopt</text><text class="card-sub" x="1254" y="311">improve</text>
    </g>

    <text class="gate-note emphasis" x="150" y="535">FORWARD PROGRESS IS EARNED — APPROVAL MOVES THE PROJECT FORWARD.</text>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
