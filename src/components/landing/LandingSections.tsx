import { useState, type Dispatch, type SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CheckItem,
  Container,
  Logo,
  NavLink,
  SectionTitle,
  Stat,
} from './LandingUI'

type CtaHandler = (action: string, plan?: string) => void

type ContactSectionProps = {
  ctaAction: string
  selectedPlan: string
  clientName: string
  setClientName: Dispatch<SetStateAction<string>>
  clientPhone: string
  setClientPhone: Dispatch<SetStateAction<string>>
  whatsappHref: string
}

const locationLabel = import.meta.env.VITE_LOCATION_LABEL ?? 'Ташкент'
const phoneDisplay = import.meta.env.VITE_PHONE_DISPLAY ?? '+998 XX XXX XX XX'
const phoneTel = import.meta.env.VITE_PHONE_TEL ?? '+998000000000'
const mapsQuery = encodeURIComponent(import.meta.env.VITE_MAPS_QUERY ?? 'Tashkent')

export function HeaderSection({ onCta }: { onCta: CtaHandler }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <NavLink to="/#hero">Главная</NavLink>
            <NavLink to="/#memberships">Абонементы</NavLink>
            <NavLink to="/#trainers">Тренеры</NavLink>
            <NavLink to="/#facilities">Зоны</NavLink>
            <NavLink to="/#reviews">Отзывы</NavLink>
            <NavLink to="/#faq">FAQ</NavLink>
            <NavLink to="/#gallery">Галерея</NavLink>
            <NavLink to="/#contact">Контакты</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onCta('Записаться', 'Без выбранного тарифа')}
              className="inline-flex items-center justify-center rounded-xl bg-neon px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Записаться
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export function HeroSection({ onCta }: { onCta: CtaHandler }) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-steel/40" data-parallax-glow />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-neon/10 blur-3xl" data-float-glow />
      </div>

      <Container>
        <div className="relative grid min-h-[88svh] items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <div data-hero-badge className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              Сила. Пространство. Результат.
            </div>

            <h1 data-hero-title className="mt-5 font-display text-5xl tracking-wide md:text-6xl">
              Превзойди свои пределы в <span className="text-neon">FitMax</span>
            </h1>

            <p data-hero-text className="mt-5 max-w-xl text-white/75">
              Просторные тренировочные зоны, современные тренажёры и мотивирующая атмосфера для реальных результатов.
            </p>

            <div data-hero-buttons className="mt-8 flex flex-wrap gap-3">
              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  onCta('Начать тренировку', 'Без выбранного тарифа')
                }}
              >
                Начать тренироваться
              </Button>
              <Button href="/#memberships" variant="secondary">
                Смотреть абонементы
              </Button>
            </div>

            <div data-hero-stats className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat value="100+" countTo={100} suffix="+" label="Тренажёров" />
              <Stat value="8" countTo={8} label="Современных душевых" />
              <Stat value="Большие" label="Раздевалки" />
              <Stat value="Рабочая" label="и бойцовская зона" />
            </div>
          </div>

          <div data-hero-media className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-steel/30">
                <img
                  src="https://picsum.photos/id/1011/1200/1500"
                  alt="FitMax тренировка"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/40 z-10" />
                <div className="flex h-full flex-col justify-end p-6 relative z-20">
                  <div className="font-display text-3xl tracking-wide">Accessible Luxury Fitness</div>
                  <div className="mt-2 text-sm text-white/70">
                    Профессиональные тренажёры, большое пространство и дружелюбная команда — всё для стабильного прогресса.
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-neon/20 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function WhySection() {
  return (
    <section id="why" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle eyebrow="ПОЧЕМУ FITMAX" title="Почему выбирают FitMax" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="font-display text-2xl tracking-wide">Просторный зал</div>
            <p className="mt-3 text-white/75">Большая тренировочная площадь и много тренажёров — без ожидания очереди.</p>
          </Card>
          <Card>
            <div className="font-display text-2xl tracking-wide">Современное оборудование</div>
            <p className="mt-3 text-white/75">Обслуживаемые тренажёры для силовых, кардио и функциональных тренировок.</p>
          </Card>
          <Card>
            <div className="font-display text-2xl tracking-wide">Комфортные раздевалки</div>
            <p className="mt-3 text-white/75">Просторные раздевалки, много шкафчиков и 8 душевых кабин.</p>
          </Card>
          <Card>
            <div className="font-display text-2xl tracking-wide">Дружелюбный персонал</div>
            <p className="mt-3 text-white/75">Внимательные сотрудники и тренеры, создающие комфортную атмосферу.</p>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export function ExperienceSection({ onCta }: { onCta: CtaHandler }) {
  return (
    <section id="experience" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="ПРОСТРАНСТВО И ЭФФЕКТИВНОСТЬ"
          title="Тренируйся в пространстве, созданном для результата"
          subtitle="Мы превращаем масштаб, комфорт и надёжность в премиальные преимущества."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="space-y-3">
              <CheckItem>Широкий выбор силовых тренажёров</CheckItem>
              <CheckItem>Кардио-зона с беговыми дорожками и видом на город</CheckItem>
              <CheckItem>Зона функционального тренинга</CheckItem>
              <CheckItem>Зона для тренировок по единоборствам</CheckItem>
              <CheckItem>Чистое и обслуживаемое оборудование</CheckItem>
            </ul>

            <div className="mt-8">
              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  onCta('Начать тренировки', 'Без выбранного тарифа')
                }}
              >
                Начать тренировки
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-xs font-semibold tracking-widest text-white/70">СИЛА</div>
              <div className="mt-3 font-display text-2xl tracking-wide">Силовая зона</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-xs font-semibold tracking-widest text-white/70">КАРДИО</div>
              <div className="mt-3 font-display text-2xl tracking-wide">Вид на город</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-xs font-semibold tracking-widest text-white/70">ФУНКЦИОНАЛ</div>
              <div className="mt-3 font-display text-2xl tracking-wide">Производительность</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-xs font-semibold tracking-widest text-white/70">БОЕВЫЕ</div>
              <div className="mt-3 font-display text-2xl tracking-wide">Бойцовская зона</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false)

  const reviews = [
    {
      author: 'Cody Tashkent',
      meta: 'Местный эксперт · 803 отзыва · 24 852 фото',
      date: 'год назад',
      text: 'Да нормальный тренажерный зал. Есть все нужные базовые тренажеры и снаряды. Есть отдельно кардиозона с беговыми дорожками, место для тягания железа и комбатзона с татами и грушей. Да, народу в вечернее время много, но утром зал почти пустой.',
    },
    {
      author: 'Nadia Ignatenko',
      meta: 'Местный эксперт · 8 отзывов · 16 фото',
      date: '4 года назад',
      text: 'Ходили туда всей семьёй после карантина, цена была адекватная, для женщин 200к в месяц или 12 занятий. В августе 2021г вдруг резко подняли цену на 100к, при всем при этом — тренажёры пыльные, мы ходили в 6 утра, сразу после открытия.',
    },
    {
      author: 'Виктория Хан',
      meta: '1 отзыв',
      date: '2 года назад',
      text: 'Есть ли смысл сюда писать! Телефоны не работают, график работы не правильный! Цена завышена для разового посещения для такого зала. Тренажёры не исправлены (не все), душевая сарай! В зале пыльно... Цену сбавьте или соответствуйте.',
    },
    {
      author: 'Bekmurod Shodmonov',
      meta: '2 отзыва',
      date: '5 месяцев назад',
      text: 'За таких денег очень хороший вариант',
    },
    {
      author: 'Natalya',
      meta: 'Местный эксперт · 10 отзывов · 6 фото',
      date: '3 года назад',
      text: 'Тренажеры старые, грязные, боишься к ним подойти, шатаются. В зале не работает вентиляция, душно, жарко. Для мужиков может и пойдёт — железо тягать. А девушкам, мне кажется, там не место. Я прихожу туда как на пытку, хотя всегда любила ходить в зал.',
    },
    {
      author: 'I S',
      meta: 'Местный эксперт · 36 отзывов · 102 фото',
      date: 'Изменено 3 года назад',
      text: 'Все устраивает, но вот опаздывать с открытием — это уже перебор. По бумаге зал открывается в 6 утра.',
    },
    {
      author: 'Habibullo Abbosov',
      meta: '2 отзыва',
      date: '2 года назад',
      text: 'Для того кто реально хочет накачаться, ему не очень важен год тренажёра — главное, чтобы работало 😁',
    },
    {
      author: 'Bogdan B',
      meta: 'Местный эксперт · 64 отзыва · 2 фото',
      date: '4 года назад',
      text: 'Хороший фитнес центр, но надо бы провести работу с тренерами. Крайне мало внимания к посетителям.',
    },
    {
      author: 'Farhod Shakirov',
      meta: 'Местный эксперт · 81 отзыв · 170 фото',
      date: '2 года назад',
      text: 'Судя по отзывам зал не очень. Буду искать в другом месте.',
    },
    {
      author: 'Djahongir D',
      meta: 'Местный эксперт · 8 отзывов · 46 фото',
      date: '8 лет назад',
      text: 'Просторный и современный фитнесс клуб на втором этаже.',
    },
    {
      author: 'ABROR ESHONOV',
      meta: 'Местный эксперт · 30 отзывов · 63 фото',
      date: '7 лет назад',
      text: 'Работают с 7:00 до 23:00. Но с утра не можете позаниматься.',
    },
    { author: 'Arslon Sultonov', meta: '47 отзывов', date: '4 года назад', text: '👍👀' },
    { author: 'Коля', meta: '1 отзыв', date: '3 года назад', text: '🇺🇿🙋🙋🙋' },
    { author: 'aziz', meta: '1 отзыв', date: '5 лет назад', text: 'Очень дорого!' },
    {
      author: 'Javoxir Aralov',
      meta: '2 отзыва',
      date: '3 года назад',
      text: 'Nice',
    },
    { author: 'Sabir Hudaykulov', meta: '2 отзыва', date: '2 года назад', text: 'Супер' },
    { author: 'Фарогат Юсупназарова', meta: '1 отзыв', date: '5 лет назад', text: 'Хороший спортзал' },
    { author: 'Muhammad Ali Maksudov', meta: '10 отзывов · 1 фото', date: '6 лет назад', text: 'Нормалный' },
    {
      author: 'Javohir Mirzaqanbarov',
      meta: '2 отзыва',
      date: '6 месяцев назад',
      text: 'Немного устарело, но атмосфера отличная.',
    },
    {
      author: 'Davron',
      meta: '1 отзыв',
      date: '3 месяца назад',
      text: 'Дайте мне рабочий номер.',
    },
    {
      author: 'Qudratullo Xalimov (Qudrat)',
      meta: 'Местный эксперт · 22 отзыва · 7 фото',
      date: '2 года назад',
      text: 'Хорошее место — это просто старая мебель для шкафа.',
    },
    {
      author: 'Abdulloh Abduganiyev',
      meta: '2 отзыва',
      date: '4 года назад',
      text: 'Кто знает цену, напишите пожалуйста.',
    },
    {
      author: 'Ramziddin Uralov',
      meta: 'Местный эксперт · 28 отзывов · 63 фото',
      date: '2 года назад',
      text: 'Отличный',
    },
    { author: 'Azamat azamov', meta: '1 отзыв', date: '4 года назад', text: 'Хорошо' },
    {
      author: 'Botir Shakarov',
      meta: 'Местный эксперт · 14 отзывов · 15 фото',
      date: '3 года назад',
      text: 'Хорошее место',
    },
    {
      author: 'Babur Tashmuhamatov',
      meta: '',
      date: '4 года назад',
      text: 'Положительные: Связь и общение, Качество, Профессионализм',
    },
    { author: 'JakhongirM', meta: '6 отзывов · 9 фото', date: 'год назад', text: '' },
    { author: 'Reta Kim', meta: '', date: 'год назад', text: '' },
  ]

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 9)

  return (
    <section id="reviews" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle eyebrow="ОТЗЫВЫ" title="Что говорят участники" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review) => (
            <Card key={`${review.author}-${review.date}`}>
              <div className="flex items-center justify-between gap-2">
                <div className="text-neon">⭐⭐⭐⭐⭐</div>
                <div className="text-xs text-white/55">{review.date}</div>
              </div>
              <div className="mt-4 text-sm font-semibold text-white/85">{review.author}</div>
              {review.meta ? <div className="mt-1 text-xs text-white/55">{review.meta}</div> : null}
              {review.text ? (
                <p className="mt-4 text-white/80">{review.text}</p>
              ) : (
                <p className="mt-4 text-white/45">Комментарий не добавлен.</p>
              )}
            </Card>
          ))}
        </div>
        {reviews.length > 9 ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllReviews((value) => !value)}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              {showAllReviews ? 'Скрыть' : 'Показать все'}
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}

