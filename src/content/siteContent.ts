export type PageKey = 'home' | 'officers' | 'events' | 'membership' | 'contact';

export type NavItem = {
  label: string;
  href: string;
  icon: 'home' | 'users' | 'calendar' | 'user-plus' | 'mail';
};

export type Committee = {
  name: string;
  description: string;
  icon: 'chalkboard' | 'mentorship' | 'projects' | 'community';
};

export type Officer = {
  name: string;
  role: string;
  image: string;
  paragraphs: string[];
};

export type EventDetail = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type EventInstagram = {
  url: string;
  label: string;
};

export type Event = {
  month: string;
  day: string;
  title: string;
  year: string;
  time: string;
  location: string;
  description: string;
  upcoming?: boolean;
  details?: EventDetail[];
  instagram?: EventInstagram;
};

export type MembershipSection = {
  title: string;
  icon: 'user-plus' | 'star' | 'users';
  paragraph: string;
  bullets: string[];
};

export type ContactLink = {
  title: string;
  description: string;
  label: string;
  href: string;
  icon: 'mail' | 'instagram' | 'linkedin';
};

export const siteName = 'Data Science Society at UW';
export const tagline = 'Data. Science. Impact.';
export const footerText = '© 2026 Data Science Society at UW. All rights reserved.';
export const simpleFooterText = '© 2026 Data Science Society at UW';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'index.html', icon: 'home' },
  { label: 'Officers', href: 'officers.html', icon: 'users' },
  { label: 'Events', href: 'events.html', icon: 'calendar' },
  { label: 'Membership', href: 'membership.html', icon: 'user-plus' },
  { label: 'Contact Us', href: 'contact.html', icon: 'mail' },
];

export const homeContent = {
  title: 'Welcome to Our Community',
  intro: 'The Data Science Society at UW is a student organization dedicated to making data science accessible to students from all disciplines. Our mission is to build a diverse community of data science enthusiasts who use data, machine learning, and AI to boost their productivity and make meaningful contributions to society.',
  committeesTitle: 'Our Committees',
  committees: [
    { name: 'Workshops', description: 'Hands-on sessions to learn data science, AI, and machine learning fundamentals.', icon: 'chalkboard' },
    { name: 'Mentorship', description: 'Get paired with experienced members for guidance on projects, careers, and learning paths.', icon: 'mentorship' },
    { name: 'Projects', description: 'Work on real-world data science and AI projects in teams, from beginner to advanced.', icon: 'projects' },
    { name: 'Community', description: 'Connect, network, and grow with a diverse group of data science enthusiasts at UW.', icon: 'community' },
  ] satisfies Committee[],
};

export const officers: Officer[] = [
  {
    name: 'Chester Li',
    role: 'President',
    image: 'img1.jpg',
    paragraphs: ["I'm a dual Ph.D. student in Astrophysics and Astrobiology at UW, applying machine learning to explore cosmic mysteries. With expertise in time-series analysis and neural networks, I'm passionate about pushing the boundaries of astrophysics and data science."],
  },
  {
    name: 'Wenhao Pan',
    role: 'Vice President',
    image: 'img2.jpg',
    paragraphs: ["I'm a Ph.D. student in Statistics focusing on machine learning and optimization. I enjoy working out, playing basketball and badminton, and exploring video games.", 'Outside of academics, I love connecting ideas and people. Feel free to learn more about me by searching my website online.'],
  },
  {
    name: 'Kimberly Gu',
    role: 'Events Coordinator',
    image: 'img3.jpg',
    paragraphs: ['I\'m a sophomore at UW planning to major in Informatics. As a founder of a media team, I use the internet to amplify underrepresented voices. I’m also passionate about protecting stray animals and have dedicated myself to related charitable work back in China.'],
  },
  {
    name: 'Akshith Saravanan',
    role: 'Technical Director & Secretary',
    image: 'img4.jpeg',
    paragraphs: ["I'm a Computer Science undergraduate at UW Seattle who loves using technology to solve real-world challenges. My focus areas include AI/ML, software engineering, and full-stack web development. I enjoy turning ideas into impactful solutions and collaborating with diverse teams to make a difference."],
  },
];

