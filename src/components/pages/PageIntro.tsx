import type { ReactNode } from 'react';

type PageIntroProps = { title: string; children: ReactNode; dark?: boolean };

export function PageIntro({ title, children, dark = false }: PageIntroProps) {
  return (
    <section className={`page-intro${dark ? ' page-intro-dark' : ''}`} data-atelier-reveal>
      <h1>{title}</h1>
      <div className="page-intro-copy">{children}</div>
    </section>
  );
}
