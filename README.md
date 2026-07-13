# Brain Health Trust South Africa

Website for the Brain Health Trust South Africa, built with React + Vite and
Tailwind CSS. Deployed to GitHub Pages on the custom domain
**brainhealthtrust.org**.

## How it works

- The whole site lives in `src/App.jsx` (a single React component).
- Images and the team photos are embedded directly in the code.
- The hero **video** and the **favicon** live in `public/` and are served from
  the site root.
- The `public/CNAME` file tells GitHub Pages to serve the site on
  `brainhealthtrust.org`.
- Every push to the `main` branch triggers `.github/workflows/deploy.yml`,
  which builds the site and publishes it automatically. You never have to run
  a build yourself.

## Editing later

If you want to make changes yourself, you can run the site locally:

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:5173
```

Then edit `src/App.jsx`, save, and the preview updates instantly.

## Contact form

The contact form sends messages to **eddie@neuroflex.io** via
[FormSubmit.co](https://formsubmit.co). The first time the form is used on the
live site, FormSubmit emails Eddie a one-time confirmation link that must be
clicked before messages start arriving.
