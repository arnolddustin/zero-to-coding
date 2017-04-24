# Part 1: Hello World

## Getting started
See the [repository homepage](../README.md) for instructions on installing prerequisites.

## Install Angular
This walkthrough requires the Angular JavaScript framework. The easiest way to work with Angular is to use the Angular Command Line Interface (CLI).
1. Open a command prompt
2. Run the command `npm install -g @angular/cli` to install the Angular CLI.
3. Wait for installation to complete

## Generate the Angular web application
Now that it's installed, the Angular CLI can be used to generate Angular projects and scaffold new code from the command line. To generate the Angular web application, we'll use the Angular CLI as follows.
1. Open a command prompt
2. Run the following Angular CLI command: `ng new zero-to-coding-app`.  This will create a new folder called *zero-to-coding-app* and populate it with the basic structure for developing Angular applications.

## Run the new application
Now that your application has been created, let's make sure it runs.
1. Open a command prompt to the *zero-to-coding-app* folder that was created in the last step.
2. Run the Angular CLI command: `ng serve`.  This will build and start the application.
3. Open a web browser to [http://localhost:4200](http://localhost:4200) and you should see a web page that says **app works!**
4. Leave both the command line and browser windows open.

## Customize the generated application
Now that we have a working Angular web application, let's customize it and make it a true **Hello World** application.
1. Start Visual Studio Code
2. Choose File -> Open Folder from the menu
3. Browse to the *zero-to-coding-app* folder
3. In the left pane, expand the treeview to the **src -> app** folder
4. Click the **app.component.ts** file to open it in the editor window
5. Change the text on line #9 from `app works!` to `Hello world!`
6. Save the file
7. View the open app in your web browser...the page should automatically refresh and display your updated application.  It should now say **Hello world!**

## Success!
You have succesfully completed the walk-through for *Part 1: Hello World*, and are on your way from ***Zero to Coding***!