# yangy1c.github.io

Personal homepage of [YiCheng Yang](https://yangy1c.github.io/), served by GitHub Pages.

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

## Competition images

The competitions section is a deck with one event per page — swipe sideways
(or use the arrows at the card edges) to move between events. Inside a page,
the strip flips between the demo GIF and the award certificate via the arrows
and dots.

Drop files into `assets/competitions/` with these exact names and they replace
the placeholders automatically — no HTML edits needed.

| Slug | Demo file | Certificate file |
| --- | --- | --- |
| RoboMaster | `robomaster-demo.gif` | `robomaster-certificate.jpg` |
| CRAIC | `craic-demo.gif` | `craic-certificate.jpg` |
| RoboCup | `robocup-demo.gif` | `robocup-certificate.jpg` |
| Innovation program | `innovation-program-demo.gif` | `innovation-program-certificate.jpg` |
| 4C | `computing-4c-demo.gif` | `computing-4c-certificate.jpg` |

Logos live in `assets/logos/` (`bosch.svg`, `qcraft.png`, `dut.svg` and its
emblem-only crop `dut-mark.svg`).

## Editing

Edit `index.html` directly; styles live in `assets/css/style.css`. Both light and dark
themes are driven by CSS custom properties at the top of the stylesheet.

## Deploy

Push to `master`. GitHub Pages serves the repository root as-is (`.nojekyll` disables
Jekyll processing), so changes go live within a minute.
