import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that a task with status "Incomplete" is displayed on the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate that home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Add a task with the title "test1" and status "Incomplete"
    await homePage.addTask('test1', 'Incomplete');

    // Validate the task is displayed with the correct status
    await homePage.validateTaskTitleVisible('test1');
    
    // Try to validate that checkbox is unticked
    await homePage.validateCheckboxUnticked();
  });
});
