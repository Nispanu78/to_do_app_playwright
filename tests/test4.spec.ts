import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that a task previously created may be edited and deleted', async ({ page }) => {
    test.setTimeout(100000);
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Leave the dropdown with status "All"
    await homePage.setStatusFilter('All');

    // Add a task with the title "test4" and status "Incomplete"
    await homePage.addTask('test4', 'Incomplete');

    // Validate the task is displayed 
    await homePage.validateTaskTitleVisible('test4');

    // Edit the 'test4' task and validate that new title 'test4_changed' is visible
    await homePage.editTask('test4_changed', 'Completed');
    await homePage.validateTaskTitleVisible('test4_changed');

    // Delete the 'test4_changed' task
    await homePage.deleteTask()
  });
});