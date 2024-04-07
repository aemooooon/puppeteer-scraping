import puppeteer from "puppeteer";
import {data} from "./data/RNZ/AI.js";
import fs from "fs";

import { replacePuntuationToUnderscore, sleep, parseNZDate } from "./utils.js";

const baseUrl = "https://www.rnz.co.nz";

const extractArticle = async (item) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        baseUrl + item,
        { timeout: 60000 }
    );
    const articleContent = await page.$$eval("div.article__body>p", (elements) => {
        return elements
            .slice(1, -1) // remove the first and last paragraph
            .map((articleContent) => articleContent.textContent)
            .join("\n");
    });

    const firstPublishedAt = await page.$eval("div.c-dateblock>span", (element) => element.textContent);
    const pageUrl = page.url().split("/").pop();
    const fileName = `${parseNZDate(firstPublishedAt)}_${replacePuntuationToUnderscore(pageUrl)}.txt`;

    fs.writeFileSync(`./data/RNZ/articles/${fileName}`, articleContent, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`File [${fileName}] has been written successfully.`);
    await browser.close();
    await sleep(1000);
};

// collect urls
// Step 1
/*
const extractArticle = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { timeout: 60000 });
    const articleLinks = await page.$$eval("ul.c-stories__list>li>a", (elements) => {
        return elements.map((link) => link.attributes.href.value);
    });
    await browser.close();
    return articleLinks;
};

(async () => {
    let finalList = [];
    for (let i = 1; i < 33; i++) {
        const url = `https://www.rnz.co.nz/search/results?page=${i}&q=artificial+intelligence`;
        const singlePageList = await extractArticle(url);
        finalList.push(...singlePageList);
        console.log("Page:", i, " Current List:", singlePageList.length, " Total:", finalList.length);
        await sleep(2000);
    }
    fs.writeFileSync("./data/RNZ/AI.json", JSON.stringify(finalList), "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
})();
*/

// 获取文章内容
// Step 2
(async () => {
    for (const item of data) {
        await extractArticle(item);
    }
})();