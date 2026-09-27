const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const HOME = '/freeze-v2.html';
const MIME = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.cjs':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.webmanifest':'application/manifest+json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.gif':'image/gif', '.ico':'image/x-icon', '.txt':'text/plain; charset=utf-8', '.xml':'application/xml; charset=utf-8', '.woff2':'font/woff2' };
const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = HOME;
    const filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403, {'Content-Type':'text/plain'}); res.end('Forbidden'); return; }
    fs.stat(filePath, (err, stat) => {
      if (err) { send404(urlPath, res); return; }
      if (stat.isDirectory()) {
        const idx = path.join(filePath, 'index.html');
        if (fs.existsSync(idx)) { sendFile(idx, res); return; }
        send404(urlPath, res); return;
      }
      sendFile(filePath, res);
    });
  } catch (e) { res.writeHead(500, {'Content-Type':'text/plain'}); res.end('Server error'); }
});
function sendFile(file, res) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache'});
  fs.createReadStream(file).pipe(res);
}
function send404(urlPath, res) {
  const custom = path.join(ROOT, '404.html');
  if (fs.existsSync(custom)) {
    res.writeHead(404, {'Content-Type': MIME['.html']});
    fs.createReadStream(custom).pipe(res);
    return;
  }
  res.writeHead(404, {'Content-Type':'text/plain'}); res.end('404 Not Found: ' + urlPath);
}
server.listen(PORT, '127.0.0.1', () => console.log('FREEZE29 running at http://localhost:' + PORT + '/' + '  (root -> ' + HOME + ')'));

