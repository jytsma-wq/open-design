---
name: website-redesign-workbench
description: |
  Use when the user provides or links an existing website codebase, wants that
  codebase opened in preview, or asks to redesign pages,
  polish LLM-built sites before deployment, make design/style/layout changes,
  change page layout, resize text, move/remove sections or components, add
  sliders/carousels, add language switchers/flags, run a live preview loop, or
  perform responsive/browser QA without losing existing functionality.
triggers:
  - "redesign website"
  - "redesign this codebase"
  - "redesign this page"
  - "design changes"
  - "style changes"
  - "layout changes"
  - "make this page better"
  - "polish before deploy"
  - "preview workset"
  - "live preview"
  - "uploaded codebase"
  - "existing codebase"
  - "open my codebase"
  - "use my project"
  - "do not create a project"
  - "do not start from scratch"
  - "LLM website cleanup"
  - "make this site look professional"
  - "make text bigger"
  - "move this component"
  - "delete this section"
  - "add slider"
  - "add carousel"
  - "language flag"
  - "language switcher"
od:
  mode: prototype
  surface: web
  platform: desktop
  scenario: validation
  category: web-artifacts
  preview:
    type: markdown
  design_system:
    requires: true
  craft:
    requires: [typography, color, anti-ai-slop]
  capabilities_required:
    - file_write
---

# Website Redesign Workbench

Use this skill to turn an existing website codebase into a cleaner,
deployment-ready site through a live preview loop. Preserve working behavior,
improve the product surface, and verify changes visually before handoff. Do
not create a new starter app, demo artifact, or replacement project unless the
user explicitly asks for a new build.

The user often wants practical page surgery: bigger text, less copy, moved
sections, removed blocks, added sliders, language flags, and changed component
order. Treat those as implementation requests, not as critique prompts.

## Operating Principles

- Treat the user's existing codebase as the source of truth. Read the project shape
  before changing visuals.
- Start from the current source tree and preview URL. Never answer a redesign
  request by creating a separate HTML mockup, generated starter, or new
  project folder when a real codebase is available.
- Prefer targeted redesign over rewrites. Keep routing, data flow, forms,
  analytics hooks, SEO metadata, and deployment config unless the user asks to
  change them.
- Work in the running app, not static guesses. Start or use the existing dev
  server and inspect the rendered page after meaningful edits.
- Keep a fast preview loop: inspect, edit, refresh, screenshot, repeat.
- Make the site feel intentionally designed, not merely decorated.
- If the user refers to "this page" and the active preview route is known, use
  that route. If not, infer the most likely route and state the assumption.
- Do not deploy, buy domains, publish, or push to production unless the user
  explicitly asks.

## Existing Codebase Mode

Default to this mode whenever the user wants to work on "my codebase", "my
project", or an already running preview.

1. Confirm or infer the project root and preview URL.
2. Inspect the existing stack and routes before editing. Do not scaffold.
3. Reuse the project's dev server command and package manager.
4. Edit source files in place: pages, route components, shared components,
   styles, tokens, assets, or locale files.
5. Keep generated artifacts out of the workflow unless the user asks for a
   standalone mockup.
6. When unsure where a visible element lives, search the source and inspect the
   rendered page instead of recreating it elsewhere.

Use this starter prompt for existing-codebase work:

```text
Use $website-redesign-workbench in existing codebase mode.

Open my current codebase in preview. Do not create a new project, mockup, or
starter app. First identify the framework, package manager, dev server command,
routes, styling system, and the files that control the page I am viewing. Then
make the requested design, style, and layout changes directly in the existing
source files. Verify the result in desktop and mobile preview. Do not deploy.
```

## Intake

When a full or linked codebase is available, first build a compact map:

1. Identify framework and package manager from `package.json`, lockfiles, and
   config files.
2. Locate entry routes/pages, reusable components, global CSS, theme tokens,
   assets, content files, and deployment config.
3. Find the user-visible screens that matter for launch: homepage, pricing,
   auth, dashboard, checkout, forms, docs, or marketing pages.
