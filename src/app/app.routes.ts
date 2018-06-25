import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {AppComponent} from "./app.component";
import {D3ChartModule} from "./d3-chart/d3-chart.module";
import {D3ChartRealModule} from "./d3-chart-real/d3-chart-real.module";

import {ViewencapsulationComponent} from "./viewencapsulation/viewencapsulation.component";
import {changeDetectionApp1} from "./change-detection1";
import {ObservablesandsubjectComponent} from "./observablesandsubject/observablesandsubject.component"

export const routes: Routes = [
  { path: '', component: changeDetectionApp1 },
  { path: 'home', component: AppComponent },
  { path: 'viewencapsulation', component: ViewencapsulationComponent },
  { path: 'changeDetectionApp1', component: changeDetectionApp1 },
  { path: 'observableSubject', component: ObservablesandsubjectComponent },
  { path: 'd3Chart', loadChildren: 'app/d3-chart/d3-chart.module#D3ChartModule'},
  { path: 'd3ChartReal', loadChildren: 'app/d3-chart-real/d3-chart-real.module#D3ChartRealModule'}
];

//changeDetectionApp1

// @NOTE you can bootstrap routes like this if you want to enable debugging
// export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });
export const routing = RouterModule.forRoot(routes);
