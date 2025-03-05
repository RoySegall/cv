import path from 'path';
import prompts from 'prompts';
import { setUpEnv } from './assitant/setUpEnv';
import { reviewCV } from './assitant/reviewCV';
import { adjustCVToLinkedin } from './assitant/adjustCVToLinkedin.ts';

type ActionType = 'setUpEnv' | 'reviewCV' | 'adjustCVToLinkedin';

export const filesPath = {
    manifest: path.resolve('./manifest.yaml'),
    env: path.resolve('../.env'),
};

const actions: Record<ActionType, () => Promise<void>> = {
    setUpEnv,
    reviewCV,
    adjustCVToLinkedin,
};

const runWorkflow = async (): Promise<void> => {
    const answers = await prompts({
        type: 'select',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { title: 'Set up environment', value: 'setUpEnv' },
            { title: 'Review your CV', value: 'reviewCV' },
            { title: 'Adjust CV to LinkedIn', value: 'adjustCVToLinkedin' },
        ],
        initial: 0
    });

    const action = answers.action as ActionType;
    await actions[action]();
};

runWorkflow()
    .catch(e => console.error('❌ Workflow error:', e));
