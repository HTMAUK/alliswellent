# CLAUDE.md — All is Well Entertainment Website

This file auto-loads at the start of every session. Read it before doing anything.

---

## ⚠️ CORRECT FOLDER

**Source of truth: `~/Desktop/alliswellent`** (this folder)  
`~/Desktop/alliswellent-export` is a stale August 2025 Replit-era export — do not use it.

---

## THE PROJECT

**All is Well Entertainment** — company website at **alliswellent.com**. Emmy award-winning video production company founded by Hayden Mauk. 25+ years of storytelling for national television, brands, and non-profits. Production in all 50 states.

**Status:** LIVE at alliswellent.com  
**Version:** v1.0.0 (March 2026)  
**Type:** Marketing/portfolio site — static SSG, no database

---

## TECH STACK

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, SSG) |
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Email | Resend |
| Validation | Zod |
| Sitemap | next-sitemap |
| Deployment | Vercel (standalone output) |

---

## PAGES

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats strip, services preview, featured work, CTA |
| `/about` | About All is Well Entertainment |
| `/services` | Full services list |
| `/work` | Portfolio with category filter (all / commercial / documentary / nonprofit) |
| `/team` | Team overview |
| `/team/[slug]` | Individual team member pages (dynamic) |
| `/contact` | Contact form |
| `/api/contact` | Contact form API route (Resend) |

---

## FOLDER STRUCTURE

```
alliswellent/                        ← Desktop (source of truth)
├── CLAUDE.md                        ← This file
├── next.config.js                   ← Next.js config (standalone output)
├── next-sitemap.config.js           ← Sitemap config → alliswellent.com
├── tailwind.config.ts               ← Tailwind config
├── package.json                     ← Dependencies
├── tsconfig.json
│
├── src/
│   ├── app/                         ← Next.js App Router pages
│   │   ├── page.tsx                 ← Home page
│   │   ├── layout.tsx               ← Root layout
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── work/page.tsx
│   │   ├── team/[slug]/             ← Dynamic team member pages
│   │   ├── contact/page.tsx
│   │   └── api/contact/             ← Resend contact form API
│   │
│   ├── components/                  ← Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── PortfolioFilter.tsx
│   │   ├── ContactForm.tsx
│   │   ├── YouTubeEmbed.tsx
│   │   ├── JsonLd.tsx               ← Structured data (VideoProductionCompany)
│   │   └── Img.tsx
│   │
│   ├── data/                        ← Static content (edit these to update site)
│   │   ├── services.ts              ← Service offerings
│   │   ├── portfolio.ts             ← Portfolio items + categories
│   │   └── team.ts                  ← Team members (Maureen + Sam bios are TODO)
│   │
│   ├── lib/
│   │   ├── resend.ts                ← Resend email client
│   │   └── schemas.ts               ← Zod validation schemas
│   │
│   └── styles/globals.css
│
└── public/                          ← Static assets
    └── images/
        ├── work/                    ← Portfolio thumbnails
        └── team/                    ← Team headshots
```

---

## SERVICES

1. **Commercial Production** — Full creative development, broadcast-ready quality, ROI-focused
2. **Documentary Production** — Cinematic storytelling, all 50 states experience
3. **Corporate Video** — Training, culture showcases, executive messaging
4. **Non-Profit** — Mission-driven storytelling, fundraising videos, impact stories
5. **Our Food Legacy** *(coming soon)* — Heirloom family recipe films, revenue share model

---

## PORTFOLIO CREDITS

| Project | Network | Category |
|---------|---------|----------|
| Fresh, Fried & Crispy | Netflix | Documentary |
| American Ninja Warrior | NBC | Documentary |
| What's Eating America | MSNBC | Documentary |
| Family Dinner | Magnolia Channel | Documentary |
| Hardcore Carnivore | Outdoor Channel | Documentary |
| Feral with Chef Yia Vang | Outdoor Channel | Documentary |
| America's Most Musical Family | Nickelodeon | Commercial |
| Que Delicioso | Roku | Documentary |
| Felicia's Donation Closet | Non-Profit | Non-Profit |
| Beyond Concrete | Beyond Concrete | Commercial |

