## Yimla Share Viewer

A lightweight Next.js front-end that renders medical visits that were shared from the Yimla Health mobile app. When someone scans a QR code or taps a universal link (`https://health.yimla.dev/share/<token>`), this project fetches the corresponding share payload from Supabase and displays the visit summary, medications, and metadata.

### Requirements

- Node 18+ (Bun is used in local development)
- Supabase project with the `consume_shared_visits` RPC deployed (already part of the main Yimla backend)

### Environment Variables

Create a `.env.local` file with the public Supabase credentials that the viewer should use:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<public-anon-key>
```

The viewer never needs the service role key—`consume_shared_visits` is exposed to the `anon` role and enforces access through the share token itself.

### Development

```bash
bun install
bun dev
```

Visit `http://localhost:3000/share/<token>` with a valid share token to test the flow locally.

### Deployment (Vercel)

1. Push this directory to GitHub (e.g., `yimla/share-viewer`).
2. In Vercel, create a new project from that repo.
3. Add the two environment variables above in **Project → Settings → Environment Variables** (configure for Production + Preview).
4. Assign the custom domain `health.yimla.dev` to the project (Vercel will hydrate DNS automatically because the domain lives there).
5. Deploy—links generated in the mobile app will immediately resolve to the new viewer.

### Structure

- `app/share/[token]/page.tsx` – server component that calls Supabase and renders the view.
- `components/share/*` – presentation components for the header, stats, visit cards, and error states.
- `lib/share-service.ts` – thin wrapper around Supabase RPC calls.
- `types/share.ts` – shared TypeScript definitions for the payload returned by `consume_shared_visits`.

### Troubleshooting

- **Missing env vars**: the server components throw a descriptive error if the Supabase URL/key are absent.
- **Link invalid/expired**: the viewer displays a branded error card and points visitors to support.
- **Attachments**: when `includeAttachments` is `true` the UI prompts visitors to open the link inside the Yimla mobile app for secure downloads.
