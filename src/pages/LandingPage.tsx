import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ContactSection,
  CtaSection,
  ExperienceSection,
  FacilitiesSection,
  FaqSection,
  FooterSection,
  GallerySection,
  HeaderSection,
  HeroSection,
  InstagramSection,
  MembershipSection,
  ProgramsSection,
  ReviewsSection,
  TrainersSection,
  WhySection,
} from '../components/landing/LandingSections'
import { useLandingAnimations } from '../components/landing/useLandingAnimations'

type LandingPageProps = {
  initialSection?:
    | 'hero'
    | 'why'
    | 'experience'
    | 'reviews'
    | 'memberships'
    | 'facilities'
    | 'gallery'
    | 'trainers'
    | 'programs'
    | 'instagram'
    | 'faq'
    | 'cta'
    | 'contact'
}

export default function LandingPage({ initialSection = 'hero' }: LandingPageProps) {
  const location = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const whatsappPhone = (import.meta.env.VITE_WHATSAPP_PHONE ?? '998000000000').replace(/\D/g, '')
  const [ctaAction, setCtaAction] = useState('Записаться в FitMax')
  const [selectedPlan, setSelectedPlan] = useState('Без выбранного тарифа')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')

  useLandingAnimations(rootRef)

  const whatsappHref = useMemo(() => {
    const message = [
      'Здравствуйте! Хочу записаться в FitMax.',
      `Действие: ${ctaAction}`,
      `Тариф: ${selectedPlan}`,
      `Имя: ${clientName || 'Не указано'}`,
      `Телефон: ${clientPhone || 'Не указан'}`,
    ].join('\n')

    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
  }, [ctaAction, selectedPlan, clientName, clientPhone, whatsappPhone])

  const handleCtaClick = (action: string, plan = 'Без выбранного тарифа') => {
    setCtaAction(action)
    setSelectedPlan(plan)

    const contactSection = document.getElementById('contact')
    if (!contactSection) return

    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    const targetId = (hash || initialSection) as string
    const el = document.getElementById(targetId)
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [initialSection, location.hash, location.pathname])

  return (
    <div ref={rootRef} className="min-h-dvh bg-ink text-paper">
      <div
        data-cursor-glow
        className="pointer-events-none fixed left-0 top-0 z-10 h-60 w-60 rounded-full bg-neon/10 blur-3xl"
      />

      <HeaderSection onCta={handleCtaClick} />
      <HeroSection onCta={handleCtaClick} />
      <WhySection />
      <ExperienceSection onCta={handleCtaClick} />
      <ReviewsSection />
      <MembershipSection onCta={handleCtaClick} />
      <FacilitiesSection />
      <GallerySection />
      <TrainersSection />
      <ProgramsSection />
      <InstagramSection />
      <FaqSection />
      <CtaSection onCta={handleCtaClick} />
      <ContactSection
        ctaAction={ctaAction}
        selectedPlan={selectedPlan}
        clientName={clientName}
        setClientName={setClientName}
        clientPhone={clientPhone}
        setClientPhone={setClientPhone}
        whatsappHref={whatsappHref}
      />
      <FooterSection />
    </div>
  )
}
