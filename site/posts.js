/* =====================================================================
   ZAKKMG.COM: THE POSTS
   Every post on the site is a block in POSTS below. Open this file in
   Notepad, copy a block, change it, save. Newest first: the order here is
   the order on the page.

   section   which tab it goes under:
               "news"      News
               "politics"  Politics & Society
               "blog"      Blog Logs
   slug      the post's own address: "mainframe-initialized" becomes
             zakkmg.com/#mainframe-initialized. Lowercase words with dashes,
             and never the same as another post's.
   when      the line above the title (a date, or "Short commentary", anything)
   title     the heading
   tags      little labels under the post, or [] for none
   quote     a pull quote shown in a box after the text, or "" for none
   body      the words, between the two backticks ` (the key left of 1).
             A blank line starts a new paragraph. Wrap a word in *stars*
             for italics. The one character that can't go inside is
             another backtick: use ’ instead.
   ===================================================================== */

window.POSTS = [

  {
    section: "news",
    slug: "mainframe-initialized",
    when: "November 11, 2026",
    title: "ZakkMG.com Mainframe Initialized",
    tags: ["System Release", "Hub Update"],
    quote: "",
    body: `
The foundational architecture for the new home base is officially live. Bringing together decentralized commentary, creative fiction, software pipelines, and direct links to Pheasant Couch Productions into a clean electric-violet terminal.
`
  },

  {
    section: "politics",
    slug: "algorithmic-panopticon",
    when: "Featured essay · October 2026",
    title: "The Algorithmic Panopticon vs. Sovereign Sanity",
    tags: [],
    quote: "When compliance is automated, dissent must become an artisanal craft.",
    body: `
As corporate platforms consolidate discourse into sanitized, automated funnels, human individuality becomes a liability. True political sovereignty today demands opting out of convenience-driven surveillance grids, supporting independent creators, and preserving the right to build weird, unapologetic digital spaces that algorithms cannot categorize.
`
  },

  {
    section: "politics",
    slug: "dogma-technocracy",
    when: "Short commentary",
    title: "Dogma, Technocracy, and the Loss of Wonder",
    tags: [],
    quote: "",
    body: `
Examining how rigid political orthodoxy on both sides tries to mechanize human morality into binary scorecards. Real growth happens in the messy, unmapped gray areas of culture and creative freedom.
`
  },

  {
    section: "blog",
    slug: "stupent-yokes-zeunhot",
    when: "Worldbuilding Journal #04",
    title: "Excavating the Lore of Stupent Yokes & Zeun’hot",
    tags: ["Worldbuilding"],
    quote: "",
    body: `
Writing fictional bibles is an exercise in structural madness. When you map out imaginary geologies, archaic dialects, and discarded political dynasties, the world starts telling *you* how it wants to be built. More script notes and draft excerpts dropping soon.
`
  },

  /* ---- COPY THIS BLOCK FOR A NEW POST (and move it to the top) ----
  {
    section: "blog",
    slug: "my-new-post",
    when: "December 1, 2026",
    title: "The title",
    tags: [],
    quote: "",
    body: `
First paragraph.

Second paragraph.
`
  },
  ------------------------------------------------------------------ */

];


/* =====================================================================
   PROJECTS & GAMES: the cards on that tab. Not posts: these stay put.
   status is the little note next to the name, "" for none.
   ===================================================================== */

window.PROJECTS = [
  {
    name: "Pew Pew Pest Control",
    status: "in closed testing",
    text: "A 3D kitchen shooter. Clear out the infestation before time runs out.",
    link: "https://pheasantcouch.com/pew-pew-pest-control",
    button: "See the game"
  },
  {
    name: "Syntax: Zero",
    status: "free, play now",
    text: "A word game with a daily leaderboard, in the browser.",
    link: "https://pheasantcouch.com/syntax-zero",
    button: "Play it"
  },
  {
    name: "Pheasant Couch Productions",
    status: "",
    text: "The studio I make games under, plus free tools: my handwriting font, a voice modulator, a vocal tuner and a music visualizer.",
    link: "https://pheasantcouch.com/",
    button: "Visit the studio"
  },
  {
    name: "Zakk M.G.’s Automaton Drafting Band",
    status: "two albums",
    text: "Behold, the olde songs, and Behold: the Present!, the modern set.",
    link: "https://open.spotify.com/artist/72TR6QnQMdMLGcuAD3hWJf",
    button: "Listen on Spotify"
  }
];
