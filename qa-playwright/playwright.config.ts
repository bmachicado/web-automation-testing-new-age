import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  retries: 1,
  workers: 4,
  reporter: [
    ['html', { open: 'never' }],
    ['line']
  ],
  use: {
    baseURL: process.env.BASE_URL || "https://playwright.dev",
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    storageState: undefined//process.env.SETUP ? undefined : './storage/auth.json'
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ]
});
