import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import {WeatherService} from "../weather/weather.service";
import {WeatherServiceFake} from "../weather/weather.service.fake";
import {MaterialModule} from "../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import localeDe from '@angular/common/locales/de';


describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [ {provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [ MaterialModule, NoopAnimationsModule],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
