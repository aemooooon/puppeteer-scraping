import puppeteer from "puppeteer";
import { data } from "./data/EpochTimes/AI.js";
import fs from "fs";
import axios from "axios";
import { fromUnixTime, format } from "date-fns";

import { sleep, replacePuntuationToUnderscore } from "./utils.js";

const baseUrl = "https://www.theepochtimes.com";

const extractArticle = async (item) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on("response", async (response) => {
        const status = response.status();
        if (status === 429) {
            console.log("Server returned 429 - Too Many Requests");
            await sleep(3000);
        }
    });
    await page.goto(
        baseUrl + item.uri,
        { waitUntil: "networkidle2" },
        { waitUntil: "domcontentloaded" },
        { timeout: 180000 }
    );
    const articleContent = await page.$$eval("div.post_content>p", (elements) => {
        return elements
            .slice(0, -1)
            .map((articleContent) => articleContent.textContent)
            .join("\n");
    });
    const fileName = `${format(fromUnixTime(item.publishedAt), 'yyyy-MM-dd')}_${replacePuntuationToUnderscore(item.title)}.txt`;
    fs.writeFileSync(`./data/EpochTimes/articles/${fileName}`, articleContent, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`File [${fileName}] has been written successfully.`);
    await browser.close();
    // await sleep(5000);
};

// 获取全部搜索结果分页列表
// Step 1
/*
async function getList(url) {
    let nextCursor = "";
    let results = [];
    try {
        const response = await axios.get(url);
        nextCursor = response.data.Cursor;
        console.log("Next cursor: ", nextCursor);
        const items = response.data.Items;
        for (const item of items) {
            const title = item._source.title;
            const publishedAt = item._source.publishedAt;
            const uri = item._source.uri;
            console.log({ title, publishedAt, uri })
            results.push({ title, publishedAt, uri });
        }
    } catch (error) {
        console.error(error);
    } finally {
        return { nextCursor, results };
    }
}

(async () => {
    const totalPage = 163;
    let totalResults = [];
    let cursor = "";
    for (let i = 0; i < totalPage; i++) {
        const url = `https://www.theepochtimes.com/gapi/posts/query?query=artificial%20intelligence&limit=20&cursor=${cursor}`;
        const r = await getList(url);
        cursor = r.nextCursor;
        totalResults.push(...r.results);
    }
    fs.writeFileSync("./data/EpochTimes/AI.json", JSON.stringify(totalResults), "utf-8", (err) => {
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