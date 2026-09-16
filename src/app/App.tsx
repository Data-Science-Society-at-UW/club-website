import { SiteShell } from '../components/layout/SiteShell';
import type { PageKey } from '../content/siteContent';
import { ContactPage } from '../pages/ContactPage';
import { EventsPage } from '../pages/EventsPage';
import { HomePage } from '../pages/HomePage';
import { MembershipPage } from '../pages/MembershipPage';
import { OfficersPage } from '../pages/OfficersPage';

type AppProps = { page: PageKey };

export function App({ page }: AppProps) {
  const content = {
    home: <HomePage />,
    officers: <OfficersPage />,
    events: <EventsPage />,
    membership: <MembershipPage />,
    contact: <ContactPage />,
  }[page];

  return <SiteShell activePage={page}>{content}</SiteShell>;
}
