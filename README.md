<img alt="demo" src="https://fernd3v.vercel.app/assets/demo.gif">

# fern_d3v — Terminal Portfolio

A terminal-style portfolio built with Next.js, tailored for my personal site. Type help to discover commands, or just start exploring.

Live: https://fernd3v.vercel.app/

## Features
- Terminal UI with command history, tab-completion, and keyboard shortcuts
- Custom PS1 prompt (username@host:$ ~)
- Built-in commands for About, Links, Donate, GitHub Projects, and more
- Theming via Tailwind + JSON config (light/dark palette)
- Zero-config deploys on Vercel

## Quick start
- Requirements: Node 16+ (Node 18 recommended), npm

- Install and run dev server:
```bash
npm install
npm run dev
```
- Build and run production locally:
```bash
npm run build
npm start
```

## Commands
- help — list available commands
- sumfetch — summary card with links
- about — who I am and what I’m building
- repo — open this repository
- email — open a mailto to reach me
- github — open my GitHub profile
- linkedin — open my LinkedIn
- donate — support links (ko-fi)
- projects — list public repos from my GitHub
- echo <text> — print text
- whoami — print username from config
- ls, cd, date — fun shell-ish commands
- clear — clear the terminal (or press Ctrl+L)

Shortcuts:
- Tab — autocomplete commands
- Ctrl+L — clear terminal
- Ctrl+C — cancel current input

## Customize
All customization lives in `config.json`.
- Title, name, ps1_username/ps1_hostname
- Social links (GitHub, LinkedIn, Twitter)
- Email and donate links
- Colors — light/dark palettes used by Tailwind via `tailwind.config.js`
- ASCII header (set `ascii` to "fern_d3v" to use the pre-rendered `/public/assets/ascii.html` in `sumfetch`)

Edit the intro/banner and commands in:
- `src/utils/bin/commands.ts` (static commands)
- `src/utils/bin/api_commands.ts` (API-backed commands like `projects`)
- `src/utils/bin/sumfetch.ts` (summary panel)

UI bits:
- `src/components/input.tsx`, `src/components/history/*`, `src/components/Ps1.tsx`
- Home page: `src/pages/index.tsx`
- Global styles: `src/styles/global.css`

Assets live under `public/assets`.

## Theming
Tailwind consumes colors from `config.json` via `tailwind.config.js`.
- Update `colors.light.*` and `colors.dark.*` to adjust the palette.
- Dark mode follows the OS preference (`darkMode: 'media'`).

## Deploy (Vercel)
- Import this repo in Vercel
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next` (auto)
- Every push to `main` redeploys

## Docker (optional)
- Build dev image and run with hot reload:
```bash
docker compose up --build
```
- Production image target is included in `Dockerfile`.

## Roadmap / Ideas
- Add a proper 1200×630 social preview image and set OG/Twitter tags
- More commands (blog, resume, now, stats)
- Command piping and arguments

## License
MIT

## Credits
Originally based on LiveTerm by Cveinnt: https://github.com/Cveinnt/LiveTerm

This fork customizes the palette, content, and asset layout for my personal site.

## Extra Tools
[ASCII Art Generator](https://www.asciiart.eu/image-to-ascii) - I used this to convert my social pfp into ascii art. It gives you a lot of control over the image.

---
[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/fernd3v)
