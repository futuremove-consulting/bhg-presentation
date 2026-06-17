import { data } from './data.js';

export function renderContextoTab() {
  const d = data.contexto;
  return `
    <section class="section hero-section">
      <div class="section-label centered">Panorama Geral</div>
      <h1 class="hero-title">${d.headline}</h1>
      <p class="hero-subtitle">${d.subheadline}</p>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Indicadores</div>
        <h2 class="section-title">${d.marketSize.title}</h2>
      </div>
      <div class="grid-4">
        ${d.marketSize.items.map(item => `
          <div class="card card-bordered p-8">
            <div class="card-metric">
              <span class="metric-label">${item.label}</span>
              <span class="metric-value">${item.value}</span>
              <span class="metric-context">${item.context}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Dinâmica de Crescimento</div>
        <h2 class="section-title">${d.growthDynamics.title}</h2>
      </div>
      <div class="chart-container">
        ${renderGrowthChart(d.growthDynamics.items)}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Competição</div>
        <h2 class="section-title">${d.competitiveMap.title}</h2>
        <p class="section-desc">${d.competitiveMap.description}</p>
      </div>
      <div class="grid-2 gap-12">
        <div>${renderExpandedMatrix()}</div>
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="subsection-title">Insights de Posicionamento</h3>
            <p class="text-gray text-pretty">${d.competitiveMap.insight}</p>
          </div>
          <div class="player-cards">
            ${d.competitiveMap.players.map(p => `
              <div class="card card-bordered p-5">
                <div class="player-header">
                  <span class="player-name">${p.name}</span>
                  <span class="player-core">${p.core}</span>
                </div>
                <div class="player-details">
                  <span class="detail-label">Força: <span class="detail-value">${p.strength}</span></span>
                  <span class="detail-label">Gap: <span class="detail-value">${p.gap}</span></span>
                  <span class="detail-risk">Risco: ${p.risk}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section pb-24">
      <div class="section-header centered">
        <div class="section-label centered">Janela de Oportunidade</div>
        <h2 class="section-title">${d.triggers.title}</h2>
        <p class="section-desc">${d.triggers.description}</p>
      </div>
      <div class="grid-3">
        ${d.triggers.items.map(t => `
          <div class="card card-bordered p-8">
            <div class="trigger-header">
              <h3 class="trigger-title">${t.title}</h3>
              <p class="trigger-implication">${t.implication}</p>
            </div>
            <ul class="trigger-details">
              ${t.details.map(det => `<li>${det}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <div class="window-box">
        <h4 class="window-label">Janela de Oportunidade</h4>
        <p class="window-text">${d.triggers.window}</p>
      </div>
    </section>
  `;
}

export function renderPosicionamentoTab() {
  const d = data.posicionamento;
  return `
    <section class="section hero-section">
      <div class="section-label centered">Análise Setorial</div>
      <h1 class="hero-title">${d.headline}</h1>
      <p class="hero-subtitle">${d.subheadline}</p>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Análise SWOT</div>
        <h2 class="section-title">${d.swot.title || 'Dinâmica Setorial'}</h2>
      </div>
      <div class="max-w-5xl mx-auto">
        ${renderSWOT(d.swot)}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Lacunas</div>
        <h2 class="section-title">${d.gaps.title}</h2>
      </div>
      <div class="grid-2">
        ${d.gaps.items.map(g => `
          <div class="card card-elevated p-8">
            <h3 class="card-title">${g.title}</h3>
            <p class="card-desc">${g.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section pb-24">
      <div class="section-header centered">
        <div class="section-label centered">Panorama</div>
        <h2 class="section-title">Panorama Competitivo</h2>
      </div>
      <div class="max-w-7xl mx-auto">
        ${renderLandscape()}
      </div>
    </section>
  `;
}

export function renderDiagnosticoTab() {
  const d = data.diagnostico;
  return `
    <section class="section hero-section">
      <div class="section-label centered">Diagnóstico</div>
      <h1 class="hero-title">${d.headline}</h1>
      <p class="hero-subtitle">${d.subheadline}</p>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Posição Atual</div>
        <h2 class="section-title">${d.matrix.title}</h2>
        <p class="section-desc">${d.matrix.description}</p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>BHG Atual</th>
                <th>BHG Potencial</th>
                <th>Gap a Fechar</th>
              </tr>
            </thead>
            <tbody>
              ${d.matrix.dimensions.map(dim => `
                <tr>
                  <td class="cell-label">${dim.label}</td>
                  <td class="cell-value">${dim.value}</td>
                  <td class="cell-value">${dim.status === 'exists' ? 'Mantido' : 'Expandido'}</td>
                  <td>
                    ${dim.status === 'critical' ? `<span class="badge badge-critical">CRÍTICO</span>${dim.gap ? `<br><span class="badge-gap">${dim.gap}</span>` : ''}`
                    : dim.status === 'missing' ? '<span class="badge badge-warning">NECESSÁRIO</span>'
                    : '<span class="badge badge-ok">OK</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section pb-24">
      <div class="section-header centered">
        <div class="section-label centered">Capacidade Interna</div>
        <h2 class="section-title">${d.swot.title || 'Análise de Capacidade Interna'}</h2>
      </div>
      <div class="max-w-5xl mx-auto">
        ${renderSWOT(d.swot)}
      </div>
    </section>
  `;
}

export function renderTeseTab() {
  const d = data.tese;
  return `
    <section class="section hero-section">
      <div class="section-label centered">Tese</div>
      <h1 class="hero-title">${d.headline}</h1>
      <p class="hero-subtitle">${d.subheadline}</p>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Interseção Estratégica</div>
        <h2 class="section-title">${d.synergy.title}</h2>
        <p class="section-desc">${d.synergy.description}</p>
      </div>
      <div class="venn-section">
        <div class="venn-container">
          ${renderVennDiagram()}
        </div>
        <div class="grid-2">
          <div class="card card-bordered p-8">
            <h4 class="card-highlight">${d.synergy.intersection.label}</h4>
            <p class="card-text">${d.synergy.intersection.description}</p>
          </div>
          <div class="card card-bordered p-8">
            <h4 class="card-highlight blue">Exemplo de Orquestração</h4>
            <div class="steps-list">
              ${d.synergy.example.steps.map((s, i) => `<p class="step-item">${i + 1}. ${s}</p>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Mudança de Modelo</div>
        <h2 class="section-title">${d.repositioning.title}</h2>
        <p class="section-desc">${d.repositioning.description}</p>
      </div>
      <div class="repositioning-section">
        <div class="repositioning-row">
          <div class="repositioning-from">
            <span class="repositioning-label">DE</span>
            <span class="repositioning-value strikethrough">${d.repositioning.from}</span>
          </div>
          <div class="repositioning-arrow">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
          <div class="repositioning-to">
            <span class="repositioning-label">PARA</span>
            <span class="repositioning-value highlight">${d.repositioning.to}</span>
          </div>
        </div>
        <p class="value-prop">"${d.repositioning.valueProp}"</p>
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section pb-24">
      <div class="section-header centered">
        <div class="section-label centered">Jornada</div>
        <h2 class="section-title">${d.valueChain.title}</h2>
        <p class="section-desc">${d.valueChain.description}</p>
      </div>
      <div class="grid-4">
        ${d.valueChain.stages.map((s, i) => `
          <div class="card card-elevated stage-card">
            <div class="stage-number">Etapa ${i + 1}</div>
            <h4 class="stage-label">${s.label}</h4>
            <div class="stage-body">
              <div class="stage-input">
                <span class="section-label tiny">Input</span>
                <p class="text-sm">${s.input}</p>
              </div>
              <div class="stage-revenues">
                <div class="revenue-row"><span>RECEITA 1</span><span class="text-white">${s.revenue1}</span></div>
                <div class="revenue-row"><span>RECEITA 2</span><span class="text-white">${s.revenue2}</span></div>
                <div class="revenue-row"><span>RECEITA 3</span><span class="text-white">${s.revenue3}</span></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

export function renderModelosTab() {
  const d = data.modelos;
  return `
    <section class="section hero-section">
      <div class="section-label centered">Cenários</div>
      <h1 class="hero-title">${d.headline}</h1>
      <p class="hero-subtitle">${d.subheadline}</p>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="section-header centered">
        <div class="section-label centered">Arquétipos Estratégicos</div>
        <h2 class="section-title">Três Arquétipos Estratégicos</h2>
      </div>
      <div class="grid-3">
        ${d.models.map(m => `
          <div class="card card-elevated model-card">
            <div class="model-header">
              <h3 class="model-name">${m.name}</h3>
              <p class="model-subtitle">${m.subtitle}</p>
            </div>
            <div class="model-metrics">
              <div class="metric-row"><span class="metric-key">Foco</span><span class="metric-val">${m.focus}</span></div>
              <div class="metric-row"><span class="metric-key">Ticket</span><span class="metric-val">${m.ticket}</span></div>
              <div class="metric-row"><span class="metric-key">Volume</span><span class="metric-val">${m.volume}</span></div>
              <div class="metric-row"><span class="metric-key">Receita</span><span class="metric-val">${m.revenue}</span></div>
              <div class="metric-row"><span class="metric-key">Margem</span><span class="metric-val">${m.margin}</span></div>
              <div class="metric-row"><span class="metric-key">CAC</span><span class="metric-val">${m.cac}</span></div>
              <div class="metric-row"><span class="metric-key">Valuation</span><span class="metric-val bold">${m.valuation}</span></div>
            </div>
            <div class="model-risk">
              <div class="metric-row"><span class="metric-key">Risco</span><span class="metric-val red">${m.risk}</span></div>
            </div>
            <div class="model-choices">
              <h4 class="choices-title">Quando escolher:</h4>
              ${m.whenToChoose.map(c => `
                <p class="choice-item ${c.type}">${c.type === 'pros' ? '✓' : '✗'} ${c.text}</p>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="section">
      <div class="max-w-6xl mx-auto">
        ${renderModelsTable(d.models)}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section">
      <div class="max-w-5xl mx-auto">
        ${renderValuationChart(d.models)}
      </div>
    </section>
    <div class="section-divider"></div>

    <section class="section pb-24">
      <div class="conclusion-box">
        <h3 class="conclusion-title">${d.conclusion}</h3>
        <p class="conclusion-text">Cada caminho traz trade-offs de risco, retorno e escala. A escolha deve alinhar sua visão de longo prazo com a capacidade de execução atual.</p>
      </div>
    </section>
  `;
}

function renderSWOT(swot) {
  const quadrants = [
    { key: 'strengths', label: 'Forças', items: swot.strengths, border: 'swot-s', icon: 'check' },
    { key: 'weaknesses', label: 'Fraquezas', items: swot.weaknesses, border: 'swot-w', icon: 'x' },
    { key: 'opportunities', label: 'Oportunidades', items: swot.opportunities, border: 'swot-o', icon: 'arrow' },
    { key: 'threats', label: 'Ameaças', items: swot.threats, border: 'swot-t', icon: 'warn' },
  ];
  return `
    <div class="swot-grid">
      ${quadrants.map(q => {
        const itemsHtml = q.items.map(item => {
          if (typeof item === 'string') {
            return `<li class="swot-item"><div class="swot-item-header"><span>${item}</span></div></li>`;
          }
          const badge = item.priority === 'critica'
            ? '<span class="priority-badge priority-critica">CRÍTICA</span>'
            : item.priority === 'importante'
            ? '<span class="priority-badge priority-importante">IMPORTANTE</span>'
            : '<span class="priority-badge priority-media">MÉDIA</span>';
          return `
            <li class="swot-item">
              <div class="swot-item-header">
                <span>${item.text}</span>
                ${badge}
              </div>
              ${item.leverage ? `<span class="swot-leverage">${item.leverage}</span>` : ''}
            </li>`;
        }).join('');
        return `
          <div class="swot-quadrant ${q.border}">
            <div class="swot-header">
              <span class="swot-icon swot-${q.key}"></span>
              <span class="swot-label">${q.label}</span>
            </div>
            <ul class="swot-list">${itemsHtml}</ul>
          </div>`;
      }).join('')}
    </div>
  `;
}

function renderGrowthChart(items) {
  const maxVal = Math.max(...items.map(i => {
    const cleaned = i.growth.replace(/[^0-9.,]/g, '').replace(',', '.');
    const num = parseFloat(cleaned);
    if (isNaN(num)) return 0;
    if (i.growth.includes('B')) return num * 1000;
    if (i.growth.includes('%')) return num;
    return num;
  }));
  const barWidth = Math.min(60, (800 / items.length) - 20);
  const chartH = 220;
  const chartW = 800;
  const padL = 10, padR = 20, padB = 60, padT = 10;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const yScale = (v) => {
    const cleaned = v.replace(/[^0-9.,]/g, '').replace(',', '.');
    const num = parseFloat(cleaned);
    if (isNaN(num)) return 0;
    if (v.includes('B')) return (num * 1000 / maxVal) * plotH;
    if (v.includes('%')) return (num / maxVal) * plotH;
    return (num / maxVal) * plotH;
  };

  const bars = items.map((item, i) => {
    const h = yScale(item.growth);
    const x = padL + (i * (plotW / items.length)) + ((plotW / items.length) - barWidth) / 2;
    const y = chartH - padB - h;
    const label = item.segment.split('(')[0].trim();
    return `
      <rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="4" fill="#6856f5" opacity="0.9">
        <title>${label}: ${item.growth}</title>
      </rect>
      <text x="${x + barWidth / 2}" y="${chartH - padB + 15}" text-anchor="middle" fill="#9ca3af" font-size="11" transform="rotate(-20, ${x + barWidth / 2}, ${chartH - padB + 15})">${label}</text>
    `;
  }).join('');

  const labels = items.map((item, i) => {
    const x = padL + (i * (plotW / items.length)) + ((plotW / items.length) - barWidth) / 2 + barWidth / 2;
    return `<text x="${x}" y="${chartH - padB - 5}" text-anchor="middle" fill="#9ca3af" font-size="10">${item.growth}</text>`;
  }).join('');

  return `
    <svg viewBox="0 0 ${chartW} ${chartH}" class="svg-chart" style="max-width:100%;height:auto;" role="img" aria-label="Gráfico de barras dos segmentos de mercado com crescimento de cada um">
      <line x1="${padL}" y1="${chartH - padB}" x2="${chartW - padR}" y2="${chartH - padB}" stroke="#374151" stroke-width="1"/>
      ${bars}
      ${labels}
    </svg>
  `;
}

function renderValuationChart(models) {
  const vals = models.map(m => {
    const cleaned = m.valuation.replace(/[R$\s]/g, '');
    const parts = cleaned.split('-');
    const parseVal = (s) => {
      const n = parseFloat(s.replace(/[^0-9.]/g, ''));
      return s.includes('B') ? n * 1000 : n;
    };
    const min = parts.length >= 2 ? parseVal(parts[0]) : parseVal(parts[0]) * 0.8;
    const max = parts.length >= 2 ? parseVal(parts[1]) : parseVal(parts[0]);
    const mid = (min + max) / 2;
    return { name: m.name.split(' ').slice(0, 2).join(' '), min, max, mid };
  });
  const allVals = vals.flatMap(v => [v.min, v.max, v.mid]);
  const maxVal = Math.max(...allVals);
  const chartH = 220;
  const chartW = 600;
  const padL = 40, padR = 20, padB = 40, padT = 10;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const groupW = plotW / vals.length;
  const barW = groupW * 0.2;
  const colors = ['#6856f5', '#3b82f6', '#10b981'];
  const bars = vals.map((v, i) => {
    const gx = padL + i * groupW;
    const makeBar = (val, color, idx) => {
      const h = (val / maxVal) * plotH;
      const x = gx + idx * barW + (groupW - 3 * barW) / 2;
      const y = chartH - padB - h;
      return `<rect x="${x}" y="${y}" width="${barW - 2}" height="${h}" fill="${color}" rx="2"><title>R$ ${val}M</title></rect>`;
    };
    return [makeBar(v.min, colors[0], 0), makeBar(v.max, colors[1], 1), makeBar(v.mid, colors[2], 2)].join('');
  }).join('');
  const labels = vals.map((v, i) => {
    const gx = padL + i * groupW;
    return `<text x="${gx + groupW / 2}" y="${chartH - 5}" text-anchor="middle" fill="#9ca3af" font-size="12">${v.name}</text>`;
  }).join('');

  return `
    <div class="space-y-4">
      <h3 class="section-title text-center">Comparativo de Valuation (5 anos)</h3>
      <div class="chart-box">
        <svg viewBox="0 0 ${chartW} ${chartH}" class="svg-chart" style="max-width:100%;height:auto;" role="img" aria-label="Comparativo de valuation entre os três modelos em 5 anos">
          <line x1="${padL}" y1="${chartH - padB}" x2="${chartW - padR}" y2="${chartH - padB}" stroke="#374151" stroke-width="1"/>
          <text x="${padL - 25}" y="${chartH - padB - 5}" text-anchor="middle" fill="#6b7280" font-size="10" transform="rotate(-90, ${padL - 25}, ${chartH - padB - 5})">R$</text>
          ${bars}
          ${labels}
          <g transform="translate(${chartW - padR - 120}, ${padT})">
            <rect x="0" y="0" width="10" height="10" fill="${colors[0]}" rx="2"/>
            <text x="14" y="9" fill="#9ca3af" font-size="10">Min</text>
            <rect x="45" y="0" width="10" height="10" fill="${colors[1]}" rx="2"/>
            <text x="59" y="9" fill="#9ca3af" font-size="10">Max</text>
            <rect x="90" y="0" width="10" height="10" fill="${colors[2]}" rx="2"/>
            <text x="104" y="9" fill="#9ca3af" font-size="10">Mid</text>
          </g>
        </svg>
        <div class="chart-legend">
          ${vals.map(v => `<span>${v.name}: ~R$ ${Math.round(v.mid)}M</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderModelsTable(models) {
  const rows = [
    { key: 'focus', label: 'Foco' },
    { key: 'ticket', label: 'Ticket' },
    { key: 'volume', label: 'Volume' },
    { key: 'revenue', label: 'Receita' },
    { key: 'margin', label: 'Margem' },
    { key: 'cac', label: 'CAC' },
    { key: 'valuation', label: 'Valuation (5y)' },
    { key: 'risk', label: 'Risco' },
  ];
  return `
    <div class="space-y-4">
      <h3 class="section-title text-center">Comparativo Direto dos Modelos</h3>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th></th>
              ${models.map(m => `<th><div class="model-th"><span class="model-th-name">${m.name}</span><span class="model-th-sub">${m.subtitle}</span></div></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                <td class="cell-label">${r.label}</td>
                ${models.map(m => {
                  const val = m[r.key];
                  return `<td class="${r.key === 'valuation' ? 'cell-value bold' : 'cell-value'}">${val}</td>`;
                }).join('')}
              </tr>
            `).join('')}
            <tr>
              <td class="cell-label">Descrição</td>
              ${models.map(m => `<td class="cell-desc">${m.description}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderLandscape() {
  const quadrants = [
    {
      id: 'q1', label: 'Líderes de Nicho', x: 'Alta Integração', y: 'Baixa Escala',
      color: 'border-purple', desc: 'Players com profunda especialização vertical, mas sem escala operacional.',
      players: [
        { name: 'BHG Atual', strength: 'Especialização 30y', gap: 'Sem plataforma digital' },
        { name: 'Pactum Consultoria', strength: 'Expertise reforma', gap: 'Sem financeiro' },
        { name: 'KPMG / Big Four', strength: 'Marca e alcance', gap: 'Sem operação financeira' },
        { name: 'JUSCREDI', strength: '13+ anos', gap: 'Sem tecnologia' },
      ],
    },
    {
      id: 'q2', label: 'Players Emergentes', x: 'Alta Integração', y: 'Alta Escala',
      color: 'border-emerald', desc: 'Players que combinam profundidade de serviço com capacidade de escala.',
      players: [
        { name: 'Precato', strength: 'R$ 1,5B intermediado', gap: 'Sem tributária integrada' },
        { name: 'Prêambulo Bank', strength: '1M+ advogados', gap: 'Sem financeira/tributária' },
        { name: 'GCB / PeerBR', strength: 'R$ 3B crédito', gap: 'Sem jurídico próprio' },
        { name: 'PrecPago', strength: 'R$ 500M + Mercantil', gap: 'Sem tributária' },
      ],
    },
    {
      id: 'q3', label: 'Inovadores Disruptivos', x: 'Baixa Integração', y: 'Baixa Escala',
      color: 'border-amber', desc: 'Novos entrantes com modelos inovadores, ainda em escala inicial.',
      players: [
        { name: 'Litipay', strength: 'Ticket R$ 2K+', gap: 'Capital limitado' },
        { name: 'Preks', strength: 'Inovação tecnológica', gap: 'Sem escala' },
        { name: 'Acura Capital', strength: 'Maior tokenização AL', gap: 'Sem originação' },
        { name: 'ComPre', strength: 'Modelo leve', gap: 'Sem posição de risco' },
      ],
    },
    {
      id: 'q4', label: 'Gigantes de Escala', x: 'Baixa Integração', y: 'Alta Escala',
      color: 'border-blue', desc: 'Players com enorme base de clientes, mas sem penetração vertical no setor.',
      players: [
        { name: 'Nubank / Inter', strength: '100M+ clientes', gap: 'Sem especialização' },
        { name: 'XP Investimentos', strength: 'Distribuição massiva', gap: 'Sem originação própria' },
        { name: 'Bancos Tradicionais', strength: 'Capital ilimitado', gap: 'Sem velocidade' },
        { name: 'Mercado Pago', strength: '30M clientes', gap: 'Sem jurídico' },
      ],
    },
  ];

  return `
    <div class="landscape-grid">
      ${quadrants.map(q => `
        <div class="landscape-quadrant ${q.color}">
          <div class="landscape-header">
            <span class="landscape-title">${q.label}</span>
            <span class="landscape-pos">${q.x} · ${q.y}</span>
          </div>
          <p class="landscape-desc">${q.desc}</p>
          <div class="landscape-players">
            ${q.players.map(p => `
              <div class="landscape-player">
                <span class="lp-name">${p.name}</span>
                <span class="lp-stats">${p.strength} <span class="lp-sep">|</span> ${p.gap}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderExpandedMatrix() {
  const players = [
    { name: 'BHG Alvo', x: 85, y: 88, color: '#6856f5' },
    { name: 'Precato', x: 72, y: 65, color: '#0ea5e9' },
    { name: 'Prêambulo Bank', x: 68, y: 72, color: '#10b981' },
    { name: 'GCB / PeerBR', x: 82, y: 55, color: '#06b6d4' },
    { name: 'PrecPago', x: 58, y: 58, color: '#6366f1' },
    { name: 'BHG Atual', x: 18, y: 75, color: '#a78bfa' },
    { name: 'Pactum Consultoria', x: 12, y: 82, color: '#8b5cf6' },
    { name: 'KPMG / Big Four', x: 35, y: 68, color: '#71717a' },
    { name: 'JUSCREDI', x: 22, y: 55, color: '#78716c' },
    { name: 'XP Litigation', x: 78, y: 28, color: '#eab308' },
    { name: 'Nubank', x: 92, y: 12, color: '#ef4444' },
    { name: 'Inter', x: 85, y: 18, color: '#f43f5e' },
    { name: 'Bancos Trad.', x: 88, y: 35, color: '#737373' },
    { name: 'Mercado Pago', x: 82, y: 22, color: '#14b8a6' },
    { name: 'Litipay', x: 25, y: 22, color: '#2dd4bf' },
    { name: 'Preks', x: 18, y: 15, color: '#f59e0b' },
    { name: 'Acura Capital', x: 28, y: 42, color: '#a78bfa' },
    { name: 'ComPre', x: 12, y: 10, color: '#78716c' },
    { name: 'Ativos Prec.', x: 32, y: 35, color: '#3b82f6' },
    { name: 'Judit', x: 48, y: 20, color: '#60a5fa' },
  ];
  return renderMatriz(players, 'Escala Operacional →', 'Integração Vertical →');
}

function renderMatriz(players, xLabel, yLabel) {
  const dots = players.map(p => {
    return `<circle cx="${p.x}%" cy="${p.y}%" r="5" fill="${p.color}" stroke="rgba(255,255,255,0.15)" stroke-width="1" class="matrix-dot">
      <title>${p.name}</title>
    </circle>`;
  }).join('');
  const labels = players.map(p => {
    const xPos = p.x < 50 ? `left:${p.x + 1}%` : `right:${100 - p.x + 1}%`;
    return `<div class="matrix-label" style="${xPos};top:${p.y + 2}%" data-name="${p.name}">${p.name}</div>`;
  }).join('');

  return `
    <div class="matrix-wrapper">
      <h4 class="section-title text-center mb-2">Matriz de Posicionamento Estendida</h4>
      <p class="text-xs text-gray text-center mb-4">20 players mapeados por integração vertical e escala operacional</p>
      <div class="matrix-container">
        <div class="matrix-svg-wrapper">
          <svg viewBox="0 0 100 100" class="matrix-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50" x2="100" y2="50" stroke="#374151" stroke-width="0.3" stroke-dasharray="2,2"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="#374151" stroke-width="0.3" stroke-dasharray="2,2"/>
            <rect x="0" y="0" width="50" height="50" fill="none" stroke="#1f2937" stroke-width="0.3" stroke-dasharray="2,2"/>
            <rect x="50" y="0" width="50" height="50" fill="none" stroke="#1f2937" stroke-width="0.3" stroke-dasharray="2,2"/>
            <rect x="0" y="50" width="50" height="50" fill="none" stroke="#1f2937" stroke-width="0.3" stroke-dasharray="2,2"/>
            <rect x="50" y="50" width="50" height="50" fill="none" stroke="#1f2937" stroke-width="0.3" stroke-dasharray="2,2"/>
            ${dots}
          </svg>
          <div class="matrix-labels">${labels}</div>
        </div>
        <div class="matrix-axis-labels">
          <span class="axis-y">${yLabel}</span>
          <span class="axis-x">${xLabel}</span>
        </div>
        <div class="matrix-corner-labels">
          <span class="corner tl">Alta Integração<br/>Baixa Escala</span>
          <span class="corner tr">Alta Integração<br/>Alta Escala</span>
          <span class="corner bl">Baixa Integração<br/>Baixa Escala</span>
          <span class="corner br">Baixa Integração<br/>Alta Escala</span>
        </div>
      </div>
    </div>
  `;
}

function renderVennDiagram() {
  return `
    <svg viewBox="0 0 400 300" class="venn-svg" role="img" aria-label="Diagrama de Venn com três círculos sobrepostos: Banking, Tributária e Patrimônio, com interseção estratégica ao centro">
      <defs>
        <radialGradient id="v-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="v-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6856f5" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#6856f5" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="v-emerald" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="140" cy="130" r="100" fill="url(#v-blue)"/>
      <circle cx="260" cy="130" r="100" fill="url(#v-purple)"/>
      <circle cx="200" cy="200" r="100" fill="url(#v-emerald)"/>
      <text x="80" y="100" class="venn-text" fill="#60a5fa" font-size="14" font-weight="bold">BANKING</text>
      <text x="280" y="100" class="venn-text" fill="#8b83f5" font-size="14" font-weight="bold">TRIBUTÁRIA</text>
      <text x="170" y="260" class="venn-text" fill="#34d399" font-size="14" font-weight="bold">PATRIMÔNIO</text>
      <text x="200" y="160" class="venn-text" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">INTERSEÇÃO</text>
    </svg>
  `;
}
