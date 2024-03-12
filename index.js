import puppeteer from "puppeteer"; // 导入 Puppeteer 库，用于进行网页爬取和操作
import fs from "fs"; // 导入 fs 模块，用于文件操作

(async () => { // 使用异步函数表达式定义一个立即调用的异步函数

    // 启动一个浏览器实例
    const browser = await puppeteer.launch();

    // 创建一个新的页面实例
    const page = await browser.newPage();

    // 设置要爬取的网页地址
    const url = "https://ucdh.github.io/scraping-garden-party/";

    // 访问指定网页
    await page.goto(url);

    // 使用 page.evaluate() 方法在页面上下文中执行 JavaScript 代码，获取所有文章链接
    const hrefs = await page.evaluate(() => {
        const baseUrl = "https://ucdh.github.io"; // 基础网址
        const links = document.querySelectorAll("section#page-content ul li a"); // 获取所有文章链接元素
        return Array.from(links).map((link) => baseUrl + link.getAttribute("href")); // 返回所有链接的完整 URL
    });

    // 遍历所有文章链接
    for (const href of hrefs) {
        // 访问当前文章链接
        await page.goto(href);

        // 使用 page.evaluate() 方法在页面上下文中执行 JavaScript 代码，获取文章内容
        const articleContent = await page.evaluate(() => {
            const contentElement = document.querySelectorAll("section#page-content p"); // 获取文章内容元素
            return Array.from(contentElement)
                .map((articleContent) => articleContent.textContent) // 提取元素文本内容
                .join("\n"); // 将文本内容拼接成一个字符串
        });

        // 提取文件名，并将其用作保存文件的文件名
        const fileName = href.split("/").pop().replace(".html", "");

        // 将文章内容写入到文件中
        fs.writeFileSync(`./data/${fileName}.txt`, articleContent, "utf-8", (err) => {
            if (err) { // 如果写入文件出错
                console.log(err); // 输出错误信息到控制台
            }
        });
    }

    // 关闭浏览器实例
    await browser.close();
})();
