import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';



@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('newPlayer')));
  }

}
