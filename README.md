# KPMG Access Management (Angular standalone)

A minimal Angular (v19-compatible) project that implements a top header and tab menu similar to your screenshot,
with standalone routed pages for:
- Dashboard
- Applications & Features
- Groups
- Roles
- Users
- Templates
- Audit Log

This is intentionally lightweight to serve as a shell in a micro-frontend architecture
(e.g., you can plug in remotes later via Module Federation).

## Quick start

```bash
npm i
npm start
```

Then open http://localhost:4200

If you're on Angular <19, update the versions in `package.json` to match your installed CLI,
or run `ng update` as needed.
