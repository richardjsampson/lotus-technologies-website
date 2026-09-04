(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 560" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Forward progress is earned. Lotus completes work, the client reviews it, and each approval stop determines whether the project advances or returns for revision.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="gate-note emphasis" x="140" y="42">FORWARD PROGRESS IS EARNED</text>
    <text class="gate-note subnote" x="140" y="59">Lotus builds. You review. Approval moves the project forward.</text>

    <text class="team-label lotus" x="28" y="139">LOTUS TEAM</text>
    <text class="team-label client" x="28" y="319">CLIENT TEAM</text>

    <!-- Revision routes are drawn first so they pass behind the stage cards. -->
    <g class="revision-layer">
      <path class="return-path" d="M365 368V470Q365 486 349 486H121Q105 486 105 470V158Q105 142 121 142H140" marker-end="url(#af-gold)"/>
      <text class="no-label" x="356" y="389">NO</text>
      <text class="return-label" x="150" y="510">REFINE REQUIREMENTS / SCOPE</text>

      <path class="return-path" d="M625 368V454Q625 470 609 470H381Q365 470 365 454V158Q365 142 381 142H400" marker-end="url(#af-gold)"/>
      <text class="no-label" x="616" y="389">NO</text>
      <text class="return-label" x="423" y="494">REVISE DESIGN</text>

      <path class="return-path" d="M885 368V438Q885 454 869 454H641Q625 454 625 438V158Q625 142 641 142H660" marker-end="url(#af-gold)"/>
      <text class="no-label" x="876" y="389">NO</text>
      <text class="return-label" x="688" y="478">REFINE BUILD</text>

      <path class="return-path" d="M1145 368V422Q1145 438 1129 438H901Q885 438 885 422V158Q885 142 901 142H920" marker-end="url(#af-gold)"/>
      <text class="no-label" x="1136" y="389">NO</text>
      <text class="return-label" x="951" y="462">FIX + RETEST</text>
    </g>

    <!-- YES routes are the only forward path into the next Lotus stage. -->
    <g class="forward-layer">
      <path class="main-path" d="M400 319H410V158Q410 142 426 142H440" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="407" y="307">YES</text>
      <path class="main-path" d="M660 319H670V158Q670 142 686 142H700" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="667" y="307">YES</text>
      <path class="main-path" d="M920 319H930V158Q930 142 946 142H960" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="927" y="307">YES</text>
      <path class="main-path" d="M1180 319H1190V158Q1190 142 1206 142H1220" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="1187" y="307">YES</text>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="140" y="91">01</text><text class="stage-name" x="176" y="91">DISCOVER</text>
      <rect class="lotus-card" x="140" y="105" width="170" height="88" rx="18"/>
      <text class="card-title" x="158" y="138">Understand</text><text class="card-sub" x="158" y="161">requirements + goals</text>
      <path class="handoff-path" d="M225 193V265" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="140" y="265" width="170" height="88" rx="18"/>
      <text class="card-title client" x="158" y="298">Align</text><text class="card-sub" x="158" y="321">scope + roadmap</text>
      <path class="client-path" d="M310 319H330"/>
      <polygon class="decision octagon" points="340,284 360,274 380,274 400,294 400,344 380,364 350,364 330,344 330,294"/>
      <text class="decision-text" x="365" y="314">CLIENT</text><text class="decision-text" x="365" y="329">APPROVES?</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="440" y="91">02</text><text class="stage-name" x="476" y="91">DESIGN</text>
      <rect class="lotus-card" x="440" y="105" width="170" height="88" rx="18"/>
      <text class="card-title" x="458" y="138">Design</text><text class="card-sub" x="458" y="161">solution + architecture</text>
      <path class="handoff-path" d="M525 193V265" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="440" y="265" width="170" height="88" rx="18"/>
      <text class="card-title client" x="458" y="298">Review</text><text class="card-sub" x="458" y="321">mockups + workflow</text>
      <path class="client-path" d="M610 319H590"/>
      <polygon class="decision octagon" points="600,284 620,274 640,274 660,294 660,344 640,364 610,364 590,344 590,294"/>
      <text class="decision-text" x="625" y="314">CLIENT</text><text class="decision-text" x="625" y="329">APPROVES?</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="700" y="91">03</text><text class="stage-name" x="736" y="91">BUILD</text>
      <rect class="lotus-card" x="700" y="105" width="170" height="88" rx="18"/>
      <text class="card-title" x="718" y="138">Build</text><text class="card-sub" x="718" y="161">code + internal QA</text>
      <path class="handoff-path" d="M785 193V265" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="700" y="265" width="170" height="88" rx="18"/>
      <text class="card-title client" x="718" y="298">Review</text><text class="card-sub" x="718" y="321">working progress</text>
      <path class="client-path" d="M870 319H850"/>
      <polygon class="decision octagon" points="860,284 880,274 900,274 920,294 920,344 900,364 870,364 850,344 850,294"/>
      <text class="decision-text" x="885" y="314">CLIENT</text><text class="decision-text" x="885" y="329">APPROVES?</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="960" y="91">04</text><text class="stage-name" x="996" y="91">VALIDATE</text>
      <rect class="lotus-card" x="960" y="105" width="170" height="88" rx="18"/>
      <text class="card-title" x="978" y="138">Refine</text><text class="card-sub" x="978" y="161">fix + retest</text>
      <path class="handoff-path" d="M1045 193V265" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="960" y="265" width="170" height="88" rx="18"/>
      <text class="card-title client" x="978" y="298">Test</text><text class="card-sub" x="978" y="321">validate real workflow</text>
      <path class="client-path" d="M1130 319H1110"/>
      <polygon class="decision octagon" points="1120,284 1140,274 1160,274 1180,294 1180,344 1160,364 1130,364 1110,344 1110,294"/>
      <text class="decision-text" x="1145" y="314">CLIENT</text><text class="decision-text" x="1145" y="329">APPROVES?</text>
    </g>

    <!-- Stage 5 -->
    <g>
      <text class="stage-num" x="1220" y="91">05</text><text class="stage-name" x="1256" y="91">LAUNCH</text>
      <rect class="lotus-card" x="1220" y="105" width="120" height="88" rx="18"/>
      <text class="card-title" x="1238" y="138">Deploy</text><text class="card-sub" x="1238" y="161">train + support</text>
      <path class="handoff-path" d="M1280 193V265" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="1220" y="265" width="120" height="88" rx="18"/>
      <text class="card-title client" x="1238" y="298">Adopt</text><text class="card-sub" x="1238" y="321">improve</text>
    </g>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
