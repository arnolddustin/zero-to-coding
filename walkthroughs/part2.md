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
8. View app in your web browser.  You should now see *health-data works!* below the ***Hello World!*** title.

## Create our Health Data service
This will create a new Angular service that will provide data to our health data component. The Health Data service will be responsible for fetching the health data from an online API.
1. Open a command prompt to the *zero-to-coding-app* folder that was created in the previous example.
2. Run the Angular CLI command: `ng generate service health-data`.  This will create a new Angular service called *HealthDataService*.
3. In Visual Studio Code, expand the file treeview (in the left pane) to the **src -> app** folder
4. Click the **health-data.service.ts** file to open it in the editor window
5. Update the code to the following:
```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class HealthDataService {

  healthdata: any[] = [];

  constructor() {
    this.healthdata.push([1, 'A7C1B420-D459-41BE-856A-F3CD1887600F', 1, 1470985749, '912986', 1470985749, '912986', null, '2013', '1', 'Albany Medical Center Hospital', '1239', '28220', '439.05', '1238.08', '438.72', '351.27', '0.92']);
    this.healthdata.push([2, 'A1F3DD92-48D6-4E64-A57B-76286D120D40', 2, 1470985749, '912986', 1470985749, '912986', null, '2013', '2', 'Albany Medical Center - South Clinical Campus', '1', '34', '294.12', '0.38', '110.31', '935.91', '0.63']);
    this.healthdata.push([3, '311139DA-B471-4C2B-9911-60685A586E24', 3, 1470985749, '912986', 1470985749, '912986', null, '2013', '4', 'Albany Memorial Hospital', '76', '2946', '257.98', '128.86', '437.40', '207.02', '-52.86']);
  }

  getHealthData() {
    return this.healthdata;
  }
}
```
6. Now the service is ready to be used to return some sample data

## Connect our Health Data component to the Health Data service
This will connect our new Health Data component to the new Health Data service.  
1. In Visual Studio Code, expand the treeview to the **src -> app -> health-data** folder
2. Click the **health-data.component.ts** file to open it in the editor window
3. Updated the code to the following:
```typescript
import { Component, OnInit } from '@angular/core';
import { HealthDataService } from '../health-data.service';

@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.css'],
  providers: [HealthDataService]
})
export class HealthDataComponent implements OnInit {

  private healthData: any[] = [];

  constructor(private healthDataService: HealthDataService) { }

  ngOnInit() {
    this.healthData = this.healthDataService.getHealthData();
  }
}
```
4. Save the file

## Update the view template for the Health Data component
This will create the user interface for our Health Data component, displaying the data provided by the Health Data service.
1. In Visual Studio Code, expand the treeview to the **src -> app -> health-data** folder
2. Click the **health-data.component.html** file to open it in the editor window
3. Update the code to the following:
```html
<p>
  health-data works!
</p>
<table>
 <tr *ngFor="let row of healthData">
  <td>{{row[10]}}</td>
  <td>{{row[11]}}</td>
  <td>{{row[12]}}</td>
  <td>{{row[13]}}</td>
 </tr>
</table>
```
4. Save the file
5. Open your web browser.  You should now see our sample data.

## Update the Health Data service and component to use an API
This step will update our Health Data service to fetch information from a [www.healthdata.gov](https://www.healthdata.gov) API and provide it our component instead of using sample data.
1. In Visual Studio Code, expand the treeview to the **src -> app** folder
2. Click the **health-data.service.ts** file to open it in the editor window
3. Copy and past the following code in the file:
```typescript
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HealthDataService {

  private apiUrl = 'https://health.data.ny.gov/api/views/s3du-3m47/rows.json?accessType=DOWNLOAD';

  constructor(private http: Http) { }
  getHealthData(): Observable<any[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
```
4. Save the file
5. In Visual Studio Code, expand the treeview to the **src -> app -> health-data** folder
6. Click the **health-data.component.ts** file to open it in the editor window
3. Update the code to the following:
```typescript
import { Component, OnInit } from '@angular/core';
import { HealthDataService } from '../health-data.service';

@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.css'],
  providers: [HealthDataService]
})
export class HealthDataComponent implements OnInit {

  private healthData: any[] = [];
  private errorMessage: any = '';

  constructor(private healthDataService: HealthDataService) { }

  ngOnInit() {
    this.healthDataService.getHealthData()
      .subscribe(
      data => this.healthData = data,
      error => this.errorMessage = <any>error);
  }
}
```
4. Save the file
5. Open your web browser.  You should now see our sample data.

## Success!
You have succesfully completed the walk-through for *Part 2: Hello Data*, and are on your way from ***Zero to Coding***!