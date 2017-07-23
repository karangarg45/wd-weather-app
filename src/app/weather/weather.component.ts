import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import * as moment from 'moment';
import { WeatherData } from './weather-data.model';

@Component({
    moduleId: module.id,
    selector: 'wd-weather',
    templateUrl: 'weather.component.html'
})

export class WeatherComponent implements OnInit {
    city: string;
    weatherResults: WeatherData[];
    today: string;
    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.today = moment().format('ddd, DD/MM/YYYY');
        this.weatherService.getWeatherDetails()
            .subscribe((data) => {
                this.city = data.city.name;
                this.weatherResults = data.list.map((item) => new WeatherData(this.getDay(item.dt), item.humidity,
                    item.pressure, item.temp.min, item.speed, item.weather[0].main));
            },
            (err) => console.log(err));
    }

    getDay(date) {
        return moment(date * 1000).format('dddd');
    }
}
