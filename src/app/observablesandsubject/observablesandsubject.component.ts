import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-observablesandsubject',
  templateUrl: './observablesandsubject.component.html',
  styleUrls: ['./observablesandsubject.component.css']
})
export class ObservablesandsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Regular Subject

    let subject = new Subject();


    subject.next("c"); // Subscription got c
    subject.next("d"); // Subscription got d

    subject.subscribe((value) => {

      console.log("Subscription got", value); // Subscription wont get
                                              // anything at this point
    });


    subject.next("b");

  }


}
