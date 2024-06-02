# Movie Finder

> Movie Finder app demo built using [Nuxt 3](https://github.com/nuxt/nuxt), [Firebase](https://firebase.google.com/),[Tailwind](https://tailwindcss.com/docs/installation), [daiyUI](https://daisyui.com/), [Nuxt Google Fonts](https://nuxt.com/modules/google-fonts), [Eslint for Nuxt](https://nuxt.com/modules/eslint), [The Open Movie Database API](https://www.omdbapi.com/) and [TypeScript](https://github.com/microsoft/TypeScript).

**🍿 Live preview:** https://movie-finder-nuxt.netlify.app/

### Credentials for live demo 
```
user:     user@example.com
password: password
```

## API Keys & ENV Setup
For **OMDB** Please request your api key https://www.omdbapi.com/apikey.aspx.

Create your firebase app with email and password authentication method.
Create .env file from the .env.example and replace all values.


```
FIRE_API_KEY=
FIRE_AUTH_DOMAIN=
FIRE_PROJECT_ID=
FIRE_STORAGE_BUCKET=
FIRE_MESSAGING_SENDER_ID=
FIRE_APP_ID=
OMDB_API_KEY=
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
## Docker
You'll need to have installed Docker Desktop (https://www.docker.com/products/docker-desktop/)
Then run in your terminal from your project folder
```bash
docker build -t web_app .

docker-compose up -d
```