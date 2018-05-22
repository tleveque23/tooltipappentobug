import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

export interface Application {

  applicationName: string,
  applicationId: number,
  applicationStatus: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public applications: Application[];
  public selectedApplication: Application;

  cars: SelectItem[];
  selectedCar: string;

  constructor() {
    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'},
    ];

    this.applications = [
      { applicationName: 'app1', applicationStatus: 'success', applicationId: 1},
      { applicationName: 'app-2', applicationStatus: 'success', applicationId: 1},
      { applicationName: 'app-3', applicationStatus: 'success', applicationId: 1},
      { applicationName: 'app-4', applicationStatus: 'success', applicationId: 1},
    ]
  }
}
