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

    // Add a task with the title "test5" and status "Completed"
    await homePage.addTask('test5', 'Completed');

    // Validate the task is displayed
    await homePage.validateTaskTitleVisible('test5');

    // Edit the 'test5' item and validate that new title is visible
    await homePage.editTask('test5_changed', 'Completed');
    await homePage.validateTaskTitleVisible('test5_changed');

    // Delete the 'test5_changed task'
    await homePage.deleteTask()
  });
});