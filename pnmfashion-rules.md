# PNM Fashion Website Operating Manual

This file is the permanent operating manual for future work on the PNM Fashion website. It must be read before making changes to the site.

## Project Identity

PNM Fashion is a premium wholesale textile supplier in Kuala Lumpur. The website must position the business as established, trustworthy, product-focused, easy to contact, and business-oriented.

The core positioning is:

- Premium
- Wholesale
- Modern
- Traditional

The primary customers are:

- Retailers
- Boutiques
- Traders
- Exporters
- Manufacturers
- Suppliers

The site must feel like a serious textile supplier with a large selection and practical wholesale ordering. It must never feel like:

- An AI-generated website
- A startup SaaS product
- A crypto company
- A tech company
- A luxury fashion brand

## Current Website Structure

The current site is a static website with:

- `index.html` as the homepage
- `catalog.html` as the product and services catalog page
- `assets/js/data.js` as the generated product data source
- `assets/js/main.js` as an additional shared JavaScript runtime from an earlier build system
- `assets/css/styles.css` as an additional shared stylesheet from an earlier build system
- `assets/images/` as the product and brand image library
- `robots.txt` and `sitemap.xml` for SEO discovery

Future work must preserve this structure unless a change is explicitly requested.

## Brand Identity

PNM Fashion should communicate textile heritage, reliable wholesale supply, and easy business contact.

Use language that emphasizes:

- Wholesale fabric and garment supply
- Stock availability
- Practical MOQs
- Reliable repeat ordering
- Kuala Lumpur showroom presence
- Established since 1992
- Traditional textile categories such as sarees, songket, kaftans, baju kurung, cotton, polyester, blends, mens shirts, and boys wear

Avoid language that sounds like:

- Venture-backed startup marketing
- Generic AI website copy
- Luxury fashion editorial copy
- Tech-platform jargon
- Crypto or Web3 language
- Overly abstract brand statements

Good tone:

- Clear
- Commercial
- Warm
- Direct
- Supplier-focused
- Trust-building

Bad tone:

- Flashy
- Futuristic
- Overly minimal
- Overly poetic
- Consumer luxury focused
- Software-product focused

## Visual Design Rules

Preserve the existing design language unless explicitly instructed otherwise.

The current visual system uses:

- Warm cream backgrounds
- Deep maroon and burgundy navigation and hero sections
- Gold accents
- White product and content cards
- Modest shadows
- 6px to 10px border radii
- Product-first imagery
- Clear WhatsApp calls to action
- Dense but readable business information

Future design changes must:

- Keep the site product-focused
- Keep sections readable and practical
- Preserve visual hierarchy between homepage, category cards, catalog cards, services, FAQ, contact, and footer
- Preserve the existing card style for categories and products
- Preserve the sticky header and mobile drawer behavior
- Preserve the WhatsApp floating button
- Preserve the current balance of traditional textile warmth and modern wholesale clarity

Do not:

- Redesign the entire site unless specifically requested
- Introduce large abstract gradient sections that do not support the textile brand
- Add decorative AI-looking blobs, glassmorphism, neon effects, crypto-style visuals, or SaaS dashboard patterns
- Make the site look like a luxury fashion magazine
- Replace product imagery with generic stock imagery
- Add social media sections unless explicitly requested

## Typography Rules

The current primary typefaces are loaded from Google Fonts:

- `Poppins` for body text, navigation, labels, buttons, forms, and compact UI text
- `Lora` for headings, brand text, product names, and editorial section headings

Typography rules:

- Keep `Poppins` as the main functional typeface.
- Keep `Lora` as the display and heading typeface.
- Use small uppercase eyebrow labels sparingly for section context.
- Keep body copy readable and business-focused.
- Keep product card names compact.
- Keep product card text focused on product names only.
- Avoid excessive font sizes inside cards, footers, forms, and product grids.
- Do not use negative letter spacing for regular text.
- Do not add trendy tech fonts or overly luxurious fashion typefaces.

## Color Palette Rules

The current palette is warm, traditional, and supplier-oriented.

Core colors from the active HTML styles:

