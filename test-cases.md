Feature: Adding a to do task with status "Incomplete"
  Scenario Outline: Validating that task with status "Incomplete" is displayed on the home page
    Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
    And the home page of the Todo App is displayed as expected
    And I leave the drop-down menu of the home page with the status "All"
    When I click on "Add Task" button
    And I leave the default status as "Incomplete" 
    And I insert the title "test1"
    And I click on the "Add Task" button
    Then the to do item with the title "test1" is displayed on the home page as expected
    And checkbox is unticked

Feature: Adding a to do item with status "Completed"
  Scenario Outline: Validating that item with status "Completed" is displayed on the home page
    Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
    And the home page of the Todo App app is displayed as expected
    And I leave the drop-down menu of the home page with the status "All"
    When I click on "Add Task" button
    And I select the status "Completed" from the drop-down menu
    And I insert the title "test2"
    And I click on the "Add Task" button
    Then the to do item with the title "test2" is displayed on the home page as expected
    And checkbox is ticked

Feature: Checking that drop-down of the home page work as expected 
  Scenario Outline: Validating that tasks are displayed in the home page according to the options 
  selected in the drop-down menu
    Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
    And the home page of the Todo App app is displayed as expected
    When I leave the default status "All" in the drop-down menu
    Then both tasks with status "Incomplete" and "Completed" are displayed 
    When I select the status "Incomplete" in the drop-down menu
    Then only incomplete tasks are displayed
    When I select status "Completed"
    Then only completed tasks are displayed

Feature: Checking that it is possible to edit and/or delete a task with each two statuses
  Scenario Outline: Validating that task with status "Incomplete" can be 
  edited and/or deleted
  Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
  And the home page of the Todo App is displayed as expected
  When I click on "Add Task" button
  And I leave the status "Incomplete" from the drop-down menu
  And I insert the title "test4"
  And I click on the "Add Task" button
  And I assert that the "test4" to do item is visible
  And I click on the edit button corresponding to the item "test4"
  Then I can change the current title with "test4_changed"
  And I can change the status of the drop-down menu from "Incomplete" to "Completed"
  And I can click on the "Update Task" button
  When I select "Completed" tasks from the home page drop-down menu
  Then the task "test4_changed" is shown with the new status on the home page
  When I click on the delete button of task "test4_changed"
  Then the task is deleted

Feature: Checking that it is possible to edit and/or delete a task with each two statuses
  Scenario Outline: Validating that a task with status "Completed" can be 
  edited and/or deleted
  Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
  And the home page of the Todo App is displayed as expected
  When I click on "Add Task" button
  And I change the status from "Incomplete" to "Completed" from the drop-down menu
  And I insert the title "test5"
  And I click on the "Add Task" button
  And I assert that the "test5" to do item is visible
  And I click on the edit button corresponding to the item "test5"
  Then I can change the current title with "test5_changed"
  And I can change the status of the drop-down menu from "Completed" to "Incomplete"
  And I can click on the "Update Task" button
  When I select "Incomplete" tasks from the home page drop-down menu
  Then the task "test5_changed" is shown with the new status on the home page
  When I click on the delete button of task "test5_changed"
  Then the task is deleted

