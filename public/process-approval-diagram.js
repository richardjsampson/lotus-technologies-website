(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 550" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Forward progress is earned. Lotus completes work, the client reviews it, and each approval stop determines whether the project advances or returns for revision.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="gate-note emphasis" x="140" y="40">FORWARD PROGRESS IS EARNED</text>
    <text class="gate-note subnote" x="140" y="57">Lotus builds. You review. Approval moves the project forward.</text>

    <text class="team-label lotus" x="28" y="140">LOTUS TEAM</text>
    <text class="team-label client" x="28" y="310">CLIENT TEAM</text>

    <!-- NO routes sit behind the cards. -->
    <g class="revision-layer">
      <path class="return-path" d="M345 355V466Q345 480 331 480H116Q102 480 102 466V158Q102 144 116 144H140" marker-end="url(#af-gold)"/>
      <text class="no-label" x="336" y="378">NO</text>
      <text class="return-label" x="146" y="503">REFINE REQUIREMENTS / SCOPE</text>

      <path class="return-path" d="M595 355V450Q595 464 581 464H366Q352 464 352 450V158Q352 144 366 144H390" marker-end="url(#af-gold)"/>
      <text class="no-label" x="586" y="378">NO</text>
      <text class="return-label" x="416" y="487">REVISE DESIGN</text>

      <path class="return-path" d="M845 355V434Q845 448 831 448H616Q602 448 602 434V158Q602 144 616 144H640" marker-end="url(#af-gold)"/>
      <text class="no-label" x="836" y="378">NO</text>
      <text class="return-label" x="668" y="471">REFINE BUILD</text>

      <path class="return-path" d="M1095 355V418Q1095 432 1081 432H866Q852 432 852 418V158Q852 144 866 144H890" marker-end="url(#af-gold)"/>
      <text class="no-label" x="1086" y="378">NO</text>
      <text class="return-label" x="918" y="455">FIX + RETEST</text>
    </g>

    <!-- YES routes are the only path into the next Lotus stage. -->
    <g class="forward-layer">
      <path class="main-path" d="M375 310H382V160Q382 144 398 144H410" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="380" y="298">YES</text>
      <path class="main-path" d="M625 310H632V160Q632 144 648 144H660" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="630" y="298">YES</text>
      <path class="main-path" d="M875 310H882V160Q882 144 898 144H910" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="880" y="298">YES</text>
      <path class="main-path" d="M1125 310H1132V160Q1132 144 1148 144H1160" marker-end="url(#af-blue)"/>
      <text class="yes-label" x="1130" y="298">YES</text>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="140" y="88">01</text><text class="stage-name" x="176" y="88">DISCOVER</text>
      <rect class="lotus-card" x="140" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="158" y="133">Understand</text><text class="card-sub" x="158" y="156">requirements + goals</text>
      <path class="handoff-path" d="M220 188V266" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="140" y="266" width="160" height="88" rx="18"/>
      <text class="card-title client" x="158" y="299">Align</text><text class="card-sub" x="158" y="322">scope + roadmap</text>
      <path class="client-path" d="M300 310H315"/>
      <polygon class="decision octagon" points="315,292 333,274 357,274 375,292 375,328 357,346 333,346 315,328"/>
      <text class="decision-text" x="345" y="307">CLIENT</text><text class="decision-text" x="345" y="321">APPROVES?</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="410" y="88">02</text><text class="stage-name" x="446" y="88">DESIGN</text>
      <rect class="lotus-card" x="410" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="428" y="133">Design</text><text class="card-sub" x="428" y="156">solution + architecture</text>
      <path class="handoff-path" d="M490 188V266" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="410" y="266" width="160" height="88" rx="18"/>
      <text class="card-title client" x="428" y="299">Review</text><text class="card-sub" x="428" y="322">mockups + workflow</text>
      <path class="client-path" d="M570 310H565"/>
      <polygon class="decision octagon" points="565,292 583,274 607,274 625,292 625,328 607,346 583,346 565,328"/>
      <text class="decision-text" x="595" y="307">CLIENT</text><text class="decision-text" x="595" y="321">APPROVES?</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="660" y="88">03</text><text class="stage-name" x="696" y="88">BUILD</text>
      <rect class="lotus-card" x="660" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="678" y="133">Build</text><text class="card-sub" x="678" y="156">code + internal QA</text>
      <path class="handoff-path" d="M740 188V266" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="660" y="266" width="160" height="88" rx="18"/>
      <text class="card-title client" x="678" y="299">Review</text><text class="card-sub" x="678" y="322">working progress</text>
      <path class="client-path" d="M820 310H815"/>
      <polygon class="decision octagon" points="815,292 833,274 857,274 875,292 875,328 857,346 833,346 815,328"/>
      <text class="decision-text" x="845" y="307">CLIENT</text><text class="decision-text" x="845" y="321">APPROVES?</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="910" y="88">04</text><text class="stage-name" x="946" y="88">VALIDATE</text>
      <rect class="lotus-card" x="910" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="928" y="133">Refine</text><text class="card-sub" x="928" y="156">fix + retest</text>
      <path class="handoff-path" d="M990 188V266" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="910" y="266" width="160" height="88" rx="18"/>
      <text class="card-title client" x="928" y="299">Test</text><text class="card-sub" x="928" y="322">validate real workflow</text>
      <path class="client-path" d="M1070 310H1065"/>
      <polygon class="decision octagon" points="1065,292 1083,274 1107,274 1125,292 1125,328 1107,346 1083,346 1065,328"/>
      <text class="decision-text" x="1095" y="307">CLIENT</text><text class="decision-text" x="1095" y="321">APPROVES?</text>
    </g>

    <!-- Stage 5 -->
    <g>
      <text class="stage-num" x="1160" y="88">05</text><text class="stage-name" x="1196" y="88">LAUNCH</text>
      <rect class="lotus-card" x="1160" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="1178" y="133">Deploy</text><text class="card-sub" x="1178" y="156">train + support</text>
      <path class="handoff-path" d="M1240 188V266" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="1160" y="266" width="160" height="88" rx="18"/>
      <text class="card-title client" x="1178" y="299">Adopt</text><text class="card-sub" x="1178" y="322">measure + improve</text>
    </g>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
