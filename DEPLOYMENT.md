# Deployment Checklist

## Vercel project

Create a new Vercel project from the GitHub repository that contains this site.

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production domain: `koicosmos.com`

## DNS

Use this domain layout:

- `koicosmos.com` -> personal site on Vercel
- `sensus.koicosmos.com` -> Sensus reader on GitHub Pages or a separate Vercel project

Recommended Tencent Cloud DNS records:

| Host | Type | Value |
| --- | --- | --- |
| `@` | `A` | Vercel's apex record shown in your Vercel domain panel |
| `www` | `CNAME` | `cname.vercel-dns.com` |
| `sensus` | `CNAME` | `renyiyi166.github.io` |

Vercel's exact apex A record can change by account instructions, so prefer the value shown inside the Vercel domain setup page.

## GitHub Pages for Sensus

In `Renyiyi166/sensus-classical-reader`, set the custom domain to:

```text
sensus.koicosmos.com
```

The local `CNAME` file has already been changed to that value.
