---
name: tailor-cv
description: Tailor CV and generate cover letter for a specific job posting. Pass the job listing URL or paste the job description.
argument-hint: [job-url-or-description]
disable-model-invocation: true
---

Tailor Roy's CV and generate a cover letter for this job: $ARGUMENTS

## Reference files

- **Deep knowledge of Roy's work:** `.claude/cv_company_deep_knowledge.md` — Read this first. It contains what Roy actually did at each company, tailoring angles per job type, and cross-cutting career themes.
- **Manifest file:** `src/manifest.yaml` — The CV source file you will edit.
- **Schema:** `src/schema.json` — Available color values and field constraints.

## Step 1: Research the target company

Fetch the company's website and gather:
- **Brand color** — Map to the closest available value: purple, blue, red, green, orange, black, pink, yellow
- **What the company does** — Products, mission, target market
- **Tech stack** — If visible on the site or job posting
- **Culture and values** — How they describe themselves, what they care about

Use this context to inform bullet rewrites and the cover letter. The more you understand the company, the better the tailoring.

## Step 2: Analyze the job description

If a URL was provided, fetch it and extract the job requirements. Identify:
- Key skills and technologies they want
- The type of engineer they're looking for (product-minded, systems, frontend-heavy, etc.)
- Cultural signals (fast-paced, collaborative, quality-focused, etc.)

## Step 3: Read reference material

Read `.claude/cv_company_deep_knowledge.md` to understand what Roy actually did at each company and which tailoring angles apply to this role.

## Step 4: Update the manifest

Edit `src/manifest.yaml` with these changes:

**Change:**
- `color` — Set to the closest match to the target company's brand color
- `cvFilename` — Set to `Roy Segall CV - [Company] [Role].pdf`
- `about` — Lightly adjust the baseline below to shift emphasis toward the target role. Keep the spirit and tone.
- Job bullet `items` — Rewrite to emphasize the most relevant aspects of Roy's actual experience for this specific role

**Lightly shape:**
- Volunteering descriptions — minor adjustments if relevant

**Also adjust:**
- `information.position` — Set to "Senior Software Developer" (Roy's general title) or adjust to match the role if appropriate (e.g., "Senior Frontend Developer" for a frontend role). Keep it honest.

**Do NOT change:**
- Skills section
- Company names, dates, or structure

**Baseline about section (always start from this):**
> Product-focused Full-Stack Developer with 15 years of experience turning complex systems into reliable products. Specializing in AI-native workflows and high-reliability systems, I value correctness and verification in every engineering decision. Known for high UI/UX sensitivity and improving developer adoption through internal tooling.

**Rules:**
- Do NOT invent work Roy didn't do. Only reframe and emphasize real experience.
- Use language that mirrors the job posting where it honestly applies.
- Keep bullets concise — the CV must fit on ONE page.

## Step 5: Generate the CV PDF

Run `npm run generatePdf`.

If it fails with "The CV file should have only one page":
1. Shorten bullet points — reduce sentence length, cut less impactful bullets
2. Run `npm run generatePdf` again
3. Repeat until it fits

## Step 6: Generate the cover letter

Write `output/cover-letter.md` with this structure:
- First line: `# [Company] [Role Title]` (used as the PDF filename)
- Body: A concise, authentic cover letter that:
  - Opens with genuine interest in the company's mission
  - Maps Roy's most relevant experience to what they're looking for
  - Highlights 2-3 specific achievements that directly match the role
  - Closes with energy and a connection to the company's goals
  - Signs off with: Roy Segall / roy@segall.io / https://segall.io

Then run `npm run generateCoverLetter`.

## Step 7: Open for review

Open both PDFs so Roy can review them:
```bash
open "output/Roy Segall CV - [Company] [Role].pdf"
open "output/Cover Letter - [Company] [Role].pdf"
```

## Step 8: Summary

Tell the user what files were generated and summarize the key changes made to the CV and cover letter.
