# [Demo App]()

# Todo List App



### Tech stack

* React JS
* CSS
* Figma
* Draw IO

### App Feature
* Add Task : Users can add their tasks by typing the text on the input box.
* Delete Task : Users can delete their tasks by click the delete button.
* Edit Task : Users can edit the task by clicking on the edit button then input text will pop up after edited they can click the save button to save back the task. 
* Task Status : Users can click the chcek box to mark their completed tasks and it will cross the task .




# Convention Guide
[Convention Guide](https://www.notion.so/ToDoList-Convention-Guide-92e163c2fbb2494994c690f6831d19ee)


# Figma Design 
[UI Design](https://www.figma.com/file/AaTnuaIdN8ijLRHFMrZrxR/ToDo-List?type=design&node-id=0-1&mode=design&t=kYziiJpieS27uEMl-0)


# App Flow
[Todo App Flow](https://drive.google.com/file/d/1jNTyESUXaCAJH9T5rSLAfbt-mfhEduw2/view?usp=sharing)

# Git Flow Method

### 1. Main Branch
  * store the stable version of app
### 2. Develop Branch
  * This branch is use as the app developing integreation
  * Any feature that created are merged into develop branch
  * Represents the latest state of the application with features being developed.

### 3. Feature Branches 
  * Feature branch responsible for the app features 
  * Feature branches
    * feature/add
    * feature/delete
    * feature/edit
    * feature/finalize

### 4. Release Branches
 * For release a new version of my todo app 
    * Create a release branch from the develop
    * Release branched :
      * release/1.0 

### 5. Bugfix Branches 
* If any bug appear when demo the app after release 

### 6. Hoxfix Branches
* used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.


[Git Flow Reference ](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits)