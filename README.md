# zakkmg.com

Zakk M.G.'s home base, "The Central Hub": news, politics and society, dev and
artist logs, and the projects and games, on four tabs. It's a writer's terminal: a dark screen glowing electric violet, where each post
is a typed draft (in Courier 10 Pitch, an old IBM typewriter face) with its own
filename, and your handwriting (ZakkMG Hand) is the ink on top: your name, the
post titles and the scribbled pull quotes. The **Aa** button switches both the
handwriting and the typewriter to a plain font, and the browser remembers the choice.

Plain files. No build step, no framework, no server code, no cookies, no trackers.
The studio, the games and the free tools live on pheasantcouch.com; the hub
points to them.

```
zakkmg-site/
├── README.md          this guide
├── wrangler.jsonc     tells Cloudflare which folder is the website
├── serve.bat          Windows: double-click to preview at http://localhost:8080
├── serve.sh / serve.py   Mac/Linux preview, and the server both use
└── site/              ← THE WEBSITE
    ├── posts.js       ← EVERY POST and the Projects & Games cards. Edit this.
    ├── index.html     the frame: header, tabs, sidebar, footer
    ├── 404.html       "Not on this sheet." for addresses that don't exist
    ├── css/style.css  colors and fonts at the top, layout below
    ├── js/site.js     the Aa button
    ├── js/hub.js      fills in the posts and runs the tabs (no need to edit)
    ├── favicon.svg, robots.txt, sitemap.xml
    └── assets/
        ├── fonts/     ZakkMG Hand, Courier 10 Pitch (typewriter), Schibsted Grotesk (for Aa), with licenses
        └── og/og-zakkmg.jpg   the picture shown when someone shares the link
```

---

## Writing a post

Open `site/posts.js` in Notepad. The note at the top explains every line, and
there's a block to copy at the bottom of the list.

1. Copy the example block, paste it at the **top** of the list (newest first).
2. Set `section` to `"news"`, `"politics"` or `"blog"`. That's the tab it shows under.
3. Give it a `slug`: its own address. `"my-new-post"` becomes
   zakkmg.com/#my-new-post, a link you can share that opens straight to it.
4. Write the words between the two backticks. A blank line starts a new
   paragraph; `*word*` is italics. Use ’ instead of a backtick.
5. Save, and commit it to GitHub. It's live in about a minute.

`quote` puts a pull quote in a box after the text; `tags` are the little labels
under it. Leave them `""` and `[]` to skip them.

**Tab addresses:** zakkmg.com/#news, /#politics, /#blog and /#projects each open
that tab, handy for linking from Threads or Reddit.

## Projects & Games

The cards on that tab are `PROJECTS` at the bottom of `posts.js`: a name, a
status note, a sentence, a link and the button's words. They stay put; they
aren't posts.

## Everything else

| To… | Do this |
| --- | --- |
| Change the line under the name | `Automaton Drafting // Technomancy // Stupent Yokes` in the hero of `index.html` |
| Change the sidebar links | the Gateways and Signals lists in `index.html`: copy an `<li>` line |
| Change the System status lines | the `status` list in `index.html` |
| Change the colors | the `:root` block at the top of `css/style.css`. `--violet` is the electric violet, `--bg` the screen, `--panel` the cards. |
| Change the footer | the `<footer class="foot">` at the bottom of `index.html` (the Zakk Wylde line lives there) |

**Seeing an old version?** Browsers keep the site's files for up to 10 minutes.
Press Ctrl + Shift + R to load fresh. When you change `css/style.css` or the
scripts, bump the `?v=3` after their names in `index.html` and `404.html`
(to `?v=4`, and so on) so every visitor gets the new files at once.

After a change, also set `lastmod` in `site/sitemap.xml` to today's date so
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
