import puppeteer, {Browser} from "puppeteer";
import {resolve} from "path";
import fs from "fs-extra";
import {type ExecReturnType, processManifest, startVite} from "./assitant/utils.ts";

let browser: Browser;
let viteProcess: ExecReturnType;

export async function generatePdf() {
    const result = processManifest();

    if (!result) {
        return;
    }

    viteProcess = await startVite();
    console.log('Preparing your new PDF CV file');

    const filePath = resolve(process.cwd(), 'output', result.cvFilename);
    await fs.pathExists(filePath).then(() => fs.unlink(filePath)).catch(() => {});

    browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/',  { waitUntil: 'networkidle2' });
    await page.waitForSelector('header', {timeout: 1_000});
    await page.pdf({
        path: filePath,
        format: 'A4',
        printBackground: true,
        margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' } // שוליים מותאמים
    });

    console.log('closed. Good day sir!');
}

generatePdf()
    .catch((e) => {
        console.error('There are some errors:', e)
    })
    .finally(async () => {
        browser?.close();
        viteProcess?.kill();
    })
