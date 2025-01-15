import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that an item with status "Incomplete" is displayed on the home page', async ({ page }) => {
    test.setTimeout(100000);
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Add a task with the title "test1" and status "Incomplete"
    await homePage.addTask('test2', 'Completed');

    // Validate the task is displayed with the correct status and that checkbox is ticked
    await homePage.validateTaskTitleVisible('test2')
    await homePage.validateCheckboxTicked();
  });
});
