import fs from "fs-extra";
import dotenv from "dotenv";
import {filesPath} from "../assitant.ts";
import OpenAI from "openai";

export async function reviewCV() {
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

    const openai = new OpenAI({apiKey: AI_PLATFORM_TOKEN});

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "Write a haiku about recursion in programming.",
            },
        ],
        store: true,
    });


    console.log(completion.choices[0].message);
}
