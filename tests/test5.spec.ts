import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Adding a To-Do Item', () => {
  test('Validating that a task previously created may be edited and deleted', async ({ page }) => {
    const homePage = new HomePage(page);

    // Open Chrome and navigate to the application
    await homePage.navigateTo('https://wc-react-todo-app.netlify.app/');

    // Validate the home page is displayed
    expect(await page.title()).toContain('Todo App');

    // Add a task with the title "test3" and status "Incomplete"
    await homePage.addTask('test3', 'Incomplete');

    // Switch to status "Incomplete"
    await homePage.setStatusFilter('Incomplete');

    // Validate the task with "Incomplete" status is displayed 
    await homePage.validateTaskTitleVisible('test3');

    // Switch the dropdown to status "All"
    await homePage.setStatusFilter('All');

    // Validate the task with "Incomplete" status is still displayed 
    await homePage.validateTaskTitleVisible('test3');

    // Edit the 'test3' task and validate that new title 'test3_changed' is visible
    await homePage.editTask('test3_changed', 'Completed');
    
    // Switch to status "Completed"
    await homePage.setStatusFilter('Completed');
    await homePage.validateTaskTitleVisible('test3_changed');

    // Delete the 'test3_changed' task
    await homePage.deleteTask()
  });
});