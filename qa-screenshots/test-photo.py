from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:4321/portfolio-paloma-gamero/', wait_until='networkidle')
    page.wait_for_timeout(2000)

    # Check image loading
    result = page.evaluate("""
        (() => {
            const img = document.querySelector('#hero img');
            if (!img) return 'No img element found';
            return {
                src: img.src,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                complete: img.complete,
                currentSrc: img.currentSrc,
                offsetWidth: img.offsetWidth,
                offsetHeight: img.offsetHeight,
                display: getComputedStyle(img).display,
                visibility: getComputedStyle(img).visibility,
                opacity: getComputedStyle(img).opacity,
            };
        })()
    """)
    print("Image info:", result)

    # Take a zoomed screenshot of just the photo area
    hero = page.query_selector('.hero-photo')
    if hero:
        hero.screenshot(path='./qa-screenshots/qa-photo-closeup.png')
        print("Photo closeup saved")

    browser.close()
