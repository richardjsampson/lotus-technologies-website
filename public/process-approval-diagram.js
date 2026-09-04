(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1360 520" role="img" aria-labelledby="approval-flow-title approval-flow-desc">
    <title id="approval-flow-title">Approval-gated collaborative development workflow</title>
    <desc id="approval-flow-desc">Forward progress is earned. Lotus completes work, the client reviews it, and each approval decision either advances the project or routes the work back for revision.</desc>
    <defs>
      <marker id="af-blue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/></marker>
      <marker id="af-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/></marker>
    </defs>

    <text class="gate-note emphasis" x="125" y="38">FORWARD PROGRESS IS EARNED</text>
    <text class="gate-note subnote" x="125" y="56">Lotus builds. You review. Approval moves the project forward.</text>

    <text class="team-label lotus" x="24" y="144">LOTUS TEAM</text>
    <text class="team-label client" x="24" y="304">CLIENT TEAM</text>

    <!-- Shared revision corridor. Individual NO branches join it, then return to Lotus work. -->
    <g class="revision-layer">
      <path class="revision-rail" d="M92 448H1112"/>

      <path class="return-path" d="M350 350V448H92V144H125" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M615 350V448H357V144H390" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M880 350V448H622V144H655" marker-end="url(#af-gold)"/>
      <path class="return-path" d="M1145 350V448H887V144H920" marker-end="url(#af-gold)"/>

      <text class="return-label" x="150" y="474">REFINE REQUIREMENTS</text>
      <text class="return-label" x="430" y="474">REVISE DESIGN</text>
      <text class="return-label" x="700" y="474">REFINE BUILD</text>
      <text class="return-label" x="963" y="474">FIX + RETEST</text>
    </g>

    <!-- YES routes: approval is the only path into the next Lotus stage. -->
    <g class="forward-layer">
      <path class="main-path" d="M385 304H397V160Q397 144 413 144H425" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M650 304H662V160Q662 144 678 144H690" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M915 304H927V160Q927 144 943 144H955" marker-end="url(#af-blue)"/>
      <path class="main-path" d="M1180 304H1192V160Q1192 144 1208 144H1220" marker-end="url(#af-blue)"/>
    </g>

    <!-- Stage 1 -->
    <g>
      <text class="stage-num" x="125" y="88">01</text><text class="stage-name" x="161" y="88">DISCOVER</text>
      <rect class="lotus-card" x="125" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="143" y="133">Understand</text><text class="card-sub" x="143" y="156">requirements + goals</text>
      <path class="handoff-path" d="M205 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="125" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="143" y="293">Align</text><text class="card-sub" x="143" y="316">scope + roadmap</text>
      <path class="client-path" d="M285 304H302"/>
      <text class="decision-text" x="344" y="299">CLIENT</text><text class="decision-text" x="344" y="313">APPROVES?</text>
      <rect class="branch-badge yes" x="363" y="289" width="34" height="20" rx="5"/><text class="branch-text yes" x="380" y="303">YES</text>
      <path class="no-stem" d="M344 320V350"/>
      <rect class="branch-badge no" x="327" y="323" width="34" height="20" rx="5"/><text class="branch-text no" x="344" y="337">NO</text>
    </g>

    <!-- Stage 2 -->
    <g>
      <text class="stage-num" x="425" y="88">02</text><text class="stage-name" x="461" y="88">DESIGN</text>
      <rect class="lotus-card" x="425" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="443" y="133">Design</text><text class="card-sub" x="443" y="156">solution + architecture</text>
      <path class="handoff-path" d="M505 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="425" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="443" y="293">Review</text><text class="card-sub" x="443" y="316">mockups + workflow</text>
      <path class="client-path" d="M585 304H602"/>
      <text class="decision-text" x="644" y="299">CLIENT</text><text class="decision-text" x="644" y="313">APPROVES?</text>
      <rect class="branch-badge yes" x="663" y="289" width="34" height="20" rx="5"/><text class="branch-text yes" x="680" y="303">YES</text>
      <path class="no-stem" d="M644 320V350"/>
      <rect class="branch-badge no" x="627" y="323" width="34" height="20" rx="5"/><text class="branch-text no" x="644" y="337">NO</text>
    </g>

    <!-- Stage 3 -->
    <g>
      <text class="stage-num" x="690" y="88">03</text><text class="stage-name" x="726" y="88">BUILD</text>
      <rect class="lotus-card" x="690" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="708" y="133">Build</text><text class="card-sub" x="708" y="156">code + internal QA</text>
      <path class="handoff-path" d="M770 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="690" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="708" y="293">Review</text><text class="card-sub" x="708" y="316">working progress</text>
      <path class="client-path" d="M850 304H867"/>
      <text class="decision-text" x="909" y="299">CLIENT</text><text class="decision-text" x="909" y="313">APPROVES?</text>
      <rect class="branch-badge yes" x="928" y="289" width="34" height="20" rx="5"/><text class="branch-text yes" x="945" y="303">YES</text>
      <path class="no-stem" d="M909 320V350"/>
      <rect class="branch-badge no" x="892" y="323" width="34" height="20" rx="5"/><text class="branch-text no" x="909" y="337">NO</text>
    </g>

    <!-- Stage 4 -->
    <g>
      <text class="stage-num" x="955" y="88">04</text><text class="stage-name" x="991" y="88">VALIDATE</text>
      <rect class="lotus-card" x="955" y="100" width="160" height="88" rx="18"/>
      <text class="card-title" x="973" y="133">Refine</text><text class="card-sub" x="973" y="156">fix + retest</text>
      <path class="handoff-path" d="M1035 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="955" y="260" width="160" height="88" rx="18"/>
      <text class="card-title client" x="973" y="293">Test</text><text class="card-sub" x="973" y="316">validate real workflow</text>
      <path class="client-path" d="M1115 304H1132"/>
      <text class="decision-text" x="1174" y="299">CLIENT</text><text class="decision-text" x="1174" y="313">APPROVES?</text>
      <rect class="branch-badge yes" x="1193" y="289" width="34" height="20" rx="5"/><text class="branch-text yes" x="1210" y="303">YES</text>
      <path class="no-stem" d="M1174 320V350"/>
      <rect class="branch-badge no" x="1157" y="323" width="34" height="20" rx="5"/><text class="branch-text no" x="1174" y="337">NO</text>
    </g>

    <!-- Stage 5 -->
    <g>
      <text class="stage-num" x="1220" y="88">05</text><text class="stage-name" x="1256" y="88">LAUNCH</text>
      <rect class="lotus-card" x="1220" y="100" width="120" height="88" rx="18"/>
      <text class="card-title" x="1238" y="133">Deploy</text><text class="card-sub" x="1238" y="156">train + support</text>
      <path class="handoff-path" d="M1280 188V260" marker-end="url(#af-blue)"/>
      <rect class="client-card" x="1220" y="260" width="120" height="88" rx="18"/>
      <text class="card-title client" x="1238" y="293">Adopt</text><text class="card-sub" x="1238" y="316">improve</text>
    </g>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
