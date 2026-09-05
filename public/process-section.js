(() => {
  const section = document.querySelector('body.home-page main > section:nth-child(6)');
  if (!section) return;

  const stages = [
    {
      name: 'Discover', sub: 'Analysis',
      lotusSummary: 'We understand the problem, constraints, and priorities.',
      clientSummary: 'You share goals, requirements, and what success looks like.',
      lotus: ['Requirements gathering', 'Requirements analysis', 'Proposal & quote', 'Solution roadmap'],
      client: ['Share goals & priorities', 'Provide requirements', 'Review proposal', 'Align on scope & roadmap']
    },
    {
      name: 'Design', sub: 'Solution design',
      lotusSummary: 'We shape the solution, architecture, and experience.',
      clientSummary: 'You review the design and steer it with real-world feedback.',
      lotus: ['Solution design', 'Architecture planning', 'Prototypes / mockups', 'Design refinement'],
      client: ['Review designs & mockups', 'Provide feedback', 'Confirm workflow fit', 'Approve or request changes']
    },
    {
      name: 'Build', sub: 'Development',
      lotusSummary: 'We build, test internally, and keep progress visible.',
      clientSummary: 'You review working progress while there is still time to shape it.',
      lotus: ['Development & coding', 'Quality assurance', 'Internal testing', 'Continuous progress updates'],
      client: ['Review feature updates', 'Provide feedback', 'Validate functionality', 'Confirm business alignment']
    },
    {
      name: 'Validate', sub: 'Testing & review',
      lotusSummary: 'We test, refine, and close the gaps together.',
      clientSummary: 'You test the actual solution and validate the final result.',
      lotus: ['Client review support', 'Issue resolution', 'Bug fixing & refinement', 'Final validation'],
      client: ['Test the solution', 'Provide feedback', 'Confirm requirements', 'Approve final solution']
    },
    {
      name: 'Launch & Support', sub: 'Deployment',
      lotusSummary: 'We launch, train, monitor, optimize, and stay engaged.',
      clientSummary: 'You go live with confidence and continue improving with us.',
      lotus: ['Production deployment', 'Client training & guides', 'Monitoring & optimization', 'Ongoing maintenance & support'],
      client: ['Train your team', 'Share live feedback', 'Track outcomes', 'Drive continued success']
    }
  ];

  const tabs = stages.map((s, i) => `
    <button class="process-stage-tab" type="button" role="tab" id="process-tab-${i}" aria-controls="process-panel-${i}" aria-selected="${i === 0}">
      <span class="process-num">0${i + 1}</span><span class="process-stage-name">${s.name}</span>
      <span class="process-stage-sub">${s.sub}</span>
    </button>`).join('');

  const columns = stages.map((s, i) => `
    <article class="process-stage-col${i === 0 ? ' is-active' : ''}" data-stage="${i}" data-mobile-title="0${i + 1} · ${s.name}" tabindex="0" role="button" aria-label="Show ${s.name} details">
      <span class="process-node"></span>
      <div class="process-cell lotus">
        <h3 class="process-cell-title">Lotus</h3>
        <p class="process-cell-summary">${s.lotusSummary}</p>
      </div>
      <span class="process-approval" title="Shared review / approval">✓</span>
      <span class="process-node process-client-node"></span>
      <div class="process-cell client">
        <h3 class="process-cell-title">Client</h3>
        <p class="process-cell-summary">${s.clientSummary}</p>
      </div>
    </article>`).join('');

  const panels = stages.map((s, i) => `
    <div class="process-detail-panel${i === 0 ? ' is-active' : ''}" id="process-panel-${i}" role="tabpanel" aria-labelledby="process-tab-${i}">
      <div class="process-detail-card lotus">
        <div class="process-detail-head"><span>Lotus Team</span></div>
        <ul class="process-detail-list">${s.lotus.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="process-detail-card client">
        <div class="process-detail-head"><span>Client Team</span></div>
        <ul class="process-detail-list">${s.client.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`).join('');

  section.innerHTML = `
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="process-shell">
        <header class="process-intro">
          <a class="process-kicker process-kicker-link" href="/our-process">Our Process</a>
          <h2 class="process-title">Two teams. <span>One goal.</span></h2>
          <p class="process-deck">We work with your team at every stage — defining the problem, shaping the solution, validating progress, and launching together. Collaboration is part of the workflow, not something added at the end.</p>
        </header>

        <div class="process-board">
          <div class="process-stage-tabs" role="tablist" aria-label="Lotus project stages">${tabs}</div>
          <div class="process-lanes">
            <aside class="process-team-labels" aria-hidden="true">
              <div class="process-team lotus"><span class="process-team-icon">L</span><strong>Lotus Team</strong></div>
              <div class="process-team client"><span class="process-team-icon">C</span><strong>Client Team</strong></div>
            </aside>
            <div class="process-columns">${columns}</div>
          </div>
          <div class="process-details">${panels}</div>
        </div>

        <div class="process-footer">
          <div>
            <strong>Agreement & roadmap → shared decisions → success together.</strong>
            <p>A successful launch is the beginning of the partnership, not the end of it.</p>
          </div>
          <a href="/our-process">Explore our process →</a>
        </div>
      </div>
    </div>`;

  const tabEls = [...section.querySelectorAll('.process-stage-tab')];
  const colEls = [...section.querySelectorAll('.process-stage-col')];
  const panelEls = [...section.querySelectorAll('.process-detail-panel')];

  function activate(index, focusTab = false) {
    tabEls.forEach((el, i) => el.setAttribute('aria-selected', i === index ? 'true' : 'false'));
    colEls.forEach((el, i) => el.classList.toggle('is-active', i === index));
    panelEls.forEach((el, i) => el.classList.toggle('is-active', i === index));
    if (focusTab && tabEls[index]) tabEls[index].focus();
  }

  tabEls.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(i));
    tab.addEventListener('mouseenter', () => activate(i));
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const next = e.key === 'ArrowRight' ? (i + 1) % stages.length : (i - 1 + stages.length) % stages.length;
        activate(next, true);
      }
    });
  });

  colEls.forEach((col, i) => {
    col.addEventListener('click', () => activate(i));
    col.addEventListener('mouseenter', () => { if (window.matchMedia('(min-width: 1024px)').matches) activate(i); });
    col.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(i); } });
  });
})();
