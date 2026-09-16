import { Icon } from '../Icon';
import type { Committee } from '../../content/siteContent';

export function CommitteeRow({ committee }: { committee: Committee }) {
  return (
    <article className="committee-row" data-atelier-reveal>
      <div className="committee-symbol"><Icon name={committee.icon} size={21} /></div>
      <h3>{committee.name}</h3>
      <p>{committee.description}</p>
      <span className="committee-arrow"><Icon name="arrow-up-right" size={19} /></span>
    </article>
  );
}
