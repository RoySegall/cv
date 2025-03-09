import path from "path";
import prompts from "prompts";
import fs from "fs-extra";
import {handleManifest} from "../ManifestUtils.ts";
import {exec} from "node:child_process";

export type ExecReturnType = ReturnType<typeof exec>;

export const manifestFilePath = path.resolve(process.cwd(), 'src', 'manifest.yaml');

export async function yesNoQuestion(message: string) {
    const {value} = await prompts({
        type: 'toggle',
        name: 'value',
        message,
        initial: true,
        active: 'yes',
        inactive: 'no'
    });

    return value;
}

export function processManifest() {
    const manifestFileExists = fs.pathExists(manifestFilePath);

    if (!manifestFileExists) {
        console.error('Could not load the manifest file or env file');
        return;
    }

    const CV = fs.readFileSync(manifestFilePath, 'utf8');
    const parsedManifest = handleManifest(CV);

    if (!parsedManifest.success) {
        console.error(parsedManifest.error);
        throw new Error('There are some issues with the schema. Look at the console log.');
    }

    return parsedManifest.data;
}

export async function startVite(): Promise<ExecReturnType> {
    return new Promise((resolve) => {
        const viteProcess = exec("npm run dev", () => {});

        setTimeout(() => {
            resolve(viteProcess);
        }, 3_000);
    });
}
