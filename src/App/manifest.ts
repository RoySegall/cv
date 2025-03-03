import manifestFile from '../manifest.yaml?raw';
import yaml from 'yaml';
import z from 'zod';
import {zodSchema} from "../zodSchema.ts";

let manifest: unknown;

export type Manifest = z.infer<typeof zodSchema>;
export class InvalidManifestError extends Error {
    zodIssues: z.ZodIssue[];

    constructor(zodIssues: z.ZodIssue[]) {
        super('Invalid manifest file');
        this.zodIssues = zodIssues;
    }
}

export function getManifest(): Manifest {
    if (!manifest) {
        manifest = yaml.parse(manifestFile);
    }

    const parsedSchema = zodSchema.safeParse(manifest);

    if (!parsedSchema.success) {
        throw new InvalidManifestError(parsedSchema.error.errors);
    }

    return parsedSchema.data;
}
