const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// ── Persistent store (Railway volume at /data) ─────────────────────────────
const fs = require('fs');
const STORE_FILE = process.env.STORE_PATH || '/data/store.json';

function loadStore() {
  try { return JSON.parse(fs.readFileSync(STORE_FILE, 'utf8')); } catch { return {}; }
}
function saveStore(s) {
  try {
    fs.mkdirSync(path.dirname(STORE_FILE), { recursive: true });
    fs.writeFileSync(STORE_FILE, JSON.stringify(s));
  } catch (e) { console.error('Store write failed:', e.message); }
}

const store = loadStore();
console.log(`Store loaded from ${STORE_FILE} (${Object.keys(store).length} keys)`);

app.get('/api/store/:key', (req, res) => {
  const val = store[req.params.key];
  res.json({ value: val !== undefined ? val : null });
});

app.put('/api/store/:key', express.text({ limit: '10mb', type: '*/*' }), (req, res) => {
  store[req.params.key] = req.body;
  saveStore(store);
  res.json({ ok: true });
});

// Proxy Anthropic API — keeps the key server-side
app.post('/api/messages', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY environment variable is not set.' });
  }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// Serve Vite build
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`UM Demand Checklist running on port ${PORT}`));
