# Karya Halim to MJU Route and Component Parity Map

## Task 1 Result (Environment Verification)
- Active branch: `redesign`
- Git HEAD: `ref: refs/heads/redesign`
- Working tree status: not clean (`docs/` currently untracked)
- Note: Task 2 executed despite non-clean tree because it does not require code mutation outside docs.

## Source Route Inventory (Karya Halim)

### Included in Scope
- `/`
- `/about-us/our-company`
- `/about-us/our-team`
- `/about-us/our-team/:slug`
- `/about-us/certifications`
- `/about-us/company-awards`
- `/products`
- `/gallery`
- `/news`
- `/news/:slug`
- `/services`
- `/services/:slug`
- `/career/employee`
- `/career/intern`
- `/contact`
- `/location`
- `*`

### Excluded (Portfolio)
- `/works`
- `/works/:slug`

### Redirect/Compatibility Routes
- `/about` -> `/about-us/our-company`
- `/about-us` -> `/about-us/our-company`
- `/career` -> `/career/employee`

## Shared Layout and Global Dependencies
- `src/components/AppLayout.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/ScrollToTop.tsx`
- `src/components/MotionSection.tsx`
- `src/components/SEO.tsx`
- `src/lib/i18n.tsx` plus `src/lib/i18n-en.ts`, `src/lib/i18n-id.ts`
- `src/lib/seo.ts`, `src/lib/seo-pages.ts`

## Page to Component/Data Mapping (Included Pages)

| Route | Source page | Primary component dependencies | Primary lib/data dependencies | Planned MJU target | Current MJU status |
| --- | --- | --- | --- | --- | --- |
| `/` | `src/pages/Index.tsx` | `HeroSection`, `ServicesSection`, `ProjectsSection`, `ClientsSection`, `NewsSection`, `CTASection` | `i18n`, `seo`, `seo-pages` | `src/pages/Index.tsx` | Exists (needs parity refactor) |
| `/about-us/our-company` | `src/pages/about-us/OurCompany.tsx` | `AboutSection`, `VisionMissionSection`, `CompanyStrategySection` | `i18n`, `seo`, `seo-pages` | `src/pages/about-us/OurCompany.tsx` | Missing |
| `/about-us/our-team` | `src/pages/about-us/OurTeam.tsx` | `MotionSection`, `Badge` | `team`, `certifications`, `i18n`, `seo`, `seo-pages` | `src/pages/about-us/OurTeam.tsx` | Missing |
| `/about-us/our-team/:slug` | `src/pages/about-us/TeamMemberDetail.tsx` | `Badge`, `Button`, `Card` | `team`, `i18n`, `seo` | `src/pages/about-us/TeamMemberDetail.tsx` | Missing |
| `/about-us/certifications` | `src/pages/about-us/CertificationGallery.tsx` | `Badge`, `Dialog` | `i18n`, `seo`, `seo-pages` | `src/pages/about-us/CertificationGallery.tsx` | Missing |
| `/about-us/company-awards` | `src/pages/about-us/CompanyAwardsGallery.tsx` | `Badge`, `Dialog` | `i18n`, `seo`, `seo-pages` | `src/pages/about-us/CompanyAwardsGallery.tsx` | Missing |
| `/products` | `src/pages/Products.tsx` | `Button`, `Badge`, `Input`, `ScrollArea` | `i18n`, `i18n-en`, `email-config`, `seo`, `seo-pages` | `src/pages/Products.tsx` | Missing |
| `/gallery` | `src/pages/Gallery.tsx` | `GalleryImageCard`, `Button`, `Dialog`, `Badge` | `gallery-data`, `i18n`, `seo`, `seo-pages` | `src/pages/Gallery.tsx` | Missing |
| `/news` | `src/pages/News.tsx` | `NewsSection` | `i18n`, `seo`, `seo-pages` | `src/pages/News.tsx` | Missing |
| `/news/:slug` | `src/pages/NewsDetail.tsx` | `Badge`, `Button`, `Card`, `Separator`, `Progress`, `useToast` | `news`, `i18n` | `src/pages/NewsDetail.tsx` | Missing |
| `/services` | `src/pages/Services.tsx` | `ServicesSection` | `i18n`, `seo`, `seo-pages` | `src/pages/Services.tsx` | Missing |
| `/services/:slug` | `src/pages/ServiceDetail.tsx` | `Card`, `Button`, `Badge` | `services`, `projects`, `i18n` | `src/pages/ServiceDetail.tsx` | Missing |
| `/career/employee` | `src/pages/CareerEmployee.tsx` | `Card`, `Badge`, `Button` | `email-config`, `i18n`, `seo`, `seo-pages` | `src/pages/CareerEmployee.tsx` | Missing |
| `/career/intern` | `src/pages/CareerIntern.tsx` | `Card`, `Badge`, `Button`, `CareerSupportedBySection` | `email-config`, `i18n`, `seo`, `seo-pages` | `src/pages/CareerIntern.tsx` | Missing |
| `/contact` | `src/pages/Contact.tsx` | `Card`, `Button`, `Input`, `Textarea` | `email-config`, `i18n`, `seo`, `seo-pages` | `src/pages/Contact.tsx` | Missing |
| `/location` | `src/pages/Location.tsx` | `LocationMap` | `i18n`, `seo`, `seo-pages` | `src/pages/Location.tsx` | Missing |
| `*` | `src/pages/NotFound.tsx` | `Button`, `Card` | `i18n`, `seo` | `src/pages/NotFound.tsx` | Exists (needs parity refactor) |

## Excluded Route Mapping (Portfolio)

| Route | Source page | Reason |
| --- | --- | --- |
| `/works` | `src/pages/Works.tsx` | User requested to exclude portfolio page |
| `/works/:slug` | `src/pages/WorkDetail.tsx` | User requested to exclude portfolio detail page |

## Gap Summary for Next Execution Batch
- Create missing page files under `src/pages` and `src/pages/about-us` for all included routes.
- Add missing shared components: `AppLayout`, `ScrollToTop`, `MotionSection`, `LocationMap`, `GalleryImageCard`, `NewsSection`, `CTASection`, `ClientsSection`, `VisionMissionSection`, `CompanyStrategySection`, `CareerSupportedBySection`.
- Add missing lib modules aligned with MJU content: `services`, `news`, `team`, `gallery-data`, `certifications`, `seo`, `seo-pages`, and i18n split files.
