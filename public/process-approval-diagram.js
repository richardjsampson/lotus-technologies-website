(() => {
  const oldSvg = document.querySelector('.process-page .process-flow-desktop');
  if (!oldSvg) return;

  const legend = document.querySelector('.process-page .process-visual-legend');
  if (legend) legend.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg class="process-blueprint" viewBox="0 0 1440 920" role="img" aria-labelledby="process-blueprint-title process-blueprint-desc">
    <title id="process-blueprint-title">Our Process. Your Success.</title>
    <desc id="process-blueprint-desc">A collaborative five-stage process showing Lotus Team and Client Team responsibilities, approval checkpoints after Discover, Design, Build, and Validate, and revision loops when approval is not yet earned.</desc>

    <defs>
      <linearGradient id="teamBlue" x1="0" x2="1"><stop stop-color="#083a78"/><stop offset="1" stop-color="#0d5ca5"/></linearGradient>
      <linearGradient id="teamGold" x1="0" x2="1"><stop stop-color="#d99800"/><stop offset="1" stop-color="#f3b500"/></linearGradient>
      <linearGradient id="stage1" x1="0" x2="1"><stop stop-color="#0d437d"/><stop offset="1" stop-color="#185995"/></linearGradient>
      <linearGradient id="stage2" x1="0" x2="1"><stop stop-color="#1a5b9c"/><stop offset="1" stop-color="#2d74b5"/></linearGradient>
      <linearGradient id="stage3" x1="0" x2="1"><stop stop-color="#087d83"/><stop offset="1" stop-color="#15999a"/></linearGradient>
      <linearGradient id="stage4" x1="0" x2="1"><stop stop-color="#246b3f"/><stop offset="1" stop-color="#3b8b54"/></linearGradient>
      <linearGradient id="stage5" x1="0" x2="1"><stop stop-color="#d69300"/><stop offset="1" stop-color="#efb000"/></linearGradient>
      <marker id="arrowNavy" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#0c3b73"/></marker>
      <marker id="arrowGreen" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#16846f"/></marker>
      <marker id="arrowGold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#d59600"/></marker>
    </defs>

    <rect class="bp-bg" x="0" y="0" width="1440" height="920" rx="28"/>

    <text class="bp-title" x="720" y="52" text-anchor="middle">OUR PROCESS. YOUR SUCCESS.</text>
    <line class="bp-title-rule" x1="350" y1="78" x2="430" y2="78"/>
    <text class="bp-subtitle" x="720" y="86" text-anchor="middle">A collaborative approach. Every step. Every time.</text>
    <line class="bp-title-rule" x1="1010" y1="78" x2="1090" y2="78"/>

    <!-- Stage chevrons -->
    <g class="bp-stage-strip">
      <path class="bp-chevron c1" d="M110 104H344L382 164L344 224H110L145 164Z"/>
      <path class="bp-chevron c2" d="M360 104H594L632 164L594 224H360L395 164Z"/>
      <path class="bp-chevron c3" d="M610 104H844L882 164L844 224H610L645 164Z"/>
      <path class="bp-chevron c4" d="M860 104H1094L1132 164L1094 224H860L895 164Z"/>
      <path class="bp-chevron c5" d="M1110 104H1344L1382 164L1344 224H1110L1145 164Z"/>

      <g transform="translate(158 0)"><circle class="bp-num n1" cx="0" cy="135" r="18"/><text class="bp-num-text" x="0" y="141" text-anchor="middle">1</text><text class="bp-stage-name s1" x="30" y="139">DISCOVER</text><text class="bp-stage-phase" x="30" y="166">Analysis Phase</text></g>
      <g transform="translate(408 0)"><circle class="bp-num n2" cx="0" cy="135" r="18"/><text class="bp-num-text" x="0" y="141" text-anchor="middle">2</text><text class="bp-stage-name s2" x="30" y="139">DESIGN</text><text class="bp-stage-phase" x="30" y="166">Design Phase</text></g>
      <g transform="translate(658 0)"><circle class="bp-num n3" cx="0" cy="135" r="18"/><text class="bp-num-text" x="0" y="141" text-anchor="middle">3</text><text class="bp-stage-name s3" x="30" y="139">BUILD</text><text class="bp-stage-phase" x="30" y="166">Development Phase</text></g>
      <g transform="translate(908 0)"><circle class="bp-num n4" cx="0" cy="135" r="18"/><text class="bp-num-text" x="0" y="141" text-anchor="middle">4</text><text class="bp-stage-name s4" x="30" y="139">VALIDATE</text><text class="bp-stage-phase" x="30" y="166">Testing &amp; Review</text></g>
      <g transform="translate(1158 0)"><circle class="bp-num n5" cx="0" cy="135" r="18"/><text class="bp-num-text" x="0" y="141" text-anchor="middle">5</text><text class="bp-stage-name s5" x="30" y="135">LAUNCH &amp;</text><text class="bp-stage-name s5" x="30" y="154">SUPPORT</text><text class="bp-stage-phase" x="30" y="180">Deployment Phase</text></g>

      <!-- simple stage icons -->
      <g class="bp-icon i1"><circle cx="207" cy="197" r="20"/><line x1="221" y1="211" x2="238" y2="226"/></g>
      <g class="bp-icon i2"><rect x="455" y="184" width="70" height="38" rx="3"/><line x1="472" y1="228" x2="509" y2="228"/><line x1="490" y1="222" x2="490" y2="228"/></g>
      <g class="bp-icon i3"><rect x="705" y="181" width="70" height="43" rx="4"/><text x="740" y="211" text-anchor="middle">&lt;/&gt;</text></g>
      <g class="bp-icon i4"><rect x="965" y="181" width="46" height="50" rx="4"/><line x1="977" y1="194" x2="999" y2="194"/><path d="M976 207l6 6 10-12M976 221l6 6 10-12"/></g>
      <g class="bp-icon i5"><path d="M1208 218h44a18 18 0 0 0 2-36 27 27 0 0 0-52 8 15 15 0 0 0 6 28Z"/><path d="M1230 210v-22M1221 197l9-9 9 9"/></g>
    </g>

    <!-- Main process body -->
    <rect class="bp-panel" x="24" y="226" width="1392" height="554" rx="20"/>
    <line class="bp-divider" x1="24" y1="475" x2="1416" y2="475"/>

    <!-- team labels -->
    <rect class="bp-team-block lotus" x="24" y="226" width="112" height="248" rx="20"/>
    <text class="bp-team-lotus-mark" x="80" y="286" text-anchor="middle">✦</text>
    <text class="bp-team-title" x="80" y="330" text-anchor="middle">LOTUS</text><text class="bp-team-title" x="80" y="356" text-anchor="middle">TEAM</text>
    <rect class="bp-team-block client" x="24" y="476" width="112" height="215" rx="20"/>
    <circle class="bp-person-dot" cx="64" cy="525" r="11"/><circle class="bp-person-dot" cx="88" cy="530" r="9"/><path class="bp-person-body" d="M46 554q18-24 36 0v18H46Z"/><path class="bp-person-body" d="M76 554q15-20 30 0v15H76Z"/>
    <text class="bp-team-title" x="80" y="610" text-anchor="middle">CLIENT</text><text class="bp-team-title" x="80" y="636" text-anchor="middle">TEAM</text>

    <!-- vertical column separators -->
    <g class="bp-col-seps"><line x1="360" y1="226" x2="360" y2="692"/><line x1="610" y1="226" x2="610" y2="692"/><line x1="860" y1="226" x2="860" y2="692"/><line x1="1110" y1="226" x2="1110" y2="692"/></g>

    <!-- Lotus responsibilities -->
    <g class="bp-copy lotus-copy">
      <text class="bp-copy-head" x="162" y="264">We start by understanding</text><text x="174" y="295">• Requirements gathering</text><text x="174" y="322">• Requirements analysis</text><text x="174" y="349">• Proposal &amp; quote</text><text x="174" y="376">• Solution roadmap</text>
      <text class="bp-copy-head" x="402" y="264">We design the right solution</text><text x="414" y="295">• Solution design</text><text x="414" y="322">• Prototypes / mockups</text><text x="414" y="349">• Architecture planning</text><text x="414" y="376">• Client review</text>
      <text class="bp-copy-head" x="652" y="264">We build with quality</text><text x="664" y="295">• Development &amp; coding</text><text x="664" y="322">• Quality assurance</text><text x="664" y="349">• Internal testing</text><text x="664" y="376">• Continuous updates</text>
      <text class="bp-copy-head" x="902" y="264">We test and refine together</text><text x="914" y="295">• Client review</text><text x="914" y="322">• Client testing</text><text x="914" y="349">• Bug fixing &amp; refinement</text><text x="914" y="376">• Final validation</text>
      <text class="bp-copy-head" x="1152" y="264">We launch and support</text><text x="1164" y="295">• Launch to production</text><text x="1164" y="322">• Client training &amp; guides</text><text x="1164" y="349">• Monitoring &amp; optimization</text><text x="1164" y="376">• Ongoing maintenance</text>
    </g>

    <!-- Approval checkpoints -->
    <g class="bp-approvals">
      <line x1="260" y1="395" x2="260" y2="502"/><text x="282" y="458">APPROVE?</text><circle cx="360" cy="476" r="19"/><path d="M350 476l7 7 13-16"/><text class="bp-yes" x="245" y="523">YES</text><path class="bp-yes-path" d="M260 492V536" marker-end="url(#arrowGreen)"/><text class="bp-no" x="318" y="508">NO</text><path class="bp-no-path" d="M360 495V526Q360 545 341 545H314" marker-end="url(#arrowGold)"/>
      <line x1="510" y1="395" x2="510" y2="502"/><text x="532" y="458">APPROVE?</text><circle cx="610" cy="476" r="19"/><path d="M600 476l7 7 13-16"/><text class="bp-yes" x="495" y="523">YES</text><path class="bp-yes-path" d="M510 492V536" marker-end="url(#arrowGreen)"/><text class="bp-no" x="568" y="508">NO</text><path class="bp-no-path" d="M610 495V526Q610 545 591 545H564" marker-end="url(#arrowGold)"/>
      <line x1="760" y1="395" x2="760" y2="502"/><text x="782" y="458">APPROVE?</text><circle cx="860" cy="476" r="19"/><path d="M850 476l7 7 13-16"/><text class="bp-yes" x="745" y="523">YES</text><path class="bp-yes-path" d="M760 492V536" marker-end="url(#arrowGreen)"/><text class="bp-no" x="818" y="508">NO</text><path class="bp-no-path" d="M860 495V526Q860 545 841 545H814" marker-end="url(#arrowGold)"/>
      <line x1="1010" y1="395" x2="1010" y2="502"/><text x="1032" y="458">APPROVE?</text><circle cx="1110" cy="476" r="19"/><path d="M1100 476l7 7 13-16"/><text class="bp-yes" x="995" y="523">YES</text><path class="bp-yes-path" d="M1010 492V536" marker-end="url(#arrowGreen)"/><text class="bp-no" x="1068" y="508">NO</text><path class="bp-no-path" d="M1110 495V526Q1110 545 1091 545H1064" marker-end="url(#arrowGold)"/>
    </g>

    <!-- Client responsibilities -->
    <g class="bp-copy client-copy">
      <text class="bp-copy-head" x="162" y="585">You share your vision</text><text x="174" y="616">• Share goals &amp; priorities</text><text x="174" y="643">• Provide requirements</text><text x="174" y="670">• Review proposal</text>
      <text class="bp-copy-head" x="402" y="585">You review &amp; provide feedback</text><text x="414" y="616">• Review designs &amp; mockups</text><text x="414" y="643">• Provide feedback</text><text x="414" y="670">• Approve or request changes</text>
      <text class="bp-copy-head" x="652" y="585">You review progress</text><text x="664" y="616">• Review feature updates</text><text x="664" y="643">• Provide feedback</text><text x="664" y="670">• Validate functionality</text>
      <text class="bp-copy-head" x="902" y="585">You test &amp; validate</text><text x="914" y="616">• Test the solution</text><text x="914" y="643">• Provide feedback</text><text x="914" y="670">• Approve final solution</text>
      <text class="bp-copy-head" x="1152" y="585">You’re live and confident</text><text x="1164" y="616">• Train your team</text><text x="1164" y="643">• Share feedback</text><text x="1164" y="670">• Drive continued success</text>
    </g>

    <!-- Agreement to success -->
    <rect class="bp-start-card" x="24" y="700" width="332" height="70" rx="14"/><circle class="bp-start-icon" cx="64" cy="735" r="24"/><text class="bp-card-head" x="105" y="726">AGREEMENT &amp; ROADMAP</text><text class="bp-card-copy" x="105" y="747">Once scope is approved, we align on schedule,</text><text class="bp-card-copy" x="105" y="763">milestones and deliverables.</text>
    <path class="bp-long-arrow" d="M356 735H1078" marker-end="url(#arrowNavy)"/>
    <rect class="bp-success-card" x="1090" y="700" width="326" height="70" rx="14"/><circle class="bp-success-icon" cx="1132" cy="735" r="24"/><text class="bp-card-head gold" x="1172" y="726">SUCCESS TOGETHER</text><text class="bp-card-copy" x="1172" y="747">A successful launch is just the</text><text class="bp-card-copy" x="1172" y="763">beginning of our partnership.</text>

    <!-- Two teams one goal -->
    <rect class="bp-footer-band" x="24" y="794" width="1110" height="76" rx="16"/><text class="bp-footer-mark" x="72" y="842">✦</text><text class="bp-footer-title" x="138" y="840">TWO TEAMS. ONE GOAL.</text><line class="bp-footer-divider" x1="488" y1="812" x2="488" y2="852"/><text class="bp-footer-tag" x="548" y="840">Your goals. Our expertise. Exceptional results.</text>
    <rect class="bp-key" x="1155" y="794" width="261" height="76" rx="16"/><text class="bp-key-text lotus" x="1184" y="824">Lotus Team</text><line class="bp-key-line lotus" x1="1288" y1="820" x2="1370" y2="820" marker-end="url(#arrowNavy)"/><text class="bp-key-text client" x="1184" y="852">Client Team</text><line class="bp-key-line client" x1="1288" y1="848" x2="1370" y2="848" marker-end="url(#arrowGold)"/>
    <text class="bp-bottom-note" x="720" y="902" text-anchor="middle">Collaboration. Transparency. Accountability.   <tspan font-weight="700">That’s the Lotus difference.</tspan></text>
  </svg>`;

  oldSvg.replaceWith(wrap.firstElementChild);
})();
