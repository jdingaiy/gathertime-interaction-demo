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
- `PUBLIC_BASE_URL`: your Railway public domain, for example `https://gathertime-interaction-demo-production.up.railway.app`

Then, before `experience.js` in `index.html`, add your deployed BFF address:

```html
<script>window.GATHERTIME_API_BASE = 'https://your-bff.example.com/api/gathertime';</script>
```

Do not add the PAT to the GitHub Pages site or repository.

The BFF also accepts `POST /api/gathertime/audio` as `multipart/form-data` with an `audio` file. It exposes an unguessable temporary public URL for 15 minutes, then deletes the file. This URL is passed to the Coze `memory_transcribe` workflow; it is intended for demos, not permanent audio storage.
