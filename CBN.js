import puppeteer from "puppeteer";
import fs from "fs";
import {data} from "./data/CBN/AI.js";
import { format } from "date-fns";

import {replacePuntuationToUnderscore, sleep} from "./utils.js";

// Get all article links
/*
const extractArticleLink = async (url) =>{
    const browser = await puppeteer.launch({timeout: 60000});
    const page = await browser.newPage();
    await page.goto(url);
    const articleLinks = await page.$$eval("h3>a.heading__link", (elements) => {
        return elements.map((link) => link.attributes.href.value);
    });
    await browser.close();
    return articleLinks;
}

(async () => {
    let finalList = [];
    let baseUrl = `https://www2.cbn.com/search/artificial%20intelligence?search=artificial%20intelligence&f%5B0%5D=by_type%3Anews&content_type=news&page=`;
    for (let i = 0; i < 172; i++) {
        const url = baseUrl + i;
        const singleList = await extractArticleLink(url);
        finalList.push(...singleList);
        console.log("Page:", i, " List:", singleList.length, " Total:", finalList.length);
        new Promise((resolve) => setTimeout(resolve, 2000));
    }
    fs.writeFileSync("./data/CBN/AI.json", JSON.stringify(finalList), "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`The number of ${finalList.length} links has been written.`);
})()
*/

const baseUrl = "https://www2.cbn.com";

const extractArticle = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('response', async response => {
        const status = response.status();
        if (status === 429) {
            console.log('Server returned 429 - Too Many Requests');
            await sleep(3000);
        }
    });
    await page.goto(baseUrl + url, { timeout: 60000 });
    const articleContent = await page.$$eval("div.container-small>div.field--type-text-with-summary>p", (elements) => {
        return elements
            .slice(0, -1)
            .map((articleContent) => articleContent.textContent)
            .join("\n");
    });
    const firstPublishedAt = await page.$eval("div.cbn-article__date", (element) => element.textContent);
    const pageUrl = page.url().split("/").pop();
    const fileName = `${format(new Date(firstPublishedAt), 'yyyy-MM-dd')}_${replacePuntuationToUnderscore(pageUrl)}.txt`;

    fs.writeFileSync(`./data/CBN/articles/${fileName}`, articleContent, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`File [${fileName}] has been written successfully.`);
    await browser.close();
    await sleep(1000);
};

(async () => {
    for (const url of data) {
        await extractArticle(url);
    }
})();
