import { lazy, Suspense } from 'react';
import { Icon } from '../components/Icon';
import { CommitteeRow } from '../components/pages/CommitteeRow';
import { homeContent } from '../content/siteContent';

const AmethystHeroScene = lazy(() => import('../components/visuals/AmethystHeroScene').then(({ AmethystHeroScene: Scene }) => ({ default: Scene })));

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy" data-atelier-reveal>
            <h1>{homeContent.title}</h1>
            <p>{homeContent.intro}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="membership.html">Join Us <Icon name="arrow-up-right" size={16} /></a>
              <a className="text-action text-action-light" href="contact.html">Contact Us <Icon name="arrow-up-right" size={16} /></a>
            </div>
          </div>
          <Suspense fallback={<div className="amethyst-scene" aria-hidden="true"><div className="amethyst-scene-fallback" /></div>}><AmethystHeroScene /></Suspense>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true"><span />Scroll</div>
      </section>

      <section className="home-committees section-light">
        <div className="section-frame">
          <div className="section-heading-row" data-atelier-reveal>
            <h2>{homeContent.committeesTitle}</h2>
            <span className="section-rule" />
          </div>
          <div className="committee-list">
            {homeContent.committees.map((committee) => <CommitteeRow key={committee.name} committee={committee} />)}
          </div>
        </div>
      </section>
    </>
  );
}
