# Ghost OAuth2 Playground

Playground React + TypeScript per testare integrazione OAuth2/OIDC con `@iad-os/react-ghost-auth`, routing protetto con TanStack Router, UI MUI e fetch autenticato per API OpenAPI.

Il progetto e orientato a demo/sperimentazione, non a produzione.

## Obiettivo del progetto

Questa app mostra in modo pratico:

- login/logout tramite provider OIDC configurabile
- protezione di route private
- rendering user info autenticato
- gestione tema light/dark persistito in localStorage
- base client API con refresh token automatico su `401`

## Stack tecnico

- React 19 + TypeScript 5
- Vite 7
- TanStack Router (file-based routing)
- TanStack React Query
- Material UI 7
- Formik + Yup (form validation)
- Monaco Editor (view JSON user info)
- `@iad-os/react-ghost-auth` (core auth flow)
- `openapi-fetch` (client fetch typed)

## Funzionamento applicativo

### 1. Bootstrap app

`src/main.tsx` crea il router TanStack (`routeTree.gen.ts`) e wrappa l'app con `AppThemeProvider`.

### 2. Root providers

`src/routes/__root.tsx` monta:

- `QueryClientProvider` (React Query)
- `AuthenticationProvider` (ghost-auth)
- `AutoLogin` + `ModalLogin` (flow login guidato)
- `Logging` (stato di caricamento auth)

Nota: `onRoute` converte URL esterni in navigazione client-side (`navigate`).

### 3. Routing

Route principali:

- `/` -> pagina placeholder (`Hello "/"!`)
- `/public` -> area pubblica
- `/private` -> area protetta con `<RequireAuth autologin>`
- `/private/form` -> form demo Formik/Yup
- `/private/users` -> JSON `useUserInfo()` in Monaco editor

### 4. Navigazione/UI

`NavBar` gestisce:

- accesso rapido a `/public` e `/private/form`
- toggle tema
- pulsante login se non autenticato
- menu avatar con link user info e logout se autenticato

### 5. Fetch autenticato API

`src/api/openapiFetchAuth.ts`:

- legge token da `tokenService`
- aggiunge `Authorization: Bearer ...`
- su `401` tenta `refreshToken()`
- ritenta la chiamata con token aggiornato

## Struttura progetto

```text
.
|-- src/
|   |-- api/                  # fetch auth + (target) client/types generati OpenAPI
|   |-- components/           # componenti UI (navbar, modal login, avatar, loader)
|   |-- containers/           # shell root layout
|   |-- contexts/             # provider tema applicativo
|   |-- routes/               # route file-based TanStack
|   |-- theme/                # varianti MUI (light/dark, typography, breakpoints)
|   |-- authConfig.ts         # config provider OAuth2/OIDC
|   |-- main.tsx              # bootstrap applicazione
|   `-- routeTree.gen.ts      # autogenerato da TanStack Router plugin
|-- scripts/
|   `-- generateApi.ts        # generazione tipi/client da OpenAPI
|-- public/                   # asset statici
|-- Dockerfile
`-- vite.config.ts
```

## Setup locale

Prerequisiti:

- Node.js >= 18
- npm

Installazione:

```bash
npm install
```

Avvio dev:

```bash
npm run dev
```

Server locale: `http://localhost:3100`

Build produzione:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## Configurazione OAuth2/OIDC

File: `src/authConfig.ts`

Valori da personalizzare:

- issuer/authorization endpoint
- token endpoint
- client id
- redirect URI login/logout
- realm/base URL IdP

Nel codice attuale i valori sono placeholder (`http://hostname/...`), quindi la login non e pronta out-of-the-box senza configurazione ambiente reale.

## Generazione client OpenAPI

Script disponibile:

```bash
npm run generate:api -- --env .env
```

Comportamento script (`scripts/generateApi.ts`):

- carica env (default `.env`)
- legge `GENERATE_API_BASE_URL`
- genera tipi in `src/api/types/*.d.ts`
- genera client in `src/api/clients/*.api.ts`

## Docker

`Dockerfile` multi-stage:

1. build con Node (`npm ci`, `npm run build`)
2. runtime con Nginx Alpine + SPA fallback (`.docker/nginx.conf`)

Build immagine:

```bash
docker build -t ghost-oauth2-playground .
```

Run:

```bash
docker run --rm -p 8080:80 ghost-oauth2-playground
```

## Audit best practice (struttura + qualita)

Verifica effettuata sul repository corrente (stato attuale):

### Aspetti positivi

- buona separazione per dominio (`routes`, `components`, `theme`, `api`)
- TypeScript strict attivo (`strict`, `noUnusedLocals`, `noUnusedParameters`)
- routing moderno tipizzato con TanStack
- Docker multi-stage corretto per SPA statica

### Gap critici da correggere

1. Build TypeScript fallisce:
   - errore su `src/authConfig.ts`: proprieta provider non compatibili col tipo `AuthenticationConfig`
2. Lint non operativo:
   - ESLint v9 richiede `eslint.config.*`, ma progetto usa `.eslintrc.cjs`
3. Pipeline OpenAPI incompleta:
   - script usa `openapi-typescript` e `openapi-react-query` ma non sono dipendenze installate

### Gap importanti (non bloccanti ma rilevanti)

1. Config auth incoerente:
   - `redirect_uri` impostato su `/protected` (route non presente)
   - typo `defualt` in provider config
2. Accessibilita e robustezza UI:
   - prop `oaria-describedby` (typo) in `AvatarButton`
   - lista provider login senza `key` React in `ModalLogin`
3. Hygiene runtime:
   - `console.log` in `src/theme/index.ts`
   - uso `alert(...)` per error handling auth in root route
4. Test strategy assente:
   - presente `setupTests.ts`, ma non ci sono test e script `test`

## Priorita consigliate

1. Ripristinare green build (`npm run build`) sistemando `authConfig.ts`
2. Migrare configurazione ESLint a flat config (v9) e aggiungere script `lint`
3. Allineare script OpenAPI: dipendenze, output path e naming env
4. Introdurre smoke test minimi su route pubblica/protetta
5. Rendere `authConfig` environment-driven (`.env`, fallback sicuri)

## Riferimento Context7

README riscritto seguendo principi di documentazione pratica in stile Context7:

- orientamento operativo (quick start + comandi reali)
- contesto tecnico minimo ma completo
- evidenza esplicita di limiti e stato qualitativo
- indicazioni version-aware e remediation concrete

Riferimento: https://context7.com/
