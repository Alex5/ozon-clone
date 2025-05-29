# 🛒 React Lavka

**React Lavka** — это веб-приложение, построенное на базе React 19, Vite и SWR, с модульной архитектурой и современными практиками разработки.

## 🚀 Демо

[Открыть демо](https://alex5.github.io/react-lavka)

## 📦 Установка

```bash
git clone https://github.com/alex5/react-lavka.git
cd react-lavka
npm install
```

## 🛠 Скрипты

- `npm run dev` — запуск приложения в режиме разработки
- `npm run build` — сборка проекта с компиляцией TypeScript
- `npm run preview` — предпросмотр собранного проекта
- `npm run lint` — запуск линтинга с помощью ESLint
        |

## 🧱 Стек технологий

- **React 19**
- **React Router 7**
- **SWR 2** — для работы с удалёнными данными
- **Vite 6** — быстрый современный сборщик
- **TypeScript**
- **CSS Modules** (с поддержкой через `typescript-plugin-css-modules`)
- **ESLint** — для анализа качества кода
- **MSW** — для имитации API в процессе разработки

## 🧪 Моки API

Проект использует [Mock Service Worker (MSW)](https://mswjs.io/) для создания моков API. Каталог воркеров настроен на директорию `public/`.