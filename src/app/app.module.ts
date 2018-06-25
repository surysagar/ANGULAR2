import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routes';
import { AppComponent } from './app.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import {changeDetectionApp1} from "./change-detection1";
import {AComponent} from "./change-detection1";
import { D3Service} from './d3-chart-real/d3';

import { ObservablesandsubjectComponent } from './observablesandsubject/observablesandsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewencapsulationComponent,
    changeDetectionApp1,
    AComponent,
    ObservablesandsubjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }






