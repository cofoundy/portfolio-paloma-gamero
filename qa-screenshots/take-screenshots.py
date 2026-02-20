from playwright.sync_api import sync_playwright

BASE = 'http://localhost:4321/portfolio-paloma-gamero/'
DIR = './qa-screenshots/'

REVEAL_JS = """
document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
    el.classList.add('revealed');
});
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()

    page.goto(BASE, wait_until='networkidle')
    page.wait_for_timeout(2000)
    page.evaluate(REVEAL_JS)
    page.wait_for_timeout(500)

    # 1. Hero
    page.screenshot(path=DIR + 'qa-desktop-hero.png')

    # 2. About
    page.evaluate("document.getElementById('about')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-about.png')

    # 3. Work
    page.evaluate("document.getElementById('work')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-work.png')

    # Work cards lower
    page.evaluate("window.scrollBy(0, 700)")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-desktop-work2.png')

    # 4. Experience
    page.evaluate("document.getElementById('experience')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-experience.png')

    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-desktop-experience2.png')

    # 5. Toolkit
    page.evaluate("document.getElementById('toolkit')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-toolkit.png')

    # 6. Education
    page.evaluate("document.getElementById('education')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-education.png')

    # 7. Footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(500)
    page.screenshot(path=DIR + 'qa-desktop-footer.png')

    # Full page
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(300)
    page.evaluate(REVEAL_JS)
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-desktop-fullpage.png', full_page=True)

    # --- MOBILE 375px ---
    page.set_viewport_size({'width': 375, 'height': 812})
    page.goto(BASE, wait_until='networkidle')
    page.wait_for_timeout(1500)
    page.evaluate(REVEAL_JS)
    page.wait_for_timeout(300)

    page.screenshot(path=DIR + 'qa-mobile-hero.png')
    page.screenshot(path=DIR + 'qa-mobile-fullpage.png', full_page=True)

    page.evaluate("document.getElementById('about')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-mobile-about.png')

    page.evaluate("document.getElementById('work')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-mobile-work.png')

    page.evaluate("document.getElementById('experience')?.scrollIntoView({behavior:'instant'})")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-mobile-experience.png')

    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(300)
    page.screenshot(path=DIR + 'qa-mobile-footer.png')

    browser.close()
    print('All screenshots saved to ' + DIR)
