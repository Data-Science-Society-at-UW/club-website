import type { ReactNode } from 'react';
import { useSiteMotion } from '../motion/useSiteMotion';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import type { PageKey } from '../../content/siteContent';

type SiteShellProps = { activePage: PageKey; children: ReactNode };

export function SiteShell({ activePage, children }: SiteShellProps) {
  const motionScope = useSiteMotion();

  return (
    <div ref={motionScope} className="site-app">
      <SiteHeader activePage={activePage} />
      <main>{children}</main>
      <SiteFooter page={activePage} />
    </div>
  );
}