export const eventsPageContent = {
  upcomingTitle: 'Upcoming Events',
  upcomingIntro: 'Join us for exciting workshops, company tours, and collaborative projects designed to enhance your data science journey.',
  pastTitle: 'Past Events',
  pastIntro: "Check out the amazing events we've hosted and the impact we've made in our community.",
};

export const events: Event[] = [
  {
    month: 'TBD', day: '', title: 'Data Science Hackathon', year: '', time: 'TBD', location: 'TBD', upcoming: true,
    description: 'Join our hackathon where teams will use data to solve problems in business, science, or social impact. Build projects, collaborate under time constraints, and showcase your data science skills!',
  },
  {
    month: 'May', day: '16', title: 'EverybodyHacks', year: '2026', time: '9:00 AM - 6:00 PM', location: 'Maple Great Room',
    description: 'A beginner-friendly, one-day hackathon hosted by GEODAT, Data Science Society, iQueeries, and Notion @ UW.',
    instagram: { url: 'https://www.instagram.com/p/DXzt5mHkiAj/?img_index=1', label: 'View Information Post' },
    details: [{ heading: 'Hackathon Tracks', bullets: ['Food Waste & Efficiency (DSS): Challenged participants to reduce food waste in a café environment using real-world Woods Coffee sales, inventory, and waste data.', 'Inclusivity in Technology (iQueeries): Explored accessibility, representation, and reducing bias to design empowering technology for underserved communities.', 'Disaster Response & Resilience (Notion @ UW): Focused on using data and technology to help communities prepare for and recover from physical disasters and system-level crises.'] }],
  },
  {
    month: 'Apr', day: '30', title: 'OpenAI x Handshake Codex Creator Challenge', year: '2026', time: 'Submissions Closed', location: 'Online',
    description: 'An opportunity for all UW students to build an AI-powered project and claim $100 in free Codex credits.',
    instagram: { url: 'https://www.instagram.com/p/DW5oO4XAm7O/', label: 'View Information Post' },
    details: [{ heading: 'Challenge Details', paragraphs: ['Participants had the chance to win up to a year of ChatGPT Plus and $10,000 in API credits. Open to students across all majors with no prior coding experience required, with submissions showcased to over 1 million employers on Handshake.'] }],
  },
  {
    month: 'Mar', day: '12', title: 'DSS End of Quarter Social', year: '2026', time: 'Evening', location: 'UW HUB Bowling Alley / Games Area',
    description: 'Members wrapped up the quarter with a fun night of bowling and community.',
    instagram: { url: 'https://www.instagram.com/p/DV4k0ZlAa09/', label: 'View Information Post' },
    details: [{ heading: 'Event Details', paragraphs: ['This social was completely free for DSS members! A huge thank you to our External Client Project team, whose consulting project with Woods Coffee helped support this event.'] }],
  },
  {
    month: 'Feb', day: '26', title: 'Guest Speaker: Rachel Wagner-Kaiser, Ph.D.', year: '2026', time: '5:30 PM - 6:30 PM', location: 'MOR 220',
    description: 'A session on Natural Language Processing with KPMG data scientist and NLP & AI Data Science Leader, Rachel Wagner-Kaiser, Ph.D.',
    instagram: { url: 'https://www.instagram.com/p/DVAsMGbjhft/', label: 'View Information Post' },
    details: [{ heading: 'Presentation Topics', bullets: ['The history of NLP and end-to-end NLP systems', 'Messy realities of data curation, data cleaning, and labeling', 'Multilingual/non-English NLP challenges', 'Day-to-day tasks of a data scientist'] }],
  },
  {
    month: 'Feb', day: '12', title: 'Root Insurance Workshop', year: '2026', time: '5:30 PM - 6:30 PM', location: 'Savery Hall, Room 264',
    description: 'An exclusive workshop on how analytics, predictive modeling, and causal inference are reshaping the auto insurance industry.',
    instagram: { url: 'https://www.instagram.com/p/DU_vNumkgCC/?img_index=1', label: 'View Recap Post' },
    details: [{ heading: 'Speaker Details & Agenda', paragraphs: ["Joined by Sam Affolter (Director of Decision Science) and Elliot Layden (Sr. DS Manager), we discussed tackling rare events and high-volume decisions at scale. The session included insights into Root's mission, machine learning use cases in production, and current openings for summer internships and entry-level roles."] }],
  },
  {
    month: 'Jan', day: '29', title: 'First Meeting of Winter Quarter', year: '2026', time: '5:30 PM - 6:30 PM', location: 'Gould Hall, GLD 322',
    description: 'Our kickoff meeting covering our history, vision, and upcoming quarter logistics.',
    instagram: { url: 'https://www.instagram.com/p/DUmudD_EUEI/', label: 'View Recap Post' },
    details: [{ heading: 'What We Covered', bullets: ['Our history, vision, leadership, and officer team', 'Logistics: Slack, RSO page, and attendance'] }, { heading: 'Winter Quarter Projects', bullets: ['Woods Coffee Consulting Project', 'DSML Reading Group', 'Student Research Project'] }],
  },
  {
    month: 'May', day: '29', title: 'Machine Learning & Data Science Internship Workshop', year: '2025', time: '6:30 PM - 8:30 PM', location: 'PAB B109, UW Seattle',
    description: 'Successfully hosted our comprehensive Machine Learning & Data Science Internship Workshop featuring industry professionals! The workshop included a crash course on ML fundamentals, a panel discussion with data science professionals, and networking sessions with resume reviews. Participants gained valuable insights into data science careers and internship opportunities.',
    instagram: { url: 'https://www.instagram.com/p/DO_lf0bCX7M/', label: 'View Recap Post' },
    details: [{ heading: 'Workshop Agenda:', bullets: ['What is DSML? - Introduction to Data Science and Machine Learning', 'Why DSML? - Career opportunities and industry trends', 'What is an internship? - Understanding internship roles and expectations', 'How to get an internship? - Application strategies and best practices', 'Resume/Cover Letter - Crafting compelling applications', 'Interview Prep - Technical and behavioral interview tips', 'Networking - Building professional connections', 'Q&A - Interactive session with industry expert'] }, { paragraphs: ['Key Takeaways: Participants gained valuable insights into DSML internship experiences, learned practical strategies for landing internships, and had the opportunity to network with a Data Scientist from TikTok. The workshop included interactive sessions and feedback collection through surveys.'] }],
  },
];

