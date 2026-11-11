# zakkmg.com

Zakk M.G.'s own site: one drafting sheet with six equal "details" (Music, Art,
Games, Words, Free tools, Elsewhere) and a title block in the corner. A violet
blueprint at night and violet ink on drafting vellum by day; it follows each
visitor's light/dark setting. Every word is in ZakkMG Hand, and the **Aa** button
switches to plain fonts (the browser remembers the choice).

Plain files. No build step, no framework, no server code, no cookies, no trackers.
The studio, the games and the free tools live on pheasantcouch.com; this sheet
points to them.

```
zakkmg-site/
├── README.md          this guide
├── wrangler.jsonc     tells Cloudflare which folder is the website
├── serve.bat          Windows: double-click to preview at http://localhost:8080
├── serve.sh / serve.py   Mac/Linux preview, and the server both use
└── site/              ← THE WEBSITE
    ├── index.html     the sheet. Every word on the site is in here.
    ├── 404.html       "Not on this sheet." for addresses that don't exist
    ├── css/style.css  colors and fonts at the top, layout below
    ├── js/site.js     the Aa button
    ├── favicon.svg, robots.txt, sitemap.xml
    └── assets/
        ├── fonts/     ZakkMG Hand + the plain set (Schibsted Grotesk, Martian Mono), with licenses
        └── og/og-zakkmg.jpg   the picture shown when someone shares the link
```

---

## Editing

Open `site/index.html` in Notepad (or anything). Each detail is a `<section class="detail">`
with a comment above it (`<!-- 01 MUSIC -->` and so on).

| To… | Do this |
| --- | --- |
| Add a link to a detail | copy one `<li>…</li>` line in its `links` list and change the address and words. `<small>` after the link is the little grey note. |
| Change a detail's words | the `<h2>` is the heading, `class="sub"` the line under it, the `<p>` the paragraph |
| Add a seventh detail | copy a whole `<section class="detail">…</section>`, give it a new `id`, number and heading, and add it to the top-bar menu and the `index` list in the hero. Six or nine fill the grid evenly. |
| Change the line under the name | `one guy, many drafts` in the hero |
| Change the tip link | the `tip` paragraph in Elsewhere |
| Update the title block | the `<footer class="titleblock">`. Bump **Rev** (A → B → C) when you change the sheet, like a real drawing. |
| Change the colors | the two `:root` blocks at the top of `css/style.css`: the first is day (vellum), the second is night (blueprint). `--violet` is the electric violet. |

After editing, also change `lastmod` in `site/sitemap.xml` to today's date so
search engines know to look again.

## Previewing on your PC

Double-click `site/index.html`, or for the real thing double-click `serve.bat`
(Windows) / run `./serve.sh` (Mac/Linux) and open http://localhost:8080.

---

## Putting it on zakkmg.com

Same setup as pheasantcouch.com: GitHub holds the files and Cloudflare publishes
them every time the repository changes. Free, HTTPS included, every version kept.

### 1. Move zakkmg.com's DNS from Squarespace to Cloudflare

1. **Cloudflare:** dashboard → **Add a domain** → `zakkmg.com` → the **Free** plan.
   Cloudflare scans the existing records, then shows **two nameservers** (names like
   `xxx.ns.cloudflare.com`). Copy both. If the scan finds Squarespace's parking
   records (A records for `@` and a `www` CNAME), delete them; step 3 replaces them.
2. **Squarespace:** Domains → zakkmg.com → **DNS** → turn **DNSSEC** off first
   (it's under Advanced settings; leaving it on can take the domain offline during
   the switch). Then **Domain nameservers** → **Use custom nameservers** → paste
   Cloudflare's two → Save. You keep paying Squarespace for the domain itself;
   only the DNS moves.
3. Back in Cloudflare, press **Check nameservers**. It usually goes active within
   an hour (it can take up to a day) and emails you when it does. You can turn
   DNSSEC back on later from Cloudflare's DNS → Settings page; it then gives you a
   DS record to paste into Squarespace.

### 2. Connect Cloudflare to the repository

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **GitHub**.
   Let Cloudflare see `zakkmg-site` (GitHub asks which repositories it may see;
   add this one next to `pheasantcouch-site`).
2. Keep the name **`zakkmg-site`**. It matches the `name` in `wrangler.jsonc`.
3. Leave the build command empty and keep the deploy command (`npx wrangler deploy`).
   **Save and Deploy**.
4. About a minute later it's live at a `workers.dev` address. Check it there first.

### 3. Point zakkmg.com at it

The new Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain** →
`zakkmg.com`. Add `www.zakkmg.com` the same way, so both addresses work.

### Updating the live site later

Change the files on GitHub (or push from your PC). Cloudflare republishes in about
a minute.

---

## Email: hello@zakkmg.com (optional)

Once the DNS is on Cloudflare: **Email** → **Email Routing** → enable → add
`hello@zakkmg.com` (or any name) forwarding to your Gmail. Free. Then add it to
Elsewhere in `index.html` if you want it public.

## Ads (later, if you want)

None on purpose for now: the sheet is a front door, and pheasantcouch.com is the
one under AdSense review. If you add ads here later, AdSense needs an `ads.txt` in
`site/` and a privacy page, and the footer line about "no cookies and no trackers"
has to go.
