import {Given, When, Then, After, Before, setDefaultTimeout, setWorldConstructor} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import {CustomWorld} from "../cucumber.conf";

setDefaultTimeout(10000)
setWorldConstructor(CustomWorld);

Before({ timeout: 60 * 1000 }, async function() {
    await this.openPage('http://localhost:3000/');
});


Given('the exchange rate is initialized to {float}', async function (initialRate: number) {
    await this.page.goto('http://localhost:3000/');

    const exchangeRateElement = await this.page.waitForSelector('[data-testid="exchange-rate"]');
    const exchangeRateText = await exchangeRateElement.textContent();

    expect(exchangeRateText).toBe(initialRate.toFixed(2));


});

When('I wait {int} seconds', async function(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
});

Then('the exchange rate should randomly increase or decrease by 0.05', async function () {

    const rateElement = await this.page.getByTestId('exchange-rate');
    const rateText = await rateElement.textContent();
    const newRate = parseFloat(rateText || '');

    expect(newRate).not.toBe(1.1);
    expect(Math.abs(newRate - 1.1)).toBeLessThanOrEqual(0.05);
});

After(async function () {
    await this.closeBrowser();
});
