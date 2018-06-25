import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  //encapsulation: ViewEncapsulation.None,
  templateUrl: 'viewencapsulation.component.html',
    //template: `
    //  <div class="test">
    //    <div>
    //      Title: {{ title }}
    //    </div>
    //    <input type="text" [(ngModel)]="title">
    //  </div>
    //`
})
export class ViewencapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title = 'Hello!';

}
