import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const requestedRoot = process.argv[2] ?? '.';
const root = resolve(process.cwd(), requestedRoot);
const port = Number(process.env.ALLSETIC_PORT ?? 4173);
const host = process.env.ALLSETIC_HOST ?? '127.0.0.1';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

function resolveRequest(urlPath) {
  const decoded = decodeURIComponent((urlPath ?? '/').split('?')[0]);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const target = normalize(join(root, relative));
  return target === root || target.startsWith(`${root}${sep}`) ? target : null;
}

const server = createServer((request, response) => {
  const target = resolveRequest(request.url);
  if (!target || !existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('No encontrado');
    return;
  }

  response.writeHead(200, {
    'Cache-Control': 'no-store',
    'Content-Type': contentTypes[extname(target)] ?? 'application/octet-stream',
  });
  createReadStream(target).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Allsetic disponible en http://${host}:${port}/`);
});
