import { Icon } from '../components/Icon';
import { PageIntro } from '../components/pages/PageIntro';
import { assetPath } from '../lib/assets';
import { officers } from '../content/siteContent';

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
                <img src={assetPath(officer.image)} alt={officer.name} className="officer-portrait" />
              </div>
              <div className="officer-copy">
                <p className="officer-role">{officer.role}</p>
                <h2>{officer.name}</h2>
                {officer.paragraphs.map((paragraph) => <p className="officer-bio" key={paragraph}>{paragraph}</p>)}
                <span className="officer-line"><Icon name="arrow-up-right" size={18} /></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