export const membershipPageContent = {
  title: 'Join Our Community',
  intro: 'We welcome all UW students, regardless of discipline or experience level, to join the Data Science Society at UW. Members gain access to exclusive events, workshops, and a network of data science enthusiasts.',
  sections: [
    { title: 'How to Join', icon: 'user-plus', paragraph: 'Becoming a member is easy! Join via Huskylink (link below) or attend one of our events to learn more.', bullets: ['Join via Huskylink (link below)', 'Attend our events and meetings', 'Connect with our community'] },
    { title: 'Member Benefits', icon: 'star', paragraph: "As a member, you'll enjoy exclusive access to our resources and community.", bullets: ['Priority access to data science workshops and seminars', 'Networking opportunities with industry professionals', 'Participation in data science projects and research', 'Access to exclusive member-only events', 'Mentorship opportunities', 'Career development resources'] },
    { title: 'Our Community', icon: 'users', paragraph: 'Join a diverse community of students passionate about data science and AI.', bullets: ['Connect with like-minded peers', 'Collaborate on exciting projects', 'Learn from experienced members', 'Build lasting professional relationships'] },
  ] satisfies MembershipSection[],
  ctaTitle: 'Ready to Join?',
  ctaText: "Don't miss out on the opportunity to be part of our vibrant data science community. Join us today and start your journey in AI and data science!",
  ctaLabel: 'Join on Huskylink',
  ctaHref: 'https://huskylink.washington.edu/organization/datasciencesociety',
};

export const contactPageContent = {
  title: 'Contact Us',
  intro: 'If you have any questions, suggestions, or would like to collaborate with the Data Science Society at UW, feel free to reach out!',
  links: [
    { title: 'Email Us', description: 'Get in touch with us directly', label: 'datasciencesociety@uw.edu', href: 'mailto:datasciencesociety@uw.edu', icon: 'mail' },
    { title: 'Follow Us', description: 'Stay updated with our latest events', label: '@data_science_society_uw', href: 'https://www.instagram.com/data_science_society_uw/', icon: 'instagram' },
    { title: 'Connect', description: 'Network with our community', label: 'Data Science Society at UW', href: 'https://www.linkedin.com/company/data-science-society-uw/', icon: 'linkedin' },
  ] satisfies ContactLink[],
};
