(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 535" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Forward progress is earned. Lotus completes work, the client reviews it, and each approval stop determines whether the project advances or returns for revision along a shared revision rail.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="gate-note emphasis" x="125" y="38">FORWARD PROGRESS IS EARNED</text>
    <text class="gate-note subnote" x="125" y="56">Lotus builds. You review. Approval moves the project forward.</text>

    <text class="team-label lotus" x="24" y="144">LOTUS TEAM</text>
    <text class="team-label client" x="24" y="304">CLIENT TEAM</text>

    <!-- Shared revision rail and return routes sit behind all cards. -->
    <g class="revision-layer">
      <path class="revision-rail" d="M205 452H970"/>

      <path class="return-path" d="M324 354V452H205V188" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M579 354V452H460V188" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M834 354V452H715V188" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M1089 354V452H970V188" marker-end="url(#af-gold)"/>

      <text class="no-label" x="312" y="379">NO</text>
      <text class="no-label" x="567" y="379">NO</text>
      <text class="no-label" x="822" y="379">NO</text>
      <text class="no-label" x="1077" y="379">NO</text>

      <text class="revision-label" x="205" y="478">REVISION</text>
      <text class="return-label" x="250" y="478">refine requirements</text>
      <text class="return-label" x="505" y="478">revise design</text>
      <text class="return-label" x="760" y="478">refine build</text>
      <text class="return-label" x="1005" y="478">fix + retest</text>
    </g>

    <!-- YES routes: the only way into the next Lotus stage. -->
    <g class="forward-layer">
      <path class="main-path" d="M356 304H367V160Q367 144 383 144H390" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M611 304H622V160Q622 144 638 144H645" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M866 304H877V160Q877 144 893 144H900" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M1121 304H1132V160Q1132 144 1148 144H1155" marker-end="url(#af-blue)"/>

      <text class="yes-label" x="359" y="292">YES</text>
      <text class="yes-label" x="614" y="292">YES</text>
      <text class="yes-label" x="869" y="292">YES</text>
      <text class="yes-label" x="1124" y="292">YES</text>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="125" y="88">01</text><text class="stage-name" x="161" y="88">DISCOVER</text>
      <rect class="lotus-card" x="125" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="143" y="133">Understand</text><text class="card-sub" x="143" y="156">requirements + goals</text>
      <path class="handoff-path" d="M205 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="125" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="143" y="293">Align</text><text class="card-sub" x="143" y="316">scope + roadmap</text>
      <path class="client-path" d="M285 304H292"/>
      <polygon class="decision octagon" points="304,272 344,272 356,284 356,324 344,336 304,336 292,324 292,284"/>
      <text class="decision-text" x="324" y="300">CLIENT</text><text class="decision-text" x="324" y="313">APPROVES?</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="390" y="88">02</text><text class="stage-name" x="426" y="88">DESIGN</text>
      <rect class="lotus-card" x="390" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="408" y="133">Design</text><text class="card-sub" x="408" y="156">solution + architecture</text>
      <path class="handoff-path" d="M470 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="390" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="408" y="293">Review</text><text class="card-sub" x="408" y="316">mockups + workflow</text>
      <path class="client-path" d="M550 304H547"/>
      <polygon class="decision octagon" points="559,272 599,272 611,284 611,324 599,336 559,336 547,324 547,284"/>
      <text class="decision-text" x="579" y="300">CLIENT</text><text class="decision-text" x="579" y="313">APPROVES?</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="645" y="88">03</text><text class="stage-name" x="681" y="88">BUILD</text>
      <rect class="lotus-card" x="645" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="663" y="133">Build</text><text class="card-sub" x="663" y="156">code + internal QA</text>
      <path class="handoff-path" d="M725 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="645" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="663" y="293">Review</text><text class="card-sub" x="663" y="316">working progress</text>
      <path class="client-path" d="M805 304H802"/>
      <polygon class="decision octagon" points="814,272 854,272 866,284 866,324 854,336 814,336 802,324 802,284"/>
      <text class="decision-text" x="834" y="300">CLIENT</text><text class="decision-text" x="834" y="313">APPROVES?</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="900" y="88">04</text><text class="stage-name" x="936" y="88">VALIDATE</text>
      <rect class="lotus-card" x="900" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="918" y="133">Refine</text><text class="card-sub" x="918" y="156">fix + retest</text>
      <path class="handoff-path" d="M980 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="900" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="918" y="293">Test</text><text class="card-sub" x="918" y="316">validate real workflow</text>
      <path class="client-path" d="M1060 304H1057"/>
      <polygon class="decision octagon" points="1069,272 1109,272 1121,284 1121,324 1109,336 1069,336 1057,324 1057,284"/>
      <text class="decision-text" x="1089" y="300">CLIENT</text><text class="decision-text" x="1089" y="313">APPROVES?</text>
    </g>

    <!-- Stage 5 -->
    <g>
      <text class="stage-num" x="1155" y="88">05</text><text class="stage-name" x="1191" y="88">LAUNCH</text>
      <rect class="lotus-card" x="1155" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="1173" y="133">Deploy</text><text class="card-sub" x="1173" y="156">train + support</text>
      <path class="handoff-path" d="M1235 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="1155" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="1173" y="293">Adopt</text><text class="card-sub" x="1173" y="316">measure + improve</text>
    </g>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
