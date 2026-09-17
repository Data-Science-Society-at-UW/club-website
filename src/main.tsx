import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/500-italic.css';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/atelier.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import type { PageKey } from './content/siteContent';

const page = (document.body.dataset.page ?? 'home') as PageKey;
const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<StrictMode><App page={page} /></StrictMode>);
}
