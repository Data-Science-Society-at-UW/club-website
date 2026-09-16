import { useState } from 'react';
import { Icon } from '../Icon';
import type { EventDetail } from '../../content/siteContent';

export function EventDetailsDisclosure({ details }: { details: EventDetail[] }) {
  const [open, setOpen] = useState(false);
  const buttonText = open ? 'Click to hide details' : 'Click to see more details';

  return (
    <div className="event-disclosure">
      <button type="button" className="event-disclosure-button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span>{buttonText}</span><Icon name={open ? 'chevron-down' : 'arrow-up-right'} size={16} />
      </button>
      <div className={`event-disclosure-panel${open ? ' is-open' : ''}`} hidden={!open}>
        {details.map((detail, index) => (
          <div className="event-detail-block" key={`${detail.heading ?? 'paragraph'}-${index}`}>
            {detail.heading && <h4>{detail.heading}</h4>}
            {detail.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {detail.bullets && <ul>{detail.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </div>
        ))}
      </div>
    </div>
  );
}
