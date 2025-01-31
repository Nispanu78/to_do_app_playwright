export const locators = {
    clickTaskButton: "//button[normalize-space()='Add Task']",
    clickEditButton: "//div[@class='todoItem_todoActions__CuQMN']//div[2]//*[name()='svg']",
    clickDeleteButton: "//div[@class='todoItem_todoActions__CuQMN']//div[1]",
    submitToDo: "button[type='submit']",
    taskTitleInput: '//input[@id="title"]',
    statusMainPage: '//select[@id="status"]',
    statusDropdown: '//select[@id="type"]',
    taskList: '.task-list',
    checkBoxUnticked: '//*[name()="svg"]//*[local-name()="path" and @opacity=0]',
    checkBoxTicked: '//*[name()="svg"]//*[local-name()="path" and @opacity=1]',
    xButton: "//div[@class='modal_closeButton__Fg7AM']//*[name()='svg']//*[name()='path' and contains(@fill,'none')]",
    closePageWithCancelButton: "//button[normalize-space()='Cancel']"
  };