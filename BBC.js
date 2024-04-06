import puppeteer from "puppeteer";
import { data } from "./data/BBC/AI.js";
import fs from "fs";

import { sleep, replacePuntuationToUnderscore } from "./utils.js";

const baseUrl = "https://www.bbc.com";

const extractArticle = async (item) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('response', async response => {
        const status = response.status();
        if (status === 429) {
            console.log('Server returned 429 - Too Many Requests');
            await sleep(3000);
        }
    });
    await page.goto(baseUrl + item.path, { waitUntil: "networkidle2" }, { waitUntil: "domcontentloaded" }, { timeout: 180000 });
    const articleContent = await page.$$eval("main.app>section>p", (elements) => {
        return elements
            .slice(0, -1)
            .map((articleContent) => articleContent.textContent)
            .join("\n");
    });
    const fileName = `${item.firstPublishedAt}_${replacePuntuationToUnderscore(item.title)}.txt`;
    fs.writeFileSync(`./data/BBC/articles/${fileName}`, articleContent, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`File [${fileName}] has been written successfully.`);
    await browser.close();
    await sleep(1000);
};

(async () => {
    for (const item of data) {
        await extractArticle(item);
    }
})();
