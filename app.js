import {
  renderContextoTab,
  renderSegmentosTab,
  renderPosicionamentoTab,
  renderDiagnosticoTab,
  renderTeseTab,
  renderModelosTab,
} from './components.js';

const tabIds = ['contexto', 'segmentos', 'posicionamento', 'diagnostico', 'tese', 'modelos'];

const renderers = {
  contexto: renderContextoTab,
  segmentos: renderSegmentosTab,
  posicionamento: renderPosicionamentoTab,
  diagnostico: renderDiagnosticoTab,
  tese: renderTeseTab,
  modelos: renderModelosTab,
};

function getTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  return tabIds.includes(hash) ? hash : 'contexto';
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('active');
    el.setAttribute('aria-selected', 'false');
  });

  const contentEl = document.getElementById(`tab-${tabId}`);
  const btnEl = document.querySelector(`[data-tab="${tabId}"]`);
  if (contentEl && btnEl) {
    contentEl.classList.add('active');
    btnEl.classList.add('active');
    btnEl.setAttribute('aria-selected', 'true');
  }
}

function renderTab(tabId) {
  const contentEl = document.getElementById(`tab-${tabId}`);
  if (!contentEl) return;
  const renderFn = renderers[tabId];
  if (!renderFn) return;
  contentEl.innerHTML = renderFn();
}

function init() {
  const currentTab = getTabFromHash();
  tabIds.forEach(id => renderTab(id));
  switchTab(currentTab);

  window.addEventListener('hashchange', () => {
    const tab = getTabFromHash();
    switchTab(tab);
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      window.location.hash = tab;
    });
  });

  const tablist = document.querySelector('[role="tablist"]');
  tablist.addEventListener('keydown', (e) => {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const currentIdx = tabs.indexOf(document.activeElement);
    let nextIdx;
    if (e.key === 'ArrowRight') { nextIdx = (currentIdx + 1) % tabs.length; }
    else if (e.key === 'ArrowLeft') { nextIdx = (currentIdx - 1 + tabs.length) % tabs.length; }
    else if (e.key === 'Home') { nextIdx = 0; }
    else if (e.key === 'End') { nextIdx = tabs.length - 1; }
    else return;
    e.preventDefault();
    tabs[nextIdx].focus();
    tabs[nextIdx].click();
  });
}

document.addEventListener('DOMContentLoaded', init);
