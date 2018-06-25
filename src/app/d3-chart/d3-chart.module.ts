import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { D3ComponentComponent } from './d3-component/d3-component.component';
import { FabricTypePipe } from './d3-component/fabric-type.pipe';
import { CountColorPipe } from './d3-component/count-color.pipe';
import {D3ComponentRouting} from './d3-chart.routing'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    D3ComponentRouting
  ],
  declarations: [D3ComponentComponent, FabricTypePipe, CountColorPipe],
  providers: []
})
export class D3ChartModule { }
