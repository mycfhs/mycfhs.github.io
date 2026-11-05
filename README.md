# mycfhs.github.io

Personal homepage of [YiCheng Yang](https://mycfhs.github.io/), served by GitHub Pages.

The site is a single static page — no Jekyll, no build step, no external dependencies.

```
.
├── index.html          # the whole site
├── 404.html            # custom not-found page
├── assets/
│   ├── css/style.css   # all styles
│   ├── avatar.jpg
│   ├── dreammix.jpg/webp
│   └── favicon.svg
└── */index.html        # redirects from the old Jekyll URLs
```

## Editing

Edit `index.html` directly; styles live in `assets/css/style.css`. Both light and dark
themes are driven by CSS custom properties at the top of the stylesheet.

## Deploy

Push to `master`. GitHub Pages serves the repository root as-is (`.nojekyll` disables
Jekyll processing), so changes go live within a minute.
