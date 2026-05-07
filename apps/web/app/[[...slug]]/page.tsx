import { ClientApp } from './client-app';

// Keep the optional catch-all available for arbitrary SPA paths in `next dev`.
// Next 16 can treat routes with `generateStaticParams` as static-param only;
// without this explicit opt-in, a fresh dev server may resolve `/` to the
// built-in not-found page instead of this shell.
export const dynamicParams = true;

// The whole product is a client-driven SPA: project IDs and file paths are
// unbounded user input, so we route every URL through this single optional
// catch-all and let the existing client router (src/router.ts, which reads
// window.location at runtime) decide what to render.
//
// For `output: 'export'` we return a single empty `slug` so Next.js emits
// one shell HTML at out/index.html; the daemon's SPA fallback (see
// apps/daemon/src/server.ts) serves it for any unknown non-API path so deep links
// still hydrate to the right view. In dev we leave `dynamicParams` at its
// default (true) so `next dev` happily renders /projects/<id> directly.
export function generateStaticParams() {
  return [{ slug: [] as string[] }];
}

export default function Page() {
  return <ClientApp />;
}
