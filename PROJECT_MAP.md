# PNM Fashion Repository Map

This file helps future AI agents quickly understand the PNM Fashion website repository, its active control points, assets, business details, and deployment workflow.

## Repository Root

Absolute repository path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1
```

GitHub repository:

```text
https://github.com/NusatechSolutions/pnmfashion.git
```

Current primary branch:

```text
main
```

Git remote:

```text
origin
```

## Important Operating Manual

Read this file before making website changes:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\pnmfashion-rules.md
```

It contains the permanent brand, design, catalog, image, SEO, deployment, Git, and AI safety rules for the project.

## Website Architecture Summary

The current website is a static HTML website with no package manager, build configuration, framework, or server-side application in the repository.

The active public pages are:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Important control-surface note:

- Both active HTML pages contain their primary CSS inline inside `<style>` blocks.
- Both active HTML pages contain page-specific JavaScript inline inside `<script>` blocks.
- `catalog.html` loads `assets/js/data.js` to generate its product catalog.
- `assets/css/styles.css` and `assets/js/main.js` exist in the repository, but they are not currently linked by `index.html` or `catalog.html`.
- Do not assume the unlinked shared CSS and JavaScript files control the active pages without first verifying references.

## HTML Pages

### Homepage

Path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
```

Controls:

- Homepage metadata and SEO title/description
- Inline homepage visual design and responsive CSS
- Topbar
- Sticky header
- Header logo treatment
- Mobile navigation drawer
- Hero section
- Product category section
- Services section
- Customer-type section
- Why Choose Us section
- Stats strip
- FAQ accordion
- Contact section
- Enquiry form
- Business hours strip
- Footer
- Floating WhatsApp button
- Inline mobile-menu, FAQ, and contact-form JavaScript

Homepage product/category images are referenced directly from:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\images
```

### Catalog Page

Path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Controls:

- Catalog page metadata and SEO title/description
- Inline catalog visual design and responsive CSS
- Topbar
- Sticky header
- Header logo treatment
- Mobile navigation drawer
- Catalog page hero
- Product Catalog, Our Services, and How It Works tabs
- Product category filter pills
- Product card HTML generation
- Product grid rendering
- Catalog services content
- Ordering process content
- Footer
- Floating WhatsApp button
- Inline mobile-menu, tab, filtering, and product-rendering JavaScript

The catalog page loads product data from:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\data.js
```

## CSS Files

### Active Inline Homepage CSS

Location:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
```

The homepage's active CSS is inside its `<style>` block.

### Active Inline Catalog CSS

Location:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

The catalog page's active CSS is inside its `<style>` block.

### Additional Shared Stylesheet

Path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\css\styles.css
```

Status:

- This file contains an older or additional RAJTEX-oriented design system.
- It includes styles for product cards, layouts, logo classes, drawers, mobile behavior, and other shared components.
- It is not currently linked by the active `index.html` or `catalog.html` pages.
- Verify usage before editing or removing it.

## JavaScript Files

### Product Data Source

Path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\data.js
```

Controls:

- `RAJTEX_CATEGORIES`
- `PRODUCTS`
- Product category assignments
- Product names
- Fabrics
- Colors
- Product image paths
- MOQ values
- Stock values
- Product badges
- Product descriptions
- Reseller testimonial data
- Showroom/contact data

This file is actively loaded by:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

### Additional Shared JavaScript Runtime

Path:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\main.js
```

Contains:

- `WA_NUMBER`
- Additional product/cart logic
- Additional logo SVG generation
- Shared header/footer generation
- Mobile menu generation
- Floating WhatsApp button generation
- Additional legacy/shared UI behavior

Status:

- This file is not currently loaded by the active `index.html` or `catalog.html` pages.
- It still contains business-related references and should be kept consistent if contact or logo data changes.
- Verify usage before relying on it as an active page controller.

### Active Inline Homepage JavaScript

Location:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
```

Controls:

- Mobile menu open/close behavior
- FAQ accordion behavior
- Contact form submission behavior
- Homepage WhatsApp form destination

### Active Inline Catalog JavaScript

Location:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Controls:

- Mobile menu open/close behavior
- Catalog tab switching
- Product card markup
- Product category filtering
- URL category parameter handling
- Initial product rendering

## Product Generation

Products are generated by:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\data.js
```

The generated `PRODUCTS` array is rendered by:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Product generation patterns:

- Sarees and suits use `assets/images/person_image_*.jpeg`
- Kaftans and baju kurung use `assets/images/phone_image_*.jpeg`
- Boys and kidswear use `assets/images/shirt_1.jpeg` through `assets/images/shirt_120.jpeg`
- Mens shirts use `assets/images/shirt_121.jpeg` through `assets/images/shirt_200.jpeg`

Current product category IDs:

```text
sarees
kaftans
kidswear
menswear
```

Catalog filtering depends on these IDs. Reuse existing categories where possible and update all connected filters if category IDs change.

## WhatsApp Link Generation

Official WhatsApp URL:

```text
https://wa.me/919510255501
```

Official WhatsApp number:

```text
919510255501
```

Files that actively generate or contain WhatsApp links:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Additional shared or legacy WhatsApp control:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\main.js
```

