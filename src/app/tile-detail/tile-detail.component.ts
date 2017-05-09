import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import { ActivatedRoute, Params } from '@angular/router';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  tileCoordinate: string;
  tile: Tile[];

  constructor(private tileService: TilesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.tileCoordinate = urlParameters ['id'];
    });
    this.tileService.getThisTile(this.tileCoordinate).subscribe((tile)=>{
      this.tile = tile;
      console.log(this.tile);
    });
  }

}
