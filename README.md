# Dr Viswanadh Ravi Teja Gudivada — Academic Website

A responsive, static academic/research website built with HTML, CSS and vanilla JavaScript.
It is designed to deploy free using GitHub Pages.

## Files
- `index.html` — website structure and content
- `style.css` — responsive visual design
- `script.js` — mobile navigation and publication filtering
- `publications.js` — publication records shown on the site
- `site-config.js` — public profile links to fill in

## Preview locally
Open `index.html` in a browser. For best results, use a local static server (for example VS Code Live Server).

## Before publishing — important
1. Public profile links are already configured in `site-config.js` for LSTM, LinkedIn, Google Scholar and ResearchGate.
2. Check the displayed email address and decide whether you want to publish it publicly.
3. Review the publication list and patent wording against the final bibliographic/patent records. The website currently includes entries transcribed from the supplied CV; it does not automatically sync with Google Scholar.
4. No profile photograph is used, as requested.
5. Contact is routed to your LSTM profile; your email address and phone number are not displayed on the website. The CV PDF is not included as a public download because it contains personal contact details.

## Free deployment with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a new public repository named `YOUR-USERNAME.github.io`.
3. Upload the contents of this folder (not the ZIP itself) to the repository root.
4. In repository Settings → Pages, select deploy from the `main` branch and `/ (root)`.
5. Your website will be available at `https://YOUR-USERNAME.github.io`.

GitHub Pages hosting is free for public repositories. A custom domain is optional and normally requires purchasing the domain name.

## Editing content
- Edit text directly in `index.html`.
- Add/remove publication records in `publications.js`. Each record has `type`, `year`, `title`, `authors`, `venue` and optional `doi`.
- Change colours and typography in `style.css`.
- Set verified social profile URLs in `site-config.js`.

## Not included
There is no automated publication harvesting or scheduled Google Scholar update in this first version. It is intentionally a simple static site so it can be hosted free with no server or database.
