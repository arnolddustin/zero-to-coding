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
