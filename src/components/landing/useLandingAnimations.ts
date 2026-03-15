import { useLayoutEffect } from 'react'
import type { RefObject } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useLandingAnimations(rootRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    })

    const lenisRaf = (time: number) => {
      lenis.raf(time * 1000)
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(lenisRaf)
    gsap.ticker.lagSmoothing(0)
    const teardownHandlers: Array<() => void> = []

    const ctx = gsap.context(() => {
      gsap.set('[data-hero-badge], [data-hero-title], [data-hero-text], [data-hero-buttons], [data-hero-stats], [data-hero-media]', {
        opacity: 0,
        y: 24,
      })

      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTimeline
        .to('[data-hero-badge]', { opacity: 1, y: 0, duration: 0.45 })
        .to('[data-hero-title]', { opacity: 1, y: 0, duration: 0.55 }, '-=0.2')
        .to('[data-hero-text]', { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
        .to('[data-hero-buttons]', { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
        .to('[data-hero-stats]', { opacity: 1, y: 0, duration: 0.45 }, '-=0.15')
        .to('[data-hero-media]', { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')

      gsap.to('[data-float-glow]', {
        x: 18,
        y: -14,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      gsap.to('[data-parallax-glow]', {
        yPercent: -22,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal-section]').forEach((section) => {
        gsap.from(section, {
          y: 56,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })

        const cards = section.querySelectorAll<HTMLElement>('[data-reveal-card]')
        if (!cards.length) return

        gsap.from(cards, {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.from('[data-pulse-cta]', {
        scale: 0.96,
        duration: 1.1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })

      gsap.utils.toArray<HTMLElement>('[data-counter-target]').forEach((counter) => {
        const target = Number(counter.dataset.counterTarget ?? 0)
        const suffix = counter.dataset.counterSuffix ?? ''
        const value = { current: 0 }

        gsap.to(value, {
          current: target,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 88%',
            once: true,
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(value.current)}${suffix}`
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-marquee-track]').forEach((track) => {
        gsap.to(track, {
          xPercent: -50,
          duration: 18,
          ease: 'none',
          repeat: -1,
        })
      })

      const glow = rootRef.current?.querySelector<HTMLElement>('[data-cursor-glow]')
      if (glow && window.matchMedia('(pointer:fine)').matches) {
        const onMove = (event: PointerEvent) => {
          gsap.to(glow, {
            x: event.clientX - 120,
            y: event.clientY - 120,
            duration: 0.4,
            ease: 'power3.out',
          })
        }

        window.addEventListener('pointermove', onMove)
        teardownHandlers.push(() => window.removeEventListener('pointermove', onMove))
      }

      if (window.matchMedia('(pointer:fine)').matches) {
        gsap.utils.toArray<HTMLElement>('[data-hover-tilt]').forEach((card) => {
          const onMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const px = (event.clientX - rect.left) / rect.width - 0.5
            const py = (event.clientY - rect.top) / rect.height - 0.5

            gsap.to(card, {
              rotateY: px * 8,
              rotateX: py * -8,
              transformPerspective: 900,
              transformOrigin: 'center',
              duration: 0.45,
              ease: 'power2.out',
            })
          }

          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.55,
              ease: 'power3.out',
            })
          }

          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          teardownHandlers.push(() => {
            card.removeEventListener('mousemove', onMove)
            card.removeEventListener('mouseleave', onLeave)
          })
        })
      }
    }, rootRef)

    return () => {
      teardownHandlers.forEach((dispose) => dispose())
      ctx.revert()
      gsap.ticker.remove(lenisRaf)
      lenis.destroy()
    }
  }, [rootRef])
}
