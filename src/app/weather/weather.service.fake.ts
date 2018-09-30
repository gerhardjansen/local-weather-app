import {Observable, of} from 'rxjs'

import { ICurrentWeather } from "../icurrent-weather";
import { IWeatherService } from "./weather.service";


export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: "Gelsenkirchen",
    country: "DE",
    date: 1498789600,
    image: "",
    temperature: 280.32,
    description: "light intensity drizzle",
  }

  public getCurrentWeather(city: string, country: string ): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