- Background: `#FAF6F0`
- Soft background: `#F2EAE0`
- Card background: `#FFFFFF`
- Main ink: `#1C1510`
- Soft ink: `#4A3830`
- Faint ink: `#8A7870`
- Primary maroon: `#6B1A1A`
- Deep maroon: `#4A0E0E`
- Light maroon: `#8B2020`
- Gold: `#C9952A`
- Soft gold: `#E8C97A`
- Brown accent: `#6B3A1A`
- WhatsApp green: `#25D366`

Color rules:

- Preserve maroon, cream, white, and gold as the core palette.
- Use WhatsApp green only for WhatsApp actions.
- Use gold for accents, tags, borders, highlights, and small callouts.
- Use deep maroon for hero, footer, contact, and strong business sections.
- Keep text contrast high.
- Do not introduce dominant blue, purple, neon, black-and-white luxury, or tech-gradient palettes.
- Do not make the site one-note beige; preserve maroon and gold contrast.

## Homepage Rules

The homepage currently contains:

- Topbar with email and hotline
- Sticky header with logo, nav, and WhatsApp CTA
- Mobile menu drawer
- Hero section with wholesale positioning, CTAs, and business stats
- Fabric/product category cards with images
- Services cards
- Customer-type section
- Why Choose Us section
- Big stats strip
- FAQ accordion
- Contact section with WhatsApp, phone, email, maps, and enquiry form
- Hours strip
- Footer
- Floating WhatsApp button

Homepage rules:

- Keep the homepage focused on wholesale textile credibility and quick enquiry.
- Preserve hero CTAs for catalog browsing and WhatsApp quotation.
- Keep product categories visible and image-led.
- Keep the "Why Choose Us" section focused on experience, reliability, specs, MOQs, and export capability.
- Keep FAQ practical and order-focused.
- Keep contact and WhatsApp access prominent.
- Prefer updating existing sections over adding new sections.
- Do not reintroduce customer logo strips or generic corporate-logo sections unless specifically requested.
- Do not add social media links or icons unless specifically requested.

## Catalog Page Rules

The catalog page currently contains:

- Topbar and header matching the homepage
- Page hero
- Tab navigation for Product Catalog, Our Services, and How It Works
- Product grid rendered from `PRODUCTS` in `assets/js/data.js`
- Category filter pills
- Pricing note explaining WhatsApp-based pricing
- Services tab
- Process tab
- CTA strip
- Footer
- Floating WhatsApp button

Catalog rules:

- Preserve the tab structure unless explicitly instructed otherwise.
- Preserve product filters by category.
- Preserve the product grid system and the `productGrid` render target.
- Keep pricing hidden and quotation-based unless explicitly requested.
- Keep WhatsApp enquiry CTAs on catalog cards and catalog sections.
- Keep catalog page copy focused on stock, pricing by WhatsApp, availability, and wholesale practicality.
- Do not add ecommerce checkout, carts, online payment, or consumer shopping UX unless explicitly requested.

## Product Card Rules

Current product cards:

- Use a 3:4 image area
- Load images from product data
- Show optional "Best Seller" or "New In" badges
- Show product name
- Show product names only; do not display internal catalog or fabric metadata on catalog cards
- Show "Enquire via WhatsApp" as the CTA
- Hide prices

Product card rules:

- Preserve product images as the strongest visual element.
- Keep product cards compact and scannable.
- Keep product names short enough to avoid awkward wrapping.
- Keep product names visible and avoid internal-code metadata in visitor-facing catalog cards.
- Keep WhatsApp as the primary product action.
- Keep pricing hidden unless the business explicitly asks to show prices.
- Do not turn product cards into consumer retail cards with add-to-cart, ratings, wishlist, or discount badges unless specifically requested.
- Do not invent product data that conflicts with the existing catalog system.

## Catalog Data Rules

The current product system is generated in `assets/js/data.js`.

Important data patterns:

- Sarees and suits use `person_image_*.jpeg`
- Kaftans and baju kurung use `phone_image_*.jpeg`
- Boys and kidswear use `shirt_1.jpeg` through `shirt_120.jpeg`
- Mens shirts use `shirt_121.jpeg` through `shirt_200.jpeg`
- Product categories include `sarees`, `kaftans`, `kidswear`, and `menswear`
- Products include name, category, fabric, color, image, price object, MOQ, stock, pieces, sizes, badges, description, and quoteCount. Internal catalog metadata should not be displayed or reintroduced for catalog cards.

Data rules:

