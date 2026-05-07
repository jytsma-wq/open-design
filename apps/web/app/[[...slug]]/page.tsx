import { ClientApp } from './client-app';

// Static export builds cannot opt into runtime-generated params. The daemon's
// SPA fallback serves the exported shell for unknown deep links instead, so the
// route stays static-export compatible while still emitting the root shell.
export const dynamicParams = false;

// The whole product is a client-driven SPA: project IDs and file paths are
// unbounded user input, so we route every URL through this single optional
// catch-all and let the existing client router (src/router.ts, which reads
// window.location at runtime) decide what to render.
//
// For `output: 'export'` we return a single empty `slug` so Next.js emits
// one shell HTML at out/index.html; the daemon's SPA fallback (see
// apps/daemon/src/server.ts) serves it for any unknown non-API path so deep
// links still hydrate to the right view.
export function generateStaticParams() {
  return [{ slug: [] as string[] }];
}

export default function Page() {
  return <ClientApp />;
}
