#!/usr/bin/env python3
"""Capture screenshots of phantompasting.com for visual/mobile SEO audit."""

import sys
import os

try:
    from playwright.sync_api import sync_playwright
    print("Playwright imported OK")
except ImportError as e:
    print(f"Import error: {e}")
    sys.exit(1)

SCREENSHOTS_DIR = "/Users/deniciodeltoro/Documents/RadPosting/phantom-paste/docs/seo-audit/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

PAGES = [
    {
        "name": "homepage_desktop",
        "url": "https://www.phantompasting.com",
        "viewport": {"width": 1440, "height": 900},
        "device": "desktop"
    },
    {
        "name": "homepage_mobile",
        "url": "https://www.phantompasting.com",
        "viewport": {"width": 390, "height": 844},
        "device": "mobile"
    },
    {
        "name": "location_new_york_desktop",
        "url": "https://www.phantompasting.com/locations/new-york",
        "viewport": {"width": 1440, "height": 900},
        "device": "desktop"
    },
    {
        "name": "location_new_york_mobile",
        "url": "https://www.phantompasting.com/locations/new-york",
        "viewport": {"width": 390, "height": 844},
        "device": "mobile"
    },
    {
        "name": "service_wheat_pasting_desktop",
        "url": "https://www.phantompasting.com/services/wheat-pasting",
        "viewport": {"width": 1440, "height": 900},
        "device": "desktop"
    },
    {
        "name": "service_wheat_pasting_mobile",
        "url": "https://www.phantompasting.com/services/wheat-pasting",
        "viewport": {"width": 390, "height": 844},
        "device": "mobile"
    },
    {
        "name": "case_study_fifa_desktop",
        "url": "https://www.phantompasting.com/work/fifa-world-cup-atlanta",
        "viewport": {"width": 1440, "height": 900},
        "device": "desktop"
    },
    {
        "name": "case_study_fifa_mobile",
        "url": "https://www.phantompasting.com/work/fifa-world-cup-atlanta",
        "viewport": {"width": 390, "height": 844},
        "device": "mobile"
    },
]

def capture(page_config, browser):
    name = page_config["name"]
    url = page_config["url"]
    vp = page_config["viewport"]
    device = page_config["device"]

    output_path = os.path.join(SCREENSHOTS_DIR, f"{name}.png")

    print(f"\nCapturing: {name} ({vp['width']}x{vp['height']}) -> {url}")

    ctx = browser.new_context(
        viewport=vp,
        user_agent=(
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
            if device == "mobile" else
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
    )
    pg = ctx.new_page()

    try:
        pg.goto(url, wait_until="networkidle", timeout=30000)
        pg.wait_for_timeout(2000)  # Extra wait for animations/lazy images

        # Above-fold screenshot (viewport only, not full page)
        pg.screenshot(path=output_path, full_page=False)
        print(f"  Saved: {output_path}")

        # Collect some DOM metrics
        metrics = pg.evaluate("""() => {
            const h1 = document.querySelector('h1');
            const h2 = document.querySelector('h2');
            const cta = document.querySelector('a[href*="contact"], a[href*="quote"], button, .cta, [class*="cta"], [class*="btn"]');
            const nav = document.querySelector('nav');
            const heroImg = document.querySelector('img');
            const viewportH = window.innerHeight;

            function inViewport(el) {
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.top < viewportH && r.bottom > 0 && r.left < window.innerWidth && r.right > 0;
            }

            function getRect(el) {
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return {top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), height: Math.round(r.height)};
            }

            // Find all buttons and CTA links
            const allCtaEls = Array.from(document.querySelectorAll('a[href*="contact"], a[href*="quote"], a[href*="book"], button:not([type="submit"]), [class*="cta"], [class*="btn-"]'));
            const visibleCtas = allCtaEls.filter(el => inViewport(el));

            // Check for images with loading=lazy in hero position
            const imgs = Array.from(document.querySelectorAll('img'));
            const heroImgEl = imgs[0];

            return {
                h1Text: h1 ? h1.innerText.trim().substring(0, 100) : null,
                h1InViewport: inViewport(h1),
                h1Rect: getRect(h1),
                h2Text: h2 ? h2.innerText.trim().substring(0, 100) : null,
                navInViewport: inViewport(nav),
                navRect: getRect(nav),
                ctaCount: allCtaEls.length,
                visibleCtaCount: visibleCtas.length,
                firstVisibleCta: visibleCtas[0] ? {text: visibleCtas[0].innerText.trim().substring(0,50), rect: getRect(visibleCtas[0])} : null,
                heroImgSrc: heroImgEl ? heroImgEl.src : null,
                heroImgLoading: heroImgEl ? heroImgEl.loading : null,
                heroImgRect: getRect(heroImgEl),
                heroImgComplete: heroImgEl ? heroImgEl.complete : null,
                heroImgNaturalSize: heroImgEl ? {w: heroImgEl.naturalWidth, h: heroImgEl.naturalHeight} : null,
                viewportDimensions: {w: window.innerWidth, h: window.innerHeight},
                pageTitle: document.title,
                hasHorizontalScroll: document.documentElement.scrollWidth > window.innerWidth,
                bodyScrollWidth: document.documentElement.scrollWidth,
                totalImages: imgs.length,
                lazyImages: imgs.filter(i => i.loading === 'lazy').length,
            };
        }""")

        print(f"  Title: {metrics.get('pageTitle')}")
        print(f"  H1: {metrics.get('h1Text')} (in viewport: {metrics.get('h1InViewport')})")
        print(f"  Nav in viewport: {metrics.get('navInViewport')}")
        print(f"  Visible CTAs: {metrics.get('visibleCtaCount')} / {metrics.get('ctaCount')}")
        print(f"  First CTA: {metrics.get('firstVisibleCta')}")
        print(f"  Hero img loading attr: {metrics.get('heroImgLoading')}, complete: {metrics.get('heroImgComplete')}, size: {metrics.get('heroImgNaturalSize')}")
        print(f"  Horizontal scroll: {metrics.get('hasHorizontalScroll')} (scroll width: {metrics.get('bodyScrollWidth')} vs viewport {vp['width']})")
        print(f"  Total images: {metrics.get('totalImages')}, lazy: {metrics.get('lazyImages')}")

        return metrics

    except Exception as e:
        print(f"  ERROR: {e}")
        return None
    finally:
        ctx.close()


def main():
    all_results = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox"])
        print(f"Browser launched: Chromium")

        for page_config in PAGES:
            metrics = capture(page_config, browser)
            all_results[page_config["name"]] = metrics

        browser.close()

    print("\n\n=== CAPTURE COMPLETE ===")
    print(f"Screenshots saved to: {SCREENSHOTS_DIR}")

    return all_results


if __name__ == "__main__":
    main()
