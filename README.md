# André Andrade — Portfolio

Portfolio pessoal de André Andrade, Desenvolvedor Front-End com 9 anos de experiência em React, Next.js e TypeScript.

**Site:** [andredeandrade.dev](https://andredeandrade.dev)

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **i18n** via rotas dinâmicas `[locale]` (pt-BR / en-US)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável               | Descrição                         | Padrão                       |
| ---------------------- | --------------------------------- | ---------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (para SEO/OG) | `https://andredeandrade.dev` |

Crie um `.env.local` na raiz para sobrescrever em desenvolvimento:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção             |
| `npm run start` | Inicia o servidor de produção        |
| `npm run lint`  | Executa o ESLint                     |
