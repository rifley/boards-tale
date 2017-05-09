import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-player-start',
  templateUrl: './new-player-start.component.html',
  styleUrls: ['./new-player-start.component.css']
})
export class NewPlayerStartComponent implements OnInit {

  title: string = "A Boards Tale"
  constructor() { }

  ngOnInit() {
  }

}
