import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that I can close a window with the "X" button', async ({ page }) => {
    test.setTimeout(140000);
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Add a task with the title "test3_incomplete" and status "Incomplete"
    await homePage.addEmptyTask();

    // Close the page with the "X" button
    await homePage.closePageWithXButton();
  });
});