- Preserve category IDs unless updating all connected filters and render logic.
- Preserve image path patterns unless performing a full catalog migration.
- Preserve `PRODUCTS` and `RAJTEX_CATEGORIES` as the active catalog sources.
- If adding products, keep consistent fields.
- If changing image names, update every reference and run a usage report.
- Avoid randomizing product content further unless requested. Random product generation can make future consistency harder.

## Mobile-First Rules

The website must remain responsive.

Current responsive behavior:

- Navigation collapses into a mobile menu at smaller widths.
- Mobile drawer slides in from the right.
- Category grids collapse from 3 columns to 2 and then 1.
- Catalog product grid collapses for mobile.
- Hero CTAs stack on small screens.
- Footer columns collapse.
- Contact grid becomes single-column.

Mobile rules:

- Always preserve mobile navigation.
- Keep tap targets large enough for mobile.
- Ensure text does not overflow cards, buttons, or contact panels.
- Keep product cards readable on small screens.
- Preserve product image aspect ratios.
- Test major layout changes at desktop, tablet, and phone widths.
- Do not add fixed-width elements that break mobile.
- Do not hide critical contact information on mobile.

## Contact and WhatsApp Rules

Current contact information:

WhatsApp:

```text
+91 95102 55501
```

Display phone:

```text
+91 95102 55501
```

WhatsApp link:

```text
https://wa.me/919510255501
```

Address:

```text
Campbell Complex, Lot 101 & 106 First Floor
Jalan Dang Wangi
50100 Kuala Lumpur
Federal Territory of Kuala Lumpur
Malaysia

E-2-8, Block E, Sri Tanjung
Jalan USJ 16/7, USJ 16,
47620 Subang Jaya
Selangor
```

Telegram:

```text
https://t.me/pnmfashion
```

Google Maps:

```text
https://google.com/maps/place/P+%26+M+Fashion/data=!4m2!3m1!1s0x0:0x4d944d8864799f91
```

Contact rules:

- Keep WhatsApp as the primary contact method.
- Use `https://wa.me/919510255501` for WhatsApp links unless explicitly instructed otherwise.
- Use `https://t.me/pnmfashion` for Telegram quote links unless explicitly instructed otherwise.
- Use `tel:+919510255501` for phone links.
- Display the phone number as `+91 95102 55501`.
- Keep contact information consistent across topbar, headers, CTAs, contact section, footer, catalog page, product cards, and JavaScript-generated links.
- Keep Google Maps links pointed to the P & M Fashion listing.
- Do not reintroduce placeholder numbers, placeholder maps, or old Pudu-only address text.
- Do not add social media contact links unless specifically requested.

## Image Management Rules

Image files live under `assets/images/`.

Current image families include:

- `person_image_*.jpeg`
- `phone_image_*.jpeg`
- `shirt_*.jpeg`
- WhatsApp-upload image files
- `rajtex-logo-original.jpg`

Image rules:

- Do not delete images without generating a usage report first.
- Do not rename image files without updating every reference.
- Do not move image files unless updating all paths and validating the site.
- Preserve existing product image aspect ratios.
- Use real product or textile images where possible.
- Avoid generic stock photos.
- Avoid AI-looking product images, abstract placeholders, or purely decorative visuals.
- Product images should show actual fabric, garments, or relevant textile inventory.
- If replacing images, preserve the catalog's large-selection feeling.
- If unused images are found, report them first. Do not delete unless the user explicitly approves deletion.

## Product Upload Workflow

When new product images are provided:

- Generate meaningful product names.
- Preserve original image files.
- Never overwrite existing images.
- Maintain existing catalog card structure.
- Maintain mobile responsiveness.
- Add products to correct categories.
- Validate all images load correctly.
- Commit changes but do not push unless explicitly instructed.

## SEO Rules

Current SEO files:

`robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://pnmfashion.com/sitemap.xml
```

`sitemap.xml` includes:

```text
https://pnmfashion.com/
https://pnmfashion.com/catalog.html
```

SEO rules:

- Preserve valid `robots.txt`.
- Preserve valid XML sitemap syntax.
- Keep homepage and catalog page in the sitemap.
- Keep page titles specific to PNM Fashion and wholesale textiles.
- Keep meta descriptions practical, search-friendly, and business-oriented.
- Use keywords naturally: wholesale textile supplier, fabric supplier Kuala Lumpur, songket, sarees, kaftans, cotton, polyester, mens shirts, boys wear, wholesale fabric.
- Do not keyword-stuff.
- Do not add fake locations or unsupported claims.
- If new public pages are added, update `sitemap.xml`.
- If URLs change, update all internal links and sitemap entries.

## Git Workflow Rules

Git rules for future work:

- Always inspect current git status before making changes.
- Do not overwrite user changes.
- Do not run destructive git commands unless explicitly requested.
- Show a change plan before large modifications.
- Make focused commits with clear commit messages when requested.
- Do not commit unless the user asks for a commit or approves one.
- Do not push unless explicitly instructed.
- After committing, show the commit hash and branch status.
- After pushing, show push result, commit hash, and branch status.

## Future Development Rules

General future-work rules:

- Preserve the existing design language unless explicitly instructed otherwise.
- Preserve responsiveness.
- Preserve existing working functionality.
- Prefer updating existing sections over creating new ones.
- Never redesign the entire site unless specifically requested.
- Keep the site clean, wholesale-focused, and textile-supplier oriented.
- Keep contact access simple and visible.
- Keep WhatsApp central to the enquiry flow.
- Keep the product catalog easy to scan.
- Avoid adding heavy dependencies for this static site unless clearly needed.
- Avoid adding animations that distract from products and contact.
- Avoid adding decorative sections that do not support wholesale trust or product discovery.
- Validate after changes: local links, image paths, contact details, WhatsApp links, removed-section remnants, robots file, sitemap file, and responsive layout.

## Change Planning Rules

Before large modifications, show a concise plan covering:

- Files expected to change
- Sections expected to change
- Any risks to layout, responsiveness, SEO, or product rendering
- Any validation steps to run afterward

For small copy or contact updates, a short note is enough.

## Never-Do List

Never do the following without explicit user approval:

- Delete images
- Rename image files
- Move image files
- Redesign the entire site
- Replace the product catalog system
- Add social media links
- Add customer logo strips
- Add ecommerce checkout
- Push to GitHub
- Change the brand away from wholesale textiles
- Replace the warm maroon, cream, and gold design language with a tech or luxury palette

## Quality Checklist

Before finishing future website changes, check:

- Contact number is correct
- WhatsApp links point to `https://wa.me/919510255501`
- Address is correct
- Google Maps link is correct
- No placeholder phone numbers remain
- No placeholder addresses remain
- No unwanted social links remain
- No unwanted customer-logo sections remain
- Product cards still render
- Product images still load
- Mobile menu still works
- FAQ accordion still works
- Catalog tabs still work
- Category filtering still works
- `robots.txt` remains valid
- `sitemap.xml` remains valid
- Git status is reported if files were changed

## Asset Management Rules

- Always generate a used-image report before deleting images.
- Never delete images automatically.
- Unused images must be reported before removal.
- Preserve original files whenever possible.
- Prefer moving unused images into an archive folder rather than deleting them.

## Logo Rules

- The current logo is the official PNM Fashion logo.
- Preserve the logo's proportions.
- Never stretch or distort logos.
- Prefer PNG logo files with transparent backgrounds.
- Update all logo instances together, including the header, footer, and mobile menu.

## Homepage Redesign Rules

- Preserve the overall homepage structure unless instructed otherwise.
- Preserve existing SEO content and metadata.
- Preserve mobile responsiveness.
- Preserve WhatsApp CTA visibility.
- Preserve the wholesale textile positioning.

## Catalog Expansion Rules

- New products must follow the existing product card structure.
- Existing categories should be reused where possible.
- Avoid creating unnecessary categories.
- Preserve catalog filtering functionality.

## Image Replacement Rules

- Maintain the existing aspect ratio when replacing images.
- Do not distort images.
- Use actual textile product photography whenever possible.
- Prefer user-supplied images over generated imagery.

## Deployment Rules

- GitHub is the source of truth.
- Cloudflare Pages deploys from GitHub.
- Before pushing changes, validate:
  - Links
  - Images
  - Responsiveness
  - `sitemap.xml`
  - `robots.txt`

## AI Safety Rules

- Never perform large redesigns without approval.
- Never delete files without approval.
- Never push without approval.
- Always present a change plan for significant modifications.