export function MembershipSection({ onCta }: { onCta: CtaHandler }) {
  return (
    <section id="memberships" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle eyebrow="АБОНЕМЕНТЫ" title="Выбери свой план" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div data-reveal-card className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-xs font-semibold tracking-widest text-white/70">МЕСЯЦ</div>
            <div className="mt-3 font-display text-3xl tracking-wide">$30</div>
            <div className="text-sm text-white/60">/ месяц</div>
            <ul className="mt-6 space-y-3 text-sm">
              <CheckItem>Безлимитный доступ в зал</CheckItem>
            </ul>
            <div className="mt-8">
              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  onCta('Записаться', 'Месячный')
                }}
              >
                Записаться
              </Button>
            </div>
          </div>

          <div data-reveal-card className="rounded-2xl border border-neon/30 bg-neon/10 p-6 backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-semibold tracking-widest text-neon">
              ЛУЧШЕ ДЛЯ РЕГУЛЯРНОСТИ
            </div>
            <div className="mt-3 font-display text-3xl tracking-wide">$75</div>
            <div className="text-sm text-white/60">3 месяца</div>
            <ul className="mt-6 space-y-3 text-sm">
              <CheckItem>Оптимально для регулярных тренировок</CheckItem>
              <CheckItem>Безлимитный доступ в зал</CheckItem>
            </ul>
            <div className="mt-8">
              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  onCta('Начать тренировки', '3 месяца')
                }}
              >
                Начать тренировки
              </Button>
            </div>
          </div>

          <div data-reveal-card className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-xs font-semibold tracking-widest text-white/70">12 МЕСЯЦЕВ</div>
            <div className="mt-3 font-display text-3xl tracking-wide">$240</div>
            <div className="text-sm text-white/60">Лучшая цена</div>
            <ul className="mt-6 space-y-3 text-sm">
              <CheckItem>Максимальная выгода</CheckItem>
              <CheckItem>Безлимитный доступ в зал</CheckItem>
            </ul>
            <div className="mt-8">
              <Button
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  onCta('Присоединиться к FitMax', '12 месяцев')
                }}
              >
                Стать участником
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function FacilitiesSection() {
  return (
    <section id="facilities" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="ВОЗМОЖНОСТИ"
          title="Что есть в FitMax"
          subtitle="Всё, что нужно для силы, выносливости и стабильного прогресса."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <ul className="space-y-3">
              <CheckItem>Зона силовых тренировок</CheckItem>
              <CheckItem>Кардио-зона</CheckItem>
              <CheckItem>Зона единоборств</CheckItem>
              <CheckItem>Зона функционального тренинга</CheckItem>
            </ul>
          </Card>
          <Card>
            <ul className="space-y-3">
              <CheckItem>Раздевалки</CheckItem>
              <CheckItem>Душевые</CheckItem>
              <CheckItem>Шкафчики для хранения</CheckItem>
              <CheckItem>Дружелюбный персонал</CheckItem>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export function GallerySection() {
  const galleryItems = [
    {
      label: 'Тренажёрный зал',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80',
    },
    {
      label: 'Вид с беговых дорожек',
      image:
        'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=1400&q=80',
    },
    {
      label: 'Раздевалка',
      image:
        'https://picsum.photos/id/1068/1400/900',
    },
    {
      label: 'Тренировочные сессии',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80',
    },
    {
      label: 'Зона единоборств',
      image:
        'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=80',
    },
    {
      label: 'Функциональная зона',
      image:
        'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=80',
    },
  ]

  return (
    <section id="gallery" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="ГАЛЕРЕЯ"
          title="Внутри FitMax"
          subtitle="(Заглушки) Замените на реальные фото зала: тренажёры, вид с дорожек, раздевалки, тренировки, зона единоборств."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              data-reveal-card
              data-hover-tilt
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/35" />
              <div className="absolute inset-0 bg-neon/5 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex rounded-full border border-white/10 bg-ink/60 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function TrainersSection() {
  const trainers = [
    {
      name: 'Андрей Карпов',
      role: 'Силовой тренинг',
      text: 'Прогрессивные программы для набора силы и мышечной массы.',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Сабина Юнусова',
      role: 'Функционал и mobility',
      text: 'Баланс силы, выносливости и мобильности для долгого прогресса.',
      image:
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Фарход Эргашев',
      role: 'Единоборства',
      text: 'Техника, дисциплина и интенсивные бойцовские тренировки.',
      image:
        'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section id="trainers" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="КОМАНДА"
          title="Тренеры FitMax"
          subtitle="Экспертный подход, персональная поддержка и фокус на вашем результате."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trainers.map((trainer) => (
            <Card key={trainer.name}>
              <div className="relative h-48 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/25" />
              </div>
              <div className="mt-5 text-xs font-semibold tracking-widest text-neon">{trainer.role}</div>
              <div className="mt-2 font-display text-3xl tracking-wide">{trainer.name}</div>
              <p className="mt-3 text-sm text-white/75">{trainer.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ProgramsSection() {
  return (
    <section id="programs" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="ПРОГРАММЫ"
          title="Выберите формат тренировок"
          subtitle="От новичка до продвинутого уровня — под любую цель и график."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Форма и тонус', 'Снижение веса', 'Набор массы', 'Бойцовская подготовка'].map((program) => (
            <div
              key={program}
              data-reveal-card
              data-hover-tilt
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
            >
              <div className="text-xs font-semibold tracking-widest text-white/60">ПРОГРАММА</div>
              <h3 className="mt-3 font-display text-3xl tracking-wide">{program}</h3>
              <p className="mt-3 text-sm text-white/75">Индивидуальная нагрузка, контроль прогресса и регулярная обратная связь.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function InstagramSection() {
  const activities = [
    'Новая групповая тренировка',
    'Прогресс участников за неделю',
    'Интенсив в зоне единоборств',
    'Новый челлендж: 30 дней',
    'Силовой рекорд месяца',
    'Кардио-марафон FitMax',
    'Функциональный воркаут',
    'Вечерняя тренировка с тренером',
  ]

  return (
    <section id="instagram" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="СОЦИАЛЬНАЯ АКТИВНОСТЬ"
          title="Жизнь клуба в реальном времени"
          subtitle="Лента активности, новые достижения участников и ежедневный движ в FitMax."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4">
          <div data-marquee-track className="flex w-[200%] gap-4 px-4">
            {activities.concat(activities).map((item, index) => (
              <div
                key={`${item}-${index}`}
                data-hover-tilt
                className="inline-flex min-w-[260px] items-center justify-center rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export function FaqSection() {
  return (
    <section id="faq" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Частые вопросы"
          subtitle="Коротко о том, что чаще всего спрашивают перед первой тренировкой."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {[
            {
              q: 'Можно ли прийти на пробную тренировку?',
              a: 'Да, доступна пробная тренировка. Нажмите “Присоединиться к FitMax” и отправьте заявку через WhatsApp.',
            },
            {
              q: 'Есть ли парковка и шкафчики?',
              a: 'Да, в клубе есть шкафчики для хранения и удобная инфраструктура для ежедневных посещений.',
            },
            {
              q: 'Нужен ли свой тренер?',
              a: 'Не обязательно. Можно тренироваться самостоятельно или подобрать тренера под вашу цель.',
            },
            {
              q: 'Какие часы работы у клуба?',
              a: 'Мы открыты ежедневно с 6:00 до 23:00, без выходных.',
            },
          ].map((item) => (
            <details
              key={item.q}
              data-reveal-card
              data-hover-tilt
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">{item.q}</summary>
              <p className="mt-3 text-sm text-white/75">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function CtaSection({ onCta }: { onCta: CtaHandler }) {
  return (
    <section id="cta" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center backdrop-blur">
          <h2 className="font-display text-4xl tracking-wide md:text-5xl">Твоя сильная версия начинается сегодня</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">Начни тренироваться уже сегодня и стань частью сообщества FitMax.</p>
          <div className="mt-8 flex justify-center">
            <Button
              data-pulse-cta
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                onCta('Присоединиться к FitMax', 'Без выбранного тарифа')
              }}
            >
              Присоединиться к FitMax
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ContactSection({
  ctaAction,
  selectedPlan,
  clientName,
  setClientName,
  clientPhone,
  setClientPhone,
  whatsappHref,
}: ContactSectionProps) {
  return (
    <section id="contact" data-reveal-section className="border-t border-white/10 py-20">
      <Container>
        <SectionTitle eyebrow="КОНТАКТЫ" title="Посетите FitMax" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs font-semibold tracking-widest text-white/60">ЛОКАЦИЯ</div>
                <div className="mt-1 text-white/85">{locationLabel}</div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-white/60">ТЕЛЕФОН</div>
                <div className="mt-1 text-white/85">{phoneDisplay}</div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-white/60">ЧАСЫ РАБОТЫ</div>
                <div className="mt-1 text-white/85">Пн – Вс • 6:00 – 23:00</div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-ink/40 p-4">
              <div className="text-xs font-semibold tracking-widest text-white/60">ВЫБРАННОЕ ДЕЙСТВИЕ</div>
              <div className="mt-1 text-sm text-white/85">{ctaAction}</div>

              <div className="mt-4 text-xs font-semibold tracking-widest text-white/60">ТАРИФ</div>
              <div className="mt-1 text-sm text-white/85">{selectedPlan}</div>

              <div className="mt-4 grid gap-3">
                <label className="text-xs text-white/70" htmlFor="clientName">
                  Имя
                </label>
                <input
                  id="clientName"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                  placeholder="Ваше имя"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-neon/60"
                />

                <label className="text-xs text-white/70" htmlFor="clientPhone">
                  Телефон
                </label>
                <input
                  id="clientPhone"
                  value={clientPhone}
                  onChange={(event) => setClientPhone(event.target.value)}
                  placeholder="+998 XX XXX XX XX"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-neon/60"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`tel:${phoneTel}`}>Позвонить</Button>
              <Button href={whatsappHref} target="_blank" rel="noreferrer">
                Отправить заявку в WhatsApp
              </Button>
              <Button
                href={`https://www.google.com/maps?q=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                Открыть карту
              </Button>
            </div>
          </Card>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              title="Карта FitMax"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <Logo />
          <div className="text-xs text-white/60">© {new Date().getFullYear()} FitMax. Сила. Пространство. Результат.</div>
        </div>
      </Container>
    </footer>
  )
}
