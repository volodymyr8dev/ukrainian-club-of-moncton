// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  // dsn: SENTRY_DSN || 'https://1e51f9732f394085a4d7453b15a4f85d@o1374104.ingest.sentry.io/6681251',
  // Adjust this value in production, or use tracesSampler for greater control
  // tracesSampleRate: 1.0,
  // debug: process.env.NODE_ENV !== 'production',
  // enabled: true,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
