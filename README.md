# Andrew Schmidt — Digital Technical Portfolio

Static site with a filterable project index and **8 dedicated project pages**. No backend required.

## Local preview

From the directory that contains `index.html`:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. Click any project card to open `projects/<project-id>/`.

## GitHub Pages

1. Create a public repository (for example `technical-portfolio`).
2. Commit **the contents of this folder** to the root of the repository. `index.html` must be in the root.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
4. Your Pages URL will be `https://<username>.github.io/technical-portfolio/` unless you configure a custom domain.
5. Optionally add `portfolio.signallosscalculator.com` in Pages → Custom domain and create a DNS CNAME record for `portfolio` pointing to `<username>.github.io`.

Links are relative, so they work under the GitHub Pages repository path or a custom domain.

## Screenshots

Add screenshots to `assets/` using a project ID followed by -01.png, -02.png etc. For example:

- `assets/hfc-calculator-01.png`
- `assets/hfc-calculator-02.png`
- `assets/inventory-system-01.png`

The corresponding project's detail page automatically displays up to eight of these images in its gallery. The hero remains a clearly labeled illustration until customized. For the index card image, set `image:'assets/hfc-calculator-01.png'` in `projects.js`.

## Edit details and links

The cards on the homepage are described in `projects.js`. Each dedicated project page is standalone HTML at `projects/<project-id>/index.html` and can be edited directly (title, text, demo link, technology stack). **Editing projects.js will not automatically change a dedicated detail page**, so update both when changing descriptions. This separation works with GitHub Pages and allows customized layouts.

The HFC calculator points to its confirmed public site: https://signallosscalculator.com. The Inventory Management System points to a public repository, but no direct link to the family production catalog is included.

## Safety before publishing

Do not include private family inventory data, real customer names, Mediacom internal screens, API tokens or credentials. For backend projects, link to a secure isolated demo server; GitHub Pages cannot run Flask, Linux daemons or recording software.


## Historical speed-test dashboard
The dedicated `projects/speed-testing/` page includes a read-only interactive dashboard backed by sanitized measurements in `assets/data/speedtest/`. The dataset was exported on October 12, 2026, using daily summaries and the latest 14-day individual tests. All charts work on GitHub Pages without a database or API key.

**Preview locally:** Use `python3 -m http.server 8000` from the portfolio root and open `http://localhost:8000/projects/speed-testing/`. Browsers generally block `fetch()` of the bundled JSON when opened directly using `file://`.

**Update data:** Re-export from the monitoring server, verify the JSON includes only numerical measurements and timestamps, and replace `assets/data/speedtest/daily-summary.json` and `recent-tests.json`. Keep the filenames unchanged.

**Data quality:** Source daily averages contain a small number of extreme loaded-latency values; the dashboard hides daily loaded-latency readings above 10,000 ms only for that chart. All exported measurements are retained as supplied.

## Embedded HFC Calculator

The `projects/hfc-calculator/` page includes a live iframe of `https://signallosscalculator.com/`, plus two real cropped screenshots. The embed is responsive and uses the original live calculation engine.

**Important:** If the calculator does not appear inside the iframe but opens in a new tab, check the HFC calculator web server's response headers for `X-Frame-Options: DENY/SAMEORIGIN` or CSP `frame-ancestors`. Cross-origin iframe embedding requires the calculator site's server to explicitly permit `https://portfolio.signallosscalculator.com`; a GitHub Pages change cannot bypass the restriction. When changing the server's CSP, allow only the portfolio origin and avoid weakening framing protections for other pages. The full-site link will continue to work in all cases.

Deploy by copying the contents of this ZIP to the repository root, keeping the existing `CNAME` file and GitHub Pages configuration.


## Train Catalog demonstration (static GitHub Pages)

The Inventory Management System project page links to `projects/inventory-system/demo/`. It is a standalone HTML/CSS/JS example based on the photographed production UI, using fictional inventory illustrations and browser-memory state. No family photographs or production inventory data is included, and no changes are saved to a server.


## Network Diagnostics Lab (live demo)

The `projects/network-diagnostics/` page links to `https://diagnostics.signallosscalculator.com/`. The public-facing diagnostics app is hosted independently on AWS EC2 in demo mode. Do not expose privileged packet capture endpoints or raw PCAP files publicly.

## Deployment notes

Upload the **contents** of this package to the root of the `Andrew-Schmidt/Portfolio` repository, preserving nested folders. Keep the existing `CNAME` file (custom-domain setting). If GitHub's web upload doesn't replace previously tracked files, use GitHub Desktop or edit the existing file directly. Verify the GitHub Pages Actions workflow succeeds.

## Solar LoRa project page
`projects/solar-lora/` contains the research-stage architecture, parts shortlist, field benefits, limitations, validation checklist, and build steps. No hardware deployment or performance results are claimed.

## Inventory project naming
Public name: **Inventory Management System**. Canonical URL: `projects/inventory-system/`. Legacy `projects/train-catalog/` and `projects/train-catalog/demo/` redirect to the new pages. The demonstration uses sample items; it is not connected to the production database.

## Inventory System URL migration

The canonical pages are `projects/inventory-system/` and `projects/inventory-system/demo/`. Previous train-catalog URLs remain as simple redirect pages, so do not delete that old folder. The inventory page now looks for gallery screenshots named `assets/inventory-system-01.png`, etc.
