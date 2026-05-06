# Pending Work Vault

This file tracks what is still pending so we can continue tomorrow quickly.

## 1) Content finalization

- Replace remaining placeholder/dummy text in all sections with final copy.
- Confirm exact employment timeline (month + year) for all client/project phases.
- Finalize polished experience bullets for:
  - Nilaya Anthology (Asian Paints)
  - Beautiful Homes (Asian Paints)
  - BuildWise
  - eDesign
  - Foyr Neo 3.0
- Verify final project titles, impact statements, and ordering.

## 2) Project links and visibility

- Add real public links for projects where possible.
- Keep private projects disabled with tooltip (already supported) and update tooltip messages if needed.
- Add final repo/demo links for React/Vue UI libraries (or keep private by decision).

## 3) Certifications and education details

- Add real certification URLs once available.
- Verify all education years and labels are final.
- Recheck school/institute formatting consistency.

## 4) Contact and form integration

- Add real Web3Forms key in `src/data/portfolioContent.js`:
  - `contact.formAccessKey`
- End-to-end test form submission and inbox delivery.
- Confirm fallback behavior/messages if API is unavailable.

## 5) QuickDock + mini-window behavior

- Test mini-window behavior on multiple Chromium browsers.
- Decide final mini-window dimensions/spacing and visual style.
- Confirm tab-switch behavior UX is exactly as expected.

## 6) Navbar and responsive QA

- Full responsive QA on: `375`, `480`, `768`, `1024`, `1280`, `1600`.
- Verify mobile menu spacing/tap targets and sticky header behavior.
- Optional: add active section highlight while scrolling.

## 7) i18n pass (EN + HI only)

- Recheck Hindi copy quality/tone for final launch.
- Ensure no untranslated fallback keys appear anywhere.

## 8) Final polish before deploy

- Replace any remaining placeholder contact/social/project values.
- Final cross-browser smoke test (Chrome/Edge at minimum).
- Final build + deploy flow:
  - `npm run build`
  - `npm run deploy`

