import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {D3RealComponentRouting} from './d3-chart-real.routing';
import { D3Service, D3_DIRECTIVES } from './d3';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { D3RealComponent } from './d3-real.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    D3RealComponentRouting
  ],
  declarations: [D3RealComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES],
  providers: []
})
export class D3ChartRealModule { }
