import ollama from "ollama";
import {processManifest} from "./utils.ts";

const model = 'granite3.2-vision';
const role = 'user';

type LlamaResponse = {
    original: string;
    reviewed: string;
    insights: string;
}

export async function reviewAbout(text: string): Promise<LlamaResponse> {
    // todo: limit it to number amount of words. check which one.
    const content = `
    Take the next sentence and review it as if you were a human. Provide a final version of the sentence with a limit of 35 words and some insights. Provide the result in a json format with the next structure:
    {
        "original": "original sentence",
        "reviewed": "final version of the sentence",
        "insights": "the insights you have about the sentence"
    }

---
### 📄 **Text to Review:**
    ${text}
---
`;
    const response = await ollama.chat({
        model,
        messages: [
            { role, content },
        ]
    });

    return JSON.parse(response.message.content.replaceAll("\n", ''));
}

export async function reviewCV(manifest: ReturnType<typeof processManifest>) {
    const [reviewedAbout] = await Promise.all([
        reviewAbout(manifest!.information.about),
    ]);

    return {reviewedAbout}
}
