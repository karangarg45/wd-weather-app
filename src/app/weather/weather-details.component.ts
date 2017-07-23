import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from './weather-data.model';

@Component({
    moduleId: module.id,
    selector: 'wd-weather-details',
    templateUrl: 'weather-details.component.html',
    styles: ['.list-group-item:first-child,.list-group-item:last-child {border-radius: 0px !important}']
})

export class WeatherDetailsComponent implements OnInit {
    @Input() weatherData: WeatherData;
    constructor() { }

    ngOnInit() { }
}