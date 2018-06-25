import { Component, NgModule, OnInit, VERSION, Pipe, PipeTransform } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FabricTypePipe } from './fabric-type.pipe';
import { CountColorPipe } from './count-color.pipe';

@Component({
  selector: 'app-d3-component',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
    <div class="common-div">
    {{fabricTypes|json}}
    {{fabricColours|json}}
    </div>


    <div class="common-div" *ngFor="let fabricType of fabricTypes">
      <input type="checkbox" [(ngModel)]="fabricType.selected" /> {{fabricType.name}}
    </div>
    <div class="common-div" *ngFor="let colour of fabricColours">
      <input type="checkbox" [(ngModel)]="colour.selected" />{{fabrics| fabricType: selectedFabricTypes |countColour: colour.name}} {{colour.name}}
    </div>


    <div *ngFor="let fabric of fabrics | fabricType: selectedFabricTypes">{{fabric.name}}</div>

  `,
  styleUrls: ['./d3-component.component.css']
})
export class D3ComponentComponent implements OnInit {
  name:string;
  fabricTypes = [
    {name: 'weave', selected: true},    {name: 'leather', selected: true},    {name: 'phur', selected: true}
  ];

  fabricColours = [
    {name: 'green', selected: true},    {name: 'black', selected: true},    {name: 'red', selected: true}
  ];

  fabrics = [
    {name: 'scottish tartan', type: 'weave', colour: 'red'},
    {name: 'irish tartan', type: 'weave', colour: 'green'},
    {name: 'bike jacket', type: 'leather', colour: 'black'},
    {name: 'something else', type: 'phur', colour: 'black'},
  ];



  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }

  ngOnInit() {
  }

  get selectedFabricTypes() {
    return this.fabricTypes.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }



}
