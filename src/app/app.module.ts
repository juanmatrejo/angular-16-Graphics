import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinesComponent } from './components/lines/lines.component';

import { BarsComponent } from './components/bars/bars.component';
import { DataComponent } from './components/data/data.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';
import { PolarComponent } from './components/polar/polar.component';

@NgModule({
	declarations: [
		AppComponent,
		LinesComponent,
		BarsComponent,
		DataComponent,
		DonutComponent,
  RadarComponent,
  PolarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
