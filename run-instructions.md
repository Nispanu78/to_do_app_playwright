To run this test suite locally, please follow these guidelines

1. Install node.js following the appropriate guidelines for your OS
2. Verify that node.js and npm (node packet manager) is installed by running the following commands valid for both Linux and Windows:
node -v
npm -v
3. For Windows install playwright with the following command then follow instructions on screen (choose whether to use Playwright with Javascript or TypeScript, the name of the "tests" folder etc.)
npm init playwright@latest
4. For Linux run the following commands
4a. Update the system
sudo apt update && sudo apt upgrade -y
4b Install dependencies
sudo apt install -y libnss3 libatk-bridge2.0-0 libxkbcommon-x11-0 libgbm-dev
4c. Install playwright 
npm install playwright
4d. Install browsers
npx playwright install
4e. Verify installation with the following script:
echo "const { chromium } = require('playwright'); (async () => { const browser = await chromium.launch(); const page = await browser.newPage(); await page.goto('https://example.com'); console.log(await page.title()); await browser.close(); })();" > test.js
node test.js
5. Features of the application are tested in Chrome version 131.0.6778.265
6. Run all tests with the following command:
npx playwright test --project=chromium
7. Run a single test with the following command:
npx playwright test tests/test5.spec.ts --project=chromium
8. Open Playwright report (traceviewer is set as "on") with the following command:
npx playwright show-report
