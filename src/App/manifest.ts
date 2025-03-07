import manifestFile from '../manifest.yaml?raw';
import z from 'zod';
import {handleManifest} from "../ManifestUtils.ts";

export type Manifest = ReturnType<typeof getManifest>;

export class InvalidManifestError extends Error {
    zodIssues: z.ZodIssue[];

    constructor(zodIssues: z.ZodIssue[]) {
        super('Invalid manifest file');
        this.zodIssues = zodIssues;
    }
}

export function getManifest() {
    const parsedManifest = handleManifest(manifestFile);

    if (!parsedManifest.success) {
        throw new InvalidManifestError(parsedManifest.error.errors);
    }

    return parsedManifest.data;
}
