const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MIME = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.ico':'image/x-icon', '.woff2':'font/woff2' };
const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/freeze-community.html';
    const filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
    fs.stat(filePath, (err, stat) => {
      if (err) { res.writeHead(404, {'Content-Type':'text/plain'}); res.end('404 Not Found: ' + urlPath); return; }
      const file = stat.isDirectory() ? path.join(filePath, 'freeze-community.html') : filePath;
      const ext = path.extname(file).toLowerCase();
      res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache'});
      fs.createReadStream(file).pipe(res);
    });
  } catch (e) { res.writeHead(500); res.end('Server error'); }
});
server.listen(PORT, '127.0.0.1', () => console.log('Freeze Community running at http://localhost:' + PORT + '/freeze-community.html'));
