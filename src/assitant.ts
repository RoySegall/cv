import {verifyAiIsReady} from './assitant/verifyAiIsReady.ts';
import {reviewCV} from './assitant/reviewCV.ts';
import {adjustCVToLinkedin} from "./assitant/adjustCVToLinkedin.ts";
import {updatePdf} from "./assitant/updatePdf.ts";
import {processManifest, yesNoQuestion} from "./assitant/utils.ts";

const runWorkflow = async (): Promise<void> => {
    await verifyAiIsReady();

    const originalManifest = processManifest();

    await reviewCV(originalManifest);

    const applyChanges = await yesNoQuestion('Do you want to apply the changes to the file?');

    if (!applyChanges) {
        console.log('Reverting the changes');
        return;
    }

    const adjustToLinkedin = await yesNoQuestion('Do you want to adjust the CV to a LinkedIn job posting?');

    if (adjustToLinkedin) {
        await adjustCVToLinkedin();
    }

    const shouldUpdatePDF = await yesNoQuestion('Would you like to generate a PDF?');

    if (shouldUpdatePDF) {
        await updatePdf();
    }
};

runWorkflow()
    .catch(e => console.error('❌ Workflow error:', e));
