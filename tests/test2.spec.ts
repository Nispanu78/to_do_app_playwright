import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that a task with status "Completed" is displayed on the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Add a task with the title "test2" and status "Completed"
    await homePage.addTask('test2', 'Completed');

    // Validate the task is displayed with the correct status 
    await homePage.validateTaskTitleVisible('test2')
    
    // Try to validate that checkbox is ticked
    await homePage.validateCheckboxTicked();
  });
});
