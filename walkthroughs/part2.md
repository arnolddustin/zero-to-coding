# Part 2: Hello Data

## Introduction
This walk through builds upon the sample application built during [Part 1: Hello World](./part1.md). In this walkthrough, the sample application is extended to retrieve and display data from the [www.healthdata.gov](https://www.healthdata.gov) public APIs. The following programming constructs are demonstrated:
* comments
* variables and arrays
* operators and conditionals
* loops and functions

## Getting started
See the [repository homepage](../README.md) for instructions on installing prerequisites.  Once you have completed [Part 1: Hello World](./part1.md), you're all set.

## Run the application
Run the sample application created during the [Part 1: Hello World](./part1.md) example.
1. Open a command prompt to the *zero-to-coding-app* folder that was created in the previous example.
2. Run the Angular CLI command: `ng serve`.  This will build and start the application.
3. Open a web browser to [http://localhost:4200](http://localhost:4200) and you should see a web page that says **app works!**
4. Leave both the command line and browser windows open.

## Create our Health Data component
This will create a new Angular component that we'll use to display some health data.
1. Open a command prompt to the *zero-to-coding-app* folder that was created in the previous example.
2. Run the Angular CLI command: `ng generate component health-data`.  This will add a new Angular component called *HeatlhDataComponent*.

## Connect the new Health Data component to our app
This will connect our new Health Data component to the rest of the application.
1. Start Visual Studio Code
2. Choose File -> Open Folder from the menu
3. Browse to the *zero-to-coding-app* folder
4. In the left pane, expand the treeview to the **src -> app** folder
5. Click the **app.component.html** file to open it in the editor window
6. Replace the contents of the file with the following:
```html
<h1>
  {{title}}
</h1>
<app-health-data></app-health-data>
```
7. Save the file
8. View app in your web browser.  You should now see **Health Component Works!** below the *Hello World* title.

## Create our Health Data service
This will create a new Angular service that will provide data to our health data component. The Health Data service will be responsible for fetching the health data from an online API.
1. Open a command prompt to the *zero-to-coding-app* folder that was created in the previous example.
2. Run the Angular CLI command: `ng generate service health-data`.  This will create a new Angular service called *HealthDataService*.
3. In Visual Studio Code, expand the file treeview (in the left pane) to the **src -> app** folder
4. Click the **health-data.service.ts** file to open it in the editor window
5. Replace the contents of the file with the following:
```typescript
// this will be the service source code hooked to some fake data
```
6. Now the service is ready to be used to return some sample data

## Connect our Health Data component to the Health Data service
This will connect our new Health Data component to the new Health Data service.  
1. In Visual Studio Code, expand the treeview to the **src -> app -> health-service** folder
2. Click the **health-service.component.ts** file to open it in the editor window
3. Copy and past the following code in the file:
```typescript
// this will be the component source code hooked up to the service
```
4. Save the file

## Update the view template for the Health Data component
This will create the user interface for our Health Data component, displaying the data provided by the Health Data service.
1. In Visual Studio Code, expand the treeview to the **src -> app -> health-service** folder
2. Click the **health-service.component.html** file to open it in the editor window
3. Copy and past the following code in the file:
```html
<!-- this will be the HTML for the view -->
```
4. Save the file
5. Open your web browser.  You should now see our sample data.

## Update the Health Data service to fetch some real data from an API
This step will update our Health Data service to fetch information from a [www.healthdata.gov](https://www.healthdata.gov) API and provide it our component instead of using sample data.
1. In Visual Studio Code, expand the treeview to the **src -> app** folder
2. Click the **health-data.service.ts** file to open it in the editor window
3. Copy and past the following code in the file:
```typescript
// this will be the final service code
```
4. Save the file
5. Open your web browser.  You should now see the real data displayed.

## Success!
You have succesfully completed the walk-through for *Part 2: Hello Data*, and are on your way from ***Zero to Coding***!