import { Icon } from '../components/Icon';
import { PageIntro } from '../components/pages/PageIntro';
import { contactPageContent } from '../content/siteContent';

export function ContactPage() {
  return (
    <div className="inner-page contact-page">
      <PageIntro title={contactPageContent.title} dark>
        <p>{contactPageContent.intro}</p>
      </PageIntro>
      <section className="contact-content section-light">
        <div className="section-frame contact-frame">
          <div className="contact-list">
            {contactPageContent.links.map((link) => (
              <a className="contact-link-row" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} key={link.title} data-atelier-reveal>
                <span className="contact-icon"><Icon name={link.icon} size={20} /></span>
                <span className="contact-copy"><strong>{link.title}</strong><small>{link.description}</small></span>
                <span className="contact-value">{link.label}</span>
                <Icon name="arrow-up-right" size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
