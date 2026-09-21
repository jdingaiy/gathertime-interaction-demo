# GatherTime BFF

The website calls this proxy instead of calling Coze directly. The Coze PAT remains only in `COZE_PAT` on the server.

```bash
cd bff
npm install
cp .env.example .env
# set COZE_PAT and ALLOWED_ORIGINS in your deployment environment
node --env-file=.env server.mjs
```

Deploy this folder as a Node service (Render, Railway, Fly.io, or another service with environment variables). Set:

- `COZE_PAT`: the PAT from Coze, stored as a secret
- `ALLOWED_ORIGINS`: `https://jdingaiy.github.io`

Then, before `experience.js` in `index.html`, add your deployed BFF address:

```html
<script>window.GATHERTIME_API_BASE = 'https://your-bff.example.com/api/gathertime';</script>
```

Do not add the PAT to the GitHub Pages site or repository.
