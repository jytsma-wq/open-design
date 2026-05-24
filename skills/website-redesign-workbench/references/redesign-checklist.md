# Redesign Checklist

Use this reference for full website polish passes before deployment.

## Visual Quality

- Clear first viewport: product, promise, primary action, and navigation are
  understandable within five seconds.
- Requested design, style, and layout changes are visibly implemented on the
  target route, not only described in the response.
- Section rhythm is deliberate: no random card piles, orphan headings, or
  oversized empty bands.
- Typography has a real scale: body, labels, nav, headings, and hero text are
  distinct but not chaotic.
- Palette avoids generic AI defaults: no excessive purple-blue gradients, vague
  glass cards, decorative blobs, or single-hue sameness unless brand-required.
- Important CTAs are visually primary and repeated only where useful.
- Images reveal the actual product, UI, person, place, or outcome.

## Product Coherence

- Copy says what the product does, for whom, and why it matters.
- Fake stats, filler testimonials, dead links, and lorem ipsum are removed.
- Navigation labels match real destinations.
- Forms have labels, validation, disabled/loading states, and success/error
  feedback.
- Pricing, checkout, sign-in, and onboarding flows do not contradict each other.

## Responsive QA

- Check at least desktop and mobile widths.
- Text does not overflow buttons, cards, tabs, nav, or badges.
- Larger text still fits at mobile widths without clipping or hiding important
  actions.
- Sticky headers, modals, menus, and drawers do not block primary content.
- Horizontal scrolling only exists when it is an intentional interaction.
- Tap targets are large enough and not crowded.

## Interactive Components

- Sliders/carousels have stable dimensions, previous/next controls, indicators,
  and keyboard access.
- Language switchers preserve current route when feasible and use flag cues only
  with a language label, locale code, or accessible label.
- Moving or removing components does not leave broken spacing, dead imports, or
  unreachable content.

## Accessibility

- Text contrast is readable on all main surfaces.
- Interactive controls are keyboard reachable.
- Focus states are visible.
- Semantic headings follow a useful order.
- Images with product meaning have useful alt text.
- Motion is subtle and does not hide required information.

## Deployment Readiness

- Dev server renders without console-blocking errors.
- Build or typecheck passes when available.
- No obvious secrets are committed or displayed in client code.
- Metadata, title, favicon, Open Graph image, and canonical URL are reasonable.
- Environment variable requirements are documented or obvious from existing
  project config.
