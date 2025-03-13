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
    const content = `
    Take the next sentence and fix any grammar issues and wr. Provide a final version of the sentence from first person pov and some insights. Provide the result in a json format with the next structure:
    {
        "original": "original sentence",
        "reviewed": "final version of the sentence",
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

    // what to check: Check the languages, check the skills, check the experience and return the insights.
    const [reviewedAbout] = await Promise.all([
        reviewAbout(manifest!.information.about),
    ]);

    return {reviewedAbout}
}
