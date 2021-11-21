import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityCardComponent } from './city-card/city-card.component';
import { ClockComponent } from './clock/clock.component';
import { DateComponent } from './date/date.component';

@NgModule({
	declarations: [AppComponent, CityCardComponent, ClockComponent, DateComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
