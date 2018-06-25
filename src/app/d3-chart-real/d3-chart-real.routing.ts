import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {D3RealComponent} from './d3-real.component'

const routes: Routes = [
  {
    path: '',
    component: D3RealComponent
  }
]

export const D3RealComponentRouting = RouterModule.forChild(routes);
