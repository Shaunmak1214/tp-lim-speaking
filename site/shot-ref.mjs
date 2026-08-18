import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('https://www.tonyrobbins.com/', { waitUntil: 'domcontentloaded', timeout: 45000 })
await page.waitForTimeout(4000)

// dismiss cookie banners if present
for (const sel of ['#onetrust-accept-btn-handler', 'button:has-text("Accept")']) {
  try {
    await page.locator(sel).first().click({ timeout: 2000 })
    break
  } catch {}
}

const total = await page.evaluate(() => document.body.scrollHeight)
console.log('page height', total)
let i = 0
for (let y = 0; y < total && i < 20; y += 850) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y)
  await page.waitForTimeout(900)
  await page.screenshot({ path: `/tmp/ref-${String(i).padStart(2, '0')}.png` })
  i++
}
await browser.close()
console.log('done', i)
