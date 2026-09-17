import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Icon } from '../Icon';
import { assetPath } from '../../lib/assets';
import { navItems, siteName, tagline, type PageKey } from '../../content/siteContent';

type SiteHeaderProps = { activePage: PageKey };

function NavIcon({ name }: { name: (typeof navItems)[number]['icon'] }) {
  return <Icon name={name} size={15} strokeWidth={1.5} />;
}

function NavLinks({ activePage, onNavigate }: SiteHeaderProps & { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => {
        const key = (item.href === 'index.html' ? 'home' : item.href.replace('.html', '')) as PageKey;
        const active = activePage === key;
        return (
          <a key={item.href} className={`site-nav-link${active ? ' is-active' : ''}`} href={item.href} aria-current={active ? 'page' : undefined} onClick={onNavigate}>
            <NavIcon name={item.icon} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </>
  );
}

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="index.html" aria-label={`${siteName} home`}>
          <img src={assetPath('logo.png')} alt="Data Science Society at UW Logo" className="site-logo" />
          <span className="site-brand-copy">
            <strong>{siteName}</strong>
            <small>{tagline}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLinks activePage={activePage} />
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="mobile-menu-trigger" type="button" aria-label="Toggle navigation menu">
              <Icon name={open ? 'close' : 'menu'} size={20} />
              <span>Menu</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-nav-overlay" />
            <Dialog.Content className="mobile-nav-panel" aria-describedby={undefined}>
              <div className="mobile-nav-heading">
                <Dialog.Title>Data Science Society at UW</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="mobile-nav-close" type="button" aria-label="Close navigation menu"><Icon name="close" size={20} /></button>
                </Dialog.Close>
              </div>
              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                <NavLinks activePage={activePage} onNavigate={() => setOpen(false)} />
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
