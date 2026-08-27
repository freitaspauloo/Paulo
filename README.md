# Paulo Freitas — Portfolio

Personal portfolio for **Senior Product Designer — AI/SaaS** job applications.

**Target domain:** [paulofreitas.design](https://paulofreitas.design) (configure in Vercel after deploy)

Separate from [dudesign.us](https://dudesign.us) (studio pitch deck).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home — hero + 3 case studies |
| `/work` | Case index |
| `/work/aligned-ai` | Aligned AI case |
| `/work/frameline` | Frameline case |
| `/work/builtops` | BuiltOps / Losani enterprise case |
| `/about` | Bio + skills |
| `/resume` | Print-friendly résumé (Save as PDF) |

## Content

Case studies live in `src/content/cases/`. Edit typed TS files — no CMS.

## Deploy

1. Push to GitHub (`freitaspauloo/paulo-portfolio`)
2. Import in Vercel
3. Add domain `paulofreitas.design`
4. Update `src/content/site.ts` if URL changes

## Distribution

See [docs/distribution.md](docs/distribution.md) for LinkedIn headline, Featured pins, and application checklist.
