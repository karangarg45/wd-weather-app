import { APICONST } from './../app-constants/url.constants';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class WeatherService {
    weatherApi = APICONST.weatherAPI;
    constructor(private http: Http) { }

    getWeatherDetails() {
        return this.http.get(this.weatherApi)
            .map((res) => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.log(error);
        return Observable.throw(error);
    }
}