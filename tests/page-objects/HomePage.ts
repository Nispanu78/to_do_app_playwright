import { BasePage } from './BasePage';
import { Locator, Page, expect } from '@playwright/test';
import { locators } from './Locators';

export class HomePage extends BasePage {
  readonly clickTaskButton: Locator;
  readonly clickEditButton: Locator;
  readonly clickDeleteButton: Locator;
  readonly taskTitleInput: Locator;
  readonly statusMainPage: Locator;
  readonly statusDropdown: Locator;
  readonly submitToDo: Locator;
  readonly taskList: Locator;
  readonly checkBoxUnticked: Locator;
  readonly checkBoxTicked: Locator;
  readonly xButton: Locator;
  readonly closePageWithCancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.clickTaskButton = page.locator(locators.clickTaskButton);
    this.clickEditButton = page.locator(locators.clickEditButton);
    this.clickDeleteButton = page.locator(locators.clickDeleteButton);
    this.submitToDo = page.locator(locators.submitToDo);
    this.taskTitleInput = page.locator(locators.taskTitleInput);
    this.statusMainPage = page.locator(locators.statusMainPage);
    this.statusDropdown = page.locator(locators.statusDropdown);
    this.taskList = page.locator(locators.taskList);
    this.checkBoxUnticked = page.locator(locators.checkBoxUnticked);
    this.checkBoxTicked = page.locator(locators.checkBoxTicked);
    this.xButton = page.locator(locators.xButton);
    this.closePageWithCancelButton = page.locator(locators.closePageWithCancelButton);
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

  async addEmptyTask(): Promise<void> {
    await this.clickTaskButton.click();
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
    await this.clickDeleteButton.click();
  }

  async validateCheckboxUnticked(): Promise<void> {
    await expect(this.checkBoxUnticked).toHaveAttribute('stroke-dasharray', '0px 1px');
  }

  async validateCheckboxTicked(): Promise<void> {
    await expect(this.checkBoxTicked).toHaveAttribute('stroke-dasharray', '1px 1px');
  }

  async closePageWithXButton(): Promise<void> {
    await this.xButton.click();
  }

  async cancelButton(): Promise<void> {
    await this.closePageWithCancelButton.click();
  }
}