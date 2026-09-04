(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const loopLegend = document.querySelector('.process-page .legend-loop');
  if (loopLegend) loopLegend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="approval-flow-desktop" viewBox="0 0 1400 600" role="img" aria-labelledby="process-redesign-title process-redesign-desc">
    <title id="process-redesign-title">Lotus collaborative approval workflow</title>
    <desc id="process-redesign-desc">Forward progress is earned. Lotus completes each stage, the client reviews it, and approval moves the project forward. A no decision follows a dedicated revision path back to the Lotus work for that stage.</desc>
    <defs>
      <marker id="process-blue-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0 0L9 4.5L0 9Z" fill="#63BEFF"/>
      </marker>
      <marker id="process-gold-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0 0L9 4.5L0 9Z" fill="#F2B84B"/>
      </marker>
    </defs>

    <text class="process-kicker" x="120" y="42">FORWARD PROGRESS IS EARNED</text>
    <text class="process-subhead" x="120" y="62">Lotus builds. You review. Approval moves the project forward.</text>

    <text class="process-lane-label lotus" x="26" y="186">LOTUS TEAM</text>
    <text class="process-lane-label client" x="26" y="356">CLIENT TEAM</text>

    <!-- Dedicated revision routes, deliberately separated from the main flow. -->
    <g class="process-revision-routes">
      <path class="process-revision-path" d="M337 393V480H96V176Q96 162 110 162H120" marker-end="url(#process-gold-arrow)"/>
      <text class="process-revision-caption" x="158" y="501">REFINE REQUIREMENTS</text>

      <path class="process-revision-path" d="M607 393V505H366V176Q366 162 380 162H390" marker-end="url(#process-gold-arrow)"/>
      <text class="process-revision-caption" x="447" y="526">REVISE DESIGN</text>

      <path class="process-revision-path" d="M877 393V530H636V176Q636 162 650 162H660" marker-end="url(#process-gold-arrow)"/>
      <text class="process-revision-caption" x="718" y="551">REFINE BUILD</text>

      <path class="process-revision-path" d="M1147 393V555H906V176Q906 162 920 162H930" marker-end="url(#process-gold-arrow)"/>
      <text class="process-revision-caption" x="992" y="576">FIX + RETEST</text>
    </g>

    <!-- Forward YES routes. -->
    <g class="process-forward-routes">
      <path class="process-forward-path" d="M363 346H374V176Q374 162 388 162H390" marker-end="url(#process-blue-arrow)"/>
      <path class="process-forward-path" d="M633 346H644V176Q644 162 658 162H660" marker-end="url(#process-blue-arrow)"/>
      <path class="process-forward-path" d="M903 346H914V176Q914 162 928 162H930" marker-end="url(#process-blue-arrow)"/>
      <path class="process-forward-path" d="M1173 346H1184V176Q1184 162 1198 162H1200" marker-end="url(#process-blue-arrow)"/>
    </g>

    <!-- DISCOVER -->
    <g class="process-stage">
      <text class="process-stage-num" x="120" y="106">01</text>
      <text class="process-stage-name" x="157" y="106">DISCOVER</text>
      <rect class="process-card lotus" x="120" y="122" width="165" height="92" rx="18"/>
      <text class="process-card-title" x="138" y="158">Understand</text>
      <text class="process-card-sub" x="138" y="183">requirements + goals</text>
      <path class="process-handoff" d="M202.5 214V296" marker-end="url(#process-blue-arrow)"/>
      <rect class="process-card client" x="120" y="296" width="165" height="92" rx="18"/>
      <text class="process-card-title client" x="138" y="332">Align</text>
      <text class="process-card-sub" x="138" y="357">scope + roadmap</text>
      <path class="process-client-link" d="M285 342H302"/>
      <text class="process-question" x="337" y="327">CLIENT</text>
      <text class="process-question" x="337" y="342">APPROVES?</text>
      <rect class="process-branch yes" x="346" y="351" width="34" height="20" rx="5"/>
      <text class="process-branch-text yes" x="363" y="365">YES</text>
      <rect class="process-branch no" x="320" y="373" width="34" height="20" rx="5"/>
      <text class="process-branch-text no" x="337" y="387">NO</text>
    </g>

    <!-- DESIGN -->
    <g class="process-stage">
      <text class="process-stage-num" x="390" y="106">02</text>
      <text class="process-stage-name" x="427" y="106">DESIGN</text>
      <rect class="process-card lotus" x="390" y="122" width="165" height="92" rx="18"/>
      <text class="process-card-title" x="408" y="158">Design</text>
      <text class="process-card-sub" x="408" y="183">solution + architecture</text>
      <path class="process-handoff" d="M472.5 214V296" marker-end="url(#process-blue-arrow)"/>
      <rect class="process-card client" x="390" y="296" width="165" height="92" rx="18"/>
      <text class="process-card-title client" x="408" y="332">Review</text>
      <text class="process-card-sub" x="408" y="357">mockups + workflow</text>
      <path class="process-client-link" d="M555 342H572"/>
      <text class="process-question" x="607" y="327">CLIENT</text>
      <text class="process-question" x="607" y="342">APPROVES?</text>
      <rect class="process-branch yes" x="616" y="351" width="34" height="20" rx="5"/>
      <text class="process-branch-text yes" x="633" y="365">YES</text>
      <rect class="process-branch no" x="590" y="373" width="34" height="20" rx="5"/>
      <text class="process-branch-text no" x="607" y="387">NO</text>
    </g>

    <!-- BUILD -->
    <g class="process-stage">
      <text class="process-stage-num" x="660" y="106">03</text>
      <text class="process-stage-name" x="697" y="106">BUILD</text>
      <rect class="process-card lotus" x="660" y="122" width="165" height="92" rx="18"/>
      <text class="process-card-title" x="678" y="158">Build</text>
      <text class="process-card-sub" x="678" y="183">code + internal QA</text>
      <path class="process-handoff" d="M742.5 214V296" marker-end="url(#process-blue-arrow)"/>
      <rect class="process-card client" x="660" y="296" width="165" height="92" rx="18"/>
      <text class="process-card-title client" x="678" y="332">Review</text>
      <text class="process-card-sub" x="678" y="357">working progress</text>
      <path class="process-client-link" d="M825 342H842"/>
      <text class="process-question" x="877" y="327">CLIENT</text>
      <text class="process-question" x="877" y="342">APPROVES?</text>
      <rect class="process-branch yes" x="886" y="351" width="34" height="20" rx="5"/>
      <text class="process-branch-text yes" x="903" y="365">YES</text>
      <rect class="process-branch no" x="860" y="373" width="34" height="20" rx="5"/>
      <text class="process-branch-text no" x="877" y="387">NO</text>
    </g>

    <!-- VALIDATE -->
    <g class="process-stage">
      <text class="process-stage-num" x="930" y="106">04</text>
      <text class="process-stage-name" x="967" y="106">VALIDATE</text>
      <rect class="process-card lotus" x="930" y="122" width="165" height="92" rx="18"/>
      <text class="process-card-title" x="948" y="158">Refine</text>
      <text class="process-card-sub" x="948" y="183">fix + retest</text>
      <path class="process-handoff" d="M1012.5 214V296" marker-end="url(#process-blue-arrow)"/>
      <rect class="process-card client" x="930" y="296" width="165" height="92" rx="18"/>
      <text class="process-card-title client" x="948" y="332">Test</text>
      <text class="process-card-sub" x="948" y="357">validate real workflow</text>
      <path class="process-client-link" d="M1095 342H1112"/>
      <text class="process-question" x="1147" y="327">CLIENT</text>
      <text class="process-question" x="1147" y="342">APPROVES?</text>
      <rect class="process-branch yes" x="1156" y="351" width="34" height="20" rx="5"/>
      <text class="process-branch-text yes" x="1173" y="365">YES</text>
      <rect class="process-branch no" x="1130" y="373" width="34" height="20" rx="5"/>
      <text class="process-branch-text no" x="1147" y="387">NO</text>
    </g>

    <!-- LAUNCH -->
    <g class="process-stage">
      <text class="process-stage-num" x="1200" y="106">05</text>
      <text class="process-stage-name" x="1237" y="106">LAUNCH</text>
      <rect class="process-card lotus" x="1200" y="122" width="165" height="92" rx="18"/>
      <text class="process-card-title" x="1218" y="158">Deploy</text>
      <text class="process-card-sub" x="1218" y="183">train + support</text>
      <path class="process-handoff" d="M1282.5 214V296" marker-end="url(#process-blue-arrow)"/>
      <rect class="process-card client" x="1200" y="296" width="165" height="92" rx="18"/>
      <text class="process-card-title client" x="1218" y="332">Adopt</text>
      <text class="process-card-sub" x="1218" y="357">measure + improve</text>
    </g>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
