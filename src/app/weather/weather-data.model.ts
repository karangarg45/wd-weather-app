export class WeatherData {
    wt_date: string;
    wt_humidity: number;
    wt_pressure: number;
    wt_temp: number;
    wt_wind_speed: number;
    wt_description: string;
    constructor(date, humidity, pressure, temp, speed, desc) {
        this.wt_date = date;
        this.wt_humidity = humidity;
        this.wt_pressure = pressure;
        this.wt_temp = temp;
        this.wt_wind_speed = speed;
        this.wt_description = desc;
    }
}