(() => {
  const oldMobile = document.querySelector('.process-page .process-mobile-flow');
  if (!oldMobile) return;

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="mobile-process-blueprint" role="img" aria-label="Lotus collaborative five-stage process with client approval gates">
      <div class="mp-start">
        <span class="mp-start-icon">◆</span>
        <div><strong>AGREEMENT &amp; ROADMAP</strong><small>Align on scope, schedule, milestones and deliverables.</small></div>
      </div>

      <div class="mp-spine"></div>

      <section class="mp-stage mp-stage-1">
        <header><span class="mp-num">1</span><div><strong>DISCOVER</strong><small>Analysis Phase</small></div></header>
        <div class="mp-team mp-lotus"><b>LOTUS TEAM</b><strong>Understand the problem</strong><span>Requirements, goals, proposal + roadmap</span></div>
        <div class="mp-handoff"><span>↓</span><small>share + align</small></div>
        <div class="mp-team mp-client"><b>CLIENT TEAM</b><strong>Share your vision</strong><span>Goals, priorities, requirements + review</span></div>
        <div class="mp-approval"><b>CLIENT APPROVES?</b><div><span class="mp-yes">YES ↓</span><span class="mp-no">NO ↶ REFINE</span></div></div>
      </section>

      <section class="mp-stage mp-stage-2">
        <header><span class="mp-num">2</span><div><strong>DESIGN</strong><small>Design Phase</small></div></header>
        <div class="mp-team mp-lotus"><b>LOTUS TEAM</b><strong>Design the right solution</strong><span>Architecture, prototypes + workflow</span></div>
        <div class="mp-handoff"><span>↓</span><small>review</small></div>
        <div class="mp-team mp-client"><b>CLIENT TEAM</b><strong>Review + provide feedback</strong><span>Confirm fit, request changes, approve</span></div>
        <div class="mp-approval"><b>CLIENT APPROVES?</b><div><span class="mp-yes">YES ↓</span><span class="mp-no">NO ↶ REVISE</span></div></div>
      </section>

      <section class="mp-stage mp-stage-3">
        <header><span class="mp-num">3</span><div><strong>BUILD</strong><small>Development Phase</small></div></header>
        <div class="mp-team mp-lotus"><b>LOTUS TEAM</b><strong>Build with quality</strong><span>Development, QA + internal testing</span></div>
        <div class="mp-handoff"><span>↓</span><small>working progress</small></div>
        <div class="mp-team mp-client"><b>CLIENT TEAM</b><strong>Review progress</strong><span>Feature updates, feedback + validation</span></div>
        <div class="mp-approval"><b>CLIENT APPROVES?</b><div><span class="mp-yes">YES ↓</span><span class="mp-no">NO ↶ REFINE</span></div></div>
      </section>

      <section class="mp-stage mp-stage-4">
        <header><span class="mp-num">4</span><div><strong>VALIDATE</strong><small>Testing &amp; Review</small></div></header>
        <div class="mp-team mp-lotus"><b>LOTUS TEAM</b><strong>Test + refine together</strong><span>Fix, retest + final validation</span></div>
        <div class="mp-handoff"><span>↓</span><small>real-world testing</small></div>
        <div class="mp-team mp-client"><b>CLIENT TEAM</b><strong>Test + validate</strong><span>Test the solution, feedback + approval</span></div>
        <div class="mp-approval"><b>CLIENT APPROVES?</b><div><span class="mp-yes">YES ↓</span><span class="mp-no">NO ↶ RETEST</span></div></div>
      </section>

      <section class="mp-stage mp-stage-5">
        <header><span class="mp-num">5</span><div><strong>LAUNCH &amp; SUPPORT</strong><small>Deployment Phase</small></div></header>
        <div class="mp-team mp-lotus"><b>LOTUS TEAM</b><strong>Launch + support</strong><span>Production, training, monitoring + support</span></div>
        <div class="mp-handoff final"><span>↓</span><small>adopt + improve</small></div>
        <div class="mp-team mp-client"><b>CLIENT TEAM</b><strong>Live + confident</strong><span>Train, share feedback + drive success</span></div>
      </section>

      <div class="mp-success">
        <span class="mp-success-icon">✦</span>
        <div><strong>SUCCESS TOGETHER</strong><small>A successful launch is just the beginning of our partnership.</small></div>
      </div>

      <div class="mp-footer"><strong>TWO TEAMS. ONE GOAL.</strong><span>Your goals. Our expertise. Exceptional results.</span></div>
    </div>`;

  oldMobile.replaceWith(wrap.firstElementChild);
})();
