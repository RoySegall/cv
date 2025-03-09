import ollama from "ollama";
import {processManifest} from "./utils.ts";

const model = 'granite3.2-vision';
const role = 'user';

type LlamaResponse = {
    original: string;
    reviewed: string;
}

async function reviewAbout(about: string): Promise<LlamaResponse> {
    const content = `
    Take the next sentence and review it as if you were a human. Provide a final version of the sentence. Provide the result in a json format with the next structure:
    {
        "original": "original sentence",
        "reviewed": "final version of the sentence"
    }

---
### 📄 **CV Text to Review:**
    ${about}
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
    console.table(reviewedAbout.reviewed);
}
