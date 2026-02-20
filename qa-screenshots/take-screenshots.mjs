import { chromium } from 'playwright';

const BASE = 'http://localhost:4321/portfolio-paloma-gamero/';
const DIR = './qa-screenshots/';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto(BASE, { waitUntil: 'networkidle' });
  // Wait for hero animations
  await page.waitForTimeout(2000);

  // Force all reveal elements to be visible for QA
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
  });
  await page.waitForTimeout(500);

  // 1. Hero
  await page.screenshot({ path: DIR + 'qa-desktop-hero.png' });

  // 2. About
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-about.png' });

  // 3. Work / Campaign Showcase
  await page.evaluate(() => document.getElementById('work')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-work.png' });

  // Scroll down more to see campaign cards
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-desktop-work2.png' });

  // 4. Experience
  await page.evaluate(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-experience.png' });

  // Scroll down to see more experience
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-desktop-experience2.png' });

  // 5. Toolkit
  await page.evaluate(() => document.getElementById('toolkit')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-toolkit.png' });

  // 6. Education
  await page.evaluate(() => document.getElementById('education')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-education.png' });

  // 7. Footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: DIR + 'qa-desktop-footer.png' });

  // 8. Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-desktop-fullpage.png', fullPage: true });

  // --- MOBILE 375px ---
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
  });
  await page.waitForTimeout(300);

  // Mobile hero
  await page.screenshot({ path: DIR + 'qa-mobile-hero.png' });

  // Mobile full page
  await page.screenshot({ path: DIR + 'qa-mobile-fullpage.png', fullPage: true });

  // Mobile about
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-mobile-about.png' });

  // Mobile work
  await page.evaluate(() => document.getElementById('work')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-mobile-work.png' });

  // Mobile experience
  await page.evaluate(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: DIR + 'qa-mobile-experience.png' });

  await browser.close();
  console.log('All screenshots saved to ' + DIR);
})();
