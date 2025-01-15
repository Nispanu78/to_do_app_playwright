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
5. Run your first playwright test with the command:
npx playwright test

