---
name: CV tailoring rules
description: What can and cannot be changed when tailoring Roy's CV for a job application
type: feedback
---

When tailoring the CV (src/manifest.yaml) for a job position:
- **Change:** Job bullet points (items under each company)
- **Change:** `color` field — set to the closest match to the target company's brand color. Available values: purple, blue, red, green, orange, black, pink, yellow
- **Change:** `cvFilename` — rename to reflect the target job/company for easy uploading
- **Adjust:** `about` section — lightly adjust based on the baseline about text (see below), tailored to the target role. Keep the spirit and tone, shift emphasis.
- **Lightly shape:** Volunteering descriptions
- **Adjust:** `information.position` — Use "Senior Software Developer" as default, or adjust to match the role (e.g., "Senior Frontend Developer"). Keep it honest.
- **Do NOT change:** Skills section

**Baseline about section (use as starting point):**
> Product-focused Full-Stack Developer with 15 years of experience turning complex systems into reliable products. Specializing in AI-native workflows and high-reliability systems, I value correctness and verification in every engineering decision. Known for high UI/UX sensitivity and improving developer adoption through internal tooling.

**After updating manifest, run:** `npm run generatePdf`
- If it fails with "The CV file should have only one page", shorten bullet points to fit one page. Reduce sentence length, remove less impactful bullets.

**Also generate a cover letter:**
1. Write `output/cover-letter.md` with a `# Company Role Title` header followed by the letter body
2. Run `npm run generateCoverLetter` — outputs a PDF named from the header
3. The letter should reference Clover-style themes: tie Roy's experience to the company's mission, emphasize relevant skills, keep it concise and authentic

**Why:** Roy wants the CV to stay truthful and consistent, with only the emphasis/framing of his work shifting per application. The color change makes the CV feel visually aligned with the target company. The filename change makes it easy to upload the right file.

**How to apply:** When given a job position URL, scan the company's website for their primary brand color, update color/cvFilename/about/bullets in manifest.yaml, run generatePdf, and iterate if it doesn't fit one page. Don't invent work he didn't do.
