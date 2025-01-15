import { BasePage } from './BasePage';
import { Locator, Page, expect } from '@playwright/test';

export class HomePage extends BasePage {
  readonly clickTaskButton: Locator;
  readonly clickEditButton: Locator;
  readonly clickDeleteButton: Locator;
  readonly taskTitleInput: Locator;
  readonly statusMainPage: Locator;
  readonly statusDropdown: Locator;
  readonly submitToDo: Locator;
  readonly taskList: Locator;
  readonly checkBox: Locator;

  constructor(page: Page) {
    super(page);
    this.clickTaskButton = page.locator('button', { hasText: 'Add Task' });
    this.clickEditButton = page.locator("//div[@class='todoItem_todoActions__CuQMN']//div[2]//*[name()='svg']")
    this.clickDeleteButton = page.locator("//div[@class='todoItem_todoActions__CuQMN']//div[1]")
    this.submitToDo = page.locator("//button[@type='submit']")
    this.taskTitleInput = page.locator('//input[@id="title"]');
    this.statusMainPage = page.locator('//select[@id="status"]');
    this.statusDropdown = page.locator('//select[@id="type"]');
    this.taskList = page.locator('.task-list');
    this.checkBox = page.locator('(//*[name()="svg"])[1]')
  }

  async setStatusFilter(status: string): Promise<void> {
    await this.statusMainPage.selectOption({ label: status });
  }

  async addTask(title: string, status: string): Promise<void> {
    await this.clickTaskButton.click();
    await this.taskTitleInput.fill(title);
    await this.statusDropdown.selectOption({ label: status });
    await this.submitToDo.click();
  }

  async validateTaskTitleVisible(title: string): Promise<void> {
    await expect(this.page.getByText(title)).toBeVisible();
  }

  async editTask(title: string, status: string): Promise<void> {
    await this.clickEditButton.click();
    await this.taskTitleInput.fill(title);
    await this.statusDropdown.selectOption({ label: status });
    await this.submitToDo.click();
  }

  async deleteTask(): Promise<void> {
    await this.clickDeleteButton.click()
  }
  
  async validateCheckboxUnticked(title: string): Promise<void> {
    await expect(this.checkBox).not.toBeChecked();
  }

}
