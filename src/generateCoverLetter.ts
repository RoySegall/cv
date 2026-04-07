import puppeteer, {Browser} from "puppeteer";
import {resolve} from "path";
import fs from "fs-extra";

let browser: Browser;

export async function generateCoverLetter() {
    const mdPath = resolve(process.cwd(), 'output', 'cover-letter.md');

    if (!await fs.pathExists(mdPath)) {
        throw new Error(`No cover letter found at ${mdPath}`);
    }

    const markdown = await fs.readFile(mdPath, 'utf-8');
    const pdfFilename = markdown.match(/^#\s+(.+)$/m)?.[1]
        ? `Cover Letter - ${markdown.match(/^#\s+(.+)$/m)![1]}.pdf`
        : 'Cover Letter.pdf';

    const lines = markdown.split('\n').filter(l => !l.startsWith('# '));
    const html = lines.map(line => {
        if (line.trim() === '') return '<br/>';
        return `<p>${line}</p>`;
    }).join('\n');

    const fullHtml = `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            max-width: 700px;
            margin: 0 auto;
            padding: 40px;
        }
        p {
            margin: 0 0 8px 0;
        }
        br {
            display: block;
            content: "";
            margin: 8px 0;
        }
    </style>
</head>
<body>${html}</body>
</html>`;

    const filePath = resolve(process.cwd(), 'output', pdfFilename);

    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(fullHtml, { waitUntil: 'networkidle2' });

    await page.pdf({
        path: filePath,
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' }
    });

    console.log(`Cover letter generated: ${pdfFilename}`);
}

generateCoverLetter()
    .catch((e) => {
        console.error('Error generating cover letter:', e);
    })
    .finally(async () => {
        browser?.close();
    });
