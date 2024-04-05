import puppeteer from "puppeteer"; 
import fs from "fs"; 

let scrape = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // const url = `https://edition.cnn.com/search?q=welfare+benefit+covid+19&from=${i*size}&size=${size}&page=${i}&sort=relevance&types=article&section=`;

    await page.goto('https://edition.cnn.com/search?q=welfare+benefit+covid+19&from=0&size=10&page=1&sort=relevance&types=article&section=');

    var results = []; // variable to hold collection of all book titles and prices
    var lastPageNumber = 50; // this is hardcoded last catalogue page, you can set it dunamically if you wish
    // defined simple loop to iterate over number of catalogue pages
    for (let index = 0; index < lastPageNumber; index++) {
        // wait 1 sec for page load
        await page.waitFor(1000);
        // call and wait extractedEvaluateCall and concatenate results every iteration.
        // You can use results.push, but will get collection of collections at the end of iteration
        results = results.concat(await extractedEvaluateCall(page));
        // this is where next button on page clicked to jump to another page
        if (index != lastPageNumber - 1) {
            // no next button on last page
            await page.click('/html/body/div[1]/section[3]/section[1]/div/section/section/div/div[2]/div/div[4]/div/div[3]');
        }
    }

    browser.close();
    return results;
};

async function extractedEvaluateCall(page) {
    // just extracted same exact logic in separate function
    // this function should use async keyword in order to work and take page as argument
    return page.evaluate(() => {
        let data = [];
        let elements = document.querySelectorAll('.container_list-images-with-description__date');

        for (var element of elements) {
            let title = element.innerText;
            let price = element.childNodes[7].children[0].innerText;

            data.push({ title, price });
        }

        return data;
    });
}

scrape().then((value) => {
    console.log(value);
    console.log('Collection length: ' + value.length);
    console.log(value[0]);
    console.log(value[value.length - 1]);
});
