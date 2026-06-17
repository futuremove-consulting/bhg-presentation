import { describe, it, expect } from 'vitest';
import { presentationData } from '../data/presentation';

describe('Presentation Data', () => {
  it('should have all 5 tab keys defined', () => {
    expect(presentationData.contexto).toBeDefined();
    expect(presentationData.posicionamento).toBeDefined();
    expect(presentationData.diagnostico).toBeDefined();
    expect(presentationData.tese).toBeDefined();
    expect(presentationData.modelos).toBeDefined();
  });

  it('should have correct headline for situational context', () => {
    expect(presentationData.contexto.headline).toContain('Escala e Crescimento');
  });

  it('should have 3 business models', () => {
    expect(presentationData.modelos.models).toHaveLength(3);
  });

  it('should have SWOT data in posicionamento', () => {
    expect(presentationData.posicionamento.swot.strengths.length).toBeGreaterThan(0);
    expect(presentationData.posicionamento.swot.weaknesses.length).toBeGreaterThan(0);
  });
});
