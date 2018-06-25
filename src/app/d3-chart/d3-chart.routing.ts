import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {D3ComponentComponent} from './d3-component/d3-component.component'

const routes: Routes = [
  {
    path: '',
    component: D3ComponentComponent
  }
]

export const D3ComponentRouting = RouterModule.forChild(routes);
