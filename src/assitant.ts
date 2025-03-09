import {verifyAiIsReady} from './assitant/verifyAiIsReady.ts';
import {reviewCV} from './assitant/reviewCV.ts';
import {updatePdf} from "./assitant/updatePdf.ts";
import {type ExecReturnType, manifestFilePath, processManifest, startVite, yesNoQuestion} from "./assitant/utils.ts";
import fsExtra from "fs-extra";
import yaml from "yaml";

let viteProcess: ExecReturnType;

const runWorkflow = async (): Promise<void> => {
    await verifyAiIsReady();

    viteProcess = await startVite();

    const originalManifest = processManifest()!;
    const reviewResult = await reviewCV(originalManifest);

    const reviewsManifest = {...originalManifest, information: {...originalManifest.information, about: reviewResult.reviewedAbout.reviewed}};

    fsExtra.writeFileSync(manifestFilePath, yaml.stringify(reviewsManifest));

    const applyChanges = await yesNoQuestion('Do you want to apply the changes to the file? You might need to refresh the page to see the changes');

    if (!applyChanges) {
        console.log('Reverting the changes');
        fsExtra.writeFileSync(manifestFilePath, yaml.stringify(originalManifest));
        return;
    }

    const shouldUpdatePDF = await yesNoQuestion('Would you like to generate a PDF?');

    if (shouldUpdatePDF) {
        await updatePdf();
    }

};

runWorkflow()
    .catch(e => console.error('❌ Workflow error:', e))
    .finally(() => {
        viteProcess.kill();
    });
