import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityCardComponent } from './city-card/city-card.component';
import { ClockComponent } from './clock/clock.component';
import { DateComponent } from './date/date.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
	declarations: [AppComponent, CityCardComponent, ClockComponent, DateComponent, ForecastComponent, HeaderComponent, LoaderComponent, NotFoundComponent, SearchBarComponent, WeatherComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
