import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit {
  tiles: Tile[];
  constructor(private tileService: TilesService, private router: Router) { }

  ngOnInit() {
    this.tileService.getAllTiles().subscribe((tiles) => {
      this.tiles=tiles;
      });
  }

  goHere(tile: Tile) {
    this.router.navigate(['tiles', tile.xyString]);
  }

}
