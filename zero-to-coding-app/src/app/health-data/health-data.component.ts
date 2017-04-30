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
