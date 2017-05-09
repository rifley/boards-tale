import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private tileService: TilesService) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('newPlayer')));
  }

}
