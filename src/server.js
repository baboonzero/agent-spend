const express = require('express');
const path = require('path');
function createServer() {
  const app = express();

  // Cache parsed data (reparse on demand via refresh endpoint)
  let cachedData = null;

  function friendlyError(err) {
    const msg = err.message || String(err);
    if (err.code === 'ENOENT') return { error: 'No supported local data directories were found. Check ~/.claude or ~/.codex.', code: 'ENOENT' };
    if (err.code === 'EPERM' || err.code === 'EACCES') return { error: 'Permission denied reading local provider data. Try running with elevated permissions.', code: err.code };
    return { error: msg };
  }

  app.get('/api/data', async (req, res) => {
    try {
      if (!cachedData) {
        cachedData = await require('./parser').parseAllSessions();
      }
      res.json(cachedData);
    } catch (err) {
      res.status(500).json(friendlyError(err));
    }
  });

  app.get('/api/refresh', async (req, res) => {
    try {
      delete require.cache[require.resolve('./parser')];
      cachedData = await require('./parser').parseAllSessions();
      res.json({ ok: true, sessions: cachedData.sessions.length });
    } catch (err) {
      res.status(500).json(friendlyError(err));
    }
  });

  // Serve static dashboard
  app.use(express.static(path.join(__dirname, 'public')));

  return app;
}

module.exports = { createServer };
