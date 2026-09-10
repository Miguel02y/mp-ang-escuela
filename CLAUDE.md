# mp-ang-escuela

Sistema escolar: frontend en Angular (`frontend/`), con la base documental
para un futuro backend en .NET (`docs/backend-hand-off.md`).

## Convenciones de código

Las reglas de código, seguridad, accesibilidad, tests y Git/GitHub están en
[.github/copilot-instructions.md](.github/copilot-instructions.md) — esa es
la fuente de verdad, síguela siempre (standalone components, signals,
`OnPush`, `inject()`, formularios reactivos tipados, sin `any`, OWASP,
Conventional Commits).

## Comandos

Todo se ejecuta dentro de `frontend/`:

```bash
npm ci                # instalar dependencias (usa el lockfile)
npm start             # ng serve, http://localhost:4200
npm run build         # build de producción -> dist/frontend/browser
npm test              # ng test (Karma + Jasmine)
```

## Subagentes

En `.claude/agents/` hay subagentes especializados para este repo:

- **angular-builder** — implementa componentes/features Angular siguiendo
  las convenciones del proyecto.
- **code-reviewer** — revisa cambios antes de commit/PR (seguridad,
  accesibilidad, convenciones).
- **devops** — mantiene y depura los workflows de GitHub Actions (CI/CD) y
  la configuración de build/deploy.

## Ramas y despliegue

- `feature/*` → PR hacia `integracion` → al mergear se despliega a
  **staging** en Cloudflare Pages.
- `integracion` → PR hacia `main` → al mergear se despliega a
  **producción** en Cloudflare Pages.

El deploy lo ejecuta `.github/workflows/deploy.yml` vía GitHub Actions
(`cloudflare/pages-action`); `.github/workflows/ci.yml` corre build+test en
cada push/PR como chequeo previo al merge.