---

## TEAM

- **Hayden Mauk** — Founder, Producer & Director (bio + credits complete)
- **Maureen Mauk** — Producer (bio IS live on site; NOT yet in `team.ts` — see below)
- **Sam Johnson** — Director of Photography (TODO: bio and credits)
- **Teresa Sullivan** — Screenwriter/Script (live on site; completely MISSING from `team.ts`)

**Maureen Mauk bio (from live site):** Started at Fox Broadcasting Standards & Practices — negotiated with Gordon Ramsay, Simon Cowell, Fox Animation re: FCC regulations and V-chip ratings. After a decade at Fox, moved to Mattel children's programming — oversaw regulatory needs for Hot Wheels, DC Superheroes, Monster High, Barbie. Currently finishing a PhD at UW-Madison in Communications (media policy, parental control tech, children's media content). IMDB: https://www.imdb.com/name/nm2267369/

**Teresa Sullivan bio (from live site):** Screenwriter based in Los Angeles. Samuel Goldwyn Award winner for drama pilot "DoubleBlind" (UCLA MFA Screenwriting). Credits include "Heyday of the Insensitive Bastards" (Netflix, produced by James Franco). Also optioned "The Stewardess" (comedy feature), "The Dodger" (baseball/Vietnam feature), and pitched a drama pilot to CBS.

---

## ENVIRONMENT VARIABLES

| Variable | Value |
|----------|-------|
| `RESEND_API_KEY` | Resend API key for contact form |
| `SITE_URL` | `https://alliswellent.com` |

---

## CONTACT INFO (in codebase)

- **Email:** hayden.mauk@alliswellent.com
- **Phone:** +1-323-205-6447
- **LinkedIn:** https://www.linkedin.com/in/haydenmauk/
- **IMDB:** https://www.imdb.com/name/nm1342953/
- **Twitter/X:** https://x.com/alliswellent
- **Vimeo:** https://vimeo.com/haydenmauk

---

## RUNNING LOCALLY

```bash
cd alliswellent
npm install
npm run dev      # http://localhost:3000
npm run build    # Build + generate sitemap
```

---

## ACTIVE TODOs

- ⚠️ **CODEBASE OUT OF SYNC WITH LIVE SITE** — the live site has content not in the local repo:
  - Add **Teresa Sullivan** to `src/data/team.ts` (screenwriter, see team section above)
  - Update **Maureen Mauk** bio in `src/data/team.ts` (see team section above)
  - Live site uses `/{slug}` URL paths — local codebase uses `/team/{slug}` — verify which is correct
  - Live meta description: "Emmy-winning video production company crafting cinematic, story-driven films for brands, non-profits, and TV." — differs from local `layout.tsx`
- Sam Johnson: add real bio and credits to `src/data/team.ts`
- "Our Food Legacy" service: marked `comingSoon: true` — needs launch plan
- Portfolio thumbnails: confirm all `/images/work/*.jpg` files exist in public/

---

## SKILLS TO USE THIS SESSION

| Task | Skill |
|------|-------|
| Write/edit site copy | `/article-writing` or `/humanizer` |
| SEO improvements | `/ai-seo` |
| Add a new page or component | `/frontend-design` or `/ui-ux-pro-max` |
| Marketing/positioning | `/product-marketing` or `/content-strategy` |
| Social content | `/social` or `/content-engine` |

---

## KEY PRINCIPLES

- Desktop folder = source of truth. `~/Desktop/alliswellent` is the correct folder.
- No database — all content lives in `src/data/*.ts` files. Edit those to update the site.
- Sitemap and robots.txt are auto-generated at build time via next-sitemap.
- Contact form sends via Resend — test with a real API key in `.env.local`.
- Site is live. Test changes locally before pushing.

---

*Last updated: July 15, 2026*
