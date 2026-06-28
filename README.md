# UX Portfolio

A password-protected UX portfolio built with Next.js and Tailwind CSS. Dark, editorial, minimal — designed to let the work speak.

## What this is

- A home page with a short intro and links to Work and About
- A Work index listing case studies
- Individual case study pages, each behind a password gate
- An About page
- Password protection via `sessionStorage` — correct entry persists for the browser session, no re-entry needed between pages

## Running locally

**1. Clone and install**

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

**2. Set up environment variables**

```bash
cp .env.example .env.local
```

Open `.env.local` and set `NEXT_PUBLIC_PORTFOLIO_PASSWORD` to whatever password you want visitors to use.

**3. Start the dev server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replacing placeholder content

All placeholder text is marked clearly. To update:

| What to change | Where |
|---|---|
| Your name, positioning statement, intro | `app/page.tsx` |
| Case study list and metadata | `lib/caseStudies.ts` |
| Case study body content | `app/work/[slug]/content/*.tsx` |
| Bio and contact email | `app/about/page.tsx` |
| Site metadata (`<title>`, description) | `app/layout.tsx` and each page's `metadata` export |

To add image screenshots, replace the `<ImagePlaceholder>` components with `<Image>` from `next/image`. Each placeholder has a descriptive `label` prop so you know exactly which screenshot goes where.

To add a new case study:
1. Add an entry to `lib/caseStudies.ts`
2. Create a content component in `app/work/[slug]/content/`
3. Register it in the `contentBySlug` map in `app/work/[slug]/page.tsx`

## Deploying

The easiest option is [Vercel](https://vercel.com). Connect your repository and add `NEXT_PUBLIC_PORTFOLIO_PASSWORD` as an environment variable in the Vercel project settings.

```bash
# Build locally to check for errors before deploying
npm run build
```

Any static hosting that supports Next.js will work: Vercel, Netlify, Railway, or self-hosted with `npm run start`.
