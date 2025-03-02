import manifestFile from '../manifest.yaml?raw';
import yaml from 'yaml';
import z from 'zod';

let manifest: unknown;

export const zodSchema = z.object({
    direction: z.enum(["ltr", "rtl"]),
    color: z.enum(["purple", "blue", "red", "green", "orange", "black"]),
    information: z.object({
        name: z.string(),
        position: z.string(),
        contact: z.object({
            email: z.string().email(),
            phone: z.string(),
            website: z.string().url(),
        }),
        about: z.string(),
    }),
    jobs: z.array(
        z.object({
            company: z.string(),
            position: z.string(),
            start: z.string(),
            end: z.string(),
            items: z.array(z.string()),
        })
    ),
    languages: z.array(
        z.object({
            name: z.string(),
            level: z.string(),
            rate: z.number().int().min(1).max(5),
        })
    ),
    skills: z.array(z.string()),
    volunteering: z.array(
        z.object({
            company: z.string(),
            position: z.string(),
            start: z.string(),
            end: z.string(),
            paragraph: z.string(),
        })
    ),
});

export function getManifest() {
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
