import { ArrowUpRight } from 'lucide-react';
import { footerText, simpleFooterText, siteName, type PageKey } from '../../content/siteContent';

export function SiteFooter({ page }: { page: PageKey }) {
  const copyright = page === 'home' ? footerText : simpleFooterText;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>{siteName}</span>
        <span>{copyright}</span>
        <a href="index.html" aria-label="Return to home"><ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.2} /></a>
      </div>
    </footer>
  );
}
