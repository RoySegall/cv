import dotenv from 'dotenv';
import fs from 'fs-extra';
import path from 'path';
import prompts from 'prompts';

type ActionType = 'setUpEnv' | 'quickLook' | 'adjustToLinkedIn';

const filesPath = {
    manifest: path.resolve('./manifest.yaml'),
    env: path.resolve('../.env'),
};

const setUpEnv = async () => {
    console.log('🔧 Setting up the environment...');

    const { AI_PLATFORM, AI_PLATFORM_MODEL, AI_PLATFORM_TOKEN } = await prompts([
        {
            type: 'select',
            choices: [
                { title: 'OpenAI (Chat GPT)', value: 'OPENAI' },
            ],
            name: 'AI_PLATFORM',
            message: 'Select the AI platform to assist you with the CV. Remember - you need to have a token',
        },
        {
            type: 'select',
            choices: [
                { title: "GPT-1 (2018)", value: "GPT1" },
                { title: "GPT-2 (2019)", value: "GPT2" },
                { title: "GPT-3 (2020)", value: "GPT3" },
                { title: "GPT-3.5 (2021)", value: "GPT3.5" },
                { title: "GPT-4 (2023)", value: "GPT4" },
                { title: "GPT-4o (2024)", value: "GPT4O" },
                { title: "GPT-4o Mini (2024)", value: "GPT4O_MINI" },
                { title: "GPT-4.5 (2025)", value: "GPT4.5" }
            ],
            name: 'AI_PLATFORM_MODEL',
            message: 'Select the model to use:',
        },
        {
            type: 'text',
            name: 'AI_PLATFORM_TOKEN',
            message: 'Enter the AI platform token:',
        },
    ]);

    console.log(AI_PLATFORM, AI_PLATFORM_MODEL, AI_PLATFORM_TOKEN)

}

const quickLookCV = async () => {
    const [manifestFileExists, envFileExists] = await Promise.all([
        fs.pathExists(filesPath.manifest),
        fs.pathExists(filesPath.env),
    ]);

    if (!manifestFileExists || !envFileExists) {
        console.error('Could not load the manifest file or env file');
        return;
    }

    dotenv.config({ path: filesPath.env });

    const {AI_PLATFORM, AI_PLATFORM_MODEL, AI_PLATFORM_TOKEN} = process.env;

    if (!AI_PLATFORM || !AI_PLATFORM_MODEL || !AI_PLATFORM_TOKEN) {
        console.error('Missing AI platform configuration in the .env file');
    }

    console.log('lets look on the CV via gpt', {AI_PLATFORM, AI_PLATFORM_MODEL, AI_PLATFORM_TOKEN});
};

const adjustCVToLinkedIn = async () => {
    const { linkedinURL } = await prompts({
        type: 'text',
        name: 'linkedinURL',
        message: 'Paste the LinkedIn job URL:',
        validate: (value: string) =>
            value.startsWith('https://www.linkedin.com/jobs/') ? true : 'Please enter a valid LinkedIn job URL.'
    });

    console.log(`🔄 Adjusting CV based on job posting: ${linkedinURL}`);

    // TODO: Implement LinkedIn job scraping / API processing logic
    console.log('🚀 This feature is under development! (Integration with LLM or scraping needed)');
};

const actions: Record<ActionType, () => Promise<void>> = {
    setUpEnv: setUpEnv,
    quickLook: quickLookCV,
    adjustToLinkedIn: adjustCVToLinkedIn,
};

const runWorkflow = async (): Promise<void> => {
    const answers = await prompts({
        type: 'select',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { title: 'Set up environment', value: 'setUpEnv' },
            { title: 'Quick Look at CV', value: 'quickLook' },
            { title: 'Adjust CV to LinkedIn', value: 'adjustToLinkedIn' },
        ],
        initial: 0
    });

    const action = answers.action as ActionType;
    await actions[action]();
};

runWorkflow()
    .catch(e => console.error('❌ Workflow error:', e));
