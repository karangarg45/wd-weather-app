import { WeatherService } from './weather.service';
import { WeatherDetailsComponent } from './weather-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather.component';


@NgModule({
    imports: [CommonModule, HttpModule],
    exports: [WeatherComponent],
    declarations: [WeatherComponent, WeatherDetailsComponent],
    providers: [WeatherService],
})
export class WeatherModule { }
