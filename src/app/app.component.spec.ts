import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {WeatherService} from "./weather/weather.service";
import {WeatherServiceFake} from "./weather/weather.service.fake";
import {MaterialModule} from "./material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'

import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule} from "@angular/material";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, NoopAnimationsModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
      declarations: [
        AppComponent, CurrentWeatherComponent
      ],
      providers: [ {provide: WeatherService, useClass: WeatherServiceFake }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'local-weather-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('LocalCast Weather');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather!')
  }));
});
