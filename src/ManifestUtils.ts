import z from "zod";
import yaml from "yaml";

let manifest: unknown;

const schemaUtils = z.object({
    direction: z.enum(["ltr", "rtl"]),
    color: z.enum(["purple", "blue", "red", "green", "orange", "black", "pink", "yellow"]),
    template: z.enum(["TwoLayout"]).default("TwoLayout"),
    cvFilename: z.string().default("cv.pdf"),
    information: z.object({
        avatar: z.string(),
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

export function handleManifest(manifestContent: string) {
    if (!manifest) {
        manifest = yaml.parse(manifestContent);
    }

    return schemaUtils.safeParse(manifest);
}
