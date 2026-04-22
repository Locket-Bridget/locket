# Locket Security

Personal brand protection for influencers. Built by Bridget & Skander.

**Live domain:** locketsecurity.com  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Stripe

---

## Getting it running locally (start here)

### Prerequisites

Make sure you have these installed before anything else:

- **Node.js** v18 or higher — check with `node -v`. Download at [nodejs.org](https://nodejs.org) if needed.
- **npm** — comes with Node, check with `npm -v`
- **Git** — check with `git --version`

### 1. Clone the repo

```bash
git clone https://github.com/Locket-Bridget/locket.git
cd locket
```

### 2. Install dependencies

```bash
npm install
```

This installs everything in `package.json` — Next.js, Tailwind, Framer Motion, Stripe, Calendly, etc. Takes about a minute.

### 3. Create the environment file

Create a file called `.env.local` in the root of the project (same level as `package.json`). Copy and paste this in:

```env
# Stripe — get these from Stripe Dashboard → Developers → API keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email capture — sign up free at formspree.io, create a form, paste the endpoint here
# Looks like: https://formspree.io/f/xyzabcde
# Leave blank and it still works in dev mode (just won't send real emails)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

> `.env.local` is gitignored so it will never be committed. Each developer needs their own copy.

### 4. Add the Modak font file

The LOCKET wordmark uses a local font. Check if this file exists:

```
public/fonts/Modak-Regular.ttf
```

If it's missing, download it free: [fonts.google.com/specimen/Modak](https://fonts.google.com/specimen/Modak) → Download family → copy `Modak-Regular.ttf` into `public/fonts/`.

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the Locket homepage.

> Hot reload is on by default. Any file you save will update the browser instantly without restarting.

---

## Project structure

```
src/app/
├── page.tsx                  # Homepage
├── about/page.tsx
├── services/
│   ├── page.tsx              # Services listing
│   ├── [slug]/page.tsx       # Individual service + Calendly booking
│   └── servicesData.ts       # Service names, slugs, Stripe price IDs
├── newsletter/page.tsx       # Threat intel feed
├── toolkit/page.tsx          # 5 cyber self-care tips
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MainLanding.tsx       # Hero section
│   ├── LandingPageSections.tsx  # Ticker + stat sections
│   ├── StatSection.tsx       # Individual stat card (polaroid + text)
│   ├── Testimonials.tsx      # Testimonials section on homepage
│   ├── ArticleCard.tsx       # Newsletter article cards
│   ├── Doodles.tsx           # SVG line-art doodles (toolkit)
│   └── BadgeIllustrations.tsx  # Retro badge SVGs
├── hooks/
│   └── useSubscribe.ts       # Email capture logic (used by newsletter + toolkit)
├── api/
│   └── create-checkout-session/  # Stripe checkout endpoint
├── layout.tsx                # Root layout — fonts, Navbar, Footer
└── globals.css               # Base styles, animations, font-face
```

---

## Key integrations

### Stripe
Checkout is wired up but commented out by default. To enable:
1. Add your real keys to `.env.local`
2. Update `servicesStripeData` in `src/app/services/servicesData.ts` with real Price IDs from Stripe Dashboard → Products
3. Uncomment the Stripe code block in `src/app/services/[slug]/page.tsx`

### Calendly
Booking popup lives on each service detail page. The URL is hardcoded to `https://calendly.com/admin-locketsecurity/30min`. Update it in `src/app/services/[slug]/page.tsx` line ~93 if it changes.

### Formspree (email capture)
Newsletter and toolkit subscribe forms both use the `useSubscribe` hook in `src/app/hooks/useSubscribe.ts`. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` to a real Formspree endpoint to start capturing emails. Without it, forms show success in dev but don't send anything.

---

## Font stack

| CSS variable | Font | Used for |
|---|---|---|
| `font-locket` / `font-locket-header` | Modak (local file) | LOCKET wordmark |
| `--font-pacifico` | Pacifico (Google) | Big display headings |
| `--font-fredoka` | Fredoka (Google) | UI labels, buttons, nav |
| `--font-caveat` | Caveat (Google) | Handwritten accents, taglines |
| `--font-playfair` | Playfair Display (Google) | Italic editorial moments |

Google Fonts load automatically via `next/font`. Only Modak needs a local file.

---

## Deploying to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import the repo
3. Add all env vars from `.env.local` in the Vercel dashboard under Project Settings → Environment Variables
4. Deploy — Vercel auto-detects Next.js, no config needed

Test the production build locally first:

```bash
npm run build
npm start
```

---

## Common issues

**`Module not found` errors after cloning** — run `npm install` again.

**Font not loading / LOCKET wordmark broken** — `public/fonts/Modak-Regular.ttf` is missing, see step 4 above.

**Stripe checkout not working** — make sure `.env.local` exists with real keys and the Stripe code is uncommented in the service detail page.

**Port 3000 already in use** — run `npm run dev -- -p 3001` to use a different port.
