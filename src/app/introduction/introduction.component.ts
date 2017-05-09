import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import {TileListComponent} from '../tile-list/tile-list.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  tiles: Tile[];
  constructor(private tileService: TilesService) { }

  ngOnInit() {
    this.tileService.getAllTiles().subscribe((tiles) => {
      this.tiles=tiles;
      
    });

  }

}
