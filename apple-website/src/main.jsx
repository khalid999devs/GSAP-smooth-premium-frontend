import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//...
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://dc05fb0a2456b19f4531aa9cea8e1198@o4507714602270720.ingest.us.sentry.io/4507714607120384',
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.reactRouterV3BrowserTracingIntegration({
    //   useEffect: React.useEffect,
    // }),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
