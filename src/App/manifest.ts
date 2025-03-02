import manifestFile from '../manifest.yaml?raw';
import yaml from 'yaml';
import z from 'zod';
import {zodSchema} from "../zodSchema.ts";

let manifest: unknown;

export type Manifest = z.infer<typeof zodSchema>;
export function getManifest(): Manifest {
    if (!manifest) {
        manifest = yaml.parse(manifestFile);
    }

    const parsedSchema = zodSchema.safeParse(manifest);

    if (!parsedSchema.success) {
        console.error(parsedSchema.error)
        throw new Error('There are some issues with the schema. Look at the console log.')
    }

    return parsedSchema.data;
}
