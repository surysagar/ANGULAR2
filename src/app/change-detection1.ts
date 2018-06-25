//our root app component
import {Component, NgModule, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef, Input, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'a-comp',
  template: `<h2>The name is: {{o.name}}</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnChanges {
  @Input() o;
  id;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges) {
    //if (changes.o) {
      console.log(changes.o);
    //}
  }
  ngDoCheck() {
    if (this.id === this.o.id) {
      this.cd.markForCheck();
      this.id = this.o.id;
      console.log(this.o.name, 'ddd');
    }
  }
}

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <h1>parent name {{o.name}}</h1>
    <input [(ngModel)] = 'o.name' />
    <input type="text"  #titleInput>
    <button type="submit" (click) = 'addTodo(titleInput.value)'>Add</button>
    <a-comp [o]="o"></a-comp>
  `,
})
export class changeDetectionApp1  {
  name = `Angular! v${VERSION.full}`;
  o = {id: 1, name: 'John'};

  addTodo(inputVal: string) {
    this.o.name = inputVal;
  }



  ngOnInit() {
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000);
  }
}
