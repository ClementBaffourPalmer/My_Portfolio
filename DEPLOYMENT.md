# 🚀 Clement Palmer Portfolio — Cloudflare Pages Deployment Guide

This document outlines the exact, step-by-step procedures for deploying Clement Palmer's redesigned portfolio to **Cloudflare Pages Direct Upload**.

---

## 🔒 Safe Deployment Guarantee

- Your existing live portfolio at `https://clementportfolio.pages.dev/` remains **100% untouched and safe**.
- A complete, pristine backup of your original source code was preserved at:
  `/Users/kavanalabsuser/Developments/Clementportfolio_ORIGINAL_BACKUP`
- This redesigned project is built in `/Users/kavanalabsuser/Developments/Portfolio_update` and outputs directly to a standalone `dist/` directory.

---

## 📦 Build Specifications

| Parameter | Specification |
| :--- | :--- |
| **Framework** | React 18 + TypeScript + Vite + Tailwind CSS |
| **Node.js Requirement** | Node.js 18+ (verified on Node 20 / 22 / 26) |
| **Production Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Static Assets Handled** | Photographs, CV PDF, Favicon SVG, Bundled CSS/JS |

---

## 🌐 Method 1: Cloudflare Dashboard Direct Upload (Drag-and-Drop)

This method requires **no API tokens or CLI configurations**:

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
3. Click **Create Application** > select the **Pages** tab.
4. Click **Upload assets** (Direct Upload).
5. Enter a **Project name** for your new portfolio (e.g., `clement-palmer-portfolio` or `clementpalmer-v2`).
   *(Note: Using a new project name guarantees your old project is never touched).*
6. In your terminal, run the build command if you haven't already:
   ```bash
   npm run build
   ```
7. Drag and drop the generated `dist` folder directly into the Cloudflare browser window.
8. Click **Deploy site**.
9. Cloudflare will deploy your site in ~15 seconds and provide you with a new preview URL (e.g., `https://clement-palmer-portfolio.pages.dev`).
10. Once you review and are fully satisfied, you can assign your custom domain (e.g., `clementpalmer.dev` or update your primary DNS record) in project settings!

---

## 💻 Method 2: Cloudflare Wrangler CLI Deployment

If you prefer deploying directly from your terminal:

1. Install and authenticate Cloudflare Wrangler:
   ```bash
   npx wrangler login
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` directory to a new Cloudflare Pages project:
   ```bash
   npx wrangler pages deploy dist --project-name=clement-palmer-portfolio
   ```

---

## 🐙 Method 3: Cloudflare Pages Git Integration (Automatic Deployment via GitHub)

Since you are pushing this code to GitHub, you can connect your repository to Cloudflare Pages for automatic continuous deployment on every `git push`:

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
3. Click **Create Application** > select the **Pages** tab.
4. Click **Connect to Git**.
5. Select your GitHub account and choose your portfolio repository (`portfolio`).
6. Configure the build settings:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables** (optional):
     - `NODE_VERSION`: `20`
7. Click **Save and Deploy**.
8. Cloudflare will automatically clone, build, and deploy your site on its global edge network. Future pushes to `master` / `main` will automatically trigger new production deployments.

---

## 📂 Asset Management Reference

- **To update your CV**:
  Replace `public/documents/Clement_Palmer_CV.pdf` with your new PDF and run `npm run build`.
- **To update the main hero portrait**:
  Replace `public/images/clement-palmer-profile.jpg`.
- **To update the about section headshot**:
  Replace `public/images/clement-palmer-headshot.jpg`.
- **To update contact form submissions**:
  The form currently routes through your Web3Forms access key (`7aa34826-7871-4af7-8a8c-6097b8cee2f6`) configured in `src/components/Contact.tsx`. You can replace this key with your own custom backend endpoint or preferred form service anytime.
