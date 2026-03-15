# FitMax Landing

Лендинг фитнес-клуба FitMax на React + TypeScript + Vite.

## Стек

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- GSAP + Lenis (анимации/скролл)

## Запуск проекта

```bash
yarn install
yarn dev
```

## Сборка и предпросмотр

```bash
yarn build
yarn preview
```

## Переменные окружения

В проекте используются только переменные с префиксом `VITE_`.

1. Для локальной разработки:

```bash
cp .env.example .env
```

2. Для production:

```bash
cp .env.production.example .env.production
```

### Список переменных

- `VITE_WHATSAPP_PHONE` — номер для ссылки WhatsApp в формате цифр (`998901234567`)
- `VITE_PHONE_DISPLAY` — отображаемый телефон на странице (`+998 90 123 45 67`)
- `VITE_PHONE_TEL` — телефон для `tel:` ссылки (`+998901234567`)
- `VITE_LOCATION_LABEL` — текст локации в контактах
- `VITE_MAPS_QUERY` — поисковый запрос для Google Maps

## Git и env

Файлы `.env` и `.env.*` игнорируются в git. В репозитории остаются только шаблоны:

- `.env.example`
- `.env.production.example`

## Скрипты

- `yarn dev` — dev-сервер
- `yarn build` — typecheck + production build
- `yarn preview` — локальный preview build
- `yarn lint` — ESLint
