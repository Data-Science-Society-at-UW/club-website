import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function useSiteMotion() {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      root.dataset.motion = 'reduced';
      return undefined;
    }

    const context = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>('[data-atelier-reveal]', root);
      reveals.forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 30 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          delay: Number(element.dataset.revealDelay ?? 0) / 1000,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
      });

      const heroScene = root.querySelector<HTMLElement>('[data-hero-scene]');
      if (heroScene && window.matchMedia('(min-width: 760px)').matches) {
        gsap.to(heroScene, {
          yPercent: 12,
          rotate: 3,
          ease: 'none',
          scrollTrigger: { trigger: heroScene, start: 'top top', end: 'bottom top', scrub: 1.2 },
        });
      }

      const timeline = root.querySelector<HTMLElement>('[data-event-line]');
      if (timeline) {
        gsap.fromTo(timeline, { scaleY: 0 }, {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: { trigger: timeline.parentElement, start: 'top 68%', end: 'bottom 76%', scrub: 0.8 },
        });
      }
    }, root);

    const lenis = new Lenis({ smoothWheel: true, anchors: true });
    const syncScroll = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(syncScroll);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      context.revert();
      lenis.destroy();
      gsap.ticker.remove(syncScroll);
    };
  }, []);

  return scope;
}
