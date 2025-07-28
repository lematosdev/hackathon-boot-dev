# D&D 5e Character Creator

A web application for creating and managing D&D 5e character sheets for the Boot Dev Hackathon 2025. Built with SvelteKit (client) and Deno + Hono (server). While some features are still in progress, this was an incredible learning experience! The hackathon pushed me to explore new technologies and think creatively about solving real problems.
Thanks to Boot Dev for organizing this event. I look forward to participating in future hackathons and continuing to improve this project. A special shoutout to @jmejiasb and @juanpablopiano for their help in building this app.

You can find the live demo (not fully functional at the moment but quite pretty in my opinion) at https://carlosmatos-hackathon-b-48.deno.dev/.

## Features

- Create, edit, and manage D&D 5e characters
- AI-powered name and backstory generation (requires Gemini API key)
- Modern UI with SvelteKit and Tailwind CSS

## Getting Started

### Prerequisites

- [Deno](https://deno.com/)
- [Node.js](https://nodejs.org/) (for client)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Setup

#### Server

```sh
deno task server
```

#### Client

```sh
cd client
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to use the app.

## Project Structure

- `client/` — SvelteKit frontend
- `server/` — Deno + Hono backend API
- `types/` — Shared TypeScript types for D&D 5e data
- `utils/` — Shared utility functions

## Development

- Format and lint code:  
  ```sh
  deno task format
  ```

- Environment variables:  
  Create a `.env` file for API keys (e.g., `GEMINI_API_KEY`).

## To Improve

- Add tests
- Improve types in Hono routes
- Refactor to avoid using handlers

## License