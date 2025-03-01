import puppeteer, {Browser} from "puppeteer";
import {resolve} from "path";
import {unlink} from "node:fs/promises";

let browser: Browser;
async function generatePdf() {
    console.log('starting to open the browser');
    const filePath = resolve(process.cwd(), 'output', 'cv.pdf');

    await unlink(filePath);

    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:5173/',  { waitUntil: 'networkidle2' });

    await page.pdf({
        path: filePath,
        format: 'A4',
        printBackground: true,
        margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' } // שוליים מותאמים
    });

    console.log('done');
}

generatePdf()
    .catch((e) => {
        console.error('There are some errors:', e)
    })
    .finally(async () => {
        console.log('starting to close the browser');
        await browser.close()
        console.log('closed. Good day sir!');
    })