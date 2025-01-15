import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that tasks with different statuses are displayed on the home page according to preferred selection', async ({ page }) => {
    test.setTimeout(140000);
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Now switch to status "Incomplete"
    await homePage.setStatusFilter('Incomplete');

    // Now switch to status "Completed"
    await homePage.setStatusFilter('Completed');
  });
});
