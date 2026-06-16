import { describe, it, expect } from 'vitest';
import { presentationData } from '../data/presentation';

describe('Presentation Data', () => {
  it('should have the correct tab keys', () => {
    expect(presentationData.contexto).toBeDefined();
    expect(presentationData.tese).toBeDefined();
    expect(presentationData.modelos).toBeDefined();
    expect(presentationData.vantagens).toBeDefined();
    expect(presentationData.valor).toBeDefined();
  });

  it('should have correct TAM value', () => {
    expect(presentationData.valor.tam.value).toBe('R$ 115 BILHÕES');
  });

  it('should have correct headline for situational context', () => {
    expect(presentationData.contexto.headline).toContain('Escala e Crescimento');
  });
});
