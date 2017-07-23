import { WeatherData } from './weather-data.model';
import { WeatherService } from './weather.service';
import { WeatherDetailsComponent } from './weather-details.component';
import { Observable } from 'rxjs/Rx';
import { TestBed, async } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import * as moment from 'moment';

const mockWeatherData = {
    'city': {
        'id': 524901,
        'name': 'Moscow',
        'coord': {
            'lon': 37.6156,
            'lat': 55.7522
        },
        'country': 'RU',
        'population': 0
    },
    'cod': '200',
    'message': 0.3837874,
    'cnt': 7,
    'list': [{
        'dt': 1500714000,
        'temp': {
            'day': 291.65,
            'min': 288.75,
            'max': 291.65,
            'night': 288.75,
            'eve': 291.14,
            'morn': 291.65
        },
        'pressure': 1008.87,
        'humidity': 70,
        'weather': [{
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
        }],
        'speed': 1.8,
        'deg': 275,
        'clouds': 92
    }]
};


class WeatherServiceSpy {
    getWeatherDetails = jasmine.createSpy('getWeatherDetails').and.callFake(
        () => Observable.of(mockWeatherData)
    );
}

describe('WeatherComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WeatherComponent,
                WeatherDetailsComponent
            ],
            providers: [{
                provide: WeatherService, useClass: WeatherServiceSpy
            }]
        }).compileComponents();
    }));

    it('should create the weatherComponent', async(() => {
        const fixture = TestBed.createComponent(WeatherComponent);
        const comp: WeatherComponent = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));

    it('should render default city in h1 tag', async(() => {
        const fixture = TestBed.createComponent(WeatherComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Moscow');
    }));

    it('should show todays date in h2 tag', async(() => {
        const fixture = TestBed.createComponent(WeatherComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain(moment().format('ddd, DD/MM/YYYY'));
    }));

    it('should save weather data in weatherResults', async(() => {
        const fixture = TestBed.createComponent(WeatherComponent);
        const comp: WeatherComponent = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const expectedResult: WeatherData[] = [new WeatherData('Saturday', 70, 1008.87, 288.75, 1.8, 'Clouds')];
        expect(comp.weatherResults).toEqual(expectedResult);
    }));
});
