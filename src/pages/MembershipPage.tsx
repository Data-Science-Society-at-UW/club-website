import { Icon } from '../components/Icon';
import { PageIntro } from '../components/pages/PageIntro';
import { membershipPageContent } from '../content/siteContent';

export function MembershipPage() {
  return (
    <div className="inner-page membership-page">
      <PageIntro title={membershipPageContent.title}>
        <p>{membershipPageContent.intro}</p>
      </PageIntro>
      <section className="membership-content section-light">
        <div className="section-frame">
          <div className="membership-sections">
            {membershipPageContent.sections.map((section) => (
              <article className="membership-section" key={section.title} data-atelier-reveal>
                <div className="membership-section-top"><Icon name={section.icon} size={22} /></div>
                <h2>{section.title}</h2>
                <p>{section.paragraph}</p>
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
          <section className="membership-cta" data-atelier-reveal>
            <div><h2>{membershipPageContent.ctaTitle}</h2><p>{membershipPageContent.ctaText}</p></div>
            <span className="button button-dark button-soon" aria-disabled="true">{membershipPageContent.ctaLabel} <Icon name="clock" size={16} /></span>
          </section>
        </div>
      </section>
    </div>
  );
}
