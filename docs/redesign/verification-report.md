# Redesign verification report — karutoil portfolio

**Auditor:** `contact-audit` (task-5)
**Report written:** 2026-10-02, against a frozen revision (second re-pin; see [§8](#8-revision-history--why-this-report-was-re-pinned-twice))
**Final revision:** combined SHA-256 `e49434324d426334` — 18 source files, per-file hashes in [Appendix A](#appendix-a--frozen-revision)
**Site:** Astro 5.18.2, static output, `base: '/'`
**Preview audited:** `http://localhost:4321` — a fresh `astro preview` of a clean `dist` build, verified to serve hashed assets and zero `@vite/client` / dev-toolbar markers

**Bottom line: PASS.** Six real defects were found across this task and all six are fixed and re-verified. The sixth — a broken mobile navigation sheet — **was missed by my earlier sweep and was found by the lead**; [§4 finding 6](#finding-6--mobile-nav-sheet-collapsed-to-53px-the-bug-this-audit-missed) documents the gap and the assertion I added to close it.

| Verification suite | Assertions | Failures |
|---|---|---|
| Required sweep (10 checks × 32 loads) | 10 checks | **0** |
| Contrast positive control (must fail) | 32 | 32 detected (proves detector live) |
| Supplementary (clipping, ids, rel, tap targets, menu, theme) | 32 | **0** |
| Contact page (hit area, rows, handles, focus) | 200 | **0** |
| CompactProject unclamp | 40 | **0** |
| Open Source + hero CTA | 77 | **0** |
| Mobile sheet occlusion + geometry | 32 | **0** |
| Extra adversarial widths (360 / 320px) | 16 loads | **0** |

---

## 1. Build

```
$ cd /home/karutoil/LandingPage/site && rm -rf dist && npx astro build
BUILD_EXIT=0

12:57:51 ▶ src/pages/contact.astro
12:57:51   └─ /contact/index.html (+5ms)
12:57:51 ▶ src/pages/experience.astro
12:57:51   └─ /experience/index.html (+4ms)
12:57:51 ▶ src/pages/index.astro
12:57:51   └─ /index.html (+4ms)
12:57:51 ▶ src/pages/projects.astro
12:57:51   └─ /projects/index.html (+4ms)
12:57:51 ✓ Completed in 35ms.

12:57:51 [build] 4 page(s) built in 786ms
12:57:51 [build] Complete!
```

Clean `dist` first, per the lead's instruction, to avoid a concurrent-build race. **Exit 0, 4 pages, no warnings.** All four routes then served `200` from the preview.

---

## 2. Screenshots

```
$ node /tmp/shotkit/shot.mjs artifacts/after http://localhost:4321
no console errors
```

**16 files** in `artifacts/after/`: 4 routes × {light, dark} × {full-page, fold}. The canonical harness was run **unmodified**.

An earlier revision gated below-the-fold content on an `IntersectionObserver` that a non-scrolling capture never triggered, so full-page shots were blank (see [finding 4](#finding-4--full-page-screenshots-were-mostly-blank-evidence-integrity)). That is fixed, and I verified the fix lands inside the harness's own 1.5 s wait:

```
reveal state at shotkit's 1.5s wait (1440x900, dark, no scrolling):
  home { reveal: 0, hidden: 0 }        projects { reveal: 10, hidden: 0 }
  experience { reveal: 4, hidden: 0 }  contact { reveal: 2, hidden: 0 }
```

---

## 3. Required checks — pass/fail table

`node /tmp/audit/audit.mjs http://localhost:4321` over **32 page loads** (4 routes × widths 1440/1024/768/390 × light/dark):

```
=== SWEEP SUMMARY ===
pages checked: 32 (4 routes x 4 widths x 2 schemes)

[OVERFLOW] failing pages: 0
[ZERO-HEIGHT TEXT] failing pages: 0
[IMG ALT] failing pages: 0
  pages with alt="" (must be decorative-only, review): 0
[IMG LOAD] <img> tags inspected: 24; broken (naturalWidth===0): 0
  pages containing <img>: /, /projects/
[HEADINGS] failing pages: 0
[NAV LINKS] failing pages: 0
[FOCUS] pages with an invisible focused element in first 12 tabs: 0
[CONTRAST] failing text nodes (deduped): 0
[FAILED REQUESTS] 0
[CONSOLE ERRORS] 0
```

| # | Required check | Result | Evidence |
|---|---|---|---|
| 1 | `scrollWidth <= innerWidth + 1` | **PASS** | 0/32 failing; also 0 at **360px and 320px** (16 extra loads) |
| 2 | Contrast ≥ 4.5:1 for normal text | **PASS** | 0 failing text nodes; detector validated by positive control |
| 3 | No rendered-height-0 element containing text | **PASS** | 0 failing pages |
| 4 | All `<img>` have non-empty `alt` | **PASS** | 0 missing, 0 `alt=""`; 24 `<img>`, all `naturalWidth > 0` |
| 5 | Exactly one `<h1>`; no skipped heading levels | **PASS** | 0 failing pages |
| 6 | Every nav link resolves to 200 | **PASS** | 0 non-200 |
| 7 | Focus visible on first 12 focusable elements | **PASS** | 0 invisible indicators |
| 8 | Broken images (`naturalWidth === 0`) — lead's extra check | **PASS** | `/avatar.webp` nw=633, `/mockups/catalyst.svg` nw=250 |
| 9 | Failed network requests | **PASS** | 0 |
| 10 | Console errors | **PASS** | 0 |

### 3a. Trusting the "0 contrast failures" result

A clean result means nothing if the detector is dead, so I ran a **positive control through the audit's own code path** (`AUDIT_CONTROL=1` injects `#bbbbbb`-on-`#ffffff`, hand-computed at 1.92:1):

```
$ AUDIT_CONTROL=1 node /tmp/audit/audit.mjs http://localhost:4321
[CONTRAST] failing text nodes (deduped): 32
  1.92:1 (need 4.5) light 390px /  p#__audit_positive_control  color=rgb(187,187,187) bg=rgb(255,255,255)  "audit positive control"
```

32/32 injected elements flagged at exactly the hand-computed ratio → the checker is live and the threshold is applied correctly.

### 3b. Mobile nav sheet — occlusion and geometry (check added after the gap in finding 6)

```
$ node /tmp/audit/mobile-sheet-check.mjs http://localhost:4321
PASS  light 360px: sheet height 772px >= innerHeight(844) - top(72) = 772 (position:fixed, nav backdrop-filter:none)
PASS  light 360px: sheet width 360px spans the viewport (360px)
PASS  light 360px: all 6 nav links sit inside the viewport (0 overflowing)
PASS  light 360px: open sheet occludes page content at all probe points (200:sheet 400:sheet 600:sheet)
… 720 / 560 / 390 / 360px × light/dark …
=== 0 failure(s) in mobile-sheet occlusion check ===
```

**32 PASS / 0 FAIL.** The same check run against the pre-fix condition is in [finding 6](#finding-6--mobile-nav-sheet-collapsed-to-53px-the-bug-this-audit-missed).

### 3c. Supplementary checks (not required, run anyway)

`extra-checks.mjs` → **32 PASS / 0 FAIL**: clipped text, duplicate ids, `target="_blank"` without `rel="noopener"`, WCAG 2.2 SC 2.5.8 tap targets (spacing exception applied correctly), channel row heights, mobile menu open/`aria-expanded`/Escape, 44px menu links, theme toggle and persistence across reload.

`contact-check.mjs` → **200 PASS / 0 FAIL**: full-row hit area proven at 5 sample points per row, row heights, handle overflow, `target`/`rel`, focus.

`compact-proj-check.mjs` → **40 PASS / 0 FAIL**; `oss-hero-check.mjs` → **77 PASS / 0 FAIL**.

---

## 4. Defects found, and their resolution

Six defects were found across this task; all six are fixed and re-verified on the final revision.

### Finding 1 — Nav overflowed the viewport by 28px at 768px (page-level, all pages)

* **File / selector:** `site/src/components/Nav.astro` + `.nav__menu`/`.nav__link` in `global.css`; measured `.nav__actions` / `a.nav__cta`
* **Symptom:** `scrollWidth` 796 vs `innerWidth` 768, both themes, all 4 routes. `.nav__inner` was flex `space-between` with `flex:none` children and `white-space:nowrap` links, and the sheet began only at 720px — broken band ~721–900px.
* **Status:** **FIXED.** Verified `delta = 0` at 1440 / 1024 / 900 / 860 / 768 / 721 / 720 / 390.

### Finding 2 — `/karutoil-resume.pdf` returned 404 from the hero CTA (broken link)

* **File / selector:** `Hero.astro`, `a.btn.btn--ghost[href="/karutoil-resume.pdf"]`
* **Status:** **FIXED.** The button is now labelled **"Get in Touch"** with a mail icon and points at `/contact/`. Verified: hero actions are `"View My Work" → /projects/` and `"Get in Touch" → /contact/` (HTTP 200). "Download Resume" survives **only inside an HTML comment** — I asserted zero visible-text and zero attribute occurrences.

### Finding 3 — Four light-theme contrast failures (WCAG)

* **Root cause:** accent-coloured text over an accent-tinted translucent background (a single family). I wrote the WCAG 2.x relative-luminance formula and alpha-composited semi-transparent backgrounds up the full ancestor chain.

| Selector | Before | Required | After |
|---|---|---|---|
| `button.chip.projectsFilter__chip` (`All`) | 4.12:1 | 4.5:1 | 5.79:1 |
| `span.badge.badge--green` (`Active`) | 4.27:1 | 4.5:1 | 6.91:1 |
| `.iconBtn--accent`, `.badge--accent` | 4.42:1 | 4.5:1 | 6.22:1 |
| `.workCard__initials` | 4.45:1 | 4.5:1 | 6.22:1 |

* **Status:** **FIXED** — the sweep reports 0 failing text nodes.
* **Note on my own page:** the same `.badge--green` pair failed at 4.27:1 on my Contact availability badge. I fixed it in my own scope with a temporary override, then **removed that override once the token was fixed**, so no dead workaround ships (verified: no `availBadge`, no hardcoded `#0f5c2e`).

### Finding 4 — Full-page screenshots were mostly blank (evidence integrity)

* **Mechanism:** `Layout.astro` — `.reveal` stayed `opacity:0` until an IntersectionObserver fired on scroll, and `.js` was added unconditionally, defeating the CSS `html:not(.js) .reveal { opacity:1 }` fallback.
* **Measured before:** `/projects/` 10/10 reveals hidden = **3616px of 3954px (91.5%) blank**; `/experience/` 29.3%; `/contact/` 14.3%.
* **Honest classification:** **not** a normal-browser bug — a scroll-through reveals 10/10, and JS-disabled and `prefers-reduced-motion` both yield zero `opacity:0` elements, and print CSS forces reveal. It was an **evidence** problem and a robustness gap for non-scrolling renderers.
* **Status:** **FIXED** — `.js` gated on `'IntersectionObserver' in window`, plus a 1.2 s safety timer. 0 hidden at 1.5 s on all routes; `projects-dark.png` grew 167 KB → 731 KB.

### Finding 5 — `CompactProject` line-clamp hid a full line of text

* **File / selector:** `CompactProject.astro`, `.compactProj__desc` `-webkit-line-clamp: 3` — 7 of 10 cards each hid ~23px at 1440px.
* **Status:** **FIXED** and verified (40 assertions, 0 failures): 0 truncated descriptions at every width; 0 clipped cards and `delta=0` overflow at 360px and 320px; card heights uniform and `.compactProj__foot` tops identical in every multi-card row.
* **Recorded per the lead's instruction:** descriptions now legitimately differ in height (70/93/116px at 390px). **That is intentional** — information completeness beats pixel-uniform cards. The asserted invariant is card stretch + footer alignment, **not** uniform paragraph heights, and I did not flag their absence.

### Finding 6 — Mobile nav sheet collapsed to 53px (THE BUG THIS AUDIT MISSED)

* **File:** `site/src/styles/global.css`
* **Mechanism:** `.nav` had `backdrop-filter: blur(16px)`. `backdrop-filter` (like `filter`/`transform`) makes an element the **containing block** for its `position: fixed` descendants. So `.nav__menu { position: fixed; inset: var(--nav-h) 0 0 }` resolved against the 73px-tall header instead of the viewport and collapsed to a **53px strip**, with its links painted outside that background box over page content.
* **My gap, stated plainly:** my sweep asserted `aria-expanded`, Escape, and "every mobile-menu link is ≥44px tall" — **all of which passed**, because the links *were* 44px tall and the aria state *was* correct. They were simply painted outside a background box that never grew. Existence/aria/tap-size assertions are structurally blind to a containing-block collapse; only **geometry + occlusion** can see it.
* **Fix (lead):** at `max-width: 720px`, `.nav { background: var(--bg); backdrop-filter: none; -webkit-backdrop-filter: none }` — the mobile header is opaque.
* **Assertion added by me** (`/tmp/audit/mobile-sheet-check.mjs`), per the lead's spec: open the sheet at ≤720px and assert (i) `height >= innerHeight - top - 2`, (ii) `width >= innerWidth - 2`, (iii) `menu.contains(document.elementFromPoint(...))` at several depths, (iv) every nav link's `top >= 0 && bottom <= innerHeight`.
* **Sensitivity proof** — I re-injected `backdrop-filter` to reproduce the pre-fix condition, so the new check cannot be vacuous:

  ```
  $ PRE_FIX=1 node /tmp/audit/mobile-sheet-check.mjs http://localhost:4321
  FAIL  light 390px: sheet height 53px >= innerHeight(844) - top(72) = 772 (position:fixed, nav backdrop-filter:blur(16px))
  PASS  light 390px: all 6 nav links sit inside the viewport (0 overflowing)   <-- the OLD check still passes
  FAIL  light 390px: open sheet occludes page content (200:LEAK->header.pageHead 400:LEAK->section.section 600:LEAK->section.section)

  PRE-FIX: PASS=16 FAIL=16      FIXED: PASS=32 FAIL=0
  ```
  Note the middle line: the link assertion passes in **both** modes. That is the precise reason the original sweep reported green on a broken sheet.

---

## 5. Verification of the lead's final changes

### 5a. Open Source section — no fake metrics, rows aligned

`oss-hero-check.mjs` → **77 PASS / 0 FAIL** across 6 widths × 2 themes:

* **No stray zero anywhere.** A TreeWalker over every text node in `#open-source` found 0 nodes equal to `"0"` or matching `0 stars?/likes?`, and no card's stat row ends in a bare `0`.
* **Metric presence matches the data:** `ai-gateway: 0 stats`, `catalyst: 0 stats`, `pi-web: 1 stat [9 stars]`, `pi-lsp: 1 stat [2 stars]` — and **no likes metric rendered anywhere**, since no repo had real like data. The previous hard "0 stars 0 likes" on every card is gone.
* **Rows align:** within every multi-card row, card heights and stat-row top/bottom positions are identical; the stat row is pinned to the card bottom with a **0px spread** (gaps 21,21,21,21).
* Implementation note for accuracy: the lead described the pin as `margin-top: auto`; the shipped code achieves it via `.ossCard__desc { flex: 1 }` plus `.ossCard__stats { margin-top: var(--sp-5) }` (present in both `global.css` and the component's scoped style). I verified the **observable outcome** — bottom-pinned and row-aligned — which is what matters.

### 5b. Hero CTA

`"Get in Touch"` → `/contact/`, HTTP **200**; no hero action labelled "Download Resume"; nothing points at a resume PDF.

### 5c. Two undeclared changes I found and cleared

The tree also moved in two ways the handover message did not mention. Both are harmless, and I verified that rather than assumed it:

1. **`components/Metrics.astro` and `components/ProjectCard.astro` were deleted** (~12:50). Neither is imported anywhere (`index.astro` imports `StatRow` and `WorkCard`; `projects.astro` imports `WorkCard`), the build is green, and `git status` shows `ProjectCard.astro` as a tracked deletion with no dangling references. Verified safe dead-code cleanup.
2. **`global.css` changed at ~12:56** — this turned out to *be* the mobile-nav `backdrop-filter` fix from finding 6, which is why it is already inside the audited revision.

---

## 6. Open items and what I could not verify

**Open (cosmetic, not check failures):** none blocking. Both cosmetic nits from the previous round are fixed (hero label, OSS fake zeros).

**Could not verify (limitations, not passes):**

1. **External destinations** — `discord.com/users/…`, `github.com/karutoil`, every repo link. No outbound network in this environment; I verified only well-formed hrefs, `target="_blank"` and `rel="noopener noreferrer"` (0 violations). **Their HTTP status is unverified.**
2. **`@media print` and `@media (forced-colors: active)`** — rules exist in `global.css`, but I did not render real print output or a High-Contrast session.
3. **Screen-reader experience** — programmatic proxies only (alt, heading order, `aria-*`, focus indicators); no AT was driven.
4. **Screenshot widths** — the harness captures 1440px only. 1024/768/390/360/320 are covered **programmatically**, not visually.
5. **Non-Chromium engines** — I exercised Chromium only. The `backdrop-filter` containing-block behaviour is spec-defined and I confirmed the mechanism in Chromium, but I did not test Firefox/WebKit mobile.

---

## 7. Before vs after

`artifacts/before/*.png` vs `artifacts/after/*.png`, dark, full-page, 1440px:

| Route | Before | After | Note |
|---|---|---|---|
| `/` | 1440×6689 (387 KB) | 1440×4614 (972 KB) | 31% shorter and far denser: real portrait hero, stats row, 3 flagship cards with Problem/Solution/Tech/Results, 6 grouped tech cards, 4 OSS cards, CTA footer |
| `/projects/` | 1440×5362 (167 KB) | 1440×3944 (731 KB) | 26% shorter; filter chips + 3 flagship + 10 compact cards |
| `/experience/` | 1440×2900 (214 KB) | 1440×3240 (486 KB) | 12% taller; timeline with rail/dots, Toolbox pills, carded quote |
| `/contact/` | 1440×1482 (87 KB) | 1440×2117 (287 KB) | 43% taller by design: 3 full-width channel cards + availability panel + "Prefer email?" line |

Growth in file size alongside shrinking page height is the signal: the same or less vertical space now carries real content (cards, media, portrait) instead of flat regions. The 4× jump on `/projects/` is the reveal fix — blank space replaced by rendered cards.

Qualitative: "before" was hairline-ruled text with a **WebGL stage that rendered an empty box** and a render-blocking Google-Fonts `@import`; "after" is warm-dark, card-based and readable, with a real portrait (`naturalWidth=633`), a self-hosted font stack, a working persistent theme toggle, and one amber accent. Contact rows match the mock's generous full-width pattern with a 48px accent-tinted icon tile (44px at ≤900px) and a full-row hit area, proven at 5 sample points per row.

---

## 8. Revision history — why this report was re-pinned twice

| Revision | What invalidated it |
|---|---|
| `3ee0e1847b1e484c` (12:31) | Superseded: hero label, OSS metric model, CompactProject, then the mobile-nav fix |
| `d6fe59a8c285410b` (12:49) | Stale within 25 s — `CompactProject.astro` moved, then two components were deleted, then `global.css` changed |
| **`e49434324d426334`** (final) | Stable across 4 samples over 45 s, and re-confirmed unchanged after every measurement |

The tree moved **after** each of the first two "frozen" declarations. I held the report both times rather than certify a superseded tree, and re-ran the whole battery. Method note: the revision id is `sha256sum` of the `sha256sum` listing of the 18 source files, truncated to 16 hex characters — I initially compared two captures that differed only because one had the `site/src/` path prefix stripped, which is a trap worth naming.

---

## 9. Method notes

* **WCAG contrast** computed from the WCAG 2.x relative-luminance definition (`c/12.92` below `0.03928`, else `((c+0.055)/1.055)^2.4`; `L = 0.2126R + 0.7152G + 0.0722B`; ratio `(Lmax+0.05)/(Lmin+0.05)`), with semi-transparent backgrounds alpha-composited up the full ancestor chain and elements inside `display:none` ancestors excluded. Thresholds 4.5:1 normal, 3:1 for ≥24px or ≥18.66px-bold.
* **Three false positives in my own tooling were found and corrected rather than reported as defects:** (i) zero-height text flagged every link in the closed mobile menu, because a descendant of `display:none` still reports its own computed `display` — replaced with `Element.checkVisibility()`; (ii) tap targets ignored WCAG 2.2 SC 2.5.8's spacing exception, which on proper application clears all five 15px-tall footer links; (iii) `elementFromPoint` sampling reported false hit-area failures for rows below the fold until I scrolled each into view with instant behaviour.
* **One genuine blind spot** — the mobile-sheet containing-block collapse — is documented in finding 6 with a sensitivity proof. The lesson: asserting that an element *exists*, is *sized*, or carries correct *aria* state does not prove it *occludes* what it should.
* **Deliberate non-findings:** 3-line ellipsis truncation on compact descriptions was originally intentional per spec, and the clipping check exempts `text-overflow: ellipsis|clip`; master-detail `<a>` rows nesting `<div>`/`<p>` are valid because the `a` content model is transparent.

---

## Appendix A — frozen revision

Pinned 2026-10-02, combined SHA-256 `e49434324d426334` (18 files; `Metrics.astro` and `ProjectCard.astro` deleted by the lead and verified unreferenced).

```
712206b81e5d97019b0f8d4ced9235b5445aeb0df340753f5ea12cef955c0b73  pages/contact.astro
e75cf8ed676daafa47ae25d4065a05565217e1e505d92ea5d34a09130ac4210f  pages/experience.astro
78aad11c9f77a7729b162db36b45f8c04301b6aded60ad58faf4f9db8b2c05fd  pages/index.astro
830cd665656d9693582a863f898e303e12331efc0acd0f6f213a70ef3229ad9f  pages/projects.astro
6e6131fab5e660e1aa035944681155d844ce8b3dc3cbdf65dffe6a09ca21fee5  components/CompactProject.astro
7087925c375d5834ae5d48ab746831512249f7620c979b98a776483cc69ad01a  components/ExperienceRow.astro
9445e8233017599b57860e493ae2ecbdad03973062a4f6c7b92a234902a683bd  components/Footer.astro
20543a81cee39e705d23643f16c0121efa2683d6bf68f0b13feaaa7c460ce996  components/Hero.astro
e5741f6e6f35daf5361bea935fa94c5991db0b44db99c52b08b64b7fef33be37  components/Icon.astro
63564b34279d40b66bcea64e5eb240241d8a79acede448b08f16a939d1819b9e  components/Nav.astro
309679704228068fd37d6f105f4687e37667380bd626c9637757543d543b30f7  components/OssCard.astro
3d975a99d5178a2d6f8f18c1300929e512a476cc389be727503c3594baa26500  components/StatRow.astro
53a3db716606dcecb6f48cf7ac98db9c6cb9b84fdb5b4c4aa1c6d97c23bfc0c0  components/TechGroup.astro
b17fae7ad9cb1fdc9558c69e23bdb151477457dcc8e7e8f848d4b2c5720feaf1  components/WorkCard.astro
3b18dfe5b4de850dcf8ce13fa3f7fa933c535d3769a3971bb13fcf821921a9f3  layouts/Layout.astro
8ee49fb896bb024b882da6718dfedb808fa9431b3daf4d76e88b837cd9bead80  styles/global.css
2b270aeeba04d717d1ecd6f51a98d89611d195bfdcefdf122ce51b6c5db7c1f9  styles/tokens.css
01700043a933bec7f7482c18342df7a731acbd73bf3403285fcdfb0dd92fbc64  data/profile.ts
```

## Appendix B — repro commands

```bash
# 1. clean build (must exit 0)
cd /home/karutoil/LandingPage/site && rm -rf dist && npx astro build; echo "EXIT=$?"

# 2. serve the built output
cd /home/karutoil/LandingPage/site && nohup npx astro preview --port 4321 > /tmp/audit/preview-4321.log 2>&1 &

# 3. screenshots (4 routes x light/dark x full-page+fold -> artifacts/after)
cd /home/karutoil/LandingPage && node /tmp/shotkit/shot.mjs artifacts/after http://localhost:4321

# 4. full required sweep (32 loads; must report 0 failing on every check)
cd /home/karutoil/LandingPage && node /tmp/audit/audit.mjs http://localhost:4321 /tmp/audit/FINAL.json

# 5. prove the contrast detector is live (expects 32 injected failures at 1.92:1)
cd /home/karutoil/LandingPage && AUDIT_CONTROL=1 node /tmp/audit/audit.mjs http://localhost:4321

# 6. mobile nav sheet: geometry + occlusion (expect 32 PASS)
cd /home/karutoil/LandingPage && node /tmp/audit/mobile-sheet-check.mjs http://localhost:4321

# 7. prove check 6 is sensitive: reproduce the pre-fix bug (expect 16 FAIL)
cd /home/karutoil/LandingPage && PRE_FIX=1 node /tmp/audit/mobile-sheet-check.mjs http://localhost:4321

# 8. supplementary checks (expect 0 failures)
cd /home/karutoil/LandingPage && node /tmp/audit/extra-checks.mjs http://localhost:4321

# 9. Contact page checks (expect 0 failures)
cd /home/karutoil/LandingPage && node /tmp/audit/contact-check.mjs http://localhost:4321

# 10. CompactProject unclamp checks (expect 0 failures)
cd /home/karutoil/LandingPage && node /tmp/audit/compact-proj-check.mjs http://localhost:4321

# 11. Open Source metrics + hero CTA (expect 0 failures)
cd /home/karutoil/LandingPage && node /tmp/audit/oss-hero-check.mjs http://localhost:4321
```