4. Note existing design constraints: brand colors, fonts, layout system,
   component library, CSS framework, and responsive breakpoints.
5. Check whether generated code has fragile assumptions: hardcoded demo data,
   missing states, placeholder copy, fake links, inaccessible controls, or
   broken mobile layout.
6. Ignore install/build/runtime noise when uploaded: `node_modules`, `.git`,
   `.next`, `.nuxt`, `dist`, `build`, `.turbo`, `.cache`, `coverage`, `.env`,
   and generated reports.

If the user uploaded only part of a project, state the missing assumptions
briefly and continue with the visible surface.

## Preview Loop

1. Use the repo's existing scripts and lifecycle. Prefer `pnpm`, `npm`, `yarn`,
   or `bun` according to the lockfile.
2. Start the dev server on an available port, or reuse the active preview URL.
3. Capture the baseline: desktop screenshot, mobile screenshot when relevant,
   and key visible issues.
4. Edit the smallest set of files that controls the visible result.
5. Refresh the preview after each coherent pass.
6. Compare before and after. Fix regressions immediately.
7. Run the lightest validation that matches the changed surface: typecheck,
   lint, build, or package-specific tests.

When browser automation is available, use it for screenshots and rendered-state
checks rather than relying on code inspection alone.

## Page Editing Mode

For page-level redesign instructions, map the user's words to concrete source
edits before changing files:

- Bigger text: adjust existing type scale, component classes, or tokens. Check
  wrapping on mobile and avoid overflowing buttons, cards, nav, and badges.
- Delete or reduce text: remove filler copy, duplicate claims, and weak AI
  phrasing. Keep required legal, pricing, form, or SEO content unless asked.
- Move a section/component: reorder the page composition at the source, then
  clean up spacing, imports, anchors, and responsive order.
- Remove a component: delete the rendered block and dead imports/state only
  when they become unused.
- Add a slider/carousel: first reuse an existing component or dependency. If no
  suitable one exists, implement a small accessible carousel with previous/next
  controls, slide indicators, keyboard support, and stable responsive sizing.
- Add a language flag/switcher: use the existing i18n/routing system when
  present. A flag can be used as a visual cue, but include a language name or
  locale code and an accessible label because flags are not languages.
- Change visual weight: prefer tokens, global styles, or shared variants over
  one-off class piles when the same decision appears on multiple pages.

Read `references/page-editing-patterns.md` when handling several page-edit
commands in one turn or when adding sliders, carousels, or language controls.

## Redesign Priorities

Improve in this order:

1. Information hierarchy: clear primary action, readable page structure, no
   ambiguous sections.
2. Layout discipline: consistent grid, spacing, alignment, and responsive flow.
3. Typography: fewer sizes, stronger scale, better line length, no cramped UI.
4. Color and contrast: restrained palette, accessible contrast, purposeful
   accent use.
5. Components: consistent buttons, cards, nav, forms, modals, empty states,
   loading states, and error states.
6. Motion: subtle transitions only where they clarify state or polish
   interaction.
7. Content credibility: remove lorem ipsum, vague AI copy, duplicate claims,
   fake metrics, and placeholder links.

Read `references/redesign-checklist.md` when doing a full launch audit or when
the user asks for a detailed review.

## Source Editing Rules

- Edit source files, not generated build output.
- Preserve existing design-system or component-library patterns when they are
  present.
- Avoid adding heavy dependencies for simple visual changes.
- Keep assets local or use already-approved project assets unless the user asks
  for new external media.
- For Tailwind/shadcn projects, prefer tokens and existing component variants.
- For plain CSS projects, centralize repeated values in existing variables or
  global rules when practical.
- For Next.js, Remix, Astro, Vite, SvelteKit, and similar apps, keep server and
  client boundaries intact.

## Handoff

End with:

- What changed from a user's perspective.
- Files touched.
- Preview URL if a server is running.
- Validation performed and any failures.
- Remaining launch risks, if any.

Do not claim deployment readiness without a successful rendered preview and at
least one matching validation command.
