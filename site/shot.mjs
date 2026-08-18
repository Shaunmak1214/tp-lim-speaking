import { chromium } from 'playwright'

const [, , width = '1440', height = '900', out = '/tmp/shot', mode = 'sections'] = process.argv
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +width, height: +height } })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

if (mode === 'full') {
  await page.screenshot({ path: `${out}-full.png`, fullPage: true })
} else {
  const total = await page.evaluate(() => document.body.scrollHeight)
  let i = 0
  for (let y = 0; y < total; y += +height) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y)
    await page.waitForTimeout(700)
    await page.screenshot({ path: `${out}-${String(i).padStart(2, '0')}.png` })
    i++
  }
}
await browser.close()
console.log('done')
