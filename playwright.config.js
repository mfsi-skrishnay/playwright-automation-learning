import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //globalTimeout: 3600000, 

  use: {
    headless: false,
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
          launchOptions: {
          args: ['--start-maximized']
        }
      }
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari']
    //   }
    // },

    // {
    //   name: 'iPhone-15',
    //   use: {
    //     ...devices['iPhone 15']
    //   }
    // }
  ],

  reporter: 'html'
});