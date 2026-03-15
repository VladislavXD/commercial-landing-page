import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2.5 w-2.5 rounded-full bg-neon" />
      <span className="font-display text-2xl tracking-wide">FitMax</span>
    </div>
  )
}

export function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    'animated-btn inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 hover:-translate-y-0.5'
  const styles =
    variant === 'primary'
      ? 'bg-neon text-ink hover:brightness-110'
      : 'bg-white/5 text-paper hover:bg-white/10 border border-white/10'

  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-neon" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-4xl tracking-wide md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-white/75">{subtitle}</p> : null}
    </div>
  )
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      data-reveal-card
      data-hover-tilt
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      {children}
    </div>
  )
}

export function Stat({
  value,
  label,
  countTo,
  suffix = '',
}: {
  value: string
  label: string
  countTo?: number
  suffix?: string
}) {
  return (
    <div data-hover-tilt className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <div className="font-display text-xl tracking-wide">
        {typeof countTo === 'number' ? (
          <span data-counter-target={countTo} data-counter-suffix={suffix}>
            0{suffix}
          </span>
        ) : (
          value
        )}
      </div>
      <div className="mt-1 text-xs text-white/70">{label}</div>
    </div>
  )
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon/15 text-neon">
        ✓
      </span>
      <span className="text-white/80">{children}</span>
    </li>
  )
}

export function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-sm font-semibold text-white/70 transition hover:text-white">
      {children}
    </Link>
  )
}
