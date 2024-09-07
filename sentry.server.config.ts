// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9252cab9218419a1ce80c0f8a5e04d3d@o4507910890061824.ingest.us.sentry.io/4507910896353280",
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  tracesSampleRate: 1.0, // Adjust this value in production
  debug: false,
});
