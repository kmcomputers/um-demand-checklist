const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// ── Shared in-memory store (cross-device sync) ─────────────────────────────
const store = {};

app.get('/api/store/:key', (req, res) => {
  const val = store[req.params.key];
  res.json({ value: val !== undefined ? val : null });
});

app.put('/api/store/:key', express.text({ limit: '10mb', type: '*/*' }), (req, res) => {
  store[req.params.key] = req.body;
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