Product/showroom WhatsApp data:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\data.js
```

When changing the WhatsApp number, update all four locations together and validate every link.

## Image Folder Structure

Main image directory:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\images
```

Current image families:

```text
assets/images/person_image_*.jpeg
assets/images/phone_image_*.jpeg
assets/images/shirt_*.jpeg
assets/images/WhatsApp Image *.jpeg
assets/images/WhatsApp_Image_*.jpeg
assets/images/rajtex-logo-original.jpg
```

Current image counts by family:

```text
person_image: 85
phone_image: 11
shirt: 200
WhatsApp uploads: 40
logo: 1
```

Other asset directories:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\css
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\icons
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\images
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js
```

The `assets/icons` directory currently contains no files listed by the repository inventory.

Image safety rules:

- Never delete images automatically.
- Generate a used-image report before any image removal.
- Report unused images before removal.
- Preserve originals whenever possible.
- Prefer archiving unused images instead of deleting them.

## Logo Locations

### Active Header Logo

The active homepage and catalog header logos are text-and-CSS treatments, not image files.

Homepage logo markup:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
```

Catalog logo markup:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

The active logo contains:

- A maroon square logo mark with the letter `P`
- The text `PNM Fashion`
- The subtitle `Textile Wholesale Â· Since 1992`

### Favicon

The favicon is an inline SVG data URL in:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

### Additional Logo Assets

Image logo file:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\images\rajtex-logo-original.jpg
```

Additional generated SVG logo:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\main.js
```

Additional logo styles:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\css\styles.css
```

These additional RAJTEX logo references are not currently active on the public HTML pages. Verify usage before editing or removing them.

## SEO Files

Robots file:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\robots.txt
```

Required content:

```text
User-agent: *
Allow: /

Sitemap: https://pnmfashion.com/sitemap.xml
```

Sitemap file:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\sitemap.xml
```

Current public URLs:

```text
https://pnmfashion.com/
https://pnmfashion.com/catalog.html
```

Page-level SEO metadata is controlled in:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Update `sitemap.xml` whenever a new public HTML page is added.

## Deployment Workflow

Deployment information is documented in:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\pnmfashion-rules.md
```

Current documented deployment workflow:

1. GitHub is the source of truth.
2. The repository is pushed to `origin/main`.
3. Cloudflare Pages deploys from GitHub.
4. A push to the connected GitHub branch should trigger the Cloudflare Pages deployment.

No Cloudflare configuration file is currently present in the repository inventory. Cloudflare project settings, build settings, domains, and environment configuration are expected to be managed outside this repository in the Cloudflare dashboard.

Because this is a static site, the likely deployment output is the repository root. Verify the Cloudflare Pages project settings before changing deployment configuration.

Before pushing deployment changes, validate:

- Internal and external links
- Image paths and image loading
- Desktop and mobile responsiveness
- `sitemap.xml`
- `robots.txt`
- WhatsApp links
- Contact information
- Catalog rendering and filtering

## Git Workflow

Repository:

```text
https://github.com/NusatechSolutions/pnmfashion.git
```

Primary branch:

```text
main
```

Standard workflow:

1. Read `pnmfashion-rules.md`.
2. Inspect `git status`.
3. Inspect the relevant active files before editing.
4. Present a change plan before significant modifications.
5. Make focused changes.
6. Validate links, images, responsiveness, SEO files, contact details, and catalog functionality.
7. Show the diff summary.
8. Commit only when requested or approved.
9. Push only when explicitly instructed.

Never:

- Push without approval.
- Delete files without approval.
- Delete images without a used-image report and approval.
- Use destructive Git commands without explicit approval.

## Known Business Details

Business name:

```text
PNM Fashion
```

Business positioning:

```text
Premium wholesale textile supplier
Modern and traditional textile supply
Established since 1992
```

Target customers:

```text
Retailers
Boutiques
Traders
Exporters
Manufacturers
Suppliers
```

Website domain:

```text
https://pnmfashion.com/
```

Email:

```text
regunathv@gmail.com
sethiaprakashpp@gmail.com
```

Phone display:

```text
+91 95102 55501
```

Phone link:

```text
tel:+919510255501
```

WhatsApp:

```text
https://wa.me/919510255501
```

Telegram:

```text
https://t.me/pnmfashion
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

Google Maps:

```text
https://google.com/maps/place/P+%26+M+Fashion/data=!4m2!3m1!1s0x0:0x4d944d8864799f91
```

Registered company number shown on the website:

```text
200101018629-K
```

## Quick Reference

Homepage:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\index.html
```

Catalog:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\catalog.html
```

Product data:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\js\data.js
```

Images:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\assets\images
```

SEO:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\robots.txt
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\sitemap.xml
```

Operating manual:

```text
C:\Users\Sivanesan\Desktop\textile\rajtex\style1\pnmfashion-rules.md
```
