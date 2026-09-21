import express from 'express';

const app = express();
const port = Number(process.env.PORT || 8787);
const token = process.env.COZE_PAT;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:8787')
  .split(',').map(value => value.trim()).filter(Boolean);
const workflows = {
  prepare: 'https://86bshcfzbs.coze.site',
  interview: 'https://zqd2dmr3qj.coze.site',
  generate: 'https://7knc3kf87v.coze.site'
};

if (!token) console.warn('COZE_PAT is not set. Requests will return 503.');
app.use(express.json({ limit: '2mb' }));
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  if (origin && !allowedOrigins.includes(origin)) return res.status(403).json({ msg: 'Origin is not allowed' });
  next();
});

app.get('/health', (_req, res) => res.json({ ok: true, configured: Boolean(token) }));
app.post('/api/gathertime/:action', async (req, res) => {
  const baseUrl = workflows[req.params.action];
  if (!baseUrl) return res.status(404).json({ msg: 'Unknown workflow' });
  if (!token) return res.status(503).json({ msg: 'AI service is not configured' });
  try {
    const upstream = await fetch(`${baseUrl}/run`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body), signal: AbortSignal.timeout(120000)
    });
    const body = await upstream.text();
    res.status(upstream.status);
    const runId = upstream.headers.get('run_id');
    if (runId) res.setHeader('run_id', runId);
    res.type(upstream.headers.get('content-type') || 'application/json').send(body);
  } catch (error) {
    const status = error?.name === 'TimeoutError' ? 504 : 502;
    res.status(status).json({ msg: status === 504 ? 'Upstream request timed out' : 'AI service connection failed' });
  }
});

app.listen(port, () => console.log(`GatherTime BFF listening on :${port}`));
