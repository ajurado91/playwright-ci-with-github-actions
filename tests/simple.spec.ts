import { test, expect } from '@playwright/test';

test('POC - verificar título de Playwright', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
  console.log('✅ Test pasó correctamente!');
});

test('POC - verificar botón Get Started', async ({ page }) => {
  await page.goto('/');
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();
  console.log('✅ Botón encontrado!');
});
