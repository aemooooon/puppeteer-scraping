import puppeteer from "puppeteer";
import fs from "fs";
import { replacePuntuationToUnderscore, sleep } from "./utils.js";
import {data} from "./data/Conversation/AI.js";

// Step 1 - Get all the article links from the first page
/*
(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            defaultViewport: null,
        });
        const page = await browser.newPage();
        await page.goto("https://theconversation.com/nz/topics/artificial-intelligence-ai-90?page=1");
        let totalArticleLinks = [];
        const nextPageSelector = "nav.pagination>span>a>i.icon-caret-right";
        while (await page.$(nextPageSelector)) {
            const articleListLinks = await page.evaluate(() => {
                let articleLinks = [];
                document.querySelectorAll("article>header>div>h2>a").forEach((articleLink) => {
                    articleLinks.push(articleLink.href);
                });
                return articleLinks;
            });
            totalArticleLinks.push(...articleListLinks);
            console.log(totalArticleLinks.length);
            await page.click(nextPageSelector);
            await sleep(2000);
        }
        fs.writeFileSync(`./data/Conversation/AI.json`, JSON.stringify(totalArticleLinks), "utf-8", (err) => {
            if (err) {
                console.log(err);
            }
        });
        console.log("Done")
        await browser.close();
    } catch (error) {
        console.log(error);
    }
})();
*/

// Step 2 - Get every single article content
const extractArticle = async (url) => {
    const browser = await puppeteer.launch({
        // headless: false,
        // ignoreHTTPSErrors: true,
        // defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(
        url,
        { timeout: 60000 }
    );
    const articleContent = await page.$$eval("div.content-body>p", (elements) => {
        return elements
            .map((articleContent) => articleContent.textContent.trim().replace("Read more:", ""))
            .join("\n");
    });

    const firstPublishedAt = await page.$eval("div.timestamps>time", (element) => element.getAttribute("content"));
    const pageUrl = page.url().split("/").pop();
    const fileName = `${firstPublishedAt.substring(0, 10)}_${replacePuntuationToUnderscore(pageUrl)}.txt`;

    fs.writeFileSync(`./data/Conversation/articles/${fileName}`, articleContent, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`File [${fileName}] has been written successfully.`);
    await browser.close();
    await sleep(3000);
};

(async () => {
    for (const url of data) {
        await extractArticle(url);
    }
})();