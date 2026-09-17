const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = path.join(__dirname, 'GlemO_Dataroom_v2.4_Mobile_Optimized_2026-09-17');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let rawUrl = req.url.split('?')[0].split('#')[0];
  let decodedUrl = decodeURI(rawUrl);
  if (decodedUrl === '/') decodedUrl = '/index.html';

  let filePath = path.join(ROOT, decodedUrl);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Handle directories: check for app.html or index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const appFile = path.join(filePath, 'app.html');
    const indexFile = path.join(filePath, 'index.html');
    if (fs.existsSync(appFile)) {
      filePath = appFile;
    } else if (fs.existsSync(indexFile)) {
      filePath = indexFile;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!doctype html><html><body style="font-family:sans-serif;padding:40px;text-align:center;">
        <h2>404 Not Found</h2>
        <p>File not found: ${decodedUrl}</p>
        <p><a href="/index.html">Go to Data Room</a> | <a href="/wireframe_package/app.html">Go to Marketplace</a></p>
      </body></html>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on all interfaces!`);
  console.log(`- Localhost:       http://localhost:${PORT}/`);
  console.log(`- Mobile (Wi-Fi):  http://192.168.0.24:${PORT}/`);
  console.log(`- Marketplace:     http://192.168.0.24:${PORT}/wireframe_package/app.html`);
});
