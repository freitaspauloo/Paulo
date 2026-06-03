# Paulo — shadcn/ui starter

A clean starting point built with **Next.js**, **Tailwind CSS**, and **[shadcn/ui](https://ui.shadcn.com)**. Made for designing and editing without fuss.

---

## 🚀 Put it online (Vercel)

You only have to do this once. After that, every change you save here updates your live site automatically.

1. Go to **[vercel.com/new](https://vercel.com/new)** and log in.
2. Click **Import** next to this GitHub repository (`freitaspauloo/paulo`).
3. Leave every setting as-is and click **Deploy**.
4. After ~30 seconds you'll get your live link, e.g. `https://paulo.vercel.app`.

> Tip: Vercel auto-detects Next.js, so you don't need to touch any of the build settings.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/freitaspauloo/paulo)

---

## ✏️ What to edit

- **`src/app/page.tsx`** — your home page. Change the text and buttons here.
- **`src/app/globals.css`** — your theme colors. The values near the top (under `:root`) control the look. Tweak these to restyle the whole site at once.
- **`src/components/ui/`** — the shadcn components (like `button.tsx`) live here.

## ➕ Add more shadcn components

Browse components at **[ui.shadcn.com](https://ui.shadcn.com/docs/components)**, then add any with one command. For example, to add a card and an input:

```bash
pnpm dlx shadcn@latest add card input
```

They'll drop into `src/components/ui/` ready to use.

## 💻 Preview it on your computer (optional)

```bash
pnpm install
pnpm dev
```

Then open **http://localhost:3000** in your browser. The page reloads as you save changes.

---

Built with [Next.js](https://nextjs.org) · [Tailwind CSS](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com)
