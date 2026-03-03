<div align="center">
  <h1>Iriko.mg 🌿</h1>
  <p>❝ Vokatra Tsara no tanjonay ❞</p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/shadcn/UI-000000?style=for-the-badge&logo=react&logoColor=white" alt="shadcn/UI" />
    <img src="https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo" />
    <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm" />
  </div>

  <br />

  <img src="https://github.com/Ramaherito-Heriniaina/Iriko.mg/actions/workflows/ci.yml/badge.svg" alt="CI" />
</div>

---

## What is Iriko.mg?

**Iriko.mg** is a Malagasy company committed to promoting **sustainable development, community empowerment, and the valorisation of local know-how** across Madagascar.

The platform covers four core pillars:

| Pillar                          | Description                                                                |
| ------------------------------- | -------------------------------------------------------------------------- |
| **Formation & Animation**       | Team building, event hosting, professional training, and personal coaching |
| **Agrobusiness & Agrotourisme** | Sustainable agriculture and responsible agro-tourism initiatives           |
| **RSE Iriko**                   | Corporate social responsibility programs rooted in local values            |
| **LEMA**                        | A dedicated ecosystem for entrepreneurship and community leadership        |

> [!IMPORTANT]
> Iriko.mg/LEMA is currently under active development and is not yet ready for production use.

> [!NOTE]
> This repository uses a **monorepo architecture** powered by **Turborepo**.
> It hosts multiple applications and shared packages in a single codebase, enabling consistency, reuse, and scalable development.

---

## Adding UI Components

To add a shadcn/ui component, run the following from the repo root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components are placed in `packages/ui/src/components` and importable across all apps:

```tsx
import { Button } from '@irikomg/ui/components/button';
```

---

## Internationalization

The website supports two locales:

| Locale | Language |
| ------ | -------- |
| `fr`   | French   |
| `mg`   | Malagasy |

All translatable strings live in `apps/web/i18n/dictionaries/`. The active locale is resolved from the URL prefix (e.g. `/fr/`, `/mg/`).

---

## License

This project is proprietary. See [LICENSE](./LICENSE) for full terms.
Non-commercial use is permitted with attribution. Commercial use requires written permission from IRiKO.MG.

For licensing inquiries: [irikomg@iriko.org](mailto:irikomg@iriko.org)
