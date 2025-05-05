# Image Gallery Implementation Plan

**Goal:** Create a separate image gallery page (`gallery.html`) featuring clickable thumbnails with a lightbox effect for the 'epic_realism' images, and add a button in the hero section of `index.html` to link to it.

**Plan:**

1.  **Create Core Gallery Files:**
    *   Create a new HTML file: `gallery.html`.
    *   Create a new CSS file: `css/gallery.css` (for gallery-specific styles).
    *   Create a new JavaScript file: `js/gallery.js` (for gallery logic).
    *   *(We will also need a lightbox library - I propose using Lightbox2, which requires its own CSS and JS files).*
2.  **Set up `gallery.html`:**
    *   Add basic HTML structure (doctype, head, body).
    *   Link to the necessary CSS files (`gallery.css` and the Lightbox2 CSS).
    *   Create a container element for the image thumbnails.
    *   Link to the necessary JavaScript files (`gallery.js` and the Lightbox2 JS) at the end of the body.
3.  **Populate Gallery & Implement Lightbox:**
    *   In `gallery.html` (or dynamically using `gallery.js`), add links (`<a>`) pointing to the full images in `images/epic_realism/`.
    *   Inside each link, add a thumbnail image (`<img>`) pointing to the same image (or potentially smaller versions if available).
    *   Add the necessary `data-lightbox` attributes to the links to enable the Lightbox2 functionality.
    *   Add basic styling in `css/gallery.css` for the thumbnail grid layout.
4.  **Modify `index.html`:**
    *   Locate the `<div class="hero-buttons">` section (around line 442).
    *   Add a new button inside this div, styled similarly to the existing ones (e.g., `<a href="gallery.html" class="btn btn-outline">Image Gallery</a>`).
5.  **Integrate Lightbox2 Library:**
    *   Download or link to the Lightbox2 CSS and JS files. We'll likely place them in the `css` and `js` folders respectively.
    *   Ensure Lightbox2 is initialized correctly (usually just requires including the JS file).
6.  **Review for GitHub Pages:**
    *   Double-check that all file paths (CSS, JS, images) are relative and correctly structured to work when deployed.

**Visual Plan (Mermaid Diagram):**

```mermaid
graph TD
    A[Start] --> B(Create `gallery.html`, `css/gallery.css`, `js/gallery.js`);
    B --> C(Integrate Lightbox2 Library Files);
    C --> D(Setup HTML Structure in `gallery.html`);
    D --> E(Link CSS & JS in `gallery.html`);
    E --> F(Add Image Thumbnails & Links in `gallery.html`);
    F --> G(Add `data-lightbox` attributes);
    G --> H(Style Thumbnail Grid in `css/gallery.css`);
    H --> I(Modify `index.html`);
    I --> J(Add Button to Hero Section in `index.html`);
    J --> K(Link Button to `gallery.html`);
    K --> L(Verify Relative Paths for GitHub Pages);
    L --> M[End];

    subgraph Gallery Implementation
        B; C; D; E; F; G; H;
    end

    subgraph Homepage Integration
        I; J; K;
    end