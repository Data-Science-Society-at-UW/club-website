import { Icon } from '../components/Icon';
import { PageIntro } from '../components/pages/PageIntro';
import { assetPath } from '../lib/assets';
import { officers } from '../content/siteContent';

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function OfficersPage() {
  return (
    <div className="inner-page officers-page">
      <PageIntro title="Meet Our Officers">
        <p>Our officer team leads the Data Science Society at UW, organizing events, mentoring members, and building a welcoming community for students passionate about data science.</p>
      </PageIntro>
      <section className="officer-list section-light" aria-label="Officer team">
        <div className="section-frame">
          {officers.map((officer, index) => (
            <article className={`officer-profile${index % 2 ? ' officer-profile-reverse' : ''}`} key={officer.name} data-atelier-reveal>
              <div className="officer-portrait-wrap">
                <div className="officer-portrait-depth" />
                {officer.image ? (
                  <img src={assetPath(officer.image)} alt={officer.name} className="officer-portrait" />
                ) : (
                  <div className="officer-portrait officer-portrait-placeholder" role="img" aria-label={`${officer.name} — photo coming soon`}>
                    <span className="officer-portrait-initials">{initialsOf(officer.name)}</span>
                    <span className="officer-portrait-note">Photo coming soon</span>
                  </div>
                )}
              </div>
              <div className="officer-copy">
                <p className="officer-role">{officer.role}</p>
                <h2>{officer.name}</h2>
                {officer.paragraphs.map((paragraph) => <p className="officer-bio" key={paragraph}>{paragraph}</p>)}
                <div className="officer-line">
                  {officer.link ? (
                    <a className="officer-connect" href={officer.link.url} target="_blank" rel="noopener noreferrer">
                      <Icon name={officer.link.icon} size={17} />
                      <span>{officer.link.label}</span>
                      <Icon name="arrow-up-right" size={15} />
                    </a>
                  ) : (
                    <span className="officer-line-mark"><Icon name="arrow-up-right" size={18} /></span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
