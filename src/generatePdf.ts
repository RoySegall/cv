import puppeteer, {Browser} from "puppeteer";
import {resolve} from "path";
import {readFileSync, unlink, pathExists} from "fs-extra";
import {handleManifest} from "./ManifestUtils.ts";

let browser: Browser;
async function generatePdf() {
    const manifestContent = readFileSync(resolve(process.cwd(), 'src', 'manifest.yaml'), 'utf-8');
    const parsedManifest = handleManifest(manifestContent);

    if (!parsedManifest.success) {
        console.error(parsedManifest.error);
        throw new Error('There are some issues with the schema. Look at the console log.');
    }

    console.log('starting to open the browser');
    const filePath = resolve(process.cwd(), 'output', parsedManifest.data.cvFilename);

    const fileExists = await pathExists(filePath);

    if (fileExists) {
        // Delete the current file so we'll have a fresh one.
        await unlink(filePath);
    }

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
