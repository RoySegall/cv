export async function updatePdf() {
    console.log('update PDF');
    // Because the generatePdf.ts has a self so we can just run it as a npm script. Import the file will the same thing.
    await import('../generatePdf.ts');
}
