import ollama from "ollama";

export async function verifyAiIsReady() {
    try {
        const list = await ollama.list();

        const model = 'granite3.2-vision';
        const modelExists = list.models.find(({name}) => name.includes(model))

        if (!modelExists) {
            console.log(`We could not find the ${model} model. Pulling it`);
            await ollama.pull({model})
        }
    } catch {
        throw new Error('Seems we cannot get list of models from Ollama. Please make sure the server is running and the models are available');
    }
}
