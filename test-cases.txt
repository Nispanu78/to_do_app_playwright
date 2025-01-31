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

Feature: Checking that after opening the task creation window I can stop the creation process by clicking on the "X" button 
  Scenario Outline: Validating that buttons to cancel the creation of a task work as expected 
    Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
    And the home page of the Todo App app is displayed as expected
    And I leave the default status "All" in the drop-down menu
    When I click on "Add Task" button
    And I click on the "X" button
    Then the window closes

Feature: Checking that after opening the task creation window I can stop the creation process by clicking on the "Close" button 
  Scenario Outline: Validating that buttons to cancel the creation of a task work as expected 
    Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
    And the home page of the Todo App app is displayed as expected
    And I leave the default status "All" in the drop-down menu
    When I click on "Add Task" button
    And I click on the "Close" button
    Then the window closes

Feature: Checking that it is possible to edit and/or delete a task with each of the two statuses
  Scenario Outline: Validating that task with statuses "Incomplete" and/or "Completed" can be 
  edited and/or deleted
  Given that I open Chrome version 131.0.6778.265 and navigate to https://wc-react-todo-app.netlify.app/
  And the home page of the Todo App is displayed as expected
  And I leave the status "All" from the drop-down menu
  And I click on "Add Task" button
  And I insert the title "test3"
  And I leave the status "Incomplete"
  And I click "Add Task"
  And I choose the status "Incomplete" from the drop-down menu of the main page
  And I assert that "test3" task is visible
  And I choose the status "Alle" from the drop-down menu
  And I assert that "test3" task is visible
  And I click on the edit button corresponding to the item "test3"
  And I change the current title with "test3_changed"
  And I change the status of the task from "Incomplete" to "Completed"
  And I click on the "Update Task" button
  And I select "Completed" from the drop-down menu of the main page
  When I assert that "test3_changed" task is visible
  Then the task "test3_changed" is shown with the new status on the home page
  When I click on the delete button of task "test3_changed"
  Then the task is deleted
