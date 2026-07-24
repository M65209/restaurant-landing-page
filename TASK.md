# Task: Complete the site pages with a shared header/footer and JS-driven dishes

**Assigned to:** Interns
**Area:** `landing-page/`
**Difficulty:** Beginner → Intermediate (HTML / CSS / vanilla JavaScript)

---

## Background

The landing page (`index.html`) is mostly built, but the rest of the site is not.
Right now:

- The **header and footer are copy-pasted** into every page (`index.html`,
  `pages/contact.html`). They have already started to drift apart — for example,
  the navbar on `index.html` uses `class="navbar flex"` while `contact.html` uses
  `class="navbar"`. Editing one page does not update the others.
- **Navigation does not work.** Every nav link points to `href="#"`, so you cannot
  actually move between pages.
- **`pages/contact.html` is an empty stub** — it only has an `<h1>Contact Us</h1>`.
- The **"Our Best Seller Dishes" section is hardcoded** in HTML
  (`index.html`, the `.food-container` block), and a half-finished inline
  `<script>` at the bottom of `index.html` dumps a plain text list into `#dish-list`.

## Goals

### 1. Build out the remaining pages
Create the pages referenced by the navbar so the site feels complete. At minimum:

- `pages/menu.html` (Menu)
- `pages/foods.html` (Foods)
- `pages/about.html` (About Us)
- Finish `pages/contact.html` (a real contact section: heading, contact form
  and/or contact details — not just an `<h1>`).

You may add other pages if it makes sense, but keep the scope reasonable.

### 2. Share ONE header and ONE footer across all pages
Every page — `index.html` and all pages in `pages/` — must use the **exact same**
header and footer markup and styling. Do **not** keep copy-pasting them.

Choose one approach and apply it consistently:
- **Recommended:** Load the header and footer from a single source with JavaScript
  (e.g. one `header.html` / `footer.html` fragment, or a `components.js` that
  builds them and injects into a placeholder element on each page). Editing it once
  should update every page.
- Acceptable alternative: keep the markup in each page but make it **identical**
  and driven by shared CSS, so all pages look and behave the same.

Either way, fix the current drift so the header/footer are truly the same everywhere.

### 3. Smooth navigation
- Replace every `href="#"` in the navbar (and relevant footer links) with real,
  working links to the correct pages.
- Watch the relative paths: `index.html` is at the project root, but the other
  pages live inside `pages/`, so links must resolve correctly in **both** directions
  (root → `pages/`, and `pages/` → root and page-to-page).
- Highlight the **active page** in the nav (e.g. an `active` class) so users know
  where they are.
- Navigation should feel smooth — no broken links, no full-page flashes of
  unstyled content, consistent header/footer position on every page.

### 4. Inject the dishes list with JavaScript
The dishes on `index.html` must be **rendered from JavaScript**, not written as
static HTML.

- Define the dishes as a **data array** in JavaScript (each item: `name`, `price`,
  `image_url`, and any extra fields you want such as `description`).
- Loop over that array and build the dish cards in the DOM — reuse the existing
  `.food-card` structure (image + name + price) so the styling still applies.
- Replace the hardcoded `.food-container` cards in `index.html` with an empty
  container that JavaScript fills in.
- Clean up / replace the throwaway inline `<script>` at the bottom of `index.html`.
  Move this logic into a real file under `scripts/` (e.g. `scripts/dishes.js`)
  and include it with `<script src="...">`.
- The rendered result should look the same as (or better than) the current
  hardcoded section — proper cards with images, not a plain bullet list.

## Acceptance criteria

- [ ] `menu.html`, `foods.html`, `about.html` exist and `contact.html` is fully built.
- [ ] Header and footer are defined in **one** place and identical on every page.
- [ ] All navbar links work and go to the correct page from both the root and `pages/`.
- [ ] The current active page is visually indicated in the nav.
- [ ] The `index.html` dishes section is generated from a JS data array (no
      hardcoded dish cards left in the HTML).
- [ ] Dish rendering lives in a `scripts/*.js` file, not an inline `<script>`.
- [ ] No broken links, no console errors, layout is consistent across all pages.

## Notes & hints

- Keep using the existing stylesheets in `styles/` — you shouldn't need to rewrite them.
- Test by opening each page and clicking through the whole nav in both directions.
- Keep commits small and descriptive (one logical change per commit).
- Ask questions early if the shared-header approach is unclear.
