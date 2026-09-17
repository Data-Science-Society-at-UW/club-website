import { useState } from 'react';
import { Icon } from '../Icon';
import type { EventDetail, EventInstagram } from '../../content/siteContent';

type Props = {
  details?: EventDetail[];
  instagram?: EventInstagram;
};

export function EventDetailsDisclosure({ details, instagram }: Props) {
  const [open, setOpen] = useState(false);
  const buttonText = open ? 'Click to hide details' : 'Click to see more details';
  const hasDetails = Boolean(details && details.length);

  return (
    <div className="event-disclosure">
      <div className="event-disclosure-actions">
        {hasDetails && (
          <button type="button" className="event-disclosure-button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <span>{buttonText}</span><Icon name={open ? 'chevron-down' : 'arrow-up-right'} size={16} />
          </button>
        )}
        {instagram && (
          <a className="event-instagram-link" href={instagram.url} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size={15} /><span>{instagram.label}</span>
          </a>
        )}
      </div>
      {hasDetails && (
        <div className={`event-disclosure-panel${open ? ' is-open' : ''}`} hidden={!open}>
          {details!.map((detail, index) => (
            <div className="event-detail-block" key={`${detail.heading ?? 'paragraph'}-${index}`}>
              {detail.heading && <h4>{detail.heading}</h4>}
              {detail.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {detail.bullets && <ul>{detail.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
