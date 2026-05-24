# Page Editing Patterns

Use this when the user asks for design, style, or layout changes on a specific
page in an existing codebase. The correct output is source edits in the user's
project, not a separate generated mockup.

## Translate Requests To Edits

| User wording | Source action |
| --- | --- |
| "Make this text bigger" | Find the rendered element, update its component class/token, then verify desktop and mobile wrapping. |
| "Delete this text" | Remove the content from the source, not with CSS hiding, unless it must stay for accessibility or SEO. |
| "Move this section" | Reorder the page/component composition and fix surrounding spacing, anchors, and imports. |
| "Change the layout" | Adjust grid/flex structure, width constraints, section order, and responsive breakpoints. |
| "Make it more modern/professional" | Improve hierarchy, spacing, type scale, contrast, copy specificity, and component consistency. |
| "Put a slider here" | Reuse an existing carousel/slider first; otherwise build a small accessible component. |
| "Add a flag for language" | Connect to existing i18n routing/state. Show flag plus language label or locale code with `aria-label`. |

## Edit Loop

1. Identify the exact route and component responsible for the visible area.
2. Take or inspect a baseline screenshot when possible.
3. Make one coherent visual pass: structure, spacing, typography, color, or component behavior.
4. Refresh the preview and check for overflow, broken imports, layout shift, and console errors.
5. Repeat until the requested visual change is clearly visible.

## Existing Project Guardrails

- Do not create `index.html`, a standalone prototype, or a new app when the
  user has provided a framework project.
- Do not duplicate a page into a new route to make redesign easier.
- Do not replace the app shell, router, i18n setup, auth flow, or data layer for
  visual-only requests.
- If a requested edit needs a new component, add it inside the existing
  component structure and import it where the page already composes content.
- If the live preview is already running, use that URL instead of starting a
  second server unless the current server is broken.

## Slider/Carousel Minimum

- Stable frame size so slides do not resize the page.
- Previous and next buttons with accessible labels.
- Slide indicators or current-position text.
- Keyboard support for arrow keys when focused.
- No autoplay unless the user asks for it.
- Respect reduced motion if adding transitions.

## Language Switcher Minimum

- Use existing locale files, route prefixes, middleware, or router helpers.
- Preserve the current page when switching languages when feasible.
- Do not represent a language by flag alone.
- Keep the control compact in desktop nav and reachable in mobile nav.

## Visual QA

- Body text is readable without zooming.
- Headings are larger but not clipped on mobile.
- Buttons and nav items do not wrap awkwardly.
- Moved sections still make narrative sense.
- Removed sections do not leave empty bands or orphan dividers.
