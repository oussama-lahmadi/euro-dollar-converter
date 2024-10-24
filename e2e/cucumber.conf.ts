import { World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';

export class CustomWorld extends World {
    page: Page | undefined;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async openPage(url: string) {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(url);
    }

    async closeBrowser() {
        await this.page?.context().browser()?.close();
    }
}
/*setDefaultTimeout(6000)
setWorldConstructor(CustomWorld);*/