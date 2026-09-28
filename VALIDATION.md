# Validation — 28 September 2026

Passed:

- Next.js 16.3.6 production build and TypeScript check.
- All local assets referenced by exported HTML exist.
- HTTP 200 for home, CV PDF, both local fonts, social image, and static 404 document.
- Desktop visual inspection at 1280px and 1920px; mobile inspection at 390px and 744px.
- Full-bleed backgrounds verified at 1920px: skills and work sections both span the viewport width, with no horizontal overflow.
- All six project dialogs have accessible names and individual project links. The SeedFunds dialog was visually checked after replacing the Figma capture.
- Six project images are included in the static export and return HTTP 200 with the correct JPEG content type.
- Mobile menu opens, navigates to Contact, and closes afterward.
- Pause motion updates its pressed state; back-to-top navigation works.
- Copy email displays a successful clipboard confirmation.
- Email and LinkedIn anchors use the CV's real contact information.
- No browser console errors recorded in the final UI checks.

Reduced-motion CSS and a system preference listener are implemented. Automated screen-reader testing and a full accessibility audit were not performed.

The static export and source are complete and portable. The Sites project remains owner-private unless its sharing settings are explicitly changed.
