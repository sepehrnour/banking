import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9252cab9218419a1ce80c0f8a5e04d3d@o4507910890061824.ingest.us.sentry.io/4507910896353280",
  tracesSampleRate: 1.0, // Adjust this value in production
  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
