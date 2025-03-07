import ollama from "ollama";
import {processManifest} from "./utils.ts";

export async function reviewCV(manifest: ReturnType<typeof processManifest>) {
    const prompt = `
    Take the next sentence and review it as if you were a human. Provide a final version of the sentence. Provide the result in a json format with the next structure:
    {
        "original": "original sentence",
        "reviewed": "final version of the sentence"
    }

---
### 📄 **CV Text to Review:**
    ${manifest!.information.about}
---
`;

    const response = await ollama.chat({
        model: "granite3.2-vision",
        messages: [
            { role: "user", content: prompt },
        ]
    });

    console.log(response.message.content);
}
