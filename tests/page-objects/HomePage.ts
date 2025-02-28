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

    async setStatusFilter(status: string) {
      try {
          await this.statusMainPage.selectOption({ label: status });
      } catch (error) {
          console.error("Error setting status filter:", error);
      }
    }

    async addTask(title: string, status: string) {
      try {
          await this.clickTaskButton.click();
          await this.taskTitleInput.fill(title);
          await this.statusDropdown.selectOption({ label: status });
          await this.submitToDo.click();
      } catch (error) {
          console.error("Error adding task:", error);
      }
    }

  async addEmptyTask(): Promise<void> {
    await this.clickTaskButton.click();
    }

  async validateTaskTitleVisible(title: string) {
      try {
          await expect(this.page.getByText(title)).toBeVisible();
      } catch (error) {
          console.error(`Error validating task title visibility: ${title}`, error);
      }
    }

  async editTask(title: string, status: string) {
      try {
          await this.clickEditButton.click();
          await this.taskTitleInput.fill(title);
          await this.statusDropdown.selectOption({ label: status });
          await this.submitToDo.click();
      } catch (error) {
          console.error(`Error editing task with title: ${title} and status: ${status}`, error);
      }
    }

  async deleteTask() {
        try {
            await this.clickDeleteButton.click();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

  async validateCheckboxUnticked() {
      try {
          await expect(this.checkBoxUnticked).toHaveAttribute('stroke-dasharray', '0px 1px');
      } catch (error) {
          console.error("Error validating checkbox unticked state:", error);
      }
    }

  async validateCheckboxTicked() {
      try {
          await expect(this.checkBoxTicked).toHaveAttribute('stroke-dasharray', '1px 1px');
      } catch (error) {
          console.error("Error validating checkbox ticked state:", error);
      }
    }

  async closePageWithXButton() {
      try {
          await this.xButton.click();
      } catch (error) {
          console.error("Error closing the page with X button:", error);
      }
    }

  async cancelButton() {
      try {
          await this.closePageWithCancelButton.click();
      } catch (error) {
          console.error("Error closing the page with Cancel button:", error);
      }
    }

}