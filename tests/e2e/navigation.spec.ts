import { test, expect } from '@playwright/test';

test.describe('Presentation Navigation', () => {
  test('should navigate through all tabs', async ({ page }) => {
    await page.goto('/');
    
    // Check initial content
    await expect(page.getByText('Divergência Entre Capacidade Técnica e Expressão de Mercado')).toBeVisible();

    // Navigate to Tese Estratégica
    await page.click('text=TESE ESTRATÉGICA');
    await expect(page.getByText('Lógica de Criação de Valor Através de Integração')).toBeVisible();

    // Navigate to Cenários de Modelo
    await page.click('text=CENÁRIOS DE MODELO');
    await expect(page.getByText('Não há "melhor". Há "apropriado"')).toBeVisible();

    // Navigate to Vantagens Sustentáveis
    await page.click('text=VANTAGENS SUSTENTÁVEIS');
    await expect(page.getByText('Barreiras defensáveis que impedem a replicação rápida.')).toBeVisible();

    // Navigate to Realização de Valor
    await page.click('text=REALIZAÇÃO DE VALOR');
    await expect(page.getByText('R$ 115 BILHÕES')).toBeVisible();
  });
});
