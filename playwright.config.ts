import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    timeout: 30000,
    expect: {
        timeout: 10000,
    },
    fullyParallel: true,
    reporter: 'html',
    use: {
        headless: true,
        browserName: 'chromium',
    },
});