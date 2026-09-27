# One Month With You 💕

A tiny Next.js site to celebrate your one-month anniversary: an intro, a
playful "do you love me?" question, and a masonry photo gallery.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customize it

- **Text**: edit `components/IntroScene.js` and `components/QuestionScene.js`
  for the headline, question, and reply wording.
- **Photos**: open `components/photos.js`. For each entry, drop your image
  into `public/images/` and set `src: "/images/your-file.jpg"` (remove the
  `gradient` line — it's just a placeholder). Update `caption` and `sticker`
  (any emoji) for each one.
- **Colors**: the palette lives in `app/globals.css` under `:root` (`--rose`,
  `--blush`, `--gold`, etc).
- **No button behavior**: `components/QuestionScene.js` — the `dodge()`
  function picks a random spot on screen whenever the "No" button is
  hovered/tapped/focused, and the caption cycles through `DODGE_LINES`.

## Deploy

The easiest option is [Vercel](https://vercel.com): push this folder to a
GitHub repo, import it on Vercel, and it deploys automatically. Or run
`npm run build && npm run start` to self-host.
