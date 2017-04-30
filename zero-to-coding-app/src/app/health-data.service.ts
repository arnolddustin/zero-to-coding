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
