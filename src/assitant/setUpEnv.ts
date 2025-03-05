import prompts from "prompts";

export async function setUpEnv() {
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

    console.log(AI_PLATFORM, AI_PLATFORM_MODEL, AI_PLATFORM_TOKEN);
}
