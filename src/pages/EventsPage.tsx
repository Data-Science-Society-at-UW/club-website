import { Icon } from '../components/Icon';
import { PageIntro } from '../components/pages/PageIntro';
import { EventDetailsDisclosure } from '../components/pages/EventDetailsDisclosure';
import { events, eventsPageContent, type Event } from '../content/siteContent';

function EventItem({ event }: { event: Event }) {
  return (
    <article className={`event-item${event.upcoming ? ' event-item-upcoming' : ''}`} data-atelier-reveal>
      <div className="event-date-block">
        <span>{event.month}</span>
        {event.day && <strong>{event.day}</strong>}
      </div>
      <div className="event-item-marker" aria-hidden="true" />
      <div className="event-item-content">
        <h3>{event.title}{event.year && <span> ({event.year})</span>}</h3>
        <div className="event-meta"><span><Icon name="clock" size={15} />{event.time}</span><span><Icon name="map-pin" size={15} />{event.location}</span></div>
        <p>{event.description}</p>
        {event.details && <EventDetailsDisclosure details={event.details} />}
      </div>
    </article>
  );
}

export function EventsPage() {
  const upcoming = events.filter((event) => event.upcoming);
  const past = events.filter((event) => !event.upcoming);

  return (
    <div className="inner-page events-page">
      <PageIntro title={eventsPageContent.upcomingTitle} dark>
        <p>{eventsPageContent.upcomingIntro}</p>
      </PageIntro>
      <section className="events-upcoming-section">
        <div className="section-frame">
          {upcoming.map((event) => <EventItem key={event.title} event={event} />)}
        </div>
      </section>
      <section className="events-past-section section-light">
        <div className="section-frame">
          <div className="section-heading-row" data-atelier-reveal>
            <div><h2>{eventsPageContent.pastTitle}</h2><p>{eventsPageContent.pastIntro}</p></div>
            <span className="section-rule" />
          </div>
          <div className="event-timeline">
            <span className="event-timeline-line" data-event-line aria-hidden="true" />
            {past.map((event) => <EventItem key={event.title} event={event} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
